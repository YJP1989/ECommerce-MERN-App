import React from 'react'
import { useNavigate } from 'react-router-dom';
import { RxPerson } from 'react-icons/rx';
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { TbAddressBook } from "react-icons/tb";
import {MdOutlineAdminPanelSettings,MdOutlinePassword, MdOutlineTrackChanges,} from "react-icons/md";

const ProfileSideBar = ({ setActive, active }) => {
    const navigate = useNavigate();

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
        <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
        >
         <RxPerson size={20} color={active === 1 ? "red" : ""} />
         <span
            className={`pl-3 ${
                active === 1 ? "text-[red]" : ""
            } 800px:block hidden`}
         >
            Profile
         </span>
        </div>
        <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
        >
         <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
         <span
            className={`pl-3 ${
                active === 2 ? "text-[red]" : ""
            } 800px:block hidden`}
         >
          Orders
        </span>
        </div>
        <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
        >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Refunds
        </span>
        </div>

        {/* navigate o inbox page with msgs */}
        <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
        >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Inbox
        </span>
        </div>

        <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
        >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Track Order
        </span>
        </div>

        <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
        >
        <RiLockPasswordLine size={20} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Change Password
        </span>
        </div>

        <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
        >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Address
        </span>
        </div>

    </div>
  )
}

export default ProfileSideBar