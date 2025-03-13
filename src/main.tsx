
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add this to debug issues with initialization
console.log("Application initializing...");
const rootElement = document.getElementById("root");
console.log("Root element found:", !!rootElement);

if (rootElement) {
  createRoot(rootElement).render(<App />);
  console.log("App rendered successfully");
} else {
  console.error("Failed to find root element");
}
