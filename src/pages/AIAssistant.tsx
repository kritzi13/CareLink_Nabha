import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bot, ArrowLeft, Upload, FileText, AlertTriangle, 
  CheckCircle, Clock, Camera, Mic, Send, Cloud,
  Heart, Activity, Thermometer, Droplets, Wind
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import aiAssistantIcon from "@/assets/ai-assistant-icon.png";

const AIAssistant = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedReport, setUploadedReport] = useState<any>(null);

  const recentAnalyses = [
    {
      id: 1,
      type: "Blood Test",
      date: "Today",
      status: "completed",
      riskLevel: "low",
      summary: "All parameters within normal range. Continue current lifestyle.",
      alerts: []
    },
    {
      id: 2,
      type: "Chest X-Ray",
      date: "2 days ago",
      status: "completed", 
      riskLevel: "medium",
      summary: "Mild respiratory congestion detected. Monitor symptoms.",
      alerts: [
        "Cold weather may worsen breathing - use warm clothing",
        "Avoid dusty areas during harvest season"
      ]
    }
  ];

  const healthAlerts = [
    {
      id: 1,
      type: "Weather Alert",
      priority: "high",
      message: "Cold wave warning for next 3 days. Asthma patients should take extra precautions.",
      icon: <Wind className="w-5 h-5" />,
      action: "View Prevention Tips"
    },
    {
      id: 2,
      type: "Seasonal Advisory", 
      priority: "medium",
      message: "Flu cases increasing in Nabha area. Consider getting vaccinated.",
      icon: <Thermometer className="w-5 h-5" />,
      action: "Book Vaccination"
    },
    {
      id: 3,
      type: "Medicine Reminder",
      priority: "low", 
      message: "Your BP medication refill is due in 3 days.",
      icon: <Heart className="w-5 h-5" />,
      action: "Order Refill"
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsAnalyzing(true);
      
      // Simulate AI analysis
      setTimeout(() => {
        setUploadedReport({
          name: file.name,
          type: "Blood Test Report",
          analysisResult: {
            riskLevel: "medium",
            findings: [
              "Blood sugar slightly elevated (125 mg/dL)",
              "Cholesterol within normal range", 
              "Hemoglobin levels good"
            ],
            recommendations: [
              "Reduce sugar intake in diet",
              "Take 30-minute walks daily",
              "Follow up in 2 weeks"
            ],
            alerts: [
              "Pre-diabetic condition detected",
              "Monitor blood sugar regularly"
            ]
          }
        });
        setIsAnalyzing(false);
        
        toast({
          title: "Report Analysis Complete",
          description: "Your health report has been analyzed. Check the results below.",
        });
      }, 3000);
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Message Sent",
      description: "Our AI assistant will respond shortly with personalized health advice.",
    });
    
    setMessage("");
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low": return "text-success";
      case "medium": return "text-warning";  
      case "high": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-destructive bg-destructive/10";
      case "medium": return "border-warning bg-warning/10";
      case "low": return "border-success bg-success/10";
      default: return "border-border";
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
            <img src={aiAssistantIcon} alt="AI Assistant" className="w-8 h-8" />
            <span className="font-bold">AI Health Assistant</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Your AI Health Assistant</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload health reports for instant analysis and get personalized health alerts in your language
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <Card className="card-healthcare">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-primary" />
                  <span>Upload Health Report</span>
                </CardTitle>
                <CardDescription>
                  Upload blood tests, X-rays, or other medical reports for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {isAnalyzing ? (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto animate-pulse">
                          <Bot className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Analyzing Your Report...</h3>
                          <p className="text-sm text-muted-foreground">Our AI is examining your health data</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center mx-auto">
                          <FileText className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Drop your report here</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Supports PDF, JPG, PNG files up to 10MB
                          </p>
                          <Button variant="outline">
                            Choose File
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      Take Photo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mic className="w-4 h-4 mr-2" />
                      Voice Input
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analysis Result */}
            {uploadedReport && (
              <Card className="card-healthcare">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Analysis Results</span>
                    <Badge variant="secondary">{uploadedReport.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Risk Assessment */}
                    <div className={`p-4 rounded-lg border-2 ${
                      uploadedReport.analysisResult.riskLevel === 'medium' 
                        ? 'border-warning bg-warning/10' 
                        : 'border-success bg-success/10'
                    }`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className={`w-5 h-5 ${getRiskColor(uploadedReport.analysisResult.riskLevel)}`} />
                        <span className="font-semibold">Risk Level: {uploadedReport.analysisResult.riskLevel.toUpperCase()}</span>
                      </div>
                    </div>

                    {/* Findings */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Findings</h4>
                      <div className="space-y-2">
                        {uploadedReport.analysisResult.findings.map((finding: string, index: number) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                            <span className="text-sm">{finding}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h4 className="font-semibold mb-3">Recommendations</h4>
                      <div className="space-y-2">
                        {uploadedReport.analysisResult.recommendations.map((rec: string, index: number) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Activity className="w-4 h-4 text-primary mt-0.5" />
                            <span className="text-sm">{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Alerts */}
                    {uploadedReport.analysisResult.alerts.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 text-warning">Important Alerts</h4>
                        <div className="space-y-2">
                          {uploadedReport.analysisResult.alerts.map((alert: string, index: number) => (
                            <div key={index} className="flex items-start space-x-2 p-3 bg-warning/10 rounded-lg">
                              <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                              <span className="text-sm">{alert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button className="btn-healthcare">
                        Save to Health Records
                      </Button>
                      <Button variant="outline">
                        Share with Doctor
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Chat Interface */}
            <Card className="card-healthcare">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <span>Ask Health Questions</span>
                </CardTitle>
                <CardDescription>
                  Get instant answers about your health in Punjabi, Hindi, or English
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Ask me about your symptoms, medications, or health concerns..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[100px]"
                  />
                  
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      Languages: ਪੰਜਾਬੀ | हिंदी | English
                    </div>
                    <Button onClick={handleSendMessage} className="btn-healthcare">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Health Alerts */}
            <Card className="card-healthcare">
              <CardHeader>
                <CardTitle className="text-lg">Health Alerts</CardTitle>
                <CardDescription>Personalized alerts based on your location and health profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthAlerts.map((alert) => (
                    <div key={alert.id} className={`p-4 rounded-lg border ${getPriorityColor(alert.priority)}`}>
                      <div className="flex items-start space-x-3">
                        <div className="text-foreground">{alert.icon}</div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm mb-1">{alert.type}</p>
                          <p className="text-xs text-muted-foreground mb-2">{alert.message}</p>
                          <Button size="sm" variant="outline" className="text-xs">
                            {alert.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Analyses */}
            <Card className="card-healthcare">
              <CardHeader>
                <CardTitle className="text-lg">Recent Analyses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAnalyses.map((analysis) => (
                    <div key={analysis.id} className="p-3 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm">{analysis.type}</span>
                        <Badge variant="outline" className={getRiskColor(analysis.riskLevel)}>
                          {analysis.riskLevel}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{analysis.summary}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{analysis.date}</span>
                        <Button size="sm" variant="ghost" className="text-xs">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-healthcare">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  View Health History
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Cloud className="w-4 h-4 mr-2" />
                  Export Reports
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Schedule Check-up
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;