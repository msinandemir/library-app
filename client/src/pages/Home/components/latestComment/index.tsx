import CommentItem from "../../../../components/CommentItem";

function LatestCommentSection() {
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
      <header>
        <span className='text-primaryText text-2xl font-semibold'>
          SON&nbsp;YORUMLAR
        </span>
      </header>
      <div className="flex gap-8">
        {fakeData.map((item,index) => (
          <CommentItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default LatestCommentSection;
