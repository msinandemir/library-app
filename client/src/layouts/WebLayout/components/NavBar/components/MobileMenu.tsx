import cs from "classnames";
import { NavLink } from "react-router-dom";

function MobileMenu() {
  return (
    <>
      <nav>
        <ul className='flex gap-5 justify-center items-center px-4 mt-4 '>
          <li>
            <NavLink
              className={({ isActive }) =>
                cs("font-semibold text-base", {
                  "text-black": isActive,
                  "text-black/70": !isActive,
                })
              }
              to='/'
            >
              Ana&nbsp;Sayfa
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cs("font-semibold text-base", {
                  "text-black": isActive,
                  "text-black/70": !isActive,
                })
              }
              to='/search'
            >
              Kitap&nbsp;Ara
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cs("font-semibold text-base", {
                  "text-black": isActive,
                  "text-black/70": !isActive,
                })
              }
              to='/login'
            >
              Giriş&nbsp;Yap
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cs("font-semibold text-base", {
                  "text-black": isActive,
                  "text-black/70": !isActive,
                })
              }
              to='/register'
            >
              Üye&nbsp;Ol
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MobileMenu;
