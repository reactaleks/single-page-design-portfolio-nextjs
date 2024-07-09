import FeatureComponent from "./FeatureComponent"
import bgPatternGraphicDesign from "../public/assets/pattern-graphic-design.svg"
import bgPatterUiuxDesign from "../public/assets/pattern-ui-ux.svg"
import bgPatternApps from "../public/assets/pattern-apps.svg"
import bgPatternIllustrations from "../public/assets/pattern-apps.svg"
import bgPatternPhotography from "../public/assets/pattern-apps.svg"
import bgPatternMotionGraphics from "../public/assets/pattern-motion-graphics.svg"

export default function FeaturesSectionComponent() {
    return (
        <div className="">
            <FeatureComponent bgPattern={bgPatternGraphicDesign} bgColour="bg-galactic-blue" size="w-[343px] h-[364px]" iconSize="w-[128px] h-[192px]" title="Graphic Design"/>
            <div className="grid grid-cols-2">
                <FeatureComponent bgPattern={bgPatterUiuxDesign} bgColour="bg-summer-yellow" size="w-[159px] h-[159px]" iconSize="w-[64px] h-[64px]" title="UI/UX"/>
                <FeatureComponent bgPattern={bgPatternApps} bgColour="bg-pink" size="w-[159px] h-[159px]" iconSize="w-[64px] h-[64px]" title="Apps"/>
            </div>
            <FeatureComponent bgPattern={bgPatternIllustrations} bgColour="bg-light-red" size="w-[343px] h-[158px]" iconSize="w-[128px] h-[64px]" title="Illustrations"/>
            <FeatureComponent bgPattern={bgPatternPhotography} bgColour="bg-cyan" size="w-[343px] h-[158px]" iconSize="w-[128px] h-[64px]" title="Photography"/>
            <FeatureComponent bgPattern={bgPatternMotionGraphics} bgColour="bg-dark-purple" size="w-[343px] h-[158px]" iconSize="w-[128px] h-[64px]" title="Motion Graphics"/>


        </div>
    )
}