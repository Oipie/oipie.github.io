import Link from "next/link"
import React, { FC } from "react"
import classNames from "classnames"

import styles from "./Header.module.css"

type HeaderProps = {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => (
  <header className={classNames(className, styles.header)}>
    <nav>
      <ul>
        <li>
          <Link href="/term-and-conditions">Términos y Condiciones</Link>
        </li>
        <li>
          <Link href="/privacy-policy">Política de Privacidad</Link>
        </li>
      </ul>
    </nav>
  </header>
)
