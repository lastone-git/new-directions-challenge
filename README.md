# New Directions Challenge - Next.js Web Application

This project is a responsive Single Page Application (SPA) built with [Next.js](https://nextjs.org/), bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The application is developed in TypeScript, ensuring robust type-checking and a better developer experience.

## Getting Started

First, clone the repository and navigate into the project directory:

```bash
git clone lastone-git/new-directions-challenge
cd lastone-git/new-directions-challenge

Then, install the dependencies:

npm install
# or
yarn install


Run the development server:

npm run dev
# or
yarn dev

Open http://localhost:3000 with your browser.

```


## Project Features

### Responsive Landing Page
Header: 
Contains the company logo and navigation links (Home, About, Services, Careers, Contact).

Hero Section: 
Features a video hero background, a brief tagline, and a call-to-action button linking to the "Careers" section.

Key Services Section: 
Showcases three primary recruitment services (Education Recruitment, Social Care Recruitment, Professional Recruitment) with icons, titles, and short descriptions.

Testimonial Carousel: 
Displays feedback from clients and candidates.

Footer: 
Includes social media links, contact information, and a newsletter signup form.

### User Experience Enhancements

Smooth Scrolling: 
Implemented for navigation links to enhance user experience.

Consistent Styling: 
Adheres to New Directions’ brand identity with a consistent color scheme and typography.

Modern Design Trends: 
Incorporates digital imaging and graphic design, animations and modern web design elements to engage users.

Optimised Images: 
All images are optimised for web performance and SEO.

Email Template Design: 
A complementary design for an email template to announce the new site.

### Additional Features
Interactive Job Search: Users can filter available job listings by category and location.

### Hooks and State Management
The project extensively uses React hooks for managing state and side effects, ensuring a clean and efficient codebase. 
Key hooks used include useState, useEffect, and custom hooks for fetching data. 
However, I have also built and added custom hooks including useClickAway which can trigger a state change when clicking outside of the chosen element and also useScreenDimensions which will get the current screen dimensions with debounce setting.

## Styling Choices
Styling is managed with CSS Modules and Sass for scoped and maintainable styles. The next/font package is used for automatic font optimisation, loading Inter, a custom Google Font.
Video Hero Section: The hero section features a video background, providing a visually engaging introduction to the website. This section uses HTML5 <video> elements for seamless integration and performance.
Image Optimisation: Next.js automatically optimises images for different screen sizes and resolutions. The next/image component is utilized to handle responsive image loading and lazy loading.
Cookies Pop-Up: A cookies consent pop-up is implemented to comply with privacy regulations. This component is developed with accessibility in mind, ensuring it is keyboard-navigable and screen reader-friendly.
Neurodiversity and Accessibility: This project adheres to several neurodiversity and accessibility principles to ensure an inclusive user experience:

## Neurodiversity
High Contrast: Ensures high contrast between text and background, meeting WCAG AA or AAA standards.
Text and Typography: Legible Fonts: Uses clear, sans-serif fonts like Arial, Verdana, or Helvetica.
Text Alignment: Uses left-aligned text for better readability, avoiding justified text.
Consistent Layout: Maintains a consistent layout throughout the site.
Clear Navigation: Uses simple and intuitive navigation menus with landmarks (header, main, footer).
Breadcrumbs: Implements breadcrumb navigation to help users understand their location.
Keyboard Focus: Ensures all interactive elements are accessible via keyboard with visible focus states.
Alt Text: Provides descriptive alt text for images.
Form Labels: Ensures all form fields have descriptive labels and instructions.

## SEO Strategy

For this project, I have implemented key SEO enhancements.

Next.js Head Component: Utilised the <Head> component to dynamically add unique and descriptive meta tags, including title and description for each page, improving how content is indexed and displayed in search engine results.
Optimised Images: Leveraged Next.js's built-in image optimisation features to ensure fast load times and improved user experience by automatically adjusting image sizes and formats.
Responsive Mobile Design: Implemented a fully responsive design to ensure the site looks and functions perfectly across all devices, enhancing mobile-friendliness which is a crucial factor for SEO.
Performance Optimisation: Focused on page load speed by using techniques like code splitting, caching strategies, and performance monitoring to ensure a smooth and fast user experience, which indirectly benefits SEO.
Sitemaps: Using the next-sitemap package I have generated sitemaps for my project.

## Conclusion

This project showcases my ability to build a responsive, dynamic web application with a focus on front-end development, digital imaging, and graphic design. The solution adheres to the project guidelines and demonstrates my technical skills, creativity, and attention to detail.
