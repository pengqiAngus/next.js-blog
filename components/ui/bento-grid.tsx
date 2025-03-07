import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        "[--masonry-gap:1rem]",
        "[--masonry-min-width:300px]",
        "columns-1 md:columns-3 space-y-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative break-inside-avoid-column mb-4",
        "bg-gradient-to-br from-white/80 to-white/20 dark:from-zinc-900/80 dark:to-zinc-900/20",
        "backdrop-blur-sm border border-white/20 dark:border-zinc-800/20",
        "shadow-[0_8px_16px_rgb(0_0_0/0.08)] dark:shadow-[0_8px_16px_rgb(0_0_0/0.16)]",
        "hover:shadow-[0_16px_32px_rgb(0_0_0/0.12)] dark:hover:shadow-[0_16px_32px_rgb(0_0_0/0.24)]",
        "rounded-[2rem_1rem] odd:rounded-[1rem_2rem]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:scale-[1.02]",
        className
      )}
    >
      {header}
      <div className="p-6 space-y-4">
        {icon && <div className="opacity-70">{icon}</div>}
        {title && (
          <div className="font-bold text-zinc-800 dark:text-zinc-200">
            {title}
          </div>
        )}
        {description && (
          <div className="text-zinc-600 dark:text-zinc-400">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
