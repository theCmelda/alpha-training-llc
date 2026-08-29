"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/lib/company";

type FieldErrors = Partial<
  Record<"name" | "email" | "subject" | "message", string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const companyName = String(formData.get("company") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {};

    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!subject) nextErrors.subject = "Please select a topic.";
    if (!message) {
      nextErrors.message = "Please tell us briefly what you would like to discuss.";
    } else if (message.length < 20) {
      nextErrors.message =
        "Please add a little more detail (at least 20 characters).";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const firstError = Object.keys(nextErrors)[0];
      const firstInvalid = event.currentTarget.elements.namedItem(
        firstError,
      ) as HTMLElement | null;
      firstInvalid?.focus();
      return;
    }

    const emailSubject = `Website inquiry: ${subject}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      companyName ? `Company: ${companyName}` : "",
      `Topic: ${subject}`,
      "",
      message,
    ]
      .filter((line, index) => line !== "" || index === 4)
      .join("\r\n");

    setStatus("opening");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      emailSubject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          error={errors.name}
          required
        >
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
            className="h-11 rounded-none bg-paper"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field
          id="email"
          label="Email"
          error={errors.email}
          required
        >
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="h-11 rounded-none bg-paper"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="company" label="Company">
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Optional"
            className="h-11 rounded-none bg-paper"
          />
        </Field>
        <Field
          id="subject"
          label="Topic"
          error={errors.subject}
          required
        >
          <select
            id="subject"
            name="subject"
            defaultValue=""
            required
            className="h-11 w-full rounded-none border border-input bg-paper px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="Consulting">Consulting</option>
            <option value="Digital training">Digital training</option>
            <option value="General question">General question</option>
          </select>
        </Field>
      </div>

      <Field
        id="message"
        label="What would you like to discuss?"
        error={errors.message}
        required
      >
        <Textarea
          id="message"
          name="message"
          rows={7}
          required
          placeholder="A short description of your current question, goal, or project."
          className="min-h-40 resize-y rounded-none bg-paper"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-help"}
        />
        {!errors.message && (
          <p id="message-help" className="mt-2 text-xs text-ink/65">
            Please do not include confidential account or financial information.
          </p>
        )}
      </Field>

      <div className="flex flex-col gap-4 border-t border-ink/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          className="h-12 rounded-none px-6 text-xs tracking-[0.08em] uppercase"
        >
          Open email message
          <Send className="ml-2 size-4" aria-hidden="true" />
        </Button>
        <p className="text-xs leading-5 text-ink/65">
          This form opens your email application.
          <br />
          Or{" "}
          <a
            className="text-link inline-flex items-center gap-1"
            href={`mailto:${company.email}`}
          >
            email us directly
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
          .
        </p>
      </div>

      <p className="min-h-5 text-sm text-ink/65" aria-live="polite">
        {status === "opening"
          ? "Your email application should open with a prepared message. If it does not, use the direct email link above."
          : ""}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required = false,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 text-xs font-semibold">
        {label}
        {required && <span className="ml-1 text-copper">*</span>}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
