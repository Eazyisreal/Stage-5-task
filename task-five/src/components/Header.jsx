import Logo from "../assets/icons/Logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex wrapper bg-white justify-between items-center p-2 md:py-[1.75rem] lg:px-[4.25rem]">
      <div className="flex items-center p-[.625rem] gap-[.65rem]">
        <img src={Logo} alt="Image of Logo" />
        <h1 className="inter text-primary font-bold text-base ">HelpMeOut</h1>
      </div>

      <ul className=" hidden lg:flex py-[.625rem] px-[1.3125rem] justify-center items-center gap-[2.4375rem]">
        <l1 className="text-base work-sans font-medium text-black">Features</l1>
        <l1 className="text-base work-sans font-medium text-black">
          How It Works
        </l1>
      </ul>
      <NavLink to='/Signup'>
        <button className="hidden lg:block border-0 rounded-[.3125rem] text-primary sora text-center text-[1.125rem] font-semibold p-[.75rem] border-bd">
          Get Started
        </button>
      </NavLink>
    </header>
  );
}
