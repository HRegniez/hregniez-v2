export const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <section className={`max-w-[1200px] w-full mx-auto ${className}`}>
        {children}
      </section>
    );
  }