import {Link, useNavigate} from "react-router-dom";
import {useState, ChangeEvent, useEffect} from "react";
import {toast} from "react-toastify";
import {encryptPassword} from "../utils/passwordHash";

const blockInput = "block";
const formWrapperClasses = "flex items-start flex-col space-y-1 mb-2";
const Login = () => {
  // create application states here
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const navigate = useNavigate()

  const userData = JSON.parse(localStorage.getItem('userData')!)

useEffect(() => {
  if(!userData){
    navigate('/register')
  }
}, [])




  /**
   * @description user registration handler
   * @requires name, password, email
   */

  const handleUserRegister = (e: ChangeEvent<HTMLFormElement>) => {
    // get user data from localstorage
    e.preventDefault();

    if(userPwd.trim().length <= 0 || userPwd.trim().length <= 0){
      toast.error('Please provide all fields')
      return;
    }

  //   encrypt user password
    const encryptNewlyEnteredPassword = encryptPassword(userPwd)


  //   check if newly entered userData is the same as what is stored in localStorage
    if(encryptNewlyEnteredPassword === userData.password && userEmail === userData.email) {
      toast.success('Successfully logged in')
      navigate('/create')
    } else {
      toast.error('Email or Password incorrect')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
      <h2>Log into your account</h2>
      <form onSubmit={handleUserRegister}>
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
            Login
          </button>
          <p className="mt-2">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
