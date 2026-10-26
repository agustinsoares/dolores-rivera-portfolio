import { useEffect, useState } from "react";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LangProvider, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import portrait from "@/assets/dolores-rivera.jpg";
import diploma from "@/assets/diploma-ingenieria-alimentos.jpg";
import {
  LANGS,
  about,
  contact,
  contactSection,
  education,
  experience,
  hero,
  research,
  skills,
  stats,
  ui,
} from "@/content";

const SECTIONS = ["about", "research", "experience", "education", "skills", "contact"] as const;

const toneClass = {
  batata: "bg-batata",
  orange: "bg-citrus",
  spirulina: "bg-spirulina",
} as const;

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t(ui.language)} className={cn("flex items-center", className)}>
      {LANGS.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && (
            <span className="px-0.5 text-xs text-ink/30" aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            lang={l.code === "no" ? "nb" : l.code}
            aria-pressed={lang === l.code}
            aria-label={l.name}
            title={l.name}
            onClick={() => setLang(l.code)}
            className={cn(
              "h-10 px-1.5 text-xs tracking-wider underline-offset-[6px] transition-colors",
              lang === l.code
                ? "font-medium text-umber-deep underline decoration-umber decoration-1"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}

function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors",
        scrolled ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          aria-label="María Dolores Rivera"
          className="flex size-11 items-center justify-center font-display text-2xl font-semibold italic leading-none tracking-[-0.12em] text-ink"
        >
          <span aria-hidden="true">
            D<span className="text-umber">R</span>
          </span>
        </a>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="size-11 rounded-none" aria-label={t(ui.menu)}>
                <Menu className="!size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-80 flex-col bg-paper">
              <SheetTitle className="font-display text-xl font-semibold">
                María Dolores <span className="italic text-umber-deep">Rivera</span>
              </SheetTitle>
              <nav aria-label="Main" className="mt-8">
                <ul className="space-y-1">
                  {SECTIONS.map((id) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={() => setOpen(false)}
                        className="block py-2.5 font-display text-2xl transition-colors hover:text-umber-deep"
                      >
                        {t(ui.nav[id])}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <a
                href={contact.cv}
                download
                className="mt-auto inline-flex items-center gap-2 border-t border-ink/15 pt-5 text-sm text-umber-deep"
              >
                <ArrowDownToLine className="size-4" aria-hidden="true" />
                {t(ui.downloadCv)}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-14 lg:pb-24">
      <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto] lg:gap-20">
        <div className="reveal order-2 md:order-1">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-umber-deep">
            <span className="h-px w-7 bg-umber" aria-hidden="true" />
            {t(hero.eyebrow)}
          </p>
          <h1 className="mt-6 font-display text-[3.4rem] font-bold leading-[0.98] tracking-[-0.02em] sm:text-7xl lg:text-[5.5rem]">
            <span className="block">{hero.firstName}</span>
            <span className="block italic text-umber">{hero.lastName}</span>
          </h1>
          <p className="mt-8 max-w-md text-[17px] leading-relaxed text-muted-foreground text-pretty">
            <strong className="font-semibold text-foreground">{t(hero.role)}</strong> {t(hero.lead)}{" "}
            {t(hero.basedIn)} <strong className="font-semibold text-foreground">{t(hero.location)}</strong>.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-none bg-ink px-6 text-paper shadow-none hover:bg-ink/85">
              <a href="#contact">{t(ui.getInTouch)}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-none border-ink/25 bg-transparent px-6 shadow-none hover:bg-ink/5"
            >
              <a href="#experience">
                {t(hero.viewExperience)}
                <ArrowDown />
              </a>
            </Button>
          </div>
        </div>

        <div className="reveal order-1 md:order-2 [animation-delay:150ms]">
          <img
            src={portrait}
            alt={t(hero.photoAlt)}
            width={175}
            height={212}
            className="aspect-[175/212] w-44 rounded-md bg-white object-cover shadow-[0_24px_60px_-20px_hsl(var(--ink)/0.35)] sm:w-60 lg:w-80"
          />
        </div>

        {/* decorative ring between the columns, as in a lab sample marker */}
        <span
          className="pointer-events-none absolute left-[50%] top-[36%] hidden size-8 items-center justify-center rounded-full border border-umber/60 lg:flex"
          aria-hidden="true"
        >
          <span className="size-1.5 rounded-full bg-umber" />
        </span>
        <a
          href="#about"
          className="absolute bottom-0 left-[54%] hidden flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:flex"
        >
          <span className="[writing-mode:vertical-rl]">{t(hero.scroll)}</span>
          <span className="h-14 w-px bg-ink/25" aria-hidden="true" />
        </a>
      </div>

      <dl className="mt-16 grid grid-cols-2 border-t border-ink/15 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={cn(
              "flex flex-col border-b border-ink/15 py-6 pr-4 lg:border-b-0",
              i % 2 === 1 && "border-l pl-4",
              i > 0 && "lg:border-l lg:pl-6",
            )}
          >
            <dt className="text-sm leading-snug text-muted-foreground">{t(s.label)}</dt>
            <dd className="order-first font-display text-4xl font-light sm:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function SectionHeading({ index, id, title }: { index: string; id: string; title: string }) {
  const { t } = useLang();
  return (
    <div className="mb-10 grid gap-3 lg:grid-cols-[12rem_1fr] lg:gap-8">
      <p className="section-label pt-2">
        {index} — {t(ui.nav[id as (typeof SECTIONS)[number]])}
      </p>
      <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:pt-4">
      <SectionHeading index="01" id="about" title={t(about.heading)} />
      <div className="grid gap-12 lg:grid-cols-[12rem_1fr] lg:gap-8">
        <div />
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-[17px] leading-relaxed text-pretty">
            {t(about.body).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div>
            <h3 className="section-label">{t(about.openToHeading)}</h3>
            <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
              {t(about.openTo).map((item) => (
                <li key={item} className="flex items-start gap-3 py-2.5 text-sm">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-citrus" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  const { t } = useLang();
  const th = research.thesis;
  return (
    <section id="research" className="bg-sand-tint py-20 text-ink">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 grid gap-3 lg:grid-cols-[12rem_1fr] lg:gap-8">
          <p className="pt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            02 — {t(ui.nav.research)}
          </p>
          <h2 className="font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            {t(research.heading)}
          </h2>
        </div>

        <article className="grid gap-8 border-t border-ink/15 pt-10 lg:grid-cols-[12rem_1fr] lg:gap-8">
          <div className="font-mono text-xs uppercase leading-relaxed tracking-widest text-muted-foreground">
            <p>{t(th.date)}</p>
            <p className="mt-1 normal-case tracking-normal">{th.place}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-citrus-deep">{t(th.kicker)}</p>
            <h3 className="mt-3 max-w-3xl font-display text-2xl leading-snug sm:text-3xl">
              {t(th.title)}
            </h3>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t(th.sourcesLabel)}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {th.sources.map((src) => (
                  <li
                    key={src.latin}
                    className="flex items-center gap-2 rounded-full border border-ink/20 py-1.5 pl-2 pr-3.5 text-sm"
                  >
                    <span
                      className={cn("size-4 rounded-full", toneClass[src.tone as keyof typeof toneClass], src.tone === "spirulina" && "ring-1 ring-ink/20")}
                      aria-hidden="true"
                    />
                    {t(src.name)}
                    <span className="font-display italic text-muted-foreground">{src.latin}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ol className="mt-10 grid gap-px overflow-hidden rounded-sm bg-ink/15 sm:grid-cols-2">
              {th.steps.map((step, i) => (
                <li key={i} className="bg-sand-tint p-6">
                  <p className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-citrus-deep">0{i + 1}</span>
                    <span className="font-display text-xl">{t(step.label)}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{t(step.text)}</p>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <div className="mt-16 grid gap-8 lg:grid-cols-[12rem_1fr] lg:gap-8">
          <div />
          <div className="grid gap-6 md:grid-cols-2">
            {research.projects.map((p) => (
              <article key={p.title} className="flex flex-col rounded-sm border border-ink/15 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-citrus-deep">{t(p.kicker)}</p>
                <h3 className="mt-3 font-display text-2xl leading-snug">{p.title}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t(p.place)} · {t(p.date)}
                </p>
                <p className="mt-4 leading-relaxed text-ink/85">{t(p.summary)}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/75">
                  {t(p.points).map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-citrus-deep" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="03" id="experience" title={t(experience.heading)} />
      <div className="grid gap-8 lg:grid-cols-[12rem_1fr]">
        <p className="text-sm leading-relaxed text-muted-foreground">{t(experience.intro)}</p>
        <ol className="border-t border-ink/15">
          {experience.items.map((item) => (
            <li
              key={item.org}
              className="grid gap-2 border-b border-ink/15 py-7 md:grid-cols-[11rem_1fr] md:gap-8"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <p>{t(item.date)}</p>
                <p className="mt-1 normal-case tracking-normal">{t(item.place)}</p>
              </div>
              <div>
                <h3 className="font-display text-xl">{t(item.role)}</h3>
                <p className="mt-0.5 text-sm font-medium text-umber-deep">{item.org}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{t(item.text)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Education() {
  const { t } = useLang();
  const d = education.degree;
  return (
    <section id="education" className="border-y border-ink/10 bg-card/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04" id="education" title={t(d.title)} />
        <div className="grid gap-8 lg:grid-cols-[12rem_1fr]">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <p>{d.date}</p>
            <p className="mt-1 normal-case tracking-normal">{d.place}</p>
          </div>
          <div className="min-w-0">
            <p className="text-lg font-medium">{d.org}</p>
            <p className="mt-1 text-muted-foreground">{t(d.detail)}</p>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{t(d.official)}</p>

            <dl className="mt-8 grid grid-cols-2 border-y border-ink/15 sm:grid-cols-4">
              {d.facts.map((f, i) => (
                <div
                  key={f.value}
                  className={cn(
                    "flex flex-col py-5 pr-4",
                    i % 2 === 1 && "border-l border-ink/15 pl-4",
                    i === 2 && "border-t border-ink/15 sm:border-t-0",
                    i === 3 && "border-t border-ink/15 sm:border-t-0",
                    i > 0 && "sm:border-l sm:pl-5",
                  )}
                >
                  <dt className="text-sm text-muted-foreground">{t(f.label)}</dt>
                  <dd className="order-first font-display text-4xl font-light tabular-nums">{f.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="section-label mt-12">{t(d.areasLabel)}</h3>
            <div className="mt-5 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {d.areas.map((area) => (
                <div key={area.name.en}>
                  <p className="font-display text-lg">{t(area.name)}</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {t(area.items).map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-umber" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm text-muted-foreground">{t(d.extra)}</p>

            <h3 className="section-label mt-10">{t(d.topMarksLabel)}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {t(d.topMarks).map((c) => (
                <li key={c}>
                  <Badge variant="outline" className="rounded-full border-ink/20 bg-paper px-3 py-1 text-[13px] font-normal">
                    {c}
                  </Badge>
                </li>
              ))}
            </ul>

            <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.3fr]">
              <div>
                <h3 className="section-label">{t(education.exchangesLabel)}</h3>
                <ul className="mt-3 space-y-6">
                  {education.exchanges.map((ex) => (
                    <li key={ex.org} className="border-l-2 border-citrus pl-4">
                      <p className="font-medium">{ex.org}</p>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {t(ex.place)} · {t(ex.date)}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(ex.text)}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="min-w-0">
                <h3 className="section-label">{t(d.diplomaLabel)}</h3>
                <a
                  href={diploma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 block overflow-hidden rounded-sm border border-ink/15 bg-white shadow-[6px_6px_0_hsl(var(--sand))]"
                >
                  <img
                    src={diploma}
                    alt={t(d.diplomaAlt)}
                    width={1600}
                    height={1131}
                    loading="lazy"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </a>
                <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
                  <span>{t(d.diplomaCaption)}</span>
                  <a
                    href={diploma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-umber-deep underline-offset-4 hover:underline"
                  >
                    {t(d.diplomaOpen)}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="05" id="skills" title={t(skills.heading)} />
      <div className="grid gap-8 lg:grid-cols-[12rem_1fr]">
        <div />
        <div className="grid gap-12 md:grid-cols-3">
          {skills.groups.map((g) => (
            <div key={g.label.en}>
              <h3 className="section-label">{t(g.label)}</h3>
              <ul className="mt-4 space-y-2">
                {t(g.items).map((it) => (
                  <li key={it} className="border-b border-ink/10 pb-2 text-[15px]">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="section-label">{t(skills.languagesLabel)}</h3>
            <ul className="mt-4 space-y-4">
              {skills.languages.map((l) => (
                <li key={l.name.en}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[15px] font-medium">{t(l.name)}</span>
                    <span className="text-right text-xs text-muted-foreground">{t(l.note)}</span>
                  </div>
                  <div className="mt-2 flex gap-1" aria-hidden="true">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className={cn("h-1.5 flex-1 rounded-full", i < l.level ? "bg-umber" : "bg-ink/10")}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="bg-sand text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[12rem_1fr]">
          <p className="pt-3 font-mono text-xs uppercase tracking-[0.18em] text-ink/75">
            06 — {t(ui.nav.contact)}
          </p>
          <div>
            <h2 className="font-display text-5xl font-light tracking-tight sm:text-6xl">
              {t(contactSection.heading)}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">{t(contactSection.text)}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-10 inline-flex items-center gap-3 break-all font-display text-2xl underline decoration-ink/40 decoration-1 underline-offset-8 transition-colors hover:decoration-citrus-deep sm:text-3xl"
            >
              <Mail className="size-6 shrink-0" aria-hidden="true" />
              {contact.email}
            </a>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full bg-paper text-ink hover:bg-paper/90">
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-ink/30 bg-transparent text-ink hover:bg-ink/5 hover:text-ink"
              >
                <a href={contact.cv} download>
                  <ArrowDownToLine />
                  {t(ui.cvNote)}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-ink/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-ink/75 sm:px-6">
          <p>© {new Date().getFullYear()} María Dolores Rivera</p>
          <p>{t(contactSection.footer)}</p>
        </div>
      </footer>
    </section>
  );
}

function Page() {
  const { t } = useLang();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {t(ui.skip)}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Research />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
