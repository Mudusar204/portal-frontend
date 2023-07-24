import SideBar from "../../components/sidebar/SideBar";
import style from "./AddStudent.module.css";
import edit from "../../assets/images/addStudent/edit.svg";
import profile from "../../assets/images/addStudent/prof.svg";
import ProfileUser from "../../components/profileUser/ProfileUser";
import copyP from "../../assets/images/studentProfile/CopyP.svg";
import Office from "../../assets/images/studentProfile/Office.svg";
import msg from "../../assets/images/hrprofile/mail.svg";
import HROffcanvas from "../../components/offcanvas/HROffcanvas";
import Navbar from "../../components/navbar/Navbar";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {toast} from "react-toastify"
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  cnic: yup
    .string()
    .matches(/^\d{5}-\d{7}-\d$/, "CNIC is not valid")
    .required("CNIC is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^03\d{2}\d{7}$/, "Phone number is not valid")
    .required("Phone number is required"),
  class: yup.string().required("Class is required"),
});

function AddStudent() {
  const [offcanvas, setOffcanvas] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8000/students/addStudent", {
        studentCode: 0,
        name: data.name,
        cnic: data.cnic,
        email: data.email,
        phone: data.phoneNumber,
        class: data.class,
        status: "flskf",
        month: "jan",
      });
      toast.success('Successfully Added')
      console.log(data);
    } catch (error) {
        console.log(error);
      toast.error('Something went worng')

    }
  };

  const uploadBtnH = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    // Process the selected file(s) or perform any desired actions
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      // Perform further actions with the file(s) such as uploading, validating, etc.
    }
  };

  return (
    <div className={style.parent}>
      <div className={style.sidebar}>
        <Navbar
          func={() => {
            setOffcanvas(!offcanvas);
          }}
        />
        <HROffcanvas status={offcanvas} />
        <SideBar panelName={"Admin"} />
      </div>
      <div className={style.form}>
        <ProfileUser path="/hr/profile" />
        <div className={style.headers}>
          <div className={style.spans}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={style.para}>Add Student</div>
        </div>
        <div className={style.profile}>
          <img src={profile} alt="" />
          <div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <img onClick={uploadBtnH} src={edit} alt="" />
          </div>
        </div>
        <div className={style.sec1}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className={style.label}>Name:</label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
              />
              <p className={style.error}>{errors.name?.message}</p>
            </div>

            <div>
              <label className={style.label}>CNIC:</label>
              <Controller
                name="cnic"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
              />
              <p className={style.error}>{errors.cnic?.message}</p>
            </div>

            <div>
              <label className={style.label}>Email:</label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
              />
              <p className={style.error}>{errors.email?.message}</p>
            </div>

            <div>
              <label className={style.label}>Phone:</label>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
              />
              <p className={style.error}>{errors.phoneNumber?.message}</p>
            </div>

            <div>
              <label className={style.label}>Class:</label>
              <Controller
                name="class"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
              />
              <p className={style.error}>{errors.class?.message}</p>
            </div>

            <div className={style.btns}>
              <div
              //   onClick={() => {
              //     navigate("/hr/students");
              //   }}
              >
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>

          <input
            type="file"
            ref={fileInputRef}
            style={{}}
            onChange={handleFileChange}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AddStudent;
