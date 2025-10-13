import { useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";

const TextBox = ({
  input,
  messages,
  handleOnChange,
  handleSend,
  handleClick,
}: {
  input: string;
  messages: string[];
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSend: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleClick: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-3 border-t border-[#202225] bg-[#2b2d31]">
      <div className="flex items-center bg-[#40444b] rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 space-x-2">
        <textarea
          id="user-message-textbox"
          rows={1}
          value={input}
          onChange={handleOnChange}
          onKeyDown={handleSend}
          onInput={(e) => {
            e.currentTarget.style.height = "auto";
            const maxHeight = 100; // max height in px (e.g., ~5 lines)
            if (e.currentTarget.scrollHeight > maxHeight) {
              e.currentTarget.style.height = `${maxHeight}px`;
              e.currentTarget.style.overflowY = "auto";
            } else {
              e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
              e.currentTarget.style.overflowY = "hidden";
            }
          }}
          placeholder="Message @lukar.h"
          className="flex-1 bg-transparent resize-none outline-none text-gray-200 placeholder-gray-500 text-sm overflow-hidden hide-scrollbar"
        />
        <div
          className={`flex items-center justify-center w-7 h-7 rounded-full cursor-pointer ${
            input ? "bg-indigo-100 hover:bg-indigo-200" : "bg-gray-700"
          }`}
        >
          <IoSend
            onClick={handleClick}
            className={`${input ? "text-indigo-500" : "text-gray-400"}`}
            size={16}
          />
        </div>
      </div>
    </div>
  );
};

export default TextBox;
