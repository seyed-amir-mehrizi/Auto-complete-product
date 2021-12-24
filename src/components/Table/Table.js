
import React from 'react'

export default function Table({ Products = [] }) {
    return (
        <div className='p-2'>
            {
                Products.length > 0 ? 
            <table className="table table-striped" data-testid="products-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Gtin</th>
                        <th>Gender</th>
                        <th>Price</th>
                        <th>Sale Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map((product) => {
                            return <tr key={product.gtin}>
                                <td>{product.title}</td>
                                <td>{product.gtin}</td>
                                <td>{product.gender}</td>
                                <td>{product.price}</td>
                                <td>{product.sale_price}</td>
                                <td>
                                    <img src={product.image_link} className="rounded" alt={product.title} style={{width:'80px' , height:'80px'}}/>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
             : 
             <h3 className='text-center'>
                 There Are No Products ...
             </h3>
            }
        </div>
    )
}
