import Facebook from "../assets/icons/Facebook.svg";
import Google from "../assets/icons/Google.svg";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo.svg";

export default function Signup() {
  return (
    <section className="flex flex-col  wrapper bg-white  p-2 md:py-[1.75rem] lg:px-[4.25rem]">
      <Link to='/'>
        <div className="flex items-center p-[.625rem] gap-[.65rem]">
          <img src={Logo} alt="Image of Logo" />
          <h1 className="inter text-primary font-bold text-base ">HelpMeOut</h1>
        </div>
      </Link>
      <div className="flex flex-col justify-center py-20  items-center w-full">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <h1 className="inter text-[#14141] text-[1.5rem] md:text-[2rem] font-bold tracking-wide">
              Log in or Sign up
            </h1>
            <p className="text-[#434343] text-[.875rem] tracking-[.00875rem] w-3/4 text-center">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>

          <div className="flex flex-col w-full items-start gap-6">
            <button className="py-[.81875rem] md:pl-[7.69rem] md:pr-[8.31rem] w-full justify-center items-center flex gap-2 rounded-[.75rem] border border-[#141414] bg-white">
              <img src={Google} alt="" />
              <span className="text-[#141414] text-[.85rem] w md:text-base inter font-medium">
                Continue with Google
              </span>
            </button>
            <button className="py-[.81875rem] md:pl-[7.69rem] md:pr-[8.31rem] w-full justify-center items-center flex gap-2 rounded-[.75rem] border border-[#141414] bg-white">
              <img src={Facebook} alt="" />
              <span className="text-[#141414] inter text-base font-medium">
                Continue with Facebook
              </span>
            </button>
          </div>

          <div className="flex w-full justify-center items-center gap-4">
            <hr className="bg-[#b9c2cb] w-full " />
            <p className="text-[#b9c2cb] inter text-[.875rem] font-medium">
              or
            </p>
            <hr className="bg-[#b9c2cb] w-full " />
          </div>

          <form className="flex flex-col w-full gap-4 items-start">
            <div className="flex flex-col w-full gap-2">
              <label
                className="work-sans text-[.875rem] font-medium text-[#141414]"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="border p-4 items-center flex placeholder:work-sans outline-none active:border-primary focus:border-primary placeholder:text-base placeholder:font-medium border-[#b6b3c6] rounded-[.75rem] w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="work-sans text-[.875rem] font-medium text-[#141414]"
                htmlFor="Email"
              >
                Password
              </label>
              <input
                className="border p-4 items-center flex placeholder:work-sans outline-none active:border-primary focus:border-primary placeholder:text-base placeholder:font-medium border-[#b6b3c6] rounded-[.75rem] w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
              />
            </div>
          </form>

          <Link className="w-full" to="/video">
            <button className="py-[.81875rem] pl-[7.69rem] pr-[8.31rem] w-full justify-center items-center flex gap-2 rounded-[.75rem] border border-[#141414] bg-primary">
              <span className="text-[#f9f9ff] work-sans  text-[1.125rem] font-medium">
                Sign Up
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
