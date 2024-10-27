import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type?: 'button' | 'submit';
    title: string;
    icon?: string;
    className: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ type, title, icon, className = '', ...props }: ButtonProps) => {
  return (
    <>
    <button type={type} {...props} className={`${className}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label>{title}</label>
    </button>
    </>
  )
}

export default Button