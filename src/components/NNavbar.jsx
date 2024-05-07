import React, { useContext } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {Link} from 'react-router-dom'
import ThemeSwitch from "./ThemeSwitch";

export default function NNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Feature",
    "Customers",
    "Integrations",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" className="font-bold text-2xl text-inherit">GentleVibes</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/motivation">
            Motivation
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" to="/login">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" to="/login">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Button as={Link} to="/login" color="primary" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} to="/register" color="primary" variant="flat">
            Register
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                 index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
