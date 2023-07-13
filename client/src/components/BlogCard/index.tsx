import cs from "classnames";
import { NavLink } from "react-router-dom";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface BlogCardProps {
  item: Blog;
  variant: "vertical" | "horizontal";
}
interface Blog {
  id: number;
  photo: string;
  name: string;
}
function BlogCard(props: BlogCardProps) {
  const { item, variant } = props;
  const {breakpoint} = useBreakpoint()
  return (
    <div className={cs('rounded-2xl bg-primary/10 text-center  font-bold flex justify-center items-center ',{
        'w-[320px] h-[404px]  flex-col gap-4 ' :variant === 'vertical',
        'w-[650px] h-[194px]  gap-3 px-3': variant === 'horizontal',
        'text-xl':breakpoint === 'desktop',
        'text-lg w-[280px] h-[360px]  flex-col gap-4':breakpoint === 'mobile',
    })} >
      <img className={cs('rounded-lg object-cover ',{
        'w-[280px] h-[230px]': variant === 'vertical',
        'w-[300px] h-[140px]':variant ==='horizontal',
        'w-[260px] h-[210px]':breakpoint ==='mobile'
      })} src={item.photo} alt={item.name} />
      <NavLink className={cs('  hover:opacity-70', {
        'flex-1': variant === 'horizontal'
      })} to={`/blog/${item.id}`}>{item.name}</NavLink>
    </div>
  );
}

export default BlogCard;
