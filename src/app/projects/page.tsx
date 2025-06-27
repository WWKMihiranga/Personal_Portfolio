import { projects } from "@/lib/projects";
import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="p-8 max-w-7xl mx-auto">
        <Projects />
      </section>
    </PageWrapper>
  );
}
