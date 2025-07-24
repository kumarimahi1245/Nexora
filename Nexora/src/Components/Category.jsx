import { getData } from '../context/DataContext'
import React, { useEffect } from 'react';

const Category = () => {
    const {categoryOnlyData } = getData() 

    return (
        <div className='bg-[#101829]'>
            <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4'>
                {
                    categoryOnlyData?.map((item,index)=> {
                        return <div key={index}>
                            <button className='uppercase bg-gradient-to-r from bg-red-500 to-purple-500 text-white px-3 py-1 
                            rounded-md  cursor-pointer'>{item}</button>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Category