function Navbar({ sections, activeIndex }) {
  const active = sections[activeIndex];

  return (
    <nav className="fixed inset-x-0 bottom-0 md:bottom-auto md:top-0 z-50">
      {/* Desktop: full text nav, pinned to top */}
      <div className="hidden md:flex justify-center gap-8 py-4 backdrop-blur">
        {sections.map((s, i) => {
          const isActive = i === activeIndex;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`flex flex-col items-center gap-2 text-sm transition-colors duration-300 ${
                isActive ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {s.label}
              <span
                className={`h-1.5 w-1.5 rounded-full transition-transform duration-300 ${
                  isActive ? "ember scale-100" : "scale-0 bg-white/0"
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Mobile: no repeated text — just dots, with the current section named once above them */}
      <div className="flex md:hidden flex-col items-center gap-2 pt-3 pb-[calc(0.75rem_+_env(safe-area-inset-bottom))] backdrop-blur">
        <span className="text-xs text-white/70 transition-all duration-300">
          {active.label}
        </span>
        <div className="flex items-center gap-3">
          {sections.map((s, i) => {
            const isActive = i === activeIndex;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-label={s.label}
                className="p-1"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive ? "ember h-2 w-2" : "h-1.5 w-1.5 bg-white/25"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
