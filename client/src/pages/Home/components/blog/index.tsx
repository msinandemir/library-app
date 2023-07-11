import BooksAndWork from "../../../../assets/images/books-and-work.jpg";
import Brain from "../../../../assets/images/brain.jpg";
import EBook from "../../../../assets/images/e-book.jpg";
import BlogCard from "../../../../components/BlogCard";

function BlogSection() {
  const blogs = [
    {
      id: 0,
      photo: BooksAndWork,
      name: "Kitap Okumanın İş ve Kariyer Üzerindeki Etkileri.",
    },
    {
      id: 1,
      photo: EBook,
      name: "E-Kitaplar ve Geleneksel Kitaplar: Hangisi Daha İyi?",
    },
    {
      id: 2,
      photo: Brain,
      name: "Nöroloji ve Kitap Okumanın Beyin Üzerindeki Etkileri.",
    },
  ];
  return (
    <section className='mt-20 flex flex-col gap-5'>
       <header>
        <h4 className='text-primaryText font-semibold text-2xl'>
          BLOG
        </h4>
      </header>
      <div className="flex gap-7">

      <div className="mx-auto">
        <BlogCard item={blogs[0]} variant='vertical' />
      </div>
      <div className="flex flex-col gap-4">
        {blogs.slice(1).map((item, index) => (
          <BlogCard item={item} variant='horizontal' key={index} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default BlogSection;
