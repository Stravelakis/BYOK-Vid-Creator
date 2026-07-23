interface Props {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}

/** A real toggle switch — not a button pretending to be one. */
export function Toggle({ label, checked, onChange }: Props) {
  return (
    <label className="flex items-center justify-between gap-3 cursor-pointer select-none">
      <span className="label-etched text-xs">{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-5 w-9 rounded-full transition-colors ${
          checked ? "bg-accent" : "bg-zinc-700"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-zinc-200 transition-transform ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}
