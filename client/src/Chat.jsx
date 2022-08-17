import "./chat.scss";
import io from "socket.io-client";
import { useState } from "react";
import Screen from "./Screen";

// const socket = io.connect("http://localhost:8080");
const socket = io.connect("http://192.168.0.20:8080");


function Chat(props) {
  const [username, setUsername] = useState(props.username);
  const [room, setRoom] = useState(props.challenge_id);
  const [showChat, setShowChat] = useState(false);

  const joinRoom = async() => {
    if (username !== "" && room !== "") {
      const data = {
        room: room,
        author: username
      };
      await socket.emit("join_room", data);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <button onClick={joinRoom}>Start the chat</button>
        </div>
      ) : (
        <Screen socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Chat;