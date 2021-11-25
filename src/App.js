import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";
import DataFetching from "./components/DataFetching";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./ss-logo-bar.png";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar className="nav" fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="sneaker seeker logo"
              class="logo img-fluid" 
            />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="navbarScroll"> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0"></Nav>
              <Nav.Link href="/search" className="search-link">SEARCH</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/datafetching" element={<DataFetching />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
