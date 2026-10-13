import portfolio from "@/config/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Card } from "./ui/SectionHeading";

export default function Contact() {
  const hasEmail = portfolio.email.trim().length > 0;


  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-site">
        <div id="contact-heading">
          <SectionHeading
            kicker="Contact"
            title="Let's connect"
            description="I welcome conversations about web development, data analytics, and AI-assisted engineering. Reach out through any channel below."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <span
              aria-hidden="true"
              className="grid h-11 w-11 place-items-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
            >
              <Mail size={20} />
            </span>
            <h3 className="mt-3 font-bold">Email</h3>
            {hasEmail ? (
              <a
                href={`mailto:${portfolio.email}`}
                className="mt-1 block break-all text-sm font-bold text-indigo-600 hover:text-indigo-800 dark:text-indigo-300"
              >
                {portfolio.email}
              </a>
            ) : (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-700 dark:text-slate-200">
                  kkeerthireddy1999@gmail.com
                </span>{" "}
                — set <code className="font-mono text-xs">email</code> in{" "}
                <code className="font-mono text-xs">config/portfolio.ts</code>.
              </p>
            )}
          </Card>

          
        </div>
        <p className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          No contact form is included because no message-submission service is
          configured. To receive messages directly from this page, connect an
          email service or form backend and then add a form component.
        </p>
      </div>
    </section>
  );
}
