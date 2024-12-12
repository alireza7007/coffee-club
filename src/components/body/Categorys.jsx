import category1 from '../../assets/categories/category-left.jpg'
import category2 from '../../assets/categories/category-right.jpg'

export default function Categorys() {
  return (
    <section className="category">
            <div className="container flex flex-wrap justify-between items-center md:px-36 mt-20 mb-10 ">
              <div className="relative">
                <img src={category2} alt="" className=" w-[480px] h-[180px] rounded-2xl opacity-90" />
                <div className=" absolute top-16 right-7 left-0 bottom-0 mx-auto ">
                  <h3 className="text-white font-sahel-bold text-2xl mb-1">انواع قهوه</h3>
                  <span className="text-white">ترکیبی و تک خاستگاه</span>
                </div>
                
              </div>
              <div className=" relative">
                <img src={category1} alt="" className="  w-[480px] md:h-[180px] rounded-2xl opacity-90" />
                <div className=" absolute top-16 right-7 left-0 bottom-0 mx-auto">
                <h3 className="text-white font-sahel-bold text-2xl mb-1">پودر های فوری</h3>
                <span className="text-white"> نسکافه هات چاکلت ماسالا </span>
                </div>
              </div>
              
              
              
            </div>
          </section>
  )
}
