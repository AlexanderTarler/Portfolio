import Link from "next/link";
const NavItem = ({ text, href, active }: any) => {
    return (
        <Link href={href}>
            <div className={`nav__item ${active ? "active" : ""
                }`}></div>
            {text}

        </Link>
    );
};

export default NavItem;