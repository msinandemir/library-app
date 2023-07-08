import { NavLink } from "react-router-dom";
import Button from "../../../../components/Button";

export default function JoinUsSection() {
  return (
    <section className='mt-20 flex flex-col gap-10'>
      <header>
        <h1 className='font-bold text-6xl'>HALA ARAMIZA KATILMADIN MI?</h1>
      </header>
      <div className='font-semibold text-xl flex flex-col gap-10'>
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
        <Button variant='outline' size='normal' as={NavLink} to='/register'>
          <span className='text-2xl text-black/90'>
            HEMEN&nbsp;ÜYE&nbsp;OL&nbsp;VE&nbsp;AYRICALIKLARDAN&nbsp;YARARLAN
          </span>
        </Button>
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
