import style from "./ManageFee.module.css";
import SideBar from "../../components/sidebar/SideBar";
import add from "../../assets/images/students/Application Add.svg";
import ProfileUser from "../../components/profileUser/ProfileUser";
import Select from "../../components/select/Select";
import Navbar from "../../components/navbar/Navbar";
import HROffcanvas from "../../components/offcanvas/HROffcanvas";
import { useState ,useEffect} from "react";
import CustomModal from "../../components/modal/Modal";
import { useSelector ,useDispatch} from "react-redux";
import { Oval } from "react-loader-spinner";
import { getStudents } from "../../store/studentSlice";

function ManageFee() {
  const dispatch=useDispatch()
  const students = useSelector((state) => state.studentSlice.studentList);

  console.log(students);
  useEffect(() => {
    dispatch(getStudents());
  }, []); 
  
  const [offcanvas, setOffcanvas] = useState(false);
  const [isOpen, setOpen] = useState(false);
  let next = "Next page >>";
  return (
    <div className={style.parent}>
      <div className={style.sidebar}>
        <Navbar
          func={() => {
            setOffcanvas(!offcanvas);
          }}
        />
        <SideBar panelName={"Admin"} />
        <HROffcanvas path="/hr/profile" status={offcanvas} />
      </div>
      <ProfileUser path="/hr/profile" />
      <div className={style.subparent}>
        <div className={style.searchbar}>
          <div className={style.sec1}>
          
            <p style={{fontSize:"40px",fontWeight:"bold",color:"#E6635A",marginLeft:"100px"}}>Manage Fee</p>
          </div>
          <div className={style.next}>
           
            <button onClick={()=>{window.print()}}  className={style.download}>
              Print
            </button>
          
          </div>
        </div>

        {students.length !== 0 ? (
          <div className={style.tableParent2}>
            <table className={style.table}>
              <tr className={style.headers}>
                <td>student Code</td>
                <td>student Name</td>
                <td>Januaury</td>
                <td>Febraury</td>
                <td>March</td>
                <td>April</td>
                <td>May</td>
                <td>June</td>
                <td>July</td>
                <td>August</td>
                <td>September</td>
                <td>October</td>
                <td>November</td>
                <td>December</td>
                <td>Fee Voucher</td>
                <td>Pay Fees</td>
              </tr>
              {students.map((student, i) => {
                console.log(i);
                return (
                  <tr className={style.tablebody} key={i}>
                    <td>
                      <p >{student.studentCode}</p>
                    </td>
                    <td>
                      <p>{student.name}</p>
                    </td>
                    <td style={student.fees[0].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[0].status}
                    </td>
                    <td style={student.fees[1].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[1].status}
                    </td>
                    <td style={student.fees[2].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[2].status}
                    </td>
                    <td style={student.fees[3].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[3].status}
                    </td>
                    <td style={student.fees[4].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[4].status}
                    </td>
                    <td style={student.fees[5].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[5].status}
                    </td>
                    <td style={student.fees[6].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[6].status}
                    </td>
                    <td style={student.fees[7].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[7].status}
                    </td>
                    <td style={student.fees[8].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[8].status}
                    </td>
                    <td style={student.fees[9].status?{color:"red"}:{color:"green"}}>
                      {student.fees[9].status}
                    </td>
                    <td style={student.fees[10].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[10].status}
                    </td>
                    <td style={student.fees[11].status==="Not Submitted"?{color:"red"}:{color:"green"}}>
                      {student.fees[11].status}
                    </td>
                    <td>
                      <div className={style.next}>
                        <CustomModal name={"Generate"}/>
                      </div>
                    </td>
                    <td> <div className={style.next}>
                        <CustomModal  name={"Pay"} studentName={student.name} studentCode={student.studentCode} studentCinc={student.cnic} studentEmail={student.email}/>
                      </div></td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : (
       

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
        )}
        <div className={style.next}>
          {isOpen ? (
            <button
              onClick={() => setOpen(false)}
              className={style.download}
            >
              Submit
            </button>

          ) : null}
        
        </div>
      </div>
    </div>
  );
}

export default ManageFee;
