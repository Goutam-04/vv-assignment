import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  const [status, setStatus] = useState({
    sent: false,
    delivered: true,
    read: true,
  });

  useEffect(() => {
    const messageRef = doc(db, "messages", message.id);
    const unsubscribe = onSnapshot(messageRef, (doc) => {
      const data = doc.data();
      if (data) {
        setStatus({
          sent: data.status?.sent || false,
          delivered: data.status?.delivered || false,
          read: data.status?.read || true,
        });
      }
    });

    return () => unsubscribe();
  }, [message.id]);

  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
        <div className="message-status">
          {status.read ? (
            <span  className="text-blue-600">✓✓</span>
          ) : status.delivered ? (
            <span className="" >✓✓</span>
          ) : (
            <span >✓</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
