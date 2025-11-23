
# **3D Portfolio Website**

A modern, interactive **3D portfolio web application** built using **React**, **Tailwind CSS**, **AOS animations**, and a **custom 3D robot** powered by **Spline**.
This project was created by following a tutorial on YouTube and then extended to include additional animations, interactions, and styling.

---

##  **Features**

###  **Modern UI with React + Tailwind CSS**

* Fully responsive layout
* Clean utility-based styling
* Fast development workflow

###  **3D Robot Integration (Spline)**

* A 3D robot character that reacts as users scroll
* Smooth, GPU-accelerated WebGL rendering
* Adds personality and visual storytelling to the portfolio

###  **AOS (Animate On Scroll)**

* Smooth fade, slide, and zoom animations
* Enhances interactivity as users navigate the page
* Lightweight scroll-triggered animation library

###  **Static Site**

* No backend needed

---

##  **Tech Stack**

| Category        | Technologies                                      |
| --------------- | ------------------------------------------------- |
| **Frontend**    | React, JavaScript, Tailwind CSS                   |
| **3D Engine**   | Spline (embed integration)                        |
| **Animations**  | AOS (Animate On Scroll)                           |
| **Build Tools** | Vite / Create React App (choose the one you used) |
| **Deployment**  | Vercel / Netlify / GitHub Pages (optional)        |

---

##  **Installation & Setup**

Clone the project:

```bash
git clone https://github.com/Andy-Ops254/react-portfolio
cd react-portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

##  **Spline Integration**

```jsx
import { Spline } from '@splinetool/react-spline';

<Spline scene="https://prod.spline.design/Efo7TPZVyhr8SdKA/scene.splinecode" />

```

The 3D robot reacts or moves based on scroll-triggered effects, providing a dynamic and immersive experience.

---

##  **AOS Animations**

Activated in your project using:

```js
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
```

These animations help bring the website to life through scroll-based transitions.

---



##  **Future Improvements (Optional)**

* Add dark mode
* Include additional 3D objects or scenes
* Improve robot movement logic (e.g., face mouse cursor, trigger animations)
* Add routing for multi-page navigation
* Add performance optimization (lazy loading, suspense)

---

##  **Credits**

* Tutorial inspiration from YouTube (MiladiCode)
* Spline for the 3D design tools
* AOS for scroll animations
* Tailwind CSS for styling utilities

---

## 📝 **License**

MIT 
---


