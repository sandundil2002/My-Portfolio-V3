import {HomeSection} from "@/components/home/HomeSection";
import AboutPage from "@/app/about/page";
import SkillsPage from "@/app/skills/page";
import ProjectsPage from "@/app/projects/page";
import BlogsPage from "@/app/blogs/page";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <BlogsPage />
    </>
  );
}
