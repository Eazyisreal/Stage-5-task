import Search from "../../assets/icons/Search.svg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row gap-8 wrapper bg-white justify-between items-center p-2 md:py-[1.75rem] lg:px-[4.25rem]">
      <div className="flex w-full md:w-1/3 flex-col gap-2">
        <h1 className="sora text-secondary text-[1.25rem] md:text-[2rem] font-bold">
          Hello, John Mark
        </h1>
        <p className="text-black text-opacity-70 work-sans md:text-[1.125rem]">
          Here are your recorded videos
        </p>
      </div>
      <div className="flex w-full md:w-[25rem] relative">
        <input
          name="Search"
          id="Search"
          placeholder="Search for a particular video"
          type="text"
          className="flex w-full  outline-none active:border-primary focus:border-primary placeholder:text-[#c3c3c3] placeholder:work-sans placeholder:text-[.875rem] py-6 px-10 flex-col justify-center items-center bg-[#b6b3c6] bg-opacity-[14%] gap-2 rounded-[.75rem] border border-[#e7e7ed] "
        />
        <img className="absolute top-7 left-3" src={Search} alt="Search icon" />
      </div>
    </section>
  );
}
