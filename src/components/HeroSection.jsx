import { ArrowBigDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
        <h1 className="text-xl md:text-5xl font-bold tracking-tight">
  <span className="opacity-0 animate-fade-in">Hi, I'm </span>
  <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
    Nusrat{" "}
  </span>
  <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
    Jahan{" "}
  </span>
  <span className="text-primary opacity-0 animate-fade-in-delay-2">
    Trisha{" "}
  </span>
</h1>

<h2 className="text-lg md:text-2xl font-semibold text-primary opacity-0 animate-fade-in-delay-2">
  Frontend Developer • AI Automation Specialist • GHL Expert
</h2>

<p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
I help businesses grow by combining modern web development with AI-powered automation. From creating fast, responsive, and user-focused websites to building intelligent workflows, CRM systems, lead capture funnels, and GoHighLevel automations, I deliver solutions that enhance customer experiences, save time, and drive measurable results.
</p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowBigDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
  