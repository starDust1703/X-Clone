"use client";
import Footer from "./components/Footer";

export default function Home() {
  const handleSignup = () => {
    alert('Sign Up')
  }
  const CustomBtn = ({ image, text }) => {
    return (
      <button className="flex items-center justify-center gap-4 p-2 bg-white text-[#0F1419] rounded-4xl cursor-pointer transition-colors duration-200 hover:bg-[#edf4ff] w-full">
        <img src={image} alt="icon" width={23} />
        <p>{text}</p>
      </button>
    )
  }
  return (
    <div className="p-5">
      <div className="h-full flex gap-10 items-start flex-col lg:flex-row lg:gap-20 lg:items-center">
        <div className="flex items-center lg:justify-center lg:w-2xl">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-24 lg:w-[55%]"
              fill={"#E7E9EA"}
          >
              <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z" />
          </svg>
        </div>
        <div>
          <p className="font-extrabold text-6xl lg:mt-30">Happening now</p>
          <p className="text-2xl my-10 font-bold">Join today.</p>
          <div className="flex flex-col gap-4 items-center w-[300px]">
            <CustomBtn image="google.svg" text="Sign up with Google" />
            <CustomBtn image="apple.svg" text="Sign up with Apple" />
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 h-px bg-[#2F3336]"></div>
              OR
              <div className="flex-1 h-px bg-[#2F3336]"></div>
            </div>
            <button className="flex items-center justify-center p-2 bg-white text-[#0F1419] font-bold rounded-4xl cursor-pointer transition-colors duration-200 hover:bg-[#edf4ff] w-full" onClick={() => handleSignup()}>Create Account</button>
            <p className="text-xs text-[#717171]">By signing up, you agree to the <a className="text-cyan-500 focus:underline hover:underline outline-none" href="#">Terms of Service</a> and <a className="text-cyan-500 focus:underline hover:underline outline-none" href="#">Privacy Policy</a>, including <a className="text-cyan-500 focus:underline hover:underline outline-none" href="#">Cookie Use</a>.</p>
            <div className="flex flex-col gap-4 w-full mt-10">
              <p className="font-bold">Already have an account?</p>
              <button className="flex items-center justify-center p-2 border border-[#536471] font-bold rounded-4xl cursor-pointer w-full transition-colors duration-200 hover:bg-[#ffffff19]">Sign in</button>
              <a href="https://grok.com" target="_blank" className="flex items-center justify-center p-2 border border-[#536471] font-bold rounded-4xl cursor-pointer w-full transition-colors duration-200 hover:bg-[#ffffff19] gap-2"><img src="grok.svg" alt="icon" width={23} className="invert" /> Get Grok</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
