
import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


export default function Table({ Products = [] }) {
    const [imageDetailShown, setImageDetailShown] = useState([]);

    const toggleRow = (gtin) => {
        const showState = imageDetailShown.slice();
        const index = showState.indexOf(gtin);
        if (index >= 0) {
            showState.splice(index, 1);
            setImageDetailShown(showState)
        } else {
            showState.push(gtin);
            setImageDetailShown(showState);
        }
    }
    return (
        <div className='p-2'>
            {
                Products.length > 0 ?
                    <table className="table table-striped" data-testid="products-table">
                        <thead>
                            <tr>
                                <th></th>
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
                                    return <React.StrictMode key={product.gtin}>
                                        <tr onClick={() => toggleRow(product.gtin)} className='cursor-pointer'>
                                            <td>
                                                {
                                                    imageDetailShown.includes(product.gtin) ? <FiChevronUp /> : <FiChevronDown />
                                                }
                                            </td>
                                            <td>{product.title}</td>
                                            <td>{product.gtin}</td>
                                            <td>{product.gender}</td>
                                            <td>{product.price}</td>
                                            <td>{product.sale_price}</td>
                                            <td>
                                                <img src={product.image_link} className="rounded" alt={product.title} style={{ width: '100px', height: '100px' }} />
                                            </td>
                                        </tr>
                                        {
                                            imageDetailShown.includes(product.gtin) ?

                                                <tr>
                                                    <td colSpan="7" className='w-100'>
                                                        {
                                                            product.additional_image_link.split(',').length > 0 ? product.additional_image_link.split(',').map((image, i) => {
                                                                return <img key={i} src={image} alt="other_image" className="mr-3 mt-3 rounded-circle" style={{ width: '100px', height: '100px' }} />
                                                            }) : <h5>
                                                                There are No Extra Images
                                                            </h5>

                                                        }
                                                    </td>
                                                </tr> : null
                                        }

                                    </React.StrictMode>
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
