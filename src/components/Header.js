import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;


