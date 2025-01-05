// // import React from "react";
// // import "./App.css";
// // import Projects from "components/Projects";
// // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// // import Skills from "components/Skills";
// // import About from "components/About";
// // import { ThemeProvider } from "styled-components";
// // import Home from "main/index";

// // const DarkTheme = {
// //   backgroundColor: "#15161b", //021f34//#1f2022
// //   fontColorHeader: "#ffd479", ///fff
// //   fontColorHeaderHover: "#25265e", //25265e
// //   fontColorPrimary: "#b3b9c5", //fff
// //   fontColorSecondary: "#b3b9c5", //98c0c6
// //   socialIconColor: "#e14eca", //e14eca
// //   cardColor: "#212129", //01162a
// //   // commonBorder: '#00aaf2', //00aaf2
// // };
// // const LightTheme = {
// //   backgroundColor: "#f0edf6", //f9fafc/#fff
// //   fontColorHeader: "#343a40", ///25265e
// //   fontColorHeaderHover: "#fff", //fff
// //   fontColorPrimary: "#495057", //25265e
// //   fontColorSecondary: "#495057", //25265eb3
// //   cardColor: "#fbfbfd", //fff
// //   socialIconColor: "rgba(37, 38, 94, 0.7)", //rgba(37, 38, 94, 0.7)
// //   commonBorder: "#15161b", //0556f3
// // };
// // const themes = {
// //   light: LightTheme,
// //   dark: DarkTheme,
// // };

// // const App = () => {
// //   const [currentTheme, setCurrentTheme] = React.useState("light");
// //   const themeToggler = () => {
// //     currentTheme === "light"
// //       ? setCurrentTheme("dark")
// //       : setCurrentTheme("light");
// //   };
// //   return (
// //     <ThemeProvider theme={themes[currentTheme]}>
// //       <div className="app">
// //         <Router>
// //           <Switch>
// //             <Home currentTheme={currentTheme} themeToggler={themeToggler} />
// //             <Route exact path="/">
// //               <Home currentTheme={currentTheme} themeToggler={themeToggler} />
// //             </Route>
// //             <Route path="/projects" component={Projects} />
// //             <Route path="/skills" component={Skills} />
// //             <Route path="/about" component={About} />
// //           </Switch>
// //         </Router>
// //       </div>
// //     </ThemeProvider>
// //   );
// // };

// // export default App;


// import React from "react";
// import "./App.css";
// import Projects from "components/Projects";
// import Skills from "components/Skills";
// import About from "components/About";
// import { ThemeProvider } from "styled-components";
// import Home from "main/index";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import

// const DarkTheme = {
//   backgroundColor: "#15161b", //021f34//#1f2022
//   fontColorHeader: "#ffd479", ///fff
//   fontColorHeaderHover: "#25265e", //25265e
//   fontColorPrimary: "#b3b9c5", //fff
//   fontColorSecondary: "#b3b9c5", //98c0c6
//   socialIconColor: "#e14eca", //e14eca
//   cardColor: "#212129", //01162a
//   // commonBorder: '#00aaf2', //00aaf2
// };
// const LightTheme = {
//   backgroundColor: "#f0edf6", //f9fafc/#fff
//   fontColorHeader: "#343a40", ///25265e
//   fontColorHeaderHover: "#fff", //fff
//   fontColorPrimary: "#495057", //25265e
//   fontColorSecondary: "#495057", //25265eb3
//   cardColor: "#fbfbfd", //fff
//   socialIconColor: "rgba(37, 38, 94, 0.7)", //rgba(37, 38, 94, 0.7)
//   commonBorder: "#15161b", //0556f3
// };
// const themes = {
//   light: LightTheme,
//   dark: DarkTheme,
// };

// const App = () => {
//   const [currentTheme, setCurrentTheme] = React.useState("light");
//   const themeToggler = () => {
//     currentTheme === "light"
//       ? setCurrentTheme("dark")
//       : setCurrentTheme("light");
//   };
//   return (
//     <ThemeProvider theme={themes[currentTheme]}>
//       <div className="app">
//         <Router>
//           <Routes> {/* Updated component */}
//             <Route path="/" element={<Home currentTheme={currentTheme} themeToggler={themeToggler} />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/about" element={<About />} />
//           </Routes> {/* Updated component */}
//         </Router>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;


import React from "react";
import "./App.css";
import Projects from "components/Projects";
import Skills from "components/Skills";
import About from "components/About";
import { ThemeProvider } from "styled-components";
import Home from "main/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import

const DarkTheme = {
  backgroundColor: "#15161b", //021f34//#1f2022
  fontColorHeader: "#ffd479", ///fff
  fontColorHeaderHover: "#25265e", //25265e
  fontColorPrimary: "#b3b9c5", //fff
  fontColorSecondary: "#b3b9c5", //98c0c6
  socialIconColor: "#e14eca", //e14eca
  cardColor: "#212129", //01162a
  
  // commonBorder: '#00aaf2', //00aaf2
};

const themes = {
  dark: DarkTheme,
};

const App = () => {
  const [currentTheme] = React.useState("dark"); // Always set to dark theme

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <div className="app">
        <Router>
          <Routes> {/* Updated component */}
            <Route path="/" element={<Home currentTheme={currentTheme} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
          </Routes> {/* Updated component */}
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
