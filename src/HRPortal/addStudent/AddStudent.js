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
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    .matches(/^923\d{2}\d{7}$/, "Phone number is not valid")
    .required("Phone number is required"),
  class: yup.string().required("Class is required"),
  qualification: yup.string().required("qualification is required"),
  dob: yup.string().required("Date of Birth is required"),
  address: yup.string().required("Address is required"),
});

function AddStudent() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://localhost:8000/upload", formData)
      .then((response) => {
        console.log(response.data, "uploaded");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // await handleUpload();
    let res=  await axios.post("http://localhost:8000/students/addStudent", {
        name: data.name,
        fatherName: data.fatherName,
        cnic: data.cnic,
        email: data.email,
        phone: data.phoneNumber,
        class: data.class,
        qualification: data.qualification,

        address: data.address,
        dob: data.dob,
      });
      if(res.data.message=='added'){
      toast.success("Successfully Added");}
      else{
        toast.error("something went wrong")
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went worng");
    }
  };

  return (
    <div className={style.parent}>
      <div className={style.sidebar}>
        <Navbar
        // func={() => {
        //   setOffcanvas(!offcanvas);
        // }}
        />
        {/* <HROffcanvas status={offcanvas} /> */}
        <HROffcanvas />
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
              <label className={style.label}>Father Name:</label>
              <Controller
                name="fatherName"
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
                render={({ field }) => (
                  <select {...field} className={style.select}>
                    <option></option>
                    <option>9th</option>
                    <option>10th</option>
                    <option>11th</option>
                    <option>12th</option>
                  </select>
                )}
              />
              <p className={style.error}>{errors.class?.message}</p>
            </div>

            <div>
              <label className={style.label}>Qualification:</label>
              <Controller
                name="qualification"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select {...field} className={style.select1}>
                    <option></option>
                    <option>Matric</option>
                    <option>Inter</option>
                    <option>Graduate</option>
                    <option>P.H.D</option>
                  </select>
                )}
              />
              <p className={style.error}>{errors.qualification?.message}</p>
            </div>
            <div>
              <label className={style.label}>Date of Birth:</label>
              <Controller
                name="dob"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    className={style.datePicker} // Add a custom class for styling (optional)
                    dateFormat="dd/MM/yyyy" // Set the desired date format
                    selected={field.value} // Set the selected date from the form value
                    onChange={(date) => field.onChange(date)} // Update the form value when date is selected
                  />
                )}
              />
              <p className={style.error}>{errors.dob?.message}</p>
            </div>
            <div>
              <label className={style.label}>Address:</label>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
              />
              <p className={style.error}>{errors.address?.message}</p>
            </div>

            <input
              className={style.file}
              type="file"
              onChange={handleFileChange}
            />
            <div className={style.btns}>
              <div>
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AddStudent;
