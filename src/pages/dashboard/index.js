import React from "react";
import { BtnLink, LayoutStyle } from "./style";
import user from "./photo/user.jpg";
import { FaFacebookF, FaYoutube, FaBuffer } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { ImFileText2 } from "react-icons/im";
import {
  BiLogoTelegram,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiServer,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menus = [
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome style={{ color: "#fff", fontSize: "1.5rem" }} />,
    to: "/",
  },
  {
    id: 2,
    title: "About",
    icon: <LuUser style={{ color: "#fff", fontSize: "1.5rem" }} />,
    to: "/about",
  },
  {
    id: 3,
    title: "Skills",
    icon: <BiServer style={{ color: "#fff", fontSize: "1.5rem" }} />,
    to: "/skills",
  },
  {
    id: 4,
    title: "Resume",
    icon: <ImFileText2 style={{ color: "#fff", fontSize: "1.5rem" }} />,
    to: "/resume",
  },
  {
    id: 5,
    title: "Portfolio",
    icon: <FaBuffer style={{ color: "#fff", fontSize: "1.5rem" }} />,
    to: "/portfolio",
  },
  {
    id: 6,
    title: "Contact",
    icon: <BiServer style={{ color: "#fff", fontSize: "1.5rem" }} />,
    to: "/contact",
  },
];
function Layout({ children }) {
  const [show, setShow] = React.useState(false);
  return (
    <LayoutStyle>
      <Box
        className="wrap-aside"
        component={"div"}
        sx={{
          width: { xs: 0, sm: 0, md: "300px", lg: "300px", xl: "300px" },
          height: "100%",
        }}
      >
        <Box
          className="aside"
          component={"aside"}
          sx={{
            transform: {
              xs: show ? "translateX(0%)" : "translateX(-100%)",
              sm: show ? "translateX(0%)" : "translateX(-100%)",
              md: "translateX(0%)",
              lg: "translateX(0%)",
              xl: "translateX(0%)",
            },
            transition: "0.5s",
            boxShadow: 5,
          }}
        >
          <div className="top-wrap">
            <div className="wrap">
              <div className="wrap-img">
                <img src={user} alt="" />
              </div>
            </div>
            <p className="user-name">Davron Mamatov</p>
            <div className="wrap-btn">
              <BtnLink href="https://t.me/powerfulprogrammer">
                <BiLogoTelegram style={{ fontSize: "1.2rem" }} />
              </BtnLink>
              <BtnLink href="#">
                <BiLogoLinkedin style={{ fontSize: "1.2rem" }} />
              </BtnLink>
              <BtnLink href="#">
                <FaFacebookF style={{ fontSize: "1.2rem" }} />
              </BtnLink>
              <BtnLink href="#">
                <BiLogoInstagram style={{ fontSize: "1.2rem" }} />
              </BtnLink>
              <BtnLink href="#">
                <FaYoutube style={{ fontSize: "1.2rem" }} />
              </BtnLink>
            </div>
            <div className="wrap-menu">
              {menus.map((item, index) => (
                <NavLink
                  className="menu-link"
                  to={item.to}
                  key={item.id}
                  style={({ isActive }) => {
                    return {
                      marginBottom: index !== menus.length ? "10px" : "0px",
                      backgroundColor: isActive && "#212431",
                    };
                  }}
                >
                  <span id="icon">{item.icon}</span>
                  <p className="title">{item.title}</p>
                </NavLink>
              ))}
            </div>
          </div>
          <footer>
            <div>
              <p className="tel">
                Tel: <a href="#">+998 93 289 32 32</a>
              </p>
              <p className="telegram">
                Telegram:{" "}
                <a href="https://t.me/powerfulprogrammer">
                  @powerfulprogrammer
                </a>
              </p>
              <p className="mail">
                Email: <a href="#">davron.software.engineer@mail.ru</a>
              </p>
            </div>
          </footer>
        </Box>
      </Box>
      <div className="right-side">
        <IconButton
          onClick={() => setShow((prev) => (prev ? false : true))}
          sx={{
            position: "fixed",
            top: 10,
            right: 10,
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            },
            backgroundColor: "rgba(33, 36, 49, 0.6)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(33, 36, 49, 0.8)",
            },
          }}
          component={"button"}
        >
          {show ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        {children}
      </div>
    </LayoutStyle>
  );
}

export default Layout;
