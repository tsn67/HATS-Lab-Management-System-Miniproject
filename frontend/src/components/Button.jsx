import React from 'react'

function Button({ action, buttonClass, label, disabled = false, iconStyle = {}, Icon }) {
    return (
        <button type="button"
            className={"px-2 py-1 flex items-center justify-center h-10 " + buttonClass}
            onClick={action}
            disabled={disabled}
        >
            {label}
            {Icon && (
                <Icon 
                    size={iconStyle.size || 20} 
                    className={"ml-2 " + (iconStyle.className || '')} 
                />
            )}
        </button>
    )
}

export default Button