import { Link } from "react-router-dom";
import Logo from "./Logo";

export const Navbar = () => {
  return (
    <div className="flex w-full fixed top-0 left-0 border-b items-center h-[--navbar-height]">
      <div className="flex flex-col border-r h-full justify-center px-6">
        <Link className="" to="/">
          <Logo></Logo>
        </Link>
      </div>

      <div className="flex flex-col border-r h-full justify-center">
        <Link className="text-lg px-5" to="/rated">
          Rated
        </Link>
      </div>

      <div className="flex flex-col border-l h-full justify-center ml-auto">
        <Link className="text-lg px-3" to="/auth">
          Auth
        </Link>
      </div>
    </div>
  );
};
