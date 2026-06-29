"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";

const Page = () => {
  const { setTheme } = useTheme();

  const list = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative z-50 flex w-full items-center align-center justify-between lg:flex-row  p-5 lg:p-3 ">
      <div className="flex items-center">
        <Button variant="outline" size="icon" className="pointer-events-none">
          <Image
            src="/favicon.png"
            width={50}
            height={50}
            alt="favicon"
            className="object-contain"
          />
        </Button>
      </div>

      <nav className="flex text-sm lg:text-lg h-full items-center">
        <ul className="flex items-center h-5">
          {list.map((id, index) => (
            <React.Fragment key={index}>
              <li className="px-2 lg:px-5">
                <Link href={id.link}>{id.name}</Link>
              </li>
              {index < list.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-6 bg-muted-foreground/50"
                />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              {/* <span className="sr-only">Toggle theme</span> */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Page;
