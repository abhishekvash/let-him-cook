# LetHimCook v0.1.0

![LetHimCook Logo](/src/assets/GreenLogoNoBackground.svg)

Create and manage your JavaScript project dependencies more efficiently with LetHimCook. This web app allows you to search for NPM packages, combine them into 'recipes' along withe necessary config files, and install them with a single command, simplifying your development setup process.

Try it out at [https://lethimcook.abhishekvash.xyz/](https://lethimcook.abhishekvash.xyz)

## Installation

```bash
bun install --frozen-lockfile
```

or

```bash
npm install
```

> :warning: Important: Since the app is developed using [bun](https://bun.run/), it is recommended to use [bun](https://bun.run/) for installation. Due to the lack of package-lock.json in the repository, npm clean install will not work.

## Usage

```bash
bun run dev
```

or

```bash
npm run dev
```

## Built With

- React 18 + TypeScript
- React Router v6
- TailwindCSS with DaisyUI
- LocalForage - for offline storage
- Query Registry - for package search
- Bun + Vite

## Features

- Search for NPM packages using a user-friendly interface.
- Create, save, and share 'recipes' – collections of NPM packages.
- Install all packages in a recipe with a single command.

## Upcoming Features

- [ ] Edit, Delete and Clone recipes
- [ ] Improved UI/UX
- [ ] Enrichment of package info
- [ ] Online storage of recipes for easy access and sharing
