import Image from "next/image";
const notFoundPage = () => {
  return (
    <div className=" bg-black w-[100%] h-[100vh] relative  sm:px-32 justify-center items-center flex">
      <div className="flex flex-col relative w-[55%] lg:w-[35%]">
        <h1 className="z-[1] text-center font-semibold text-[#F9F2F2] text-[0.9rem] sm:text-[2rem]">
          Error Page | 404{" "}
        </h1>
        <Image
          className="z-[10000] items-center justify-center absolute custom-bounce transition-all ease-in-out"
          src="/undraw_feeling_blue_-4-b7q.svg"
          alt="keren"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default notFoundPage;
