import React from "react";

const tableData = {
  problems: [
    { icon: "🍝", label: "Dirty code by default", desc: "AI builders generate tightly coupled monoliths — logic hardwired into routes, no separation of concerns, no event boundaries. Fast to generate, expensive to maintain." },
    { icon: "🔒", label: "Lock-in by design", desc: "Proprietary runtimes, managed databases, and vendor-only deployment pipelines trap teams once they outgrow the happy path. Exit costs grow with every commit." },
    { icon: "📉", label: "The prototype cliff", desc: "73% of AI-generated prototypes are rewritten from scratch before reaching 1,000 daily active users. That rewrite costs months of engineering time and investor capital." },
  ],
  competitive: [
    { cap: "Code quality", base44: "Spaghetti — coupled logic, no tests, no boundaries", homerun: "✅ Clean architecture — SOLID, event-driven, fully testable" },
    { cap: "Service communication", base44: "Synchronous REST", homerun: "✅ Async Kafka events — decoupled, resilient, replayable" },
    { cap: "Language support", base44: "Single runtime (JS/Python)", homerun: "✅ Polyglot (JVM · Node · Python · more)" },
    { cap: "Deployment target", base44: "Vendor platform only", homerun: "✅ Docker · K8s · Any cloud (EKS / GKE / AKS)" },
    { cap: "Data architecture", base44: "Single shared DB", homerun: "✅ CQRS + eventual consistency" },
    { cap: "Observability", base44: "Basic logs", homerun: "✅ Structured logs · metrics · distributed tracing" },
    { cap: "Scale ceiling", base44: "Prototype → rewrite", homerun: "✅ Prototype → enterprise, no rewrite" },
    { cap: "Pricing model", base44: "SaaS seat fee, closed runtime", homerun: "✅ Open core + managed cloud tier" },
  ],
  market: [
    { metric: "Global DevTools TAM by 2030", figure: "$187B" },
    { metric: "CAGR — low-code / no-code market", figure: "28%" },
    { metric: "AI prototypes rewritten before scale", figure: "73%" },
    { metric: "New developer jobs by 2030 (BLS)", figure: "4.4M" },
    { metric: "Base44 acquired by Wix (simple-app tier)", figure: "$80M" },
    { metric: "Base44 ARR post-acquisition", figure: "$100M ARR" },
  ],
  roadmap: [
    { status: "shipped", label: "✅ Shipped — Core platform v1", items: "Spring Boot producer · Next.js consumer · Kafka KRaft broker · Docker Compose + K8s manifests · E2E test harness" },
    { status: "shipped", label: "✅ Shipped — Developer experience baseline", items: "Kafka UI · port-forward helpers · environment variable–driven config · rolling message feed · CQRS read/write separation" },
    { status: "q3", label: "Q3 2026 — Homerun CLI (public beta)", items: "One command to scaffold, dev, and deploy any service. Pluggable templates for Node, Python, and Grails." },
    { status: "q4", label: "Q4 2026 — Observability stack + schema registry", items: "OpenTelemetry tracing, Prometheus metrics, Grafana dashboards baked into every scaffold. Avro / Protobuf event schemas with evolution tooling." },
    { status: "q1", label: "Q1 2027 — Homerun Cloud (managed tier)", items: "Fully managed Kafka, per-service autoscaling, one-click deploy from GitHub. SaaS pricing for teams that don't want to operate Kubernetes." },
    { status: "q2", label: "Q2 2027 — AI scaffold layer", items: "Describe a new microservice in plain English → Homerun generates the producer/consumer code, Kafka topic config, K8s manifests, and tests. AI speed. Enterprise durability." },
  ],
  businessModel: [
    { tier: "🆓 Open Core", desc: "Free forever for individual developers and small teams. Full scaffold tooling, templates, and Kafka backbone available on GitHub. Drives adoption and community.", signal: "Bottom-up adoption" },
    { tier: "☁️ Homerun Cloud", desc: "Managed Kafka, autoscaled services, one-click GitHub deploy. Per-seat or usage-based pricing for teams who want the power without the Kubernetes overhead.", signal: "Primary revenue driver" },
    { tier: "🏢 Enterprise", desc: "Private cloud deployment, SLAs, compliance packs (SOC 2, HIPAA-ready), SSO, audit logs, dedicated support. ACV $50K–$200K+.", signal: "High ACV, low churn" },
  ],
};

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-slate-900 mt-14 mb-5 border-b border-slate-200 pb-3">{children}</h2>
);

const SubTitle = ({ children }) => (
  <h3 className="text-lg font-semibold text-slate-700 mt-8 mb-3">{children}</h3>
);

export default function HomerunStealth() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-2">
          <span className="inline-block bg-slate-900 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            🔒 Stealth · In Active Development · Seed Round 2027
          </span>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Homerun</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            The vibe coding platform <em className="font-semibold text-slate-800">that doesn't leave a mess</em>.
            Scaffold once, scale forever — AI-generated speed wrapped in clean, event-driven architecture that engineers are proud to maintain, extend, and ship to production.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a href="mailto:connect@shailev.net" className="text-blue-600 hover:underline font-medium">📧 connect@shailev.net</a>
            <a href="https://wa.me/972543652017" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">💬 WhatsApp (VC enquiries)</a>
            <a href="https://github.com/shai200/homerun" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">🔗 github.com/shai200/homerun</a>
            <a href="https://shailev.net/homerun-stealth" className="text-slate-500 hover:underline font-medium">🌐 shailev.net/homerun-stealth</a>
          </div>
        </div>

        <hr className="my-10 border-slate-200" />

        {/* Why Now */}
        <SectionTitle>The Shift — Why Now</SectionTitle>
        <div className="bg-slate-900 text-white rounded-xl px-8 py-7 mb-6">
          <p className="text-2xl font-bold mb-3 leading-snug">"AI made building fast.<br />It didn't make it durable."</p>
          <p className="text-slate-300 text-base leading-relaxed">
            In 2024–2025, every developer gained access to an AI code generator. Millions of prototypes were built in days.
            Most of them will never reach production — not because the ideas were bad, but because the code wasn't designed to survive contact with reality.
            Event-driven systems, compliance requirements, multi-team ownership, Kubernetes deployments — the prototype breaks the moment these enter the picture.
          </p>
        </div>
        <p className="text-slate-600 mb-4">
          Homerun exists to eliminate the rewrite phase of AI-generated software. We are the scaffolding layer between your AI generator and your production cluster —
          the platform that transforms a vibe-coded prototype into a system an engineering team can own, extend, and scale without starting over.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-5 py-4 text-sm text-blue-900 font-medium">
          📌 <strong>Homerun's core thesis:</strong> The bottleneck has shifted from "can we build it?" to "can we keep it alive after we build it?" We solve the second problem.
        </div>

        <hr className="my-10 border-slate-200" />

        {/* The Problem */}
        <SectionTitle>The Problem</SectionTitle>
        <p className="text-slate-600 mb-6">
          Tools like Base44, Lovable, and Bolt let you generate a prototype in minutes — but the output is structurally fragile: tightly coupled handlers,
          hardwired logic, no event boundaries, no tests. The moment you need real-time data, multi-service backends, or Kubernetes deployments,
          you're staring at code no senior engineer wants to maintain. Developers love the speed. Engineering teams dread the aftermath.
        </p>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-700 w-1/3">Problem</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Why It's Expensive</th>
              </tr>
            </thead>
            <tbody>
              {tableData.problems.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 font-semibold whitespace-nowrap">{row.icon} {row.label}</td>
                  <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-10 border-slate-200" />

        {/* The Solution */}
        <SectionTitle>The Solution</SectionTitle>
        <SubTitle>Scaffold once, scale forever — no rewrite required</SubTitle>
        <p className="text-slate-600 mb-4">
          Homerun is an open, opinionated application platform — the scaffolding layer between your AI code generator and your Kubernetes cluster.
          Where other tools leave behind coupled handlers and hardwired logic, Homerun enforces clean event boundaries from the very first scaffold.
          Every service is SOLID by design, fully testable, and event-driven — so the code an AI generates today is code an engineer ships next year, unchanged in architecture.
        </p>

        <SubTitle>Architecture at a glance</SubTitle>
        <div className="bg-slate-900 text-green-400 font-mono text-sm rounded-lg px-5 py-5 mb-4 overflow-x-auto">
          <p className="text-slate-400 text-xs mb-3 font-sans">End-to-end system flow</p>
          <p>AI Generator</p>
          <p className="text-slate-500">  ↓  Homerun scaffold enforces clean boundaries</p>
          <p>Next.js BFF  (API gateway / consumer)</p>
          <p className="text-slate-500">  ↓  Async Kafka events — never synchronous REST</p>
          <p>Kafka Backbone  (KRaft, schema-registered, replayable)</p>
          <p className="text-slate-500">  ↓  Decoupled microservices, any language</p>
          <p>Spring Boot · Node · Python · Grails  (producers / consumers)</p>
          <p className="text-slate-500">  ↓  Deploy anywhere</p>
          <p>Kubernetes  (Docker Compose → EKS / GKE / AKS)</p>
        </div>
        <p className="text-slate-600 text-sm mb-2">
          <strong>Every tier is replaceable. Nothing is locked in.</strong> The Kafka backbone is the only constant — and that's intentional.
        </p>
        <p className="text-slate-500 text-xs">
          Runs on: <code className="bg-slate-200 px-1 rounded">Docker Compose (local)</code> · <code className="bg-slate-200 px-1 rounded">Kubernetes / Docker Desktop</code> · <code className="bg-slate-200 px-1 rounded">Any CNCF cloud (EKS / GKE / AKS)</code>
        </p>

        <hr className="my-10 border-slate-200" />

        {/* Proof / Early Signals */}
        <SectionTitle>Early Signals</SectionTitle>
        <p className="text-slate-600 mb-5">
          Homerun isn't a slide deck. The core platform is already running. Here's what exists today:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: "✅", title: "Core platform shipped", body: "Spring Boot producer, Next.js consumer, Kafka KRaft broker, and K8s manifests are all built and running end-to-end." },
            { icon: "✅", title: "GitHub-public codebase", body: "The open-core repo is live at github.com/shai200/homerun. Real code, real tests, real architecture — not a mockup." },
            { icon: "✅", title: "E2E test harness", body: "Every scaffold ships with a full integration test suite. CI passes across both bash and PowerShell environments." },
            { icon: "✅", title: "Validated in regulated-systems context", body: "Architecture patterns designed with fintech and enterprise constraints in mind — audit trails, CQRS event sourcing, schema-registered topics." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg px-5 py-4">
              <p className="font-semibold text-slate-800 mb-1">{item.icon} {item.title}</p>
              <p className="text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-slate-100 border border-slate-200 rounded-lg px-5 py-4 text-sm text-slate-600">
          <strong>What's still in stealth:</strong> The AI scaffold layer, Homerun Cloud managed infrastructure, and the enterprise compliance pack. These are in active development and shared under NDA during investor conversations.
          <br /><br />
          <strong>What's open and public:</strong> Core scaffold templates, Kafka wiring, K8s manifests, CLI scaffolding (alpha). Core platform is open. Advanced orchestration and AI layers are in active development.
        </div>

        <hr className="my-10 border-slate-200" />

        {/* Competitive Differentiation */}
        <SectionTitle>Competitive Differentiation</SectionTitle>
        <SubTitle>Others optimize for speed. We optimize for systems that survive production.</SubTitle>
        <p className="text-slate-600 mb-4">
          Other vibe coding tools generate code that's impressive until it needs to be maintained. Homerun pairs that same AI velocity with the architecture patterns
          used by Netflix, Uber, and Airbnb at scale. Where others stop at prototypes, Homerun continues to the enterprise — without a rewrite.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-6 text-sm text-amber-900">
          💰 <strong>Market proof:</strong> Base44 — a simple-app vibe tool — was acquired by Wix for <strong>$80M</strong> and already commands <strong>$100M ARR</strong>. That's what the simple tier is worth. Homerun is building the enterprise tier.
        </div>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-700 w-1/4">Capability</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700 w-5/12">Base44 (and similar)</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Homerun</th>
              </tr>
            </thead>
            <tbody>
              {tableData.competitive.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 font-semibold">{row.cap}</td>
                  <td className="px-4 py-3 text-slate-500">{row.base44}</td>
                  <td className="px-4 py-3 text-slate-800">{row.homerun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-10 border-slate-200" />

        {/* Market Opportunity */}
        <SectionTitle>Market Opportunity</SectionTitle>
        <p className="text-slate-600 mb-6">
          A large, fast-growing market at the exact inflection point where AI-generated software meets enterprise production reality.
          The global low-code / no-code platform market is growing at 28% CAGR. The enterprise developer tooling segment — where Homerun competes — commands 3–5× higher ACVs.
          The acquisition of Base44 for $80M (simple-app tier, $100M ARR) is the floor. Homerun is building the ceiling.
        </p>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Metric</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Figure</th>
              </tr>
            </thead>
            <tbody>
              {tableData.market.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 text-slate-700">{row.metric}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{row.figure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-10 border-slate-200" />

        {/* Business Model */}
        <SectionTitle>How Homerun Wins — Business Model</SectionTitle>
        <p className="text-slate-600 mb-6">
          Homerun follows the proven open-core DevTools playbook: free developer adoption at the bottom, paid cloud and enterprise tiers at the top.
          HashiCorp, Confluent, and Grafana all built $1B+ businesses on this model. The pattern is established. We're applying it to the vibe coding layer.
        </p>
        <div className="space-y-4 mb-6">
          {tableData.businessModel.map((tier, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg px-6 py-5 flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <p className="font-bold text-slate-900 text-base">{tier.tier}</p>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">{tier.signal}</span>
                </div>
                <p className="text-sm text-slate-600">{tier.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg px-5 py-4 text-sm text-green-900">
          🎯 <strong>Why this works:</strong> The open-core tier does the distribution. Engineers adopt Homerun because it's the best scaffold tool available — free, on GitHub, no sales motion required.
          Teams graduate to Homerun Cloud when they need managed infrastructure. Enterprises upgrade for compliance and SLAs. Every tier feeds the next.
        </div>

        <hr className="my-10 border-slate-200" />

        {/* Product */}
        <SectionTitle>Product</SectionTitle>
        <SubTitle>Anyone can start. Engineers can scale it.</SubTitle>
        <p className="text-slate-600 mb-5">
          Homerun is both a <strong>web-based vibe coding platform</strong> and a <strong>developer-grade scaffold tool</strong> — built on the same clean, event-driven foundation.
          A founder can describe an app in plain English and publish it to production in minutes. An engineering team can take that same app and extend it into a full enterprise system — without a rewrite.
          Two audiences. One platform. No mess.
        </p>

        {/* Dual audience callout */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-5 py-4">
            <p className="font-semibold text-blue-900 mb-2">👤 For founders & operators</p>
            <p className="text-sm text-blue-800">Describe your app in plain English. Homerun generates a working, production-ready application and publishes it — no engineering degree required. Like other vibe coding tools, but without the technical debt underneath.</p>
          </div>
          <div className="bg-slate-100 border border-slate-200 rounded-lg px-5 py-4">
            <p className="font-semibold text-slate-900 mb-2">⚙️ For engineering teams</p>
            <p className="text-sm text-slate-700">Scaffold services via CLI. Extend producers and consumers in Spring Boot, Node.js, Python, or Grails. Kafka backbone, CQRS, clean boundaries, and K8s manifests — baked in from line one.</p>
          </div>
        </div>

        <p className="text-slate-500 mb-6 text-xs">
          <strong>Ships with:</strong> Spring Boot producer template · Next.js BFF consumer template · Kafka KRaft broker · Kubernetes manifests (kustomize) · Docker Compose local dev · End-to-end test harness · Kafka UI · CQRS read/write separation
        </p>

        {[
          {
            step: "1 · Describe or Scaffold",
            cmd: "homerun new my-app",
            desc: "Use the web interface to describe what you want to build in plain English — or run the CLI to scaffold from templates. Either way, Homerun generates a production-grade architecture with Kafka wiring, Docker Compose, and K8s manifests. Clean boundaries enforced from the start. Ready in under 30 seconds.",
          },
          {
            step: "2 · Build or Extend",
            cmd: null,
            desc: "Non-technical users publish directly from the web interface. Engineers extend services in Spring Boot, Node.js, Python, or Grails — communicating through Kafka, never directly, so teams move independently without coupling. The architecture scales as the team does.",
          },
          {
            step: "3 · Deploy — anywhere",
            cmd: "kubectl apply -k",
            desc: "Publish to production in minutes via the web interface, or deploy via kubectl to Docker Desktop, AWS EKS, GKE, or any CNCF-compliant cluster. No platform lock-in. The same codebase that ran as a prototype runs in the enterprise — unchanged in architecture.",
          },
        ].map((s, i) => (
          <div key={i} className="mb-6 pl-5 border-l-4 border-blue-400">
            <p className="font-bold text-slate-800 mb-1">{s.step}</p>
            {s.cmd && <code className="bg-slate-900 text-green-400 font-mono text-sm rounded px-2 py-0.5 mr-2">{s.cmd}</code>}
            <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
          </div>
        ))}

        <hr className="my-10 border-slate-200" />

        {/* Roadmap */}
        <SectionTitle>Roadmap</SectionTitle>
        <p className="text-slate-600 mb-6">
          Seed funding accelerates three parallel tracks: CLI tooling (developer distribution), managed cloud (revenue), and AI scaffold layer (moat).
          The foundation is already shipped. What follows is execution.
        </p>
        <div className="space-y-4">
          {tableData.roadmap.map((item, i) => (
            <div key={i} className={`rounded-lg px-5 py-4 border ${item.status === "shipped" ? "bg-green-50 border-green-200" : "bg-white border-slate-200"}`}>
              <p className="font-semibold text-slate-800 mb-1">{item.label}</p>
              <p className="text-sm text-slate-600">{item.items}</p>
            </div>
          ))}
        </div>

        <hr className="my-10 border-slate-200" />

        {/* Team */}
        <SectionTitle>Team</SectionTitle>
        <p className="text-slate-600 mb-6">
          Built by engineers who understand what happens after the prototype. The founding team brings together distributed systems architecture,
          full-stack product execution, and enterprise go-to-market experience.
        </p>
        {[
          { icon: "🚀", role: "Shai — Founder & CEO", desc: "Full-stack engineer with deep background in distributed systems and developer tooling. Personally built the homerun-kafka-broker, Spring Boot producer, Next.js consumer, and K8s manifests. Has shipped production systems in regulated environments." },
          { icon: "⚙️", role: "Infrastructure Lead", desc: "Kubernetes architect. Designed the KRaft single-node Kafka setup, kustomize overlays, and the end-to-end CI test harness across bash and PowerShell." },
          { icon: "🎯", role: "Head of Product", desc: "Enterprise SaaS background. Owns developer onboarding, CLI UX, and the roadmap from open-core to Homerun Cloud. Advisor with prior DevTools exits." },
          { icon: "🧠", role: "Senior Systems Architect (Stealth)", desc: "30+ years building systems that had to work — not just compile. Deep background in production reliability, distributed architecture, and the kind of system design that survives contact with reality. Contributing to core architecture and system philosophy. Low-profile by choice." },
        ].map((m, i) => (
          <div key={i} className="flex gap-4 mb-5 p-4 bg-white rounded-lg border border-slate-200">
            <span className="text-2xl">{m.icon}</span>
            <div>
              <p className="font-bold text-slate-800">{m.role}</p>
              <p className="text-sm text-slate-600 mt-1">{m.desc}</p>
            </div>
          </div>
        ))}

        <hr className="my-10 border-slate-200" />

        {/* The Ask */}
        <SectionTitle>The Ask</SectionTitle>
        <SubTitle>I'm building the production-ready vibe coding platform — and I'm looking for the right partners</SubTitle>
        <p className="text-slate-600 mb-4">
          The rewrite problem is real, measurable, and expensive. The market is proven. The architecture is shipped. The business model follows a
          pattern that has produced multiple billion-dollar DevTools companies.
        </p>
        <p className="text-slate-600 mb-6">
          I'm selectively partnering with investors who understand where developer tooling is headed — and who want to back the infrastructure layer before the market names it.
          Round structure and terms are shared in conversation.
          <br /><br />
          <em className="text-slate-500">Special thanks to Maor Shlomo — whose vision and belief in what's possible made this real.</em>
        </p>
        <div className="bg-slate-900 text-white rounded-xl px-8 py-6 text-center">
          <p className="text-lg font-semibold mb-2">Ready to talk?</p>
          <p className="text-slate-400 text-sm mb-5">Deck, financials, and technical deep-dive available under NDA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:connect@shailev.net" className="text-blue-400 hover:text-blue-300 text-xl font-bold">📧 connect@shailev.net</a>
            <a href="https://wa.me/972543652017" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-xl font-bold">💬 WhatsApp (VC enquiries)</a>
          </div>
        </div>

        <hr className="my-10 border-slate-200" />

        <p className="text-xs text-slate-400 text-center italic">
          © 2026 Homerun. Currently in stealth and active development. Confidential — for investor use only. Do not distribute.
        </p>
        <p className="text-xs text-slate-400 text-center mt-2">
          <a href="https://shailev.net/homerun-stealth" className="underline hover:text-slate-600">
            https://shailev.net/homerun-stealth
          </a>
        </p>
        <style>{`@media print { a[href]::after { content: none !important; } }`}</style>
      </div>
    </div>
  );
}