import {React,useState} from 'react'
import HeaderLink from "./HeaderLink";
import search from "../images/icons/search-icon-sm.png";
import cart from "../images/icons/cart-sm.png";
import logo from "../images/icons/logo-sm.png";
import { useNavigate,  } from "react-router-dom";
import image from "../images/icons/menu (1).png"

const Header = () => {

  const navigate = useNavigate();
    const gotomac = () => {
      navigate("/macbook");
      setMenuActive(false);

    };
    const gotoipadpro=()=>{
      navigate("ipadpro")
      setMenuActive(false);

    }
    ;
 const gotoiphone11pro = () => {
   navigate("iphone11pro");
      setMenuActive(false);

 };
  const gototv = () => {
    navigate("tv");
      setMenuActive(false);

  };
    const others = () => {
      navigate("notfound");
      setMenuActive(false);

    };
     const cards = () => {
      navigate("card");
      setMenuActive(false);

    };

     const gotohome = () => {
       navigate("/");
      setMenuActive(false);

     };
     
    const [isMenuActive, setMenuActive] = useState(false);
    //function that sets menu active
    const toggleMenu = () => {
      setMenuActive((prevMenuState) => !prevMenuState);
      console.log(isMenuActive);
    };

  return (
    <div>
      <header class="header nav-wrapper fixed-top">
        <div class="container ">
          <div class="navbar navbar-toggleable-sm navbar-expand-md">
            
            <div className="dispflex ">
              <img
                src={image}
                alt="menu"
                className="menu-toggle"
                onClick={toggleMenu}
              />

              <li>
                <b className="navbar-brand logo">
                  <img
                    id="apple-logo"
                    src={logo}
                    alt="logo-icon"
                    onClick={gotohome}
                  />
                </b>
              </li>
            </div>

            <ul className={`flex navlinks ${isMenuActive ? "active" : ""}`}>
              <li id="l">
                <b
                  className="navbar-brand anchor"
                  onClick={(gotomac)}
                >
                  Mac
                </b>
              </li>

              <li id="l">
                <b onClick={gotoiphone11pro} className="navbar-brand  anchor">
                  iphone
                </b>
              </li>

              <li id="l">
                <b onClick={gotoipadpro} className="navbar-brand anchor">
                  ipad
                </b>
              </li>

              <li id="l">
                <b onClick={gototv} className="navbar-brand anchor">
                  watch
                </b>
              </li>

              {/* <img src={HeaderLink} alt="menubar" class="menu-bar" /> */}

              <li id="l">
                <b onClick={gototv} className="navbar-brand anchor">
                  tv
                </b>
              </li>

              <li id="l">
                <b onClick={others} className="navbar-brand anchor">
                  Music
                </b>
              </li>
              <li id="l">
                <b onClick={cards} className="navbar-brand anchor ">
                  Support
                </b>
              </li>

              <li>
                <b onClick={others} className="navbar-brand  search anchor">
                  <img id="search-icon" src={search} alt="search-icon" />
                </b>
              </li>
              <li>
                <b onClick={others} className="navbar-brand cart anchor">
                  <img id="cart-icon" src={cart} alt="cart-icon" />
                </b>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLink href="/mac/" linkName="Mac" />
                <HeaderLink href={"#"}  linkName={"iphone"} />
                <HeaderLink href={"#"} linkName={"ipad"} />
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#" Onclick={gotomac}>
                    watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    tv
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div> */}
    </div>
  );
}

export default Header
