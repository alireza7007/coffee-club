import Product from './product'
import product1 from '../../assets/products/p1.png'
import product2 from '../../assets/products/p2.png'
import product3 from '../../assets/products/p3.png'
import product4 from '../../assets/products/p4.png'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { products } from '../../dummyData'

export default function Products() {
  return (
    <section className="products mt-8 mb-10 md:mb-20">
            <div className="container flex flex-col  px-36 ">
              <div className="flex flex-col gap-y-1 pt-36">
                 <h2 className="font-sahel-black text-2xl text-zinc-700 dark:text-white ">جدید ترین محصولات</h2>
                 <div className="flex items-center justify-between">
                    <span className="text-zinc-500 dark:text-white">فراوری شده دانه قهوه</span>
                    <div className="flex items-center justify-center">
                      <span className="text-orange-300">مشاهده محصولات</span>
                      <ArrowLeftIcon className='w-4 h-4 text-orange-300'/>
                </div>
              </div>
              </div>
              <div className="flex items-center justify-center flex-wrap gap-x-7 mt-7">
                {products.map(item => {return <Product {...item} />})}
            
              </div>
              
            </div>
          </section>
  )
}
