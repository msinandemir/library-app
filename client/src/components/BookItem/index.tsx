
import { NavLink } from 'react-router-dom'
import { Book } from '../../types/Book'
interface BookComponentProps{
  item:Book
}

function index(props:BookComponentProps) {
    const {item} = props
  return (
    <><NavLink
    to={`/${item.id}`}
    className='flex flex-col justify-center items-center gap-1.5 '
  >
    <img className="border-black border w-40" src={item.photo} alt={item.name} />
    <span className='font-semibold text-xl'>{item.name}</span>
    <span className='font-semibold text-xl text-black/40'>
      {item.owner}
    </span>
  </NavLink></>
  )
}

export default index