import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import React, { useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';



function useHover(){
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    
    useEffect(() => {
 
        ref.current.addEventListener('mouseenter', enter)
        ref.current.addEventListener('mouseleave', leave)

        return () => {
            //
        }
    }, [])
    
    return[ref, hovered];
}


function ProductScreen (props) {

    const [ref, hovered] = useHover();
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
          //
        };
      }, []);

      const handleAddToCart = () => {

          props.history.push("/cart/" + props.match.params.id + "?qty=" + qty) 

        }

    return <div className="details-container">
        <div className="back-to-result">
            <HashLink to="/#products" ref={ref}>
                
                {hovered ? 
                <img src="https://res.cloudinary.com/djrbfvpit/image/upload/v1616265424/circle_left_hover_us7qqa.png"/>
                : 
                <img src="https://res.cloudinary.com/djrbfvpit/image/upload/v1616262644/circled-left-2_usxejf.png" />}

                
            </HashLink>
        </div>
        {loading? <div>Loading...</div>:
        error? <div>{error}</div>: 

    (
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product" />
            </div>
            <div className="details-info-action">
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li className="rating-price">
                            <b>${product.price}</b>
                            {product.rating} Stars ({product.numReviews} Reviews)
                        </li>
                        <li className="description">
                            <div className="description-head">
                                Description
                            </div>
                            
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                            <div>
                            Status: {product.countInStock > 0? <div className="instock">In Stock</div> : "Out Of Stock"}
                            </div>
                            <div>
                                <div>Qty:</div> <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                    {[...Array(product.countInStock).keys()].map(x =>
                                    <option key={x+1} value={x+1}>{x+1}</option>
                                        )}
                                </select>
                            </div>
                            <div>
                            {
                            
                            product.countInStock > 0 && 
                            <button  onClick={handleAddToCart} className="button primary">Add to Cart</button>

                            }
                            </div>
                </div>
            </div>
        </div>

    
    )
    
    }
    </div> 
}

export default ProductScreen;


