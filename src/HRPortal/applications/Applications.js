import SideBar from '../../components/sidebar/SideBar'
import style from './Applications.module.css'
import search from '../../assets/images/students/Search.svg'
import add from '../../assets/images/students/Application Add.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import { useState } from 'react'


function Applications() {
    const [offcanvas, setOffcanvas] = useState(false)
    let sample = {
        trainingName: 'Intro To Computing',
        venue: 'Jphar Hall',
        month: 'Januaury',
        email: "malik@gmail.com",
        duration: '3 weeks',
        department: 'IT',
        Time: '2:00 to 4:00 PM',
        classSelect: (
            <select>
                <option value="option1">select</option>
                <option value="option2">9th</option>
                <option value="option3">10th</option>
            </select>
        )
    }
    let data = [
        sample,
        sample,
        sample,
        sample,
        sample,
        sample,
        sample,
        sample,
    ]
    let next = 'Next page >>'

    const navigate = useNavigate()
    const showtraininginfo = () => {
        navigate('/hr/studentinfo')
    }
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <SideBar panelName={"Admin"}/>
                <HROffcanvas status={offcanvas} />
            </div>
            <div className={style.subparent}>
                <ProfileUser path='/hr/profile' />
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search Training by name' />
                    </div>
                </div>
                <div className={style.tableParent}>

                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>Student code</td>
                            <td>Student Name</td>
                            <td>CNIC</td>
                            <td>Email</td>
                            <td>B/form</td>
                            <td>Class</td>
                            <td>Action</td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td className={style.textStyle1}>{employee.trainingName}</td>
                                        <td className={style.textStyle2}>{employee.venue}</td>
                                        <td className={style.textStyle3}>{employee.duration}</td>
                                        <td className={style.textStyle3}>{employee.email}</td>
                                        <td className={style.textStyle3}>{employee.month}</td>
                                        <td className={style.textStyle3}>{employee.classSelect}</td>
                                        <td ><button onClick={() => {
                                            navigate('/hr/studentinfo')
                                        }} className={style.viewBtn}>View</button>
                                        </td>

                                    </tr>
                                )

                            })
                        }
                    </table>
                </div>
                <div className={style.next}>
                    {/* <button>
                        {next}
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default Applications
