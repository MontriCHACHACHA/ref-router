import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Menu.js";
import "./FoodList ";
import { Button, Container, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import { isVisible } from "@testing-library/user-event/dist/utils";
import Menu from "./Menu.js";
import Foodlist from "./FoodList ";
import { useState } from "react";


export function Layout() {
  return (
    <nav className="bg-warning p-3 mb-3 text-left">
      
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

function Index() {

  return (
    <>
      <Menu />
      <u>
        <h4>
          <center>
            อาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพตามวิถีภูมิปัญญาท้องถิ่นของจังหวัดอุบลราชธานี
          </center>
        </h4>
      </u>

      <center>
        <tr>
          <td>
            <Foodlist/>
          </td>
          <td>
            <Foodlist />
          </td>
          <td>
            <Foodlist />
          </td>
        </tr>
      </center>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  };

  const data = [
    ["ลาบปลาคัง", 250],
    ["ลาบปลาคัง2", 200],
    ["ลาบปลาคัง3", 300],
  ];

  return (
    <>
      <Menu />
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>เมนูอาหาร</th>
            <th>พลังงานที่ได้รับ</th>
            <th className="text-center">เลือกเมนูนี้</th>
          </tr>
        
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                key={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="primary" onClick={() => DeleteRow(i)}>
                    เลือกเมนูนี้
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <center>พลังงานรวมที่ได้รับ </center>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
