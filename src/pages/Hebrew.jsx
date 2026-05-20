import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Code, 
  Brain, 
  Building2, 
  Smartphone, 
  Mail, 
  Linkedin, 
  ArrowLeft,
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
  TrendingUp,
  MessageSquare,
  Target,
  ShoppingCart,
  BarChart3,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Hebrew() {
  const [activeSection, setActiveSection] = useState('hero');

  const services = [
    {
      title: "רכישת לקוחות בעזרת AI",
      description: "מערכות AI שמוצאות, מסננות וממירות את הלקוחות הרווחיים ביותר — אוטומטית. תפסיקו לנחש, תתחילו לנצח עסקאות טובות יותר.",
      icon: Target,
      color: "bg-blue-50 text-blue-700",
      price: "מותאם אישית",
      duration: "4–6 שבועות",
      features: ["ניקוד וסינון לידים בעזרת AI", "משפכי פנייה אוטומטיים", "דשבורד מודיעין עסקאות", "אינטגרציה ואוטומציה של CRM"]
    },
    {
      title: "צ'אטבוט AI לעסקים",
      description: "נציג AI זמין 24/7 שמטפל בתמיכת לקוחות, מסנן לידים, עונה על שאלות ומזמין פגישות — לאתר, לאפליקציה או לחנות האיקומרס שלכם.",
      icon: MessageSquare,
      color: "bg-green-50 text-green-700",
      price: "מ-$2,500",
      duration: "1–2 שבועות",
      features: ["מאומן על העסק שלכם", "אתר, WhatsApp ומסנג'ר", "לכידה וסינון לידים", "מוכן לאיקומרס ותמיכה"]
    },
    {
      title: "מנוע צמיחת משתמשים לאפליקציות",
      description: "מערכות שיווק וonboarding מבוססות AI שמגדילות את בסיס המשתמשים של האפליקציה — מהתקנה ראשונה ועד משתמש נאמן. לסטארטאפים שצריכים traction מהיר.",
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-700",
      price: "מותאם אישית",
      duration: "6–8 שבועות",
      features: ["תהליכי onboarding מבוססי AI", "קמפיינים מופעלי התנהגות", "AI לשימור ואחזור משתמשים", "דשבורד ניתוח צמיחה"]
    },
    {
      title: "אוטומציית שיווק בעזרת AI",
      description: "החליפו עבודת שיווק חוזרת ב-AI. תוכן, קמפיינים במייל, תזמון ברשתות חברתיות, פילוח קהלים — הכל אוטומטי ומותאם אישית בקנה מידה.",
      icon: BarChart3,
      color: "bg-amber-50 text-amber-700",
      price: "מותאם אישית",
      duration: "2–4 שבועות",
      features: ["תוכן וקופי בעזרת AI", "אוטומציית רצפי מייל", "פילוח קהלים חכם", "ניהול קמפיינים רב-ערוציים"]
    },
    {
      title: "חבילת AI לאיקומרס",
      description: "תנו לחנות שלכם יתרון תחרותי — המלצות מוצר, שחזור עגלות נטושות, צ'אטבוט תמיכה ומבצעים מותאמים אישית.",
      icon: ShoppingCart,
      color: "bg-rose-50 text-rose-700",
      price: "מ-$3,500",
      duration: "2–3 שבועות",
      features: ["המלצות מוצר בעזרת AI", "שחזור עגלות נטושות", "צ'אטבוט תמיכה 24/7", "מנוע מבצעים מותאמים"]
    },
    {
      title: "ספרינט מוצר AI - 90 יום",
      description: "מרעיון למוצר חי ומייצר הכנסות תוך 90 יום. פיתוח Full-Stack עם תכונות AI מובנות — בנוי לרכוש משתמשים ולגדול ללא שכתוב.",
      icon: Rocket,
      color: "bg-indigo-50 text-indigo-700",
      price: "$90,000",
      duration: "90 יום",
      features: ["אפליקציית AI מלאה", "תכונות צמיחה מובנות", "ארכיטקטורה ניתנת להרחבה", "תמיכה בהשקה וצמיחה"]
    }
  ];

  const companies = [
    {
      title: "מאסטרמינד גאון מחשבים",
      description: "עוסק מורשה המספק פתרונות טכנולוגיים מתקדמים ושירותי מחשב מומחים.",
      icon: Code,
      color: "bg-orange-50 text-orange-700",
      url: createPageUrl("MastermindHebrew"), // Added URL for internal link
      linkType: 'internal' // Added linkType
    },
    {
      title: "ShaiLearnsAi",
      description: "מוביל חינוך וייעוץ AI, עוזר לעסקים להבין וליישם בינה מלאכותית.",
      icon: Brain,
      color: "bg-blue-50 text-blue-700",
      url: 'https://www.facebook.com/profile.php?id=61578037976542', // Added URL for external link
      linkType: 'external' // Added linkType
    },
    {
      title: "אלינטגרו מפעל אפליקציות",
      description: "מפעל פיתוח Full-Stack היוצר פתרונות תוכנה ברמה ארגונית וניתנים להרחבה.",
      icon: Smartphone,
      color: "bg-indigo-50 text-indigo-700",
      url: 'https://elintegro.com', // Added URL for external link
      linkType: 'external' // Added linkType
    }
  ];

  const expertise = [
    "רכישת לקוחות מבוססת AI",
    "צ'אטבוטים, סוכנים ומערכות RAG",
    "Java · Spring Boot · Kotlin · Python",
    "Microservices, Docker ו-Kubernetes",
    "עיצוב מערכות פינטק וסביבות מפוקחות",
    "פיתוח מוצר Full-Stack"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'companies', 'about', 'contact'];
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

  // New CompanyCardWrapper component to handle internal/external links
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
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to={createPageUrl("Home")}>
                <Button variant="outline" size="sm" className="gap-2">
                  <Languages className="w-4 h-4" />
                  English
                </Button>
              </Link>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-slate-800"
              >
                ShaiLev.Net
              </motion.div>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { label: 'שירותים', id: 'services' },
                { label: 'חברות', id: 'companies' },
                { label: 'אודות', id: 'about' },
                { label: 'צור קשר', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
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
              className="text-right"
            >
              <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
                שותף צמיחה AI ואדריכל טכנולוגי
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                שי סשה לב
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                אני עוזר לעסקים וסטארטאפים לצמוח מהר יותר עם מערכות מבוססות AI — רכישת לקוחות, צ'אטבוטים, אוטומציית שיווק ואפליקציות שמתרחבות. מאסטרטגיה וארכיטקטורה ועד מוצר שיצא לאוויר.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  גלה שירותים
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg"
                >
                  צור קשר
                </Button>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    💬 שוחח עם העוזר שלי
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
                  alt="שי לב"
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
              פתרונות AI לצמיחה עסקית
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              מצאו לקוחות טובים יותר, הגדילו את בסיס המשתמשים, אוטומטו את השיווק ופרסו AI שעובד בשביל העסק שלכם — לא רק בשביל המפתחים.
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
                  <div className="absolute top-0 left-0 bg-gradient-to-br from-blue-600 to-transparent w-32 h-32 opacity-5"></div>
                  <CardContent className="p-8 relative text-right">
                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 mr-auto group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-green-50 text-green-700 border-green-200 text-lg font-bold px-3 py-1">
                        {service.price}
                      </Badge>
                      <h3 className="text-xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 justify-end">
                      <span className="text-sm text-slate-600 font-medium">{service.duration}</span>
                      <Calendar className="w-4 h-4 text-slate-500" />
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <span className="text-sm text-slate-600">{feature}</span>
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                      onClick={() => scrollToSection('contact')}
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      התחל עכשיו
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              מיזמים טכנולוגיים
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              מוביל מספר חברות חדשניות שמעצבות את עתיד הטכנולוגיה, 
              מחינוך AI ועד פתרונות תוכנה ארגוניים.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full" // Added h-full to the motion.div
              >
                <CompanyCardWrapper company={company}> {/* Wrapped with new component */}
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"> {/* Added flex flex-col */}
                    <CardContent className="p-8 text-center flex-grow flex flex-col"> {/* Added flex-grow flex flex-col */}
                      <div className={`w-16 h-16 rounded-2xl ${company.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <company.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {company.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed flex-grow"> {/* Added flex-grow */}
                        {company.description}
                      </p>
                    </CardContent>
                    {/* New section for "More Info" link */}
                    <div className="p-4 text-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                       {company.linkType === 'external' ? <ExternalLink className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                       למידע נוסף
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <Badge className="mb-6 bg-purple-50 text-purple-700 border-purple-200">
                <Zap className="w-4 h-4 ml-2" />
                אדריכל תוכנה בכיר · 15+ שנה
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                15+ שנה בבניית מערכות שעובדות באמת
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                אדריכל תוכנה בכיר עם 15+ שנות ניסיון בהובלת פיתוח backend ותשתיות AI קריטיות — ממערכות מסחר אלגוריתמי ועד AI בייצור במגדל, אחת מחברות הביטוח הגדולות בישראל. בניתי מערכות שמגינות על מיליארדי שקלים בסביבות מפוקחות.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                אני מביא את אותה רמה לעסקים וסטארטאפים: AI ברמת ייצור, לא רק דמו. מערכות רכישת לקוחות, צ'אטבוטים, אוטומציית שיווק ואפליקציות שמתרחבות — בנויות להישאר, לא לשכתוב.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-right">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    מומחיות עיקרית
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {expertise.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-slate-700">{skill}</span>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
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
              מוכנים לצמוח עם AI?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              בין אם אתם צריכים יותר לקוחות, צ'אטבוט חכם יותר, או מוצר שבנוי לגדול — בואו נדבר על מה שה-AI יכול לעשות לעסק שלכם עכשיו.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <Mail className="ml-2 w-5 h-5" />
                צור קשר
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg"
              >
                <Linkedin className="ml-2 w-5 h-5" />
                פרופיל לינקדאין
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2026 שי לב. כל הזכויות שמורות. | ShaiLev.Net
          </p>
        </div>
      </footer>
    </div>
  );
}