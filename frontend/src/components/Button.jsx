import React from 'react'


function Button({ action, buttonClass, label, disabled = false, iconStyle = {}, Icon }) {
    return (
        <button type="button"
            className={"min-w-[70px] px-2 py-1 flex items-center justify-center h-[30px] rounded-[4px] " + buttonClass}
            onClick={action}
            disabled={disabled}>
            <p className='translate-y-[-2px]'>{label}</p>
            {Icon && <Icon size={iconStyle.size} className={"ml-2 " + iconStyle.className} />}
        </button>
    )
}

export default Button