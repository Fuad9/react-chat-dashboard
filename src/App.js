import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import ActiveFriend from "./components/ActiveFriend/ActiveFriend";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
   return (
      <div className="App row">
         <div className="col-12 col-sm-12 col-md-2">
            <Router>
               <Sidebar />
            </Router>
         </div>

         <div className="col-12 col-sm-12 col-md-5 chatwindow">
            <ChatRoom />
         </div>

         <div className="col-12 col-sm-12 col-md-4 chatwindow">
            <ActiveFriend />
         </div>
      </div>
   );
}

export default App;
