import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Stethoscope, ArrowLeft, Search, Video, Phone, MessageCircle, 
  Star, Clock, MapPin, Calendar, Filter, Heart, Brain, 
  Baby, Eye, Bone, Pill, Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [consultationType, setConsultationType] = useState("video");

  const specialties = [
    { id: "all", name: "All Specialties", icon: <Stethoscope className="w-4 h-4" /> },
    { id: "general", name: "General Medicine", icon: <Heart className="w-4 h-4" /> },
    { id: "pediatric", name: "Pediatrics", icon: <Baby className="w-4 h-4" /> },
    { id: "gynecology", name: "Gynecology", icon: <Users className="w-4 h-4" /> },
    { id: "orthopedic", name: "Orthopedics", icon: <Bone className="w-4 h-4" /> },
    { id: "ophthalmology", name: "Eye Specialist", icon: <Eye className="w-4 h-4" /> },
    { id: "neurology", name: "Neurology", icon: <Brain className="w-4 h-4" /> }
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Harpreet Singh",
      specialty: "General Medicine",
      experience: "15 years",
      rating: 4.8,
      reviews: 1250,
      languages: ["Punjabi", "Hindi", "English"],
      availability: "Available now",
      consultationFee: "Free (Ayushman)",
      location: "Nabha Civil Hospital",
      image: "/placeholder.svg",
      nextSlot: "2:30 PM Today"
    },
    {
      id: 2,
      name: "Dr. Simran Kaur",
      specialty: "Pediatrics",
      experience: "12 years",
      rating: 4.9,
      reviews: 890,
      languages: ["Punjabi", "Hindi", "English"],
      availability: "Available in 30 mins",
      consultationFee: "₹200",
      location: "Child Care Clinic, Patiala",
      image: "/placeholder.svg",
      nextSlot: "3:00 PM Today"
    },
    {
      id: 3,
      name: "Dr. Rajesh Sharma",
      specialty: "Orthopedics",
      experience: "20 years",
      rating: 4.7,
      reviews: 2100,
      languages: ["Hindi", "English"],
      availability: "Available tomorrow",
      consultationFee: "₹300",
      location: "Bone & Joint Clinic, Rajpura",
      image: "/placeholder.svg",
      nextSlot: "10:00 AM Tomorrow"
    }
  ];

  const consultationTypes = [
    {
      id: "video",
      name: "Video Call",
      icon: <Video className="w-5 h-5" />,
      description: "Face-to-face consultation via video",
      duration: "15-30 mins"
    },
    {
      id: "audio",
      name: "Voice Call", 
      icon: <Phone className="w-5 h-5" />,
      description: "Voice-only consultation",
      duration: "10-20 mins"
    },
    {
      id: "chat",
      name: "Text Chat",
      icon: <MessageCircle className="w-5 h-5" />,
      description: "Message-based consultation",
      duration: "Ongoing"
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      description: "Consult via WhatsApp",
      duration: "24/7 Support"
    }
  ];

  const handleBookConsultation = (doctor: any) => {
    toast({
      title: "Consultation Booked!",
      description: `Your ${consultationType} consultation with ${doctor.name} is scheduled for ${doctor.nextSlot}`,
    });
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || 
                            doctor.specialty.toLowerCase().includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">Doctor Consultation</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Find Your Doctor</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with verified doctors for video, voice, or chat consultations in your preferred language
          </p>
        </div>

        {/* Consultation Type Selection */}
        <Card className="card-healthcare mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Video className="w-5 h-5 text-primary" />
              <span>Choose Consultation Type</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    consultationType === type.id
                      ? "border-primary bg-primary-light"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setConsultationType(type.id)}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg ${
                      consultationType === type.id ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{type.name}</h3>
                      <p className="text-xs text-muted-foreground">{type.duration}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="card-healthcare sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search Doctor</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Doctor name or specialty"
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Specialty</label>
                  <div className="space-y-2">
                    {specialties.map((specialty) => (
                      <div
                        key={specialty.id}
                        className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-all ${
                          selectedSpecialty === specialty.id
                            ? "bg-primary-light text-primary"
                            : "hover:bg-muted"
                        }`}
                        onClick={() => setSelectedSpecialty(specialty.id)}
                      >
                        {specialty.icon}
                        <span className="text-sm">{specialty.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Filters */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Quick Filters</label>
                  <div className="space-y-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Available Now
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Free Consultation
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Punjabi Speaking
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Doctors List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Available Doctors ({filteredDoctors.length})</h2>
              <Select defaultValue="rating">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                  <SelectItem value="availability">Available Now</SelectItem>
                  <SelectItem value="price">Lowest Price</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="card-healthcare">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Doctor Info */}
                      <div className="flex-1">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center">
                            <Stethoscope className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold">{doctor.name}</h3>
                            <p className="text-muted-foreground">{doctor.specialty}</p>
                            <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                            
                            <div className="flex items-center space-x-4 mt-2">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-warning text-warning" />
                                <span className="text-sm font-medium">{doctor.rating}</span>
                                <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                              </div>
                              
                              <Badge variant={doctor.availability.includes("now") ? "default" : "secondary"}>
                                {doctor.availability}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{doctor.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">Next slot: {doctor.nextSlot}</span>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground mb-2">Languages:</p>
                            <div className="flex flex-wrap gap-1">
                              {doctor.languages.map((lang, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {lang}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-lg font-semibold text-primary">{doctor.consultationFee}</p>
                            <p className="text-xs text-muted-foreground">Per consultation</p>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button 
                              className="btn-consultation" 
                              onClick={() => handleBookConsultation(doctor)}
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;