import Hero from "@/components/Hero";
import {
  ContactSection,
  PathSection,
  ProjectIndex,
  PublicationSection,
  ToolboxSection,
} from "@/components/Sections";
import TopBar, { type NavLink } from "@/components/TopBar";
import { about } from "@/content/about";
import { contactLinks, profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { publications } from "@/content/publications";
import { skills } from "@/content/skills";

export default function Home() {
  // Nav is derived from /content, so it stays in sync with it.
  const links: NavLink[] = [
    ...(education.length || experience.length ? [{ href: "/#path", label: "Path" }] : []),
    ...(projects.length ? [{ href: "/#projects", label: "Projects" }] : []),
    ...(publications.length ? [{ href: "/#publication", label: "Publication" }] : []),
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <TopBar profile={profile} links={links} />
      <main id="main">
        <Hero profile={profile} about={about} hasProjects={projects.length > 0} />
        <PathSection education={education} experience={experience} />
        {projects.length > 0 && <ProjectIndex projects={projects} />}
        <ToolboxSection skills={skills} />
        <PublicationSection items={publications} />
        <ContactSection profile={profile} links={contactLinks} />
      </main>
    </>
  );
}
