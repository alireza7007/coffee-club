import { ArrowDownIcon } from '@heroicons/react/24/outline'
import curve from '../../assets/svgs/curve.svg'

export default function BackGroundHome() {
  return (
    <section className=" home relative bg-home-mobile h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto md:bg-home-desktop bg-no-repeat bg-cover bg-[top_center]">
            <div className="container relative flex items-center justify-end md:min-h-screen overflow-y-hidden ">
              <div className="text-white">
                <h2 className="font-sahel-bold text-2xl md:text-6xl md:mb-2 mb-0.5 ">قهوه عربی تانزانیا</h2>
                <span className="md:text-5xl text-xl  "> یک فنجان بالانس</span>
                <span className=" block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8"></span>
                <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">قطعا نام اشنای عربیکا را شنیده اید،عربیکا نام یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت می شود</p>
              </div>
              <div className="circle circle--main circle--lg">
              <div className="circle circle--md">
                <div className="circle circle--sm">

                </div>
              </div>
            </div>
            </div>

           
            <img src={curve} alt="curve" className=" absolute bottom-0 right-0 left-0 mx-auto hidden md:block   text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]" />
            
            <div className="absolute bottom-0 right-0 left-0 mx-auto hidden  translate-y-2/4 md:flex items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full">
              <ArrowDownIcon className='w-4 h-4 dark:text-gray-100 text-zinc-700' />
            </div>
          </section>
  )
}
