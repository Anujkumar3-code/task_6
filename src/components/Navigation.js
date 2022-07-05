import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Button } from "react-bootstrap";

function Navigation({title}){
  const [topnav, setTopnav] = useState(false);
    return (
      <>
<header>
  <nav className={` topnav ${topnav ? "responsive" : ""}`} id="myTopnav">
  <Link to={'/'} >ecommerce</Link>
  <Link to={'/'} >Home</Link>
  <Link to={"my_orders"}>My orders</Link>
  <Link to={"/cart"}>Cart</Link>
  <a className="icon"  onClick={()=>setTopnav(!topnav)}>
    <i  className="fa fa-bars"></i>
  </a>
</nav>
</header>
        
{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">ecommerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/my_orders">My order</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
      </>
        
    );
}
export default Navigation;