import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout'
import Loader from '../../component/loader/Loader'
import myContext from '../../context/data/myContext'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(myContext)
  const { mode, loading, order } = context

  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ?
        (
          <div className="h-full pt-10">
            {
              order.filter(obj => obj.userid == userid).map((order, orderIndex) => (
                <div key={orderIndex} className="mx-auto max-w-5xl px-6 md:space-y-6 xl:px-0">
                  {
                    order.cartItems.map((item, itemIndex) => (
                      <div key={itemIndex} className="mb-6 rounded-lg bg-white p-6 shadow-md" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                        <div className="flex flex-col md:flex-row items-center">
                          <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg md:w-40" />
                          <div className="mt-5 md:mt-0 md:ml-4">
                            <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                            <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                            <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{item.price}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        )
        :
        (
          <h2 className='text-center text-2xl text-white'>No Orders</h2>
        )
      }
    </Layout>
  )
}

export default Order
