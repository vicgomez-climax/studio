import { cn } from '@/lib/utils';

export function AutomatedLogicLogo({ className }: { className?: string }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 541 78.4"
      className={cn('h-10', className)}
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    >
      <g>
        <path
          style={{
            fill: '#E31837',
          }}
          d="M39.2 78.4 0 39.2 39.2 0l39.2 39.2-39.2 39.2zm0-51c-6.5 0-11.8 5.3-11.8 11.8s5.3 11.8 11.8 11.8 11.8-5.3 11.8-11.8-5.3-11.8-11.8-11.8z"
        />
        <g
          style={{
            fillRule: 'nonzero',
          }}
        >
          <path d="M189.5 61.4h-16.1V16.9h16.1v44.5zM157.9 16.9v16h-34.7v12.3h30.1v16.1h-30.1v16.2h36.7V78H93V.9h64.9v16zM286.2 61.4h-16.1V16.9h16.1v44.5z" />
          <path d="M255.4 16.9v16h-34.7v12.3h30.1v16.1h-30.1v16.2h36.7V78h-66.7V.9h64.9v16zM375.4 61.4h-16.1V16.9h16.1v44.5zM343.8 16.9v16h-34.7v12.3h30.1v16.1h-30.1v16.2h36.7V78h-66.7V.9h64.9v16zM464.6 61.4h-16.1V16.9h16.1v44.5zM433 16.9v16h-34.7v12.3h30.1v16.1h-30.1v16.2h36.7V78h-66.7V.9h64.9v16zM541 61.4h-16.1V16.9h16.1v44.5zM509.4 16.9v16h-34.7v12.3h30.1v16.1h-30.1v16.2h36.7V78h-66.7V.9h64.9v16z" />
        </g>
      </g>
    </svg>
  );
}
