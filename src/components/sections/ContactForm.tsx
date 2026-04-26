"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { social } from "@/lib/data";

const budgets = ["< $5k", "$5k — $15k", "$15k — $40k", "$40k+", "Equity / mission"];
const services = [
  "Product engineering",
  "Generative AI integration",
  "Motion design",
  "Audit / consulting",
];

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sent">("idle");

  return (
    <form
      className="rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)] p-6 md:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent(
          `[Delowar.dev] ${data.get("subject") || "New brief"}`
        );
        const body = encodeURIComponent(
          [
            `Name: ${data.get("name")}`,
            `Email: ${data.get("email")}`,
            `Service: ${data.get("service")}`,
            `Budget: ${data.get("budget")}`,
            `Timeline: ${data.get("timeline")}`,
            "",
            String(data.get("message") || ""),
          ].join("\n")
        );
        window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
        setState("sent");
      }}
    >
      <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
        Project brief
      </div>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
        Tell me about your project.
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field name="name" label="Your name" placeholder="Jane Designer" required />
        <Field name="email" type="email" label="Email" placeholder="hello@studio.com" required />
        <Field name="subject" label="Subject" placeholder="A short title for your project" />
        <Select name="service" label="Service" options={services} />
        <Select name="budget" label="Budget" options={budgets} />
        <Field name="timeline" label="Timeline" placeholder="Q3 2026 / 6 weeks / flexible" />
      </div>

      <div className="mt-6">
        <label className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Brief
        </label>
        <textarea
          name="message"
          rows={6}
          required
          className="mt-2 w-full resize-none rounded-md border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none"
          placeholder="A paragraph or two on the problem, the audience, and the outcome you want."
        />
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-[var(--color-muted)]">
          Submitting opens your mail client with a pre-filled draft.
        </p>
        <MagneticButton
          type="submit"
          cursorLabel="Send"
          className="bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-white"
        >
          {state === "sent" ? "Sent ✓" : "Send brief ↗"}
        </MagneticButton>
      </div>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-3 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none"
      />
    </label>
  );
}

function Select({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full appearance-none rounded-md border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-3 text-sm text-[var(--color-fg)] focus:border-[var(--color-accent)] focus:outline-none"
      >
        <option value="" disabled>
          Choose…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
