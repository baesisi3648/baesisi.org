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
    tags: ["MediaPipe", "Whisper", "GPT-4o", "React", "Firebase"],
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
    tags: ["Next.js", "FastAPI", "Biopython", "NCBI", "shadcn/ui", "GPT-4o"],
    url: "https://pjt-primer-design.vercel.app",
    status: "live",
  },
  {
    id: "virtual_lab",
    name: "Virtual Lab",
    oneliner: {
      ko: "AI 에이전트 팀이 유전자편집식품(NGT) 안전성 평가 프레임워크를 도출.",
      en: "An AI agent team deriving GMO safety assessment frameworks via multi-round meetings.",
    },
    tags: ["Next.js", "FastAPI", "LangGraph", "GPT-5", "Pinecone"],
    url: "https://virtual-lab-chi.vercel.app",
    status: "live",
  },
  {
    id: "scentive",
    name: "Scentive · 잔향",
    oneliner: {
      ko: "감정을 향으로 번역하는 일기 앱. 2,387개 향료 DB + AI 감정 분석.",
      en: "A journal app that translates your emotions into scent. 2,387-fragrance DB + AI analysis.",
    },
    tags: ["Kotlin", "Jetpack Compose", "FastAPI", "Azure", "GPT-4o"],
    url: "https://janhyang-web.web.app/app",
    status: "live",
  },
  {
    id: "marryroute",
    name: "MarryRoute",
    oneliner: {
      ko: "AI 플래너 '마리'와 함께 결혼 준비를 끝내는 앱. 자동 체크리스트 + 업체 검색 + 챗봇이 일정까지 직접 등록.",
      en: "An AI wedding planner ‘Mari’ that auto-generates checklists, compares vendors, and books schedules from chat.",
    },
    tags: ["Next.js 16", "FastAPI", "LangGraph", "Supabase", "GPT-4o-mini", "Tavily"],
    url: "https://marryroute.vercel.app",
    status: "live",
  },
  {
    id: "promptlog",
    name: "PromptLog",
    oneliner: {
      ko: "터미널에서 사라지는 좋은 프롬프트를 기록하고 A/B 테스트하는 프롬프트 매니저.",
      en: "A prompt manager for vibe coders — log your best terminal prompts and A/B test them.",
    },
    tags: ["Next.js", "FastAPI", "Supabase", "TypeScript", "shadcn/ui"],
    status: "wip",
  },
  {
    id: "bio_marble",
    name: "Bio Marble",
    oneliner: {
      ko: "생명과학 수업용 부루마블 보드게임. 모둠 대결 + 풀스크린 퀴즈 + 50문제 내장, 교사용 문제 관리 페이지.",
      en: "A Monopoly-style board game for high-school biology class. Team battles, quizzes, and a teacher admin panel.",
    },
    tags: ["JavaScript", "Canvas", "Board Game", "Education", "Cloudflare"],
    url: "https://bio-marble.pages.dev",
    status: "live",
  },
];
