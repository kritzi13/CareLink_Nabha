import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Phone, CreditCard, Users, ArrowLeft, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    ayushmanCard: "",
    firstName: "",
    lastName: "",
    language: "",
    familyMembers: [],
    agreedToTerms: false
  });

  const languages = [
    { value: "punjabi", label: "ਪੰਜਾਬੀ (Punjabi)" },
    { value: "hindi", label: "हिंदी (Hindi)" },
    { value: "english", label: "English" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Final registration
      toast({
        title: "Registration Successful!",
        description: "Welcome to Nabha Health. You can now access all our services.",
      });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border">
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
            <span className="font-bold">Nabha Health</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    step >= stepNum 
                      ? "bg-primary border-primary text-primary-foreground" 
                      : "border-border text-muted-foreground"
                  }`}>
                    {step > stepNum ? <Check className="w-5 h-5" /> : stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div className={`w-12 h-0.5 ml-2 ${
                      step > stepNum ? "bg-primary" : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card className="card-healthcare">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {step === 1 && "Create Your Account"}
                {step === 2 && "Personal Information"}
                {step === 3 && "Family & Preferences"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Register with your phone or Ayushman Bharat card"}
                {step === 2 && "Tell us about yourself"}
                {step === 3 && "Set up your family profile and language preferences"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="pl-10"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="text-center text-sm text-muted-foreground">
                        OR
                      </div>

                      <div>
                        <Label htmlFor="ayushman">Ayushman Bharat Card Number</Label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="ayushman"
                            type="text"
                            placeholder="Enter your Ayushman card number"
                            className="pl-10"
                            value={formData.ayushmanCard}
                            onChange={(e) => setFormData({...formData, ayushmanCard: e.target.value})}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          This will help us check your eligibility for subsidized healthcare
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary-light p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Secure Registration</p>
                          <p className="text-xs text-muted-foreground">Your information is encrypted and protected</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="राम / Ram"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="सिंह / Singh"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Preferred Language</Label>
                      <Select value={formData.language} onValueChange={(value) => setFormData({...formData, language: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preferred language" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang.value} value={lang.value}>
                              {lang.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground mt-2">
                        All health information and consultations will be available in this language
                      </p>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold">Family Members</Label>
                      <p className="text-sm text-muted-foreground mb-4">
                        Add family members to manage their health from one account
                      </p>
                      
                      <div className="border border-dashed border-border rounded-lg p-6 text-center">
                        <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground mb-2">No family members added yet</p>
                        <Button type="button" variant="outline" size="sm">
                          Add Family Member
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="terms" 
                          checked={formData.agreedToTerms}
                          onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
                        />
                        <div className="text-sm">
                          <Label htmlFor="terms" className="text-sm cursor-pointer">
                            I agree to the Terms of Service and Privacy Policy
                          </Label>
                          <p className="text-muted-foreground text-xs mt-1">
                            By registering, you agree to receive health updates and consultation reminders
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-healthcare-blue-light p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">What's included:</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Check className="w-3 h-3 text-success" />
                          <span>Free health consultations</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-3 h-3 text-success" />
                          <span>AI health report analysis</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-3 h-3 text-success" />
                          <span>24/7 emergency support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-3 h-3 text-success" />
                          <span>Community volunteer network</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                      Previous
                    </Button>
                  )}
                  <Button 
                    type="submit" 
                    className="btn-healthcare ml-auto"
                    disabled={step === 3 && !formData.agreedToTerms}
                  >
                    {step === 3 ? "Complete Registration" : "Continue"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <button className="text-primary hover:underline" onClick={() => navigate("/")}>
                Sign in here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;