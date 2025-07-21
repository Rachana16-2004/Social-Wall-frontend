# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Social Wall App

This is a **Social Media Wall** application built using **React** for the frontend . Users can post status updates with images, like and comment on posts, and manage their own posts including editing and deleting.

## 🚀 Features

- 🧾 User Authentication (via Supabase)
- 📝 Create, Edit, and Delete Posts
- 🖼️ Image Upload to Supabase Storage
- ❤️ Like and 💬 Comment on Posts
- ⏰ Real-time Feed with Timestamps
- 🧪 Responsive UI with Material Design
- 🎨 Custom 3D and Standard CSS-like Styling

Output:
![image alt](https://github.com/Rachana16-2004/Social-Wall-frontend/blob/master/WhatsApp%20Image%202025-06-19%20at%2022.35.40.jpeg?raw=true)
## 📦 Folder Structure

lib/
├── auth/ # Authentication Pages
├── components/ # UI Components
├── pages/ # Screens like FeedPage, CreatePostPage, etc.
├── services/ # Supabase Integration Logic
└── main.dart # App Entry Point

### Run the App

npm run dev
