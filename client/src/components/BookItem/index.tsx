
import { NavLink } from 'react-router-dom'
import { Book } from '../../types/Book'
import cs from 'classnames'
import { useBreakpoint } from '../../hooks/useBreakpoint'
interface BookComponentProps{
  item:Book
}

function index(props:BookComponentProps) {
    const {item} = props
    const {breakpoint} = useBreakpoint()
  return (
    <><NavLink
    to={`/${item.id}`}
    className='flex flex-col justify-center items-center gap-1.5 '
  >
    <img className={cs("border-black border", {
      'w-40':breakpoint === 'desktop',
      'w-32':breakpoint === 'mobile'
    })} src={item.photo} alt={item.name} />
    <span className='font-semibold text-xl'>{item.name}</span>
    <span className='font-semibold text-xl text-black/40'>
      {item.owner}
    </span>
  </NavLink></>
  )
}

export default index