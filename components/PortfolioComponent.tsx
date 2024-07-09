import Image from "next/image";

import slideone from "../public/assets/image-slide-1.jpg";
import slidetwo from "../public/assets/image-slide-2.jpg";
import slidethree from "../public/assets/image-slide-3.jpg";
import slidefour from "../public/assets/image-slide-4.jpg";
import slidefive from "../public/assets/image-slide-5.jpg";

import slideControlLeft from "../public/assets/icon-arrow-left.svg";
import slideControlRight from "../public/assets/icon-arrow-right.svg";

export default function PortfolioComponent() {
  return (
    <div>
      <div>
        <h2 className="text-heading-s font-jakarta">My Work</h2>
      </div>
      <div></div>
      <div className="w-[144px] h-[64px] flex ">
        <div>
          <Image src={slideControlLeft} alt="" className="w-[64px] h-[64px] bg-black rounded-full" />
        </div>
        <div>
          <Image src={slideControlRight} alt="" className="w-[64px] h-[64px] bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
}
