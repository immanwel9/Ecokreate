const logos = ["Acme Co", "Globex", "Initech", "Umbrella", "Wayne Corp"];

const LogoMarquee = () => {
  return (
    <section className="py-12 overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-8">
        Trusted by industry leaders
      </p>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="mx-12 flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity"
            >
              <span className="text-xl font-bold text-foreground tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
