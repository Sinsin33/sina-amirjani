const techStack = ["React", "Next.js", "GSAP", "Three.js", "JavaScript"];
const Hero = () => {
  return (
    <div
      className=" 
    relative 
    z-10 
    mx-auto 
    flex 
    min-h-screen 
    w-full 
    max-w-7xl 
    flex-col 
    justify-center 
    px-6 
    pt-5 
    md:pt-24 
    pb-24 
    lg:px-10 
  "
    >
      {/* Intro */}
      <div
        dir="ltr"
        data-hero-item
        className=" 
      mb-8 
      flex 
      w-fit 
      items-center 
      gap-3 
      text-[10px] 
      font-medium 
      uppercase 
      tracking-[0.25em] 
      text-white/40 
    "
      >
        <span className="h-px w-8 bg-white/30" />

        <span>Creative Developer</span>

        <span className="text-white/20">/ 2026</span>
      </div>

      {/* Title */}
      <div className="relative">
        <h1
          dir="ltr"
          data-hero-title
          className=" 
        w-full 
        text-left 
        text-[16vw] 
        font-medium 
        leading-[0.8] 
        tracking-[-0.07em] 
        sm:text-[13vw] 
        md:text-[11vw] 
        lg:text-[9vw] 
      "
        >
          <span data-title-line className="block pb-3">
            Dietitian &
          </span>

          <span
            data-title-line
            className=" 
          block 
          pl-[8%] 
          text-white/20 
        "
          >
            Developer
          </span>
        </h1>

        <div
          data-hero-number
          className=" 
        absolute 
        right-0 
        top-1/2 
        hidden 
        -translate-y-1/2 
        text-[clamp(5rem,12vw,12rem)] 
        font-light 
        leading-none 
        tracking-[-0.08em] 
        text-white/[0.025] 
        lg:block 
      "
        >
          01
        </div>
      </div>

      {/* Bottom content */}
      <div
        className=" 
      mt-12 
      grid 
      gap-8 
      md:grid-cols-2 
      lg:mt-20 
    "
      >
        {/* Tech */}
        <div
          data-hero-stack
          className=" 
        order-2 
        flex 
        flex-col 
        justify-end 
        md:order-1 
      "
        >
          <div
            dir="ltr"
            className=" 
          mb-3 
          text-[10px] 
          uppercase 
          tracking-[0.3em] 
          text-white/30 
        "
          >
            Currently exploring
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                data-tech
                dir="ltr"
                className=" 
              rounded-full 
              border 
              border-white/10 
              bg-white/[0.02] 
              px-3 
              py-1.5 
              text-xs 
              text-white/50 
            "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div
          data-hero-description
          className=" 
        order-1 
        max-w-md 
        md:order-2 
        md:justify-self-end 
      "
        >
          <p
            dir="rtl"
            className=" 
          text-base 
          leading-relaxed 
          text-white/50 
          sm:text-lg 
        "
          >
            من یک متخصص تغذیه و یک برنامه‌نویس فرانت‌اند هستم.
          </p>
        </div>
      </div>

      {/* Scroll */}
      <div
        data-scroll-indicator
        dir="ltr"
        className=" 
      absolute 
      bottom-8 
      left-6 
      flex 
      items-center 
      gap-3 
      text-[10px] 
      uppercase 
      tracking-[0.3em] 
      text-white/30 
      lg:left-10 
    "
      >
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute left-0 top-0 h-1/2 w-full bg-white/60" />
        </span>
        Scroll to explore
      </div>

      {/* Location */}
      <div
        data-hero-location
        dir="ltr"
        className=" 
      absolute 
      bottom-8 
      right-6 
      hidden 
      text-[10px] 
      uppercase 
      tracking-[0.3em] 
      text-white/30 
      sm:block 
      lg:right-10 
    "
      >
        IRAN / TEHRAN
      </div>
    </div>
  );
};

export default Hero;
