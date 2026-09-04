import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STACK = ["React", "Next.js", "GSAP", "Three.js"];

const About = () => {
  const containerRef = useRef(null);

  // Optional: GSAP Animation Context
  useGSAP(
    () => {
      // Add your GSAP ScrollTrigger timeline here
      // e.g., gsap.from("[data-about-title]", { opacity: 0, y: 30, scrollTrigger: ... })
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      dir="rtl"
      data-about-section
      className="
        relative
        flex
        min-h-screen
        min-h-[100dvh]
        w-full
        items-center
        overflow-hidden
        bg-[#080808]
        py-12
        text-white
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND & AMBIENT EFFECTS
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Glow */}
        <div
          data-about-glow
          className="
            absolute
            right-[5%]
            top-[25%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-white/[0.025]
            blur-[100px]
            sm:right-[15%]
            sm:h-[400px]
            sm:w-[400px]
          "
        />

        {/* Grid Overlay */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:50px_50px]
            sm:[background-size:80px_80px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,#080808_82%)]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-7xl
          flex-col
          justify-between
          px-5
          sm:px-6
          lg:px-10
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}
        <header
          data-about-header
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-white/10
            pb-3
            sm:pb-5
          "
        >
          <div
            dir="ltr"
            className="
              flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/30
              sm:gap-3
              sm:text-[10px]
              sm:tracking-[0.25em]
            "
          >
            <span className="h-px w-5 bg-white/30 sm:w-8" />
            About me
          </div>

          <span
            dir="ltr"
            className="
              text-[9px]
              tracking-[0.2em]
              text-white/20
              sm:text-[10px]
              sm:tracking-[0.25em]
            "
          >
            02 / 04
          </span>
        </header>

        {/* =================================================
            CONTENT GRID
        ================================================== */}
        <div
          className="
            grid
            flex-1
            items-center
            gap-8
            py-8
            sm:gap-12
            sm:py-12
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-20
            lg:py-10
          "
        >
          {/* LEFT — TITLE & STATEMENT */}
          <div className="relative">
            {/* Background Big Number */}
            <div
              data-about-number
              dir="ltr"
              className="
                absolute
                -top-8
                right-0
                select-none
                text-[7rem]
                font-light
                leading-none
                tracking-[-0.08em]
                text-white/[0.025]
                sm:-top-12
                sm:text-[10rem]
                md:text-[12rem]
                lg:-top-20
                lg:text-[16rem]
              "
            >
              02
            </div>

            <h2
              data-about-title
              className="
                relative
                max-w-4xl
                text-4xl
                font-medium
                leading-[1]
                tracking-[-0.05em]
                sm:text-6xl
                md:text-7xl
                lg:text-[7.5rem]
              "
            >
              درباره
              <span className="text-white/20"> من </span>
            </h2>

            <div
              data-about-statement
              className="
                mt-6
                max-w-2xl
                sm:mt-8
                lg:mt-10
              "
            >
              <p
                className="
                  text-base
                  font-light
                  leading-relaxed
                  text-white/80
                  sm:text-xl
                  md:text-2xl
                  lg:text-3xl
                  lg:leading-[1.6]
                "
              >
                من یک متخصص تغذیه و توسعه‌دهنده فرانت‌اند هستم که در مرز میان
                علم، طراحی و تکنولوژی حرکت می‌کنم.
              </p>

              <div
                data-about-line
                className="
                  my-4
                  h-px
                  w-full
                  bg-white/10
                  sm:my-6
                "
              />

              <p
                className="
                  max-w-xl
                  text-xs
                  leading-6
                  text-white/40
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                "
              >
                مسیر حرفه‌ای من از علوم پزشکی شروع شد و به دنیای توسعه وب رسید.
                امروز تلاش می‌کنم نگاه تحلیلی و علمی خودم را با خلاقیت، طراحی و
                تکنولوژی‌های مدرن وب ترکیب کنم.
              </p>
            </div>
          </div>

          {/* RIGHT — METRICS & DETAILS */}
          <div
            data-about-info
            className="
              grid
              grid-cols-2
              gap-x-4
              gap-y-6
              border-t
              border-white/10
              pt-6
              sm:gap-x-8
              sm:gap-y-8
              lg:flex
              lg:flex-col
              lg:gap-8
              lg:border-s
              lg:border-t-0
              lg:border-white/10
              lg:pe-0
              lg:ps-12
              lg:pt-0
            "
          >
            {/* Education */}
            <article>
              <div
                className="
                  mb-1.5
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  sm:mb-2
                  sm:text-[10px]
                "
              >
                Education
              </div>
              <h3
                className="
                  text-sm
                  font-medium
                  leading-snug
                  text-white/85
                  sm:text-lg
                  md:text-xl
                "
              >
                کارشناسی ارشد علوم تغذیه
              </h3>
              <p className="mt-1 text-[11px] text-white/40 sm:text-sm">
                دانشگاه علوم پزشکی شهید بهشتی
              </p>
            </article>

            {/* Profession */}
            <article>
              <div
                className="
                  mb-1.5
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  sm:mb-2
                  sm:text-[10px]
                "
              >
                Profession
              </div>
              <h3
                className="
                  text-sm
                  font-medium
                  leading-snug
                  text-white/85
                  sm:text-lg
                  md:text-xl
                "
              >
                Registered Dietitian
              </h3>
              <p className="mt-1 text-[11px] leading-5 text-white/40 sm:text-sm">
                متخصص تغذیه و رژیم‌درمانی
              </p>
            </article>

            {/* Currently */}
            <article>
              <div
                className="
                  mb-1.5
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  sm:mb-2
                  sm:text-[10px]
                "
              >
                Currently
              </div>
              <h3
                className="
                  text-sm
                  font-medium
                  leading-snug
                  text-white/85
                  sm:text-lg
                  md:text-xl
                "
              >
                Frontend Development
              </h3>
              <p className="mt-1 text-[11px] leading-5 text-white/40 sm:text-sm">
                یادگیری و ساخت تجربه‌های تعاملی برای وب
              </p>
            </article>

            {/* Tech Stack */}
            <article>
              <div
                className="
                  mb-1.5
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  sm:mb-2
                  sm:text-[10px]
                "
              >
                Stack
              </div>
              <div dir="ltr" className="flex flex-wrap gap-1.5 sm:gap-2">
                {STACK.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.02]
                      px-2.5
                      py-1
                      text-[10px]
                      text-white/50
                      transition-colors
                      duration-300
                      hover:border-white/20
                      hover:text-white
                      sm:px-3
                      sm:py-1.5
                      sm:text-xs
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}
        <footer
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-t
            border-white/10
            pt-3
            sm:pt-5
          "
        >
          <div
            data-journey-label
            dir="ltr"
            className="
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-white/30
              sm:text-[10px]
              sm:tracking-[0.3em]
            "
          >
            The transition
          </div>

          <p
            className="
              max-w-[190px]
              text-left
              text-[9px]
              leading-4
              text-white/25
              sm:max-w-md
              sm:text-xs
              sm:leading-6
            "
          >
            From nutrition science to interactive web experiences.
          </p>
        </footer>
      </div>

      {/* =====================================================
          THREE.JS CANVAS CONTAINER & CORNERS
      ====================================================== */}
      <div
        data-about-three
        className="
          pointer-events-none
          absolute
          bottom-0
          start-0
          h-[180px]
          w-full
          opacity-40
          sm:h-[250px]
          lg:h-[300px]
          lg:opacity-60
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          start-0
          h-14
          w-14
          border-e
          border-t
          border-white/[0.08]
          sm:h-20
          sm:w-20
          lg:h-24
          lg:w-24
        "
      />
    </section>
  );
};

export default About;
