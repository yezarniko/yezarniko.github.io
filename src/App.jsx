import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "@comp/Nav";
import Landing from "@comp/Landing";
import Skills from "@comp/Skills";
import { CssVariablesProvider } from "@hooks/useCssVariables";
import CsSkills from "@comp/CsSkills";
import Footer from "@comp/Footer";
import About from "@comp/About";

function App() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  return (
    <div className="App">
      <CssVariablesProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header>
                  <Nav {...{ isNavScrolled }} />
                </header>
                <main className="container">
                  <Outlet />
                  <Footer />
                </main>
              </>
            }
          >
            <Route
              path="/"
              element={
                <>
                  <Landing {...{ setIsNavScrolled }} />
                  <Skills />
                  <CsSkills />
                </>
              }
            />
            <Route
              path="/about"
              element={<About {...{ setIsNavScrolled }} />}
            />
          </Route>
          <Route path="/admin" element={<h2>Admin</h2>} />
        </Routes>
      </CssVariablesProvider>
    </div>
  );
}

export default App;
