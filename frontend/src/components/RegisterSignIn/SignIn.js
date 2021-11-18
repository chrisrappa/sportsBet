import { useState, useEffect } from 'react';
import { signin } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function SignIn(props) {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } =  userSignin;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  // const redirect = props.location.search ? props.location.search.split("=")[1]: '/';

  useEffect(() => {
    if(userInfo){
      history.push('/');
    }
    
  }, [userInfo, history])

  const submitHandler = (e) => {
    dispatch(signin(email, password)); 
    e.preventDefault();
}

  return (
    <div className = 'signin-container'>
      <div className = 'signin-img' />
      <div className = 'signin-form'>
        <form onSubmit = {submitHandler}>
          <ul className="form-container">
            <li>
                <h2>Log-In</h2>
            </li>
            <li>
                <label htmlFor="email">
                    Username or Email
                </label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className = 'h-full py-0 pl-2 pr-7  bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className = 'h-full py-0 pl-2 pr-7  bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <button type="submit" className="button primary"> Sign In</button>
            </li>
            <li>
              Dont have an account?
            </li>
              <li>
                  {/* <Link to={redirect === "/" ? "register" : "registers?redirect=" + redirect} className="button text-center secondary">Create your account!</Link> */}
              </li>
          </ul>
        </form>
      </div>
    </div>
  )
}
