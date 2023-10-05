import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import logo_img from "../assets/images/code_logo_circle.png";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const Layout = () => {
  const [isVisibileMenuIcon, setVisibileMenuIcon] = useState(true);

  return (
    <>
      <nav>
        <ul>
          <li id="logo_li">
            <Link to="/"><img src={logo_img} height="70px" /></Link>
          </li>
          <li id="menu_li">
            <div class="menu">
              <Link to="/">Courses</Link>
            </div>
            <div class="menu">
              <Link to="/allvideo">All videos</Link>
            </div>
            <div class="menu">
              <Link to="/contact">Contact us</Link>
            </div>
            <div id="menu_icon_li">
              <Button onClick={() => setVisibileMenuIcon(!isVisibileMenuIcon)}>
                {isVisibileMenuIcon ? <MenuIcon /> : <CloseIcon />}
              </Button>
              {
                !isVisibileMenuIcon &&
                <div>
                  <div class="menu_mobile">
                    <Link to="/">Courses</Link>
                  </div>
                  <div class="menu_mobile">
                    <Link to="/allvideo">All videos</Link>
                  </div>
                  <div class="menu_mobile">
                    <Link to="/contact">Contact us</Link>
                  </div>
                </div>
              }
            </div>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
