import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Zap, Users, BarChart, Rocket } from 'lucide-react';

export default function MastermindHebrew() {
  const offerings = [
    {
      title: "פיתוח אתרי אינטרנט ומשפכים מבוססי AI",
      description: "צרו משפכים ממירים ואתרים חכמים שמושכים ומשמרים לקוחות.",
      icon: Zap,
    },
    {
      title: "פיתוח תוכנה וארכיטקטורה טכנית",
      description: "בנו תוכנה יציבה וניתנת להרחבה עם ארכיטקטורה נקייה המיועדת לצמיחה ארוכת טווח.",
      icon: Rocket,
    },
    {
      title: "ייעוץ בניהול מוצר ו-DevOps",
      description: "יעלו את תהליך הפיתוח שלכם מהרעיון ועד להשקה עם תהליכים יעילים.",
      icon: BarChart,
    },
    {
      title: "אסטרטגיית צמיחה למייסדים וצוותים",
      description: "פתחו אסטרטגיות מעשיות להרחבת בסיס המשתמשים, ההכנסות והנוכחות בשוק.",
      icon: Users,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <header className="bg-white border-b py-4 px-6 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to={createPageUrl("Hebrew")}>
            <Button variant="outline" className="gap-2">
              חזרה לאתר הראשי
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <div className="text-xl font-bold text-slate-800">
            ShaiLev.Net
          </div>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              מאסטרמינד גאון מחשבים
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              ידוע גם כ-Shai Lev Consulting
            </p>
            <a href="https://linkedin.com/company/shai-lev-consulting" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="gap-2 mb-12">
                linkedin.com/company/shai-lev-consulting
                <Linkedin className="w-4 h-4" />
              </Button>
            </a>

            <div className="prose prose-lg max-w-none text-slate-700 text-right">
              <p>
                אני שי לב, מייסד 'מאסטרמינד גאון מחשבים', חברת ייעוץ עצמאית שהקמתי בשנת 2017 כדי לעזור למייסדים טכנולוגיים וחברות בצמיחה להגיע להכנסות של מיליון דולר ומעלה באמצעות AI, אוטומציה וביצוע תוכנה אסטרטגי.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">
                אני עובד באופן אישי עם לקוחות כדי:
              </h2>
              <ul>
                <li>להכפיל את בסיס הלקוחות שלהם באמצעות משפכים ואוטומציות מבוססי AI</li>
                <li>לגייס הון על ידי בניית פלטפורמות מוכנות למשקיעים ומערכות ניתנות להרחבה</li>
                <li>להשיק מוצרים מהר יותר עם ארכיטקטורה נקייה, צינורות DevOps ותכנון דרך חכם</li>
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
              השירותים המרכזיים שלי
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
            <div className="prose prose-lg max-w-none text-slate-700 text-right">
              <p>
                אני לא מנהל סוכנות. אני מביא תשומת לב עמוקה ואישית לכל פרויקט ופועל כשותף אמיתי — בונה, אסטרטג, וחושב ברמת ה-CTO, הכל בחבילה אחת. אם אתם רציניים לגבי צמיחה, אוטומציה והפיכת חזון למוצר, אני כאן כדי להפוך את זה למציאות.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}