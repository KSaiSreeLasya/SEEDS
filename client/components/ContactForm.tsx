import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import { submitInquiry } from "@/lib/supabase";

interface ContactFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  type: "project" | "call" | "plan";
}

export default function ContactForm({
  isOpen,
  onOpenChange,
  type,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
    company: "",
    industry: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isProjectForm = type === "project";
  const isPlanForm = type === "plan";
  const title = isProjectForm
    ? "Start a Project"
    : isPlanForm
      ? "Get Your 90-Day Plan"
      : "Schedule a Call";
  const description = isProjectForm
    ? "Tell us about your project and let's discuss how we can help."
    : isPlanForm
      ? "Let's create a customized 90-day lead generation plan for your business."
      : "Let's schedule a time to discuss your needs.";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the data object
      const submitData: Record<string, string | undefined> = {
        inquiry_type: type,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      // Add type-specific fields
      if (isPlanForm) {
        submitData.company = formData.company;
        submitData.industry = formData.industry;
        submitData.budget = formData.budget;
        submitData.timeline = formData.timeline;
      } else if (type === "call") {
        submitData.preferred_date = formData.date;
        submitData.preferred_time = formData.time;
      }

      // Submit to Supabase
      await submitInquiry(submitData as any);

      // Show success alert
      const successTitle = isProjectForm
        ? "Project Inquiry Sent!"
        : isPlanForm
          ? "Plan Request Received!"
          : "Call Scheduled!";

      const successMessage = isProjectForm
        ? "We'll review your project details and get back to you soon."
        : isPlanForm
          ? "We'll create your customized 90-day lead generation plan and contact you shortly."
          : "We'll confirm your preferred date and time shortly.";

      await Swal.fire({
        icon: "success",
        title: successTitle,
        text: successMessage,
        confirmButtonText: "Great!",
        confirmButtonColor: "#22c55e",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        date: "",
        time: "",
        company: "",
        industry: "",
        budget: "",
        timeline: "",
      });
      onOpenChange(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";

      await Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: errorMessage || "Please try again later.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {isPlanForm && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select industry</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="fintech">Fintech</option>
                    <option value="saas">SaaS</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Monthly Budget</Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select budget</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k+">$50K+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (This week)</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="exploring">Still exploring</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {!isProjectForm && !isPlanForm && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={
                isProjectForm
                  ? "Tell us about your project..."
                  : isPlanForm
                    ? "What are your main goals for lead generation?"
                    : "Any additional details..."
              }
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[120px]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
