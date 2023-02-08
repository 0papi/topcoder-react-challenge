import { Link, useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import {toast} from "react-toastify";
import {encryptPassword} from "../utils/passwordHash";

const blockInput = "block";
const formWrapperClasses = "flex items-start flex-col space-y-1 mb-2";
const Signup = () => {
  // create application states here
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate()

  console.table({ userEmail, username, userPwd });

  /**
   * @description user registration handler
   * @requires name, password, email
   */

  const handleUserRegister = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(username.trim().length <= 0 || userPwd.trim().length <= 0 || userPwd.trim().length <= 0){
      toast.error('Please provide all fields')
      return;
    }

    // encrypt password before storing in local storage
    // ensure security before server is created
    const encryptedPassword = encryptPassword(userPwd)

    const userInformation = {
      email: userEmail,
      username,
      password: encryptedPassword
    }

  //  here I am going to mock an authentication functionality by sending user data to local storage
    localStorage.setItem('userData', JSON.stringify(userInformation))
    toast.success('Successfully registered. Log in to continue')
    navigate('/login')
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
      <h2>Create your account</h2>
      <form onSubmit={handleUserRegister}>
        <div className={`${formWrapperClasses}`}>
          <label htmlFor="name" className={`${blockInput}`}>
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="eg: John Doe"
            className="py-1 w-[300px] border border-gray-300 rounded-md pl-2 indent-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={`${formWrapperClasses}`}>
          <label htmlFor="email" className={`${blockInput}`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="eg: johndoe@test.com"
            className="py-1 w-[300px] border border-gray-300 rounded-md pl-2 indent-2"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className={`${formWrapperClasses}`}>
          <label htmlFor="password" className={`${blockInput}`}>
            Password
          </label>
          <input
            type="text"
            id="password"
            placeholder="eg: ********"
            className="py-1 w-[300px] border border-gray-300 rounded-md pl-2 indent-2"
            value={userPwd}
            onChange={(e) => setUserPwd(e.target.value)}
          />
        </div>
        <div>
          <button
            className="rounded-md bg-blue-500 text-base focus-within: outline-none focus:outline text-white py-2 px-5 w-full mt-2"
            type="submit"
          >
            Register
          </button>
          <p className="mt-2">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
