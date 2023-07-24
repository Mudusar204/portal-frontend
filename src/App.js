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
//////////////////////////student portal/////////////////
import Wellcome from './StudentPortal/welcomePage/Wellcome';


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
        {/* --->HR Portal<--- */}
        {/* Employee Button Pages */}
        <Route path="/hr" element={<WellcomePage name={'Admin'}/>} />
        <Route path="/hr/studentProfile/:studentId" element={<StudentProfile name={"Admin"}/>} />
        <Route path="/" element={<Signin />} />
        {/* Training recs */}
        <Route path="/hr/applications" element={<Applications />} />
        <Route path="/hr/studentinfo" element={<StudentInfo name={"Admin"}/>} />
        {/* Training */}
       
        {/* Do Working */}
        {/* personalRec */} 
        <Route path="/hr/personalrec" element={<Main />} />
        {/* Yearly Plan */}
        <Route path="/hr/feeManage" element={<ManageFee />} />
        {/* Month Plan */}
        {/* Trainer */}
        <Route path="/hr/addstudent" element={<AddStudent />} />
        {/* Do Working */}
        <Route path="/hr/students" element={<Student />} />
        {/* ////////////////////////////stdent portal//////////////////////// */}
        <Route path='/student' element={<Wellcome name={'Student'}/>}/>
        <Route path="/student/studentProfile" element={<StudentProfile name={"Student"}/>} />


      </Routes>
       </Provider>
    </div>
  );
}

export default App;