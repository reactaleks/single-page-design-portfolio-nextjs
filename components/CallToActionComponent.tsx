import Image from "next/image";
import ButtonComponent from "./ButtonComponent";
import profileImage from "../public/assets/image-amy.webp";

interface Props {
  actionType: string;
}

export default function CallToActionComponent({ actionType }: Props) {
  if (actionType === "withImage") {
    return (
      <div className="flex flex-col items-center text-center">
        <div>
          <Image
            src={profileImage}
            height={300}
            width={300}
            alt="Image of designer Amy"
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-heading-s font-jakarta">I’m Amy, and I’d love to work on your next project</h2>
        </div>
        <div>
          <p className="text-black text-main leading-main font-jakarta">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
        </div>
        <div>
          <ButtonComponent buttonType="orange" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-black rounded-md">
        <div>
          <h2 className="text-heading-s text-light-cream font-jakarta">Book a call with me</h2>
        </div>

        <div>
          <p className="text-light-cream text-main leading-main font-jakarta">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>

        <div>
          <ButtonComponent buttonType="organge" />
        </div>
      </div>
    );
  }
}
