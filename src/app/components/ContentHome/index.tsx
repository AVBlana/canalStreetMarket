import Image from "next/image";
import { LogoIcon } from "../LogoIcon";

const ContentHome = () => {
  return (
    <div>
      <section>
        <div className="py-24 px-16 mt-40">
          <h1 className="mw-1030 text-7xl leading-tight newsreader-semibold">
            Canal Street Market is a carefully curated retail market, food hall
            & community space open year-round at 265 Canal Street. Support Small
            Business this weekend!
          </h1>
        </div>

        <div className="relative w-full my-20" style={{ minHeight: "80vh" }}>
          {/* Adjust height as needed */}
          <Image
            src="/assets/photo1.jpg" // Replace with the path to your image
            alt="Canal Street Market NYC"
            layout="fill"
            objectFit="cover" // or "contain" based on your preference
          />
        </div>
      </section>
    </div>
  );
};

export default ContentHome;
