import Button from "../../../../components/Button";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Book from "../../../../assets/images/book.svg";

function ExplorerSection() {
  return (
    <section className='mt-20 flex'>
      <div className='flex flex-col gap-8 w-[650px]'>
        <div className='flex gap-4 items-center'>
          <h1 className='text-6xl font-bold'>Keşfedin:</h1>
          <span className='text-4xl font-semibold'>En İyi Kitaplar</span>
        </div>
        <p className='text-xl font-semibold'>
          Okumaya değer kitaplar arıyorsanız, bu listedeki en iyi kitaplara göz
          atın. Farklı türlerden seçilmiş olan bu kitaplar sizi etkileyen
          hikayeler ve unutulmaz karakterlerle buluşturacak.
        </p>
        <Button variant='primary' as={NavLink} size='large' to='/en-iyi'>
          <span className='text-xl font-semibold'>
            Daha&nbsp;Fazla&nbsp;Keşfet
          </span>
          <MdOutlineArrowForwardIos size={26} />
        </Button>
      </div>

      <div>
        <img src={Book} alt='book' />
      </div>
    </section>
  );
}

export default ExplorerSection;
