"use client";
import { useState, useRef, useEffect } from "react";
import TextBox from "@/components/WIP/textbox";

export default function Page() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) {
        setMessages([...messages, input]);
        setInput("");
      }
    }
  };

  const handleClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault(); // optional if inside a form
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen h-auto w-full bg-zinc-900">
      <div className="flex flex-col h-full w-full shadow-lg overflow-hidden">
        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Persistent Instruction Bubble */}
          <div className="flex items-start space-x-3">
            {/* Left Avatar */}
            <img
              src="https://cdn.discordapp.com/embed/avatars/2.png"
              alt="Bot Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-xs text-gray-400 mb-1 font-medium">
                Helper Bot
              </p>
              <div className="bg-[#40444b] text-gray-200 text-sm rounded-lg p-3 max-w-[80%]">
                👋 Hey there! Want to a leave a message for Lukar?
                <br />
                <br />
                Type a message below and either hit&nbsp;
                <kbd className="bg-gray-500">Enter</kbd> or press on the icon to
                the right of the textbox below for your message to be sent. Use{" "}
                <kbd className="bg-gray-500">Shift + Enter</kbd> for a new line.
                <br />
                <br />
                After you hit enter, I will prompt you for an email and
                confirmation to send your message.
              </div>
            </div>
          </div>

          {/* USER MESSAGES */}
          {messages.map((msg, i) => (
            <div
              key={i}
              className="flex items-start justify-end space-x-3 space-x-reverse"
            >
              <div className="flex flex-col items-end">
                <p className="text-xs text-gray-400 mb-1 font-medium text-right">
                  You
                </p>
                <div className="bg-[#5865f2] text-white text-sm rounded-lg p-3 max-w-[80%] break-words">
                  {msg}
                </div>
              </div>
              {/* Right Avatar */}
              <img
                src="https://cdn.discordapp.com/embed/avatars/0.png"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        {/* INPUT AREA */}
        <TextBox
          input={input}
          messages={messages}
          handleOnChange={handleOnChange}
          handleSend={handleSend}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
