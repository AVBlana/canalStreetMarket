import Image from "next/image";

const ContentFood = () => {
  return (
    <div>
      <section>
        <div className="py-24 px-16 mt-40 flex">
          <h1
            className="mw-1030 newsreader-semibold"
            style={{ fontSize: 200, lineHeight: "190px" }}
          >
            The Food Hall
          </h1>
          <div className="relative w-full" style={{ maxHeight: "80vh" }}>
            <Image
              src="/assets/photoFoodHall.jpg" // Replace with the path to your image
              alt="Food Market"
              fill
              objectFit="cover" // or "contain" based on your preference
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentFood;
