import React, { useEffect, useState } from 'react'
import './ServicesPage.css'

/* ------------------------------------------------------------------
   All services data. To add a technology, add one object here.
   Each technology: id, name, title, subtitle, colors, services[]
------------------------------------------------------------------- */
const technologies = [
  {
    id: 'wordpress',
    name: 'WordPress',
    title: 'WordPress Development Services',
    subtitle: 'Comprehensive WordPress solutions for businesses of all sizes',
    colors: ['#4299e1', '#764ba2'],
    services: [
      { icon: '🆕', title: 'New WordPress Website', text: 'Custom WordPress websites built from scratch with modern design and functionality tailored to your business needs.' },
      { icon: '🎨', title: 'WordPress Website Redesign', text: 'Refresh your existing WordPress site with modern design, improved UX, and updated functionality.' },
      { icon: '⚡', title: 'Performance Optimization', text: 'Speed up your WordPress site with caching, image optimization, and code minification for better user experience.' },
      { icon: '🔒', title: 'Security Audit & Fixing', text: 'Comprehensive security assessments and fixes to protect your WordPress site from vulnerabilities and attacks.' },
      { icon: '🔄', title: 'WordPress Website Upgrade', text: 'Keep your WordPress core, themes, and plugins updated for security, performance, and compatibility.' },
      { icon: '🎭', title: 'Theme Customization & Design', text: 'Custom theme development or modification of existing themes to match your brand identity perfectly.' },
      { icon: '🛒', title: 'E-commerce with WooCommerce', text: 'Build robust online stores with WooCommerce, including payment integration, inventory management, and shipping solutions.' },
      { icon: '🔌', title: 'Plugin Customization & Development', text: 'Custom plugin development or modification of existing plugins to add specific functionality to your WordPress site.' },
      { icon: '🔧', title: 'WordPress Website Maintenance', text: 'Ongoing maintenance services including updates, backups, security monitoring, and performance checks.' },
      { icon: '📱', title: 'Mobile Optimization', text: 'Ensure your WordPress site looks and performs perfectly on all mobile devices and screen sizes.' },
      { icon: '🔍', title: 'WordPress SEO Services', text: 'Optimize your WordPress site for search engines with technical SEO, content optimization, and performance enhancements.' },
      { icon: '🛡️', title: 'WordPress Backup Solutions', text: 'Reliable backup and disaster recovery solutions to protect your WordPress site data and content.' },
    ],
  },
  {
    id: 'shopify',
    name: 'Shopify',
    title: 'Shopify Development Services',
    subtitle: 'End-to-end Shopify solutions to launch, grow, and scale your online store',
    colors: ['#38a169', '#68d391'],
    services: [
      { icon: '🆕', title: 'New Shopify Store Setup', text: 'Complete Shopify store setup from scratch, including products, collections, navigation, and checkout configuration.' },
      { icon: '🎨', title: 'Shopify Store Redesign', text: 'Give your existing Shopify store a fresh, modern look with better UX and higher conversion rates.' },
      { icon: '🎭', title: 'Shopify Theme Customization', text: 'Custom theme development and Liquid-based modifications to match your brand identity perfectly.' },
      { icon: '🧩', title: 'Shopify App Development', text: 'Custom public and private Shopify apps built to add unique features and automate your store workflows.' },
      { icon: '🔌', title: 'Third-Party App Integration', text: 'Seamless integration of reviews, email marketing, loyalty, subscriptions, and other apps into your store.' },
      { icon: '💳', title: 'Payment Gateway Integration', text: 'Secure setup of payment gateways, local payment methods, and multi-currency checkout for global customers.' },
      { icon: '🚚', title: 'Shipping & Inventory Setup', text: 'Configure shipping rates, carriers, fulfillment, and inventory sync across multiple locations and channels.' },
      { icon: '⚡', title: 'Speed Optimization', text: 'Improve store loading speed with image compression, code cleanup, and lean app usage for better sales.' },
      { icon: '🔄', title: 'Platform Migration', text: 'Migrate your store from WooCommerce, Magento, BigCommerce, or others to Shopify without losing data or SEO.' },
      { icon: '🔍', title: 'Shopify SEO Services', text: 'Technical and on-page SEO to help your products and collections rank higher in search results.' },
      { icon: '📱', title: 'Mobile Optimization', text: 'Make sure your Shopify store delivers a smooth shopping experience on every phone and tablet.' },
      { icon: '🔧', title: 'Shopify Store Maintenance', text: 'Ongoing support including bug fixes, updates, monitoring, and small feature improvements.' },
    ],
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    title: 'Power BI & Business Intelligence Services',
    subtitle: 'Turn raw data into interactive dashboards and actionable insights',
    colors: ['#d69e2e', '#ecc94b'],
    services: [
      { icon: '📊', title: 'Custom Power BI Dashboards', text: 'Interactive, visually rich dashboards designed around your KPIs and business questions.' },
      { icon: '🧮', title: 'Data Modeling & DAX', text: 'Optimized star-schema data models and advanced DAX measures for accurate, fast calculations.' },
      { icon: '🧹', title: 'Power Query & ETL', text: 'Clean, transform, and combine data from multiple sources using Power Query and M language.' },
      { icon: '🔗', title: 'Data Source Integration', text: 'Connect SQL Server, Excel, SharePoint, Azure, Google Analytics, REST APIs, and 100+ other sources.' },
      { icon: '🔄', title: 'Report Migration', text: 'Migrate existing Excel, Tableau, Qlik, or SSRS reports to Power BI without losing insights.' },
      { icon: '🧩', title: 'Embedded Analytics', text: 'Embed Power BI reports and dashboards into your website, portal, or application.' },
      { icon: '🔐', title: 'Row-Level Security & Governance', text: 'Control who sees what with row-level security, workspaces, and data governance policies.' },
      { icon: '☁️', title: 'Power BI Service & Gateway Setup', text: 'Configure workspaces, apps, scheduled refresh, and on-premises data gateways.' },
      { icon: '📡', title: 'Real-Time Streaming Dashboards', text: 'Live dashboards that update instantly from IoT devices, sales systems, or event streams.' },
      { icon: '📄', title: 'Paginated & Automated Reports', text: 'Pixel-perfect printable reports and automated email delivery on a schedule.' },
      { icon: '⚡', title: 'Report Performance Optimization', text: 'Speed up slow reports with model tuning, query folding, aggregations, and incremental refresh.' },
      { icon: '🎓', title: 'Training & Support', text: 'Hands-on training for your team and ongoing support for dashboards and data refresh.' },
    ],
  },
  {
    id: 'react',
    name: 'React & Next.js',
    title: 'React & Next.js Development Services',
    subtitle: 'Modern, fast, and scalable React solutions for web and mobile',
    colors: ['#0ea5e9', '#22d3ee'],
    services: [
      { icon: '⚛️', title: 'Custom React Web Apps', text: 'Scalable, high-performance single-page applications built with React tailored to your business goals.' },
      { icon: '🖥️', title: 'Frontend Development', text: 'Pixel-perfect, responsive user interfaces built with reusable React components and modern tooling.' },
      { icon: '🚀', title: 'Next.js Development', text: 'Server-side rendered and static React sites with Next.js for superior SEO and lightning-fast load times.' },
      { icon: '📊', title: 'Dashboard & Admin Panels', text: 'Interactive dashboards, data visualizations, and admin panels for managing your business operations.' },
      { icon: '🔗', title: 'API Integration', text: 'Connect your React frontend to REST and GraphQL APIs, third-party services, and backend systems.' },
      { icon: '🗃️', title: 'State Management', text: 'Clean, maintainable state architecture using Redux Toolkit, Context API, Zustand, or React Query.' },
      { icon: '📱', title: 'React Native Mobile Apps', text: 'Cross-platform iOS and Android apps built from a single React Native codebase.' },
      { icon: '🔄', title: 'React Migration & Upgrade', text: 'Upgrade legacy React versions or migrate jQuery and Angular apps to modern React safely.' },
      { icon: '⚡', title: 'Performance Optimization', text: 'Code splitting, lazy loading, memoization, and bundle optimization for faster React applications.' },
      { icon: '🧪', title: 'Testing & QA', text: 'Unit, integration, and end-to-end testing with Jest, React Testing Library, and Cypress.' },
      { icon: '🎨', title: 'UI/UX Implementation', text: 'Turn Figma designs into polished React interfaces with design systems and component libraries.' },
      { icon: '🔧', title: 'Maintenance & Support', text: 'Ongoing bug fixes, feature enhancements, dependency updates, and technical support for your React apps.' },
    ],
  },
  {
    id: 'angular',
    name: 'Angular',
    title: 'Angular Development Services',
    subtitle: 'Enterprise-grade web applications built with Angular and TypeScript',
    colors: ['#dd0031', '#f56565'],
    services: [
      { icon: '🅰️', title: 'Custom Angular Applications', text: 'Robust, scalable enterprise web apps built with Angular and TypeScript.' },
      { icon: '🧱', title: 'Angular Component Libraries', text: 'Reusable component libraries and design systems with Angular Material.' },
      { icon: '🔗', title: 'REST & GraphQL Integration', text: 'Connect Angular frontends to backend APIs with RxJS and typed services.' },
      { icon: '🔄', title: 'AngularJS to Angular Migration', text: 'Safely migrate legacy AngularJS apps to the latest Angular version.' },
      { icon: '⚡', title: 'Performance Tuning', text: 'Lazy loading, change detection tuning, and bundle optimization for faster apps.' },
      { icon: '📲', title: 'Progressive Web Apps', text: 'Installable, offline-capable PWAs built with Angular service workers.' },
      { icon: '📊', title: 'Admin Dashboards & Portals', text: 'Data-rich dashboards, customer portals, and back-office tools with charts and tables.' },
      { icon: '🧪', title: 'Testing & QA', text: 'Unit and end-to-end testing with Jasmine, Karma, Jest, and Cypress.' },
      { icon: '🔧', title: 'Support & Upgrades', text: 'Version upgrades, bug fixes, and long-term maintenance for Angular projects.' },
    ],
  },
  {
    id: 'vue',
    name: 'Vue.js & Nuxt',
    title: 'Vue.js & Nuxt Development Services',
    subtitle: 'Lightweight, reactive, and elegant user interfaces with Vue',
    colors: ['#2f855a', '#42b883'],
    services: [
      { icon: '💚', title: 'Custom Vue.js Applications', text: 'Fast, reactive single-page applications built with Vue 3 and the Composition API.' },
      { icon: '🚀', title: 'Nuxt.js SSR & Static Sites', text: 'SEO-friendly server-rendered and static websites powered by Nuxt.' },
      { icon: '🗃️', title: 'Pinia & Vuex State Management', text: 'Predictable, scalable state architecture for complex Vue applications.' },
      { icon: '🧩', title: 'Component Development', text: 'Reusable Vue components and UI kits built with Vuetify, PrimeVue, or custom design.' },
      { icon: '🔄', title: 'Vue 2 to Vue 3 Migration', text: 'Upgrade older Vue apps to Vue 3 with minimal downtime and risk.' },
      { icon: '📊', title: 'Dashboards & Admin Panels', text: 'Interactive admin panels and analytics dashboards built with Vue.' },
      { icon: '🔗', title: 'API Integration', text: 'Connect Vue apps to REST, GraphQL, Firebase, and Supabase backends.' },
      { icon: '⚡', title: 'Performance Optimization', text: 'Lazy loading, code splitting, and rendering optimization for fast Vue apps.' },
      { icon: '🔧', title: 'Support & Maintenance', text: 'Ongoing updates, bug fixes, and improvements for your Vue projects.' },
    ],
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    title: 'Node.js Development Services',
    subtitle: 'High-performance backends, APIs, and real-time applications',
    colors: ['#68a063', '#3c873a'],
    services: [
      { icon: '🟢', title: 'Custom Node.js Backend', text: 'Scalable server-side applications built with Node.js, Express, NestJS, or Fastify.' },
      { icon: '🔌', title: 'REST & GraphQL API Development', text: 'Secure, well-documented APIs for web, mobile, and third-party integrations.' },
      { icon: '💬', title: 'Real-Time Applications', text: 'Chat, notifications, live dashboards, and collaboration tools using WebSockets and Socket.IO.' },
      { icon: '🏗️', title: 'Microservices Architecture', text: 'Break monoliths into scalable microservices with queues, caching, and API gateways.' },
      { icon: '🍃', title: 'MongoDB & SQL Integration', text: 'Database design and integration with MongoDB, PostgreSQL, MySQL, and Redis.' },
      { icon: '🔐', title: 'Authentication & Security', text: 'JWT, OAuth2, role-based access, and secure API practices for your backend.' },
      { icon: '☁️', title: 'Serverless Development', text: 'AWS Lambda, Vercel, and Cloudflare Workers solutions that scale automatically.' },
      { icon: '🔗', title: 'Third-Party Integrations', text: 'Payments, email, SMS, maps, and CRM integrations with Stripe, Twilio, SendGrid, and more.' },
      { icon: '🔧', title: 'Maintenance & Optimization', text: 'Performance tuning, security patches, and monitoring for Node.js systems.' },
    ],
  },
  {
    id: 'php',
    name: 'PHP & Laravel',
    title: 'PHP & Laravel Development Services',
    subtitle: 'Reliable, secure web applications with PHP frameworks',
    colors: ['#ff2d20', '#fc8181'],
    services: [
      { icon: '🐘', title: 'Custom PHP Development', text: 'Tailor-made web applications and portals built with clean, secure PHP.' },
      { icon: '🔥', title: 'Laravel Web Applications', text: 'Modern, scalable applications built on Laravel with Eloquent, queues, and Blade or Inertia.' },
      { icon: '🧰', title: 'CodeIgniter & Symfony', text: 'Development and support for CodeIgniter, Symfony, and CakePHP projects.' },
      { icon: '🔗', title: 'API & Third-Party Integration', text: 'Payment gateways, CRMs, ERPs, and external API integrations.' },
      { icon: '🔄', title: 'Legacy PHP Modernization', text: 'Upgrade old PHP code to current versions and frameworks without breaking features.' },
      { icon: '🔌', title: 'Laravel REST API Development', text: 'Secure, versioned APIs with Sanctum or Passport authentication for web and mobile apps.' },
      { icon: '🗂️', title: 'Custom CMS & Admin Panels', text: 'Tailored content management and admin systems using Laravel Nova, Filament, or custom builds.' },
      { icon: '🛒', title: 'E-commerce Development', text: 'Custom online stores and marketplaces built with PHP and Laravel.' },
      { icon: '🔧', title: 'Support & Maintenance', text: 'Bug fixing, security updates, and ongoing improvements for PHP applications.' },
    ],
  },
  {
    id: 'python',
    name: 'Python & Django',
    title: 'Python, Django & Flask Services',
    subtitle: 'Powerful backend, automation, and data solutions with Python',
    colors: ['#3776ab', '#ffd43b'],
    services: [
      { icon: '🐍', title: 'Django Web Development', text: 'Secure, scalable web applications built with Django and Django REST Framework.' },
      { icon: '⚗️', title: 'Flask & FastAPI Services', text: 'Lightweight, fast APIs and microservices using Flask and FastAPI.' },
      { icon: '🤖', title: 'Automation & Scripting', text: 'Automate repetitive tasks, reports, and workflows with custom Python scripts.' },
      { icon: '🕷️', title: 'Web Scraping & Data Pipelines', text: 'Reliable data collection, cleaning, and ETL pipelines tailored to your needs.' },
      { icon: '📈', title: 'Data Analysis & Visualization', text: 'Insightful analysis and dashboards using Pandas, NumPy, and visualization libraries.' },
      { icon: '🔌', title: 'REST API Development', text: 'Well-documented APIs with Django REST Framework, FastAPI, and OpenAPI specs.' },
      { icon: '🛠️', title: 'Django Admin & CMS Customization', text: 'Powerful custom admin interfaces and content workflows built on Django.' },
      { icon: '☁️', title: 'Cloud Deployment & Scaling', text: 'Deploy Python apps with Docker, AWS, and Gunicorn/Nginx for reliable performance.' },
      { icon: '🔧', title: 'Support & Maintenance', text: 'Upgrades, performance tuning, and ongoing support for Python projects.' },
    ],
  },
  {
    id: 'java-dotnet',
    name: 'Java & .NET',
    title: 'Java, Spring Boot & .NET Services',
    subtitle: 'Enterprise-ready applications built for scale and security',
    colors: ['#e76f00', '#512bd4'],
    services: [
      { icon: '☕', title: 'Java & Spring Boot Development', text: 'Robust enterprise backends and microservices with Java and Spring Boot.' },
      { icon: '🟣', title: '.NET & C# Applications', text: 'Web apps, APIs, and services built with ASP.NET Core and C#.' },
      { icon: '🏢', title: 'Enterprise Software', text: 'ERP, CRM, HRMS, and custom business systems for large organizations.' },
      { icon: '🔐', title: 'Authentication & Security', text: 'OAuth2, JWT, SSO, and role-based access control implementation.' },
      { icon: '🔄', title: 'Legacy System Migration', text: 'Move legacy monoliths to modern, cloud-ready architectures.' },
      { icon: '🏗️', title: 'Microservices & API Development', text: 'Scalable microservices and REST APIs with messaging queues and API gateways.' },
      { icon: '🗄️', title: 'ORM & Database Integration', text: 'Hibernate, JPA, and Entity Framework with SQL Server, Oracle, and PostgreSQL.' },
      { icon: '☁️', title: 'Cloud-Native Deployment', text: 'Deploy Java and .NET apps to Azure, AWS, and Kubernetes with CI/CD.' },
      { icon: '🔧', title: 'Support & Maintenance', text: 'Performance monitoring, upgrades, and dedicated support for enterprise apps.' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    title: 'Mobile App Development Services',
    subtitle: 'Native and cross-platform apps for iOS and Android',
    colors: ['#805ad5', '#ed64a6'],
    services: [
      { icon: '📱', title: 'React Native Apps', text: 'Cross-platform iOS and Android apps with one shared JavaScript codebase.' },
      { icon: '🦋', title: 'Flutter Apps', text: 'Beautiful, high-performance apps built with Flutter and Dart.' },
      { icon: '🍎', title: 'iOS Development (Swift)', text: 'Native iOS apps built with Swift and SwiftUI for the best Apple experience.' },
      { icon: '🤖', title: 'Android Development (Kotlin)', text: 'Native Android apps built with Kotlin and Jetpack Compose.' },
      { icon: '🏪', title: 'App Store Publishing', text: 'App Store and Google Play submission, listing setup, and release management.' },
      { icon: '🎨', title: 'Mobile UI/UX Design', text: 'Intuitive, engaging app interfaces designed for small screens and real users.' },
      { icon: '🔌', title: 'Backend & API for Apps', text: 'Secure backends, databases, and APIs that power your mobile applications.' },
      { icon: '🔔', title: 'Push Notifications & In-App Payments', text: 'Firebase notifications, in-app purchases, subscriptions, and payment gateway integration.' },
      { icon: '🔧', title: 'App Maintenance & Updates', text: 'OS compatibility updates, bug fixes, and feature releases for live apps.' },
    ],
  },
  {
    id: 'magento',
    name: 'Magento & E-commerce',
    title: 'Magento & Other E-commerce Platforms',
    subtitle: 'Online store solutions beyond WordPress and Shopify',
    colors: ['#f26322', '#f6ad55'],
    services: [
      { icon: '🛍️', title: 'Magento / Adobe Commerce', text: 'Custom Magento stores, extensions, and performance optimization for large catalogs.' },
      { icon: '🏬', title: 'BigCommerce Development', text: 'BigCommerce store setup, theme customization, and API-based integrations.' },
      { icon: '🧾', title: 'OpenCart & PrestaShop', text: 'Store setup, module development, and migration for OpenCart and PrestaShop.' },
      { icon: '🏗️', title: 'Headless Commerce', text: 'Decoupled storefronts using Next.js with Shopify, Medusa, or commercetools.' },
      { icon: '🔄', title: 'E-commerce Migration', text: 'Move your products, customers, and orders between platforms safely.' },
      { icon: '🧩', title: 'Custom Extension Development', text: 'Tailor-made modules and extensions to add unique store functionality.' },
      { icon: '⚡', title: 'Speed & Performance Optimization', text: 'Caching, Varnish, CDN, and code tuning for faster stores and better conversions.' },
      { icon: '💳', title: 'Payment & Shipping Integration', text: 'Connect payment gateways, shipping carriers, ERPs, and inventory systems.' },
      { icon: '🔧', title: 'Store Support & Maintenance', text: 'Ongoing updates, monitoring, and improvements for your online store.' },
    ],
  },
  {
    id: 'nocode',
    name: 'Wix, Webflow & Squarespace',
    title: 'Wix, Webflow & Squarespace Services',
    subtitle: 'Fast, beautiful websites on popular no-code and low-code platforms',
    colors: ['#4353ff', '#63b3ed'],
    services: [
      { icon: '🌊', title: 'Webflow Development', text: 'Pixel-perfect, animated websites and CMS builds with Webflow.' },
      { icon: '🧱', title: 'Wix & Wix Studio', text: 'Custom Wix websites with advanced layouts, Velo code, and integrations.' },
      { icon: '⬛', title: 'Squarespace Websites', text: 'Elegant Squarespace sites with custom styling and e-commerce setup.' },
      { icon: '📰', title: 'Headless CMS Setup', text: 'Content platforms using Strapi, Contentful, Sanity, or Ghost.' },
      { icon: '🔄', title: 'Platform Migration', text: 'Move your site between no-code platforms or to a custom stack.' },
      { icon: '💻', title: 'Custom Code & Integrations', text: 'Custom JavaScript, CSS, and third-party tool integrations beyond the builder defaults.' },
      { icon: '🔍', title: 'SEO Setup & Optimization', text: 'Meta tags, schema, speed, and structure tuned for search visibility.' },
      { icon: '🎯', title: 'Landing Pages & Funnels', text: 'High-converting landing pages with forms, tracking, and A/B testing.' },
      { icon: '🔧', title: 'Edits & Support', text: 'Quick updates, content changes, and ongoing support for your site.' },
    ],
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    title: 'UI/UX & Graphic Design Services',
    subtitle: 'Designs that look great and convert visitors into customers',
    colors: ['#d53f8c', '#f687b3'],
    services: [
      { icon: '🎨', title: 'UI/UX Design', text: 'Research-driven interface design with wireframes, prototypes, and user flows.' },
      { icon: '📐', title: 'Figma & Adobe XD Design', text: 'Detailed, developer-ready designs and clickable prototypes.' },
      { icon: '🧬', title: 'Design Systems', text: 'Consistent component libraries and style guides to scale your product.' },
      { icon: '🏷️', title: 'Logo & Branding', text: 'Logos, brand guidelines, and visual identity for your business.' },
      { icon: '🔎', title: 'UX Audit', text: 'Find usability issues and conversion blockers with expert audits.' },
      { icon: '🖼️', title: 'Marketing Creatives', text: 'Banners, social media graphics, and landing page designs.' },
      { icon: '📱', title: 'Mobile App UI Design', text: 'Beautiful iOS and Android app interfaces following platform guidelines.' },
      { icon: '✨', title: 'Prototyping & Animation', text: 'Interactive prototypes and micro-interactions that bring designs to life.' },
      { icon: '♿', title: 'Accessibility Design', text: 'Inclusive designs that meet WCAG standards and work for every user.' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    title: 'Cloud, DevOps & Hosting Services',
    subtitle: 'Reliable infrastructure, automation, and deployment pipelines',
    colors: ['#2b6cb0', '#4fd1c5'],
    services: [
      { icon: '☁️', title: 'AWS, Azure & Google Cloud', text: 'Cloud architecture, setup, and cost optimization on leading platforms.' },
      { icon: '🔁', title: 'CI/CD Pipelines', text: 'Automated build, test, and deploy pipelines with GitHub Actions, GitLab CI, or Jenkins.' },
      { icon: '🐳', title: 'Docker & Kubernetes', text: 'Containerization and orchestration for scalable, portable deployments.' },
      { icon: '🏗️', title: 'Infrastructure as Code', text: 'Repeatable infrastructure using Terraform and Ansible.' },
      { icon: '📡', title: 'Monitoring & Logging', text: 'Uptime monitoring, alerts, and log management for faster issue response.' },
      { icon: '🖥️', title: 'Server Setup & Hosting', text: 'VPS, cPanel, Nginx, and Apache setup with SSL, backups, and hardening.' },
      { icon: '🚚', title: 'Cloud Migration', text: 'Move applications and data from on-premise or other hosts to the cloud with minimal downtime.' },
      { icon: '🔐', title: 'Security & Compliance', text: 'Firewalls, IAM policies, and compliance hardening for cloud environments.' },
      { icon: '💾', title: 'Backup & Disaster Recovery', text: 'Automated backups and tested recovery plans to keep your business running.' },
    ],
  },
  {
    id: 'database',
    name: 'Databases',
    title: 'Database Design & Management',
    subtitle: 'Fast, secure, and well-structured data layers',
    colors: ['#718096', '#a0aec0'],
    services: [
      { icon: '🗄️', title: 'Database Design', text: 'Efficient schema design for MySQL, PostgreSQL, MongoDB, and SQL Server.' },
      { icon: '🚀', title: 'Query & Performance Tuning', text: 'Optimize slow queries, indexes, and database configuration.' },
      { icon: '🔄', title: 'Data Migration', text: 'Move data between databases and platforms with zero data loss.' },
      { icon: '💾', title: 'Backup & Recovery', text: 'Automated backups and tested disaster recovery plans.' },
      { icon: '⚡', title: 'Caching with Redis', text: 'Speed up applications with Redis and Memcached caching layers.' },
      { icon: '🔐', title: 'Database Security', text: 'Access control, encryption, and auditing for sensitive data.' },
      { icon: '🧑‍💻', title: 'Database Administration', text: 'Monitoring, replication, scaling, and day-to-day DBA support.' },
      { icon: '🍃', title: 'NoSQL Solutions', text: 'MongoDB, DynamoDB, Firebase, and Elasticsearch design and implementation.' },
      { icon: '🏭', title: 'Data Warehousing & ETL', text: 'Central data warehouses and ETL pipelines for analytics and reporting.' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    title: 'AI, Chatbot & Automation Services',
    subtitle: 'Add intelligence and automation to your business',
    colors: ['#6b46c1', '#9f7aea'],
    services: [
      { icon: '🧠', title: 'AI Integration', text: 'Add LLMs, OpenAI, and Claude APIs into your website or application.' },
      { icon: '💬', title: 'Chatbots & Virtual Assistants', text: 'Smart customer support and lead generation chatbots.' },
      { icon: '🔮', title: 'Machine Learning Solutions', text: 'Prediction, recommendation, and classification models for your data.' },
      { icon: '⚙️', title: 'Workflow Automation', text: 'Connect your tools with Zapier, Make, and n8n to remove manual work.' },
      { icon: '📄', title: 'Document & Data Processing', text: 'Automated extraction, summarization, and OCR for business documents.' },
      { icon: '📚', title: 'RAG & Knowledge Assistants', text: 'AI assistants that answer questions from your own documents and databases.' },
      { icon: '👁️', title: 'Computer Vision', text: 'Image recognition, object detection, and visual inspection solutions.' },
      { icon: '📈', title: 'Predictive Analytics', text: 'Forecast sales, churn, and demand using machine learning models.' },
      { icon: '🔧', title: 'AI Support & Tuning', text: 'Prompt tuning, monitoring, and improvement of AI features.' },
    ],
  },
  {
    id: 'seo',
    name: 'SEO & Marketing',
    title: 'SEO & Digital Marketing Services',
    subtitle: 'Grow traffic, leads, and sales across every channel',
    colors: ['#dd6b20', '#f6ad55'],
    services: [
      { icon: '🔍', title: 'Technical & On-Page SEO', text: 'Site audits, keyword strategy, and optimization for higher rankings.' },
      { icon: '✍️', title: 'Content Marketing', text: 'SEO-friendly blogs, landing pages, and product descriptions.' },
      { icon: '📣', title: 'Google & Meta Ads', text: 'Performance campaigns on Google, Facebook, and Instagram.' },
      { icon: '📧', title: 'Email Marketing', text: 'Automated email campaigns and flows using Mailchimp, Klaviyo, and more.' },
      { icon: '📊', title: 'Analytics & Tracking', text: 'GA4, Tag Manager, and conversion tracking setup with clear reports.' },
      { icon: '📍', title: 'Local SEO', text: 'Google Business Profile and local listing optimization.' },
      { icon: '🛒', title: 'E-commerce SEO', text: 'Product, category, and schema optimization to drive store traffic and sales.' },
      { icon: '📱', title: 'Social Media Marketing', text: 'Content planning, posting, and paid social campaigns across major platforms.' },
      { icon: '🎯', title: 'Conversion Rate Optimization', text: 'A/B testing and UX improvements that turn more visitors into customers.' },
    ],
  },
  {
    id: 'qa',
    name: 'QA & Testing',
    title: 'QA, Testing & Security Services',
    subtitle: 'Ship with confidence through thorough testing and security checks',
    colors: ['#319795', '#81e6d9'],
    services: [
      { icon: '🧪', title: 'Manual Testing', text: 'Functional, usability, and regression testing across devices and browsers.' },
      { icon: '🤖', title: 'Automation Testing', text: 'Selenium, Cypress, and Playwright test suites for faster releases.' },
      { icon: '⏱️', title: 'Performance & Load Testing', text: 'Find bottlenecks with JMeter and k6 before your users do.' },
      { icon: '🔒', title: 'Security Testing', text: 'Vulnerability scans and penetration testing for web apps and APIs.' },
      { icon: '📱', title: 'Mobile App Testing', text: 'Real-device testing for iOS and Android apps.' },
      { icon: '📝', title: 'Bug Reporting & QA Consulting', text: 'Clear reports and QA process improvement for your team.' },
      { icon: '🔌', title: 'API Testing', text: 'Automated REST and GraphQL API testing with Postman and REST Assured.' },
      { icon: '♿', title: 'Accessibility Testing', text: 'WCAG compliance checks to make your product usable for everyone.' },
      { icon: '🌐', title: 'Cross-Browser Compatibility Testing', text: 'Make sure your site works on Chrome, Safari, Firefox, Edge, and mobile browsers.' },
    ],
  },
]


const categoryMeta = {
  wordpress: { short: "CMS & Websites", icon: "🌐" },
  shopify: { short: "E-commerce Solutions", icon: "🛍️" },
  powerbi: { short: "Data & Insights", icon: "📊" },
  react: { short: "Modern Web Apps", icon: "⚛️" },
  angular: { short: "Scalable Applications", icon: "🅰️" },
  vue: { short: "Flexible User Interfaces", icon: "💚" },
  nodejs: { short: "APIs & Server Systems", icon: "🟢" },
  php: { short: "Web Platforms", icon: "🐘" },
  python: { short: "Automation & Data", icon: "🐍" },
  "java-dotnet": { short: "Enterprise Solutions", icon: "☕" },
  mobile: { short: "iOS & Android", icon: "📱" },
  magento: { short: "Online Store Platforms", icon: "🛒" },
  nocode: { short: "No-Code Websites", icon: "🧩" },
  design: { short: "Creative Experiences", icon: "🎨" },
  cloud: { short: "Cloud Infrastructure", icon: "☁️" },
  database: { short: "Secure Data Systems", icon: "🗄️" },
  ai: { short: "Intelligent Automation", icon: "🤖" },
  seo: { short: "Visibility & Growth", icon: "📈" },
  qa: { short: "Quality & Reliability", icon: "🛡️" },
};

function TechnologyCard({ service, tech }) {
  return (
    <article className="technology-card">
      <div className="technology-card-icon" aria-hidden="true">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </article>
  );
}

function ServiceSection({ tech, index }) {
  const meta = categoryMeta[tech.id] || { short: tech.subtitle, icon: "✦" };
  const style = {
    "--accent-1": tech.colors[0],
    "--accent-2": tech.colors[1],
    "--section-index": index,
  };

  return (
    <section id={tech.id} className="stack-section" style={style}>
      <div className="stack-section-heading">
        <span className="stack-section-symbol" aria-hidden="true">{meta.icon}</span>
        <div className="stack-section-title">
          <h2>{tech.name}</h2>
          <p>{meta.short}</p>
        </div>
        <span className="stack-section-count">{tech.services.length} services</span>
      </div>
      <div className="technology-grid">
        {tech.services.map((service) => (
          <TechnologyCard key={service.title} service={service} tech={tech} />
        ))}
      </div>
    </section>
  );
}

function ServicesPage() {
  const [activeTech, setActiveTech] = useState("");

  useEffect(() => {
    const sections = technologies
      .map((tech) => document.getElementById(tech.id))
      .filter(Boolean);
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveTech(visible.target.id);
      },
      { rootMargin: "-22% 0px -65% 0px", threshold: [0, 0.15, 0.4] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page tech-stack-page">
      <header className="stack-hero">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-wave hero-wave-one" aria-hidden="true" />
        <div className="stack-hero-content" id="top">
          <div className="hero-eyebrow"><span /> TECHNOLOGY THAT MOVES YOU FORWARD <span /></div>
          <h1>Our <em>Technology</em> Stack</h1>
          <h2>Powering Ideas with the Right Technology</h2>
          <p>We leverage the latest and most reliable technologies to build secure, scalable<br className="desktop-break" /> and high-performing solutions tailored to your business needs.</p>
        </div>
        <div className="hero-bottom-glow" aria-hidden="true" />
      </header>

      <nav className="tech-nav" aria-label="Technology categories">
        <div className="tech-nav-inner">
          <span className="nav-label-service">EXPLORE STACK</span>
          {technologies.map((tech) => (
            <a
              key={tech.id}
              href={`#${tech.id}`}
              className={`tech-chip ${activeTech === tech.id ? "is-active" : ""}`}
              style={{ "--chip-color": tech.colors[0] }}
            >
              <span className="chip-dot" aria-hidden="true" />
              {tech.name}
            </a>
          ))}
        </div>
      </nav>

      <main className="stack-main">
        <div className="stack-intro">
          <div>
            <span className="eyebrow">BUILT FOR WHAT'S NEXT</span>
            <h2>Technologies behind <span>better solutions.</span></h2>
          </div>
          <p>From the first idea to launch and beyond, explore the tools and services we use to create reliable digital experiences.</p>
        </div>

        <div className="stack-layout">
          {technologies.map((tech, index) => (
            <ServiceSection key={tech.id} tech={tech} index={index} />
          ))}
          <section className="stack-wide-section" style={{ "--accent-1": "#5136c8", "--accent-2": "#7564f5" }}>
            <div className="stack-wide-heading">
              <span className="stack-section-symbol" aria-hidden="true">📡</span>
              <div><h2>Big Data & Analytics</h2><p>Data-driven insights for smarter decisions</p></div>
            </div>
            <div className="wide-tech-list">
              {[
                ["🐘", "Hadoop", "Big data processing"],
                ["⚡", "Spark", "Fast data processing"],
                ["♧", "Kafka", "Real-time data streaming"],
                ["✣", "Tableau", "Data visualization"],
                ["📊", "Power BI", "Business intelligence"],
                ["❄️", "Snowflake", "Cloud data warehouse"],
              ].map(([icon, name, text]) => (
                <article className="wide-tech-card" key={name}>
                  <span aria-hidden="true">{icon}</span><div><h3>{name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <section className="stack-cta">
        <div className="cta-decoration" aria-hidden="true" />
        <div className="cta-content">
          <span className="eyebrow">LET'S BUILD SOMETHING GREAT</span>
          <h2>Your next big idea starts here.</h2>
          <p>Have a project in mind? Let’s find the right technology and build something exceptional together.</p>
<<<<<<< HEAD
          <a className="cta-button" href="mailto:mahamadsohel654@gmail.com">Let’s Talk About Your Project <span aria-hidden="true">↗</span></a>
=======
          <a className="cta-button" href="mailto:hello@yourbrand.com">Let’s Talk About Your Project <span aria-hidden="true">↗</span></a>
>>>>>>> 66761fe305b35581aca3379a24d7c2e7312de0ad
        </div>
        <div className="cta-trust-row">
          <span>✦ Scalable Solutions</span><span>♧ Secure & Reliable</span><span>✧ Innovative Technology</span><span>◎ Your Success, Our Mission</span>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
