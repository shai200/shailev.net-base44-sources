import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Zap, Users, BarChart, Rocket } from 'lucide-react';

export default function Mastermind() {
  const offerings = [
    {
      title: "AI Website & Funnel Development",
      description: "Create high-converting funnels and intelligent websites that attract and retain customers.",
      icon: Zap,
    },
    {
      title: "Software Development & Technical Architecture",
      description: "Build scalable, robust software with clean architecture designed for long-term growth.",
      icon: Rocket,
    },
    {
      title: "Product Management & DevOps Consulting",
      description: "Streamline your development process from idea to deployment with efficient pipelines.",
      icon: BarChart,
    },
    {
      title: "Growth Strategy for Founders and Teams",
      description: "Develop actionable strategies to scale your user base, revenue, and market presence.",
      icon: Users,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b py-4 px-6 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to={createPageUrl("Home")}>
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Main Site
            </Button>
          </Link>
          <div className="text-xl font-bold text-slate-800">
            ShaiLev.Net
          </div>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Mastermind Computer Genius
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Also known as Shai Lev Consulting
            </p>
            <a href="https://linkedin.com/company/shai-lev-consulting" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="gap-2 mb-12">
                <Linkedin className="w-4 h-4" />
                linkedin.com/company/shai-lev-consulting
              </Button>
            </a>

            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                I’m Shai Lev, founder of Mastermind Computer Genius, a solo consultancy I launched in 2017 to help tech founders and growth-stage companies scale to $1M+ and beyond using AI, automation, and strategic software execution.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">
                I work hands-on with clients to:
              </h2>
              <ul>
                <li>Double their client base using AI-powered funnels and automations</li>
                <li>Raise capital by building investor-ready platforms and scalable systems</li>
                <li>Ship products faster with clean architecture, DevOps pipelines, and smart roadmapping</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              My Core Offerings
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {offerings.map((offering) => (
                <Card key={offering.title} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                      <offering.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{offering.title}</h3>
                    <p className="text-slate-600">{offering.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                I don’t run an agency. I bring deep, personal attention to every project and operate as a true partner — builder, strategist, and CTO-level thinker in one. If you're serious about scaling, automating, and turning vision into product, I’m here to make it real.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}