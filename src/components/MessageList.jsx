export default function MessageList({ messages }) {
    return (
      <section className="space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <p>{msg.text}</p>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>{msg.email}</span>
              <span>{msg.timestamp}</span>
            </div>
          </div>
        ))}
      </section>
    );
  }
  