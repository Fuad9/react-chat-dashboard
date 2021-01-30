import React from "react";

import "./ChatRoom.css";

import dropdown from "../../images/icons/chevron-down.png";
import plus from "../../images/icons/plus.png";
import person2 from "../../images/person/person2.png";
import dots from "../../images/icons/Group 5.png";
import indication2 from "../../images/icons/Indication.png";
import indication1 from "../../images/icons/Indication (1).png";
import person3 from "../../images/person/person3.png";
import person4 from "../../images/person/person4.png";
import mic from "../../images/icons/mic.png";
import file from "../../images/icons/file-text.png";
import person5 from "../../images/person/person5.png";
import image from "../../images/icons/image1.png";

const ChatRoom = () => {
   return (
      <>
         <div className="d-flex justify-content-between align-items-center">
            <div>
               <h1>Chats</h1>
               <h5>
                  Recent Chats <img src={dropdown} alt="" />
               </h5>
            </div>
            <button>
               <img src={plus} alt="" /> Create New Chat
            </button>
         </div>

         <div className="search-input-container my-3 d-flex align-items-center">
            <input type="text" placeholder="Search" className="search-input" />
            <div className="d-flex align-items-center">
               Messages
               <img src={dropdown} alt="" />
            </div>
         </div>

         <div className="message-body">
            <div id="chat_card">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                     <div className="w-25">
                        <img src={person2} alt="" />
                     </div>
                     <div>
                        <h4>Luy Robin</h4>
                        <p className="text-blue">
                           <img src={dots} alt="" /> writes
                        </p>
                     </div>
                  </div>
                  <p className="text-secondary">1 minute ago</p>
               </div>
               <div className="d-flex justify-content-between align-items-center">
                  <p>
                     Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus
                     bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be
                     translated as purposes).
                  </p>
                  <img src={indication2} alt="" className="w-25" />
               </div>
            </div>

            <div id="chat_card">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                     <div className="w-25">
                        <img src={person3} alt="" />
                     </div>
                     <div>
                        <h4>Jared Sunn</h4>
                        <p className="text-blue">
                           <img src={dots} alt="" /> records voice message
                        </p>
                     </div>
                  </div>
                  <p className="text-secondary">1 minute ago</p>
               </div>
               <div className="d-flex justify-content-between align-items-center">
                  <p>
                     <img src={mic} alt="" /> Voice message (01:15)
                  </p>
                  <img src={indication1} alt="" className="w-25" />
               </div>
               <div className="d-flex">
                  <p className="text-blue" id="file-icon">
                     <img src={file} alt="" />
                     Files (x2)
                  </p>
                  <p className="text-danger" id="photo-icon">
                     <img src={image} alt="" />
                     Photo
                  </p>
               </div>
            </div>

            <div className="" id="chat-card">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                     <div className="w-25">
                        <img src={person4} alt="" />
                     </div>
                     <div>
                        <h4>Nika Jerrardo</h4>
                        <p className="text-white">last online 5 hours ago</p>
                     </div>
                  </div>
                  <p className="text-secondary">3 days ago</p>
               </div>
               <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
            </div>

            <div className="">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                     <div className="w-25">
                        <img src={person5} alt="" />
                     </div>
                     <div>
                        <h4>David Amrosa</h4>
                        <p className="text-blue">last online 5 hours ago</p>
                     </div>
                  </div>
                  <p className="text-secondary">3 days ago</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default ChatRoom;
