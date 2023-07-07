import { NavLink } from "react-router-dom";
import cs from "classnames";
import Button from "../../../../../components/Button";
import { memo } from "react";

function DesktopMenu() {
  
  return (
    <nav className='flex w-full items-center'>
      <div className='flex-1'>
        <ul className='flex gap-2'>
          <li>
            <NavLink
              className={({ isActive }) =>
                cs("font-bold text-lg", {
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
                cs("font-bold text-lg", {
                  "text-black": isActive,
                  "text-black/70": !isActive,
                })
              }
              to='/search'
            >
              Kitap&nbsp;Ara
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-6 '>
        <Button as={NavLink} size='normal' variant='outline' to={"/login"}>
          Giriş&nbsp;Yap
        </Button>
        <Button as={NavLink} size='normal' variant='primary' to={"/register"}>
          Üye&nbsp;Ol
        </Button>
      </div>
    </nav>
  );
}

export default memo(DesktopMenu);
