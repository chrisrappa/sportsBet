import Axios from 'axios';
import { 

    ORDER_CREATE_FAIL, 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS 
} 
from '../constants/orderConstants';


const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({type: ORDER_CREATE_REQUEST, payload: order});
        const {userSignin: { userInfo } } = getState();
        const {data: {data:newOrder}} = await Axios.post("/api/orders", order, {
            //headers:{
                //Authoriztion: 'Bearer' + userInfo.token
            //}
        })
        dispatch({type: ORDER_CREATE_SUCCESS, payload: newOrder});

    } catch (error) {
        dispatch({type: ORDER_CREATE_FAIL, payload: error.message});
    }
    
}

export { createOrder }