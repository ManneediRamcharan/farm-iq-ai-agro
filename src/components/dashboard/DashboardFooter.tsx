import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Tractor,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";

const DashboardFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Tractor className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">FarmIQ</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering farmers with smart technology and data-driven insights for sustainable agriculture.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start">
                About Us
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start">
                Our Services
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start">
                Success Stories
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start">
                Blog
              </Button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start">
                Help Center
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start">
                Contact Support
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start">
                Terms of Service
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@farmiq.com</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  Agricultural Technology Hub<br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} FarmIQ. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm">
              Terms of Service
            </Button>
            <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;