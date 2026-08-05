import logoUrl from '@assets/logo-13-tech.png';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="13 Tech"
      width={827}
      height={284}
      className={`h-auto ${className}`}
      data-testid="logo-full"
    />
  );
}
