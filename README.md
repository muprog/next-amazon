# 🛒 Next.js Amazon Clone

A modern, responsive Amazon clone built with Next.js 15, TypeScript, and Tailwind CSS. This project replicates the core functionality and design of Amazon's e-commerce platform with a focus on user experience and performance.

![Next.js Amazon Clone](https://img.shields.io/badge/Next.js-15.1.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

### 🛍️ E-commerce Functionality

- **Product Catalog** - Browse products by categories (Audio, Games, etc.)
- **Product Details** - Comprehensive product information with image gallery
- **Shopping Cart** - Add/remove items with real-time updates
- **User Authentication** - Login and signup functionality
- **Responsive Design** - Optimized for all device sizes

### 🖼️ Advanced Image Features

- **Interactive Image Gallery** - Multiple product images with thumbnail navigation
- **Image Zoom Functionality** - Hover zoom on desktop with responsive behavior
  - **Small Desktop**: Zoom appears in details area (hiding product info)
  - **Large Desktop**: Traditional side-panel zoom experience
  - **Mobile**: Touch-friendly interactions
- **Professional Image Loading** - Custom loading states and error handling

### 🎨 UI/UX Enhancements

- **Professional Design** - Clean, modern interface with Amazon-inspired styling
- **Smooth Animations** - Framer Motion powered transitions
- **Toast Notifications** - User feedback with react-hot-toast
- **Custom Scrollbars** - Hidden scrollbars for cleaner appearance
- **Mobile Menu** - Responsive navigation for smaller screens

### 🔧 Technical Features

- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS** - Utility-first styling with custom configurations
- **Headless UI** - Accessible and unstyled UI components
- **Lucide React** - Beautiful, customizable icons
- **Axios** - HTTP client for API requests

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/next-amazon.git
   cd next-amazon
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
next-amazon/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── product/           # Product detail pages
│   ├── cartPage/          # Shopping cart page
│   ├── login/             # Authentication pages
│   ├── signup/            # User registration
│   └── category/          # Category browsing pages
├── components/            # Reusable React components
│   ├── HeaderAndFooter/   # Navigation and footer components
│   ├── Products/          # Product-related components
│   ├── Cart/              # Shopping cart components
│   ├── Loading/           # Loading states and spinners
│   ├── Button/            # Custom button components
│   ├── HorizontalScroll/  # Horizontal scrolling components
│   ├── Ads/               # Advertisement components
│   └── ContextApi/        # React Context providers
├── Types/                 # TypeScript type definitions
├── utils/                 # Utility functions and helpers
├── public/                # Static assets
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🎯 Key Components

### Product Detail Page (`components/Products/SingleProductDetail.tsx`)

- **Advanced Image Zoom**: Responsive zoom functionality for different screen sizes
- **Image Gallery**: Thumbnail navigation with smooth transitions
- **Professional Layout**: Card-based design with proper spacing and typography

### Header Component (`components/HeaderAndFooter/Header.tsx`)

- **Responsive Navigation**: Mobile menu for smaller screens
- **Search Functionality**: Integrated search with dropdown suggestions
- **User Authentication**: Login/signup integration

### Image Loading (`components/Loading/ImageLoader.tsx`)

- **Multiple Loading States**: Skeleton, spinner, pulse, and shimmer effects
- **Error Handling**: Graceful fallbacks for failed image loads
- **Performance Optimized**: Next.js Image component integration

## 🎨 Design System

### Colors

- **Primary**: Amazon Blue (`#0066c0`)
- **Secondary**: Amazon Yellow (`#ffd814`)
- **Neutral**: Gray scale for text and backgrounds
- **Success/Error**: Green and red for feedback

### Typography

- **Headings**: Semibold weights with proper hierarchy
- **Body Text**: Readable font sizes with good line height
- **Links**: Amazon blue with hover states

### Components

- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Consistent styling with hover effects
- **Forms**: Clean, accessible form elements

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:

- Custom color palette matching Amazon's brand
- Responsive breakpoints for mobile-first design
- Custom utilities for scrollbar hiding
- Shimmer animation for loading states

### Next.js

- **App Router**: Latest Next.js 13+ routing system
- **TypeScript**: Full type safety throughout the application
- **Turbopack**: Fast development builds
- **Image Optimization**: Automatic image optimization

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: `< 768px` - Stacked layout with mobile menu
- **Tablet**: `768px - 1024px` - Side-by-side layout with zoom in details
- **Desktop**: `> 1024px` - Full layout with side-panel zoom

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Style

- **ESLint**: Configured for Next.js and TypeScript
- **Prettier**: Code formatting (recommended)
- **TypeScript**: Strict mode enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Amazon** - For the design inspiration
- **Vercel** - For the deployment platform

## 📞 Support

If you have any questions or need help with the project:

- Create an issue on GitHub
- Check the documentation
- Review the code examples

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
