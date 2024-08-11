"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/nav.module.css";

export default function Nav() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home {path === "/" && " 🔥"}</Link>
        </li>
        <li>
          <Link href="/about-us">About us {path === "/about-us" && " 🔥"}</Link>
        </li>
      </ul>
    </nav>
  );
}
