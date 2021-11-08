import {
  ArrowBack,
  AutoStories,
  EmojiObjects,
  Home,
  Person,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Link } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import logo from "../../img/logo.png";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Header(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { projectName } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Avatar alt="lgoo" src={logo} variant="rounded" />
          <Link
            variant="h6"
            underline="none"
            color="#fff"
            sx={{ marginLeft: 1, cursor: "pointer" }}
            href={projectName ? "/#work" : "/#home"}
          >
            {projectName && (
              <IconButton
                color="inherit"
                aria-label="go home"
                edge="start"
                sx={{ marginLeft: 1 }}
              >
                <ArrowBack />
              </IconButton>
            )}
            {projectName ? "Anasayfa" : "Onur Özdamar"}
          </Link>

          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, marginLeft: 1, textAlign: "center" }}
            component="div"
          >
            {projectName}
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button component={Link} href="/#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Anasayfa"} />
          </ListItem>
          <ListItem button component={Link} href="/#services">
            <ListItemIcon>
              <AutoStories />
            </ListItemIcon>
            <ListItemText primary={"Uğraşlarım"} />
          </ListItem>
          <ListItem button component={Link} href="/#about">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary={"Hakkımda"} />
          </ListItem>
          <ListItem button component={Link} href="/#work">
            <ListItemIcon>
              <EmojiObjects />
            </ListItemIcon>
            <ListItemText primary={"Projelerim"} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
