import crmImage from '../assets/crm.png';
import Architecture from '../assets/Architecture.png';
import MernEngineers from '../assets/mern-engineers.png';
import Koshank from '../assets/koshank.png';
import DineshPortfolio from '../assets/dinesh-portfolio.png';
import KoshankInvoice from '../assets/koshankInvoice.png';
import TTS from '../assets/TTS.png';
import Hulu from '../assets/hulu.png';
import NxtKisan from '../assets/nxtkisan.png';

const projects = [
  {
    id: 1,
    title: "CRM – Customer Relationship Management",
    tags: ["React", "Node.js", "MySQL"],
    image: crmImage,
    link: "/",
  },
  {
    id: 2,
    title: "ArchitectureMart – Personal Project",
    tags: ["MERN", "Payment Gateway", "Admin Panel"],
    image: Architecture,
    link: "https://architecture-mart07.vercel.app/home",
  },
  {
    id: 3,
    title: "MERN Engineers – Agency Website",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    image: MernEngineers,
    link: "https://mernengineers.netlify.app/",
  },
  {
    id: 4,
    title: "Koshank – Agency Website",
    tags: ["React", "Responsive Design", "Payment Gateway"],
    image: Koshank,
    link: "https://koshank-testing.netlify.app",
  },
  {
    id: 5,
    title: "Dinesh Pawar – Personal Portfolio",
    tags: ["React", "Framer Motion", "YouTube Embed"],
    image: DineshPortfolio,
    link: "https://dinesh-pawar.netlify.app",
  },
  {
    id: 6,
    title: "NxtKisan – AgriTech E-Commerce",
    tags: ["Socket.io", "AI Integration", "E-Commerce"],
    image: NxtKisan,
    link: "https://nxtkisan.vercel.app/",
  },
  {
    id: 7,
    title: "Invoice Generator – Koshank Pvt. Ltd.",
    tags: ["React", "Firebase", "jsPDF"],
    image: KoshankInvoice,
    link: "https://koshank-invoice.netlify.app",
  },
  {
    id: 8,
    title: "AI Text-to-Speech – Personal Project",
    tags: ["React", "React Speech Kit"],
    image: TTS,
    link: "https://ai-text-to-speech-app.netlify.app",
  },
  {
    id: 9,
    title: "Hulu Clone – Personal Project",
    tags: ["HTML", "CSS", "Responsive Design"],
    image: Hulu,
    link: "https://dineshpawar7.github.io/huluapp",
  },
];

export default projects;
