import general from "../assets/general.jpeg"
import ryt from "../assets/ryt.jpeg"
import kids from "../assets/kids.jpg"
import bhagwat from "../assets/bhagwat_geeta.jpg"
import face from "../assets/face.jpeg"
import anita from "../assets/anita.jpeg"
import shubham from "../assets/shubham_verma.jpeg"
import advance from "../assets/advance.jpeg"
import shaila from "../assets/shaila.jpeg"
import yogaAthome from "../assets/yogaAthome.png"
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Timings', href: '#timings' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export const whyCards = [
  { icon: '🎓', title: 'Certified Trainers', text: 'MA Yoga, PG Diploma & Specialised Certification.' },
  { icon: '🤝', title: 'Personal Attention', text: 'Small batches, real guidance.' },
  { icon: '💻', title: 'Online & Offline', text: 'Join from home or our Lucknow studio.' },
  { icon: '👩', title: 'Female Special Batches', text: 'Dedicated batches for women\'s comfort.' },
  { icon: '⏰', title: 'Flexible Timings', text: 'Morning & evening batches daily.' },
  { icon: '🥙', title: 'Free Diet Consultation', text: 'Included with selective programs.' },
]

export const programCards = [
  {
    image: general,
    title: '🔥 General Fitness Batches',
    price: '₹1499/Month Offline · ₹999/Month Online',
    feats: ['Asanas, Pranayama & Meditation', 'Monday to Saturday · 1 hour session', 'Included with selective programs'],
    cta: 'https://wa.me/917905569751?text=Hello%2C%20I%20am%20interested%20in%20the%20General%20Fitness%20Batch.%20Source%3A%20Website',
    buttonText: 'Schedule Consultation',
  },
  {
    image: face,
    title: '✨ Face Yoga',
    price: '₹1999 Offline · ₹1499 Online',
    feats: ['20 sessions', 'Face toning exercises', 'Detox & face glow techniques', 'Diet consultation included'],
    cta: 'https://wa.me/917905569751?text=Hello%2C%20I%20am%20interested%20in%20Face%20Yoga.%20Source%3A%20Website',
    buttonText: 'Schedule Consultation',
  },
  {
    image: advance,
    title: '🧘 Advance Yoga Classes',
    price: '₹1999',
    feats: ['Deeper asana practice & flexibility', 'Advanced pranayama & breath control', 'Strength & balance building', 'For experienced practitioners'],
    cta: 'https://wa.me/917905569751?text=Hello%2C%20I%20am%20interested%20in%20Advance%20Yoga%20Classes.%20Source%3A%20Website',
    buttonText: 'Schedule Consultation',
  },
  {
    image: kids,
    title: '👧 Kids Yoga Batches',
    price: '₹1499/Month Offline',
    feats: ['Fun & interactive sessions', 'Improves focus & flexibility', 'Builds discipline & posture', 'Reduces screen-time dependency'],
    cta: 'https://wa.me/917905569751?text=Hello%2C%20I%20am%20interested%20in%20Kids%20Yoga%20Batches.%20Source%3A%20Website',
    buttonText: 'Schedule Consultation',
  },
  {
    image: ryt,
    title: '🎓 RYT-200 / 300 (TTC Batches)',
    price: 'Become a Certified Yoga Teacher',
    feats: ['Internationally recognised certification', 'Hands-on teaching practice', 'Yoga philosophy & anatomy covered'],
    cta: 'https://wa.me/917905569751?text=Hello%2C%20I%20want%20details%20about%20RYT-200%2F300%20Teacher%20Training.%20Source%3A%20Website',
    buttonText: 'Enquire Now',
  },
  {
    image: bhagwat,
    title: '📖 Shreemad Bhagwad Geeta Session',
    price: 'Offline & Online',
    feats: ['Life lessons from the Geeta', 'Simple explanation for all ages', 'Weekly discussion sessions'],
    cta: 'https://wa.me/917905569751?text=Hello%2C%20I%20want%20details%20about%20the%20Bhagavad%20Gita%20Session.%20Source%3A%20Website',
    buttonText: 'Enquire Now',
  },
]

export const featuredProgram = {
  image: yogaAthome,
  title: '🏠 Yoga At Your Home',
  price: 'Starting ₹4999/Month · Offline across Lucknow',
  feats: ['Trainer visits your home', 'Fully personalised routine', 'Flexible scheduling'],
  cta: 'https://wa.me/917905569751?text=Hello%2C%20I%20am%20interested%20in%20Yoga%20At%20Home.%20Source%3A%20Website',
  buttonText: 'Schedule Consultation',
}

export const morningTimings = [
  { label: 'Batch 1', value: '6:00 AM – 7:00 AM' },
  { label: 'Batch 2', value: '7:00 AM – 8:00 AM' },
  { label: 'Batch 3', value: '8:00 AM – 9:00 AM' },
  { label: 'Batch 4', value: '9:00 AM – 10:00 AM' },
  { label: 'Batch 5', value: '10:00 AM – 11:00 AM · Female Only Batch' },
  { label: 'Batch 6: Advance Classes', value: '11:00 AM – 12:00 PM' },
]

export const eveningTimings = [
  { label: 'Batch 1', value: '4:00 PM – 5:00 PM' },
  { label: 'Batch 2', value: '5:00 PM – 6:00 PM ·  Female Only Batch' },
  { label: 'Batch 3', value: '6:00 PM – 7:00 PM ·  Female Only Batch' },
  { label: 'Batch 4', value: '7:00 PM – 8:00 PM' },
]

export const pricePlans = [
  {
    name: 'Basic',
    price: '₹1499',
    period: '/month',
    features: ['Group Classes', 'Offline (Studio)', 'Beginner Friendly', 'WhatsApp Support'],
    primary: false,
    link: 'https://wa.me/917905569751?text=Hello%2C%20I%20want%20details%20about%20the%20Basic%20Plan.%20Source%3A%20Website',
  },
  {
    name: 'Therapeutic Batches',
    price: '₹2499',
    period: '/month',
    features: ['Personal Guidance', 'Diet Support', 'Online + Offline', 'Progress Tracking'],
    primary: true,
    popular: true,
    link: 'https://wa.me/917905569751?text=Hello%2C%20I%20want%20details%20about%20Therapeutic%20Batches.%20Source%3A%20Website',
  },
  {
    name: 'Personal Yoga Training',
    pricePrefix: 'Starting at',
    price: '₹4999',
    period: '/month',
    features: ['One-to-One Sessions', 'Home Visit / Online', 'Fully Customised Plan', 'Priority Scheduling'],
    primary: false,
    link: 'https://wa.me/917905569751?text=Hello%2C%20I%20want%20details%20about%20the%20Personal%20Yoga%20Plan.%20Source%3A%20Website',
  },
]

export const specialCourses = [
  {
    icon: '📖',
    title: 'Bhagavad Gita for Young Students',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parenting Sessions',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🏢',
    title: 'Corporate Yoga',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🧘‍♀️',
    title: 'Teacher Training',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '💃',
    title: 'Zumba + Dance',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🎯',
    title: 'Special Workshops',
    image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=900&q=80',
  },
]

export const teamMembers = [
  { name: 'Shaila Pant', role: "Women's Wellness Expert · Therapy Session", image: anita },
  { name: 'Shubham Verma', role: 'Advance Asanas Expert · Sound Healer, Therapy', image: shubham },
  { name: 'Anita Verma', role: "Women's Special Batches · Corporate Yoga Expert", image: shaila },
]

export const faqs = [
  {
    question: 'Fees kitni hai?',
    answer: 'Hamare plans ₹999/month (online) se shuru hote hain. General Fitness Batch ₹1499 offline / ₹999 online hai, Face Yoga ₹1999 offline / ₹1499 online (20 sessions), aur Personal Yoga at Home starting at ₹4999/month hai. Exact plan aapke health goal aur online/offline preference ke hisaab se recommend kiya jaata hai — WhatsApp par pooch kar confirm kar sakte hain.',
  },
  {
    question: 'Studio kahan hai?',
    answer: 'Hamara studio Near Anand Bhog, 6/5 Sector 6, Vikas Nagar, Lucknow — 226024 par hai. Google Maps par "Yoga Mantra" search karke seedha directions bhi mil jaayenge, ya humare floating 📍 button par click karein.',
  },
  {
    question: 'Kya main beginner hoon toh join kar sakti hoon?',
    answer: 'Bilkul! Yoga Mantra ke saare batches beginner-friendly hain. Pehle din se hi guided practice milti hai — koi prior experience ki zaroorat nahi. Trainer personally har student ka dhyan rakhte hain aur aapki body ke hisaab se pace set karte hain.',
  },
  {
    question: 'Online classes kaise join karein?',
    answer: 'Enrollment ke baad aapko WhatsApp par Zoom/Google Meet ka link bheja jaata hai. Aapko sirf ek phone ya laptop aur ghar mein thodi si comfortable jagah chahiye. Live sessions fixed batch timings par hoti hain, aur recording bhi mil sakti hai agar aap batch miss kar dein.',
  },
  {
    question: 'Female trainers available hain?',
    answer: 'Ji haan, hamare paas certified female aur male dono trainers hain. Female Special Batches specifically un students ke liye design ki gayi hain jo female trainer ke saath hi comfortable feel karti hain.',
  },
  {
    question: 'PCOD/PCOS ya thyroid mein yoga se kya fark padega?',
    answer: 'Regular yoga practice se hormonal balance improve hota hai aur stress kam hota hai — jo directly PCOD/thyroid symptoms ko affect karta hai. Hamare kai students ne 60–90 din ke regular practice mein noticeable improvement feel ki hai. Trainer aapki current health condition ke hisaab se specific asanas recommend karte hain.',
  },
  {
    question: 'Koi ek batch miss ho gayi toh kya hoga?',
    answer: 'Koi baat nahi! Aap us din kisi bhi doosre available batch mein join kar sakte hain (morning ya evening dono options milte hain). Flexibility Yoga Mantra ki khaas baat hai — aapki schedule ke saath hum adjust karte hain, na ki aapko humari schedule follow karni padti hai.',
  },
  {
    question: 'Free trial class mein kya hota hai?',
    answer: 'FREE trial mein aapko ek complete live class experience milta hai, trainer se aapke health goal par discussion hota hai, aur aapke liye best suited program/batch recommend kiya jaata hai. Koi payment ya pressure nahi hota — sirf ek honest assessment ki yoga aapke liye kaise kaam karega.',
  },
  {
    question: 'Kya home visit yoga sirf Lucknow mein available hai?',
    answer: 'Haan, "Yoga At Your Home" service abhi Lucknow city ke andar hi available hai (₹4999/month se shuru). Trainer khud aapke ghar aakar personalised session dete hain. Lucknow ke bahar ke liye online personal sessions available hain.',
  },
  {
    question: 'RYT-200/300 Teacher Training kaise join karein?',
    answer: 'Ye ek dedicated Teacher Training Course (TTC) hai jo aapko internationally recognised yoga instructor certification deta hai — isme yoga philosophy, anatomy, aur hands-on teaching practice cover hoti hai. Batch dates aur fees ke details ke liye WhatsApp par enquire karein.',
  },
  {
    question: 'Kya Lucknow ke bahar se online join kar sakte hain?',
    answer: 'Haan! Hamari online classes PAN India available hain — Delhi, Mumbai, Bangalore, kahin se bhi join kar sakte hain. Live Zoom/WhatsApp sessions ke through 100+ students already India ke alag-alag shehron se juday hue hain.',
  },
]
