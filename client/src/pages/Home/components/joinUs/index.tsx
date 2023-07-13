import { NavLink } from "react-router-dom";
import Button from "../../../../components/Button";
import cs from 'classnames'
import { useBreakpoint } from "../../../../hooks/useBreakpoint";

export default function JoinUsSection() {
  const {breakpoint} = useBreakpoint()
  return (
    <section className='mt-20 flex flex-col gap-10'>
      <header>
        <h1 className={cs('font-bold text-center ',{
          'text-6xl':breakpoint==='desktop',
          'text-4xl':breakpoint==='mobile'
        })}>HALA ARAMIZA KATILMADIN MI?</h1>
      </header>
      <div className={cs('font-semibold  flex flex-col',{
        'px-2 text-lg gap-7':breakpoint === 'mobile',
        ' text-xl gap-10':breakpoint === 'desktop',
      })}>
        <p>
          Kütüphane sitemizin tamamından faydalanmak, favori kitaplarını
          kaydetmek ve yorum yapmak için ücretsiz bir üye olabilirsiniz. Üyelik
          avantajlarından yararlanmak için hemen giriş yapın veya yeni bir hesap
          oluşturun.
        </p>
        <p>Üyelerimize özel olarak sunulan ayrıcalıklara bir göz atın:</p>
        <ul className='list-disc list-inside'>
          <li>
            Son eklenen kitapları önceden keşfedin ve okuma listelerinize
            ekleyin.
          </li>
          <li>
            Kitapları oyla ve yorum yaparak diğer okurlarla fikirlerinizi
            paylaşın.
          </li>
          <li>
            İstediğiniz kitapları kaydedin ve daha sonra okumak üzere saklayın.
          </li>
          <li>
            Özel etkinlikler, indirimler ve yeni yayınlar hakkında bilgilendirme
            alın.
          </li>
        </ul>
        <p>
          Kendinize bir kitap dünyası keşfetmek için hala bekliyor musunuz?
          Aramıza katılın ve okuma tutkunuz için bir profil oluşturun.
        </p>
        <p>
          Giriş yapmak veya yeni bir üyelik oluşturmak için aşağıdaki
          bağlantıları kullanabilirsiniz. Size kütüphanemizde sıcak bir
          karşılama hazırladık!
        </p>
      </div>
      <div className='flex items-center flex-col font-semibold gap-2'>
        <div className="animate-bounce">
        <Button variant='outline' size='large' as={NavLink} to='/register'>
          <span className={cs(' text-black/90 ',{
            'text-2xl':breakpoint === 'desktop',
            'text-xl ':breakpoint === 'mobile',
          })}>
            HEMEN&nbsp;ÜYE&nbsp; OL&nbsp;{breakpoint === 'desktop' && 'VE AYRICALIKLARDAN YARARLAN'}
          </span>
        </Button>
        </div>
        
        <div className='flex gap-2'>
          <p className='text-lg'>ZATEN&nbsp;BİR&nbsp;HESABIN&nbsp;VARSA</p>{" "}
          <NavLink to='/login'>
            <span className='font-bold text-lg underline text-primaryText hover:opacity-70'>
              GİRİŞ&nbsp;YAP
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
