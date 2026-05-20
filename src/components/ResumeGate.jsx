import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { base44 } from "@/api/base44Client";
import { Download, X } from "lucide-react";

const DOCS = {
  en: {
    url: "https://media.base44.com/files/public/6880a7a1978e321bbb421490/e51868833_SHAISASHALEVSeniorSoftwareEngineer_SoftwareArchitect972-54-365-2017connectshailev.docx",
    filename: "ShaiLev-Resume-EN.docx",
    label: "Download English"
  },
  he: {
    url: "https://media.base44.com/files/public/6880a7a1978e321bbb421490/8d7ebf577_1.docx",
    filename: "ShaiLev-Resume-HE.docx",
    label: "הורד עברית"
  }
};

export default function ResumeGate() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const openModal = (selectedLang) => {
    setLang(selectedLang);
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "" });
    setError("");
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");
    await base44.entities.LeadInquiry.create({
      name: form.name,
      email: form.email,
      notes: `Phone: ${form.phone} | Downloaded resume (${lang})`,
      inquiry_type: "Other",
      status: "New"
    });
    setLoading(false);
    setSubmitted(true);
    const doc = DOCS[lang];
    const link = document.createElement("a");
    link.href = doc.url;
    link.download = doc.filename;
    link.click();
  };

  return (
    <>
      <div className="flex gap-2 flex-wrap">
        <Button
          className="gap-2 bg-slate-900 hover:bg-slate-800 text-white"
          onClick={() => openModal("en")}
        >
          <Download className="w-4 h-4" />
          Download .docx
        </Button>
        <Button
          className="gap-2 bg-blue-700 hover:bg-blue-800 text-white"
          onClick={() => openModal("he")}
        >
          <Download className="w-4 h-4" />
          עברית
        </Button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-4">🎉</div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Thanks!</h2>
                <p className="text-slate-600 mb-4">Your download should have started. I'll be in touch soon.</p>
                <Button onClick={() => setOpen(false)} className="bg-slate-900 hover:bg-slate-800 text-white">
                  Close
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Get My Resume</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Leave your details and the .docx will download instantly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white gap-2"
                    disabled={loading}
                  >
                    <Download className="w-4 h-4" />
                    {loading ? "Saving..." : "Download Resume"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}