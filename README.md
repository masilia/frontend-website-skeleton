# Express Twig App

A modern web application using Express.js with Twig templating, Vite for asset bundling, and SCSS with the 7-1 pattern.

## Project Structure

```
├── data/               # JSON data files
├── public/             # Static assets
│   ├── css/
│   ├── images/
│   └── js/
├── src/                # Source files
│   ├── js/             # JavaScript source
│   │   ├── components/ # JS components
│   │   └── main.js     # Main JS entry
│   └── scss/           # SCSS source (7-1 pattern)
│       ├── base/       # Base styles
│       ├── components/ # Component styles
│       ├── layout/     # Layout styles
│       ├── responsive/ # Media queries
│       └── main.scss   # Main SCSS entry
├── views/              # Twig templates
│   ├── layout/         # Layout components
│   └── pages/          # Page templates
├── server.js           # Express server
└── vite.config.js      # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The server will be available at http://localhost:3000.

## Development Guidelines

### Adding New Features

#### For New Pages:
1. Add a route in `server.js`:
   ```javascript
   app.get('/new-page', async (req, res) => {
     const pageData = await loadData('new-page');
     res.render('pages/new-page', { 
       title: 'New Page',
       pageData
     });
   });
   ```

2. Create a corresponding Twig template in `views/pages/new-page.twig`

#### For New Components:
1. Create SCSS in the appropriate folder under `src/scss/`
2. Add JavaScript if needed in `src/js/components/`

### Styling Changes

- Follow the existing SCSS architecture (7-1 pattern)
- Add component-specific styles to `src/scss/components/` folder
- Add layout-specific styles to `src/scss/layout/` folder
- Update variables in `src/scss/base/_variables.scss`

### Data Modifications

- Update or create JSON files in the `data/` directory
- Follow the existing data structure pattern

### JavaScript Enhancements

1. Add new components to `src/js/components/`
2. Import and initialize in `src/js/main.js`

## Architecture

This project follows a clean separation of concerns:
- **Server-side rendering** with Twig templates
- **Progressive enhancement** through JavaScript
- **Data-driven** content from JSON files
- **Modular styling** with SCSS 7-1 pattern

## Building for Production

```bash
# Build for production
npm run build
```

The built files will be available in the `dist/` directory.
