import React from 'react';
import{ useCart } from 'react-use-cart';

const Cart = () => {
    const {
           isEmpty,
           totalUniqueItems,
           items,
           totalItems,
           cartTotal,
           updateItemQuantity,
           removeItem,
           emptyCart,
    } = useCart();
    if(isEmpty) return <h5 className='text-context'>Your Cart is Empty</h5>
    
  return (
    <section className='py-4 container'>
        <div className='roq justify-content-center'>
            <div className='col-12'>
                <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                        {items.map((item, index)=>{
                            return (
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{height:'6rem'}} alt="" />
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>{item.price}</td>
                                    <td>Quantity({item.quantity})</td>
                                    <td>
                                        <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity)}>-</button>
                                        <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity)}>+</button>
                                        <button className='btn btn-danger ms-2'onClick={() => updateItemQuantity(item.id, item.quantity)}>Remove item</button>
                                    </td>

                                </tr>
                            )

                        })}

                    </tbody>
                    

                </table>

            </div>

            <div className='col-auto ms-auto'>
                <h3>Total Price:$ {cartTotal}</h3>
            </div>
            <div className='col-auto'>
                <button className='btn btn-danger m-2' onClick={() => emptyCart()}> Clear Cart</button>
                <button className='btn btn-primary'>Buy now</button>

            </div>

        </div>
    </section>

  )
}

export default Cart
