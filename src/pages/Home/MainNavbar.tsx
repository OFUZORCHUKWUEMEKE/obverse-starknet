import { useState } from "react";
// import { Link } from "react-router-dom";
import { logoDark, logoTextDark } from "../../assets";
// import { Button } from "./ui/Button";
// import { Button } from "./components/Button";
//import { logoDark, logoTextDark } from "../../assets/icons";
// import { toast } from "sonner";

const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);


  // const popUp = () => {
  //   toast("Kindly fill the form below to join the waitlist!", {
  //     position: "top-left",
  //   });
  // }

  return (
    <header className="w-full cursor-pointer bg-transparent sm:px-5">

      <nav className="px-2 sm:px-5 w-[85%] md:w-[60%] mx-auto flex justify-between py-2.5 sm:py-3 md:py-3.5 items-center rounded-[64px] bg-[#22201D] border border-[#2d2b29]">

        <a href="/" onClick={closeMenu}>
          <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
            <img src={logoDark} alt="logo" className="h-6 sm:h-7 md:h-8 w-auto" />
            <img src={logoTextDark} alt="logoText" className="h-4 sm:h-5 md:h-6 w-auto" />
          </div>
        </a>
        <button
          className="flex text-[#131313] rounded-[45px] text-[10px] sm:text-[11px] md:text-[12px] font-medium px-7 sm:px-5 md:px-6 py-2.5 sm:py-3 hover:bg-[#ff8c63] transition-colors whitespace-nowrap"
          onClick={() => window.open('https://t.me/ObverseBot', '_blank')}
          style={{ backgroundColor: '#FF7849' }}
        >
          Launch App
        </button>
      </nav>
    </header>
  );
};

export default MainNavbar;