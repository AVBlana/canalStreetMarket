import Image from "next/image";
import { LogoIcon } from "../LogoIcon";

const ContentHome = () => {
  return (
    <div>
      <section>
        <div className="py-24 px-16 mt-40">
          <h1 className="text-7xl leading-tight newsreader-semibold max-w-screen-xl">
            Canal Street Market is a carefully curated retail market, food hall
            & community space open year-round at 265 Canal Street. Support Small
            Business this weekend!
          </h1>
        </div>
      </section>
      <section>
        <div className="relative w-full my-20" style={{ minHeight: "80vh" }}>
          <Image
            src="/assets/photo1.jpg"
            alt="Canal Street Market NYC"
            fill
            objectFit="cover"
          />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default ContentHome;
