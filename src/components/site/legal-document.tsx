type LegalSection = {
  title: string;
  content: React.ReactNode;
};

export function LegalDocument({
  label,
  title,
  updated,
  introduction,
  sections,
}: {
  label: string;
  title: string;
  updated: string;
  introduction: string;
  sections: LegalSection[];
}) {
  return (
    <div className="container-site py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <aside className="md:col-span-3">
          <p className="eyebrow text-copper">{label}</p>
          <p className="mt-5 text-xs leading-5 text-ink/65">
            Effective
            <br />
            {updated}
          </p>
        </aside>
        <article className="md:col-span-8 md:col-start-5">
          <header className="border-b border-ink/25 pb-10">
            <h1 className="font-heading text-[clamp(3.7rem,8vw,7rem)] leading-[0.9] font-medium tracking-[-0.045em]">
              {title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/68">
              {introduction}
            </p>
          </header>
          <div className="divide-y divide-ink/20">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="grid gap-5 py-9 sm:grid-cols-[3rem_1fr]"
              >
                <span className="eyebrow pt-1 text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-heading text-3xl">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-ink/65 [&_a]:text-link [&_li]:pl-1 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
                    {section.content}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
