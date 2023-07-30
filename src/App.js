import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import WellcomePage from './HRPortal/welcomePage/Wellcome';
import StudentProfile from './HRPortal/students/StudentProfile';
import AddStudent from './HRPortal/addStudent/AddStudent';
import ManageFee from './HRPortal/manageFees/ManageFee';

import StudentInfo from './HRPortal/applications/StudentInfo';
import Applications from './HRPortal/applications/Applications';
import Main from './HRPortal/personalRec/Main';
import Student from './HRPortal/addStudent/Student';
import Signin from './HRPortal/signin';
import SignUp from './HRPortal/signup'
//////////////////////////student portal/////////////////
import Wellcome from './StudentPortal/welcomePage/Wellcome';
import StudentIndividual from './StudentPortal/components/students/StudentProfile'
import AddStudentNew from './StudentPortal/components/addStudent/AddStudentNew';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store}  from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className={style.webParent}>
       <Provider store={store}>

        <ToastContainer />
      <Routes>
      
        <Route path="/hr" element={<WellcomePage name={'Admin'}/>} />
        <Route path="/hr/studentProfile/:studentId" element={<StudentProfile name={"Admin"}/>} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hr/applications" element={<Applications />} />
        <Route path="/hr/studentinfo" element={<StudentInfo name={"Admin"}/>} />
       
        <Route path="/hr/personalrec" element={<Main />} />
        <Route path="/hr/feeManage" element={<ManageFee />} />
        <Route path="/hr/addstudent" element={<AddStudent />} />
        {/* <Route path="/student/addstudent" element={<AddStudent />} /> */}
        <Route path="/hr/students" element={<Student />} />
        {/* ////////////////////////////stdent portal//////////////////////// */} 
        <Route path='/student' element={<Wellcome name={'Student'}/>}/>
        <Route path="/student/studentProfile" element={<StudentIndividual name={"Student"}/>} />
        <Route path="/student/addstudent" element={<AddStudentNew name={"Student"} />} />


      </Routes>
       </Provider>
    </div>
  );
}

export default App;
