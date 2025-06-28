import PageWrapper from "@/components/PageWrapper";
import { ContactForm } from "./components/ContactForm";
import { Metadata } from "next";
// import ContactForm from './components/ContactForm'

export const metadata: Metadata = {
  title: "Contact Kavindu Mihiranga | Let's Connect",

  description:
    "Get in touch with Kavindu Mihiranga. Contact me for project collaborations, job opportunities, or any inquiries. Based in Galle, Sri Lanka, and available for remote work.",

  keywords: [
    "Contact Kavindu Mihiranga",
    "Hire Developer Sri Lanka",
    "Get in touch",
    "Contact Software Engineer",
    "Freelance Developer Galle",
    "Next.js Developer Contact",
    "Project Inquiry",
    "Tech Collaboration",
    "Kavindu Mihiranga email",
  ],

  openGraph: {
    title: "Contact Kavindu Mihiranga | Get in Touch",
    description:
      "Have a project or opportunity you'd like to discuss? Reach out via email, social media, or the contact form on my website.",
    url: "https://kavindumihiranga.com/contact",
    images: [
      {
        url: "/Me.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Kavindu Mihiranga",
      },
    ],
  },
  twitter: {
    title: "Contact Kavindu Mihiranga | Let's Build Something Together",
    description:
      "Ready to start a project or discuss an opportunity? Find my contact details here.",
    creator: "@WWKMihiranga",
    images: ["/Me.jpg"],
  },

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* <section className="p-8 max-w-3xl mx-auto"> */}
      <ContactForm />
      {/* </section> */}
    </PageWrapper>
  );
}
