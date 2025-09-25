// src/data/projectsData.js
// Only the projects you requested (VTs Designers, Bakery, Jewellery, Secondhand Bike,
// Stationery (Flask), Shoe e-commerce). Update image paths/URLs if needed.

const projects = [
  {
    id: 1,
    title: "VTs Designers (Portfolio)",
    description: "Designer portfolio and agency landing for VTs Designers (Django backend).",
    details:
      "Full-stack site built with Django: CMS-style project entries, contact form sending email via Django mail settings, portfolio gallery and responsive landing pages for a design agency.",
    tech: ["Django", "Python", "HTML", "CSS"],
    images: [
      "/public/vts1.PNG",
      "/public/vts2.png",
      "/public/vts3.png",
      "/public/vts4.png",
      "/public/vts5.png"
    ],
    image: "/public/vts1.png",
    url: "https://vts-designers-14.onrender.com/", // replace with live URL or repo if available
    industry: "Design / Agency"
  },

  {
    id: 2,
    title: "Bakery Website",
    description: "Bakery shop website with product pages, contact form and ordering demo (Django backend).",
    details:
      "A bakery site with flavourful UI, product showcase, contact/order form backed by Flask (server-side form handling). Includes image gallery and mobile-first design.",
    tech: ["Django", "Python", "HTML", "CSS"],
    images: [
      "/public/bakery1.png",
      "/public/bakery2.png",
      "/public/bakery3.png",
      "/public/bakery4.png",
      "/public/bakery5.png"
    ],
    image: "/public/bakery1.png",
    url: "https://bakery-website-0wxi.onrender.com/",
    industry: "Food & Beverage"
  },

  {
    id: 3,
    title: "Jewellery Website",
    description: "Elegant jewellery storefront and gallery (Django).",
    details:
      "An elegant storefront and gallery for a jewellery business. Features product detail pages, image galleries and a CMS admin for uploading product photos. Built using Django and templating.",
    tech: ["Django", "Python", "HTML", "CSS"],
    images: [
      "/public/jewellery1.png",
      "/public/jewellery2.png",
      "/public/jewellery3.png",
      "/public/jewellery4.png",
      "/public/jewellery5.png"
    ],
    image: "/public/jewellery1.png",
    url: "https://jewellery-website-1.onrender.com/",
    industry: "Retail / Jewellery"
  },

  {
    id: 4,
    title: "Secondhand Bike Marketplace",
    description: "Marketplace for buying/selling secondhand bikes (Django).",
    details:
      "A marketplace project is to build an online platform for buying and selling second-hand bikes that is simple, secure, and easy to use. It allows sellers to list their bikes with details and images, and enables buyers to browse, search, compare, and add bikes to a cart or wishlist before making a decision. The system ensures safe transactions, promotes re-use of bikes to support sustainability, and provides a smooth mobile-friendly experience with interactive features. An admin panel is also included to manage users, bikes, and transactions efficiently.",
    tech: ["Django", "Python", "sqlite", "HTML", "CSS"],
    images: [
      "/public/bike1.png",
      "/public/bike2.png",
      "/public/bike3.png",
      "/public/bike4.png",
      "/public/bike5.png"
    ],
    image: "/public/bike1.png",
    url: "https://bike-website-73qw.onrender.com/",
    industry: "Marketplace"
  },

  {
    id: 5,
    title: "Stationery Shop (Django)",
    description: "Stationery e-store demo built with  and Django server-side templates.",
    details:
      "A small stationery e-commerce demo using Django for routing and server-rendered templates. Demonstrates product listing, simple cart demo, and contact form email integration.It aims to provide a clean, responsive shopping experience with easy product search, friendly product pages, and a reliable checkout flow.",
    tech: ["Django", "Python", "HTML", "CSS", "SQLite"],
    images: [
      "/public/stationery1.png",
      "/public/stationery2.png",
      "/public/stationery3.png",
      "/public/stationery4.png",
      "/public/stationery5.png"
    ],
    image: "/public/stationery1.png",
    url: "https://stationary-website-pc7c.onrender.com/",
    industry: "E-commerce / Stationery"
  },

  {
    id: 6,
    title: "Shoe E-commerce (React)",
    description: "Modern shoe store built with React (product pages, cart, filters).",
    details:
      "A React-based shoe e-commerce site with product listing, quick view modals, cart functionality and responsive design. Demonstrates component-driven architecture and client-side state management.",
    tech: ["React", "JavaScript", "CSS", "Django"],
    images: [
      "/public/shoe1.png",
      "/public/shoe2.png",
      "/public/shoe3.png",
      "/public/shoe4.png",
      "/public/shoe5.png",
    ],
    image: "/public/shoe1.png",
    Frontend_url: "https://shoe-e-commerce-website-frontend.vercel.app/",
    Backend_url: "https://shoe-e-commerce-website-backend.onrender.com/",
    industry: "E-commerce"
  }
];

export default projects;
