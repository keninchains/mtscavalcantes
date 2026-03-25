import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Contact form — schema & component
// ---------------------------------------------------------------------------

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres.")
    .max(80, "Nome muito longo."),
  email: z.string().email("Endereço de e-mail inválido."),
  subject: z
    .string()
    .min(3, "Assunto deve ter pelo menos 3 caracteres.")
    .max(120, "Assunto muito longo."),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres.")
    .max(2000, "Mensagem muito longa."),
});

type ContactFields = z.infer<typeof contactSchema>;

type SubmitState = "idle" | "loading" | "success" | "error";

// Reusable labelled field wrapper
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-mist-300">{label}</label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "rounded-xl border border-mist-800 bg-mist-900 px-4 py-3 text-mist-50 placeholder-mist-600 " +
  "outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 " +
  "aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-500/30";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFields>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactFields) => {
    setSubmitState("loading");
    try {
      // Replace this with your actual endpoint / email service (e.g. Resend, Formspree, EmailJS).
      // Simulated delay so UX feedback is visible.
      await new Promise<void>((resolve) => setTimeout(resolve, 1200));

      // Example with fetch:
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error("Server error");

      console.log("Contact form payload:", data); // remove after wiring up
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  };

  // Reset feedback state when the user starts typing again after an error
  const handleInteraction = () => {
    if (submitState === "error") setSubmitState("idle");
  };

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-2xl rounded-2xl border border-mist-700 bg-mist-900 p-10 transition hover:border-violet-500">
        {submitState === "success" ? (
          // ---- Success state ----
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="flex size-16 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-semibold text-mist-50">
              Mensagem enviada!
            </h3>
            <p className="text-mist-300">
              Obrigado pelo contato. Responderei em breve.
            </p>
            <button
              type="button"
              onClick={() => setSubmitState("idle")}
              className="mt-4 rounded-xl border border-mist-700 px-6 py-2 text-sm text-mist-300 transition hover:border-violet-500 hover:text-mist-50"
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          // ---- Form ----
          <form
            onSubmit={handleSubmit(onSubmit)}
            onChange={handleInteraction}
            noValidate
            className="flex flex-col gap-6"
          >
            {/* Name + Email — side by side on wider viewports */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Nome" error={errors.name?.message}>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Seu nome"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={inputBase}
                />
              </Field>

              <Field label="E-mail" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className={inputBase}
                />
              </Field>
            </div>

            <Field label="Assunto" error={errors.subject?.message}>
              <input
                {...register("subject")}
                type="text"
                placeholder="Sobre o que é?"
                aria-invalid={!!errors.subject}
                className={inputBase}
              />
            </Field>

            <Field label="Mensagem" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={6}
                placeholder="Escreva sua mensagem…"
                aria-invalid={!!errors.message}
                className={`${inputBase} resize-none`}
              />
            </Field>

            {/* Server-level error banner */}
            {submitState === "error" && (
              <p
                role="alert"
                className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
              >
                Ocorreu um erro ao enviar a mensagem. Tente novamente.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || submitState === "loading"}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-violet-500/50 bg-violet-600/20 px-6 py-3 font-medium text-violet-300 transition hover:border-violet-400 hover:bg-violet-600/30 hover:text-violet-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitState === "loading" ? (
                <>
                  <span className="inline-block size-4 animate-spin rounded-full border-2 border-violet-400 border-t-transparent" />
                  Enviando…
                </>
              ) : (
                "Enviar mensagem"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
