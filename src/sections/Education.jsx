import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EDUCATION = [
  {
    number: "01",
    degree: "کارشناس تغذیه",
    field: "Nutrition Sciences",
    university: "دانشگاه علوم پزشکی کاشان",
    description:
      "شروع مسیر حرفه‌ای من در علوم تغذیه و شکل‌گیری پایه علمی و بالینی فعالیتم.",
  },
  {
    number: "02",
    degree: "کارشناس ارشد تغذیه بالینی",
    field: "Clinical Nutrition",
    university: "دانشگاه علوم پزشکی شهید بهشتی",
    description:
      "تمرکز بر تغذیه بالینی، ارزیابی وضعیت تغذیه‌ای و کاربرد دانش تغذیه در محیط درمان.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      dir="rtl"
      data-education-section
      className="
        relative
        flex
        h-screen
        h-[100dvh]
        w-full
        items-center
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
          data-education-glow
          className="
            absolute
            right-[0%]
            top-[20%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-white/[0.025]
            blur-[100px]
            sm:right-[10%]
            sm:h-[400px]
            sm:w-[400px]
          "
        />

        {/* Grid */}
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
          CONTAINER
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
          pt-4
          pb-20
          sm:px-6
          sm:py-8
          lg:px-10
          lg:pt-24
          lg:pb-10
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <div
          data-education-header
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-white/10
            pb-2
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
            Education
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
            03 / 06
          </span>
        </div>

        {/* =================================================
            MOBILE CONTENT
        ================================================== */}

        <div
          className="
            flex
            min-h-0
            flex-1
            flex-col
            justify-center
            py-2
            sm:py-8
            lg:hidden
          "
        >
          {/* Title */}

          <div className="relative">
            <div
              className="
                absolute
                -top-4
                right-0
                select-none
                text-[5rem]
                font-light
                leading-none
                tracking-[-0.08em]
                text-white/[0.025]
                sm:-top-10
                sm:text-[10rem]
              "
            >
              03
            </div>

            <h2
              data-education-title
              className="
                
               hidden md:block md:relative
                font-medium
                leading-tight
                tracking-[-0.04em]
                sm:text-7xl
              "
            >
              مسیر
              <span className="text-white/20"> تحصیل </span>
            </h2>

            <div
              className="
                mt-2
                h-px
                w-12
                bg-white/30
                sm:mt-7
                sm:w-24
              "
            />

            <p
              className="
                mt-2
                max-w-md
                text-[11px]
                leading-5
                text-white/40
                sm:mt-5
                sm:text-sm
                sm:leading-7
              "
            >
              مسیر من از علوم تغذیه آغاز شد و با تمرکز بر تغذیه بالینی در مقطع
              کارشناسی ارشد ادامه پیدا کرد.
            </p>
          </div>

          {/* Education Cards */}

          <div
            data-education-list
            className="
              mt-4
              flex
              flex-col
              gap-2.5
              sm:mt-10
              sm:gap-4
            "
          >
            {EDUCATION.map((item) => (
              <article
                key={item.number}
                data-education-item
                className="
                  group
                  rounded-sm
                  border
                  border-white/10
                  bg-white/[0.015]
                  p-3
                  transition-all
                  duration-500
                  hover:border-white/20
                  hover:bg-white/[0.025]
                  sm:p-5
                "
              >
                {/* Top */}

                <div
                  dir="ltr"
                  className="
                    mb-1
                    flex
                    items-center
                    gap-2
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                    sm:mb-3
                    sm:text-[9px]
                  "
                >
                  <span>{item.number}</span>

                  <span className="h-px w-4 bg-white/10" />

                  <span>{item.field}</span>
                </div>

                {/* Degree */}

                <h3
                  className="
                    text-sm
                    font-medium
                    leading-5
                    text-white/85
                    sm:text-xl
                  "
                >
                  {item.degree}
                </h3>

                {/* University */}

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    text-white/45
                    sm:text-sm
                  "
                >
                  {item.university}
                </p>

                {/* Description */}

                <p
                  className="
                    mt-1.5
                    text-[10px]
                    leading-4
                    text-white/25
                    sm:mt-3
                    sm:text-xs
                    sm:leading-6
                  "
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* =================================================
            DESKTOP CONTENT
        ================================================== */}

        <div
          className="
            hidden
            min-h-0
            flex-1
            items-center
            lg:grid
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-24
          "
        >
          {/* LEFT */}

          <div data-education-title-wrapper className="relative">
            <div
              data-education-number
              dir="ltr"
              className="
                absolute
                -top-20
                right-0
                select-none
                text-[17rem]
                font-light
                leading-none
                tracking-[-0.08em]
                text-white/[0.025]
              "
            >
              03
            </div>

            <div className="relative max-w-2xl">
              <h2
                data-education-title
                className="
                  text-[7.5rem]
                  font-medium
                  leading-[0.95]
                  tracking-[-0.06em]
                "
              >
                مسیر
                <span className="text-white/20"> تحصیل </span>
              </h2>

              <div
                data-education-line
                className="
                  mt-9
                  h-px
                  w-24
                  bg-white/30
                "
              />

              <p
                data-education-intro
                className="
                  mt-6
                  max-w-md
                  text-base
                  leading-8
                  text-white/40
                "
              >
                مسیر من از علوم تغذیه آغاز شد و با تمرکز بر تغذیه بالینی در مقطع
                کارشناسی ارشد ادامه پیدا کرد.
              </p>
            </div>
          </div>

          {/* RIGHT — TIMELINE */}

          <div
            data-education-list
            className="
              relative
              flex
              flex-col
            "
          >
            <div
              className="
                absolute
                right-[7px]
                top-4
                bottom-4
                w-px
                bg-white/10
              "
            />

            {EDUCATION.map((item) => (
              <article
                key={item.number}
                data-education-item
                className="
                  group
                  relative
                  pb-10
                  pr-10
                  last:pb-0
                "
              >
                {/* Dot */}

                <div
                  className="
                    absolute
                    right-0
                    top-1
                    flex
                    h-3
                    w-3
                    translate-x-[7px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-[#080808]
                    transition-all
                    duration-500
                    group-hover:border-white/70
                    group-hover:bg-white
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-transparent
                      transition-all
                      duration-500
                      group-hover:bg-black
                    "
                  />
                </div>

                {/* Meta */}

                <div
                  dir="ltr"
                  className="
                    mb-3
                    flex
                    items-center
                    gap-3
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                  "
                >
                  <span>{item.number}</span>

                  <span className="h-px w-5 bg-white/10" />

                  <span>{item.field}</span>
                </div>

                {/* Degree */}

                <h3
                  className="
                    text-3xl
                    font-medium
                    leading-8
                    text-white/85
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                >
                  {item.degree}
                </h3>

                {/* University */}

                <p className="mt-1 text-base text-white/45">
                  {item.university}
                </p>

                {/* Description */}

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/30
                  "
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-t
            border-white/10
            pt-2
            sm:pt-5
          "
        >
          <div
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
            Academic background
          </div>

          <p
            className="
              max-w-[170px]
              text-left
              text-[9px]
              leading-4
              text-white/25
              sm:max-w-md
              sm:text-xs
              sm:leading-6
            "
          >
            Science first. Curiosity always.
          </p>
        </div>
      </div>

      {/* =====================================================
          CORNER
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-14
          w-14
          border-r
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

export default Education;
