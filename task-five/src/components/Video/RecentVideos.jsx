import Link from "../../assets/icons/link.svg";
import More from "../../assets/icons/more.svg";
import { NavLink } from "react-router-dom";
import Video from "../../assets/images/video-frame.svg";
import VideoB from "../../assets/images/video-frameB.svg";

const videoContent = [
  {
    id: 1,
    image: Video,
    title: "How to create Facebook Ad listing",
    text: "SEPTEMBER 23, 2023",
    icon: Link,
    button: More,
  },
  {
    id: 2,
    image: VideoB,
    title: "How to create Facebook Ad listing",
    text: "SEPTEMBER 23, 2023",
    icon: Link,
    button: More,
  },
];

export default function RecentVideos() {
  return (
    <section className="bg-white wrapper flex-col justify-center items-center py-10 px-4 flex gap-6">
      <div className="flex flex-col  lg:w-[90%] justify-center items-start gap-6">
        <h2 className="text-black text-opacity-80 work-sans md:text-[1.125rem] font-medium">
          Recent files
        </h2>

        <div className="flex flex-col  justify-center items-center gap-16">
          {videoContent.map((item) => (
            <NavLink to={`/video/${item.id}`} key={item.id}>
              <div className="flex px-4 pt-4 pb-6 flex-col justify-center items-center gap-6 rounded-3xl border-[#b6b3c6] border border-opacity-60 bg-[#fbfbfb] bg-opacity-50">
                <img src={item.image} alt="" />
                <div className="flex w-full justify-between items-start">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <h3 className="text-secondary work-sans md:text-[1.25rem] font-medium capitalize">
                      {item.title}
                    </h3>
                    <p className="text-[#b6b3c6] work-sans text-[.85rem] md:text-base uppercase">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex items-start gap-6">
                    <img src={item.icon} alt="" />
                    <img src={item.button} alt="" />
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
