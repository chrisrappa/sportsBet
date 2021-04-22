import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';



function HomeScreen (props) {

    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id:'';
    
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;

    const productDetails = useSelector(state => state.productDetails);
    const { product } = productDetails;
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts(category));
        
        return () => {
            //
        }
    }, [category]);

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(listProducts(category, sortOrder))
    } 

    const sortHandler = (e) => {
      setSortOrder(e.target.value);
      dispatch(listProducts(category, sortOrder))
    }

    return (
    <>
    <div className="jumbo">
      <div className="main-img">
        <img className="grow" src="https://res.cloudinary.com/djrbfvpit/image/upload/v1615848655/jumbopicsmaller_fhfhjt.png"></img>
      </div>
      <div className="tagline">
        <h1>Meal Prep.</h1>
        <span className="taglinesub"><h1>Made Easy.</h1></span>
        <img className="fade-in slide-in-down" src="https://res.cloudinary.com/djrbfvpit/image/upload/v1616011006/downarrow_cz4juo.png"></img>
      </div>
      
    </div>
    <div className="order-steps">
      <img src="https://res.cloudinary.com/djrbfvpit/image/upload/v1616008974/checkoutsteps_phlzyk.png"></img>
    </div>

      {/* I don't see a good use for the search funcionatliy right now, but we'll keep it here for later */}

      {/* {category && <h2>{category}</h2>}
      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </li>
        <li>
        Sort By {''}
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
      </ul> */}
      {loading ? (
        <div>Loading...</div>
      ) : error? (
        <div>{error}</div>
      ) : (
      <ul className="products" id="products">
            {products.map((product) => (
              <li key={product._id}>
                  <div className="product">
                    <Link to={'/product/' + product._id}>
                      <img className="product-image" src={product.image} alt="product"/>
                    </Link> 
                    <div className="product-name">
                      <Link to={'/product/' + product._id}>{product.name}</Link> 
                      </div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">{product.rating} Stars</div>
                    <div className="product-rating">{product.numReviews} Reviews</div>
                    <div>
                      <Link to={'/product/' + product._id}>
                        <button className="button primary">
                          View Details
                        </button>
                      </Link>
                    </div>

                    {/* In the future, I want to have "Add to Cart" button and "Qty" selection 
                    using +/- buttons that are limited by product.countInStock. Also to have a "View Details" button
                    on the product card that opens a pop up window with product details. This flow would have the
                    customer continually adding items with the cart updating as they do instead of moving through
                    two different screens for this. */}

                    {/* Problems encountered with this so far: 
                    - When I increment/decrement on one product it adjusts it for all products on the page
                    - Unable to get limit from product.countInStock for +/- buttons 
                    */}

                  </div>
              </li>
              ))}
        </ul>  
      )}
  </>
  );
}
    

export default HomeScreen;