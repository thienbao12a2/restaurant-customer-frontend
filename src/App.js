import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, MenuPage, GalleryPage, Contact, Order, Offers } from "./pages";
import { ScrollToTop } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/menu" element={<MenuPage />} />
            <Route exact path="/gallery" element={<GalleryPage />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/offers" element={<Offers />} />
          </Routes>
        </ScrollToTop>
      </div>
    </BrowserRouter>
  );
};

export default App;
