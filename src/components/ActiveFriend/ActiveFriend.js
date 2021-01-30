import React from "react";

import "./ActiveFriend.css";

import person4 from "../../images/person/person4.png";
import attachment from "../../images/icons/attach-2.png";
import verticalMenu from "../../images/icons/more-vertical.png";
import horizontalMenu from "../../images/icons/more-horizontal.png";
import seen from "../../images/icons/all-done.png";
import file from "../../images/icons/file.png";
import fileText from "../../images/icons/file-text.png";
import film from "../../images/icons/film.png";
import image from "../../images/icons/image.png";
import plus from "../../images/icons/plus.png";
import smile from "../../images/icons/Smile icon.png";
import navigation from "../../images/icons/navigation-2.png";

const ActiveFriend = () => {
   return (
      <>
         <div className="active-friend">
            <div className="d-flex active-friend-header justify-content-between align-items-center">
               <img src={person4} alt="" />

               <div>
                  <h4>Nika Jerrardo</h4>
                  <p className="text-blue">last online 5 hours ago</p>
               </div>

               <div className="menu">
                  <img src={attachment} alt="" />
                  <img src={verticalMenu} alt="" />
               </div>
            </div>

            <div className="card1 d-flex">
               <div className="w-25">
                  <img src={person4} alt="" />
               </div>

               <div>
                  <div className="d-flex justify-content-between align-items-center">
                     <div id="chat-card">
                        <p>
                           Hello! Finally found the time to write to you. I need your help in
                           creating interactive animations for my mobile application.
                        </p>
                     </div>
                     <div className="w-25">
                        <img src={horizontalMenu} alt="" />
                     </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                     <div id="chat-card">
                        <p>Can I send you files?</p>
                     </div>
                     <div className="w-25">
                        <img src={horizontalMenu} alt="" />
                     </div>
                  </div>
                  <p className="text-secondary d-flex justify-content-end">4 days ago</p>
               </div>
            </div>

            <div className="d-flex justify-content-end">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="w-25">
                     <img src={horizontalMenu} alt="" />
                  </div>
                  <div id="chat_card">
                     <p>Hey! Okay, send out</p>
                  </div>
                  <img src={seen} alt="" />
               </div>
            </div>
            <p className="text-secondary d-flex justify-content-end">4 days ago</p>

            <div className=" d-flex">
               <div className="card4 d-flex">
                  <div className="w-25">
                     <img src={person4} alt="" />
                  </div>

                  <div className="d-flex" id="chat-card">
                     <div
                        className="w-25 h-25 pb-1"
                        style={{ backgroundColor: "lightblue", borderRadius: "5px" }}
                     >
                        <img src={file} alt="" />
                     </div>
                     <div>
                        <p className="text-white">Style.zip</p>
                        <p className="text-secondary">41.36 Mb</p>
                     </div>
                  </div>
                  <div className="w-25 d-flex align-items-center">
                     <img src={horizontalMenu} alt="" />
                  </div>
               </div>
            </div>
            <p className="text-secondary d-flex justify-content-end">4 days ago</p>

            <div className="d-flex mt-5">
               <div className="left-line"></div>
               <p className="text-secondary">3 days ago</p>
               <div className="right-line"></div>
            </div>

            <div className="d-flex justify-content-end align-items-center">
               <div className="w-25">
                  <img src={horizontalMenu} alt="" />
               </div>
               <div id="chat_card">
                  <p>Hello! I tweaked everything you asked. I am sending the finished file.</p>
                  <p className="text-blue d-flex justify-content-end align-items-center">
                     52.05 Mb NEW_Style.zip <img src={fileText} alt="" />
                  </p>
               </div>
            </div>
            <p className="text-secondary d-flex justify-content-end">3 days ago</p>

            <div className="d-flex">
               <div className="vertical-menu d-flex flex-column">
                  <div style={{ backgroundColor: "#2b8bf2" }}>
                     <img src={film} alt="" />
                  </div>
                  <div style={{ backgroundColor: "#2b8bf2" }}>
                     <img src={image} alt="" />
                  </div>
                  <div style={{ backgroundColor: "#2b8bf2" }}>
                     <img src={file} alt="" />
                  </div>
                  <div style={{ backgroundColor: "#2b8bf2" }}>
                     <img src={plus} alt="" />
                  </div>
               </div>

               <div className="message-input-container d-flex align-items-end justify-content-end">
                  <input type="text" placeholder="Type message here" className="message-input" />
                  <div className="w-25">
                     <img src={smile} alt="" />
                  </div>
                  <div
                     className="w-25 p-1"
                     style={{ backgroundColor: "#2b8bf2", borderRadius: "50%" }}
                  >
                     <img src={navigation} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ActiveFriend;
