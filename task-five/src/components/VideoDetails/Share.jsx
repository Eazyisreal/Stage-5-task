import Facebook from "../../assets/icons/Facebook-icon.svg";
import Telegram from "../../assets/icons/Telegram.svg";
import Whatsapp from "../../assets/icons/Whatsapp.svg";

const socials = [
  {
    image: Facebook,
    text: "Facebook",
  },
  {
    image: Whatsapp,
    text: "Whatsapp",
  },
  {
    image: Telegram,
    text: "Telegram",
  },
];
export default function Share() {
  return (
    <section className="flex wrapper bg-white justify-between items-center p-2 md:py-[1.75rem] lg:px-[4.25rem]">
      <div className="flex flex-col gap-2">
        <h1 className="work-sans text-[#08051E] text-base md:text-[1.25rem] font-medium">
          Share your video
        </h1>
        <div className="flex items-center justify-center gap-4">
          {socials.map((item) => (
            <div key={item} className="flex p-[.75rem] justify-center items-center gap-2 rounded-[.375rem] border border-primary">
                <img src={item.image} alt="" /> <p className="text-[#08051E] inter text-[.75rem] md:text-base font-medium tracking-wider ">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
