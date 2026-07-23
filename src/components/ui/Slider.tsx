interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  /** Optional formatter for the value shown next to the label (e.g. "1.2x"). */
  format?: (v: number) => string;
}

/** A labeled range slider — the default for any continuous value. */
export function Slider({ label, value, min, max, step = 0.01, onChange, format }: Props) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1">
        <span className="label-etched text-xs">{label}</span>
        <span className="text-[10px] text-zinc-500">{format ? format(value) : value.toFixed(2)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-accent"
      />
    </label>
  );
}
