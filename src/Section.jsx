import { forwardRef } from "react";

const BG = [
  "bg-neutral-900",
  "bg-neutral-800",
  "bg-stone-900",
  "bg-zinc-900",
  "bg-neutral-950",
];

const Section = forwardRef(function Section(
  { id, label, index, children },
  ref
) {
  return (
    <section
      id={id}
      ref={ref}
      className={`relative flex h-[100svh] flex-col items-center justify-center gap-3 border-t border-white/10 text-neutral-50 ${
        BG[index % BG.length]
      }`}
    >
      <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </span>
      {/* per-section content goes here, passed as children from App */}
      {children}
    </section>
  );
});

export default Section;
