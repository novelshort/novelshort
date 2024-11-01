'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react"
import { useState } from "react"
import { useAuth } from "@/context/AuthContext"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, login, logout } = useAuth()

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Subscription", href: "/pricing" },
  ]

  const handleLogin = async () => {
    try {
      await login()
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <Navbar 
      isBordered 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      className="py-2"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">NovelShorts</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link color="foreground" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src={user.photoURL}
                  name={user.displayName}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="bookshelf" as={Link} href="/library">
                  My Bookshelf
                </DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button 
              color="primary" 
              variant="flat"
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              href={item.href}
              size="lg"
              color="foreground"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
} 