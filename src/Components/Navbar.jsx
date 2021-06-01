import { Link } from "react-router-dom";

const Navbar = () => {
   const listItems = [];
   return (
      <nav>
         <ul>
            <Link to="/index.html">
               <li>HomePage</li>
            </Link>
            <Link to="/tools.html">
               <li>Tools</li>
            </Link>
            <Link to="/my_choices.html">
               <li>My choice</li>
            </Link>
            <Link to="/websites.html">
               <li>Websites to follow</li>
            </Link>

            <li>
               <a href="https://learn.seytech.co/courses" target="_blank">
                  Seyetch
               </a>
            </li>
         </ul>
      </nav>
   );
};
export default Navbar;
