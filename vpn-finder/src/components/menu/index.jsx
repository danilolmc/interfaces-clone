import "./menu.scss";
import { FaRegComment, BiLike, AiOutlineTool, AiOutlinePercentage } from 'react-icons/all'

import pureVPNicon from '../../assets/img/pureVPN.png';
import hidemeVPNicon from '../../assets/img/hidemeVPN.png';
import nordVPNicon from '../../assets/img/nordVPN.png';
import zenmateVPNicon from '../../assets/img/zenmateVPN.png';

import { useEffect, useRef, useState } from "react";

export const Menu = () => {

    const itemMenu = useRef();

    const [open, setOpen] = useState(false);

    const toggleSubMenu = () => {
        setOpen(!open);
    }

    useEffect(() => {
        open
            ? itemMenu.current.classList.add('--focused')
            : itemMenu.current.classList.remove('--focused');

    }, [open])

    return (
        <ul>
            <li className="menu-item">
                <label>

                    <FaRegComment />
                    <span>Blog</span>
                </label>
            </li>
            <li className="menu-item">
                <label>
                    <BiLike />
                    <span>Best VPN</span>
                </label>
            </li >
            <li className="menu-item">
                <label>
                    <AiOutlineTool />
                    <span>Tools</span>
                </label>
            </li>
            <li className="menu-item" onClick={toggleSubMenu} >
                <label ref={itemMenu}>
                    <AiOutlinePercentage />
                    <span>Coupons</span>
                </label>
                <div className="subMenu" style={{ display: open ? 'block' : 'none' }}>
                    <span>
                        <img src={pureVPNicon} />
                        <span>Pure VPN</span>
                    </span>
                    <span>
                        <img src={hidemeVPNicon} />
                        <span>Hideme VPN</span>
                    </span>
                    <span>
                        <img src={nordVPNicon} />
                        <span>Nord VPN</span>
                    </span>
                    <span>
                        <img src={zenmateVPNicon} />
                        <span>Zenmate VPN</span>
                    </span>
                </div>
            </li>
        </ul>

    )
}