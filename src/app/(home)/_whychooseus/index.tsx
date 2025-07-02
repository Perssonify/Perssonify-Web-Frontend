'use client'; 
import React from 'react';
import { Target, Rocket, Shield, Gauge, Brain, Clock, TrendingUp, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';

const WhychooseUs: React.FC = () => {
  const unfairAdvantages = [
    {
      icon: Brain,
      title: 'We Think Different',
      description: 'Performance marketing brains solving business problems'
    },
    {
      icon: Gauge,
      title: 'We Move Different',
      description: 'Execution speed that breaks industry standards'
    },
    {
      icon: TrendingUp,
      title: 'We Deliver Different',
      description: 'Solutions that work today and improve tomorrow'
    }
  ];

  const whyAheadFeatures = [
    {
      icon: Brain,
      title: 'AI that thinks faster than your competition',
      description: ''
    },
    {
      icon: Target,
      title: 'Strategies built for tomorrow\'s rules',
      description: ''
    },
    {
      icon: Clock,
      title: 'Growth that happens while you sleep',
      description: ''
    }
  ];

  const whyChooseFeatures = [
    {
      icon: Clock,
      title: 'Speed Without Shortcuts',
      subtitle: 'We Move While Others Meet',
      description: 'Problems solved in days, not months. No endless meetings. Just results.'
    },
    {
      icon: Shield,
      title: 'Results That Stick',
      description: 'We don\'t just fix—we future-proof. Every solution gets better over time.'
    },
    {
      icon: Rocket,
      title: 'Lean But Lethal',
      description: 'Fortune 500 power. Startup speed. Zero bloat.'
    }
  ];

  return (
    <section className="section-padding-lg bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* The Unfair Advantage Section - FIRST */}
        <div className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 text-left "
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary text-left ">
              The Unfair <span className="text-primary">Advantage</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {unfairAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <advantage.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-3 text-lg sm:text-xl">{advantage.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-orange-50 text-orange-800 px-4 py-2 rounded-lg border border-orange-200">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <span className="font-semibold text-sm sm:text-base">Fair warning: Your competition won&apos;t see this coming.</span>
            </div>
          </motion.div>
        </div>

        {/* Why We're Ahead Section */}
        <div className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 text-left "
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary text-left ">
              Why We&apos;re <span className="text-primary">Ahead?</span>
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-primary mb-6 text-left ">
              The Future Called. We Answered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {whyAheadFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-3 text-base sm:text-lg leading-tight">{feature.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg sm:text-xl font-bold text-primary ">
              We don&apos;t predict trends. We create them.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 text-left "
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary text-left ">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1 text-lg">{feature.title}</h3>
                        {feature.subtitle && (
                          <p className="text-primary font-semibold text-sm mb-2">{feature.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg sm:text-xl font-bold text-primary ">
              Bottom line: We deliver growth while competitors are still planning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhychooseUs;