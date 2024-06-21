"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "sonner"


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaMapPin } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 619 764 8386",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "notrahulgupta@gmail.com",
  },
  {
    icon: <FaMapPin />,
    title: "Location",
    description: "San Diego, CA",
  },
];

import { motion } from "framer-motion";

const Contact = () => {

  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          toast("Message Sent", {
            description: `Response time 2-4 hours.`,
            action: {
              label: "OK",
              onClick: () => console.log("SUCCESS!"),
              }
           });
           
          form.current.reset();
          // You can add code here to show a success message to the user
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast("Message Failed", {
            description: `Please try again.`,
            action: {
              label: "OK",
              onClick: () => console.log("TRY AGAIN!"),
              }
           });
          // You can add code here to show an error message to the user
        },
      );
  };


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Send me a message</h3>
              <p className="text-white/60">
                For collaborations & special access requests.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                  type="text" 
                  name="firstName" 
                  placeholder="Firstname" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <Input 
                  type="text" 
                  name="lastName" 
                  placeholder="Lastname" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email address" 
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
