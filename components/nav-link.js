"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({href, children}) {
    const pathname = usePathname();
    return(
        <Link
              className={pathname.startsWith(href) ? "active" : ""}
              href={href}
            >
              {children}
            </Link>
    );
}