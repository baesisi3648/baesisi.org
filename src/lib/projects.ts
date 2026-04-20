export type Locale = "ko" | "en";

export type Project = {
  id: string;
  name: string;
  oneliner: Record<Locale, string>;
  tags: string[];
  url?: string;
  status: "live" | "wip" | "soon";
};

export const projects: Project[] = [
  {
    id: "careerchain",
    name: "CareerChain",
    oneliner: {
      ko: "자소서 기반 AI 면접 코칭. GPT-4o 꼬리질문 + 시선·음성 실시간 분석.",
      en: "AI interview coach with resume-aware questions, GPT-4o follow-ups, and live gaze/voice analytics.",
    },
    tags: ["React", "Vite", "GPT-4o", "Firebase"],
    url: "https://careerchain.site",
    status: "live",
  },
  {
    id: "primer_design",
    name: "PrimerForge",
    oneliner: {
      ko: "종 특이적 DNA 프라이머 자동 설계기. NCBI 서열 수집 → 정렬 → AI 검증.",
      en: "Species-specific DNA primer designer. NCBI fetch → alignment → AI review.",
    },
    tags: ["Bioinformatics", "NCBI", "AI"],
    status: "wip",
  },
  {
    id: "virtual_lab",
    name: "Virtual Lab",
    oneliner: {
      ko: "AI 에이전트 팀이 유전자편집식품(NGT) 안전성 평가 프레임워크를 도출.",
      en: "An AI agent team deriving GMO safety assessment frameworks via multi-round meetings.",
    },
    tags: ["LangGraph", "FastAPI", "Next.js"],
    status: "wip",
  },
  {
    id: "scentive",
    name: "Scentive · 잔향",
    oneliner: {
      ko: "감정을 향으로 번역하는 일기 앱. 2,387개 향료 DB + AI 감정 분석.",
      en: "A journal app that translates your emotions into scent. 2,387-fragrance DB + AI analysis.",
    },
    tags: ["Android", "Personal AI"],
    status: "wip",
  },
];
