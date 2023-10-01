import Copy from "../../assets/icons/Copy.svg";

export default function Details() {
  return (
    <section className="flex flex-col wrapper bg-white justify-between items-center p-2 md:py-[1.75rem] lg:px-[4.25rem]">
      <div className="flex flex-col gap-10 lg:flex-row w-full  items-start justify-between">
        <div className="flex w-full items-start gap-[5.23rem] relative">
          <input
            placeholder="enter email of receiver"
            className=" placeholder:text-secondary placeholder:text-[.75rem] h-20 placeholder:text-opacity-50 placeholder:work-sans md:placeholder:text-[1.125rem] flex w-full px-6 py-[.875rem] justify-between items-center rounded-[.75rem] bg-[#b6b3c6] border border-[#e7e7ed]"
          />
          <button className="py-[.625rem] right-2 top-5 text-white font-medium absolute px-[1.125rem] rounded-[.5rem] bg-[#605C84]">
            Send
          </button>
        </div>
        <div className="flex w-full items-start gap-[5.23rem] relative">
          <input
            type="text"
            placeholder="https://www.helpmeout/Untitled_Video_20232509"
            className="flex w-full justify-between items-center h-20 placeholder:text-[.65rem] md:placeholder:text-base placeholder:truncate placeholder:overflow-ellipsis placeholder:text-[#4b4b4b] placeholder:work-sans  p-[.875rem] rounded-[.75rem] border border-[#929292] bg-[#fafafa] "
          />
          <button className="py-[.625rem] flex gap-2 right-2 top-5 text-white font-medium absolute px-[1.125rem] rounded-[.5rem] border border-primary">
            <img src={Copy} alt="" />
            <span className="text-primary ">Copy URL</span>
          </button>
        </div>
      </div>
    </section>
  );
}
