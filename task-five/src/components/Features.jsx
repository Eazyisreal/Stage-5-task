import FeatureImage from "../assets/images/FeatureImage.avif";
import Icon from "../assets/icons/Icon.svg";
import Revisit from "../assets/icons/Revisit.svg";
import Share from "../assets/icons/Share.svg";

const content = [
  {
    title: "Simple Screen Recording",
    text: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
    image: Icon,
  },
  {
    title: "Easy-to-Share URL",
    text: "Share your recordings instantly with a single link. No attachments, no downloads.",
    image: Share,
  },
  {
    title: "Revisit Recordings",
    text: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
    image: Revisit,
  },
];

export default function Features() {
  return (
    <section className="bg-white wrapper flex flex-col justify-center py-20 px-4 items-center gap-16">
      <div className="flex w-full flex-col justify-center items-center gap-2">
        <h2 className="text-center sora text-[1.5rem] md:text-[2.5rem] text[#141414] font-bold">
          Features
        </h2>
        <p className="text-[#616163] text-center work-sans md:text-[1.25rem] ">
          Key Highlights of Our Extension
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  lg:w-[90%] items-center  gap-14">
        <div className="flex flex-col lg:w-1/2 items-center justify-center gap-12">
          {content.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <img src={item.image} alt="" />
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-[#1b233d] inter text-[1.25rem] md:text-[1.75rem] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[#616163]  work-sans md:text-[1.25rem] ">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img className="w-full lg:w-1/2" src={FeatureImage} alt="" />
      </div>
    </section>
  );
}
