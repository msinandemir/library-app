import cs from "classnames";
import { NavLink } from "react-router-dom";

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
  return (
    <div className={cs('rounded-2xl bg-primary/10 text-center  text-xl font-bold flex justify-center items-center ',{
        'w-[320px] h-[404px]  flex-col gap-4 ' :variant === 'vertical',
        'w-[650px] h-[194px]  gap-3 px-3': variant === 'horizontal' 
    })} >
      <img className={cs('rounded-lg object-cover ',{
        'w-[280px] h-[230px]': variant === 'vertical',
        'w-[300px] h-[140px]':variant ==='horizontal'
      })} src={item.photo} alt={item.name} />
      <NavLink className={cs('  hover:opacity-70', {
        'flex-1': variant === 'horizontal'
      })} to={`/blog/${item.id}`}>{item.name}</NavLink>
    </div>
  );
}

export default BlogCard;
