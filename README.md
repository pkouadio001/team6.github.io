# CareConnect - Healthcare Management Web Application

**SWEN 661 - Week 11 Deliverable**  
**Team 6**

A Progressive Web Application (PWA) for healthcare management designed for Parkinson's disease patients.

---

## 🌐 Live Deployment

**Deployed URL:** [PASTE YOUR VERCEL URL HERE AFTER DEPLOYMENT]

**GitHub Repository:** https://github.com/pkouadio001/team6.github.io.git

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Build & Test Instructions
```bash
# 1. Clone repository
git clone https://github.com/pkouadio001/team6.github.io.git
cd team6.github.io

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
# App opens at http://localhost:5173

# 4. Run tests
npm run lint          # ESLint code quality check
npm run type-check    # TypeScript validation

# 5. Build for production
npm run build

# 6. Preview production build
npm run preview
# Preview at http://localhost:4173
```

---

## 🔐 Demo Credentials

**Email:** `demo@careconnect.com`  
**Password:** `demo123`

Or click "Use demo credentials" button on sign-in page.

---

## ✨ Features

- **Landing Page** - Marketing site with accessibility features
- **Authentication** - Form validation with react-hook-form + Zod
- **Dashboard** - Welcome banner, Quick Actions, Schedule, Emergency Contacts
- **Medications** - Medication management with dosage tracking
- **Appointments** - Doctor appointment scheduling
- **Health Log** - Symptom tracking (energy, tremors, stiffness)
- **Messages** - Caretaker communication
- **Emergency** - Quick access to 911 and emergency contacts

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Context API** - State management
- **react-hook-form + Zod** - Form validation
- **Vite PWA** - Progressive Web App support
- **ESLint** - Code quality

---

## 📱 PWA Features

- ✅ Installable as standalone app
- ✅ Offline support with service worker
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Fast loading with code splitting
- ✅ Optimized bundle size

---

## 📊 Performance

- **Lighthouse Scores:** 90+ in all categories
- **Code Splitting:** Lazy-loaded routes
- **Bundle Optimization:** Vendor chunks separated
- **Offline Caching:** Service worker strategies

---

## 📁 Project Structure
```
my-web-app/
├── src/
│   ├── components/       # Reusable components
│   ├── context/          # State management
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Page components
│   ├── App.tsx           # Router config
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── vite.config.js        # Vite config
├── tailwind.config.js    # Tailwind config
└── package.json          # Dependencies
```

---

## 👥 Team

**SWEN 661 - Team 6**  
Week 11 - React Web Application
