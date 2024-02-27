import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import logo_img from "../assets/images/codesh_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Layout = () => {
  const [isVisibileMenuIcon, setVisibileMenuIcon] = useState(true);

  return (
    <>
      <nav>
        <ul>
          <li id="logo_li">
            <Link to="/">
              <img alt="codesh logo" src={logo_img} height="50px" />
            </Link>
          </li>
          <li id="menu_li">
            {/* <div className="menu">
              <Link to="/">Courses</Link>
            </div> */}
            <div className="menu">
              <Link
                onClick={() => {
                  window.open("https://www.youtube.com/@code4t");
                }}
                to="/"
              >
                All videos
              </Link>
            </div>
            <div className="menu">
              <Link to="contact">Contact us</Link>
            </div>
            <div id="menu_icon_li">
              <Button onClick={() => setVisibileMenuIcon(!isVisibileMenuIcon)}>
                {isVisibileMenuIcon ? <MenuIcon /> : <CloseIcon />}
              </Button>
              {!isVisibileMenuIcon && (
                <div>
                  {/* <div className="menu_mobile">
                    <Link to="/">Courses</Link>
                  </div> */}
                  <div className="menu_mobile">
                    <Link
                      onClick={() => {
                        window.open("https://www.youtube.com/@code4t");
                      }}
                      to="/"
                    >
                      All videos
                    </Link>
                  </div>
                  <div className="menu_mobile">
                    <Link to="contact">Contact us</Link>
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <Outlet />
      <footer>
        <ul>
          <li id="logo_li">
            <p>
              Copyright &copy; {new Date().getFullYear()} www.codeshclass.com
            </p>
          </li>
          <li id="footer_li">
            <div className="footer-item">
              <Link to="policy/terms-conditions">Terms</Link>
            </div>
            <div className="footer-item">
              <Link to="policy/privacy-policy">Privacy</Link>
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
