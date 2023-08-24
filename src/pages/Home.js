import axios from 'axios'
import React, {  useState} from 'react'
import Product from '../components/Product'

const Home = () => {
    const [fetchData, setFetchData] = useState([])
    

         axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setFetchData(res.data)
            // console.log(res.data)
        })
        // const click =()=>{
        //     console.log(fetchData)
        // }

       
    
    
    return (
        <>
            <section className='py-16 mx-[60px] '>
                {/* <button onClick={click} >asfkas</button> */}
                    <div className=" grid gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {
                            fetchData.map(products => {
                                return (
                                    <Product key={products.id} product={products} />
                                )
                            })
                        }
                    </div>
                
            </section>


        </>
    )
}

export default Home
