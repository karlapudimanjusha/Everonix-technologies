interface SectionDividerProps {
  position?: 'top' | 'bottom';
  color?: string;
  className?: string;
}

export function WaveDivider({
  position = 'bottom',
  color = '#f9fafb',
  className = '',
}: SectionDividerProps) {
  if (position === 'top') {
    return (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-24 md:h-32 ${className}`}
        style={{ fill: color }}
      >
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"></path>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`w-full h-24 md:h-32 ${className}`}
      style={{ fill: color }}
    >
      <path d="M0,0 Q300,50 600,0 T1200,0 L1200,120 L0,120 Z"></path>
    </svg>
  );
}

export function DiagonalDivider({
  color = '#f9fafb',
  className = '',
}: Omit<SectionDividerProps, 'position'>) {
  return (
    <svg
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      className={`w-full h-20 md:h-24 ${className}`}
      style={{ fill: color }}
    >
      <polygon points="0,0 1200,0 1200,100 0,80"></polygon>
    </svg>
  );
}
