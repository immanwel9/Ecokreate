const testimonials = [
  {
    quote: "They're a true partner in our growth. Their work has been instrumental in helping us reach new heights, and we look forward to continuing our commercial relationship.",
    name: "Ryan Martinez",
    company: "EchoWave Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Their team took the time to truly understand our vision and delivered a brand identity that exceeded our expectations. The feedback from our customers has been positive.",
    name: "Michael Reynolds",
    company: "Urban Threads",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Impact brought our ideas to life in ways we never imagined. Their innovative approach and attention to detail made our project a huge success. Highly recommended.",
    name: "David Lawson",
    company: "GreenLeaf Organics",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "We came with a challenge, and they delivered beyond our expectations. Their team was not only creative but also strategic, helping us navigate the digital landscape with ease.",
    name: "Ricky Stokes",
    company: "Vista Ventures",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Trusted by industry leaders and loved by clients
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          At Impact, our clients' success stories are our greatest achievement. Hear what our partners have to say.
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll-left gap-6 w-max">
          {doubledTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[380px] flex-shrink-0 bg-card rounded-2xl border border-border p-6"
            >
              <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
