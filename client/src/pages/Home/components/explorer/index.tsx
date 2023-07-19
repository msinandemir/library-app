import Button from "../../../../components/Button";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Book from "../../../../assets/images/book.svg";
import { motion } from "framer-motion";
import { useBreakpoint } from "../../../../hooks/useBreakpoint";
import cs from "classnames";

function ExplorerSection() {
  const { breakpoint } = useBreakpoint();
  return (
    <section
      className={cs("mt-20 flex", {
        "": breakpoint === "mobile",
      })}
    >
      <div
        className={cs("flex flex-col gap-8 w-[650px] mx-auto lg:mx-0 ", {
          "items-center": breakpoint === "mobile",
        })}
      >
        <div className='flex gap-4 items-center '>
          <h1
            className={cs(" font-bold", {
              "text-6xl": breakpoint === "desktop",
              "text-4xl": breakpoint === "mobile",
            })}
          >
            Keşfedin:
          </h1>
          <span
            className={cs("font-semibold", {
              "text-4xl": breakpoint === "desktop",
              "text-2xl": breakpoint === "mobile",
            })}
          >
            En İyi Kitaplar
          </span>
        </div>
        <p
          className={cs("  font-semibold", {
            "text-xl": breakpoint === "desktop",
            "text-lg px-1 text-center": breakpoint === "mobile",
          })}
        >
          Okumaya değer kitaplar arıyorsanız, bu listedeki en iyi kitaplara göz
          atın. Farklı türlerden seçilmiş olan bu kitaplar sizi etkileyen
          hikayeler ve unutulmaz karakterlerle buluşturacak.
        </p>
        <Button variant='primary' as={Link} size={breakpoint === 'desktop' ? 'large' : 'normal'} to='/en-iyi'>
          <span className={cs(' font-semibold',{
            'text-xl': breakpoint === 'desktop',
            'text-lg': breakpoint === 'mobile',

          })}>
            Daha&nbsp;Fazla&nbsp;Keşfet
          </span>
          <MdOutlineArrowForwardIos size={breakpoint === 'desktop'?26:20} />
        </Button>
      </div>

      {breakpoint === "desktop" && (
        <div>
          <motion.img
            drag='x'
            dragConstraints={{ left: 0, right: 300 }}
            dragSnapToOrigin
            animate={{ x: [-1000, 500, 0] }}
            src={Book}
            alt='book'
          />
        </div>
      )}
    </section>
  );
}

export default ExplorerSection;
