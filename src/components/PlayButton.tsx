type Props = {
  text?: string;
  onPlay?: () => void;
  className?: string;
};

export default function PlayButton({
  text = 'watch a show reel of our results',
  onPlay,
  className,
}: Props) {
  return (
    <div className={className}>
      <div className="group cursor relative h-[120px] w-[120px] cursor-pointer" onClick={onPlay}>
        <svg
          viewBox="0 0 220 220"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="absolute top-0 left-0 h-full w-full animate-[spin_14s_linear_infinite]"
        >
          <defs>
            <path
              id="ringPath"
              d="M 110,110 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
              fill="none"
            />
          </defs>
          <text fontSize="32.5" letterSpacing="2" fill="currentColor">
            <textPath href="#ringPath" xlinkHref="#ringPath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>

        <div className="absolute top-1/2 left-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="#FF5C32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
