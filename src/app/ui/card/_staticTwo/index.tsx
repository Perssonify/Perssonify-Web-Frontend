"use client";

import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@perssonify.com",
    description: "Get in touch for collaboration",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Speak directly with our team",
  },
];

export default function StaticTwo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
        >
          <Card className="p-6 h-full">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="font-medium text-foreground mb-1 break-words">
                  {info.details}
                </p>
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
