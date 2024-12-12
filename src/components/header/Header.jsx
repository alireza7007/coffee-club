import { ArrowDownIcon, ArrowLeftEndOnRectangleIcon, Bars3Icon, BriefcaseIcon, ChatBubbleLeftIcon, ChevronLeftIcon, DocumentTextIcon, HomeIcon, MoonIcon, PhoneArrowUpRightIcon, ShoppingBagIcon, ShoppingCartIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/app-logo.png'
import newlogo from '../../assets/newlogo.jpg'
import logoTyppe from '../../assets/svgs/logo-type.svg'
import product1 from '../../assets/products/p1.png'
import product2 from '../../assets/products/p2.png'
import product3 from '../../assets/products/p3.png'
import { useState } from 'react'

export default function Header(props) {
    
      
  return (
    <>
    <header className='hidden md:flex items-center fixed top-9 left-0 right-0 z-50 bg-black/50 w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 mx-auto rounded-3xl backdrop-blur-[6px]'>
        <div className='flex w-full  items-center justify-between'>
          {/* logo & menu */}
          <nav className='flex md:gap-x-2 gap-x-5 lg:gap-x-9 items-center h-14'>
            <div className='shrink-0'>
              <img src={logo} alt="golden Coffee" />
            </div>
            <ul className='flex  gap-x-5 lg:gap-x-9 text-xl h-full text-gray-300 tracking-tightest child:leading-[56px] '>
              <li className='text-orange-200 font-sahel-black'>
                <a href="#">صفحه اصلی</a>
              </li>
              {/* __has sub */}
              <li className='relative group'>
                <a className='group-hover:text-orange-300 transition-colors' href="#">فروشگاه</a>
                {/* __sub menu */}
                <div className='absolute top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white text-base text-zinc-700  dark:bg-zinc-700 dark:text-white p-6 w-52  space-y-7 rounded-2xl border-t-[3px] border-t-orange-300 tracking-normal shadow-normal 
              transition-all child:inline-block child:transition-colors child-hover:text-orange-300'>
                  <a href="#">قهوه ویژه</a>
                  <a href="#">ویژه در سطح جهانی</a>
                  <a href="#">قهوه درجه یک</a>
                  <a href="#">ترکیبات تجاری</a>
                  <a href="#">قهوه کپسول</a>
                  <a href="#">قهوه زینو برزیلی</a>
                </div>
              </li>
              <li>
                <a href="#">دیکشنری</a>
              </li>
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">درباره ی ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </nav>
          {/* __ cart & theme toggle & login link */}
          <div className='flex text-orange-200 text-xl gap-x-4 lg:gap-x-5 xl:gap-x-10 '>
            {/* __cart icon & theme switch btn*/}
            <div className='flex gap-x-4 lg:gap-x-5 items-center'>
              {/* __cart */}
              <div className="py-3 relative group">
                {/* __cart icn hover  */}
                <div className='absolute w-[400px] p-5 invisible opacity-0 left-0 top-full  group-hover:opacity-100 group-hover:visible bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300 shadow-normal rounded-2xl transition-all' >
                  {/* __header cart */}
                  <div className='flex items-center justify-between tracking-tighter text-xs font-sahel-black'>
                    <span className='text-gray-300'>یک مورد</span>
                    <a href="#" className='flex items-center'>
                      مشاهده ی سبد خرید
                      <ChevronLeftIcon className='w-4 h-4' />
                    </a>
                  </div>
                  {/* __body cart */}
                  <div className="border-b-1 max-h-36 overflow-auto border-b-gray-300 dark:border-b-white/10 pb-1 divide-y divide-gray-100 dark:divide-white/10 child:py-5">



                    <div className="flex gap-x-2.5 font-sahel-bold text-sm ">
                      <img src={product1} alt="product1" className="w-[7.5rem] h-[7.5rem]" />
                      <div className="flex flex-col justify-between">
                        <h4 className="font-sahel-bold text-zinc-700 text-base dark:text-white">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                        <div className="">
                          <div className="text-teal-600 dark:text-white text-base">14.500
                            <span> تومان تخفیف </span></div>
                          <div className="text-zinc-700 dark:text-emerald-500 text-xl font-sahel-black ">   175.000
                            <span className="font-sahel text-xm">تومان   </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-x-2.5 font-sahel-bold text-sm ">
                      <img src={product2} alt="product1" className="w-[7.5rem] h-[7.5rem]" />
                      <div className="flex flex-col justify-between">
                        <h4 className="font-sahel-bold text-zinc-700 text-base dark:text-white">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                        <div className="">
                          <div className="text-teal-600 dark:text-white text-base">14.500
                            <span> تومان تخفیف </span></div>
                          <div className="text-zinc-700 dark:text-emerald-500 text-xl font-sahel-black ">   175.000
                            <span className="font-sahel text-xm">تومان   </span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/*__footer cart  */}
                  <div className="flex justify-between mt-5">
                    <div className="">
                      <span className='font-sahel text-gray-300  text-xs tracking-tighter'>مبلغ قابل پرداخت</span>
                      <div className="text-zinc-700 dark:text-emerald-500 text-xl font-sahel-black ">   175.000
                        <span className="font-sahel text-xm">تومان   </span>
                      </div>
                    </div>
                    <a href="#" className="flex justify-center items-center w-[144px] h-14 text-white bg-teal-600 dark:text-black dark:bg-white hover:bg-teal-700 dark:hover:bg-emerald-600 rounded-xl tracking-tightest transition-colors text-base">ثبت سفارش</a>
                  </div>

                </div>
                <ShoppingCartIcon className='w-8 h-8' />
              </div>

              {/* !__theme switch btn */}
              {props.dark ? <MoonIcon className='w-8 h-8 cursor-pointer transition-all' onClick={props.darkModeHandler} /> : <SunIcon className='w-8 h-8 cursor-pointer transition-all' onClick={props.darkModeHandler} />}

            </div>
            {/* __divide border */}
            <span className=' w-px h-14 bg-white/20'></span>
            <a href="#" className='flex items-center gap-x-2.5 tracking-tightest'>
              <ArrowLeftEndOnRectangleIcon className='w-8 h-8 rotate-180' />
              <span className=' hidden xl:inline-block'>ورود  |  ثبت نام</span>
            </a>
          </div>
        </div>
      </header>
      
    </>
  )
}

