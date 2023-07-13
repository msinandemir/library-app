import CommentItem from "../../../../components/CommentItem";
import SectionHeader from '../sectionHeader';
import cs from 'classnames'
import { useBreakpoint } from "../../../../hooks/useBreakpoint";

function LatestCommentSection() {
  const {breakpoint} = useBreakpoint()
  const fakeData = [
    {
      id: 0,
      name: "Ayşe D.",
      content:
        "Bu kütüphane sitesi gerçekten harika! Son eklenen kitapları görüntülemek için Carousel özelliği çok kullanışlı. Ayrıca, blog yazıları ve kullanıcı yorumlarıyla kitaplar hakkında daha fazla bilgi edinebiliyorum. Keşfet bölümü sayesinde de yeni ve ilgi çekici kitaplar buluyorum. Kesinlikle favori kitap okuma platformum!",
    },
    {
      id: 0,
      name: "Ayşe D.",
      content:
        "Bu kütüphane sitesi gerçekten harika! Son eklenen kitapları görüntülemek için Carousel özelliği çok kullanışlı. Ayrıca, blog yazıları ve kullanıcı yorumlarıyla kitaplar hakkında daha fazla bilgi edinebiliyorum. Keşfet bölümü sayesinde de yeni ve ilgi çekici kitaplar buluyorum. Kesinlikle favori kitap okuma platformum!",
    },
    {
      id: 0,
      name: "Ayşe D.",
      content:
        "Bu kütüphane sitesi gerçekten harika! Son eklenen kitapları görüntülemek için Carousel özelliği çok kullanışlı. Ayrıca, blog yazıları ve kullanıcı yorumlarıyla kitaplar hakkında daha fazla bilgi edinebiliyorum. Keşfet bölümü sayesinde de yeni ve ilgi çekici kitaplar buluyorum. Kesinlikle favori kitap okuma platformum!",
    },
  ];
  return (
    <section className='mt-20 flex flex-col gap-5'>
    <SectionHeader title='SON&nbsp;YORUMLAR' />
      <div className={cs("flex mx-auto gap-7",{
        'flex-col':breakpoint === 'mobile'
      })}>
        {fakeData.map((item,index) => (
          <CommentItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default LatestCommentSection;
