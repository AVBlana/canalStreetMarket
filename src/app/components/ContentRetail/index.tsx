import Image from "next/image";

const ContentRetail = () => {
  return (
    <div>
      <section>
        <div className="py-24 px-16 mt-40 flex">
          <h1
            className="mw-1030 newsreader-semibold"
            style={{ fontSize: 200, lineHeight: "190px" }}
          >
            The Retail Market
          </h1>
          <div className="relative w-full" style={{ maxHeight: "80vh" }}>
            <Image
              src="/assets/photoRetail.jpg"
              alt="Food Market"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentRetail;
