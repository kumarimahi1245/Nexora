import React, {useEffect} from 'react'
import { getData } from '../context/DataContext'
import FilterSection from '../Components/FilterSection'
import Loading from '../assets/loading4.webm'
import ProductCard from '../Components/ProductCard'

const Product = () => {
  const { data, fetchingAllProducts  } = getData()

  useEffect (() => {
      fetchingAllProducts()
  }, [])

  return (
    <div className='max-w-6xl mx-auto px-4 m-10'>
      {
        data?.length > 0 ? (
          <div className='flex gap-8 '>
            <FilterSection/>
            <div className='grid grid-cols-4 gap-7 mt-10 '>
              {
                data?.map((product, index) => {
                  return <ProductCard key={index} product={product}/>
                })
              }
            </div>

          </div>
        ) : (
          <div className='flex items-center justify-content h-[400px]'>
            <video muted autoPlay loop>
              <source src={Loading} type='video/webm'/>
            </video>
          </div>
        )
      }
    </div>
  )
}

export default Product