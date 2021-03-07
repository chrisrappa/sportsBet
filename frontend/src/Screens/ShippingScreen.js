import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen (props) {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
  

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        //find a way to overwrite the information if the customer wants to change shipping address
        
        dispatch(saveShipping({address, city, state, zipCode, country}));
        props.history.push('payment');
    }

    return <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Shipping Details</h2>
                    </li>
                    <li>

                    </li>
                    <li>
                        <label htmlFor="name">
                            Address
                        </label>
                        <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="city">
                            City
                        </label>
                        <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="state">
                            State
                        </label>
                        <input type="text" name="state" id="state" onChange={(e) => setState(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="zipCode">
                            Zip Code
                        </label>
                        <input type="text" name="zipCode" id="zipCode" onChange={(e) => setZipcode(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="country">
                            Country
                        </label>
                        <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}></input>
                    </li>
                    <li>
                        <button type="submit" className="button primary"> Continue </button>
                    </li>
                </ul>
            </form>
        </div>
    </div>

}



export default ShippingScreen;
