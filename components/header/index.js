//https://getbootstrap.com/docs/5.3/examples/
import styles from "./styles.module.scss";
import Navbar from "./Nav";
import UseMe from "./topHeader/UseMe";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import link from "next/link";
// import { RiSearch2Line } from "react-icons/ri";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useRouter } from "next/router";
export default function Header({ searchHandler }) {
  // const router = useRouter();
  // const [query, setQuery] = useState(router.query.search || "");
  // const { cart } = useSelector((state) => ({ ...state }));
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (router.pathname !== "/browse") {
  //     if (query.length > 1) {
  //       router.push(`/browse?search=${query}`);
  //     }
  //   } else {
  //     searchHandler(query);
  //   }
  // };
  return (
    <header className={styles.header}>
      <UseMe />
    </header>

    // <>
    //   {["xxl"].map((expand) => (
    //     <Navbar key={expand} bg="dark" variant="dark" expand={expand}>
    //       <Container>
    //         <Navbar.Brand href="#">CasaBlossom</Navbar.Brand>
    //         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    //         <Navbar.Offcanvas
    //           id={`offcanvasNavbar-expand-${expand}`}
    //           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    //           placement="end"
    //         >
    //           <Offcanvas.Header closeButton>
    //             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    //               CasaBlossom
    //             </Offcanvas.Title>
    //           </Offcanvas.Header>
    //           <Offcanvas.Body>
    //             <Nav className="justify-content-end flex-grow-1 pe-3">
    //               <Nav.Link href="#action1">Home</Nav.Link>
    //               <Nav.Link href="#action2">Link</Nav.Link>
    //               <NavDropdown
    //                 title="Dropdown"
    //                 id={`offcanvasNavbarDropdown-expand-${expand}`}
    //               >
    //                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //                 <NavDropdown.Item href="#action4">
    //                   Another action
    //                 </NavDropdown.Item>
    //                 <NavDropdown.Divider />
    //                 <NavDropdown.Item href="#action5">
    //                   Something else here
    //                 </NavDropdown.Item>
    //               </NavDropdown>
    //             </Nav>
    //             <Form onSubmit={(e) => handleSearch(e)} className="d-flex">
    //               <Form.Control
    //                 type="text"
    //                 placeholder="Search..."
    //                 value={query}
    //                 onChange={(e) => setQuery(e.target.value)}
    //               />
    //               <Button variant="outline-success" type="submit">
    //                 Search
    //               </Button>
    //             </Form>
    //           </Offcanvas.Body>
    //         </Navbar.Offcanvas>
    //       </Container>
    //     </Navbar>
    //   ))}
    // </>
  );
}
