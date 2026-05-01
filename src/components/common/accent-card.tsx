import { type PropsWithChildren } from "react";
import { cn } from "~/lib/cn";

type AccentCardProps = PropsWithChildren<{
  className?: string;
}>;

const AccentCard = ({ children, className }: AccentCardProps) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-lg border border-border/30 bg-primaryCard/40 dark:border-borderDark/20 dark:bg-primaryCardDark/40",
      className,
    )}
  >
    <span
      aria-hidden
      className="absolute bottom-4 left-0 top-4 z-10 w-1 rounded-r-full bg-primary dark:bg-primaryDark"
    />
    <span
      aria-hidden
      className="absolute bottom-4 right-0 top-4 z-10 w-1 rounded-l-full bg-primary dark:bg-primaryDark"
    />
    {children}
  </div>
);

export default AccentCard;
