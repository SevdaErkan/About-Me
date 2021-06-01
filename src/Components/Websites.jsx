import React from "react";

const Websites = () => {
   return (
      <div>
         <h1>Websites to follow:</h1>
         <table className="websites">
            <tr>
               <td className="small-box">
                  <h3>Websites</h3>
               </td>
               <td className="large-bx1">
                  <h3>Description</h3>
               </td>
            </tr>
            <tr>
               <td className="small-box">
                  <a href="https://www.freecodecamp.org/" target="_blank">
                     <b>Seytech Portal</b>
                  </a>
               </td>
               <td className="large-bx1">
                  Our interactive learning and tracking platform.
               </td>
            </tr>
            <tr>
               <td className="small-box">
                  <a href="https://www.freecodecamp.org/" target="_blank">
                     <b>FreeCodecamp</b>
                  </a>
               </td>
               <td className="large-bx1">
                  Online interactive platform that offers free coding classes.
               </td>
            </tr>
            <tr>
               <td className="small-box">
                  <a href="https://www.codecademy.com/catalog" target="_blank">
                     <b>Codeacademy</b>
                  </a>
               </td>
               <td className="large-bx1">
                  Online interactive platform that offers free coding classes in
                  12 different programming languages
               </td>
            </tr>
            <tr>
               <td className="small-box">
                  <a
                     href="https://stackoverflow.com/nocaptcha?s=325df3cd-195d-4b9f-ad1a-dbb97012b68a"
                     target="_blank"
                  >
                     <b>Stack Overflow</b>
                  </a>
               </td>
               <td className="large-bx1">
                  Stack Overflow is a question and answer site for professional
                  and enthusiast programmers.
               </td>
            </tr>
            <tr>
               <td className="small-box">
                  <a
                     href="https://betterprogramming.pub/top-10-programming-blogs-in-2020-dda86feead1f"
                     target="_blank"
                  >
                     <b>Medium</b>
                  </a>
               </td>
               <td className="large-bx1">
                  A website to read blogs about programming.
               </td>
            </tr>
            <tr>
               <td className="small-box">
                  <a href="https://www.quora.com/" target="_blank">
                     <b>Quora</b>
                  </a>
               </td>
               <td className="large-bx1">
                  A website to read blogs about programming.
               </td>
            </tr>
            <tr>
               <td className="small-box">
                  <a href="https://www.youtube.com/" target="_blank">
                     <b>Youtube</b>
                  </a>
               </td>
               <td className="large-bx1">Tutorial to follow and practice.</td>
            </tr>
         </table>
      </div>
   );
};
export default Websites;
