import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import UserMenu from "./auth/UserMenu";

const AVAIBLE_NAV_LINKS = [
  { name: "Dashboard", path: "/" },
  { name: "Auctions", path: "/auctions" },
  { name: "My Profile", path: "/profile" },
];

export default function Header() {
  const navClass = ({ isActive }: { isActive: boolean }) => {
    return `border-b-2 ${isActive ? "border-b-blue-700" : "border-b-transparent"} transition`;
  };

  return (
    <header className="h-16 bg-white flex items-center justify-between px-40">
      <div className="w-15">
        <img src="/images/batman.jpg" alt="main logo" />
      </div>
      <nav className="flex gap-6 rounded-full px-6 py-2">
        {AVAIBLE_NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => navClass({ isActive })}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gray-300"
        /> */}

        <LanguageSelector />

        <UserMenu />
      </div>
    </header>
  );
}
