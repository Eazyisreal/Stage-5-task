import Edit from "../../assets/icons/Edit.svg";
import Video from "../../assets/images/video-frameC.svg";

export default function Hero() {
  return (
    <section className="flex wrapper bg-white justify-between items-center p-2 md:py-[1.75rem] lg:px-[4.25rem]">
      <div className="flex flex-col w-full gap-8">
        <div className="flex items-start gap-2">
          <p className="text-black text-opacity-70 work-sans text-[.75rem] md:text-[1.125rem] ">
            Home
          </p>
          <p className="text-black text-opacity-70 work-sans text-[.75rem] md:text-[1.125rem] ">
            /
          </p>
          <p className="text-black text-opacity-70 work-sans text-[.75rem] md:text-[1.125rem] ">
            Recent Videos{" "}
          </p>
          <p className="text-black text-opacity-70 work-sans text-[.75rem] md:text-[1.125rem] ">
            /
          </p>
          <p className="text-primary work-sans text-[.75rem] md:text-[1.125rem] ">
            How To Create A Facebook Ad Listing{" "}
          </p>
        </div>

        <div className="flex items-center gap-6">
            <h3 className="text-secondary sora text-base md:text-[1.5rem] font-semibold">How To Create A Facebook Ad Listing </h3>
            <img src={Edit} alt="" />
        </div>

        <div className="flex flex-col justify-center items-center gap-6 bg-[#fbfbfb] bg-opacity-50 border border-[#b6b3c6] border-opacity-60 rounded-3xl px-4 pt-4 pb-6">
            <img src={Video} alt="" />
        </div>
      </div>
    </section>
  );
}
