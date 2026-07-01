export function Mural({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 mural-grid" />
      <div className="absolute top-10 -left-12 size-64 rounded-full border-[28px] border-orange/60 animate-mural-slow" />
      <div className="absolute bottom-16 -right-24 size-80 rounded-full border-[36px] border-teal/60 animate-mural-fast" />
      <div className="absolute top-1/2 left-1/3 w-24 h-56 bg-gold/40 rounded-t-full rotate-12" />
      <div className="absolute bottom-8 left-10 size-20 bg-terracotta/60 rounded-full" />
      <div className="absolute top-24 right-14 w-16 h-16 bg-orange/60 rotate-45" />
    </div>
  );
}
