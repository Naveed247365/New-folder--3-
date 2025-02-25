"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User Response:", formData);
    // Here you can send formData to an API, email service, or database
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-center">Contact Us</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
              <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
              <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
              <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="text-primary" />
              <p>Plot No. 335, Doodha Village <br />Usmania Colony Liaquatabad Town,<br />Karachi.</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-primary" />
              <p>+923003925919</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-primary" />
              <p >abdulghaffarandsons@hotmail.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
