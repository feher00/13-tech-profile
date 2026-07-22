export function LogoMark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width={size} 
      height={size} 
      className={className}
      data-testid="logo-mark"
    >
      <defs>
        <filter id="cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* 13 Continuous Stroke */}
      <path 
        d="M 15 35 L 30 20 L 30 80 L 70 80 L 85 65 L 65 50 L 85 35 L 70 20 L 45 20" 
        fill="none" 
        stroke="#ffffff" 
        strokeWidth="10" 
        strokeLinecap="square" 
        strokeLinejoin="miter" 
      />
      
      {/* Upward Chevron embedded motif */}
      <path
        d="M 30 65 L 55 15 L 80 65"
        fill="none"
        stroke="#00f0ff"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        filter="url(#cyan-glow)"
      />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="logo-full">
      <LogoMark size={32} />
      <div className="flex flex-col justify-center translate-y-[1px]">
        <span className="font-display font-bold text-xl leading-none tracking-[0.18em] text-white uppercase">
          Tech
        </span>
      </div>
    </div>
  );
}
