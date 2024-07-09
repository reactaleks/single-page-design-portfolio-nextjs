import NavigationComponent from "@/components/NavigationComponent";
import HeroComponent from "@/components/HeroComponent";
import FeaturesSectionComponent from "@/components/FeaturesSectionComponent";
import CallToActionComponent from "@/components/CallToActionComponent";
import PortfolioComponent from "@/components/PortfolioComponent";

const portfolioImages = [
  "/assets/image-slide-1.jpg",
  "/assets/image-slide-2.jpg",
  "/assets/image-slide-3.jpg",
  "/assets/image-slide-4.jpg",
  "/assets/image-slide-5.jpg",
];


export default function Home() {
  return (
    <div className="flex flex-col justify-around">
      <NavigationComponent navType="nav"/>
      <main className="flex min-h-screen flex-col justify-between">
        <HeroComponent/>
        <FeaturesSectionComponent/>
        <CallToActionComponent actionType="withImage"/>
        <PortfolioComponent/>
        <CallToActionComponent actionType="noImage"/>

      </main>
      <NavigationComponent navType="footer"/>
    </div>

  );
}
