import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_PAY_RESET } from '../constants/orderConstants';
import  StripePayment from '../components/StripePayment';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import CardInput from '../components/CardInput';




function OrderScreen(props) {

  const userSignin = useSelector(state => state.userSignin) 
  const { userInfo } = userSignin; 

  const stripe = useStripe();
  const elements = useElements();

  const email = userInfo.email;

  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();


  // Stripe Payment Stuff
  const [stripeId, setStripeId] = useState('');


  const handleSubmit = async (event)  => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const res = await axios.post(`/${order._id}/pay`, {email: email});

    const clientSecret = res.data['client_secret'];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: userInfo.email,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        handleSuccessPayment(result.paymentIntent);
        // console.log(result.paymentIntent);
      }
    }
  };

  const handleSubmitSub = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: email,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      const res = await axios.post('http://localhost:5000/sub',  
      {
        'payment_method': result.paymentMethod.id,
        'email': email,
        'stripeId': stripeId
      });
      
      // eslint-disable-next-line camelcase
      const {client_secret, status} = res.data;

      if (status === 'requires_action') {
        stripe.confirmCardPayment(client_secret).then(function(result) {
          if (result.error) {
            console.log('There was an issue!');
            console.log(result.error);
            // Display error message in your UI.
            // The card was declined (i.e. insufficient funds, card has expired, etc)
          } else {
            console.log('You got the money!');
          }
        });
      } else {
        console.log("payment success");
        handleSuccessSub(result.paymentIntent);   
        // No additional information was needed
        // Show a success message to your customer
      }
    }
  };

  // End Stripe Payment Stuff



  useEffect(() => {
    if (
      !order ||
      successPay ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      setSdkReady(true);
      setStripeId(order.stripeID);
    }}, [dispatch, orderId, sdkReady, successPay, order]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }

  const handleSuccessSub = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }

  return loading ? (
    <LoadingBox />
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              Shipping
          </h3>
            <div>
              {order.shipping.address}, {order.shipping.city}, {order.shipping.state}
              {order.shipping.zipCode}, {order.shipping.country}
            </div>
            <div>
              {order.isDelivered ? (
                <MessageBox variant="success">Delivered at {order.deliveredAt}</MessageBox>
              ) : (
                <MessageBox variant="danger">Not Delivered</MessageBox>
              )}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>
              Payment Method: {order.payment.paymentMethod}
            </div>
            <div>
              {order.isPaid ? "Paid at " + order.paidAt : "Not Paid."}
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Shopping Cart
          </h3>
                <div>
                  Price
          </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Cart is empty
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>

                        </div>
                        <div>
                          Qty: {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        ${item.price}
                      </div>
                    </li>
                  )
              }
            </ul>
          </div>


        </div>
        <div className="placeorder-action">
          <ul>
            {!order.isPaid && (
            <li className="placeorder-actions-payment">
              {!sdkReady ? (
                <div>Loading...</div>
              ) : (
                <>
                {/* {errorPay && (
                  <div>{errorPay}</div>
                )}
                {loadingPay && (
                  <div>Loading...</div>
                )} */}

                {/* Stripe JSX */}
                <div className="stripe-container">
                  <form className="stripe-form">
                    <ul>
                      <li className="email-form">
                        <label htmlFor="email">
                          Email:
                        </label>
                        <p type="email" value={email} name="email" id="email">{userInfo.email}</p>
                      </li>
                      <li>
                        <CardInput />
                      </li>
                    </ul>
                  </form>
                  <div className="stripe-pay">
                    <button className="stripe-button button primary" onClick={handleSubmit}>
                      Pay
                    </button>
                    <button className="stripe-button button primary" onClick={() => handleSubmitSub(stripeId)}>
                      Subscribe
                    </button>
                  </div>
                </div>
                {/* End Stripe JSX */}
                {/* <StripePayment amount={order.totalPrice} successPay={props.handleSuccessPayment}/> */}
                {/* <PayPalButton amount={order.totalPrice} onSuccess={handleSuccessPayment}></PayPalButton> */}
                
                </>
              )}
            </li>
            )}
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>${order.itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${order.shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${order.taxPrice}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>${order.totalPrice}</div>
            </li>
          </ul>



        </div>

      </div>
    </div>

)}

export default OrderScreen;
