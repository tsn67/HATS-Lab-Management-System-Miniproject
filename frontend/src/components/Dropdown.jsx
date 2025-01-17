import React, { useState, useRef, useEffect } from 'react'
import Button from './Button.jsx';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {motion} from 'framer-motion';
import classNames from 'classnames';

const Dropdown = ({initial, items, selected, disabled, DropdownIcon, extraStyles, action}) => {
    
    /*
        intial -> something like 'select a language'
        selected -> preselect an item
        disabled -> you can disable the workign of a drop down
    */

    const [selectedItem, setSelectedItem] = useState(selected?selected:initial);
    const [isOpen, setOpen] = useState(false);
    const dropdownRef = useRef(null);  

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    var stringSelectedItem = 'text-white';
    var stringNonSelectedItem = 'text-textGray';

    function getItem(text, index) {
    return <div onClick={() => {setSelectedItem(text); setOpen(false); if(action) {action(text)};}} className='hover:bg-secondaryGray cursor-pointer h-[30px] box-border w-[100%] mx-[2px] bg-buttonGray px-[4px] flex flex-row justify-between items-center rounded-[4px]'>
            
            <p key={index} className={classNames(text == selectedItem ? 'text-white': 'text-textGray')}>{text}</p>

            <div className={classNames('rounded-full h-[4px] w-[4px] bg-textGray ',{'bg-textGreen':(selectedItem == text)})}></div>
        </div>
    }

    function openDropDown() {
        setOpen(!isOpen);
    }

    return (
        <div className='relative'>
            <Button action={openDropDown} iconStyle={{size: 17, className: disabled?'text-textRed':'text-textGreen'}} buttonClass={'text-textGray text-textGray bg-buttonGray hover:text-white '+`${disabled?"outline outline-1 outline-[#F6664C] ":''}`+extraStyles} Icon={ArrowDropDownIcon} label={selectedItem}></Button>
            {isOpen && !disabled &&
                <motion.div ref={dropdownRef} initial={{Opacity: 0, y: -20}} animate={{Opacity: 1, y: 0}} transition={{duration: 0.1}} className='z-10 rounded-[4px] absolute top-[35px] left-[0px] min-w-[150px] flex flex-col gap-[4px] p-[4px] bg-secondaryGray justify-center items-center '>
                    {items.map(getItem)}
                </motion.div>
            }
        </div>
    )
}

export default Dropdown
