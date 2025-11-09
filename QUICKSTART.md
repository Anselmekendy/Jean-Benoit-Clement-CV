# 🚀 Quick Start Guide

## Development Setup

### 1. Install dependencies
```bash
npm install
```
or if you use Yarn:
```bash
yarn install
```

### 2. Start development server
```bash
npm start
```
or with Yarn:
```bash
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your app
2. Deploy to GitHub Pages automatically

**First time deploying?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions.

## Project Structure

```
JBC-Portfolio-main/
├── public/           # Static files
│   └── index.html    # HTML template
├── src/
│   ├── components/   # Reusable components
│   │   ├── ui/       # UI components (buttons, cards, etc.)
│   │   ├── AboutSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navigation.jsx
│   │   └── TestimonialsSection.jsx
│   ├── pages/        # Page components
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Resume.jsx
│   ├── App.css
│   ├── App.js        # Main app component
│   ├── index.css     # Global styles
│   └── index.js      # Entry point
├── craco.config.js   # CRACO configuration
├── package.json
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs tests
- `npm run deploy` - Deploys to GitHub Pages

## Technologies Used

- ⚛️ React 19
- 🎨 Tailwind CSS
- 🧭 React Router DOM
- 🔔 Sonner (Toast notifications)
- 🛠️ CRACO (Custom CRA configuration)

## Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Contact Info** (`src/pages/Contact.jsx`):
   - Email
   - Phone
   - Location

2. **Experience** (`src/pages/Resume.jsx`):
   - Work experience array
   - Education array
   - Skills
   - Languages

3. **Projects** (`src/pages/Projects.jsx`):
   - Add your projects

4. **About** (`src/components/AboutSection.jsx`):
   - Update bio and description

### Styling

- **Colors**: Edit `tailwind.config.js` to customize the color palette
- **Global Styles**: Modify `src/index.css`
- **Component Styles**: Use Tailwind classes directly in components

## Need Help?

- 📖 Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions
- 📚 See [README.md](./README.md) for more information
- 🐛 Found a bug? Please report it!

---

Happy coding! 🎉
