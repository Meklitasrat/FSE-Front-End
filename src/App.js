import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Introduction/>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
