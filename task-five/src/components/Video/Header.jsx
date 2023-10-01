import Arrow from "../../assets/icons/arrow-down.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import Profile from "../../assets/icons/Profile.svg";

export default function Header() {
  return (
    <header className="flex wrapper bg-white justify-between items-center p-2 md:py-[1.75rem] lg:px-[4.25rem]">
      <Link to="/">
        <div className="flex items-center p-[.625rem] gap-[.65rem]">
          <img src={Logo} alt="Image of Logo" />
          <h1 className="inter text-primary font-bold text-base ">HelpMeOut</h1>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-2">
        <img src={Profile} alt="Profile icon" />
        <h3 className="text-secondary work-sans text-base ">John Mark</h3>
        <img src={Arrow} alt="An arrow point downwards" />
      </div>
    </header>
  );
}
