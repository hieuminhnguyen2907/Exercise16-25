import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Home = () => <div align='center'>Home Component</div>;
const About = () => <div align='center'>About Component</div>;
const Contact = () => <div align='center'>Contact Component</div>;
const Profile = () => <div align='center'>Profile Component</div>;


const CustomNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Logo</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/" exact>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};


const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>     
    </Router>
  );
};


export default App;