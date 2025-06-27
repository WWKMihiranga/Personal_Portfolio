import PageWrapper from "@/components/PageWrapper";
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
