
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add this to debug issues with initialization
console.log("Application initializing...");
const rootElement = document.getElementById("root");
console.log("Root element found:", !!rootElement);

// Error boundary for the entire application
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});

if (rootElement) {
  try {
    createRoot(rootElement).render(<App />);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Failed to render app:", error);
  }
} else {
  console.error("Failed to find root element");
}
