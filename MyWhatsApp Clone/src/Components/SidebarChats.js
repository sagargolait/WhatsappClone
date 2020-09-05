import React, { useState, useEffect } from "react";
import "./SidebarChats.css";
import { Avatar } from "@material-ui/core";

function SidebarChats({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Enter the room name for the chat: ");

    if (roomName) {
      //do something in the database
    }
  };

  return !addNewChat ? (
    <div className="sidebarchats">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarchats-info">
        <h2>Name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarchats" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChats;
