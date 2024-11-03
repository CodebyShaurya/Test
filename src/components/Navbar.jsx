import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavItem({ label }) {
  return (
    <a href="#">
      <Typography as="li" color="blue-gray" className="p-1 font-medium">
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="About Us" />
      <NavItem label="Pricing" />
      <NavItem label="Contact Us" />
    </ul>
  );
}

export function NavbarWithSimpleLinks() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <nav className="block w-full   py-4 px-8 shadow-md w-full max-w-full rounded-none px-4 bg-transparent  bg-transparent">
  <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
    <a
      href="#"
      className="block antialiased  text-base font-light leading-relaxed text-blue-gray-900 mr-4 cursor-pointer text-lg font-bold"
    >
      Material Tailwind
    </a>
    <div className="hidden lg:block">
      <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
        <a href="#">
          <li className="block antialiased  text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
            About Us
          </li>
        </a>
        <a href="#">
          <li className="block antialiased  leading-relaxed text-blue-gray-900 p-1 font-medium">
            Pricing
          </li>
        </a>
        <a href="#">
          <li className="block antialiased  leading-relaxed text-blue-gray-900 p-1 font-medium">
            Contact Us
          </li>
        </a>
      </ul>
    </div>
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-r from-purple-800 to-indigo-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 hidden lg:inline-block"
      type="button"
      data-ripple-light="true"
    >
      Sign in
    </button>
    <button
      className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 ml-auto inline-block text-blue-gray-900 lg:hidden"
      type="button"
      data-ripple-dark="true"
      data-collapse-target="navbar"
    >
      <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
    </button>
  </div>
  <div
    data-collapse="navbar"
    className="block h-0 w-full basis-full overflow-hidden transition-all duration-300 ease-in lg:hidden"
  >
    <div className="mt-2 rounded-xl bg-white py-2">
      <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
        <a href="#">
          <li className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
            About Us
          </li>
        </a>
        <a href="#">
          <li className="block antialiased   leading-relaxed text-blue-gray-900 p-1 font-medium">
            Pricing
          </li>
        </a>
        <a href="#">
          <li className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
            Contact Us
          </li>
        </a>
      </ul>
      <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 block w-full mb-2"
        type="button"
        data-ripple-light="true"
      >
        Sign in
      </button>
    </div>
  </div>
</nav>

  );
}

export default NavbarWithSimpleLinks;