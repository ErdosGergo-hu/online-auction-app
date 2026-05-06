import { useRef, useState } from "react";
import LogoutIcon from "../../icons/LogoutIcon";
import { useAuth } from "../../hooks/useAuth";
import LoginIcon from "../../icons/LoginIcon";
import { useNavigate } from "react-router-dom";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  let actionText = "Logout";
  let actionIcon = <LogoutIcon />;
  let key = "logout";
  if (!user) {
    actionText = "Login";
    actionIcon = <LoginIcon />;
    key = "login";
  }

  function onHandleAuth() {
    if (user) {
      logout();
    }
    navigate("/login");
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative inline-block">
      <div className="w-10 h-10 rounded-full bg-gray-300">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full h-full rounded-full bg-gray-300 text-white font-bold"
        >
          <div className="rounded-full overflow-hidden border-2 border-blue-500">
            <img
              src={`/images/${user ? user.avatarUrl : "default_profile"}.jpg`}
              alt={user ? user.username : "default_profile"}
              className="w-10 h-10 object-cover"
            />
          </div>
        </button>
      </div>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-1.5 w-30 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50 animate-in"
        >
          <button
            key={key}
            role="option"
            onClick={onHandleAuth}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors duration-100 text-gray-700 hover:bg-gray-50"
          >
            {actionIcon}
            <span>{actionText}</span>
          </button>
        </div>
      )}
    </div>
  );
}
