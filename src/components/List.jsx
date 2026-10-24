const List = ({ skill }) => {
  return (
    <article
      className="
          group
          relative
          flex
          min-h-[72px]
          items-center
          gap-3
          overflow-hidden
          rounded-sm
          border
          border-white/10
          bg-white/[0.012]
          px-3
          py-2.5
          transition-all
          duration-500
          hover:border-white/25
          hover:bg-white/[0.025]
          sm:min-h-[92px]
          sm:px-4
          sm:py-3
          lg:min-h-[118px]
          lg:px-5
          lg:py-4
        "
    >
      {/* Number */}

      <span
        dir="ltr"
        className="
            absolute
            left-2
            top-2
            font-mono
            text-[7px]
            tracking-widest
            text-white/20
            transition-colors
            duration-500
            group-hover:text-white/50
            sm:left-3
            sm:top-3
            sm:text-[9px]
          "
      >
        {skill.number}
      </span>

      {/* Icon */}

      <div
        className="
            relative
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            transition-all
            duration-500
            group-hover:border-white/30
            sm:h-11
            sm:w-11
            lg:h-12
            lg:w-12
          "
      >
        <div
          className="
              absolute
              inset-[-3px]
              rounded-full
              border
              border-transparent
              border-t-white/30
              border-r-white/30
              opacity-0
              transition-all
              duration-500
              group-hover:rotate-180
              group-hover:opacity-100
            "
        />

        <img
          src={skill.icon}
          alt=""
          className="
              h-4
              w-4
              object-contain
              opacity-50
              grayscale
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:opacity-100
              group-hover:grayscale-0
              sm:h-5
              sm:w-5
              lg:h-6
              lg:w-6
            "
        />
      </div>

      {/* Text */}

      <div className="min-w-0">
        <h3
          className="
              truncate
              text-xs
              font-medium
              text-white/80
              transition-colors
              duration-500
              group-hover:text-white
              sm:text-sm
              lg:text-base
            "
        >
          {skill.title}
        </h3>

        <p
          dir="ltr"
          className="
              mt-1
              truncate
              text-[7px]
              tracking-[0.12em]
              text-white/20
              sm:text-[8px]
              lg:text-[9px]
            "
        >
          {skill.category}
        </p>
      </div>

      {/* Bottom hover line */}

      <span
        className="
            absolute
            bottom-0
            right-0
            h-px
            w-0
            bg-white/40
            transition-all
            duration-700
            group-hover:w-full
          "
      />
    </article>
  );
};
export default List;
