# GroFast Compare

## Current State
The project has a frontend-only implementation with an empty backend (no APIs). The existing App.tsx (~1484 lines) has a UI shell. Backend has no meaningful endpoints.

## Requested Changes (Diff)

### Add
- Backend APIs: product search, price comparison data, cart management, price alerts, user savings tracking, AI recommendations, price history
- Full homepage with animated hero, search bar, live demo comparison table
- Smart Search with instant results and comparison table (Platform, Price, Delivery Time, Delivery Fee, Total Cost)
- AI Recommendation Box (cheapest, fastest, best value)
- Smart Cart Split suggestions
- Hidden Fee Detector alerts
- Price Trend Graph (simulated history)
- Flash Deals / Best Deal section
- SaaS Pricing section (Free / Smart Saver ₹99 / Pro Max ₹499) with monthly/yearly toggle
- User Dashboard (saved products, price alerts, savings tracker)
- AI Chatbot (shopping assistant)
- Location input (pincode entry or auto-detect)
- Live indicators ("Updated X mins ago", "Live Price" badge)
- Affiliate "Buy on [Platform]" CTA buttons
- UX psychology elements: savings shown, urgency cues, social proof

### Modify
- Complete rewrite of App.tsx with all sections
- index.css: dark mode, glassmorphism tokens, gradient variables, grid background

### Remove
- Old placeholder/stub UI code

## Implementation Plan
1. Generate Motoko backend with: product search, price data (simulated), cart operations, price alerts, user data storage
2. Write new frontend App.tsx with all sections: Navbar, Hero, LocationBar, SearchResults, ComparisonTable, AIRecommendation, SmartCartSplit, HiddenFeeAlert, TrendGraph, FlashDeals, Pricing, Dashboard, Chatbot, Footer
3. Apply dark glassmorphism design system with purple/blue/neon green glowing gradients
4. All data is simulated/cached (no real scraping); simulate background refresh with timestamps
