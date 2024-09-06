import { ReactNode } from 'react'
import styles from './Error.module.css'

const Error = ({children} : { children: ReactNode }) => {
  return (
    <div className={styles.error}>
      {children}
    </div>
  )
}

export default Error
