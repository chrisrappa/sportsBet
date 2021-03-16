import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


function HomeScreen (props) {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id:'';
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts(category));
        
        return () => {
            //
        }
    }, [category]);

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(listProducts(category, searchKeyword, sortOrder))
    } 

    const sortHandler = (e) => {
      setSortOrder(e.target.value);
      dispatch(listProducts(category, searchKeyword, sortOrder))
    }

    return (
    <>
    <div className="jumbo">
      <div className="main-img">
        <img className="grow" src="https://res.cloudinary.com/djrbfvpit/image/upload/v1615848655/jumbopicsmaller_fhfhjt.png"></img>
      </div>
      <div className="tagline">
        <h1>Meal Prep.</h1>
        <h1>Made Easy.</h1>
        
      </div>
      
    </div>
      {category && <h2>{category}</h2>}
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
      </ul>
      {loading ? (
        <div>Loading...</div>
      ) : error? (
        <div>{error}</div>
      ) : (
      <ul className="products">
            {products.map((product) => (
              <li key={product._id}>
                  <div className="product">
                    <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="product"/>
                    </Link> 
                        <div className="product-name">
                          <Link to={'/product/' + product._id}>{product.name}</Link> 
                        </div>
                        <div className="product-brand">{product.name}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">{product.rating} Stars</div>
                        <div className="product-rating">{product.numReviews} Reviews</div>
                      </div>
              </li>
              ))}
        </ul>  
      )}
  </>
  );
}
    

export default HomeScreen;