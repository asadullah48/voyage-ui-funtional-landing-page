"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components";
import Promise from "../components/Promise";
import Places from "../components/Places";
import Luxury from "../components/Luxury";
import Plan from "../components/Plan";
import Client from "../components/Client";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar theme={darkMode} setTheme={setDarkMode} />
      <HeroSection />
      <Promise />
      <Places />
      <Luxury />
      <Plan />
      <Client />
      <Footer theme={darkMode} />
    </>
  );
}