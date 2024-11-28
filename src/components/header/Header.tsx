"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { SidebarTrigger } from "../ui/sidebar";

export default function Header() {
  const pathname = usePathname();

  // Processa o caminho da URL para gerar os breadcrumbs
  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment); // Remove strings vazias

  return (
    <header className="flex w-full h-16 bg-[--bg-main] fixed z-10 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4 bg-transparent">
        <SidebarTrigger className="-ml-1 bg-white" />
        <Separator className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {/* Adiciona o item inicial ("Home") */}
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            {/* Gera breadcrumbs dinamicamente com base no caminho */}
            {pathSegments.map((segment, index) => {
              const isLast = index === pathSegments.length - 1;
              const href = "/" + pathSegments.slice(0, index + 1).join("/");

              return (
                <React.Fragment key={href}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-[--color-label]">
                        {segment}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
