"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";
type Language = "en" | "id";

type Dictionary = Record<string, { en: string; id: string }>;

const dictionary: Dictionary = {
  navAbout: { en: "About", id: "Tentang" },
  navExperience: { en: "Experience", id: "Pengalaman" },
  navWork: { en: "Work", id: "Proyek" },
  navContact: { en: "Contact", id: "Kontak" },
  sectionAbout: { en: "01 — ABOUT", id: "01 — TENTANG" },
  sectionExperience: { en: "02 — EXPERIENCE", id: "02 — PENGALAMAN" },
  sectionSkills: { en: "03 — SKILLS", id: "03 — KEAHLIAN" },
  sectionWork: { en: "04 — WORK", id: "04 — PROYEK" },
  sectionShowcase: { en: "04 — PORTFOLIO SHOWCASE", id: "04 — PORTOFOLIO SHOWCASE" },
  sectionEducation: { en: "05 — EDUCATION", id: "05 — PENDIDIKAN" },
  sectionAchievements: { en: "06 — ACHIEVEMENTS", id: "06 — PENCAPAIAN" },
  skillsLang: { en: "Languages & Frameworks", id: "Bahasa & Framework" },
  skillsSystems: { en: "Systems & Methodologies", id: "Sistem & Metodologi" },
  skillsTools: { en: "Tools & Practices", id: "Tools & Praktik" },
  heroScroll: { en: "SCROLL TO EXPLORE", id: "SCROLL UNTUK JELAJAH" },
  projectView: { en: "VIEW", id: "LIHAT" },
  contactHeading: { en: "LET'S WORK TOGETHER", id: "MARI BERKOLABORASI" },
  contactEmail: { en: "Email", id: "Email" },
  contactPhone: { en: "Phone", id: "Telepon" },
  contactLocation: { en: "Location", id: "Lokasi" },
  contactConnect: { en: "Connect", id: "Terhubung" },
  startProject: { en: "Start a Project", id: "Mulai Proyek" },
  finalScore: { en: "Final Score", id: "Nilai Akhir" },
  footerBuilt: {
    en: "Built with Next.js & Framer Motion",
    id: "Dibuat dengan Next.js & Framer Motion",
  },
  loading: { en: "Loading...", id: "Memuat..." },
};

const valueTranslationId: Record<string, string> = {
  "Software Engineer": "Software Engineer",
  "Full Stack Developer": "Pengembang Full Stack",
  "Results-driven Software Engineer with extensive experience managing and optimizing engineering projects from development to operational execution. Proficient in strategic project management, scalable applications, and leveraging FMS and ERP systems.":
    "Software Engineer berorientasi hasil dengan pengalaman luas dalam mengelola dan mengoptimalkan proyek engineering dari tahap pengembangan hingga operasional. Mahir dalam manajemen proyek strategis, aplikasi skalabel, serta pemanfaatan sistem FMS dan ERP.",
  "Years Experience": "Tahun Pengalaman",
  "Projects Delivered": "Proyek Selesai",
  "Project Management Officer": "Project Management Officer",
  "Software Developer": "Software Developer",
  "Fullstack Web Developer": "Fullstack Web Developer",
  "Junior Programmer Intern": "Junior Programmer Intern",
  "Oversee engineering project timelines and resource allocation":
    "Mengawasi timeline proyek engineering dan alokasi sumber daya",
  "Coordinate cross-functional teams for seamless execution":
    "Mengkoordinasikan tim lintas fungsi untuk eksekusi yang lancar",
  "Implement project management methodologies and best practices":
    "Menerapkan metodologi manajemen proyek dan best practice",
  "Develop and maintain full-stack web applications":
    "Mengembangkan dan memelihara aplikasi web full-stack",
  "Implement FMS and ERP monitoring dashboards":
    "Mengimplementasikan dashboard monitoring FMS dan ERP",
  "Optimize database queries and application performance":
    "Mengoptimalkan query database dan performa aplikasi",
  "Built responsive web applications with React and Next.js":
    "Membangun aplikasi web responsif dengan React dan Next.js",
  "Collaborated with designers on UI/UX implementation":
    "Berkolaborasi dengan desainer dalam implementasi UI/UX",
  "Developed reusable component libraries":
    "Mengembangkan library komponen yang reusable",
  "Developed e-commerce platform for car rental services":
    "Mengembangkan platform e-commerce untuk layanan rental mobil",
  "Implemented responsive design and mobile optimization":
    "Menerapkan desain responsif dan optimasi mobile",
  "Integrated payment gateway and booking systems":
    "Mengintegrasikan payment gateway dan sistem booking",
  "Trained in modern full-stack web development":
    "Mendalami pengembangan web full-stack modern",
  "Built capstone project using MERN stack":
    "Membangun proyek capstone menggunakan stack MERN",
  "Achieved final score of 88.5/100":
    "Meraih nilai akhir 88.5/100",
  "Developed internal web applications with Laravel and MySQL":
    "Mengembangkan aplikasi web internal dengan Laravel dan MySQL",
  "Improved data management and internal efficiency":
    "Meningkatkan manajemen data dan efisiensi internal",
  "Implemented database optimization techniques":
    "Menerapkan teknik optimasi database",
  "Responsive e-commerce platform for car rentals":
    "Platform e-commerce responsif untuk rental mobil",
  "Web application for cultural affairs department":
    "Aplikasi web untuk dinas kebudayaan",
  "Monitoring dashboard for operational visibility":
    "Dashboard monitoring untuk visibilitas operasional",
  "Data Management": "Manajemen Data",
  "Efficiency Improvement": "Peningkatan Efisiensi",
  "Database Optimization": "Optimasi Database",
  "Workforce Attendance": "Kehadiran Karyawan",
  "Approval Workflows": "Alur Persetujuan",
  "Performance Metrics": "Metrik Kinerja",
  "Bachelor of Computer Science": "Sarjana Ilmu Komputer",
  "Fullstack Web Developer Bootcamp":
    "Bootcamp Fullstack Web Developer",
  Languages: "Bahasa",
  Organization: "Organisasi",
  Journal: "Jurnal",
};

type SitePreferencesValue = {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof dictionary) => string;
  tv: (value: string) => string;
};

const SitePreferencesContext = createContext<SitePreferencesValue | null>(null);

const THEME_KEY = "portfolio-theme";
const LANGUAGE_KEY = "portfolio-language";

export const SitePreferencesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY) as Language | null;

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
    if (savedLanguage === "en" || savedLanguage === "id") {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  }, []);

  const t = useCallback(
    (key: keyof typeof dictionary) => dictionary[key][language],
    [language],
  );
  const tv = useCallback(
    (value: string) =>
      language === "id" ? (valueTranslationId[value] ?? value) : value,
    [language],
  );

  const value = useMemo(
    () => ({ theme, language, toggleTheme, toggleLanguage, t, tv }),
    [theme, language, toggleTheme, toggleLanguage, t, tv],
  );

  return (
    <SitePreferencesContext.Provider value={value}>
      {children}
    </SitePreferencesContext.Provider>
  );
};

export const useSitePreferences = () => {
  const context = useContext(SitePreferencesContext);
  if (!context) {
    throw new Error(
      "useSitePreferences must be used within SitePreferencesProvider",
    );
  }
  return context;
};
