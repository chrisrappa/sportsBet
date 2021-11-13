import { useState } from 'react';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [zipCode, setZipCode] = useState ('');

  return (
    <div className = 'register-container'>
      <div className = 'register-img' />
      <div className = 'register-form'>
        <form onSubmit = ''>
          <ul className="form-container">
            <li>
                <h2>Become A Member</h2>
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
                <label htmlFor="password">
                  Full Name
                </label>
                <input type="password" name="password" id="password" onChange={(e) => setName(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <label htmlFor="password">
                  Date of Birth
                </label>
                <input type="password" name="password" id="password" onChange={(e) => setDob(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <label htmlFor="password">
                  Gender
                </label>
                <input type="password" name="password" id="password" onChange={(e) => setGender(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <label htmlFor="password">
                  ZipCode
                </label>
                <input type="password" name="password" id="password" onChange={(e) => setZipCode(e.target.value)} className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
            </li>
            <li>
                <button type="submit" className="button primary"> Sign In</button>
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
    </div>
  )
}
