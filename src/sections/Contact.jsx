const CONTACTS = [
  {
    number: "01",
    label: "PHONE",
    value: "+98 9XX XXX XXXX",
    href: "tel:+989XXXXXXXXX",
  },
  {
    number: "02",
    label: "GITHUB",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    number: "03",
    label: "GMAIL",
    value: "yourname@gmail.com",
    href: "mailto:yourname@gmail.com",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      dir="rtl"
      data-contact-section
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
            right-[-10%]
            top-[20%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-white/[0.018]
            blur-[110px]
            sm:right-[5%]
            sm:h-[400px]
            sm:w-[400px]
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
            Contact
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
            06 / 06
          </span>
        </header>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <main
          className="
            flex
            min-h-0
            flex-1
            flex-col
            justify-center
            lg:grid
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-24
          "
        >
          {/* ===============================================
              LEFT / TITLE
          =============================================== */}

          <div className="relative">
            {/* Background number */}

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
              06
            </span>

            <div className="relative">
              <h2
                className="
                  text-[2rem]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.07em]
                  sm:text-7xl
                  lg:text-[7.5rem]
                "
              >
                در تماس
                <span className="text-white/20">باشیم .</span>
              </h2>

              <div
                className="
                  mt-5
                  h-px
                  w-12
                  bg-white/30
                  sm:mt-7
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
                برای همکاری، پروژه‌های جدید یا فقط یک گفت‌وگوی خوب، می‌توانید از
                طریق راه‌های ارتباطی زیر با من در تماس باشید.
              </p>
            </div>
          </div>

          {/* ===============================================
              CONTACT INFORMATION
          =============================================== */}

          <div className="mt-8 lg:mt-0">
            <div className="border-t border-white/10">
              {CONTACTS.map((contact) => (
                <a
                  key={contact.number}
                  href={contact.href}
                  target={contact.label === "GITHUB" ? "_blank" : undefined}
                  rel={
                    contact.label === "GITHUB"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group
                    relative
                    flex
                    min-h-[65px]
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-1
                    transition-all
                    duration-500
                    hover:bg-white/[0.025]
                    sm:min-h-[105px]
                    sm:py-1
                    lg:min-h-[125px]
                    lg:py-6
                  "
                >
                  {/* Number + label */}

                  <div
                    dir="ltr"
                    className="
                      flex
                      items-center
                      gap-3
                      sm:gap-5
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[8px]
                        tracking-widest
                        text-white/20
                        transition-colors
                        duration-500
                        group-hover:text-white/50
                        sm:text-[10px]
                      "
                    >
                      {contact.number}
                    </span>

                    <span
                      className="
                        text-[8px]
                        tracking-[0.25em]
                        text-white/30
                        sm:text-[10px]
                        sm:tracking-[0.3em]
                      "
                    >
                      {contact.label}
                    </span>
                  </div>

                  {/* Value */}

                  <div
                    dir="ltr"
                    className="
                      max-w-[65%]
                      truncate
                      text-right
                      text-xs
                      text-white/55
                      transition-colors
                      duration-500
                      group-hover:text-white
                      sm:text-sm
                      lg:text-base
                    "
                  >
                    {contact.value}
                  </div>

                  {/* Arrow */}

                  <span
                    dir="ltr"
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-white/50
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </div>

            {/* Availability */}

            <div className="mt-5 flex items-center justify-between sm:mt-7">
              <div
                dir="ltr"
                className="
                  flex
                  items-center
                  gap-2
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                  sm:text-[9px]
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                Available for opportunities
              </div>

              <span
                dir="ltr"
                className="
                  text-[8px]
                  tracking-[0.2em]
                  text-white/15
                  sm:text-[9px]
                "
              >
                2026
              </span>
            </div>
          </div>
        </main>

        {/* =================================================
            FOOTER
        ================================================== */}
      </div>

      {/* Corner decoration */}

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

export default Contact;
