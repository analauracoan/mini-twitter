import { useEffect, useState } from "react";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";
import { getAuth } from "firebase/auth";
import { ref, onValue, push, remove, getDatabase } from "firebase/database";

export const Home = () => {
  const [messages, setMessages] = useState([]);
  const [canTweet, setCanTweet] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const auth = getAuth();

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      user.reload().then(() => {
        setCanTweet(user.emailVerified);
        setUserEmail(user.email); // Define o e-mail do usuário
      });
    }

    const db = getDatabase();
    const messagesRef = ref(db, "messages");

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const parsedMessages = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setMessages(parsedMessages.reverse());
      }
    });
  }, [auth]);

  const handleSendMessage = (text) => {
    const user = auth.currentUser;

    if (!user?.emailVerified) {
      alert("Você precisa verificar seu e-mail antes de enviar uma mensagem.");
      return;
    }

    const db = getDatabase();
    const messagesRef = ref(db, "messages");
    const newMessage = {
      text,
      email: user.email,
      timestamp: new Date().toISOString(),
    };
    push(messagesRef, newMessage);
  };

  const handleDeleteMessage = (id) => {
    const db = getDatabase();
    const messageRef = ref(db, `messages/${id}`);
    remove(messageRef);
  };

  return (
    <main className="flex-1 container mx-auto p-4">
      {!canTweet && (
        <div className="text-red-600 text-sm mb-4 text-center">
          ⚠️ Verifique seu e-mail para poder postar mensagens.
        </div>
      )}

      <MessageForm onSendMessage={handleSendMessage} disabled={!canTweet} userEmail={userEmail} />
      <MessageList messages={messages} onDeleteMessage={handleDeleteMessage} userEmail={userEmail} />
    </main>
  );
};
