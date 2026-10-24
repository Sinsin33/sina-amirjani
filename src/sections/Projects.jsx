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
    title: "پنل رژیم درمانی",
    description:
      "پنل ادمین برای یک متخصص تغذیه برای مدیریت مراجعین و محاسبه کالری",
    image: "/images/diet app/Slide1.PNG",
    images: [
      "./images/diet app/Slide1.PNG",
      "./images/diet app/Slide2.PNG",
      "./images/diet app/Slide3.PNG",
      "./images/diet app/Slide4.PNG",
      "./images/diet app/Slide5.PNG",
    ],
    projectLink: "https://github.com/Sinsin33/sinDiet",
    techs: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],

    technologies: [
      {
        name: "React",
        img: "./images/techs/react.png",
      },
      {
        name: "React Router",
        img: "./images/techs/react-router.png",
      },
      {
        name: "MUI",
        img: "./images/techs/mui.png",
      },
      {
        name: "Tailwind CSS",
        img: "/images/techs/tailwindcss.png",
      },
      {
        name: "Lucide React",
        img: "./images/techs/lucide-react.png",
      },
      {
        name: "React Hook Form",
        img: "./images/techs/react-hook-form.png",
      },
      {
        name: "Recharts",
        img: "./images/techs/recharts.png",
      },
      {
        name: "Zod",
        img: "./images/techs/zod.png",
      },
    ],
  },
  {
    id: 2,
    title: "restaurant POS",
    description: "سیستم منو رستوران.",
    image: "./images/POS restaurant/Slide1.PNG",
    images: [
      "./images/POS restaurant/Slide1.PNG",
      "./images/POS restaurant/Slide2.PNG",
      "./images/POS restaurant/Slide3.PNG",
      "./images/POS restaurant/Slide4.PNG",
      "./images/POS restaurant/Slide5.PNG",
    ],
    technologies: [
      {
        name: "React",
        img: "./images/techs/react.png",
      },
      {
        name: "React Router",
        img: "./images/techs/react-router.png",
      },
      {
        name: "MUI",
        img: "./images/techs/mui.png",
      },
      {
        name: "Tailwind CSS",
        img: "/images/techs/tailwindcss.png",
      },
      {
        name: "Lucide React",
        img: "./images/techs/lucide-react.png",
      },
      {
        name: "React Hook Form",
        img: "./images/techs/react-hook-form.png",
      },
      {
        name: "Recharts",
        img: "./images/techs/recharts.png",
      },
      {
        name: "Zod",
        img: "./images/techs/zod.png",
      },
    ],
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
    technologies: [
      {
        name: "React",
        img: "./images/techs/react.png",
      },
      {
        name: "React Router",
        img: "./images/techs/react-router.png",
      },
      {
        name: "MUI",
        img: "./images/techs/mui.png",
      },
      {
        name: "Tailwind CSS",
        img: "/images/techs/tailwindcss.png",
      },
      {
        name: "Lucide React",
        img: "./images/techs/lucide-react.png",
      },
      {
        name: "React Hook Form",
        img: "./images/techs/react-hook-form.png",
      },
      {
        name: "Recharts",
        img: "./images/techs/recharts.png",
      },
      {
        name: "Zod",
        img: "./images/techs/zod.png",
      },
    ],
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
    technologies: [
      {
        name: "React",
        img: "./images/techs/react.png",
      },
      {
        name: "React Router",
        img: "./images/techs/react-router.png",
      },
      {
        name: "MUI",
        img: "./images/techs/mui.png",
      },
      {
        name: "Tailwind CSS",
        img: "/images/techs/tailwindcss.png",
      },
      {
        name: "Lucide React",
        img: "./images/techs/lucide-react.png",
      },
      {
        name: "React Hook Form",
        img: "./images/techs/react-hook-form.png",
      },
      {
        name: "Recharts",
        img: "./images/techs/recharts.png",
      },
      {
        name: "Zod",
        img: "./images/techs/zod.png",
      },
    ],
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
    technologies: [
      {
        name: "React",
        img: "./images/techs/react.png",
      },
      {
        name: "React Router",
        img: "./images/techs/react-router.png",
      },
      {
        name: "MUI",
        img: "./images/techs/mui.png",
      },
      {
        name: "Tailwind CSS",
        img: "/images/techs/tailwindcss.png",
      },
      {
        name: "Lucide React",
        img: "./images/techs/lucide-react.png",
      },
      {
        name: "React Hook Form",
        img: "./images/techs/react-hook-form.png",
      },
      {
        name: "Recharts",
        img: "./images/techs/recharts.png",
      },
      {
        name: "Zod",
        img: "./images/techs/zod.png",
      },
    ],
  },
];

const PortfolioModal = ({ project, activeImage, onImageChange, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const imagesList = project.images?.length ? project.images : [project.image];
  const currentImage = imagesList[activeImage] || imagesList[0];
  const technologies = project.technologies ?? [];

  return createPortal(
    <div
      dir="rtl"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}-title`}
        data-lenis-prevent
        className="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#0c0c0c]/90 px-4 py-3 backdrop-blur-md sm:px-6">
          <div className="flex items-center gap-3">
            <span
              dir="ltr"
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] tracking-wider text-white/50"
            >
              #{String(project.id).padStart(2, "0")}
            </span>
            <h3
              id={`project-${project.id}-title`}
              className="text-base font-medium text-white sm:text-lg"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="بستن"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/60 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:space-y-6 sm:p-6">
          {/* IMAGES */}
          <div className="space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/60">
              <img
                src={currentImage}
                alt={`${project.title} - image ${activeImage + 1}`}
                className="h-full w-full object-cover object-top transition-all duration-300"
              />
            </div>

            {imagesList.length > 1 && (
              <div className="flex min-w-0 gap-2 overflow-x-auto pb-1">
                {imagesList.map((image, index) => (
                  <button
                    key={`${project.id}-thumb-${index}`}
                    type="button"
                    onClick={() => onImageChange(index)}
                    className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                      index === activeImage
                        ? "border-white opacity-100 ring-2 ring-white/20"
                        : "border-white/10 opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-2 border-t border-white/10 pt-4">
            <h4 className="text-[10px] uppercase tracking-wider text-white/40">
              توضیحات پروژه
            </h4>
            <p className="text-xs leading-relaxed text-white/70 sm:text-sm sm:leading-7">
              {project.description}
            </p>
          </div>

          {/* GITHUB (only if the project has a link) */}
          {project.projectLink && (
            <div dir="ltr" className="space-y-2 border-t border-white/10 pt-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                github
              </h4>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                className="block w-fit break-all text-xs tracking-wide text-white/50 transition hover:text-white"
              >
                {project.projectLink}
              </a>
            </div>
          )}

          {/* TECHNOLOGIES */}
          {technologies.length > 0 && (
            <div dir="ltr" className="space-y-2 border-t border-white/10 pt-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Technologies & Tools
              </h4>

              <div className="flex flex-wrap gap-2 pt-1">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="h-4 w-4 object-contain opacity-80"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="text-xs text-white/80">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
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
      {/* BACKGROUND */}
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

        {/* SLIDER */}
        <div className="flex min-h-0 w-full flex-1 items-center justify-center py-2">
          <Swiper
            dir="rtl"
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
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
                  {/* IMAGE */}
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

                    {project.technologies?.length > 0 && (
                      <div className="mt-3 flex flex-col gap-1.5">
                        <span className="text-[9px] uppercase tracking-wider text-white/30">
                          Technologies
                        </span>

                        <div dir="ltr" className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech.name}
                              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] text-white/70 sm:text-[10px]"
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
