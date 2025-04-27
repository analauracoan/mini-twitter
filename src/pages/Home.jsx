import { useState } from "react";
import { App } from "../layouts/App";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";

export const Home = () => {
    const [messages, setMessages] = useState([]);
    const userEmail = "seuemail@exemplo.com";

    const handleSendMessage = (text) => {
        const newMessage = {
            text,
            email: userEmail,
            timestamp: new Date().toLocaleString(),
        };
        setMessages([newMessage, ...messages]);
    };

    return (
      <App>
        <main className="flex-1 container mx-auto p-4">
          <MessageForm onSendMessage={handleSendMessage} />
          <MessageList messages={messages} />
        </main>
      </App>
    );
}


