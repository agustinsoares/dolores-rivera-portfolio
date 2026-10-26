import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LANGS, type Lang } from "@/content";

const STORAGE_KEY = "dr-lang";

const meta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "María Dolores Rivera · Food Engineer",
    description:
      "Food engineer based in Bergen, Norway. R&D, product development, quality and operations.",
  },
  no: {
    title: "María Dolores Rivera · Næringsmiddelingeniør",
    description:
      "Næringsmiddelingeniør bosatt i Bergen. FoU, produktutvikling, kvalitet og drift.",
  },
  es: {
    title: "María Dolores Rivera · Ingeniera en Alimentos",
    description:
      "Ingeniera en alimentos radicada en Bergen, Noruega. I+D, desarrollo de productos, calidad y operaciones.",
  },
};

function isLang(v: unknown): v is Lang {
  return LANGS.some((l) => l.code === v);
}

function initialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (isLang(fromUrl)) return fromUrl;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // storage can be unavailable (private mode); fall through to the default
  }
  // English is the default; only switch automatically for Norwegian or Spanish browsers
  const browser = (navigator.language || "en").toLowerCase();
  if (/^(nb|nn|no)\b/.test(browser)) return "no";
  if (browser.startsWith("es")) return "es";
  return "en";
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "no" ? "nb" : lang;
    document.title = meta[lang].title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta[lang].description);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  // t() picks the current language out of an { en, no, es } record
  const t = <V,>(r: Record<Lang, V>): V => r[lang];
  return { lang, setLang, t };
}
