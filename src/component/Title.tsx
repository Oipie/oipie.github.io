import { FC } from "react"
import styles from "./Title.module.css"

type TitleProps = {
  children: React.ReactNode
}

export const Title: FC<TitleProps> = ({ children }) => <h1 className={styles.title}>{children}</h1>
