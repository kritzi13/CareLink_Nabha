import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Bot, Users, Pill, FileText, Phone, MapPin, Star } from "lucide-react";
import healthcareHero from "@/assets/healthcare-hero.jpg";
import consultationIcon from "@/assets/consultation-icon.png";
import aiAssistantIcon from "@/assets/ai-assistant-icon.png";
import pharmacyIcon from "@/assets/pharmacy-icon.png";
import volunteerIcon from "@/assets/volunteer-icon.png";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Doctor Consultation",
      description: "Video, audio & WhatsApp consultations with verified doctors",
      icon: <Stethoscope className="w-8 h-8 text-healthcare-blue" />,
      image: consultationIcon,
      route: "/consultation",
      color: "bg-healthcare-blue-light"
    },
    {
      title: "AI Health Assistant",
      description: "Smart analysis of health reports with personalized alerts",
      icon: <Bot className="w-8 h-8 text-primary" />,
      image: aiAssistantIcon,
      route: "/ai-assistant",
      color: "bg-primary-light"
    },
    {
      title: "Medicine & Pharmacy",
      description: "Digital prescriptions with local pharmacy stock check",
      icon: <Pill className="w-8 h-8 text-warm-orange" />,
      image: pharmacyIcon,
      route: "/pharmacy",
      color: "bg-orange-50"
    },
    {
      title: "Community Help",
      description: "Volunteer & NGO support for transport and medicine",
      icon: <Users className="w-8 h-8 text-success" />,
      image: volunteerIcon,
      route: "/volunteer-help",
      color: "bg-green-50"
    },
    {
      title: "Health Guides",
      description: "Offline health library in Punjabi, Hindi & English",
      icon: <FileText className="w-8 h-8 text-healthcare-blue" />,
      image: null,
      route: "/health-guides",
      color: "bg-blue-50"
    },
    {
      title: "Emergency Help",
      description: "One-tap emergency services with local ambulance",
      icon: <Phone className="w-8 h-8 text-destructive" />,
      image: null,
      route: "/emergency",
      color: "bg-red-50"
    }
  ];

  const stats = [
    { label: "Verified Doctors", value: "500+", icon: <Stethoscope className="w-5 h-5" /> },
    { label: "Active Users", value: "10,000+", icon: <Users className="w-5 h-5" /> },
    { label: "Health Reports Analyzed", value: "25,000+", icon: <Bot className="w-5 h-5" /> },
    { label: "Villages Covered", value: "150+", icon: <MapPin className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CareLink</h1>
              <p className="text-xs text-muted-foreground">ਕੇਅਰਲਿੰਕ | केयरलिंक</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="hidden sm:flex">
              <span className="text-xs">ਪੰਜਾਬੀ | हिंदी | English</span>
            </Badge>
            <Button variant="outline" onClick={() => navigate("/register")}>
              Register
            </Button>
            <Button className="btn-healthcare" onClick={() => navigate("/consultation")}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-primary-light text-primary">
                🏥 Rural Healthcare Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Healthcare for
                <span className="text-transparent bg-gradient-primary bg-clip-text"> Every Village</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                Connect with doctors, get AI health insights, and access community support - all in your local language.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-healthcare text-lg px-8 py-6" onClick={() => navigate("/register")}>
                Join CareLink
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => navigate("/consultation")}>
                Find a Doctor
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-primary-light border-2 border-background flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Trusted by 10,000+ families</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={healthcareHero} 
              alt="Healthcare Hero" 
              className="w-full h-auto rounded-2xl shadow-healthcare"
            />
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground p-4 rounded-xl shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Available</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">AI Assistant Active</div>
                  <div className="text-xs text-muted-foreground">Monitoring your health</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg mb-2">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Healthcare Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for better health - from consultations to community support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-feature group cursor-pointer"
                onClick={() => navigate(feature.route)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.image ? (
                      <img src={feature.image} alt={feature.title} className="w-10 h-10" />
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-healthcare">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of families who trust us with their healthcare needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => navigate("/register")}>
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-healthcare-blue">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">CareLink</span>
              </div>
              <p className="text-muted-foreground">
                Bringing quality healthcare to every village through technology and community support.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => navigate("/consultation")} className="block text-muted-foreground hover:text-primary">
                  Find Doctors
                </button>
                <button onClick={() => navigate("/ai-assistant")} className="block text-muted-foreground hover:text-primary">
                  AI Assistant
                </button>
                <button onClick={() => navigate("/health-guides")} className="block text-muted-foreground hover:text-primary">
                  Health Guides
                </button>
                <button onClick={() => navigate("/emergency")} className="block text-muted-foreground hover:text-primary">
                  Emergency Services
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📞 Emergency: 108</p>
                <p>💬 WhatsApp: +91-98765-43210</p>
                <p>📧 help@carelink.com</p>
                <p>🏥 Local Hospital Partnerships</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CareLink. Made with ❤️ for rural healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;