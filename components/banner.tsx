import { Banner as BannerType } from "@/types";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({ weight: "400", subsets: ["latin"] });

interface BannerProps {
  data: BannerType;
  description1?: String;
  description2?: String;
}

const Banner: React.FC<BannerProps> = ({
  data,
  description1,
  description2,
}) => {
  return (
    <div className="p-2 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-8 bg-white rounded-xl">
          <div
            className={`${russoOne.className} text-3xl sm:text-5xl lg:text-6xl mb-4`}
          >
            {data?.label}
          </div>
          <p className="text-gray-600">{description1}</p>
          <p className="text-gray-600">{description2}</p>
        </div>
        <div
          className="lg:w-1/3 relative aspect-[2.4/1] rounded-lg bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${data?.imageUrl})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
