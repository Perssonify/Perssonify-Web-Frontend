"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CardTwo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
      {[
        {
          link: "/performance-marketing",
          icon: "/Growth Solutions Icons/PerformanceMarketing&PaidMedia.png",
          title: "Performance Marketing & Paid Media",
          desc: "High-ROI ads that convert.",
        },
        {
          link: "/social-media-marketing",
          icon: "/Growth Solutions Icons/Social Media Marketing & Brand Engagement.png",
          title: "Social Media Marketing & Brand Engagement",
          desc: "Build audience, spark action.",
        },
      ].map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="flex items-center gap-4 p-4 rounded-lg border bg-primary/10 dark:bg-primary/20 mb-3"
        >
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 object-contain dark:invert"
            />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <h5 className="font-semibold text-black dark:text-white text-sm mb-1 leading-tight line-clamp-2">
              {item.title}
            </h5>
            <p className="text-xs text-black dark:text-white leading-tight line-clamp-2">
              {item.desc}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 ml-2 flex-shrink-0" />
        </Link>
      ))}
    </div>
  );
}
