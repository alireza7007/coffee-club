import { ArrowUpTrayIcon, BellAlertIcon, StarIcon } from '@heroicons/react/24/solid'
import diamond from '../../assets/club/diamond.png'

export default function CoffeClub() {
  return (
    <section className="coffeclub">
            <div className="lg:container lg:px-36 px-10">
              <div className="md:flex items-center flex-col md:flex-row md:h-36 h-44 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl px-11 ">
                <div className="flex items-center gap-x-2 md:gap-x-6">
                  <img src={diamond} alt="12" className="w-12 h-12" />
                  <div className="">
                    <h2 className="font-sahel-black lg:text-5xl text-xl mb-1  md:mb-2">کافی کلاب</h2>
                    <span className="font-sahel-bold text-lg lg:text-2xl">می دونستی میتونی با امتیازات قهوه بگیری؟!</span>
                  </div>
                </div>
                <div className="flex gap-2 md:gap-x-5">
                  <div className="flex justify-center items-center flex-col w-[60px] h-[60px] md:w-[98px] md:h-[98px] text-emerald-600 bg-white py-1.5 md:pb-1 md:pt-5 rounded-2xl">
                    <StarIcon className='w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5'/>
                    <span className="text-xs sm:text-sm">چرخ و بخت</span>
                  </div>
                  <div className="flex justify-center items-center flex-col w-[60px] h-[60px] md:w-[98px] md:h-[98px] text-emerald-600 bg-white py-1.5 md:pb-1 md:pt-5 rounded-2xl">
                    <ArrowUpTrayIcon className='w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5'/>
                    <span className="text-xs sm:text-sm">ماموریت ها</span>
                  </div>
                  <div className="flex justify-center items-center flex-col w-[60px] h-[60px] md:w-[98px] md:h-[98px] text-emerald-600 bg-white py-1.5 md:pb-1 md:pt-5 rounded-2xl">
                    <BellAlertIcon className='w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5'/>
                    <span className="text-xs sm:text-sm">جایزه ها</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
  )
}
