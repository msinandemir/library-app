import { useBreakpoint } from "../../hooks/useBreakpoint"
import cs from 'classnames'

interface SectionHeader{
    title:string
    className?:string
}

function index(props:SectionHeader) {
    const {title, className} = props
    const {breakpoint} = useBreakpoint() 
  return (
    <header>
        <h4 className={cs('text-primaryText font-semibold',{
            'text-2xl':breakpoint === 'desktop',
            'text-xl px-1.5':breakpoint === 'mobile',
            [className]:!!className

        })}>
          {title}
        </h4>
      </header>
  )
}

export default index