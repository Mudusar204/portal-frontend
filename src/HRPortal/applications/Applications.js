import SideBar from "../../components/sidebar/SideBar";
import style from "./Applications.module.css";
import search from "../../assets/images/students/Search.svg";
import add from "../../assets/images/students/Application Add.svg";
import ProfileUser from "../../components/profileUser/ProfileUser";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import HROffcanvas from "../../components/offcanvas/HROffcanvas";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApplication ,deleteApplication,addStudent} from "../../store/studentSlice";

function Applications() {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.studentSlice.applications);
  console.log(application, "applications");
  useEffect(() => {
    dispatch(getApplication());
  }, []);
  const [offcanvas, setOffcanvas] = useState(false);
  let sample = {
    trainingName: "Intro To Computing",
    venue: "Jphar Hall",
    month: "Januaury",
    email: "malik@gmail.com",
    duration: "3 weeks",
    department: "IT",
    Time: "2:00 to 4:00 PM",
    classSelect: (
      <select>
        <option value="option1">select</option>
        <option value="option2">9th</option>
        <option value="option3">10th</option>
      </select>
    ),
  };
  let data = [sample, sample, sample, sample, sample, sample, sample, sample];
  let next = "Next page >>";

  const navigate = useNavigate();
  const showtraininginfo = () => {
    navigate("/hr/studentinfo");
  };
  return (
    <div className={style.parent}>
      <div className={style.sidebar}>
        <Navbar
          func={() => {
            setOffcanvas(!offcanvas);
          }}
        /> 
        <SideBar panelName={"Admin"} />
        <HROffcanvas status={offcanvas} />
      </div>
      <div className={style.subparent}>
        <ProfileUser path="/hr/profile" />
        <p style={{fontSize:"40px",fontWeight:"bold",color:"#E6635A",textAlign:"center",marginTop:"100px",paddingBottom:"20px"}}>Applications</p>
          
    
        <div className={style.tableParent}>
          <table className={style.table}>
            <tr className={style.headers}>
              <td>Student code</td>
              <td>Student Name</td>
              <td>CNIC</td>
              <td>Email</td>
              <td>qualification</td>
              <td>Class</td>
              <td>Reject</td>
              <td>Approve</td>
            </tr>
            {application.length!==0?application.map((application, i) => {
              return (
                <tr className={style.tablebody} key={i}>
                  <td className={style.textStyle1}>
                    {application.studentCode}
                  </td>
                  <td className={style.textStyle2}>{application.name}</td>
                  <td className={style.textStyle3}>{application.cnic}</td>
                  <td className={style.textStyle3}>{application.email}</td>
                  <td className={style.textStyle3}>
                    {application.qualification}
                  </td>
                  <td className={style.textStyle3}>{application.class}</td>
                  <td>
                    <button onClick={()=>{dispatch(deleteApplication(application.studentCode))}} className={style.viewBtn}>Reject</button>
                  </td>

                  <td>
                    <button onClick={()=>{dispatch(addStudent(application.email))}} className={style.viewBtn}>Approve</button>
                  </td>
                </tr>
              );
            }):<p className={style.noApplication}>No Application</p>}
          </table>
        </div>
        <div className={style.next}>
        
        </div>
      </div>
    </div>
  );
}

export default Applications;
