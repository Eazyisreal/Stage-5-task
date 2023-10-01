import Icon1 from "../assets/icons/Icon1.svg";
import Icon2 from "../assets/icons/Icon2.svg";
import Icon3 from "../assets/icons/Icon3.svg";
import Rec from "../assets/icons/Rec.svg";

const content = [
    {
      title: "Record Screen",
      text: ` Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.`,
      image: Icon1,

    },
    {
      title: "Share Your Recording",
      text: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
      image: Icon2,
    },
    {
      title: "Learn Effortlessly",
      text: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
      image: Icon3,
    },
  ];

export default function HowItWorks() {
  return (
    <section className="bg-white wrapper flex flex-col justify-center py-20 px-4 items-center gap-16">
      <div className="flex w-full flex-col justify-center items-center gap-2">
        <h2 className="text-center sora text-[1.5rem] md:text-[2.5rem] text[#141414] font-bold">
          How it works
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:w-[90%] items-end gap-[5.187rem]">
        {content.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-7">
                <div className="flex flex-col items-center gap-8">
                    <img src={item.image} alt="" />
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h3 className="text-[#1b233d] inter text-[1.25rem] md:text-[1.75rem] font-semibold">
                        {item.title}
                        </h3>
                        <p className="text-[#616163] text-center  work-sans md:text-[1.25rem] ">
                        {item.text}
                        </p>
                    </div>
                </div>

                <img className="w-full" src={Rec} alt="" />
            </div>
        ))}
      </div>
    </section>
  );
}
