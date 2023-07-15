import { Link } from "react-router-dom";
import Logo from "../../../../components/Logo";
import { useBreakpoint } from "../../../../hooks/useBreakpoint";
import cs from "classnames";

function Footer() {
  const { breakpoint } = useBreakpoint();
  return (
    <footer className='h-60 mt-20 select-none bg-black/90 justify-center items-center flex '>
      <div
        className={cs("flex  items-center", {
          "flex-col gap-4 ": breakpoint === "mobile",
          "gap-20": breakpoint === "desktop",
        })}
      >
        <div className='flex items-center gap-3'>
          <Logo responsive={false} white />
          <span className={cs('text-white/40 ',{
            'text-xs':breakpoint === 'mobile'
          })}>
            Tüm&nbsp;hakları&nbsp;saklıdır.&nbsp;©
          </span>
        </div>
        <div className=' flex gap-10 text-white/40'>
          {breakpoint === "desktop" && (
            <div>
              <ul className='flex flex-col gap-1'>
                <li>
                  <Link to='/'>
                    <span className='hover:text-white'>Ana&nbsp;Sayfa</span>
                  </Link>
                </li>
                <li>
                  <Link to='/search'>
                    <span className='hover:text-white'>Kitap&nbsp;Ara</span>
                  </Link>
                </li>
                <li>
                  <Link to='/login'>
                    <span className='hover:text-white'>Giriş&nbsp;Yap</span>
                  </Link>
                </li>
                <li>
                  <Link to='/register'>
                    <span className='hover:text-white'>Üye&nbsp;Ol</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div>
            <ul className={cs('flex  gap-1',{
              'flex-col gap-1': breakpoint === 'desktop',
              'gap-3 mt-2': breakpoint === 'mobile',
            })}>
              <li>
                <Link to='/'>
                  <span className='hover:text-white'>Kategori</span>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <span className='hover:text-white'>Kategori</span>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <span className='hover:text-white'>Kategori</span>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <span className='hover:text-white'>Kategori</span>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <span className='hover:text-white'>Kategori</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
