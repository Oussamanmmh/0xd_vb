"use client";

import {
  MessageCircle,
  X,
  Send,
  User,
  Bot,
  Smile,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
};

export default function DentalChatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hello! 👋 I'm Dr Nemamcha Oussama's assistant. How can I help you today?", [
          "Book an appointment",
          "Our services",
          "Contact information",
          "Office hours",
        ]);
      }, 400);
    }
  }, [isOpen]);

  const toggleChat = () => {
    if (isOpen) {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 200);
    } else {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 20);
    }
  };

  const addBotMessage = (text: string, quickReplies: string[] = []) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        isBot: true,
        timestamp: new Date(),
        quickReplies,
      },
    ]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        isBot: false,
        timestamp: new Date(),
      },
    ]);
  };

  const simulateTyping = (callback: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, 1000 + Math.random() * 700);
  };

  const handleQuickReply = (reply: string) => {
    addUserMessage(reply);
    handleBotResponse(reply);
  };

  const handleBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();

    simulateTyping(() => {
      if (message.includes("appointment") || message.includes("book")) {
        addBotMessage("I'd be happy to help you book an appointment! 📅 Here are your options:", [
          "Call us now",
          "Online booking",
          "Emergency appointment",
        ]);
      } else if (message.includes("services") || message.includes("treatment")) {
        addBotMessage(
          `We offer comprehensive dental services:\n\n🦷 General Dentistry\n✨ Cosmetic Dentistry\n🔧 Restorative Treatments\n🚨 Emergency Care\n👶 Pediatric Dentistry\n🦴 Oral Surgery\n\nNeed details about any service?`,
          ["General dentistry", "Cosmetic procedures", "Emergency care"]
        );
      } else if (message.includes("hours") || message.includes("time") || message.includes("open")) {
        addBotMessage(
          "Our office hours:\n\n🕗 Mon–Fri: 8:00 AM – 6:00 PM\n🕘 Sat: 9:00 AM – 2:00 PM\n🚪 Sun: Closed\n\n🚨 Emergency appointments 24/7",
          ["Book appointment", "Emergency contact"]
        );
      } else if (message.includes("contact") || message.includes("phone") || message.includes("address")) {
        addBotMessage(
          "📞 29 404 409\n📍 Thala, Kasserine\n✉️ Always here to help!",
          ["Call now", "Get directions", "Send message"]
        );
      } else if (message.includes("emergency") || message.includes("urgent") || message.includes("pain")) {
        addBotMessage(
          "🚨 For emergencies, call 29 404 409 immediately.\n\nCommon emergencies:\n• Severe pain\n• Knocked-out tooth\n• Lost crown\n• Swelling\n\nDon't wait!",
          ["Call emergency line", "Pain tips"]
        );
      } else if (message.includes("price") || message.includes("cost") || message.includes("insurance")) {
        addBotMessage(
          "💳 We accept cards, insurance, and offer payment plans.\n\nFor specific pricing, call 29 404 409 or book a consultation.",
          ["Book consultation", "Call for pricing"]
        );
      } else if (message.includes("location") || message.includes("directions")) {
        addBotMessage(
          "📍 We're in Thala, Kasserine\n🚗 Parking available\n🚌 Public transport accessible\n♿ Wheelchair access",
          ["Get directions", "Book appointment"]
        );
      } else if (message.includes("call now") || message.includes("phone")) {
        addBotMessage(
          "📞 Please call us at 29 404 409.\nWe’ll help with:\n• Scheduling\n• Treatments\n• Insurance\n• Emergency care"
        );
      } else if (message.includes("online booking")) {
        addBotMessage(
          "🌐 Book online any time!\n✅ 24/7 access\n✅ Instant confirmation\n✅ Choose time\n\nReady to book?",
          ["Book now", "Need help booking"]
        );
      } else if (message.includes("general dentistry")) {
        addBotMessage(
          "🦷 General Dentistry:\n• Cleanings & checkups\n• Fillings\n• Root canals\n• Extractions\n• Gum care",
          ["Book checkup", "Learn more"]
        );
      } else if (message.includes("cosmetic")) {
        addBotMessage(
          "✨ Cosmetic Services:\n• Whitening\n• Veneers\n• Bonding\n• Smile makeovers\n• Invisalign",
          ["Whitening info", "Book consult"]
        );
      } else {
        addBotMessage("How can I assist you today?", [
          "Book appointment",
          "Our services",
          "Contact info",
          "Office hours",
          "Emergency care",
        ]);
      }
    });
  };

  const handleSend = () => {
    if (input.trim()) {
      addUserMessage(input);
      handleBotResponse(input);
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-12 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
           className={`fixed bottom-24 right-6 sm:bottom-24 sm:right-6 left-4 right-4 sm:left-auto sm:right-6 
          h-[80vh] sm:h-[32rem] bg-[#181A1B] text-white rounded-2xl shadow-2xl z-40 
          flex flex-col border border-gray-800 transition-all duration-200 ease-in-out 
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Smile className="text-teal-500" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Dr. Nemamcha's Assistant</h3>
              <div className="flex items-center gap-1 text-teal-100">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[80%] ${message.isBot ? "bg-[#2A2D2E]" : "bg-teal-500 text-white"} rounded-2xl p-3`}>
                  <div className="flex items-start gap-2">
                    {message.isBot && <Bot className="text-teal-500 mt-1 flex-shrink-0" size={16} />}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      {Array.isArray(message.quickReplies) && message.quickReplies.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {message.quickReplies.map((reply, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuickReply(reply)}
                              className="block w-full text-left text-xs bg-[#2a2d2e] hover:bg-[#333] text-teal-300 px-3 py-2 rounded-lg transition-colors"
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {!message.isBot && <User className="text-white mt-1 flex-shrink-0" size={16} />}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#2A2D2E] rounded-2xl p-3 flex items-center gap-2">
                  <Bot className="text-teal-500" size={16} />
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-[#2A2D2E] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-teal-500 p-3 hover:bg-teal-600 disabled:bg-gray-500 text-white rounded-full"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
