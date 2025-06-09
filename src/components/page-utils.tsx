import { cn } from "@/lib/utils";

interface PageTitleProps {
  heading: string;
  className?: string;
}
export function PageTitle({ heading, className }: PageTitleProps) {
  return (
    <h1
      className={cn(
        "text-2xl mb-1.5 font-bold capitalize tracking-tighter",
        className
      )}
    >
      {heading}
    </h1>
  );
}

interface PageDescriptionProps {
  paragraph: string;
  className?: string;
}
export function PageDescription({
  paragraph,
  className,
}: PageDescriptionProps) {
  return (
    <p
      className={cn(
        "max-w-3xl tracking-wide text-justify hyphens-auto w-full ",
        className
      )}
    >
      {paragraph}
    </p>
  );
}
