# Iqra Hussain - Portfolio Website

A premium, award-winning personal portfolio website with a modern, highly animated UI/UX inspired by Apple, Framer, and Awwwards-level design quality.

## 🌟 Features

- **Modern UI/UX**: Glassmorphism + Neumorphism accents with smooth animations
- **Fully Responsive**: Mobile-first design with Tailwind CSS
- **High Performance**: Lighthouse optimized with Next.js 15
- **SEO Optimized**: Meta tags, sitemap, OG tags, and robots.txt
- **Accessibility**: ARIA compliant with keyboard navigation
- **Admin Panel**: Secure JWT authentication for content management
- **Contact Form**: Backend integration with email notifications
- **Dynamic Projects**: JSON-driven project management system

## 🚀 Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **Framer Motion** (Animations)
- **GSAP** (Advanced animations)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Nodemailer** (Email)
- **Multer** (File uploads)
- **Cloudinary** (Image hosting)

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

## 📁 Project Structure

```
Portfolio/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/            # App Router pages
│   │   │   ├── admin/      # Admin panel
│   │   │   ├── page.tsx    # Home page
│   │   │   ├── layout.tsx  # Root layout
│   │   │   ├── globals.css # Global styles
│   │   │   ├── sitemap.ts  # SEO sitemap
│   │   │   └── robots.ts   # SEO robots
│   │   └── components/     # React components
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── TechStack.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       ├── Education.tsx
│   │       ├── Certificates.tsx
│   │       ├── Achievements.tsx
│   │       ├── Resume.tsx
│   │       ├── Contact.tsx
│   │       ├── Footer.tsx
│   │       ├── CustomCursor.tsx
│   │       ├── PageLoader.tsx
│   │       └── ScrollProgress.tsx
│   ├── public/             # Static assets
│   ├── package.json
│   ├── next.config.ts
│   └── vercel.json
├── backend/                 # Express.js backend
│   ├── models/             # Mongoose models
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── routes/             # API routes
│   │   ├── auth.js
│   │   ├── projects.js
│   │   ├── contact.js
│   │   └── admin.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── render.yaml
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account
- Gmail account (for email notifications)

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
# Create .env.local file
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
npm start
```

### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
# Copy .env.example to .env
cp .env.example .env
```

4. **Configure environment variables**
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-atlas-connection-string
JWT_SECRET=your_secure_jwt_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

5. **Run development server**
```bash
npm run dev
```

6. **Run production server**
```bash
npm start
```

### Initial Admin Setup

1. **Register admin user**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your_secure_password"}'
```

2. **Login to get token**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your_secure_password"}'
```

3. **Access admin panel**
- Navigate to `http://localhost:3000/admin`
- Login with your admin credentials

## 🚢 Deployment

### Frontend Deployment (Vercel)

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Configure environment variables:
  - `NEXT_PUBLIC_API_URL`: Your backend URL
- Deploy

### Backend Deployment (Render)

1. **Push code to GitHub**
```bash
git add backend/
git commit -m "Add backend"
git push origin main
```

2. **Deploy on Render**
- Go to [render.com](https://render.com)
- Create new Web Service
- Connect your GitHub repository
- Configure environment variables (see backend setup)
- Deploy

### MongoDB Atlas Setup

1. **Create MongoDB Atlas account**
- Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Create free cluster
- Get connection string

2. **Configure database access**
- Create database user
- Whitelist IP addresses (0.0.0.0/0 for development)

3. **Update backend .env**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

## 📧 Email Configuration

### Gmail Setup

1. **Enable 2-Factor Authentication**
- Go to Google Account settings
- Enable 2FA

2. **Generate App Password**
- Go to Security > App passwords
- Generate new app password
- Use this password in `EMAIL_PASS`

3. **Update backend .env**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🎨 Customization

### Update Personal Information

1. **Update Hero section** (`frontend/src/components/Hero.tsx`)
- Change name, roles, social links

2. **Update About section** (`frontend/src/components/About.tsx`)
- Update personal info, skills, interests

3. **Update Projects** (`frontend/src/components/Projects.tsx`)
- Add/remove projects, update tech stack

4. **Update Contact info** (`frontend/src/components/Contact.tsx`)
- Update email, phone, location

### Update Colors & Theme

Edit `frontend/src/app/globals.css`:
```css
:root {
  --primary: your-primary-color;
  --secondary: your-secondary-color;
}
```

### Update SEO Metadata

Edit `frontend/src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Role",
  description: "Your description",
  // ... other metadata
};
```

## 🔒 Security Best Practices

1. **Never commit .env files**
- Add `.env` to `.gitignore`

2. **Use strong passwords**
- Generate secure JWT secrets
- Use strong admin passwords

3. **Enable HTTPS**
- Vercel provides HTTPS automatically
- Render provides HTTPS automatically

4. **Rate limiting**
- Implement rate limiting on API routes
- Use express-rate-limit middleware

5. **Input validation**
- Validate all user inputs
- Sanitize data before storage

## 🐛 Troubleshooting

### Common Issues

**Frontend build fails**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Backend connection fails**
```bash
# Check MongoDB connection
# Verify MONGODB_URI in .env
# Check MongoDB Atlas whitelist
```

**Email not sending**
```bash
# Verify Gmail app password
# Check EMAIL_HOST and EMAIL_PORT
# Ensure 2FA is enabled
```

**Admin panel not accessible**
```bash
# Verify JWT_SECRET matches
# Check token expiration
# Clear localStorage and login again
```

## 📊 Performance Optimization

### Lighthouse Score Targets

- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100+

### Optimization Tips

1. **Image optimization**
- Use Next.js Image component
- Compress images before upload
- Use WebP format

2. **Code splitting**
- Next.js automatically splits code
- Use dynamic imports for heavy components

3. **Minimize bundle size**
- Tree shaking enabled by default
- Remove unused dependencies

4. **Enable caching**
- Vercel automatically caches
- Use CDN for static assets

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Iqra Hussain**
- LinkedIn: [https://www.linkedin.com/in/iqra-hussain-5158222a3](https://www.linkedin.com/in/iqra-hussain-5158222a3)
- GitHub: [https://github.com/Iqra-hussain235/](https://github.com/Iqra-hussain235/)
- Email: iqrah7085@gmail.com

## 🙏 Acknowledgments

- Inspired by Apple, Framer, and Awwwards design
- Built with Next.js, Tailwind CSS, and Framer Motion
- Icons by Lucide React
- UI components by Shadcn UI

---

**Made with ❤️ by Iqra Hussain**
