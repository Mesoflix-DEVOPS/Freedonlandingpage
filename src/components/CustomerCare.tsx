import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CustomerCare = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const whatsappMessage = `Hello! My name is ${name || 'Customer'}. ${message}`;
    const whatsappUrl = `https://wa.me/254794432921?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setMessage("");
    setName("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Customer Care Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <div className="relative">
            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-full w-16 h-16 btn-premium shadow-2xl animate-float"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            {/* Welcome Message */}
            <div className="absolute bottom-20 right-0 bg-card border border-border rounded-lg p-3 shadow-xl max-w-xs animate-fade-in">
              <div className="text-sm text-foreground font-medium mb-1">
                Welcome! Talk to us 👋
              </div>
              <div className="text-xs text-muted-foreground">
                We are live and ready to help you!
              </div>
              <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
            </div>
          </div>
        )}
      </div>

      {/* Customer Care Form Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
          <Card className="w-80 trading-card shadow-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-chart-green rounded-full animate-pulse"></div>
                  <CardTitle className="text-lg text-foreground">
                    Live Support
                  </CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Send us a message and we'll respond immediately!
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-foreground">
                  Your Name (Optional)
                </Label>
                <Input
                  id="customerName"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerMessage" className="text-foreground">
                  Your Message
                </Label>
                <Textarea
                  id="customerMessage"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="bg-input border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="w-full btn-premium"
              >
                <Send className="h-4 w-4 mr-2" />
                Send via WhatsApp
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                You'll be redirected to WhatsApp to complete your message
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CustomerCare;