import React from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  label: string
  title: string
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}
