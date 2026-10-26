import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LangProvider, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import portrait from "@/assets/dolores-rivera.jpg";
import diploma from "@/assets/diploma-ingenieria-alimentos.jpg";
import imgBurgers from "@/assets/projects/thesis-burgers.jpg";
import imgColourDays from "@/assets/projects/thesis-colour-days.jpg";
import imgAse from "@/assets/projects/thesis-ase.jpg";
import imgSamples from "@/assets/projects/thesis-samples.jpg";
import imgProduct from "@/assets/projects/alfarajote-product.jpg";
import imgKitchen from "@/assets/projects/alfarajote-kitchen.jpg";
import imgFilling from "@/assets/projects/alfarajote-filling.jpg";
import imgCoating from "@/assets/projects/alfarajote-coating.jpg";
import imgFinished from "@/assets/projects/alfarajote-finished.jpg";
import imgBox from "@/assets/projects/alfarajote-box.jpg";
import imgProblem from "@/assets/projects/thesis-problem.jpg";
import imgIdea from "@/assets/projects/thesis-idea.jpg";
import imgBurgersCover from "@/assets/projects/thesis-burgers-cover.jpg";
import step1 from "@/assets/projects/step-1.jpg";
import step2 from "@/assets/projects/step-2.jpg";
import step3 from "@/assets/projects/step-3.jpg";
import step4 from "@/assets/projects/step-4.jpg";
import step5 from "@/assets/projects/step-5.jpg";
import imgSweetPotato from "@/assets/projects/thesis-sweetpotato.jpg";
import imgOrange from "@/assets/projects/thesis-orange.jpg";
import imgSpirulina from "@/assets/projects/thesis-spirulina.jpg";
import chartPhenolics from "@/assets/projects/chart-phenolics.jpg";
import chartAbts from "@/assets/projects/chart-abts.jpg";
import chartOrac from "@/assets/projects/chart-orac.jpg";
import chartProtein from "@/assets/projects/chart-protein.jpg";
import imgHands from "@/assets/projects/alfarajote-hands.jpg";
import imgVideoPoster from "@/assets/projects/alfarajote-video-poster.jpg";
import videoPrototype from "@/assets/projects/alfarajote-prototipo.mp4";
import * as Dialog from "@radix-ui/react-dialog";
import {
  type Lang,
  LANGS,
  about,
  contact,
  contactSection,
  education,
  experience,
  hero,
  projects,
  skills,
  stats,
  ui,
} from "@/content";

const SECTIONS = ["about", "education", "experience", "projects", "skills", "contact"] as const;

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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
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

// MDR monogram written like a signature; the ink "writes" in on load, then the swash draws underneath
function Signature() {
  return (
    <span aria-hidden="true" className="relative block w-[6.5rem] text-ink transition-transform duration-300 group-hover:-rotate-3">
      <span className="signature-ink block pl-1 pr-5 font-signature text-[2.9rem] leading-[0.9]">MDR</span>
      <svg viewBox="0 0 80 14" className="signature-swash absolute -bottom-1 left-0 w-full overflow-visible" fill="none">
        <path
          d="M2 9c14-5 30-7 46-4 9 2 15 4 22 1 3-1 5-3 6-5"
          stroke="hsl(var(--umber))"
          strokeWidth="1.4"
          strokeLinecap="round"
          pathLength={1}
        />
      </svg>
    </span>
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
        <a href="#top" aria-label="María Dolores Rivera" className="group -ml-1 flex h-12 items-center px-1">
          <Signature />
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-muted-foreground underline-offset-[6px] transition-colors hover:text-foreground hover:underline hover:decoration-umber"
                >
                  {t(ui.nav[id])}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="size-11 rounded-none lg:hidden" aria-label={t(ui.menu)}>
                <Menu className="!size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-80 flex-col bg-paper">
              <SheetTitle className="font-display text-xl font-semibold">
                María Dolores <span className="italic">Rivera</span>
              </SheetTitle>
              <nav aria-label="Mobile" className="mt-8">
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
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[auto_auto] md:justify-center md:gap-14 lg:gap-24">
        <div className="reveal relative order-2 md:order-1">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-umber-deep">
            <span className="h-px w-7 bg-umber" aria-hidden="true" />
            {t(hero.eyebrow)}
          </p>
          <span
            className="pointer-events-none absolute -right-6 top-[42%] hidden size-8 items-center justify-center rounded-full border border-umber/60 lg:flex"
            aria-hidden="true"
          >
            <span className="size-1.5 rounded-full bg-umber" />
          </span>
          <h1 className="mt-6 font-display text-umber text-[3.4rem] font-bold leading-[0.98] tracking-[-0.02em] sm:text-7xl lg:text-[5.5rem]">
            <span className="block">{hero.firstName}</span>
            <span className="block italic">{hero.lastName}</span>
          </h1>
          <p className="mt-8 max-w-[28rem] text-[17px] leading-relaxed text-muted-foreground text-pretty">
            <strong className="font-semibold text-foreground">{t(hero.role)}</strong> {t(hero.lead)}{" "}
            {t(hero.basedIn)} <strong className="font-semibold text-foreground">{t(hero.location)}</strong>.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-none bg-umber-deep px-6 text-paper shadow-none hover:bg-umber">
              <a href="#contact">{t(ui.getInTouch)}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-none border-umber/50 bg-transparent px-6 text-umber-deep shadow-none hover:bg-umber/10 hover:text-umber-deep"
            >
              <a href="#experience">
                {t(hero.viewExperience)}
                <ArrowDown />
              </a>
            </Button>
          </div>
        </div>

        <div className="reveal relative order-1 md:order-2 [animation-delay:150ms]">
          <a
            href="#about"
            className="absolute -left-12 bottom-0 hidden flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:-left-14 lg:flex"
          >
            <span className="[writing-mode:vertical-rl]">{t(hero.scroll)}</span>
            <span className="h-14 w-px bg-ink/25" aria-hidden="true" />
          </a>
          <img
            src={portrait}
            alt={t(hero.photoAlt)}
            width={700}
            height={848}
            className="aspect-[700/848] w-44 rounded-md bg-white object-cover shadow-[0_24px_60px_-20px_hsl(var(--ink)/0.35)] sm:w-60 lg:w-80"
          />
        </div>

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

const projectImages: Record<string, { src: string; w: number; h: number }> = {
  burgers: { src: imgBurgers, w: 684, h: 533 },
  colourDays: { src: imgColourDays, w: 640, h: 360 },
  ase: { src: imgAse, w: 600, h: 800 },
  samples: { src: imgSamples, w: 600, h: 800 },
  product: { src: imgProduct, w: 1050, h: 1400 },
  kitchen: { src: imgKitchen, w: 600, h: 800 },
  filling: { src: imgFilling, w: 600, h: 800 },
  coating: { src: imgCoating, w: 408, h: 720 },
  finished: { src: imgFinished, w: 600, h: 800 },
  box: { src: imgBox, w: 600, h: 800 },
  burgersCover: { src: imgBurgersCover, w: 1320, h: 660 },
  sweetpotato: { src: imgSweetPotato, w: 600, h: 450 },
  orange: { src: imgOrange, w: 600, h: 396 },
  spirulina: { src: imgSpirulina, w: 564, h: 384 },
  phenolics: { src: chartPhenolics, w: 800, h: 712 },
  abts: { src: chartAbts, w: 800, h: 536 },
  orac: { src: chartOrac, w: 800, h: 481 },
  protein: { src: chartProtein, w: 800, h: 491 },
};

const stepImages = [step1, step2, step3, step4, step5];

type GalleryItem = { src: string; caption: Record<Lang, string> };

// Thumbnail grid; each photo opens full size in a dialog
function Gallery({ items, className, thumbClass }: { items: GalleryItem[]; className?: string; thumbClass?: string }) {
  const { t } = useLang();
  const [open, setOpen] = useState<GalleryItem | null>(null);
  return (
    <>
      <ul className={className}>
        {items.map((it) => {
          const img = projectImages[it.src];
          return (
            <li key={it.src} className="min-w-0">
              <figure>
                <button
                  type="button"
                  onClick={() => setOpen(it)}
                  aria-label={`${t(projects.viewPhoto)}: ${t(it.caption)}`}
                  className="group block w-full overflow-hidden rounded-sm border border-ink/10 bg-card"
                >
                  <img
                    src={img.src}
                    alt=""
                    width={img.w}
                    height={img.h}
                    loading="lazy"
                    className={cn(
                      "w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none",
                      thumbClass,
                    )}
                  />
                </button>
                <figcaption className="mt-2 text-xs leading-snug text-muted-foreground">{t(it.caption)}</figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
      <Dialog.Root open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[92vh] w-[min(92vw,64rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-3 focus:outline-none">
            {open && (
              <>
                <img
                  src={projectImages[open.src].src}
                  alt={t(open.caption)}
                  className="max-h-[80vh] w-full rounded-sm object-contain"
                />
                <div className="flex items-center justify-between gap-4 text-paper">
                  <Dialog.Title className="text-sm">{t(open.caption)}</Dialog.Title>
                  <Dialog.Close className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-paper/30 hover:bg-paper/10">
                    <X className="size-4" aria-hidden="true" />
                    <span className="sr-only">{t(projects.close)}</span>
                  </Dialog.Close>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

// Short edited cut of the prototype; autoplays muted unless the viewer prefers reduced motion
function PrototypeVideo() {
  const { t } = useLang();
  const al = projects.alfarajote;
  const [autoPlay, setAutoPlay] = useState(true);
  useEffect(() => {
    setAutoPlay(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return (
    <figure className="mx-auto w-full max-w-[19rem]">
      <video
        key={String(autoPlay)}
        src={videoPrototype}
        poster={imgVideoPoster}
        autoPlay={autoPlay}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={t(al.videoAlt)}
        className="aspect-[9/16] w-full rounded-sm bg-ink object-cover shadow-[0_24px_60px_-28px_hsl(var(--ink)/0.55)]"
      />
      <figcaption className="mt-2 text-xs text-muted-foreground">{t(al.videoCaption)}</figcaption>
    </figure>
  );
}

function Projects() {
  const { t } = useLang();
  const th = projects.thesis;
  const al = projects.alfarajote;
  const ig = projects.instagram;
  const product = projectImages.product;
  return (
    <section id="projects" className="bg-sand-tint py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04" id="projects" title={t(projects.heading)} />

        {/* Thesis */}
        <article>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest text-citrus-deep">{t(th.kicker)}</p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-balance sm:text-4xl">{t(th.title)}</h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t(th.place)} · {t(th.date)}
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-ink/85 text-pretty">{t(th.summary)}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t(th.supervisor)}</p>
            </div>
            <Gallery
              items={[{ src: "burgersCover", caption: th.foodTest.burgersCaption }]}
              thumbClass="aspect-[2/1] bg-white"
              className="min-w-0 self-start [&_figure>button]:shadow-[0_24px_60px_-28px_hsl(var(--ink)/0.45)]"
            />
          </div>

          <dl className="mt-10 grid grid-cols-2 border-y border-ink/15 sm:grid-cols-4" aria-label={t(th.specsLabel)}>
            {th.specs.map((sp, i) => (
              <div key={i} className={cn("py-4 pr-3", i % 2 === 1 && "border-l border-ink/15 pl-4", i > 0 && "sm:border-l sm:pl-4", i >= 2 && "border-t border-ink/15 sm:border-t-0")}>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{t(sp.label)}</dt>
                <dd className="mt-1 font-display text-lg tabular-nums">{t(sp.value)}</dd>
              </div>
            ))}
          </dl>

          {/* The challenge */}
          <div className="mt-16">
            <p className="section-label">{t(th.challenge.label)}</p>
            <h4 className="mt-2 font-display text-2xl sm:text-3xl">{t(th.challenge.heading)}</h4>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { src: imgProblem, w: 900, h: 416, label: th.challenge.problem },
                { src: imgIdea, w: 900, h: 379, label: th.challenge.idea },
              ].map((f) => (
                <figure key={f.label.en} className="flex flex-col justify-between rounded-sm border border-ink/10 bg-white p-4">
                  <img src={f.src} alt="" width={f.w} height={f.h} loading="lazy" className="mx-auto max-h-48 w-auto object-contain" />
                  <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-umber-deep">{t(f.label)}</figcaption>
                </figure>
              ))}
            </div>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {th.challenge.cards.map((c, i) => (
                <li
                  key={c.title.en}
                  className={cn(
                    "rounded-sm border p-5",
                    i === 0 ? "border-umber-deep bg-umber-deep text-paper" : "border-ink/10 bg-card",
                  )}
                >
                  <p className="font-display text-2xl font-semibold">{t(c.title)}</p>
                  <p className={cn("mt-1 text-sm leading-snug", i === 0 ? "text-paper/85" : "text-muted-foreground")}>{t(c.text)}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Raw materials */}
          <div className="mt-16">
            <p className="section-label">{t(th.sourcesLabel)}</p>
            <ul className="mt-5 grid gap-4 md:grid-cols-3">
              {th.sources.map((src) => {
                const img = projectImages[src.img];
                return (
                  <li key={src.latin} className="rounded-sm border border-ink/10 bg-card p-4">
                    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm bg-white">
                      <img src={img.src} alt="" width={img.w} height={img.h} loading="lazy" className="max-h-full w-auto object-contain" />
                    </div>
                    <p className="mt-4 flex items-center gap-2 font-display text-xl">
                      <span className={cn("size-3 rounded-full", toneClass[src.tone as keyof typeof toneClass])} aria-hidden="true" />
                      {t(src.name)}
                    </p>
                    <p className="font-display text-sm italic text-umber-deep">{src.latin}</p>
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                      {t(src.points).map((pt) => (
                        <li key={pt} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-umber" aria-hidden="true" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Results */}
          <div className="mt-16">
            <p className="section-label">{t(th.results.label)}</p>
            <h4 className="mt-2 font-display text-2xl sm:text-3xl">{t(th.results.heading)}</h4>
            <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
              <Gallery
                items={th.results.charts.map((c) => ({ src: c.src, caption: c.title }))}
                className="grid gap-4 sm:grid-cols-2 [&_figcaption]:font-display [&_figcaption]:text-base [&_figcaption]:text-ink"
                thumbClass="aspect-[4/3] bg-white object-contain p-3"
              />
              <ul className="grid content-start gap-4">
                {th.results.takeaways.map((k, i) => (
                  <li
                    key={k.title.en}
                    className={cn(
                      "rounded-sm border p-5",
                      i === 2 ? "border-umber-deep bg-umber-deep text-paper" : "border-ink/10 bg-card",
                    )}
                  >
                    <p className="font-display text-2xl font-semibold">{t(k.title)}</p>
                    <p className={cn("mt-1 leading-snug", i === 2 ? "text-paper/90" : "text-ink/80")}>{t(k.text)}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{t(th.results.note)}</p>
          </div>

          {/* Food test */}
          <div className="mt-16">
            <p className="section-label">{t(th.foodTest.label)}</p>
            <h4 className="mt-2 font-display text-2xl sm:text-3xl">{t(th.foodTest.heading)}</h4>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {th.foodTest.steps.map((step, i) => {
                const icon = stepImages[i];
                return (
                  <li key={step.title.en} className="relative rounded-sm border border-ink/10 bg-card p-4">
                    <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-sm bg-sand/35">
                      <img
                        src={icon}
                        alt=""
                        width={420}
                        height={393}
                        loading="lazy"
                        className="h-full w-auto object-contain mix-blend-multiply"
                      />
                    </div>
                    <p className="mt-4 font-display text-lg leading-tight">
                      <span className="mr-1.5 font-mono text-sm text-citrus-deep">{i + 1}</span>
                      {t(step.title)}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">{t(step.text)}</p>
                    {i < 4 && (
                      <ArrowRight
                        className="absolute -right-[0.95rem] top-1/2 hidden size-4 -translate-y-1/2 text-umber lg:block"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
            <p className="mt-4 rounded-sm bg-umber-deep px-5 py-4 text-paper">
              <strong className="font-semibold">{t(th.foodTest.goalLabel)}:</strong> {t(th.foodTest.goal)}
            </p>
          </div>

          <div className="mt-14">
            <h4 className="section-label">{t(th.findingsLabel)}</h4>
            <ul className="mt-4 grid gap-6 md:grid-cols-3">
              {t(th.findings).map((f) => (
                <li key={f} className="flex gap-3 border-t border-ink/15 pt-4 text-[15px] leading-relaxed">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-umber" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Gallery
              items={th.gallery}
              className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"
              thumbClass="aspect-[4/3]"
            />
          </div>
        </article>

        {/* Alfarajote */}
        <article className="mt-20 border-t border-ink/15 pt-20">
          <figure className="relative mb-14 overflow-hidden rounded-sm">
            <img
              src={imgHands}
              alt={t(al.introAlt)}
              width={1800}
              height={1017}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/10" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="max-w-3xl font-display text-3xl font-light italic leading-tight text-paper text-balance sm:text-5xl">
                {t(al.introQuestion)}
              </p>
            </figcaption>
          </figure>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <figure className="min-w-0 self-start">
              <img
                src={product.src}
                alt={t(al.gallery[0].caption)}
                width={product.w}
                height={product.h}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-[0_24px_60px_-28px_hsl(var(--ink)/0.45)]"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">{t(al.gallery[0].caption)}</figcaption>
            </figure>
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest text-citrus-deep">{t(al.kicker)}</p>
              <h3 className="mt-3 font-display text-5xl font-semibold tracking-tight text-umber sm:text-6xl">{al.title}</h3>
              <p className="mt-1 font-display text-xl italic text-ink/80">{t(al.tagline)}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t(al.place)} · {t(al.date)}
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-ink/85 text-pretty">{t(al.summary)}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {t(al.claims).map((c) => (
                  <li key={c}>
                    <Badge variant="outline" className="rounded-full border-umber/40 bg-paper/60 px-3 py-1 text-[13px] font-normal">
                      {c}
                    </Badge>
                  </li>
                ))}
              </ul>

              <h4 className="section-label mt-8">{t(al.surveyLabel)}</h4>
              <ul className="mt-4 space-y-3">
                {al.survey.map((row) => (
                  <li key={row.value + row.label.en}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span>{t(row.label)}</span>
                      <span className="font-display text-lg tabular-nums">{row.value}%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-ink/10" aria-hidden="true">
                      <div className="h-full rounded-full bg-umber" style={{ width: `${row.value}%` }} />
                    </div>
                  </li>
                ))}
              </ul>

              <blockquote className="mt-8 border-l-2 border-umber pl-5">
                <p className="font-display text-xl italic leading-snug">“{t(al.quote)}”</p>
                <footer className="mt-2 text-xs text-muted-foreground">{t(al.quoteSource)}</footer>
              </blockquote>
            </div>
          </div>

          <div className="mt-14 grid items-center gap-10 md:grid-cols-[16rem_1fr] lg:grid-cols-[19rem_1fr] lg:gap-14">
            <PrototypeVideo />
            <div className="min-w-0">
              <h4 className="section-label">{t(al.businessLabel)}</h4>
              <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink/15 bg-ink/15 sm:grid-cols-3">
                {al.business.map((b) => (
                  <div key={b.label.en} className="flex flex-col bg-sand-tint p-4">
                    <dt className="text-xs text-muted-foreground">{t(b.label)}</dt>
                    <dd className="order-first font-display text-2xl tabular-nums">{t(b.value)}</dd>
                  </div>
                ))}
              </dl>
              {al.presentationUrl && (
                <Button
                  asChild
                  size="lg"
                  className="mt-8 h-12 rounded-none bg-umber-deep px-6 text-paper shadow-none hover:bg-umber"
                >
                  <a href={al.presentationUrl} target="_blank" rel="noopener noreferrer">
                    {t(al.presentationLabel)}
                    <ArrowUpRight />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <Gallery
            items={al.gallery.slice(1)}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
            thumbClass="aspect-[3/4]"
          />
        </article>

        {/* Instagram */}
        <article className="mt-20 grid items-center gap-10 border-t border-ink/15 pt-20 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <a
            href={ig.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t(ig.cta)}: ${ig.handle}`}
            className="group relative mx-auto block w-full max-w-sm overflow-hidden rounded-sm border border-ink/10 bg-card p-5 shadow-[0_24px_60px_-28px_hsl(var(--ink)/0.45)]"
          >
            {/* a "range of colours" in food tones, after the account name */}
            <div className="grid grid-cols-3 gap-2" aria-hidden="true">
              {[
                "bg-citrus", "bg-batata", "bg-spirulina",
                "bg-sand", "bg-umber", "bg-[#d9a441]",
                "bg-[#7a9a52]", "bg-[#c4473a]", "bg-[#e8d9b5]",
              ].map((c, i) => (
                <span
                  key={i}
                  className={cn("aspect-square rounded-sm transition-transform duration-500 group-hover:scale-[0.96] motion-reduce:transition-none", c)}
                />
              ))}
            </div>
            <span className="mt-5 flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 font-display text-xl">
                <InstagramIcon className="size-5 text-umber-deep" />
                {ig.handle}
              </span>
              <ArrowUpRight className="size-5 text-umber-deep transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </a>
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-citrus-deep">{t(ig.kicker)}</p>
            <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight text-umber sm:text-5xl">{ig.title}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{ig.handle}</p>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/85 text-pretty">{t(ig.summary)}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {t(ig.points).map((c) => (
                <li key={c}>
                  <Badge variant="outline" className="rounded-full border-umber/40 bg-paper/60 px-3 py-1 text-[13px] font-normal">
                    {c}
                  </Badge>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 h-12 rounded-none bg-umber-deep px-6 text-paper shadow-none hover:bg-umber">
              <a href={ig.url} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="size-4" />
                {t(ig.cta)}
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </article>
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
        <SectionHeading index="02" id="education" title={t(d.title)} />
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
        <Education />
        <Experience />
        <Projects />
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
