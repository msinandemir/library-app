

interface CommentItemProps{
    item:Comment
}
interface Comment{
    id:number,
    name:string,
    content:string
}
function CommentItem({item}:CommentItemProps) {
  return (
    <div className='w-[300px] h-[350px] rounded-2xl flex flex-col justify-center items-center gap-4 px-3 bg-primary/20'>
        <span className='font-bold text-xl'>{item.name}</span>
        <p className='text-base font-semibold text-black/70'>{item.content}</p>
    </div>
  )
}

export default CommentItem