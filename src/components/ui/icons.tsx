import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 5L35 20L20 35L5 20L20 5Z"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      <path
        d="M20 10L30 20L20 30L10 20L20 10Z"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
      />
    </svg>
  );
}
