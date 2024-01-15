const NewsHeadLines = () => {
  return (
    <div className="bg-white rounded-xl flex flex-col py-3">
      <div>
        <h1 className="text-black text-3xl font-semibold text-center">
          Todays&apos;s Headlines{" "}
        </h1>
      </div>
      <div className="flex flex-col">
        <figure className="flex flex-row justify-around p-3">
          <img
            className="h-full border-gray-50 border-2 w-full rounded-xl"
            src="https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/ANI-20231221134-0_1703152312169_1703152324975.jpg"
            alt=""
          />
        </figure>
        <figcaption>
          <h3 className="text-black text-xl font-semibold px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim
            ipsam laudantium eaque rerum nisi voluptas harum, totam dolore
            voluptatum?
          </h3>
        </figcaption>
      </div>
    </div>
  );
};

export default NewsHeadLines;
