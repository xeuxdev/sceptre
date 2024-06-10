import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

const cols = [
  {
    header: "SCEPTRE",
    links: [
      { name: "Company", href: "/" },
      { name: "careers", href: "/" },
      { name: "events", href: "/" },
      { name: "blogs", href: "/" },
      { name: "investor relations", href: "/" },
      { name: "sceptre foundations", href: "/" },
      { name: "contact us", href: "/" },
    ],
  },
  {
    header: "PRODUCTS",
    links: [
      { name: "Jira", href: "/" },
      { name: "jira align", href: "/" },
      { name: "jira service management", href: "/" },
      { name: "confluence", href: "/" },
      { name: "trello", href: "/" },
      { name: "bit bucket", href: "/" },
    ],
    extra: { name: "See all products", href: "/" },
  },
  {
    header: "RESOURCES",
    links: [
      { name: "technical support", href: "/" },
      { name: "purchase & licensing", href: "/" },
      { name: "sceptre community", href: "/" },
      { name: "knowledge base", href: "/" },
      { name: "market price", href: "/" },
      { name: "my account", href: "/" },
    ],
    extra: {
      name: "Create Support Ticket",
      href: "/",
    },
  },
  {
    header: "LEARN",
    links: [
      { name: "partners", href: "/" },
      { name: "training & certification", href: "/" },
      { name: "documentation", href: "/" },
      { name: "developer resources", href: "/" },
      { name: "enterprise services", href: "/" },
    ],
    extra: { name: "See all resources", href: "/" },
  },
];

export default function Footer() {
  return (
    <footer className="px-5 pt-6 xl:px-20 2xl:px-28 font-sans">
      <section className="pt-11 px-8 pb-8 max-w-[75.5rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-10 xl:gap-14">
          {cols.map((col, idx) => {
            return (
              <div key={col.header} className="">
                {idx == 0 ? (
                  <header className="space-y-0 mb-5">
                    <p className="uppercase font-bold text-xl text-white tracking-[0.25em]">
                      SCEPTRE
                    </p>
                    <p className="text-xs text-white pl-8 uppercase">stores</p>
                  </header>
                ) : (
                  <header className="uppercase font-semibold text-xl mb-10 text-white">
                    {col.header}
                  </header>
                )}

                <div className="flex flex-col gap-6 items-start mb-12">
                  {col.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-base font-normal capitalize text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {col.extra ? (
                  <div className="flex items-center gap-3 font-semibold text-xl">
                    <Link
                      href={col.extra.href}
                      className={`text-white ${idx == 2 ? "underline" : ""}`}
                    >
                      {col.extra.name}{" "}
                    </Link>

                    <Icons.arrowRight />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-[3.625rem] px-10 flex gap-10 flex-col lg:flex-row items-center justify-between max-w-[75.5rem] mx-auto">
        <div className="flex items-center flex-col min-[375px]:flex-row sm:flex-row gap-1 *:text-white *:font-normal *:text-lg">
          <p>Copyright</p>

          <Icons.copyRight />
          <p>2024 Sceptre</p>
        </div>

        <div className="flex items-center flex-col md:flex-row gap-4 lg:gap-10 *:text-white *:font-semibold *:text-lg *:capitalize">
          <p>Privacy Policy</p>
          <p>terms</p>
          <p>Impressum</p>

          <p className="flex items-center gap-1.5">
            <Icons.globe />
            <span>English</span>

            <Icons.arrowDown />
          </p>
        </div>
      </section>
    </footer>
  );
}
