"use client";

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
    // Ejemplo usando Formspree (puedes usar otro servicio similar)
    const res = await fetch("https://formspree.io/f/{tu_form_id}", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: JSON.stringify(validatedFields.data),
    });

    if (!res.ok) {
      throw new Error("No se pudo enviar el mensaje.");
    }

    return {
      success: true,
      message: 'Mensaje enviado con éxito.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Ocurrió un error al enviar el mensaje.',
    };
  }
}