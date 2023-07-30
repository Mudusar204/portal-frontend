import style from "./Student.module.css";
import SideBar from "../../components/sidebar/SideBar";
import search from "../../assets/images/students/Search.svg";
import add from "../../assets/images/students/Application Add.svg";
import avatar from "../../assets/images/students/Avatar.png";
import ProfileUser from "../../components/profileUser/ProfileUser";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import HROffcanvas from "../../components/offcanvas/HROffcanvas";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStudents } from "../../store/studentSlice";
import { Oval } from "react-loader-spinner";
import EmployeeProfile from "../students/StudentProfile";
function Students() {
  const dispatch = useDispatch();
  const [search,setSearch]=useState('')
  const studentsList = useSelector((state) => state.studentSlice.studentList);

  let students=studentsList


  // function compareByClass(a, b) {
  //   if (a.class > b.class) {
  //     return -1;
  //   } else if (a.class < b.class) {
  //     return 1;
  //   }
  //   return 0;
  // }
  // let a=students.slice().sort(compareByClass);


  function searchByName(searchTerm) {
    // Convert the search term to lowercase for case-insensitive search
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
    // Filter the array to find objects with matching names
    const filteredArray = students.filter((obj) =>
      obj.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  
    return filteredArray;
  }
  const searchResults = searchByName(search);

  
  console.log(students, "from component",searchResults);
  useEffect(() => {
    dispatch(getStudents());
  }, []);
  const [offcanvas, setOffcanvas] = useState(false);

  let next = "Next page >>";
  const navigate = useNavigate();
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

      <ProfileUser path="/hr/profile" />

      <div className={style.subparent}>
            {/* <p style={{whiteSpace:"nowrap",fontSize:"27px",color:"grey",marginLeft:'20px',paddingTop:"20px"}}>Search By</p> */}
        <div className={style.searchbar}>
          <div className={style.sec1}>
            <p>
              <input className={style.input} value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search here by Name"/>
            </p>
            {/* <select className={style.dropdown}>
              <option>Month</option>
              <option>January</option>
              <option>Fabraury</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select className={style.dropdown}>
              <option>Status</option>
              <option>Submit</option>
              <option>Not-Submit</option>
            </select>
            <select className={style.dropdown}>
              <option>Class</option>
              <option>9th</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
            </select> */}
          </div>
          <div
            onClick={() => {
              navigate("/hr/addstudent");
            }}
            className={style.sec2}
          >
            <img src={add} alt="" />
            <p>Add Student</p>
          </div>
        </div>

        {students.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
            }}
          >
            <Oval
              height={80}
              width={80}
              color="#e0a4a3"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#e0a4a3"
              strokeWidth={3}
              strokeWidthSecondary={3}
            />
          </div>
        ) : (
          <div className={style.tableParent2}>
            <table className={style.table}>
              <tr className={style.headers}>
                <td>Student Code</td>
                <td>Student Name</td>
                <td style={{ whiteSpace: "nowrap" }}>CNIC / B-Form</td>
                <td>Email</td>
                <td>Phone #</td>
                <td>Class</td>
                <td>Detail</td>
                <td>Documents</td>
              </tr>
              {searchResults.map((Student, i) => {
                return (
                  <tr className={style.tablebody} key={i}>
                    <td>
                      <p>{Student.studentCode}</p>
                    </td>
                    <td>
                      <img src={Student.img} alt="" /> {Student.name}
                    </td>
                    <td>{Student.cnic}</td>
                    <td>
                      <p style={{ marginLeft: 20 }}>{Student.email}</p>
                    </td>
                    <td>{Student.phone}</td>
                    <td>{Student.class}</td>
                    {/* <td>{Student.status}</td>
                    <td>{Student.month}</td> */}
                    <td>
                      <p
                        onClick={() => {
                          navigate(`/hr/studentProfile/${i}`);
                        }}
                        className={style.view}
                      >
                        View
                      </p>
                    </td>
                    <td>
                      <p className={style.download}>Download</p>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      
      </div>
    </div>
  );
}

export default Students;
