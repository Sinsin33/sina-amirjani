import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const PROJECTS = [
  {
    id: 1,
    title: "1",
    description:
      "اپلیکیشن تحت وب برای محاسبه کالری و تنظیم برنامه‌های غذایی تخصصی.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
    ],
    techs: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: 2,
    title: "2",
    description:
      "فروشگاه مدرن با قابلیت فیلتر پیشرفته محصولات و پرداخت آنلاین.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1000&auto=format&fit=crop",
    ],
    techs: ["React", "Three.js", "GSAP", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "3",
    description: "پنل مدیریتی برای نمایش نمودارهای تعاملی و گزارش‌گیری تخصصی.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
    ],
    techs: ["React", "MUI", "Chart.js", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "4",
    description: "پنل مدیریتی برای نمایش نمودارهای تعاملی و گزارش‌گیری تخصصی.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
    ],
    techs: ["React", "MUI", "Chart.js", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "5",
    description: "پنل مدیریتی برای نمایش نمودارهای تعاملی و گزارش‌گیری تخصصی.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    ],
    techs: ["React", "MUI", "Chart.js", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "6",
    description: "پنل مدیریتی برای نمایش نمودارهای تعاملی و گزارش‌گیری تخصصی.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop",
    ],
    techs: ["React", "MUI", "Chart.js", "Tailwind CSS"],
  },
];

const PortfolioModal = ({ project, activeImage, onImageChange, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}-title`}
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-2xl"
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن"
          className="absolute left-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-lg text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
        >
          ×
        </button>

        {/* ROW 1: MAIN IMAGE + OTHER IMAGES */}
        <div className="grid min-h-0 grid-cols-1 gap-3 border-b border-white/10 p-3 sm:grid-cols-[minmax(0,1fr)_120px] sm:p-4 md:grid-cols-[minmax(0,1fr)_150px]">
          <div className="relative min-h-[240px] overflow-hidden rounded-xl bg-black sm:min-h-[320px] md:min-h-[410px]">
            <img
              src={project.images[activeImage]}
              alt={`${project.title} - تصویر ${activeImage + 1}`}
              className="h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="flex min-w-0 flex-row gap-2 overflow-x-auto sm:flex-col sm:overflow-x-hidden sm:overflow-y-auto">
            {project.images.map((image, index) => (
              <button
                key={`${project.id}-${image}`}
                type="button"
                onClick={() => onImageChange(index)}
                className={`group relative aspect-video shrink-0 overflow-hidden rounded-lg border transition sm:aspect-[4/3] ${
                  index === activeImage
                    ? "border-white/70"
                    : "border-white/10 hover:border-white/30"
                }`}
                aria-label={`نمایش تصویر ${index + 1}`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                {index === activeImage && (
                  <span className="absolute inset-0 bg-white/10" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ROW 2: DESCRIPTION */}
        <div className="border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5">
          <div className="mb-2 flex items-center justify-between gap-4">
            <h3
              id={`project-${project.id}-title`}
              className="text-base font-medium text-white sm:text-xl"
            >
              {project.title}
            </h3>
            <span
              dir="ltr"
              className="text-[9px] uppercase tracking-[0.2em] text-white/25 sm:text-[10px]"
            >
              Project {String(project.id).padStart(2, "0")}
            </span>
          </div>
          <p className="max-w-3xl text-xs leading-6 text-white/55 sm:text-sm sm:leading-7">
            {project.description}
          </p>
        </div>

        {/* ROW 3: TECHNOLOGIES */}
        <div className="px-4 py-4 sm:px-6 sm:py-5">
          <div className="mb-2 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:text-[10px]">
            Technologies
          </div>
          <div dir="ltr" className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-white/70 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(0);
  };

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
        <div className="flex min-h-0 w-full flex-1 items-center justify-center py-2">
          <Swiper
            dir="rtl"
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCoverflow, Pagination]}
            className="portfolio-swiper h-full w-full !pb-8"
          >
            {PROJECTS.map((project) => (
              <SwiperSlide
                key={project.id}
                className="flex !w-[280px] items-center justify-center sm:!w-[380px] lg:!w-[460px]"
              >
                <button
                  type="button"
                  onClick={() => openProject(project)}
                  className="group relative flex max-h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-right backdrop-blur-md transition duration-500 hover:border-white/20 hover:bg-white/[0.05] sm:p-4"
                >
                  {/* FIXED IMAGE HEIGHT */}
                  <div className="relative h-[150px] w-full overflow-hidden rounded-xl bg-black/50 sm:h-[190px] lg:h-[220px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-60" />

                    <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[9px] text-white/70 backdrop-blur-md sm:text-[10px]">
                      View details
                    </span>
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
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          activeImage={activeImage}
          onImageChange={setActiveImage}
          onClose={closeProject}
        />
      )}
    </section>
  );
};

export default Portfolio;
