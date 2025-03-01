import express from 'express';
import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
(async () => {
  const app = express();
	const PORT = process.env.PORT || 3000;
	
	 const vite = await createServer({
	    server: { middlewareMode: true },
	    appType: 'custom'
	  });
	
	app.use(vite.middlewares);
	
	// Set up Twig as the view engine
	app.set('view engine', 'twig');
	app.set('views', path.join(__dirname, 'views'));
	app.set('twig options', {
	  allowAsync: true,
	  strict_variables: false
	});
	
	// Serve static files
	app.use(express.static(path.join(__dirname, 'public')));
	
	// Data loading utility
	async function loadData(filename) {
	  try {
	    const data = await fs.readFile(path.join(__dirname, 'data', `${filename}.json`), 'utf8');
	    return JSON.parse(data);
	  } catch (error) {
	    console.error(`Error loading data from ${filename}.json:`, error);
	    return {};
	  }
	}

	// Routes
	app.get('/', async (req, res) => {
	  const pageData = await loadData('home');
	  res.render('pages/home', { 
	    title: 'Home',
	    pageData
	  });
	});
	
	// Start the server
	app.listen(PORT, () => {
	  console.log(`Server running on http://localhost:${PORT}`);
	});
	
})();
