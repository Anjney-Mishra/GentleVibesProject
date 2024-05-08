import React, { useContext } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {Link, useNavigate} from 'react-router-dom'
import ThemeSwitch from "./ThemeSwitch";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { BK_URL } from "../constants/constants";
import toast from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function NNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {user,setUser} = useContext(UserContext)
  const navigate = useNavigate()


  const handleLogout = async() => {
    try {
      const res = await axios.get(BK_URL+"/api/auth/logout",{withCredentials:true})
      toast.success("Logged Out Successfully")
      setUser(null)
      navigate("/login")
    } catch (error) {
      console.log(error)
      toast.error("Something Went Wrong")
    }

  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" className="font-bold text-2xl text-inherit">{user?user.username:"Hello"}</Link>
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
        {
          user ? 
          <NavbarItem className="lg:flex">
<Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light"
          size="lg"
          color="success" 
        >
          <FaRegUserCircle/>{user.username}<IoMdArrowDropdown/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Profile</DropdownItem>
        <DropdownItem key="delete" onClick={handleLogout} className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
          </NavbarItem> :
          <>
        <NavbarItem className="lg:flex">
        <Button as={Link} to="/login" color="primary" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} to="/register" color="primary" variant="flat">
            Register
          </Button>
        </NavbarItem>
          </>
        }
        <NavbarItem>
          <ThemeSwitch/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link>Meditation</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link>Profile</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link>Logout</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
