import List from "../components/List";

const SKILLS = [
  {
    number: "01",
    title: "HTML و CSS",
    category: "FOUNDATION",
    icon: "/icons/html-css.png",
  },
  {
    number: "02",
    title: "JavaScript",
    category: "LANGUAGE",
    icon: "/icons/javascript.png",
  },
  {
    number: "03",
    title: "React",
    category: "FRONTEND",
    icon: "/icons/react.png",
  },
  {
    number: "04",
    title: "Next.js",
    category: "FRAMEWORK",
    icon: "/icons/nextjs.png",
  },
  {
    number: "05",
    title: "Tailwind CSS",
    category: "STYLING",
    icon: "/icons/tailwind.png",
  },
  {
    number: "06",
    title: "State Management",
    category: "ARCHITECTURE",
    icon: "/icons/state.png",
  },
  {
    number: "07",
    title: "PostgreSQL",
    category: "DATABASE",
    icon: "/icons/postgresql.png",
  },
  {
    number: "08",
    title: "Git و GitHub",
    category: "WORKFLOW",
    icon: "/icons/git.png",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      dir="rtl"
      data-skills-section
      className="
        relative
        h-screen
        h-[100dvh]
        w-full
        overflow-hidden
        bg-[#080808]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Glow */}
        <div
          className="
            absolute
            left-[-10%]
            top-[15%]
            h-[220px]
            w-[220px]
            rounded-full
            bg-white/[0.018]
            blur-[100px]
            sm:left-[5%]
            sm:h-[350px]
            sm:w-[350px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
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
            bg-[radial-gradient(circle_at_center,transparent_0%,#080808_85%)]
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
          px-5
          pb-16
          pt-5
          sm:px-6
          sm:py-8
          lg:px-10
          lg:pb-10
          lg:pt-24
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <header
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
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-white/30
              sm:gap-3
              sm:text-[10px]
              sm:tracking-[0.25em]
            "
          >
            <span className="h-px w-5 bg-white/30 sm:w-8" />
            Skills
          </div>

          <span
            dir="ltr"
            className="
              text-[8px]
              tracking-[0.2em]
              text-white/20
              sm:text-[10px]
            "
          >
            04 / 06
          </span>
        </header>

        {/* =================================================
            CONTENT
        ================================================== */}

        <main
          className="
            flex
            min-h-0
            flex-1
            flex-col
            justify-center
            lg:grid
            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* ===============================================
              TITLE
          =============================================== */}

          <div className="relative shrink-0">
            {/* Giant background number */}

            <span
              dir="ltr"
              className="
                pointer-events-none
                absolute
                -right-2
                -top-8
                select-none
                text-[7rem]
                font-light
                leading-none
                tracking-[-0.08em]
                text-white/[0.025]
                sm:-top-12
                sm:text-[10rem]
                lg:-right-8
                lg:-top-20
                lg:text-[17rem]
              "
            >
              04
            </span>

            <div className="relative">
              <h2
                className="
                  text-[4.5rem]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.07em]
                  sm:text-7xl
                  lg:text-[7.5rem]
                "
              >
                مهارت‌ها
              </h2>

              <div
                className="
                  mt-4
                  h-px
                  w-12
                  bg-white/30
                  sm:mt-6
                  sm:w-20
                  lg:mt-9
                  lg:w-24
                "
              />

              <p
                className="
                  mt-4
                  max-w-sm
                  text-[10px]
                  leading-5
                  text-white/35
                  sm:mt-5
                  sm:text-sm
                  sm:leading-7
                  lg:mt-6
                  lg:text-base
                "
              >
                ابزارهایی که برای ساخت رابط‌های کاربری مدرن، سریع و قابل توسعه
                استفاده می‌کنم.
              </p>
            </div>
          </div>

          {/* ===============================================
              SKILLS GRID
          =============================================== */}

          <div
            className="
              mt-6
              grid
              min-h-0
              grid-cols-2
              gap-2
              sm:mt-8
              sm:gap-3
              lg:mt-0
              lg:grid-cols-2
              lg:gap-4
            "
          >
            {SKILLS.map((skill) => (
              <List key={skill.number} skill={skill} />
            ))}
          </div>
        </main>

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
          <span
            dir="ltr"
            className="
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-white/25
              sm:text-[10px]
              sm:tracking-[0.3em]
            "
          >
            Technical stack
          </span>

          <span
            dir="ltr"
            className="
              text-[8px]
              tracking-[0.2em]
              text-white/20
              sm:text-[10px]
            "
          >
            08 / 08
          </span>
        </footer>
      </div>

      {/* Corner decoration */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-14
          w-14
          border-l
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

/* =========================================================
   SKILL CARD
========================================================= */

export default Skills;
