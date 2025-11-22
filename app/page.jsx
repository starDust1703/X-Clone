"use client";
import Logo from "./components/Logo";
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
    <div className="absolute h-full w-full">
      <div className="h-full flex items-center">
        <div className="h-full flex items-center justify-center w-[55%]">
          <Logo width="50%" color="#E7E9EA" />
        </div>
        <div>
          <p className="font-extrabold text-6xl mt-30">Happening now</p>
          <p className="text-2xl my-10 font-bold">Join today.</p>
          <div className="flex flex-col gap-4 items items-center w-[300px]">
            <CustomBtn image="google.svg" text="Sign up with Google" />
            <CustomBtn image="apple.svg" text="Sign up with Apple" />
            <div className="flex items-center w-full gap-2">
              <div className="flex-1 h-px bg-[#2F3336]"></div>
              OR
              <div className="flex-1 h-px bg-[#2F3336]"></div>
            </div>
            <button className="flex items-center justify-center p-2 bg-white text-[#0F1419] font-bold rounded-4xl cursor-pointer transition-colors duration-200 hover:bg-[#edf4ff] w-full" onClick={() => handleSignup()}>Create Account</button>
            <p className="text-xs text-[#717171]">By signing up, you agree to the <a className="text-cyan-500 focus:underline hover:underline outline-none" href="#">Terms of Service</a> and <a className="text-cyan-500 focus:underline hover:underline outline-none" href="#">Privacy Policy</a>, including <a className="text-cyan-500 focus:underline hover:underline outline-none" href="#">Cookie Use</a>.</p>
            <div className="flex flex-col gap-4 w-full mt-10">
              <p className="font-bold">Already have an account?</p>
              <button className="flex items-center justify-center p-2 border border-[#536471] font-bold rounded-4xl cursor-pointer w-full transition-colors duration-200 hover:bg-[#ffffff19]">Sign in</button>
              <a href="https://grok.com" target="_blank" className="flex items-center justify-center p-2 border border-[#536471] font-bold rounded-4xl cursor-pointer w-full transition-colors duration-200 hover:bg-[#ffffff19] gap-2"><img src="grok.svg" alt="icon" width={23} /> Get Grok</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
