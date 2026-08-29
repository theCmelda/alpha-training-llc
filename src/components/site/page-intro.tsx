import { cn } from "@/lib/utils";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: PageIntroProps) {
  return (
    <section
      className={cn(
        "container-site grid gap-8 border-b border-ink/20 py-16 md:grid-cols-12 md:py-24 lg:py-28",
        className,
      )}
    >
      <p className="eyebrow self-start text-copper md:col-span-3 md:pt-3">
        {eyebrow}
      </p>
      <div className="md:col-span-9">
        <h1 className="max-w-5xl font-heading text-[clamp(3.5rem,8vw,7.2rem)] leading-[0.9] font-medium tracking-[-0.045em]">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/68">
          {description}
        </p>
      </div>
    </section>
  );
}
