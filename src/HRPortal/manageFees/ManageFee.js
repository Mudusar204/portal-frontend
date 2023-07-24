import style from "./ManageFee.module.css";
import SideBar from "../../components/sidebar/SideBar";
import add from "../../assets/images/students/Application Add.svg";
import ProfileUser from "../../components/profileUser/ProfileUser";
import Select from "../../components/select/Select";
import Navbar from "../../components/navbar/Navbar";
import HROffcanvas from "../../components/offcanvas/HROffcanvas";
import { useState } from "react";
import CustomModal from "../../components/modal/Modal";
function ManageFee() {
  let data = [
    {
      trainName: "Intro To Computing",
    },
    {
      trainName: "Intro To Computing",
    },
  ];

  let data1 = [
    {
      Name: "Mian",
      code: 11,
      class: 12,
      fee: 2000,
      section: "A",
    },
    {
      Name: "Mian",
      code: 11,
      class: 12,
      fee: 2000,
      section: "A",
    },
    {
      Name: "Mian",
      code: 11,
      class: 12,
      fee: 2000,
      section: "A",
    },
  ];
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
            {/* <Select name="Select a Year" data={["2020", "2021", "2022"]} />
            <Select
              name="Select a Month"
              data={["Januaury", "Januaury", "Januaury"]}
            /> */}
          </div>
          <div className={style.next}>
            {/* <button
              onClick={() => setOpen(true)}
              style={{ background: "#DB5954", color: "white", marginRight: 10 }}
            >
              Add New
            </button> */}
            <button className={style.download} onClick={() => setOpen(true)}>
              Add New
            </button>
            <button  className={style.download}>
              Print
            </button>
            {/* <button style={{ background: "#DB5954", color: "white" }}>
              Print
            </button> */}
          </div>
        </div>

        {isOpen ? (
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
              </tr>
              {data.map((obj, i) => {
                return (
                  <tr className={style.tablebody} key={i}>
                    <td>
                      <p>{obj.trainName}</p>
                    </td>
                    <td>
                      <p>{obj.trainName}</p>
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <input style={{ width: "70px" }} type="number" />
                    </td>
                    <td>
                      <div className={style.next}>
                        <CustomModal />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : (
          <div className="table-responsive px-4 mt-5">
            <table className="table table-striped">
              <thead>
                <tr className="p-5">
                  <th className="p-4">Name</th>
                  <th className="p-4">Code</th>
                  <th className="p-4">Class</th>
                  <th className="p-4">Section</th>
                  <th className="p-4">Fee</th>
                </tr>
              </thead>
              <tbody>
                {data1.map((user, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4">{user.Name}</td>
                    <td className="py-3 px-4">{user.code}</td>
                    <td className="py-3 px-4">{user.class}</td>
                    <td className="py-3 px-4">{user.section}</td>
                    <td className="py-3 px-4">{user.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
