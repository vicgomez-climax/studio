import { cn } from '@/lib/utils';

export function NEBBLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn('h-16', className)}
    >
      <circle cx="50" cy="50" r="48" fill="#0033A0" />
      <path
        d="M20 65 L20 35 L35 35 Q50 35 50 50 Q50 65 35 65 Z"
        fill="white"
      />
      <path d="M50 35 L50 65 L65 65 L65 35 Z" fill="white" />
      <path
        d="M80 65 L80 35 L65 35 Q50 35 50 50 Q50 65 65 65 Z"
        fill="white"
        transform="rotate(180 65 50)"
      />
      <text
        x="50"
        y="55"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill="#0033A0"
        textAnchor="middle"
      >
        NEBB
      </text>
    </svg>
  );
}
