import * as React from "react";
import "./appbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../images/malon/logo2.png";
import LogoWhite from "../../images/malon/logo.png";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

const pages = ["Home", "PortFolio", "Our Services", "About Us", "What's New"];

export const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = (React.useState < null) | (HTMLElement > null);
    const data = useGlobalContext();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLink = (index) => {
        const data = pages[index];
        if (data === "PortFolio") {
            return "/portfolio";
        }
        if (data === "About Us") {
            return "/about";
        }
        if (data === "Our Services") {
            return "/services";
        }
        return "/";
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar className="flex justify-between">
                    <img src={data?.state ? Logo : LogoWhite} alt="" />
                    <div className="boxContainer">
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {pages.map((page, index) => (
                                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: data?.state ? "black" : "white", display: "block", textTransform: "capitalize" }}>
                                    <Link to={handleLink(index)}>{page}</Link>
                                </Button>
                            ))}
                            <div className="link">
                                <Link to="/" className="flex justify-center items-center  appBar-btn mt-3">
                                    Get In Touch
                                </Link>
                            </div>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon sx={{ fontSize: "35px", color: data?.state ? "black" : "white" }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                <div className="px-4">
                                    {pages.map((page, index) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                <Link to={handleLink(index)}>{page}</Link>
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                    <Link to="/">Get In Touch</Link>
                                </div>
                            </Menu>
                        </Box>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
