import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../config";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatMenu = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
// @ts-ignore
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        // @ts-ignore
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        // @ts-ignore
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          // @ts-ignore
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* @ts-ignore  */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  )
}

export default ChatMenu