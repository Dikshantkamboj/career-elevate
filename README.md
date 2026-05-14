# Career Elevate Landing Page

A mobile-friendly, premium-designed landing page built with Next.js and Vanilla CSS for Career Elevate professional services.

## How to Manage Data (Services, Pricing, Contact)

All the dynamic content for the website is stored in a single, easy-to-manage JSON configuration file. You do not need to touch the code to update prices, phone numbers, or services!

**File Location:** `src/data/config.json`

### Updating Contact Information
Open `src/data/config.json` and locate the `brand.contact` section:
```json
"contact": {
  "phoneNumbers": ["8077339366", "7017675120"],
  "whatsapp": ["8077339366"],
  "email": "info@careerelevate.com",
  "hours": "Mon-Sun: 8 AM - 10 PM",
  "address": "Delhi, India"
}
```
Simply change the values inside the quotes.

### Updating Services & Prices
Locate the `services` array in the same file. Each service looks like this:
```json
{
  "id": "01",
  "title": "CV Building & Revamp",
  "description": "Make your resume stand out...",
  "features": ["Basic", "Professional", "Executive"],
  "expressDelivery": "Delivery within 12-18 hours",
  "price": "₹360",
  "icon": "document"
}
```
Change the `"price"` or `"features"` as needed. If a service does not have express delivery, keep `"expressDelivery": null`.

### Updating Company Logos/Names
Locate the `companies` section to update the list of companies you work with. Add or remove names from the arrays:
```json
"companies": {
  "itAndConsulting": ["Accenture", "Deloitte", "Infosys"],
  "healthcareAndPharma": ["Pfizer", "Dr.Reddy's"]
}
```

---

## Step-by-Step Guide to Start the Project

### Prerequisites
1. Ensure you have **Node.js** installed on your system (version 18 or above).
2. Open your terminal or command prompt.

### 1. Navigate to the Project Folder
Open your terminal and navigate to this folder:
```bash
cd C:\Users\diksh\.gemini\antigravity\scratch\career-elevate
```

### 2. Install Dependencies
Run the following command to make sure all necessary packages are installed:
```bash
npm install
```

### 3. Start the Development Server
To run the website locally and see your changes in real-time, run:
```bash
npm run dev
```

### 4. View the Website
Open your web browser (Chrome, Edge, Safari) and go to:
[http://localhost:3000](http://localhost:3000)

### 5. Build for Production (Deployment)
When you are ready to deploy the website to a live server (like Vercel, Netlify, or your own hosting), build the optimized production version:
```bash
npm run build
npm start
```
