import Image from "next/image";
import ButtonComponent from "./ButtonComponent";
import profileImage from "../public/assets/image-amy.webp";

interface Props {
  actionType: string;
}

export default function CallToActionComponent({ actionType }: Props) {
  if (actionType === "withImage") {
    return (
      <div className="flex flex-col items-center text-center w-[343px] h-[602px] mx-auto mt-24 justify-between">
        <div>
          <Image
            src={profileImage}
            height={300}
            width={300}
            alt="Image of designer Amy"
            className="rounded-full"
          />
        </div>
        <div className="w-[343px] h-[362px] flex flex-col justify-around">
          <div className="w-[343px] h-[66px]">
            <h2 className="text-[26px] font-jakarta font-bold">
              I’m Amy, and I’d love to work on your next project
            </h2>
          </div>
          <div className="w-[343px] h-[104px] mt-2">
            <p className="text-medium-brown text-main  font-jakarta ">
              I love working with others to create beautiful design solutions.
              I’ve designed everything from brand illustrations to complete
              mobile apps. I’m also handy with a camera!
            </p>
          </div>
          <div className="w-[343px] h-[44px] flex justify-center mt-8">
            <ButtonComponent buttonType="orange" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-black w-[343px] h-[352px] mx-auto flex flex-col justify-center rounded-xl mt-16">
        <div className="w-[295px] h-[255px] flex flex-col justify-between mx-auto text-center">
          <div>
            <h2 className=" text-light-cream font-jakarta w-[240px] h-[33px] text-[26px] font-bold mx-auto">
              Book a call with me
            </h2>
          </div>

          <div className="w-[295px] h-[130px] mx-auto">
            <p className="text-light-cream leading-main font-jakarta text-[16px]">
              I’d love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </div>

          <div className="w-[176px] h-[44px] mx-auto">
            <ButtonComponent buttonType="organge" />
          </div>
        </div>
      </div>
    );
  }
}
