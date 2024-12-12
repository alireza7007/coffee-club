import category3 from '../../assets/categories/category1.png'
import category4 from '../../assets/categories/category2.png'
import category5 from '../../assets/categories/category3.png'
import category6 from '../../assets/categories/category4.png'
import category7 from '../../assets/categories/category5.png'

export default function Equipment() {
  return (
    <section className="mb-10 md:mb-20">
    <div className="container flex flex-wrap  items-center justify-between md:justify-between px-32">
      <div className="flex flex-col items-center justify-center w-25 md:w-50 ">
        <img src={category3} alt="category" className="" />
        <span className="">قهوه دمی اسپرسو</span>
      </div>
      <div className="flex flex-col items-center justify-center  w-25 md:w-50">
        <img src={category4} alt="category" className="" />
        <span className=""> لوازم جانبی تجهیزات</span>
      </div>
      <div className="flex flex-col items-center justify-center  w-25 md:w-50">
        <img src={category5} alt="category" className="" />
        <span className="">اسپرسو ساز</span>
      </div>
      <div className="flex flex-col items-center justify-center  w-25 md:w-50">
        <img src={category6} alt="category" className="" />
        <span className="">یک تستر قهوه</span>
      </div>
      <div className="flex flex-col items-center justify-center  w-25 md:w-50">
        <img src={category7} alt="category" className="" />
        <span className="">قهوه ترک</span>
      </div>
    </div>
  </section>
  )
}
