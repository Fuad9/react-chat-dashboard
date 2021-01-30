import React from "react";

import { NavLink } from "react-router-dom";

import person1 from "../../images/person/person1.png";
import dropdown from "../../images/icons/chevron-down.png";
import home from "../../images/icons/grid.png";
import chat from "../../images/icons/message-circle.png";
import contact from "../../images/icons/person.png";
import notifications from "../../images/icons/bell.png";
import calendar from "../../images/icons/calendar.png";
import settings from "../../images/icons/settings-2.png";
import logout from "../../images/icons/power.png";

const Sidebar = () => {
   return (
      <>
         <div className="d-flex flex-column">
            <div className="w-25">
               <img src={person1} alt="" />
            </div>

            <h5>
               Henry Jabbawockiez <img src={dropdown} alt="" />
            </h5>
         </div>

         <div className="list-item d-flex flex-column align-items-start">
            <div>
               <NavLink
                  to="/home"
                  className="text-decoration-none"
                  activeStyle={{
                     color: "#0000ff",
                     borderLeft: "5px solid #0000ff",
                     fontWeight: "bold",
                  }}
               >
                  <img src={home} alt="" /> HOME
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/chatroom"
                  className="text-decoration-none"
                  activeStyle={{
                     color: "#0000ff",
                     borderLeft: "5px solid #0000ff",
                     fontWeight: "bold",
                  }}
               >
                  <img src={chat} alt="" /> CHAT
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/contact"
                  className="text-decoration-none"
                  activeStyle={{
                     color: "#0000ff",
                     borderLeft: "5px solid #0000ff",
                     fontWeight: "bold",
                  }}
               >
                  <img src={contact} alt="" /> CONTACT
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/notifications"
                  className="text-decoration-none"
                  activeStyle={{
                     color: "#0000ff",
                     borderLeft: "5px solid #0000ff",
                     fontWeight: "bold",
                  }}
               >
                  <img src={notifications} alt="" />
                  NOTIFICATIONS
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/calendar"
                  className="text-decoration-none"
                  activeStyle={{
                     color: "#0000ff",
                     borderLeft: "5px solid #0000ff",
                     fontWeight: "bold",
                  }}
               >
                  <img src={calendar} alt="" /> CALENDAR
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/settings"
                  className="text-decoration-none"
                  activeStyle={{
                     color: "#0000ff",
                     borderLeft: "5px solid #0000ff",
                     fontWeight: "bold",
                  }}
               >
                  <img src={settings} alt="" /> SETTINGS
               </NavLink>
            </div>
         </div>

         <div style={{ marginTop: "50px" }}>
            <p>
               <img src={logout} alt="" /> LOG OUT
            </p>
         </div>
      </>
   );
};

export default Sidebar;
