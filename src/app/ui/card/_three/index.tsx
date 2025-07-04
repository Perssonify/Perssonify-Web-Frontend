import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Mail, } from "lucide-react";

export default function CardThree() {
  const coreServices = [
    {
      icon: Users,
      title: "Performance Marketing & Paid Media",
      description:
        "High-ROI ads that convert. Strategic campaign management across platforms to maximize your advertising spend and drive measurable results.",
      link: "/performance-marketing",
    },
    {
      icon: Users,
      title: "Social Media Marketing & Brand Engagement",
      description:
        "Build audience, spark action. Comprehensive social media strategies that create meaningful connections and drive engagement across all platforms.",
      link: "/social-media",
    },
    {
      icon: Mail,
      title: "Email Marketing & Marketing Automation",
      description:
        "Automate nurture, drive loyalty. Sophisticated email campaigns and automation workflows that convert prospects into loyal customers.",
      link: "/email-marketing",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 gap-y-8">
      {coreServices.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <Link href={service.link}>
            <Card className="h-full flex flex-col group cursor-pointer relative">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                    {service.description}
                  </p>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
