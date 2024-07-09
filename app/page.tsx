import NavigationComponent from "@/components/NavigationComponent";
import HeroComponent from "@/components/HeroComponent";
import FeaturesSectionComponent from "@/components/FeaturesSectionComponent";
import CallToActionComponent from "@/components/CallToActionComponent";
import PortfolioComponent from "@/components/PortfolioComponent";
export default function Home() {
  return (
    <div className="flex flex-col justify-around">
      <NavigationComponent navType="nav"/>
      <main className="flex min-h-screen flex-col justify-between">
        <HeroComponent/>
        <FeaturesSectionComponent/>
        <CallToActionComponent actionType="withImage"/>
      </main>
      <PortfolioComponent/>
      <CallToActionComponent actionType="noImage"/>
      <NavigationComponent navType="footer"/>
    </div>

  );
}
