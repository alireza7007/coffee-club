import React from 'react'
import product1 from '../../assets/products/p1.png'
import { ArrowsRightLeftIcon, ShoppingBagIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline'

export default function Product({image,id,price,desc}) {
  return (
    <div className='flex flex-col justify-center items-center mb-5  w-56 h-80  bg-white/80 dark:bg-zinc-700 rounded-2xl shadow-normal'>
        <div className="flex flex-col mb-2">
        <img src={image} alt="" className="w-52 h-56" />
        <span className="text-zinc-700 dark:text-white">{desc}</span>
        <span className="text-zinc-700 dark:text-white">خط دوم اسم طولانی</span>
        <span className="text-green-700">{price}  تومان</span>
        </div>
        <div className="flex items-center gap-x-24">
            <div className="flex items-center">
            <ShoppingCartIcon className='w-4 h-4' />
            <ArrowsRightLeftIcon className='w-4 h-4' />
            </div>
            <div className="flex items-center">
            <StarIcon className='w-4 h-4 text-yellow-400'/>
            <StarIcon className='w-4 h-4 text-yellow-400'/>
            <StarIcon className='w-4 h-4 text-yellow-400'/>
            <StarIcon className='w-4 h-4 text-yellow-400'/>
            <StarIcon className='w-4 h-4 text-yellow-400'/>
            </div>
        </div>
    </div>
  )
}
