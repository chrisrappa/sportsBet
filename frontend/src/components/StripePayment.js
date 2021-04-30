import CardInput from '../components/CardInput';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function StripePayment(){

  const [email, setEmail] = useState('');


  const stripe = useStripe();
  const elements = useElements();

  const userSignin = useSelector(state => state.userSignin) 
  const { userInfo } = userSignin;  

  console.log(userInfo);

  const handleSubmit = async (event) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const res = await axios.post('http://localhost:5000/pay', {email: email});

    const clientSecret = res.data['client_secret'];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Money is in the bank!');
      }
    }
  };

  const handleSubmitSub = async (event) => {
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
      const res = await axios.post('http://localhost:5000/sub', {'payment_method': result.paymentMethod.id, 'email': email});
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
        return (this.props.handleSubmitSub);     
        // No additional information was needed
        // Show a success message to your customer
      }
    }
  };



  useEffect(() => {
    if(userInfo){
      setEmail(userInfo.email);
    }
    return () => {
        
    }
}, [userInfo.email])


  return(
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
          <button className="stripe-button button primary" onClick={handleSubmitSub}>
            Subscribe
          </button>
        </div>
      </div>
  )

}

export default StripePayment;

