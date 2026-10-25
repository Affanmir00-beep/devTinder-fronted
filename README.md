# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# DEVTINDER

// created project hello world shown
// remove unnecessary code 
// installed tailwind
// we are using a library daisy ui
// changed whole theme  with daisy ui library
// added a navbar  in app.jsx with daisy ui change it s margin give space from right 
// create a  navbar component file
// now we gonna set routing in our application /login /signup /feed etc  now we gonna do it by react router  by this command npm i react-router-dom  react-router
// installed react router dom/react router
// define rourtes of our site


BODY
    NAVABR  
    ROUTES=/ => FEED
     ROUTES=/LOGIN => LOGIN PAGE
        ROUTES=/CONNECTIONS => CONNECTIONS PAGE
         ROUTES =/PROFILE => PROFILE


         // created browser components inside it we created routes  in  routes we created ifrst parnet route then
         <Routes>
  <!-- <Route path="/" element={<Body/>}>
   <Route path="/Login" element={<Login/>}/>
    <Route path="/Profile" element={<Profile/>}/>
  </Route>
  {/* // this element will decide waht will render in this path */}
</Routes> -->
and for usig more data like for  login and profile where navbar alos appear we use outlet in body
created footer
creating login
install axios 
install axios in backend => add middleware in configuration :configuration  credentials:true
in our frontend we must have to pass winthcredentials to get cookies
whenever we are making an api call in axios we must have to pass{withcredentials: true}
