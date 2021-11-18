import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';
import { useHistory } from 'react-router';

export default function Register(props) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [zipCode, setZipCode] = useState ('');

  const userRegister = useSelector(state => state.userRegister || {});
  const { userInfo } = userRegister;

  const dispatch = useDispatch();
  const history = useHistory();
  // const redirect = props.location.search ? props.location.search.split("=")[1]: '/';

  useEffect(() => {
    if(userInfo){
      history.push('/');
    }
    
  }, [userInfo, history])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      register(
        username,
        email, 
        password, 
        name,
        dob,
        gender,
        zipCode
      )
    )
    console.log(userInfo);
  }

  return (
      <div className = 'register-form'>
        <form onSubmit = {submitHandler}>
          <ul className="form-container">
            <li>
                <h2>Become A Member</h2>
            </li>
            <li>
                <label htmlFor="username">
                  Username
                </label>
                <input type="username" name="username" id="username" onChange={(e) => setUsername(e.target.value)} className = 'h-full py-0 pl-2 pr-7  bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <label htmlFor="email">
                  Email
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
                <label htmlFor="name">
                  Full Name
                </label>
                <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <label htmlFor="dob">
                  Date of Birth
                </label>
                <input type="dob" name="dob" id="dob" onChange={(e) => setDob(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <label htmlFor="gender">
                  Gender
                </label>
                <input type="gender" name="gender" id="gender" onChange={(e) => setGender(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <label htmlFor="zipCode">
                  ZipCode
                </label>
                <input type="zipCode" name="zipCode" id="zipCode" onChange={(e) => setZipCode(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <button type="submit" className="button primary"> Register</button>
            </li>
            <li>
              Already have an account?
            </li>
              <li>
                  {/* <Link to={redirect === "/" ? "register" : "registers?redirect=" + redirect} className="button text-center secondary">Create your account!</Link> */}
              </li>
          </ul>
        </form>
      </div>

  )
}
