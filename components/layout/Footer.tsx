"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Image from "next/image";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { list } from "@/app/data";
import Link from "next/link";

type FooterSection = {
  label: string;
  links: FooterLink[];
};
const footerLinks: FooterSection[] = [
  {
    label: "Resources",
    links: list.map((item) => ({
      title: item.name,
      href: item.link,
    })),
  },
  {
    label: "Social Links",
    links: [
      {
        title: "Github",
        href: "https://github.com/BhavikSapat/",
        icon: <GithubIcon />,
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/bhaviksapat/",
        icon: <LinkedinIcon />,
      },
      {
        title: "Instagram",
        href: "https://instagram.com/bhavik.sapat/",
        icon: <InstagramIcon />,
      },
      {
        title: "Whatsapp",
        href: "https://wa.me/9028965101",
        icon: <WhatsappIcon />,
      },
    ],
  },
];
type FooterLink = {
  title: string;
  href: string;
  icon?: ReactNode;
};

const Page = () => {
  return (
    <footer
      className={cn(
        "relative justify-center mx-auto w-full max-w-5xl rounded-t-4xl border-t pt-2 md:p-2 md:pt-2 md:rounded-t-6xl",
        "dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.1),transparent)]",
      )}
    >
      <div className="absolute  top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur" />

      <div className="grid w-full items-start justify-items-center gap-10 p-5 md:grid-cols-2">
        <div className="max-w-xs space-y-4 text-center md:text-left">
          <Image
            src="/favicon.png"
            width={50}
            height={50}
            alt="favicon"
            className="mx-auto object-contain md:mx-0"
          />

          <p className="text-sm leading-6 text-muted-foreground text-xl">
            Bhavik Bhau Sapat
          </p>
          <p className="text-sm text-muted-foreground text-ml">
            Learning how things work...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-15 sm:gap-20">
          {footerLinks.map((section) => (
            <div key={section.label}>
              <h3 className="text-sm font-semibold">{section.label}</h3>

              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.title}>
                    {/* <a
                      href={link.href}
                      className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-foreground [&_svg]:size-4"
                    > */}
                    <Link
                      className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-foreground [&_svg]:size-4"
                      href={link.href}
                      // target="_blank"
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                    {/* </a> */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-border" />

      <div className="flex w-full items-center justify-center py-5">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} efferd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Page;
