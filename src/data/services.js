export const services = [
  {
    id: 1,
    name: "Professional Pet Grooming",
    description: "Full grooming service including bath, haircut, nail trimming, and ear cleaning",
    price: 45,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1516734212186-664564d13ddd?w=600&h=400&fit=crop",
    features: ["Bath & Blow Dry", "Haircut & Styling", "Nail Trimming", "Ear Cleaning"],
    popular: true
  },
  {
    id: 2,
    name: "Veterinary Consultation",
    description: "Expert veterinary advice and health checkups for your beloved pets",
    price: 75,
    duration: "30-45 minutes",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
    features: ["Health Checkup", "Vaccination", "Diet Advice", "Emergency Care"],
    popular: true
  },
  {
    id: 3,
    name: "Pet Training Classes",
    description: "Professional training sessions for obedience, behavior correction, and fun tricks",
    price: 120,
    duration: "6 sessions",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    features: ["Basic Commands", "Behavior Training", "Socialization", "Advanced Tricks"],
    popular: false
  },
  {
    id: 4,
    name: "Pet Boarding & Daycare",
    description: "Safe and comfortable boarding facility with playtime and care",
    price: 35,
    duration: "Per day",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
    features: ["24/7 Supervision", "Play Time", "Meals Included", "Medication Admin"],
    popular: false
  }
];

export const serviceCategories = [
  { id: "all", name: "All Services" },
  { id: "grooming", name: "Grooming" },
  { id: "health", name: "Health & Vet" },
  { id: "training", name: "Training" },
  { id: "boarding", name: "Boarding" }
];