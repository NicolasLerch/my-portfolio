import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  href?: string,
  variant?: 'primary' | 'outline',
  size?: 'default' |'small' | 'medium' | 'large',
  onClick?: () => void, 
  className?: string
}

export default function Button({
  children,
  href,
  variant='primary',
  size='default',
  onClick,
  className = ''
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  if(href){
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
