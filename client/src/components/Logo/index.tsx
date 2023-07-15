import { Link } from "react-router-dom";
import cs from 'classnames'
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { memo,useMemo } from "react";

interface LogoComponent{
  responsive: boolean
  white?:boolean
}
function index(props:LogoComponent) {
  const {responsive,white} = useMemo(() => props, [props.responsive,props.white])
  const {breakpoint} = useBreakpoint()
  
  return (
    <>
      <Link className='select-none flex gap-2 items-center' to={"/"}>
        <span className={cs('font-logo text-5xl font-bold ',{
          'text-5xl':!responsive,
          'text-2xl':responsive && breakpoint === 'mobile',
          'text-white':white
          
        })}>L</span>

        <span className={cs('font-semibold text-3xl text-black/90',{
          'text-3xl':!responsive,
          'text-lg':responsive && breakpoint === 'mobile',
          'text-white/90':white
        })}>
          Library&nbsp;-&nbsp;App
        </span>
      </Link>
    </>
  );
}

export default memo(index);
