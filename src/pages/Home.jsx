import { useState } from "react";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";
import { getAuth } from "firebase/auth";

export const Home = () => {
    const [messages, setMessages] = useState([]);

    const auth = getAuth();
    const userEmail = auth.currentUser?.email;

    const handleSendMessage = (text) => {
        const newMessage = {
            text,
            email: userEmail,
            timestamp: new Date().toLocaleString(),
        };
        setMessages([newMessage, ...messages]);
    };

    return (
        <main className="flex-1 container mx-auto p-4">
          <MessageForm onSendMessage={handleSendMessage} />
          <MessageList messages={messages} />
        </main>
    );
}


