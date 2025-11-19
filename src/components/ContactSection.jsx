import { Facebook, Instagram, Linkedin, Mail, MapPin,  SendIcon } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setToastMessage('Email format is incorrect!');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      return;
    }

    
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { name, email, message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setToastMessage('Thank you for your message. I will get back to you soon!');
      setToastType('success');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      form.reset();
    })
    .catch((err) => {
      setToastMessage('Failed to send message. Please try again later.');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      console.error(err);
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold mb-6 text-left">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className='mt-2'>
                  
                  <a href="mailto:nusrattrisha81@gmail.com" className="text-muted-foreground hover:text-primary transition-colors ">
                    nusrattrisha81@gmail.com
                  </a>
                </div>
              </div>

              

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className='mt-2'>
                  
                  <span className="text-muted-foreground">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

           
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-left">Contact With Me</h4>
              <div className="flex space-x-6 justify-start md:justify-start">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nusrat-trisha-036469350">
                  <Linkedin className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/nusrat_jahann1/">
                  <Instagram className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/share/16ffQKFAZd/?mibextid=wwXIfr">
                  <Facebook className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          
          <div className="bg-card border  p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>

              <div>
                
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Message"
                  rows={5}
                />
              </div>

              <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                Send Message
                <SendIcon size={16} />
              </button>
            </form>
          </div>
        </div>

       
        {showToast && (
          <div className={`fixed bottom-6 right-6 px-4 py-3 rounded-md shadow-lg z-50 ${
            toastType === 'success' ? 'bg-primary text-white' : 'bg-red-500 text-white'
          }`}>
            {toastMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;


