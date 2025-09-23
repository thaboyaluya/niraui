

<div align="center">

<img src="https://niraui.onrender.com/img/svgviewer-output.svg" width="80" height="80" loading="lazy" alt="Nira UI logo">

🎉 🚀 **Nira UI** provides reusable Tailwind CSS UI components and themes so you can design and ship websites faster.

[![NPM Version](https://img.shields.io/npm/v/nira-ui?color=00BFFF&label=nira-ui)](https://www.npmjs.com/package/nira-ui) 
[![License](https://img.shields.io/github/license/thaboyaluya/nira-ui?color=green)](LICENSE) 
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-blue?logo=tailwindcss)](https://tailwindcss.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](CONTRIBUTING.md) 

</div>

---

## 📖 Table of Contents
- [Introduction](#-introduction)
- [Installation](#-installation)
  - [Via NPM](#installing-via-npm)
  - [Via CDN](#installing-via-cdn)
- [Usage](#-usage)
- [Quick Start Example Project](#-quick-start-example-project)
- [Features](#-features)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Introduction

**Nira UI** is a component library built with **Tailwind CSS v4**. It offers ready-to-use UI elements, utilities, and themes that speed up the process of building modern, responsive, and accessible websites.

You can install it through **NPM** or load it directly from a **CDN**.

---

## 📦 Installation

### Installing via NPM

Make sure you have [Node.js](https://nodejs.org) and [Tailwind CSS](https://tailwindcss.com) set up in your project.

1. Install Nira UI:
   ```bash
   npm i nira-ui
   ```

2. Add the Nira-UI plugin to your CSS file:
   ```css
   @import "tailwindcss";
   @plugin "nira-ui/plugin.js";
   ```

---

### Installing via CDN

If you don’t want to set up Node.js or Tailwind locally, you can include Nira UI directly from a CDN:

```html
<link href="https://cdn.jsdelivr.net/gh/thaboyaluya/nira-ui@master/dist/nira.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Browse the [components gallery](https://niraui.onrender.com/components/index.html), copy the code you need, and paste it into your project.

---

##  ⚡ Usage

Once installed, you can start using [Nira UI components](https://niraui.onrender.com/components/index.html) immediately by including them in your HTML or JSX files. Example usage:

```html
<button class="button button-primary">Click Me</button>
```

For full examples and customization options, check the [documentation](https://niraui.onrender.com/docs/customize.html).

---

## 🏁 Quick Start Example Project

Here’s a minimal HTML project you can use to test Nira UI quickly (via CDN):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nira UI Quick Start</title>
  <link href="https://cdn.jsdelivr.net/gh/thaboyaluya/nira-ui@master/dist/nira.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="p-6 flex flex-col items-center gap-4">
  <h1 class="text-3xl font-bold text-blue-600">🚀 Hello from Nira UI!</h1>
  <button class="button button-primary">Click Me</button>
  <button class="button button-secondary">Secondary Button</button>
  <div class="card w-80 p-4">
    <h2 class="text-xl font-semibold">Card Example</h2>
    <p class="text-gray-600">This is a reusable Nira UI card component.</p>
  </div>
</body>
</html>
```

Simply save this as `index.html` and open it in your browser to see Nira UI in action. 🎉

---

## ✨ Features
-  Prebuilt, customizable Tailwind CSS components  
-  Install via **NPM** or load via **CDN**  
-  Simple plugin integration with Tailwind CSS v4  
-  Copy-paste ready components for rapid prototyping 

---

## 📚 Documentation

Full documentation, component previews, and examples are available here:  
👉 [Nira UI Docs](https://niraui.onrender.com/index.html)

---



## 📄 License

This project is licensed under the [MIT License](https://github.com/thaboyaluya/niraui/blob/master/LICENSE).
