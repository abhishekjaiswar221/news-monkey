import {
  LuHome,
  LuBuilding2,
  LuHeartPulse,
  LuTrophy,
  LuCpu,
  LuClapperboard,
  LuSearch,
} from "react-icons/lu";
import Logo from "../assets/Images/logo.png";

const Navbar = () => {
  return (
    <>
      <header className="h-14 flex  items-center justify-center border-b-2">
        <nav className="flex flex-row gap-12 items-center">
          <div className="flex flex-row items-center">
            <img className="h-10" src={Logo} alt="" />
            <h1 className="text-black text-3xl font-semibold"> NewsMonkey</h1>
          </div>

          <div>
            <ul className="flex flex-row gap-14">
              <li>
                <a href="" className="flex flex-row gap-3">
                  <LuHome size={20} strokeWidth={1.5} /> Home
                </a>
              </li>
              <li>
                <a href="" className="flex flex-row gap-3">
                  <LuBuilding2 size={20} strokeWidth={1.5} />
                  Business
                </a>
              </li>
              <li>
                <a href="" className="flex flex-row gap-3">
                  <LuHeartPulse size={20} strokeWidth={1.5} />
                  Health
                </a>
              </li>
              <li>
                <a href="" className="flex flex-row gap-3">
                  <LuTrophy size={20} strokeWidth={1.5} />
                  Sports
                </a>
              </li>
              <li>
                <a href="" className="flex flex-row gap-3">
                  <LuCpu size={20} strokeWidth={1.5} />
                  Technology
                </a>
              </li>
              <li>
                <a href="" className="flex flex-row gap-3">
                  <LuClapperboard size={20} strokeWidth={1.5} />
                  Entertainment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <form className="flex flex-row items-center relative">
              <input
                className="p-1 border-2 border-l-2 rounded-sm"
                type="text"
                name="search"
                id="search"
                placeholder="Enter search item"
              />
              <span className="absolute end-2">
                <LuSearch size={20} strokeWidth={1.5} />
              </span>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
