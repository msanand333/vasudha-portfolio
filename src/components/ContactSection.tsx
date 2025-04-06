
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { AtSign, Instagram, Send, Twitter, Youtube } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would implement actual email sending functionality
    // For now, we'll simulate the form submission
    console.log("Sending message to: vasudhakrishnamoorthy@gmail.com");
    console.log("Form data:", formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      className={cn(
        "section-padding py-16 md:py-24 bg-secondary",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-4 font-serif reveal">Get In Touch</h2>
        <p className="text-center text-foreground/80 mb-8 md:mb-12 max-w-2xl mx-auto px-4 reveal">
          For casting inquiries, collaboration opportunities, or any other questions, please fill out the form below or reach out via social media.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto px-4">
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input 
                  name="email"
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  className="min-h-[150px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col space-y-6 justify-center reveal">
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Details</h3>
              <p className="flex items-center mb-3">
                <AtSign className="mr-3 h-5 w-5" />
                vasudhakrishnamoorthy@gmail.com
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-4">Representation</h3>
              <div className="space-y-2">
                <p><strong>Talent Agency:</strong> Creative Artists Management</p>
                <p><strong>Agent:</strong> Sarah Johnson</p>
                <p><strong>Email:</strong> sarah@creativeartists.com</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://instagram.com/vasudhakrishnamoorthy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://twitter.com/vasudhakrishna" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://youtube.com/vasudhakrishna" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
