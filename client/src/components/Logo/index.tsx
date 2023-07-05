import { NavLink } from "react-router-dom";
import cs from 'classnames'
import { useBreakpoint } from "../../hooks/useBreakpoint";


interface LogoComponent{
  responsive: boolean
}
function index(props:LogoComponent) {
  const {responsive} = props
  const {breakpoint} = useBreakpoint()
  return (
    <>
      <NavLink className='select-none flex gap-2 items-center' to={"/"}>
        <span className={cs('font-logo text-5xl font-bold ',{
          'text-5xl':!responsive,
          'text-2xl':responsive && breakpoint === 'mobile'
        })}>L</span>

        <span className={cs('font-semibold text-3xl text-black/90',{
          'text-3xl':!responsive,
          'text-lg':responsive && breakpoint === 'mobile'
        })}>
          Library&nbsp;-&nbsp;App
        </span>
      </NavLink>
    </>
  );
}

export default index;
