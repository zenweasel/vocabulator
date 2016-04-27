import React from "react";
import NavBar from "../components/generic/navbar";

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <NavBar id="app-header" brandLink="http://brenthoover.com" brand="Vocabulator" />
    </header>
    <main>
      {content}
    </main>
  </div>
);
