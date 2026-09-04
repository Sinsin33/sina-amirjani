import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const PROJECTS = [
  {
    id: 1,
    title: "سامانه مدیریت رژیم غذایی",
    description:
      "اپلیکیشن تحت وب برای محاسبه کالری و تنظیم برنامه‌های غذایی تخصصی.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    techs: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: 2,
    title: "پلتفرم فروشگاهی آنلاین",
    description:
      "فروشگاه مدرن با قابلیت فیلتر پیشرفته محصولات و پرداخت آنلاین.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    techs: ["React", "Three.js", "GSAP", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "داشبورد آنالیز داده‌های پزشکی",
    description: "پنل مدیریتی برای نمایش نمودارهای تعاملی و گزارش‌گیری تخصصی.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    techs: ["React", "MUI", "Chart.js", "Tailwind CSS"],
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      dir="rtl"
      className="relative flex h-screen h-[100dvh] w-full flex-col justify-between overflow-hidden bg-[#080808] px-5 py-4 sm:px-8 sm:py-6 lg:px-12"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between">
        {/* HEADER */}
        <header className="flex shrink-0 items-center justify-between border-b border-white/10 pb-2 sm:pb-3">
          <div
            dir="ltr"
            className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:text-[10px]"
          >
            <span className="h-px w-5 bg-white/30 sm:w-8" />
            Selected Works
          </div>
          <span
            dir="ltr"
            className="text-[9px] tracking-[0.2em] text-white/20 sm:text-[10px]"
          >
            03 / 04
          </span>
        </header>

        {/* TITLE */}
        <div className="shrink-0 py-2">
          <h2 className="text-2xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            پروژه‌های <span className="text-white/25">برجسته</span>
          </h2>
        </div>

        {/* SLIDER CONTAINER - FITS REMAINING SPACE EXACTLY */}
        <div className="flex flex-1 min-h-0 w-full items-center justify-center py-2">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="portfolio-swiper h-full w-full !pb-8"
          >
            {PROJECTS.map((project) => (
              <SwiperSlide
                key={project.id}
                className="!w-[280px] sm:!w-[380px] lg:!w-[460px] flex items-center justify-center"
              >
                <div className="group relative flex max-h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 backdrop-blur-md">
                  {/* FIXED IMAGE HEIGHT */}
                  <div className="relative h-[150px] sm:h-[190px] lg:h-[220px] w-full overflow-hidden rounded-xl bg-black/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* DETAILS */}
                  <div className="mt-3 flex flex-col">
                    <h3 className="text-sm font-medium text-white sm:text-lg lg:text-xl">
                      {project.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs text-white/50 sm:text-sm">
                      {project.description}
                    </p>

                    {/* TECH STACK */}
                    <div className="mt-3 flex flex-col gap-1.5">
                      <span className="text-[9px] uppercase tracking-wider text-white/30">
                        Technologies
                      </span>
                      <div dir="ltr" className="flex flex-wrap gap-1">
                        {project.techs.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] text-white/70 sm:text-[10px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
