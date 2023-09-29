import Arrow from "../assets/icons/arrow-right.svg";
import HeroImage from "../assets/images/HeroImage.avif";

export default function Hero() {
  return (
    <section className="flex bg-white wrapper justify-center items-center py-20  px-4 ">
      <div className="flex flex-col lg:flex-row lg:w-[90%] gap-4">
        <div className="flex flex-col w-full items-start justify-center gap-12">
          <div className="flex flex-col items-start  gap-[1.25rem]">
            <h1 className="sora font-bold text-[2rem] w-full lg:w-4/5 md:text-[4rem] leading-[1.1] text-[#141414] ">
              Show Them  Don’t Just Tell
            </h1>
            <p className="text-black text-opacity-75 inter text-[1.25rem]">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
          </div>
          <button className="flex text-white text-center work-sans text-[1.125rem] font-medium justify-center items-center gap-[.625rem] py-[1.375rem] px-[1.5rem] bg-bd rounded-lg">
            Install HelpMeOut
            <img src={Arrow} alt="" />
          </button>
        </div>
        <img className="lg:w-1/2" src={HeroImage} alt="" />
      </div>
    </section>
  );
}
