// Edit this file to change what appears on the Products page.
// Optional fields: demoUrl, repoUrl (buttons appear only when filled in)
// and image (a screenshot URL or /public path shown instead of the icon panel).
// status: "live" | "development"  (controls the badge colour)

export const products = [
  {
    slug: "restaurantos",
    name: "RestaurantOS",
    tagline: "Food delivery and restaurant management platform",
    status: "live",
    statusLabel: "Full-Stack Platform",
    icon: "restaurant",
    description:
      "One system that brings customers, restaurant managers and admins together. Customers browse restaurants and menus and place orders, managers handle incoming orders and their menu, and admins keep control of users and the platform.",
    features: [
      "Three roles: Customer, Restaurant Manager and Admin",
      "Order management with real-time order tracking",
      "Menu management for restaurants",
      "User management for admins",
      "Secure JWT login with role-based access",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    demoUrl: "",
    repoUrl: "",
    image: "",
  },
  {
    slug: "ai-health-monitoring",
    name: "AI Health Monitoring Platform",
    tagline: "A full-stack platform for health monitoring",
    status: "live",
    statusLabel: "Full-Stack Platform",
    icon: "health",
    description:
      "A cloud-hosted health monitoring platform with secure sign-in and a guided registration flow that builds each user's health profile from the very first step.",
    features: [
      "Secure authentication",
      "Multi-step registration with a health profile step",
      "Clean, responsive interface",
      "Cloud-hosted frontend, API and database",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB Atlas"],
    demoUrl: "",
    repoUrl: "",
    image: "",
  },
  {
    slug: "colorix",
    name: "ColorIX",
    tagline: "AI-powered textile defect detection",
    status: "development",
    statusLabel: "In Development",
    icon: "fabric",
    description:
      "An AI platform that detects defects in textile fabric, with a modern dashboard for reviewing results. The machine-learning model is being trained as fabric image data is collected.",
    features: [
      "AI-based fabric defect detection",
      "Modern, easy-to-use dashboard",
      "Dedicated machine-learning server",
    ],
    tech: ["React", "Python", "Flask", "Machine Learning"],
    demoUrl: "",
    repoUrl: "",
    image: "",
  },
];
