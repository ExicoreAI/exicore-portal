import HeroSection from "../components/HeroSection";
import ValueProps from "../components/ValueProps";
import SolutionsGrid from "../components/SolutionsGrid";
import DashboardPreview from "../components/DashboardPreview";

const HomeContent = () => {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <SolutionsGrid />
      <DashboardPreview />
    </>
  );
};

export default HomeContent;