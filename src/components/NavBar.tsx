// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";

// const NavBar = () => {
//   const location = useLocation();

//   console.log("Location", location);

//   return (
//     <nav className="flex items-center justify-between px-10 shadow-xl h-20  sticky top-0 bg-white underline ">
//       <div>
//         <NavLink
//           className={`${location.pathname === "/" && "text-red-500 font-bold"}`}
//           to="/"
//         >
//           Logo
//         </NavLink>
//       </div>
//       <div>
//         <ul>
//           <li>
//             <NavLink
//               className={` ${
//                 location.pathname === "/" && "text-red-500 font-bold"
//               } `}
//               to="/"
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={`active:font-bold ${
//                 location.pathname === "/about" && "text-red-500 font-bold"
//               } `}
//               to="/about"
//             >
//               About
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               className={`active:font-bold ${
//                 location.pathname === "/array" && "text-red-500"
//               }`}
//               to="/array"
//             >
//               Array
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <ul></ul>
//         <NavLink
//           to="/register"
//           className={`active:font-bold ${
//             location.pathname === "/register" && "text-red-500 font-bold"
//           } `}
//         >
//           Register
//         </NavLink>
//         <NavLink
//           to="/login"
//           className={`active:font-bold ${
//             location.pathname === "/login" && "text-red-500 font-bold"
//           } `}
//         >
//           LoginPage
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-between shadow-xl px-10 h-20 sticky top-2 bg-white underline">
      <div>
        <NavLink
          className={`${location.pathname === "/" && "text-red-500 font-bold"}`}
          to="/"
        >
          Logo
        </NavLink>
      </div>
      <div>
        <NavLink
          className={`${location.pathname === "/" && "text-red-500 font-bold"}`}
          to="/"
        >
          Home
        </NavLink>
      </div>

      <div>
        <NavLink
          className={`${
            location.pathname === "/login" && "text-red-500 font-bold"
          }`}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={`${
            location.pathname === "/Register" && "text-red-500 font-bold"
          }`}
          to="/register"
        >
          {" "}
          Register
        </NavLink>
      </div>
      <div>
        <NavLink
          className={`${
            location.pathname === "/array" && "text-red-500 font-bold"
          }`}
          to="/array"
        >
          Array
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
