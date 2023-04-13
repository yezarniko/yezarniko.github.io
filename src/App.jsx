/**
 * Components
 */
import About from "@comp/About";
import ContactMe from "@comp/ContactMe";
import CsSkills from "@comp/CsSkills";
import Footer from "@comp/Footer";
import Landing from "@comp/Landing";
import Nav from "@comp/Nav";
import Projects from "@comp/Projects";
import Skills from "@comp/Skills";

/**
 * Hooks
 */
import { CssVariablesProvider } from "@hooks/useCssVariables";
import { NavStyleProvider } from "@hooks/useNavStyle";
/**
 * React
 */
import { Outlet, Route, Routes } from "react-router-dom";

/**
 * * App
 * The main App Component
 * @component
 * @returns {ReactNode} - The representation of App component UI
 */
function App() {
  return (
    <div className="App">
      <CssVariablesProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavStyleProvider>
                  <header>
                    <Nav />
                  </header>
                  <main className="container">
                    <Outlet />
                    <Footer />
                  </main>
                </NavStyleProvider>
              </>
            }
          >
            <Route
              path="/"
              element={
                <>
                  <Landing />
                  <Skills />
                  <CsSkills />
                  <Projects />
                  <ContactMe />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </CssVariablesProvider>
    </div>
  );
}

export default App;
