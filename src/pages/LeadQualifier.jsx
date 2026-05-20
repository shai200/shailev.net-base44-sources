import React, { useState, useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function LeadQualifier() {
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [starting, setStarting] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    initConversation();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const initConversation = async () => {
    try {
      const conv = await base44.agents.createConversation({
        agent_name: "lead_qualifier",
        metadata: { name: "Lead Inquiry" },
      });
      setConversation(conv);

      const unsub = base44.agents.subscribeToConversation(conv.id, (data) => {
        setMessages(data.messages || []);
      });

      // Kick off the greeting
      await base44.agents.addMessage(conv, {
        role: "user",
        content: "Hi, I'd like to get in touch with Shai.",
      });

      return () => unsub();
    } catch (e) {
      console.error(e);
    } finally {
      setStarting(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading || !conversation) return;
    const text = input.trim();
    setInput("");
    setLoading(true);
    try {
      await base44.agents.addMessage(conversation, { role: "user", content: text });
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const visibleMessages = messages.filter(
    (m) => m.role === "user" || m.role === "assistant"
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl flex flex-col" style={{ height: "80vh" }}>
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Talk to Shai's Assistant</h1>
          <p className="text-slate-500 text-sm mt-1">
            Tell us what you're working on — we'll set up a discovery call with Shai.
          </p>
        </div>

        {/* Chat window */}
        <div className="flex-1 overflow-y-auto bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
          {starting && (
            <div className="flex justify-center items-center h-full text-slate-400">
              <Loader2 className="w-5 h-5 animate-spin mr-2" /> Starting conversation…
            </div>
          )}
          {visibleMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-slate-800 border border-slate-200"
                }`}
              >
                {msg.role === "assistant" ? (
                  <ReactMarkdown className="prose prose-sm max-w-none prose-slate">
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="mt-3 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type your message…"
            disabled={loading || starting}
            className="flex-1 rounded-xl border-slate-300"
          />
          <Button
            onClick={sendMessage}
            disabled={loading || starting || !input.trim()}
            className="bg-slate-900 hover:bg-slate-800 rounded-xl px-4"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}