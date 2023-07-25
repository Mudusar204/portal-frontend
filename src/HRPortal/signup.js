import { Link, useNavigate } from "react-router-dom/dist";
import style from "./signin.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function SignUp() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8000/auth/signup", {
        name:data.name,
        email: data.email,
        password: data.password,
      });
      console.log(res.data.message);
     
        toast.success("Signup Successfully");
        Navigate("/student");
      
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
        <p>Sign Up here...</p>
        <div className="w-100 mb-4">
          <form className="w-100 mb-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Your Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                aria-describedby="emailHelp"
                name="name"
              />
              {errors.name && (
                <p className="text-danger">Please enter your Name</p>
              )}
            </div>
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
              SignUp
            </button>
          </form>
          <h6 style={{textAlign:"center"}}>Already SignUp? <Link to={"/"}>  Login</Link></h6>
        </div>
      </div>
    </div>
  );
}
