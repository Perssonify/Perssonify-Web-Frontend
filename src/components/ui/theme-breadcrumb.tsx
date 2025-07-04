"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ThemeBreadcrumb: React.FC<{
  parentLabel?: string;
  parentHref?: string;
}> = ({ parentLabel, parentHref }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const formatLabel = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const buildHref = (index: number) => {
    return "/" + pathSegments.slice(0, index + 1).join("/");
  };

  const segments = [...pathSegments];
  // Do NOT remove the first segment when parentLabel is provided; always show Home / Parent / Current Page
  // This ensures three segments are always shown on solution subpages.

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList className="gap-1 sm:gap-1">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <div className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-xs font-medium">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Home className="w-3 h-3" />
                Home
              </Link>
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {parentLabel && parentHref && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight className="w-2 h-2" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <div className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-xs font-medium">
                  <Link
                    href={parentHref}
                    className="hover:text-primary transition-colors"
                  >
                    {parentLabel}
                  </Link>
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator>
              <ChevronRight className="w-2 h-2" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              {index === segments.length - 1 ? (
                <BreadcrumbPage className="text-foreground font-medium">
                  <div className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-xs font-medium">
                    {formatLabel(segment)}
                  </div>
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <div className="inline-flex items-center px-3 sm:px-3 py-2 sm:py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-xs font-medium">
                    <Link
                      href={
                        parentHref && parentLabel
                          ? parentHref +
                            "/" +
                            segments.slice(0, index + 1).join("/")
                          : buildHref(index)
                      }
                      className="hover:text-primary transition-colors"
                    >
                      {formatLabel(segment)}
                    </Link>
                  </div>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ThemeBreadcrumb;
