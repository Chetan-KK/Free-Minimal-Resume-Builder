import { create } from "zustand";

interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
}

interface ResumeStore {
  resumeData: ResumeData;
  setResumeData: (data: Partial<ResumeData>) => void;
}

const storedData =
  JSON.parse(localStorage.getItem("resumeData") as string) || {};

export const useResumeData = create<ResumeStore>((set) => ({
  resumeData: {
    fullName: storedData.fullName || "",
    email: storedData.email || "",
    phone: storedData.phone || "",
    linkedin: storedData.linkedin || "",
    github: storedData.github || "",
    website: storedData.website || "",
  },
  setResumeData: (data) =>
    set((state) => ({ resumeData: { ...state.resumeData, ...data } })),
}));

// summary
interface ResumeSummary {
  summary: string;
}

interface SummaryStore {
  resumeSummary: ResumeSummary;
  setResumeSummary: (summary: ResumeSummary) => void;
}

const storedSummary =
  JSON.parse(localStorage.getItem("resumeSummary") as string) || {};

export const useSummary = create<SummaryStore>((set) => ({
  resumeSummary: {
    summary: storedSummary.summary || "",
  },
  setResumeSummary: (summary) => set({ resumeSummary: summary }),
}));

// experience

interface ExperienceData {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
  [key: string]: string;
}

interface ExperienceStore {
  experienceData: ExperienceData[];
  setExperienceData: (data: ExperienceData[]) => void;
}

const storedExperienceData =
  JSON.parse(localStorage.getItem("experienceData") as string) || [];

export const useExperienceData = create<ExperienceStore>((set) => ({
  experienceData: storedExperienceData,
  setExperienceData: (data) => set({ experienceData: data }),
}));

// projects

interface ProjectData {
  projectName: string;
  usedLanguages: string;
  startDate: string;
  endDate: string;
  description: string;
  [key: string]: string;
}

interface ProjectStore {
  projectData: ProjectData[];
  setProjectData: (data: ProjectData[]) => void;
}

const storedProjectData =
  JSON.parse(localStorage.getItem("projectData") as string) || [];

export const useProjectData = create<ProjectStore>((set) => ({
  projectData: storedProjectData,
  setProjectData: (data) => set({ projectData: data }),
}));

// achievements

interface AchievementsData {
  year: string;
  title: string;
  [key: string]: string;
}

interface AchievementsStore {
  achievementsData: AchievementsData[];
  setAchievementsData: (data: AchievementsData[]) => void;
}

const storedAchievementsData =
  JSON.parse(localStorage.getItem("achievementsData") as string) || [];

export const useAchievementsData = create<AchievementsStore>((set) => ({
  achievementsData: storedAchievementsData,
  setAchievementsData: (data) => set({ achievementsData: data }),
}));

// education

interface EducationData {
  universityName: string;
  qualificationName: string;
  result: string;
  startDate: string;
  endDate: string;
  [key: string]: string;
}

interface EducationStore {
  educationData: EducationData[];
  setEducationData: (data: EducationData[]) => void;
}

const storedEducationData =
  JSON.parse(localStorage.getItem("educationData") as string) || [];

export const useEducationData = create<EducationStore>((set) => ({
  educationData: storedEducationData,
  setEducationData: (data) => set({ educationData: data }),
}));

// certifications

interface CertificationData {
  certificationName: string;
  certificationYear: string;
  learnedLanguages: string;
  [key: string]: string;
}

interface CertificationsStore {
  certificationsData: CertificationData[];
  setCertificationsData: (data: CertificationData[]) => void;
}

const storedCertificationsData =
  JSON.parse(localStorage.getItem("certificationsData") as string) || [];

export const useCertificationsData = create<CertificationsStore>((set) => ({
  certificationsData: storedCertificationsData,
  setCertificationsData: (data) => set({ certificationsData: data }),
}));

// skils

interface SkillData {
  skillType: string;
  skills: string;
  [key: string]: string;
}

interface SkillsStore {
  skillsData: SkillData[];
  setSkillsData: (data: SkillData[]) => void;
}

const storedSkillsData =
  JSON.parse(localStorage.getItem("skillsData") as string) || [];

export const useSkillsData = create<SkillsStore>((set) => ({
  skillsData: storedSkillsData,
  setSkillsData: (data) => set({ skillsData: data }),
}));
