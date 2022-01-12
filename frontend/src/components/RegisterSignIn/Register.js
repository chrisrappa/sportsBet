import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';


export default function Register() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [zipCode, setZipCode] = useState ('');

  const [passwordLength, setPasswordLength] = useState(false);

  const userRegister = useSelector(state => state.userRegister || {});
  const { userInfo } = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    if(passwordLength === true){
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
    }
  }
  
  useEffect(() => {
    if(password.length > 8){
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password])

  return (
    <>
      { !userInfo 
      
        ?
      
          <div className = 'register-form'>
            <form onSubmit = {submitHandler}>
              <ul className="form-container">
                <li>
                    <h2>Register</h2>
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
                    {passwordLength === false ?
                      <label className='passwordLength'>
                        Please enter a password at least 8 characters long.
                      </label>

                      :

                      null
                    }
                    
                </li>
                <li>
                    <label htmlFor="name">
                      Full Name
                    </label>
                    <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
                </li>
                <li>
                    <label htmlFor="date">
                      Date of Birth
                    </label>
                    <input type="date" name="dob" id="dob" onChange={(e) => setDob(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
                </li>
                <li>
                    <label htmlFor="gender">
                      Gender
                    </label>
                    <select type="gender" name="gender" id="gender" onChange={(e) => setGender(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-md rounded-md'>
                      <option>Select Option</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="zipCode">
                      ZipCode (Must be 5 numbers)
                    </label>
                    <input id="zip" name="zip" type="text" pattern="[0-9]{5}" maxLength="5" minLength="5" onChange={(e) => setZipCode(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
                </li>
                <li>
                    <button type="submit" className="button primary"> Register</button>
                </li>
              </ul>
            </form>
          </div>

        : null
      }
        
    </>
  )
}
