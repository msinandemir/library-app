import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
}
interface CategoryComponentProps {
  item: Category;
}

function index(props: CategoryComponentProps) {
  const { item } = props;
  return (
    <Link
      className='w-[140px] h-[45px] shadow-2xl bg-primary text-white/90  flex justify-center items-center rounded-lg mx-auto '
      to='/'
    >
      <span className='font-bold text-xl'>{item.name}</span>
    </Link>
  );
}

export default index;
