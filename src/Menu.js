import React from "react";
import { NavLink } from "react-router-dom";
import { isVisible } from "@testing-library/user-event/dist/utils";
import Image from 'react-bootstrap/Image';

export function Menu() {
  return (
    <nav className="bg-warning p-3 mb-3 text-left">
       <NavLink
      >
        <Image src="f0801.jpg" width={40} height={40} roundedCircle />
      </NavLink>
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {  
            textDecoration: isVisible ? "none" : "underline",
          };
        }}
      >
        หน้าแรก
      </NavLink>
      <NavLink
        to="/Product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isVisible ? "none" : "underline",
          };
        }}
      >
        ตารางเทียบแคลอรี
      </NavLink>
      <NavLink
        to="/Contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isVisible ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

export default Menu;
