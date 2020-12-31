import Nav from './Nav';
import ShowCase from '../ShowCase';


const Header = ({ id }) => {
    return (
        <header>
            <Nav />
            <div className="container">
                <ShowCase id={id} />
            </div>
        </header>
    );
}

export default Header;