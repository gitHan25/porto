import {
  siCplusplus, siDart, siDocker, siFigma, siFlutter, siGit, siGo, siHuggingface, siLaravel,
  siMysql, siOpenjdk, siPandas, siPhp, siPostgresql, siPostman, siPython, siPytorch,
  siScikitlearn, siSpringboot,
} from "simple-icons";

/** Technology name (as written in /content) to its simple-icons mark. Names with no mark show as text. */
const ICONS: Record<string, { path: string; title: string }> = {
  Go: siGo, Java: siOpenjdk, Python: siPython, PyTorch: siPytorch, PHP: siPhp, Laravel: siLaravel,
  Sanctum: siLaravel, MySQL: siMysql, Flutter: siFlutter, Dart: siDart, PostgreSQL: siPostgresql,
  "Spring Boot": siSpringboot, IndoBERT: siHuggingface, "scikit-learn": siScikitlearn,
  pandas: siPandas, "C++": siCplusplus, Git: siGit, Docker: siDocker, Postman: siPostman, Figma: siFigma,
};

/** Strip a trailing [PLACEHOLDER ...] marker so the base name can be looked up. */
export const baseName = (name: string): string => name.replace(/\s*\[PLACEHOLDER[^\]]*\]/, "").trim();

export const iconFor = (name: string) => ICONS[baseName(name)];
