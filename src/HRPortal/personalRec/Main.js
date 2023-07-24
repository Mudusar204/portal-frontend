import SideBar from '../../components/sidebar/SideBar'
import style from './Main.module.css'
import search from '../../assets/images/students/Search.svg'
import add from '../../assets/images/students/Application Add.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useNavigate } from 'react-router-dom'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'


function Main() {
    const [offcanvas, setOffcanvas] = useState(false)
    let sample = {
        name: 'Asmer',
        email: 'ameentech123@gmail.com',
        grade: 'A+',
        department: 'IT',
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
    const showform = () => {
        navigate('/hr/addpersonalrec')
    }
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <HROffcanvas path='/hr/profile' status={offcanvas} />
                <SideBar />
            </div>
            <div className={style.subparent}>
                <ProfileUser path='/hr/profile' />
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search by name ' />
                    </div>
                    <div className='d-flex'>
                        <div onClick={showform} className={style.sec2}>
                            <img src={add} alt="" />
                            <p>Add New</p>
                        </div>
                    </div>
                </div>
                <div className={style.tableParent}>

                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>Student Name</td>
                            <td>Email</td>
                            <td>Class</td>
                            <td>Grade</td>
                            <td>Action</td>
                            <td></td>
                            <td></td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td className={style.textStyle2}>{employee.name}</td>
                                        <td className={style.textStyle3}>{employee.email}</td>
                                        <td className={style.textStyle3}>{employee.class}</td>
                                        <td className={style.textStyle3}>{employee.grade}</td>
                                        <td ><button onClick={() => {
                                            navigate('/hr/studentProfile')
                                        }} className={style.viewBtn}>View</button>
                                        </td>
                                        <td >
                                            <button className={style.viewBtn2}>Approve</button>
                                            <button className={style.orangebtn}>Disapprove</button>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </table>
                </div>
                <div className={style.next}>
                    <button>
                        {next}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main
