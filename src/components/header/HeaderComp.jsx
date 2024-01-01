import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const HeaderComp = () => {
  const [showInstagram, setShowInstagram] = useState(false);
  const [showFacebook, setShowFacebook] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);
  const [showTikTok, setShowTikTok] = useState(false);
  const [showOtros, setShowOtros] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleMouseEnter = (dropdown, showFunction) => {
    showFunction(true);
  };

  const handleMouseLeave = (dropdown, showFunction) => {
    showFunction(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary w-full flex flex-row">
        <Container className="w-full">
          <Image
            src="https://visibilitypack.es/wp-content/uploads/2021/02/cropped-visibility-pack-dek353-1.png"
            className="w-2/12"
          ></Image>
          <Navbar.Toggle onClick={() => setShowOffcanvas(true)} />
          <Nav className="justify-end text-black font-semibold text-lg w-full">
            <div className=" lg:flex xl:flex hidden">
            <NavDropdown
              title="Instagram"
              show={showInstagram}
              onMouseEnter={() =>
                handleMouseEnter("instagram", setShowInstagram)
              }
              onMouseLeave={() =>
                handleMouseLeave("instagram", setShowInstagram)
              }
              className="hidden md:flex lg:flex xl:flex"
            >
              <NavDropdown.Item href="#action/3.1">Seguidores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Links</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Visualizaciones
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Visitas de Perfil
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.5">
                Comentarios
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Facebook"
              show={showFacebook}
              onMouseEnter={() => handleMouseEnter("Facebook", setShowFacebook)}
              onMouseLeave={() => handleMouseLeave("Facebook", setShowFacebook)}
              className="hidden md:flex lg:flex xl:flex"
            >
              <NavDropdown.Item href="#action/3.1">Post Like</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Page Like</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Seguidores</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Visualizaciones
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Youtube"
              show={showYoutube}
              onMouseEnter={() => handleMouseEnter("Youtube", setShowYoutube)}
              onMouseLeave={() => handleMouseLeave("Youtube", setShowYoutube)}
              className="hidden md:flex lg:flex xl:flex"
            >
              <NavDropdown.Item href="#action/3.1">Visitas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Suscriptores
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Likes</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Tik Tok"
              show={showTikTok}
              onMouseEnter={() => handleMouseEnter("Tik Tok", setShowTikTok)}
              onMouseLeave={() => handleMouseLeave("Tik Tok", setShowTikTok)}
              className="hidden md:flex lg:flex xl:flex"
            >
              <NavDropdown.Item href="#action/3.1">Visitas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Suscriptores
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Likes</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              href="#"
              title="Area de Afiliados"
              className="hidden md:flex lg:flex xl:flex"
            >
              Twitter
            </Nav.Link>

            <Nav>
              <NavDropdown
                title="Otros"
                show={showOtros}
                onMouseEnter={() => handleMouseEnter("Otros", setShowOtros)}
                onMouseLeave={() => handleMouseLeave("Otros", setShowOtros)}
                className="hidden md:flex lg:flex xl:flex"
              >
                <NavDropdown.Item href="#action/3.1">Twitch</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Spotify</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav.Link
              href="#"
              title="FAQs"
              className="hidden md:flex lg:flex xl:flex"
            >
              FAQs
            </Nav.Link>

            <Nav.Link
              href="#"
              title="Area de Afiliados"
              className="hidden md:flex lg:flex xl:flex"
            >
              Area de Afiliados
            </Nav.Link>
            </div>
          </Nav>
          
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link title="Instagram"> Instagram</Nav.Link>

            <Nav.Link title="Facebook"> Facebook</Nav.Link>

            <Nav.Link title="Youtube"> Youtube</Nav.Link>

            <Nav.Link title="Tik Tok"> Tik Tok</Nav.Link>

            <Nav.Link href="#" title="Area de Afiliados">
              Twitter
            </Nav.Link>

            <Nav.Link title="Otros"> Otros</Nav.Link>

            <Nav.Link href="#" title="Area de Afiliados">
              FAQs
            </Nav.Link>

            <Nav.Link href="#" title="Area de Afiliados">
              Area de Afiliados
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderComp;
