import Image from "next/image";

interface Props {
  bgPattern: string;
  bgColour: string;
  size: string;
  iconSize: string;
  title: string;
}

export default function FeatureComponent({ bgPattern, bgColour, size, iconSize, title }: Props) {
  return (
    <div
      className={`
            mx-auto 
            ${bgColour}
            ${size}
            flex flex-col justify-around
            rounded-xl
            `}
    >
      <div className="grid grid-cols-2">
        <div></div>
        <div className="flex justify-center">
          <Image src={bgPattern} alt="" className={`${iconSize}`} />
        </div>
      </div>
      <div className="flex text-light-cream justify-start ml-6">
        <h3 className="text-heading-s font-jakarta">{title}</h3>
      </div>
    </div>
  );
}
