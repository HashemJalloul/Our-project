import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Navbar.css'
import { Link } from "react-router-dom";

function CollapsibleExample() {
    return (

         <Navbar collapseOnSelect expand="lg" className="bg-body-white" id="SK-Nav">

<Container fluid className='flex'>
    <Navbar.Brand href="#home">
        <img src="./../../../public/imges/LOGO.svg" alt="logo" className="SK-LogoImg" />

    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="SK-Navbar">
            <Link className="SK-Link" to="/"><h5>Home</h5></Link>
            <Link className="SK-Link" to="/Courses"><h5>Courses</h5></Link>
            <Link className="SK-Link" to="/Blog"><h5>Blog</h5></Link>

            <NavDropdown className="SK-LinkDropdown" title="Page" id="collapsible-nav-dropdown">
                <NavDropdown.Item className="SK-LinkDropdown" href="/FAQS">FAQS</NavDropdown.Item>
                <NavDropdown.Item className="SK-LinkDropdown" href="/Contact">Contact</NavDropdown.Item>
                <NavDropdown.Item className="SK-LinkDropdown" href="/Help">Ask For Help</NavDropdown.Item>
            </NavDropdown>

            <Link className="SK-Link" to="/LearnPress"><h5>LearnPress Add-On</h5></Link>
            <Link className="SK-Link" to="/PremiumTheme"><h5>Premium Theme</h5></Link>
        </Nav>

        <div className="d-flex">
            <Link className="SK-LinkLogin" to="/LogIn">Login /</Link>
            <Link className="SK-LinkLogin" to="/Register"> Register</Link>
            <img src="./../../../public/imges/Search.svg" alt="Search" className="SK-Search-icon" />
        </div>

    </Navbar.Collapse>

</Container>
</Navbar>

    );
}

export default CollapsibleExample;

