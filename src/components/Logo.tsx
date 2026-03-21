type Props = {
  className?: string;
};

export function Logo({ className }: Props) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_1_2)">
        <path d="M4 46L50 0V50L0 100V0H4V46Z" fill="currentColor" />
        <path d="M100 100H96V54L50 100V50L100 0V100Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="100" height="100" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
