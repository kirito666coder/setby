type Props = {
  text: string;
  className?: string;
  color?: string;
  textColor?: string;
};

export default function Button({ text, className, color = '#FF5C32', textColor = 'white' }: Props) {
  return (
    <div className={className}>
      <div
        style={{ '--btn-bg': color, '--btn-text': textColor } as React.CSSProperties}
        className="group relative flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden bg-[var(--btn-bg)] px-5 py-3 text-[var(--btn-text)]"
      >
        {/* expanding circle */}
        <span
          className="pointer-events-none absolute top-1/2 left-1/2 aspect-square h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[var(--btn-text)] transition-transform duration-500 ease-out group-hover:scale-[30]"
          aria-hidden="true"
        />

        {/* content sits above the circle */}
        <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-[var(--btn-bg)]">
          {text}
        </span>

        <svg
          className="relative z-10 text-[var(--btn-text)] transition-colors duration-300 ease-out group-hover:text-[var(--btn-bg)]"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-0.15"
            y="0.15"
            width="23.7"
            height="23.7"
            transform="matrix(-1 0 0 1 23.7 0)"
            stroke="currentColor"
            strokeOpacity="0.21"
            strokeWidth="0.3"
          />
          <path
            d="M20.3672 11.4328L11.5125 3.74766C11.4445 3.68906 11.3578 3.65625 11.2664 3.65625H9.19219C9.01875 3.65625 8.93906 3.87187 9.07031 3.98438L17.2781 11.1094H3.5625C3.45937 11.1094 3.375 11.1937 3.375 11.2969V12.7031C3.375 12.8062 3.45937 12.8906 3.5625 12.8906H17.2758L9.06797 20.0156C8.93672 20.1305 9.01641 20.3438 9.18984 20.3438H11.3344C11.3789 20.3438 11.4234 20.3273 11.4562 20.2969L20.3672 12.5672C20.4483 12.4966 20.5134 12.4095 20.558 12.3116C20.6025 12.2138 20.6256 12.1075 20.6256 12C20.6256 11.8925 20.6025 11.7862 20.558 11.6884C20.5134 11.5905 20.4483 11.5034 20.3672 11.4328Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
