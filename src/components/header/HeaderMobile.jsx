import React, { useState } from 'react'
import { ArrowDownIcon, ArrowLeftEndOnRectangleIcon, Bars3Icon, BriefcaseIcon,
     ChatBubbleLeftIcon, ChevronLeftIcon, DocumentTextIcon, HomeIcon, MoonIcon,
      PhoneArrowUpRightIcon, ShoppingBagIcon, ShoppingCartIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/app-logo.png'
import logoTyppe from '../../assets/svgs/logo-type.svg'
import product1 from '../../assets/products/p1.png'
import product2 from '../../assets/products/p2.png'
import product3 from '../../assets/products/p3.png'

export default function HeaderMobile(props) {

      const [submenu,setSubMenu] = useState(false)
      const [nav, setNav] = useState(false)
      const [leftBar,setLeftBar] =useState(false)
     
      
      
      const subMenuHandler = () => {
        setSubMenu(!submenu) 
      }
      const handelOverllayCloseTab = () => {
        setLeftBar(false)
        setNav(false)
      }
  return (
    <>
    <div className="flex md:hidden items-center justify-between h-16 px-4 bg-white dark:bg-zinc-700">
      {/* !__barIcON */}
      <div className="">
        <Bars3Icon className='w-6 h-6 text-zinc-700 dark:text-white' onClick={() => setNav(true)} />
      </div>
      <div className={`fixed top-0 ${nav ? "right-0" : "-right-64"} bottom-0 z-20 w-64 min-h-screen pt-3 px-4 bg-white dark:bg-zinc-700 transition-all `}>
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
          <div className="flex items-center gap-x-2.5">
            <img src={logo} className='w-[41px] h-10 text-orange-300' alt="golden Coffee" />
            <img src={logoTyppe} className='w-[100px] h-10 text-orange-300' alt="golden Coffee" />
          </div>

          <XMarkIcon className='w-5 h-5 text-zinc-600 dark:text-white' onClick={() => setNav(false)}/>
        </div>

        <div className="">
          <ul className='flex items-start flex-col  child:pr-2.5 gap-y-4 text-zinc-600 dark:text-white'>
            <li className='flex items-center gap-x-2 bg-orange-200/20 text-orange-300 rounded-md pr-0 '>
              <HomeIcon className='w-5 h-5 '/>
              <a className='font-sahel-bold' href="">صفحه اصلی</a>
            </li>
            <li className='flex items-center gap-x-32 justify-between '>
              <div className="flex items-center gap-x-2">
              <ShoppingBagIcon className='w-5 h-5 text-orange-300' />
              <a className='text-orange-300' href="">فروشگاه</a>
              </div>
              <ArrowDownIcon onClick={subMenuHandler} className='w-4 h-4'/>
              </li>
              
              <div id='submenuopt' className={`${submenu ? 'flex' : 'hidden' }  flex-col items-start text-zinc-600 gap-y-3 child:pr-8 transition-all dark:text-white`}>
                <a href="#">قهوه ویژه</a>
                <a href="#">ویژه در سطح جهانی</a>
                <a href="#">قهوه درجه یک</a>
                <a href="#">ترکیبات تجاری</a>
                <a href="#">قهوه کپسول</a>
                <a href="#">قهوه زینو برزیلی</a>
               
              </div>
            <li className='flex items-center gap-x-2'>
              <ChatBubbleLeftIcon className='w-5 h-5' />
              <a href="">دیکشنری</a>
              </li>
            <li className='flex items-center gap-x-2'>
              <BriefcaseIcon className='w-5 h-5' />
              <a href="">درباره ما</a>
              </li>
              <li className='flex items-center gap-x-2'>
              <DocumentTextIcon className='w-5 h-5' />
              <a href="">بلاگ</a>
              </li>
            <li className='flex items-center gap-x-2'>
              <PhoneArrowUpRightIcon className='w-5 h-5' />
              <a href="">تماس با ما</a>
              
              </li>
          </ul>
        </div>



        <div className="flex flex-col items-start gap-y-6 px-2.5  mt-8 pt-8 border-t border-t-gray-100 dark:border-t-white/10 ">
        <a href="#" className='inline-flex items-center gap-x-2.5 tracking-tightest text-orange-300 '>
            <ArrowLeftEndOnRectangleIcon className='w-5 h-5 rotate-180' />
            <span className=' '>ورود  |  ثبت نام</span>
          </a>

          {props.dark ? <span  className='inline-flex items-center gap-x-2.5 tracking-tightest text-orange-300 '>
            <MoonIcon className='w-5 h-5 ' onClick={props.darkModeHandler} />
            <span className=''>حالت روز</span>
          </span>:<span  className='inline-flex items-center gap-x-2.5 tracking-tightest text-orange-300 '>
            <SunIcon className='w-5 h-5 ' onClick={props.darkModeHandler} />
            <span className=''>حالت شب</span>
          </span>}
          
          <a href="#" className='inline-flex items-center gap-x-2.5 tracking-tightest text-orange-300 '>
            <ShoppingCartIcon className='w-5 h-5 ' />
            <span className=''>سبد خرید</span>
          </a>
        </div>
      </div>

      {/* !__LOGO ICON */}
      <div className='w-[100px] h-10 text-orange-300'>
        <img src={logoTyppe} alt="golden Coffee" />
      </div>
      {/* !__CART iCON */}
      <div className="">
        <ShoppingCartIcon className='w-6 h-6 text-zinc-700 dark:text-white ' onClick={() => setLeftBar(true)} />
      </div>
      <div className={`fixed flex flex-col top-0 ${leftBar ? "left-0":"-left-64"} bottom-0 z-20 w-64 min-h-screen pt-5 px-4 bg-white dark:bg-zinc-700 transition-all `}>
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
          <XMarkIcon className='w-5 h-5 text-zinc-600 dark:text-white' onClick={() => setLeftBar(false)}/>
          <span className='font-sahel-bold'>سبد خرید</span>
        </div>


        

        <div className='child:mb-5 child:pb-5 overflow-auto'>
        <div className="flex gap-x-1 font-sahel-bold text-sm items-center justify-between  border-b border-b-gray-100 dark:border-b-white/10 ">
                    <img src={product1} alt="product1" className="w-[90px] h-[90px]" />
                    <div className="flex flex-col justify-between gap-y-1.5">
                      <h4 className=" text-zinc-700 dark:text-white text-sm line-clamp-2">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                      <div className="">
                        <div className="text-teal-600 dark:text-white text-xs tracking-tighter"> 14.500تومان تخفیف
                          </div>
                        <div className="text-zinc-700 dark:text-emerald-500 text-xs font-sahel-bold">   175.000
                          <span className=" text-xs font-sahel-bold">تومان   </span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex gap-x-1 font-sahel-bold text-sm items-center justify-between  border-b border-b-gray-100 dark:border-b-white/10 ">
                    <img src={product3} alt="product3" className="w-[90px] h-[90px]" />
                    <div className="flex flex-col justify-between gap-y-1.5">
                      <h4 className=" text-zinc-700 dark:text-white text-sm line-clamp-2">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                      <div className="">
                        <div className="text-teal-600 dark:text-white text-xs tracking-tighter"> 14.500تومان تخفیف
                          </div>
                        <div className="text-zinc-700 dark:text-emerald-500 text-xs font-sahel-bold">   175.000
                          <span className=" text-xs font-sahel-bold">تومان   </span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  <div className="flex gap-x-1 font-sahel-bold text-sm items-center justify-between ">
                    <img src={product2} alt="product2" className="w-[90px] h-[90px]" />
                    <div className="flex flex-col justify-between gap-y-1.5">
                      <h4 className=" text-zinc-700 dark:text-white text-sm line-clamp-2">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                      <div className="">
                        <div className="text-teal-600 dark:text-white text-xs tracking-tighter"> 14.500تومان تخفیف
                          </div>
                        <div className="text-zinc-700 dark:text-emerald-500 text-xs font-sahel-bold">   175.000
                          <span className=" text-xs font-sahel-bold">تومان   </span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
        </div>

                  <div className="flex items-end mb-8 gap-x-4 mt-auto">
                  <a href="#" className="flex justify-center items-center flex-grow w-28 h-11 text-white bg-teal-600 dark:bg-emerald-600 dark:text-black  hover:bg-teal-700 dark:hover:bg-emerald-800 rounded-xl tracking-tightest transition-colors text-base">ثبت سفارش</a>
                  <div className="">
                    <span className='font-sahel text-gray-300  text-xs tracking-tighter'>مبلغ قابل پرداخت</span>
                    <div className="text-zinc-700 dark:text-emerald-500 text-xs font-sahel-black ">   175.000
                      <span className="font-sahel text-xs">تومان   </span>
                    </div>
                  </div>
                 
                
                </div>
                </div>
       
      



    </div>


    {nav || leftBar  ? <div className=" md:hidden overllay fixed w-full h-full inset-0 bg-black/40 z-10"  onClick={handelOverllayCloseTab }></div>: null}
    </>
  )
}
