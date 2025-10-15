'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  values: z.infer<typeof formSchema>
): Promise<FormState> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Error de validación. Por favor, revisa los campos.',
    };
  }

  try {
    // Here you would integrate with a service like Resend, Nodemailer,
    // or save to a database (e.g., Firebase Firestore).
    // For this example, we'll just log it and simulate a delay.
    console.log('New contact form submission:');
    console.log('Name:', validatedFields.data.name);
    console.log('Email:', validatedFields.data.email);
    console.log('Message:', validatedFields.data.message);

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Mensaje enviado con éxito.',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Ocurrió un error en el servidor. Inténtalo más tarde.',
    };
  }
}
