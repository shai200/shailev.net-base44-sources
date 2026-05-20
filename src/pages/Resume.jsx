import React from "react";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ResumeGate from "@/components/ResumeGate";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-widest border-b-2 border-slate-800 pb-1 mb-4">
      {title}
    </h2>
    {children}
  </div>
);

const Job = ({ title, company, location, period, bullets }) => (
  <div className="mb-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
      <div>
        <span className="font-bold text-slate-900">{title}</span>
        <span className="text-slate-600">, {company}</span>
        {location && <span className="text-slate-500">, {location}</span>}
      </div>
      <span className="text-sm text-slate-500 whitespace-nowrap">{period}</span>
    </div>
    <ul className="list-disc list-inside space-y-1">
      {bullets.map((b, i) => (
        <li key={i} className="text-slate-600 text-sm leading-relaxed">{b}</li>
      ))}
    </ul>
  </div>
);

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toolbar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Site
        </Link>
        <ResumeGate />
      </div>

      {/* Resume */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg my-8 px-10 py-12 print:shadow-none print:my-0">

        {/* Header */}
        <div className="mb-8 border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
            SHAI (SASHA) LEV
          </h1>
          <p className="text-lg text-slate-600 font-medium mb-4">
            Senior Software Engineer | Software Architect
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <a href="tel:+972543652017" className="flex items-center gap-1 hover:text-slate-900">
              <Phone className="w-4 h-4" /> +972-54-365-2017
            </a>
            <a href="mailto:connect@shailev.net" className="flex items-center gap-1 hover:text-slate-900">
              <Mail className="w-4 h-4" /> connect@shailev.net
            </a>
            <a href="https://linkedin.com/in/shailevcto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-900">
              <Linkedin className="w-4 h-4" /> linkedin.com/in/shailevcto
            </a>
          </div>
        </div>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-slate-600 leading-relaxed">
            Senior Software Architect with 15+ years of experience leading mission-critical backend and AI infrastructure development for fintech and regulated enterprises. An engineering leader focused on shipping high-stakes systems that protect billions in value through modern Java architecture and production-grade AI.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Job
            title="Full-Stack Software Engineer"
            company="Migdal – AI Division"
            location="Israel"
            period="Aug 2025 – Present"
            bullets={[
              "Designing and developing production-grade AI systems in regulated financial and insurance environments.",
              "Building backend services, APIs, and integrations for business-critical workflows and decision-support systems.",
              "Collaborating with Product and Data teams to deliver reliable, auditable AI automation beyond the POC stage."
            ]}
          />
          <Job
            title="Software Architect / Senior Backend Engineer"
            company="OttomaticTrading"
            location="Israel"
            period="Nov 2023 – Aug 2025"
            bullets={[
              "Designed and implemented backend services and automation for an automated trading platform.",
              "Owned the end-to-end architecture, reliability, and operational stability of scalable trading APIs.",
              "Led technical direction and execution to ensure high-performance integration with external systems."
            ]}
          />
          <Job
            title="Senior Software Engineer / Architect (Contract)"
            company="Evergreen Finance"
            location="Israel"
            period="Apr 2023 – Nov 2023"
            bullets={[
              "Executed rapid design and implementation of backend services and financial APIs under tight timelines.",
              "Solved complex production issues to ensure reliable delivery for business and technical stakeholders."
            ]}
          />
          <Job
            title="Senior Software Engineer / Algorithm Developer"
            company="Emagix"
            location="Israel"
            period="Jan 2020 – Apr 2023"
            bullets={[
              "Developed and maintained algorithmic and analytical systems for full-stack applications.",
              "Improved production system performance and reliability under evolving technical requirements."
            ]}
          />
          <Job
            title="Systems Administrator / DevOps & Integration Engineer"
            company="Isracard"
            location="Israel"
            period="Jan 2020 – Feb 2021"
            bullets={[
              "Supported mission-critical financial systems, enterprise integrations, and CI/CD pipelines.",
              "Managed deployments within regulated environments utilizing legacy and modern tech stacks."
            ]}
          />
          <Job
            title="Backend Developer → Chief Architect"
            company="prooV"
            location="Herzliya"
            period="Jun 2015 – Jun 2018"
            bullets={[
              "Led the backend architecture of a global SaaS platform and managed team-wide code reviews.",
              "Designed scalable frameworks while owning performance and long-term architectural maintainability."
            ]}
          />
          <Job
            title="Technical Lead / Software Architect"
            company="Elintegro"
            location="Israel"
            period="2000 – 2015"
            bullets={[
              "Led hands-on development of enterprise solutions and built internal rapid development frameworks.",
              "Designed the Dataframe Framework, a Grails-based engine reducing development time via database metadata."
            ]}
          />
        </Section>

        {/* Education */}
        <Section title="Education & Certifications">
          <p className="text-slate-700 font-medium">B.A. in Information Systems, Minor in Computer Science</p>
          <p className="text-slate-500 text-sm">Class of 2012</p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="space-y-2 text-sm text-slate-600">
            <p><span className="font-semibold text-slate-800">Languages:</span> Java, Kotlin, Python, TypeScript, C#</p>
            <p><span className="font-semibold text-slate-800">Frameworks & APIs:</span> Spring Boot, Grails, REST APIs, Microservices</p>
            <p><span className="font-semibold text-slate-800">AI / ML:</span> LLMs, Agents, RAG, Prompt Engineering</p>
            <p><span className="font-semibold text-slate-800">Infrastructure:</span> Docker, Kubernetes, OpenShift, AWS, GCP</p>
            <p><span className="font-semibold text-slate-800">Data:</span> SQL, Relational Databases, Vector DBs</p>
            <p><span className="font-semibold text-slate-800">DevOps:</span> Jenkins, CI/CD, Linux, System Design</p>
          </div>
        </Section>

        {/* Languages */}
        <Section title="Languages">
          <div className="flex gap-3 flex-wrap">
            <Badge variant="outline">English — Proficient</Badge>
            <Badge variant="outline">Hebrew — Native</Badge>
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects & Leadership">
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">Software Architect, Webus (2018–2020):</span> Built Node.js backend for ride-matching and mobility algorithms.</li>
            <li><span className="font-semibold text-slate-800">Technical Lead, Netivey Ayalon (2019):</span> Delivered a large-scale survey system on time and on budget.</li>
            <li><span className="font-semibold text-slate-800">Cryptocurrency Educator:</span> Experienced in building automated Bitcoin savings platforms and investment strategies.</li>
          </ul>
        </Section>

      </div>

      <p className="text-center text-xs text-slate-400 pb-8">© 2026 Shai Lev · shailev.net</p>
    </div>
  );
}