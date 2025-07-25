import React from 'react';
import { createRoot } from "react-dom/client";
import AppRouter from './components/Layout';
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<AppRouter />);

// root.render(
//   <React.StrictMode>
//     <LavaLamp className="fixed inset-0 z-0" /> {/* Render LavaLamp as background */}
//     <div className="relative z-10"> {/* Content wrapper to ensure it's above LavaLamp */}
//       <AppRouter />
//     </div>
//   </React.StrictMode>
// );
