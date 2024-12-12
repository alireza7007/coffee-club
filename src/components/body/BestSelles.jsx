import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import product1 from '../../assets/products/p1.png'
import product2 from '../../assets/products/p2.png'
import product3 from '../../assets/products/p3.png'
import product4 from '../../assets/products/p4.png'
import product5 from '../../assets/products/p5.png'
import product6 from '../../assets/products/p6.png'
import product7 from '../../assets/products/p7.png'
import product8 from '../../assets/products/p8.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Product from './product';
import { products } from '../../dummyData';

export default function BestSelles() {
  return (
    <section className="bestSelles">
          <div className="container mb-9 md:mb-20 px-20 md:px-36 ">
              <div className="flex flex-col gap-y-1">
                 <h2 className="font-sahel-black text-2xl text-zinc-700 dark:text-white ">محصولات پر فروش</h2>
                 <div className="flex items-end justify-between">
                    <span className="hidden  md:flex md:text-zinc-500 md:dark:text-white">پیشنهاد قهوه خور ها...</span>
                    <div className="flex  gap-x-3">
                      <div className='swiper-buttom-prev-custom flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white rounded-full transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700'><ChevronRightIcon className="w-5 h-5 md:w-[26px] md:h-[26px] "  /></div>
                      <div className='swiper-buttom-next-custom flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white rounded-full transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700 '><ChevronLeftIcon className="w-5 h-5 md:w-[26px] md:h-[26px] "  /></div>
                </div>
              </div>
              </div>
              <div className="flex items-center justify-center flex-wrap gap-x-7 mt-7">
                <Swiper 
                slidesPerView={1}
                navigation = {{
                  nextEl : ".swiper-buttom-next-custom",
                  prevEl : ".swiper-buttom-prev-custom"
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                modules={[Navigation]}
                >
                
      
                {products.toReversed().map(item => {return <SwiperSlide><Product {...item} /></SwiperSlide> })}
               
              </Swiper>
             
              
              
              </div>
              
            </div>
          </section>
  )
}
