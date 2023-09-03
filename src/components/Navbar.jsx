import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { useMediaQuery } from 'react-responsive';

function Navbar(props) {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    function renderBtnSmall(item) {
        return (
            <a className={item.cName} to={item.url} href={`#${item.id}`}>
                <i className={item.icons}></i>
                <p className="btn-title">{item.title}</p>
            </a>
        )
    }

    function renderBtn(item) {
        return (
            <a className={item.cName} to={item.url} href={`#${item.id}`}>
                <i className={item.icons}></i> {item.title}
            </a>
        )
    }

    return (
        <nav className="navbarItems">

            <ul className="navMenu">
                {MenuItems.map((item, index) => {
                    return (
                        <li className="nav-btn" key={index}>
                            {isMobile ? renderBtnSmall(item) : renderBtn(item)}
                        </li>
                    );
                })}
            </ul>

        </nav>

    );

}

export default Navbar;
