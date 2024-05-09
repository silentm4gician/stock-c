import products from '../mocks/products.json'

const ProdList = () => 
    {
        return (
            <>
                <div className='flex justify-between mx-[2%] text-white bg-stone-500 rounded-lg fixed top-23 left-0 right-0'>
                    <h3 className='p-2 font-bold font-mono'>PRODUCTO</h3>
                    <h3 className='p-2 font-bold font-mono'>STOCK</h3>
                    <h3 className='p-2 font-bold font-mono'>CATEGORIA</h3>
                    <h3 className='p-2 font-bold font-mono'>MARCA</h3>
                    <h3 className='p-2 font-bold font-mono'>PRECIO</h3>
                </div>
                <div className='flex p-1 mx-1 text-center mt-10'>
                    <div className='w-1/5'> 
                        {products.map(prod => 
                            <div key={prod.id} className='p-2 border truncate hover:overflow-visible hover:scale-100 hover:text-white hover:bg-stone-500 rounded-md'>
                                <h4 className='font-bold'>{prod.title}</h4>
                            </div>)}
                    </div>

                    <div className='w-1/5'>
                        {products.map(prod => 
                            <div key={prod.id} className='p-2 border truncate hover:overflow-visible hover:scale-100 rounded-md'>
                                <p className='text-yellow-800 font-bold'>{prod.stock}</p>
                            </div>)}
                    </div>
                    
                    <div className='w-1/5'>
                        {products.map(prod => 
                            <div key={prod.id} className='p-2 border truncate hover:overflow-visible hover:scale-100 hover:text-white hover:bg-stone-500 rounded-md'>
                                <p className='font-mono font-bold'>{prod.category}</p>
                            </div>)}
                    </div>

                    <div className='w-1/5'>
                        {products.map(prod => 
                            <div key={prod.id} className='p-2 border truncate hover:overflow-visible hover:scale-100 hover:text-white hover:bg-stone-500 rounded-md'>
                                <p className='font-bold'>{prod.brand}</p>
                            </div>)}
                    </div>


                    <div className='w-1/5'>
                        {products.map(prod => 
                            <div key={prod.id} className='p-2 border truncate hover:overflow-visible hover:scale-100 rounded-md'>
                                <p className='text-green-700 font-bold'>${prod.price}</p>
                            </div>)}
                    </div>
                </div>
            </>
        )
    }

export default ProdList