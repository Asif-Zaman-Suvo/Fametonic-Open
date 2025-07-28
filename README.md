# Fametonic Landing Page

A modern, dark-themed landing page for Fametonic - a platform designed to help users build a profitable social media career.

## 🚀 Features

### 1. Promotional Header Banner
- **Gradient Background**: Vibrant linear gradient from bright pink (`rgba(252, 0, 78, 1)`) to bright cyan (`rgba(16, 203, 224, 1)`)
- **Promotional Text**: "🚀 FRESH BEGINNINGS SALE: Extra 25% OFF, Limited Spots - start your journey today!"
- **Styling**: "FRESH BEGINNINGS SALE:" highlighted in cyan, rest in white
- **Bottom Border**: Thin blue line separator

### 2. Navigation Menu
- **Dark Background**: Black navigation bar
- **Logo**: Fametonic SVG logo with gradient effects
- **Navigation Links**: "About us" and "Contact" with hover effects
- **Responsive Layout**: Flexbox with proper spacing

### 3. Main Content Area
- **Two-Column Layout**: Content on left, visual on right
- **Responsive Design**: Grid layout that adapts to screen size

#### Left Side Content:
- **Main Headline**: "Want to Turn Social Media Into a Profitable Career?"
- **Sub-headline**: "Discover your way to success with Fametonic:" with custom styling
  - Font: Urbanist, Weight: 700, Size: 35px
  - Color: Bright cyan `rgba(0, 231, 249, 1)`
  - Text shadow: Pink glow effect `rgba(252, 0, 78, 1)`
- **Benefits List**: 4 bullet points with star icons
  - Start growing your influence right away
  - Create viral TikToks and Reels step by step
  - Use a Personal AI Worker to boost your content
  - Learn from expert-led courses designed for aspiring influencers
- **CTA Button**: "GET STARTED >" with pink background and cyan glow
- **Sub-text**: "1-minute quiz for personalized Insights"
- **Legal Text**: Terms and copyright information

#### Right Side Content:
- **Mobile Mockup**: SVG phone image from `/assets/mobile.svg`
- **Responsive**: Scales properly on different screen sizes

## 🛠️ Technical Implementation

### Components Structure:
```
components/
├── Header/
│   └── Header.tsx          # Promotional banner
├── Menu/
│   └── Menu.tsx            # Navigation menu
├── Body/
│   └── Body.tsx            # Main content area
└── StarIcon/
    └── StarIcon.tsx        # Custom star icon component
```

### Key Technologies:
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Styling**: Inline styles for precise design control

### Design System:
- **Color Palette**:
  - Primary Pink: `rgba(252, 0, 78, 1)`
  - Primary Cyan: `rgba(0, 231, 249, 1)`
  - Background: Black
  - Text: White
- **Typography**:
  - Urbanist font family
  - Bold weights (700)
  - Custom text shadows and gradients
- **Spacing**: Consistent padding and margins throughout

### Responsive Features:
- Mobile-first design approach
- Grid layout adapts to screen size
- Images scale properly
- Text remains readable on all devices

## 📁 Project Structure

```
fametonic-open/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Header/             # Promotional banner
│   ├── Menu/               # Navigation menu
│   ├── Body/               # Main content
│   └── StarIcon/           # Custom icon
├── public/
│   └── assets/
│       ├── logo.svg        # Fametonic logo
│       └── mobile.svg      # Phone mockup
└── package.json            # Dependencies
```

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Highlights

- **Dark Theme**: Modern black background with neon accents
- **Gradient Effects**: Smooth transitions between pink and cyan
- **Custom Typography**: Urbanist font with precise styling
- **Interactive Elements**: Hover effects and transitions
- **Professional Layout**: Clean, organized component structure

## 📱 Responsive Design

- **Desktop**: Full two-column layout with proper spacing
- **Tablet**: Adaptive grid layout
- **Mobile**: Stacked layout with centered content

## 🔧 Customization

The landing page is built with modular components, making it easy to:
- Update colors and gradients
- Modify text content
- Add new sections
- Change images and assets
- Adjust spacing and typography

## 📄 License

Fametonic 2025 ©All Rights Reserved.
