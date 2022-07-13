import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const Chat = () => {
  const messageref = useRef();
  const textref = useRef();
  const [messages, setmessages] = useState(" ");
  const [room, setRoom] = useState(0);

  const socket = io("http://localhost:9000/chatspace");

  console.log(socket);

  useEffect(() => {
    socket.on("welcome", (message) => {
      console.log("connected to chat server", message);
    });
  }, [socket]);

  const handleSend = () => {
    console.log("clicked send");
    socket.emit("hello", {
      message: messageref.current.value,
      clientId: socket.id,
      room: room,
    });
  };

  socket.on("hello", (message) => {
    console.log(message);
    alert("message from server");
  });
  socket.on("from-server", (users) => {
    console.log("Total users connected are ", users);
  });
  socket.on("welcome", (msg) => {
    console.log("server message ", msg);
  });

  return (
    <div>
      chat
      <br />
      <div>
        <label>Message</label>
        <input ref={messageref} type="text" />
      </div>
      <div>
        <label>Room no</label>

        <input
          value={room}
          placeholder="Room no to chat"
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <button onClick={() => handleSend()}>send</button>
      <div>
        <div ref={textref}>{messages}</div>
      </div>
    </div>
  );
};
export default Chat;
