export function Avatar({ size = 56 }: { size?: number }) {
  return (
    <div
      className="rounded-full bg-foreground text-background flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
      aria-label="baesisi avatar"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-1/2 h-1/2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
        <path d="M 8.5 15 Q 12 17.5 15.5 15" />
      </svg>
    </div>
  );
}
