import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ListItem } from "@mui/material";
import { Link } from "@material-ui/core";
import { useEffect } from "react";
import Aos from "aos";
import { logout } from "../services";

const Nav = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 500,
    });
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    await logout();
    props.setUser(null);
  };

  return (
    <AppBar
      position="absolute"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters data-aos="slide-down" data-aos-delay="300">
          <Typography
            id="logo-text"
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Tofus Anime
          </Typography>

          {props.user ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
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
                  <MenuItem
                    style={{ display: "flex" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      <ListItem>Home</ListItem>
                      <ListItem>All Posts</ListItem>
                      <ListItem>Blog</ListItem>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>

              <Typography
                id="logo-text"
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                Tofus Anime
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  href='/'
                  style={{ color: "white" }}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  home
                </Button>
                <Button
                  style={{ color: "white" }}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/posts"
                >
                  Posts
                </Button>
                <Button
                  style={{ color: "white" }}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Blog
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Link style={{textDecoration:"none", color:"inherit"}} href="/">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <ListItem>Profile</ListItem>
                      </Typography>
                    </MenuItem>
                  </Link>

                  <Link style={{textDecoration:"none", color:"inherit"}} href="/">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <ListItem>Dashboard</ListItem>
                      </Typography>
                    </MenuItem>
                  </Link>

                  <MenuItem onClick={handleClick}>
                    <Typography textAlign="center">
                      <ListItem>Logout</ListItem>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
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
                  <MenuItem
                    style={{ display: "flex" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      <Button href="/" color="inherit">
                      <ListItem>Home</ListItem>
                      </Button>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    style={{ display: "flex" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      <Button href="/posts" color="inherit">
                      <ListItem>All Posts</ListItem>
                      </Button>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    style={{ display: "flex" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      <Button color="inherit">
                      <ListItem>Blog</ListItem>
                      </Button>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>

              <Typography
              
                id="logo-text"
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                Tofus Anime
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                href="/"
                  style={{ color: "white" }}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  home
                </Button>
                <Button
                  style={{ color: "white" }}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/posts"
                >
                  Posts
                </Button>
                <Button
                  style={{ color: "white" }}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Blog
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Typography component="div">
                  <Button
                    id="Join"
                    href="/register"
                    variant="outlined"
                    color="secondary"
                    size="large"
                  >
                    Join Us
                  </Button>
                </Typography>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
