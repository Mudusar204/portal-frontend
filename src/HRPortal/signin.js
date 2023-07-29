import { useNavigate,Link } from "react-router-dom/dist";
import style from "./signin.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { setUserEmail } from "../store/studentSlice";
import { useDispatch } from "react-redux";
export default function Signin() {
  const dispatch=useDispatch()
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let message=""
    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        email: data.email,
        password: data.password,
      });
      message=res.data.message
      console.log(res.data.message);
      if (res.data.message === "admin") {
        toast.success("Admin Login");
        Navigate("/hr");
      } else {
        toast.success("Student Login");
        dispatch(setUserEmail(data.email))
        Navigate("/student");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    }
  };
  return (
    <div className={style.container}>
      <div className={style.login}>
        <div className={style.head}>
          <p>
            Welcome to <span style={{ color: "#F46A06" }}>...</span>
          </p>
          <button
            style={{ whiteSpace: "nowrap" }}
            onClick={() => {
              Navigate("/hr/feeManage");
            }}
            className="mt-3 btn btn-primary"
          >
            Fee Manage
          </button>
        </div>
        <p>Sign In</p>
        <div className="w-100 mb-4">
          <form className="w-100 mb-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter Email address"
                className="form-control"
                aria-describedby="emailHelp"
                name="email"
              />
              {errors.email && (
                <p className="text-danger">Please enter your email address.</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Enter Your Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter Your Password"
                className="form-control"
                aria-describedby="passwordHelp"
                name="password"
              />
              {errors.password && (
                <p className="text-danger">Please enter your password.</p>
              )}
            </div>
            <button className="mt-3 btn btn-primary" type="submit">
              Login
            </button>
          </form>
          <h6 style={{textAlign:"center"}}>Don't have an account? <Link to={"/signup"}>  SignUp</Link></h6>

        </div>
      </div>
    </div>
  );
}
