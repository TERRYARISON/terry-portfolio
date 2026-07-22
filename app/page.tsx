import Hero from "@/components/home/Hero";
import SiteIndex from "@/components/home/SiteIndex";
import SelectedWork from "@/components/home/SelectedWork";
import SelectedExperience from "@/components/home/SelectedExperience";
import BooksPreview from "@/components/home/BooksPreview";
import Perspective from "@/components/home/Perspective";
import AboutPreview from "@/components/home/AboutPreview";
import ResumeContactStrip from "@/components/home/ResumeContactStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <SiteIndex />
      <SelectedWork />
      <SelectedExperience />
      <BooksPreview />
      <Perspective />
      <AboutPreview />
      <ResumeContactStrip />
    </>
  );
}
