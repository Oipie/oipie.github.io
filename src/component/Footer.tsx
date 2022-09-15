import React, { FC } from "react"
import Link from "next/link"
import classNames from "classnames"
import { Paragraph } from "./Paragraph"

import styles from "./Footer.module.css"

type FooterProps = {
  className: string
}

export const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={classNames(styles.footer, className)}>
    <Paragraph className={styles.copyright}>© 2022 Acid Tango. All rights reserved</Paragraph>
    <div>
      <Paragraph className={styles.withLove}>With</Paragraph>
      <img className={styles.heart} src="heart-icon.svg" alt="" />
      <Paragraph className={styles.withLove}>by Acid Tango</Paragraph>
    </div>
    <ul className={styles.links}>
      <li>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
      </li>
      <li>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </li>
    </ul>
  </footer>
)
