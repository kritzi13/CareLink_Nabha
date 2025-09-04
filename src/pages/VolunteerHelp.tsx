import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, ArrowLeft, Heart, Car, Pill, Phone, MapPin, 
  Clock, CheckCircle, AlertCircle, User, Star, Send,
  HandHeart, Truck, Baby, Home, Utensils
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import volunteerIcon from "@/assets/volunteer-icon.png";

const VolunteerHelp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("request");
  const [helpType, setHelpType] = useState("");
  const [urgency, setUrgency] = useState("medium");

  const helpTypes = [
    {
      id: "transport",
      name: "Transportation",
      icon: <Car className="w-6 h-6" />,
      description: "Need ride to hospital or clinic",
      volunteers: 12
    },
    {
      id: "medicine",
      name: "Medicine Support",
      icon: <Pill className="w-6 h-6" />,
      description: "Help with medicine costs or pickup",
      volunteers: 8
    },
    {
      id: "childcare",
      name: "Child Care",
      icon: <Baby className="w-6 h-6" />,
      description: "Temporary childcare during medical visits",
      volunteers: 6
    },
    {
      id: "food",
      name: "Food & Nutrition",
      icon: <Utensils className="w-6 h-6" />,
      description: "Nutritious meals during illness",
      volunteers: 10
    },
    {
      id: "homecare",
      name: "Home Care",
      icon: <Home className="w-6 h-6" />,
      description: "Basic home care and assistance",
      volunteers: 15
    },
    {
      id: "emergency",
      name: "Emergency Support",
      icon: <AlertCircle className="w-6 h-6" />,
      description: "Urgent medical emergency assistance",
      volunteers: 20
    }
  ];

  const activeRequests = [
    {
      id: 1,
      type: "Transport",
      patient: "Rajesh Kumar",
      location: "Village Bhankharpur",
      destination: "Civil Hospital Nabha",
      urgency: "high",
      status: "volunteer_assigned",
      volunteer: "Simran Kaur",
      requestTime: "2 hours ago",
      estimatedTime: "30 mins"
    },
    {
      id: 2,
      type: "Medicine",
      patient: "Elderly Woman",
      location: "Sector 12, Nabha",
      description: "Need BP medicine, cannot afford full cost",
      urgency: "medium", 
      status: "pending",
      requestTime: "5 hours ago"
    }
  ];

  const volunteers = [
    {
      id: 1,
      name: "Gurpreet Singh", 
      type: "Transport Volunteer",
      rating: 4.9,
      completed: 45,
      location: "Nabha City",
      availability: "Available now",
      specialties: ["Emergency Transport", "Hospital Rides"],
      phone: "+91-98765-43210",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Manjeet Kaur",
      type: "Medicine Support",
      rating: 4.8,
      completed: 32,
      location: "Rajpura Road",
      availability: "Available in 1 hour",
      specialties: ["Medicine Delivery", "Pharmacy Assistance"],
      phone: "+91-98765-43211",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Raman Sharma",
      type: "Emergency Volunteer",
      rating: 5.0,
      completed: 67,
      location: "Civil Hospital Area",
      availability: "24/7 Emergency",
      specialties: ["Medical Emergency", "Ambulance Support"],
      phone: "+91-98765-43212",
      image: "/placeholder.svg"
    }
  ];

  const ngos = [
    {
      name: "Sarbat Da Bhala Foundation",
      type: "Healthcare NGO",
      services: ["Free Medicine", "Transport", "Emergency Care"],
      contact: "+91-98765-00001",
      location: "Nabha, Punjab"
    },
    {
      name: "Rural Health Initiative",
      type: "Community Health",
      services: ["Mobile Clinics", "Health Education", "Nutrition Support"],
      contact: "+91-98765-00002", 
      location: "Patiala District"
    }
  ];

  const handleSubmitRequest = () => {
    toast({
      title: "Help Request Submitted",
      description: "A volunteer will be assigned to you within 30 minutes. You'll receive updates via SMS.",
    });
  };

  const getUrgencyColor = (level: string) => {
    switch (level) {
      case "high": return "border-destructive bg-destructive/10 text-destructive";
      case "medium": return "border-warning bg-warning/10 text-warning";
      case "low": return "border-success bg-success/10 text-success";
      default: return "border-border";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-success";
      case "volunteer_assigned": return "text-primary";
      case "pending": return "text-warning";
      default: return "text-muted-foreground";
    }
  };

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
            <img src={volunteerIcon} alt="Volunteer Help" className="w-8 h-8" />
            <span className="font-bold">Community Help</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Community Support Network</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with volunteers and NGOs for transportation, medicine, and emergency support
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="request">Request Help</TabsTrigger>
            <TabsTrigger value="volunteers">Find Volunteers</TabsTrigger>
            <TabsTrigger value="status">My Requests</TabsTrigger>
            <TabsTrigger value="ngos">NGO Partners</TabsTrigger>
          </TabsList>

          {/* Request Help Tab */}
          <TabsContent value="request">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="card-healthcare">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <HandHeart className="w-5 h-5 text-primary" />
                      <span>Request Community Help</span>
                    </CardTitle>
                    <CardDescription>
                      Select the type of help you need and provide details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Help Type Selection */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">What kind of help do you need?</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {helpTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              helpType === type.id
                                ? "border-primary bg-primary-light"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => setHelpType(type.id)}
                          >
                            <div className="flex items-center space-x-3 mb-2">
                              <div className={`p-2 rounded-lg ${
                                helpType === type.id ? "bg-primary text-primary-foreground" : "bg-muted"
                              }`}>
                                {type.icon}
                              </div>
                              <div>
                                <h3 className="font-semibold">{type.name}</h3>
                                <p className="text-xs text-muted-foreground">{type.volunteers} volunteers available</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{type.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {helpType && (
                      <>
                        {/* Urgency Level */}
                        <div>
                          <Label>Urgency Level</Label>
                          <Select value={urgency} onValueChange={setUrgency}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low - Can wait a few hours</SelectItem>
                              <SelectItem value="medium">Medium - Needed within 2 hours</SelectItem>
                              <SelectItem value="high">High - Urgent, needed ASAP</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Location Details */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="pickup">Pickup Location</Label>
                            <Input id="pickup" placeholder="Your current location" />
                          </div>
                          <div>
                            <Label htmlFor="destination">Destination (if transport)</Label>
                            <Input id="destination" placeholder="Where you need to go" />
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <Label htmlFor="description">Describe your situation</Label>
                          <Textarea
                            id="description"
                            placeholder="Please provide details about your situation, any special requirements, etc."
                            className="min-h-[100px]"
                          />
                        </div>

                        {/* Contact Information */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Your Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                          </div>
                          <div>
                            <Label htmlFor="emergency-contact">Emergency Contact</Label>
                            <Input id="emergency-contact" placeholder="Family member phone" />
                          </div>
                        </div>

                        <Button className="btn-healthcare w-full" onClick={handleSubmitRequest}>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Help Request
                        </Button>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <Card className="card-healthcare">
                  <CardHeader>
                    <CardTitle className="text-lg">Response Times</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Emergency</span>
                      <Badge className="bg-destructive text-destructive-foreground">15 mins</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Transport</span>
                      <Badge className="bg-warning text-warning-foreground">30 mins</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Medicine</span>
                      <Badge className="bg-success text-success-foreground">1-2 hours</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-healthcare">
                  <CardHeader>
                    <CardTitle className="text-lg">Emergency Contacts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Ambulance</span>
                      <Button size="sm" variant="outline">
                        <Phone className="w-3 h-3 mr-1" />
                        108
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Police</span>
                      <Button size="sm" variant="outline">
                        <Phone className="w-3 h-3 mr-1" />
                        100
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Fire</span>
                      <Button size="sm" variant="outline">
                        <Phone className="w-3 h-3 mr-1" />
                        101
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Volunteers Tab */}
          <TabsContent value="volunteers">
            <div className="grid lg:grid-cols-3 gap-6">
              {volunteers.map((volunteer) => (
                <Card key={volunteer.id} className="card-healthcare">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{volunteer.name}</h3>
                        <p className="text-sm text-muted-foreground">{volunteer.type}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Rating</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-warning text-warning" />
                          <span className="text-sm font-medium">{volunteer.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Completed</span>
                        <span className="text-sm font-medium">{volunteer.completed} helps</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{volunteer.location}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{volunteer.availability}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {volunteer.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Phone className="w-3 h-3 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" className="btn-healthcare flex-1">
                        Request Help
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Status Tab */}
          <TabsContent value="status">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Your Help Requests</h2>
              
              {activeRequests.map((request) => (
                <Card key={request.id} className="card-healthcare">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">{request.type} Request</h3>
                        <p className="text-sm text-muted-foreground">Patient: {request.patient}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getUrgencyColor(request.urgency)}>
                          {request.urgency} priority
                        </Badge>
                        <Badge variant="outline" className={getStatusColor(request.status)}>
                          {request.status === "volunteer_assigned" ? "Volunteer Assigned" : "Pending"}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">From: {request.location}</span>
                        </div>
                        {request.destination && (
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">To: {request.destination}</span>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Requested: {request.requestTime}</span>
                        </div>
                        {request.volunteer && (
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">Volunteer: {request.volunteer}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {request.status === "volunteer_assigned" && (
                      <div className="bg-success/10 border border-success p-3 rounded-lg mb-4">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm font-medium">Volunteer is on the way!</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Expected arrival in {request.estimatedTime}
                        </p>
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Phone className="w-3 h-3 mr-1" />
                        Call Volunteer
                      </Button>
                      <Button size="sm" variant="outline">
                        Track Status
                      </Button>
                      {request.status === "pending" && (
                        <Button size="sm" variant="destructive">
                          Cancel Request
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* NGOs Tab */}
          <TabsContent value="ngos">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Partner NGOs</h2>
                <p className="text-muted-foreground">
                  Organizations working to provide healthcare support in rural Punjab
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {ngos.map((ngo, index) => (
                  <Card key={index} className="card-healthcare">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                          <Heart className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{ngo.name}</h3>
                          <p className="text-sm text-muted-foreground">{ngo.type}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Services Provided:</p>
                        <div className="flex flex-wrap gap-2">
                          {ngo.services.map((service, serviceIndex) => (
                            <Badge key={serviceIndex} variant="secondary">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{ngo.contact}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{ngo.location}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Phone className="w-3 h-3 mr-1" />
                          Contact
                        </Button>
                        <Button size="sm" className="btn-healthcare flex-1">
                          Request Support
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VolunteerHelp;