import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <>
      <section
        class="about-us"
        style={{ color: props.mode === "#042743" ? "white" : "black" }}
      >
        <div class="about">
          <img src="i1.jpg" class="pic" alt="i1.jpg" />
          <div class="text">
            <h2>About Me</h2>
            <h5>
              Front-end Developer & <span2>Designer</span2>
            </h5>
            <p>
              🌟 Aspiring Frontend Developer | HTML | CSS | JavaScript |
              Tailwind CSS 🌟
              <br />
              <br /> 🚀 Passionate about crafting engaging user experiences and
              bringing creative designs to life through code. Eager to
              contribute my skills and learn from experienced professionals in
              the frontend development field.
              <br />
              <br />
              {/* 🎓 Recent graduate with a degree in Computer Science Engineering
              from CV Raman Global University. Proficient in HTML, CSS, Tailwind
              CSS and JavaScript, with a solid understanding of frontend
              development principles and best practices.
              <br />
              <br /> */}
              🛠️ Hands-on experience with building responsive web applications
              and interfaces. Familiarity with modern frontend frameworks and
              libraries such as React.js .
              <br /> <br />
              💡 Strong problem-solving skills and attention to detail. Ability
              to collaborate effectively in team environments and adapt to new
              technologies and tools.
              <br /> <br />
              🔍 Actively seeking opportunities to grow and develop my skills as
              a frontend developer. Excited to contribute fresh ideas and
              enthusiasm to innovative projects.
              <br />
              <br />
              🌐 Check out my GitHub https://github.com/verma2209 to see
              examples of my work and projects. Let's connect! I'm eager to
              explore opportunities in frontend development and learn from
              experienced professionals in the industry
            </p>
            {/* <div class="data">
              <Link to="/" class="hire">
                Hire Me
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

// import React, { useState } from "react";
// import "./About.css";

// export default function About() {
//   const [myStyle, setMyStyle] = useState({
//     backgroundColor: "white",
//     color: "black",
//   });

//   //   css with usestate()//

//   const [btntext, setbtnText] = useState("Enable Dark mode ");

//   const tosimple = () => {
//     if (myStyle.color === "white") {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setbtnText("Enable Dark Mode");
//     } else {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//       });
//       setbtnText("Enable Light Mode");
//     }
//   };

//   //end//

//   //   // css start //

//   //   let myStyle = {
//   //     backgroundColor: "black",
//   //     color: "white",
//   //   };
//   //   //css end//
//   return (
//     <>
//       <div className="aboutcon mt-5 mx-5 " style={myStyle}>
//         {" "}
//         <div className="hesder">
//           <h1>About Us</h1>
//         </div>
//         <div className="accordion" id="accordionExample">
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button
//                 className="accordion-button"
//                 type="button"
//                 style={myStyle}
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseOne"
//                 aria-expanded="true"
//                 aria-controls="collapseOne"
//               >
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div
//               id="collapseOne"
//               className="accordion-collapse collapse show"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body" style={myStyle}>
//                 <strong>This is the first item's accordion body.</strong> It is
//                 shown by default, until the collapse plugin adds the appropriate
//                 classes that we use to style each element. These classes control
//                 the overall appearance, as well as the showing and hiding via
//                 CSS transitions. You can modify any of this with custom CSS or
//                 overriding our default variables. It's also worth noting that
//                 just about any HTML can go within the{" "}
//                 <code>.accordion-body</code>, though the transition does limit
//                 overflow.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 style={myStyle}
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseTwo"
//                 aria-expanded="false"
//                 aria-controls="collapseTwo"
//               >
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div
//               id="collapseTwo"
//               className="accordion-collapse collapse"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body" style={myStyle}>
//                 <strong>This is the second item's accordion body.</strong> It is
//                 hidden by default, until the collapse plugin adds the
//                 appropriate classes that we use to style each element. These
//                 classes control the overall appearance, as well as the showing
//                 and hiding via CSS transitions. You can modify any of this with
//                 custom CSS or overriding our default variables. It's also worth
//                 noting that just about any HTML can go within the{" "}
//                 <code>.accordion-body</code>, though the transition does limit
//                 overflow.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 style={myStyle}
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseThree"
//                 aria-expanded="false"
//                 aria-controls="collapseThree"
//               >
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div
//               id="collapseThree"
//               className="accordion-collapse collapse"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body" style={myStyle}>
//                 <strong>This is the third item's accordion body.</strong> It is
//                 hidden by default, until the collapse plugin adds the
//                 appropriate classes that we use to style each element. These
//                 classes control the overall appearance, as well as the showing
//                 and hiding via CSS transitions. You can modify any of this with
//                 custom CSS or overriding our default variables. It's also worth
//                 noting that just about any HTML can go within the{" "}
//                 <code>.accordion-body</code>, though the transition does limit
//                 overflow.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         type="button"
//         class="btn btn-primary mx-5 mt-4 "
//         onClick={tosimple}
//       >
//         {btntext}
//       </button>
//     </>
//   );
// }
