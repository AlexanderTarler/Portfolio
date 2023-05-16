import './navbar.css';
import Link from "next/link";
const NavItem = ({ text, href, active }: any) => {
    return (
        <div className="nav-item">
            <Link href={href}>
                <div className={`nav__item ${active ? "active" : ""
                    }`}></div>
                {text}
            </Link>
        </div>
    );
};

export default NavItem;