declare namespace React {
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    netlify?: boolean;
    "netlify-honeypot"?: string;
  }
}
