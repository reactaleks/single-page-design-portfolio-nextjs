import Image from "next/image";
import ButtonComponent from "./ButtonComponent";
import profileImage from "../public/assets/image-amy.webp";

interface Props {
  actionType: string;
}

export default function CallToActionComponent({ actionType }: Props) {
  if (actionType === "withImage") {
    return (
      <div
        className="flex flex-col items-center text-center w-[343px] h-[602px] mx-auto mt-24 justify-between md:flex-row md:w-[768px] md:h-[364px] md:justify-center md:mt-28
        xl:w-[1110px] xl:h-[445px] xl:justify-between"
      >
        <div className="md:w-[324px] md:h-[364px] xl:w-[445px] xl:h-[445px]">
          <Image
            src={profileImage}
            height={300}
            width={300}
            alt="Image of designer Amy"
            className="rounded-full md:absolute md:-left-[50px] h-[300px] w-[300px] md:h-[364px] md:w-[364px] xl:relative xl:-left-0 xl:w-[445px] xl:h-[445px]"
          />
        </div>
        <div className="w-[343px] h-[362px] flex flex-col justify-around md:text-start md:w-[339px] md:h-[364px] md:justify-between xl:w-[540px] xl:h-[306px]">
          <div className="w-[343px] h-[66px] xl:w-[540px]">
            <h2 className="text-[26px] font-jakarta font-bold md:text-heading-s md:leading-heading-s xl:text-heading-m xl:leading-heading-m">
              I’m Amy, and I’d love to work on your next project
            </h2>
          </div>
          <div className="w-[343px] h-[104px] xl:w-[540px] xl:h-[84px] mt-2 ">
            <p className="text-medium-brown text-main font-jakarta md:leading-main">
              I love working with others to create beautiful design solutions.
              I’ve designed everything from brand illustrations to complete
              mobile apps. I’m also handy with a camera!
            </p>
          </div>
          <div className="w-[343px] h-[44px] flex justify-center mt-8 md:justify-start md:mt-0">
            <ButtonComponent buttonType="orange" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-black w-[343px] h-[352px] mx-auto flex flex-col justify-center rounded-xl mt-16 md:w-[690px] md:h-[352px] md:mt-28 md:mb-6 xl:w-[1110px]">
        <div className="w-[295px] h-[255px] flex flex-col xl:flex-row justify-between mx-auto text-center md:w-[540px] md:h-[232px] xl:w-[1110px]">
          <div className="flex flex-col xl:w-[700px] xl:h-[159px] xl:text-start xl:my-auto">
            <div>
              <h2 className=" text-light-cream font-jakarta w-[240px] h-[33px] text-[26px] font-bold mx-auto md:text-heading-s md:w-[540px]  xl:text-heading-m xl:leading-heading-m">
                Book a call with me
              </h2>
            </div>

            <div className="w-[295px] h-[130px] mx-auto md:mt-8 md:w-[540px] md:h-[84px] xl:mt-8">
              <p className="text-light-cream leading-main font-jakarta text-[16px] md:text-main">
                I’d love to have a chat to see how I can help you. The best
                first step is for us to discuss your project during a free
                consultation. Then we can move forward from there.
              </p>
            </div>
          </div>

          <div className="w-[176px] h-[44px] mx-auto md:w-[540px] xl:w-auto  xl:content-center xl:h-full">
            <ButtonComponent buttonType="orange" />
          </div>
        </div>
      </div>
    );
  }
}
