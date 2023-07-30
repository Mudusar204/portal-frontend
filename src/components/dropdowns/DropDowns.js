import React, { useState } from 'react';
import style from './DropDowns.module.css'
import arrow from '../../assets/images/sidebar/dropdownArrow.svg'
import profile from '../../assets/images/sidebar/profile.svg'
import user from '../../assets/images/sidebar/User Multiple Group.svg'
import clipboardChecked from '../../assets/images/sidebar/Clipboard Check.svg'
import calendar from '../../assets/images/sidebar/Blank Calendar.svg'
import copyPaste from '../../assets/images/sidebar/Copy Paste.svg'
import lift from '../../assets/images/sidebar/Lift.svg'
import pageS from '../../assets/images/sidebar/Page Setting.svg'
import addLayer from '../../assets/images/sidebar/Add Layer 2.svg'
import { useNavigate } from 'react-router-dom';

const DropDowns = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [indicator, setIndicator] = useState('');
    const navigate = useNavigate()

    const toggleDropdown = (props) => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };
    const indicatorManager = (e) => {
        setIndicator(e)
        navigate(e)
    }
    return (
        <div className={style.parent}>
            <div className={style.dropdown}>
                <div className={style.content}>
                    <div >
                        <img src={profile} alt="" />
                    </div>
                    <p style={{whiteSpace:'nowrap'}}>{props.panelName} Panel</p>
                    <div onClick={toggleDropdown} style={{marginLeft:"25%"}}>
                        <img  className={isOpen ? style.rotate : style.notrotate} src={arrow} alt="" />
                    </div>
                </div>
                {isOpen ? <div className={style.optsParent}>
                    <ul className={style.opts}>
                        <li className={indicator === '/hr/students' ? style.checkedli : null} onClick={() => indicatorManager('/hr/students')}>
                            <img src={user} alt="" />
                            Students
                        </li>
                        <li className={indicator === '/hr/applications' ? style.checkedli : null} onClick={() => indicatorManager('/hr/applications')}>
                            <img src={copyPaste} alt="" />
                            Application</li>
                        <li className={indicator === 'c' ? style.checkedli : null} onClick={() => indicatorManager('/hr/feeManage')}>
                            <img src={pageS} alt="" />
                            Manage Fee</li>
                       
                    </ul>
                </div> : null}
            </div>
        </div>
    );
};

export default DropDowns;

