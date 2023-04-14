/**
 * Components
 */
import About from "@comp/About";
import ContactMe from "@comp/ContactMe";
import CsSkills from "@comp/CsSkills";
import Footer from "@comp/Footer";
import Landing from "@comp/Landing";
import Loading from "@comp/Loading";
import Nav from "@comp/Nav";
import NotFound from "@comp/NotFound";
import Projects from "@comp/Projects";
import Skills from "@comp/Skills";

/**
 * Hooks
 */
import { CssVariablesProvider } from "@hooks/useCssVariables";
import { NavStyleProvider } from "@hooks/useNavStyle";
import { Suspense } from "react";
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Suspense fallback={<Loading />}>
                <CssVariablesProvider>
                  <NavStyleProvider>
                    <header>
                      <Nav />
                    </header>
                    <main className="container">
                      <Outlet />
                      <Footer />
                    </main>
                    {/* <Loading /> */}
                  </NavStyleProvider>
                </CssVariablesProvider>
              </Suspense>
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
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
