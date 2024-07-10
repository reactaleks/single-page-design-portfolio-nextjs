import FeatureComponent from "./FeatureComponent";
import bgPatternGraphicDesign from "../public/assets/pattern-graphic-design.svg";
import bgPatterUiuxDesign from "../public/assets/pattern-ui-ux.svg";
import bgPatternApps from "../public/assets/pattern-apps.svg";
import bgPatternIllustrations from "../public/assets/pattern-illustrations.svg";
import bgPatternPhotography from "../public/assets/pattern-photography.svg";
import bgPatternMotionGraphics from "../public/assets/pattern-motion-graphics.svg";

export default function FeaturesSectionComponent() {
  return (
    <div className="flex flex-col md:w-[690px] md:h-[570px] md:mx-auto md:mt-6 xl:w-[1111px] xl:h-[364px]">
      <div className="md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
        <FeatureComponent
          bgPattern={bgPatternGraphicDesign}
          bgColour="bg-galactic-blue"
          size="w-[343px] h-[364px] md:w-[333px] md:h-[364px] xl:w-[354px] xl:h-[364px]"
          iconSize="w-[128px] h-[192px]"
          title="Graphic Design"
        />
        <div className="grid grid-cols-2 md:gap-x-4">
          <FeatureComponent
            bgPattern={bgPatterUiuxDesign}
            bgColour="bg-summer-yellow"
            size="w-[159px] h-[159px] md:w-[157px] md:h-[182px] xl:w-[164px] xl:h-[182px]"
            iconSize="w-[64px] h-[64px]"
            title="UI/UX"
          />
          <FeatureComponent
            bgPattern={bgPatternApps}
            bgColour="bg-pink"
            size="w-[159px] h-[159px] md:w-[157px] md:h-[182px] xl:w-[164px] xl:h-[182px]"
            iconSize="w-[64px] h-[64px]"
            title="Apps"
          />
          <div className="justify-center">
            <FeatureComponent
              bgPattern={bgPatternIllustrations}
              bgColour="bg-light-red"
              size="w-[343px] h-[158px] md:w-[333px] md:h-[158px] ml-4 md:ml-[3px] xl:w-[354px] xl:h-[158px]"
              iconSize="w-[128px] h-[64px]"
              title="Illustrations"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:w-[690px] md:gap-4 xl:w-auto xl:grid-cols-1 xl:gap-0 ">
          <FeatureComponent
            bgPattern={bgPatternPhotography}
            bgColour="bg-cyan"
            size="w-[343px] h-[158px] md:w-[333px] md:h-[182px] xl:w-[354px] xl:h-[182px]"
            iconSize="w-[128px] h-[64px]"
            title="Photography"
          />
          <FeatureComponent
            bgPattern={bgPatternMotionGraphics}
            bgColour="bg-dark-purple"
            size="w-[343px] h-[158px] md:w-[333px] md:h-[182px] xl:w-[354px] xl:h-[158px]"
            iconSize="w-[128px] h-[64px]"
            title="Motion Graphics"
          />
        </div>
      </div>
    </div>
  );
}
