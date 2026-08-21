"use client";

import { useState } from "react";

export function CopyEmailButton({
  email,
  label,
  copiedLabel,
}: {
  email: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — no-op, the mailto link elsewhere still works
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="text-foreground/70 transition-colors hover:text-foreground"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
