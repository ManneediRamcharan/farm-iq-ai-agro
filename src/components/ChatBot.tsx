import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your FarmIQ AI assistant. I can help you with crop recommendations, disease identification, weather queries, and more. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "What crops should I plant this season?",
    "How to identify tomato diseases?",
    "Current weather for farming?",
    "Government schemes available?"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("crop") || input.includes("plant")) {
      return "Based on your location and current season, I recommend considering tomatoes, wheat, or cotton. These crops show good profit potential with current market prices. Would you like detailed information about any specific crop?";
    } else if (input.includes("disease") || input.includes("pest")) {
      return "I can help identify plant diseases! You can upload an image of affected plants in the Disease Detection module, and I'll analyze it for you. Common issues this season include leaf blight and pest attacks. What symptoms are you observing?";
    } else if (input.includes("weather")) {
      return "Current weather conditions show 28°C with 65% humidity. There's a chance of rain tomorrow, which would be good for recently planted crops. Check the Weather & Alerts section for detailed forecasts and farming recommendations.";
    } else if (input.includes("price") || input.includes("market")) {
      return "Current market prices: Tomatoes ₹45/kg (+8%), Onions ₹25/kg (-3%), Rice ₹85/kg (+5%). Tomato prices are trending up - good time to sell! Visit the Marketplace for live updates and trading opportunities.";
    } else if (input.includes("scheme") || input.includes("government")) {
      return "Several government schemes are available: PM-KISAN (₹6000/year), Crop Insurance, Soil Health Card scheme, and various state subsidies. I can help you check eligibility and application processes. Which scheme interests you?";
    } else {
      return "I understand you need farming assistance! I can help with crop recommendations, disease identification, market prices, weather updates, and government schemes. Could you be more specific about what you'd like to know?";
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage();
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-hover-lift animate-pulse-glow z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'}`}>
      <Card className="border-0 shadow-hover-lift h-full">
        <CardHeader className="p-4 bg-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-lg">FarmIQ Assistant</CardTitle>
              <Badge className="bg-success text-success-foreground">Online</Badge>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="p-0 flex-1">
              <ScrollArea className="h-80 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-2 ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {message.sender === "bot" && (
                        <div className="p-1 bg-primary rounded-full">
                          <Bot className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-xs p-3 rounded-lg text-sm ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground ml-auto"
                            : "bg-muted"
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === "user" 
                            ? "text-primary-foreground/70" 
                            : "text-muted-foreground"
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>

                      {message.sender === "user" && (
                        <div className="p-1 bg-muted rounded-full">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex items-start space-x-2">
                      <div className="p-1 bg-primary rounded-full">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {messages.length === 1 && (
                <div className="p-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
                  <div className="space-y-2">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-left justify-start text-xs h-auto py-2"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about farming..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button size="sm" onClick={handleSendMessage} disabled={!inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Powered by FarmIQ AI • Available 24/7
              </p>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;