import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul>
            <li>
                <Link to="local-storage">Local Storage</Link>
            </li>
            <li>
                <Link to="session-storage">Session Storage</Link>
            </li>
            <li>
                <Link to="cookies">Cookies</Link>
            </li>
        </ul>
    );
}

export default Nav;