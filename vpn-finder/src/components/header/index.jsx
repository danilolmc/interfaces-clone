import { BiSearch } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { Button } from '../button';
import "./header.scss";

const headerButtonsBg = "#676DFF";

export const Header = () => {
    return (
        <header className="header">
            <Button bgColor={ headerButtonsBg } typeButton="iconButton">
                <BiSearch />
            </Button>

            <div>
                <div className="dropdown">
                    <img src="https://avatars.githubusercontent.com/u/31545128?v=4" alt="Profile" />
                    <span>
                        <label>English</label>
                    </span>
                </div>
                <Button bgColor={ headerButtonsBg } typeButton="iconButton">
                    <FiMenu />
                </Button>
            </div>
        </header>
    )
}