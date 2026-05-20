import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Code, 
  Brain, 
  Building2, 
  Smartphone, 
  Mail, 
  Linkedin, 
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Clock,
  Calendar,
  Languages,
  ExternalLink,
  Users,
  Workflow,
  Shield,
  Rocket,
  TrendingUp,
  MessageSquare,
  Target,
  ShoppingCart,
  BarChart3
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const services = [
    {
      title: "AI Customer Acquisition",
      description: "Build AI-powered systems that find, qualify, and convert your most lucrative customers — automatically. Stop guessing. Start winning better deals.",
      icon: Target,
      color: "bg-blue-50 text-blue-700",
      price: "Custom",
      duration: "4–6 Weeks",
      features: ["AI Lead Scoring & Qualification", "Automated Outreach Funnels", "Deal Intelligence Dashboards", "CRM Integration & Automation"]
    },
    {
      title: "AI Chatbot for Business",
      description: "Deploy a 24/7 AI assistant that handles customer support, qualifies leads, answers product questions, and books meetings — for your website, app, or ecommerce store.",
      icon: MessageSquare,
      color: "bg-green-50 text-green-700",
      price: "From $2,500",
      duration: "1–2 Weeks",
      features: ["Custom-Trained on Your Business", "Website, WhatsApp & Messenger", "Lead Capture & Qualification", "Ecommerce & Support Ready"]
    },
    {
      title: "App User Growth Engine",
      description: "AI-driven marketing and onboarding systems that grow your app's user base — from first install to loyal power user. Built for startups that need traction fast.",
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-700",
      price: "Custom",
      duration: "6–8 Weeks",
      features: ["AI-Powered Onboarding Flows", "Behavioral Trigger Campaigns", "Retention & Re-engagement AI", "Growth Analytics Dashboard"]
    },
    {
      title: "AI Marketing Automation",
      description: "Replace repetitive marketing work with AI. Content, email campaigns, social scheduling, audience segmentation — all automated and personalized at scale.",
      icon: BarChart3,
      color: "bg-amber-50 text-amber-700",
      price: "Custom",
      duration: "2–4 Weeks",
      features: ["AI Content & Copywriting", "Email Sequence Automation", "Audience Segmentation AI", "Multi-Channel Campaign Management"]
    },
    {
      title: "Ecommerce AI Suite",
      description: "Give your store a competitive edge — AI-powered product recommendations, abandoned cart recovery, customer support chatbot, and personalized promotions.",
      icon: ShoppingCart,
      color: "bg-rose-50 text-rose-700",
      price: "From $3,500",
      duration: "2–3 Weeks",
      features: ["AI Product Recommendations", "Abandoned Cart Recovery", "24/7 Support Chatbot", "Personalized Promotions Engine"]
    },
    {
      title: "90-Day AI Product Sprint",
      description: "From idea to live, revenue-ready product in 90 days. Full-stack app development with AI features baked in — built to acquire users and scale without a rewrite.",
      icon: Rocket,
      color: "bg-indigo-50 text-indigo-700",
      price: "$90,000",
      duration: "90 Days",
      features: ["Full-Stack AI Application", "Built-in Growth Features", "Scalable Architecture", "Launch & Growth Support"]
    }
  ];

  const portfolio = [
    {
      title: "Mastermind Computer Genius",
      description: "Licensed dealer providing cutting-edge technology solutions and expert computer services.",
      icon: Code,
      color: "bg-orange-50 text-orange-700",
      url: createPageUrl("Mastermind"),
      linkType: 'internal'
    },
    {
      title: "ShaiLearnsAi",
      description: "Leading AI education and consulting, helping businesses understand and implement artificial intelligence.",
      icon: Brain,
      color: "bg-blue-50 text-blue-700",
      url: 'https://www.facebook.com/profile.php?id=61578037976542',
      linkType: 'external'
    },
    {
      title: "Elintegro App Factory",
      description: "Full-stack application development factory creating scalable, enterprise-grade software solutions.",
      icon: Smartphone,
      color: "bg-indigo-50 text-indigo-700",
      url: 'https://elintegro.com',
      linkType: 'external'
    }
  ];

  const expertise = [
    "AI-Powered Customer Acquisition",
    "Chatbots, Agents & RAG Systems",
    "Java · Spring Boot · Kotlin · Python",
    "Microservices, Docker & Kubernetes",
    "Fintech & Regulated System Design",
    "Full-Stack Product Development"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'ventures', 'portfolio', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const CompanyCardWrapper = ({ company, children }) => {
    const commonClasses = "block h-full transition-transform transform hover:-translate-y-1";
    if (company.linkType === 'internal') {
      return <Link to={company.url} className={commonClasses}>{children}</Link>;
    }
    if (company.linkType === 'external') {
      return <a href={company.url} target="_blank" rel="noopener noreferrer" className={commonClasses}>{children}</a>;
    }
    return <div className="h-full">{children}</div>;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-slate-800"
              >
                ShaiLev.Net
              </motion.div>
              {/* Mobile language switcher */}
              <Link to={createPageUrl("Hebrew")} className="md:hidden">
                <Button variant="outline" size="sm" className="gap-1 text-xs">
                  <Languages className="w-3 h-3" />
                  עברית
                </Button>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/contact">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                  💬 Chat with Me
                </Button>
              </Link>
              {['Services', 'Ventures', 'Portfolio', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
              <Link to={createPageUrl("Hebrew")}>
                <Button variant="outline" size="sm" className="gap-2">
                  <Languages className="w-4 h-4" />
                  עברית
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
                AI Growth Partner & Technical Architect
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Shai (Sasha) Lev
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                I help businesses and startups grow faster with AI-powered systems — customer acquisition, chatbots, marketing automation, and scalable apps. From strategy and architecture to shipped product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    💬 Chat with My AI Assistant
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                <img
                  src="https://media.base44.com/images/public/6880a7a1978e321bbb421490/986bb01b5_.jpg"
                  alt="Shai Lev"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              AI Solutions for Business Growth
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find better customers, grow your user base, automate your marketing, 
              and deploy AI that works for your business — not just your developers.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-600 to-transparent w-32 h-32 opacity-5"></div>
                  <CardContent className="p-8 relative">
                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <Badge className="bg-green-50 text-green-700 border-green-200 text-lg font-bold px-3 py-1">
                        {service.price}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600 font-medium">{service.duration}</span>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                      onClick={() => scrollToSection('contact')}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Ventures Section */}
      <section id="ventures" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technology Ventures
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Currently building Homerun — the production-ready vibe coding platform for the enterprise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/homerun-stealth" className="block group">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <CardContent className="p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-white">Homerun</h3>
                        <span className="text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/80 px-3 py-1 rounded-full">🔒 Stealth</span>
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed mb-4">
                        The vibe coding platform that doesn't leave a mess. AI-generated speed wrapped in clean, event-driven architecture — SOLID, fully testable, and built to scale from prototype to enterprise without a rewrite.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Kafka", "Spring Boot", "Next.js", "Kubernetes", "CQRS", "Open Core"].map(tag => (
                          <span key={tag} className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A selection of companies and projects shaping the future of technology,
              from AI education to enterprise software solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((company, index) => (
              <motion.div
                key={company.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <CompanyCardWrapper company={company}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col">
                    <CardContent className="p-8 text-center flex-grow flex flex-col">
                      <div className={`w-16 h-16 rounded-2xl ${company.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <company.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {company.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed flex-grow">
                        {company.description}
                      </p>
                    </CardContent>
                    <div className="p-4 text-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      Learn More
                      {company.linkType === 'external' ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </div>
                  </Card>
                </CompanyCardWrapper>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-purple-50 text-purple-700 border-purple-200">
                <Zap className="w-4 h-4 mr-2" />
                Senior Software Architect · 15+ Years
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                15+ Years Building Systems That Actually Work
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Senior Software Architect with 15+ years leading mission-critical backend and AI infrastructure — from fintech trading platforms to production AI at Migdal, one of Israel's largest insurance groups. I've shipped systems protecting billions in value across regulated environments.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I bring that same depth to businesses and startups: AI that's production-grade, not just a demo. Customer acquisition systems, chatbots, marketing automation, and scalable apps — built to last, not to rewrite.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Core Expertise
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {expertise.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-slate-700">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Grow with AI?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Whether you need more customers, a smarter chatbot, or a product built to scale — 
              let's talk about what AI can do for your business right now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                LinkedIn Profile
              </Button>
              <Link to="/cv">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-lg bg-transparent"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Resume / CV
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <p className="text-slate-400">
            © 2026 Shai Lev. All rights reserved. | ShaiLev.Net
          </p>
          <Link to="/homerun-stealth" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors">
            🔒 Stealth Startup Project — For Serious VCs Only
          </Link>
        </div>
      </footer>
    </div>
  );
}