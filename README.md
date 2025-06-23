# Pohovor projekt

Jednoduchá aplikace na přidávání úkolů v reactu

## Spuštění
```
cp .env.example .env
npm i
npm run dev
```

## Požadavky
- Stránky
	- `/` - seznam úkolů a formulář na přidání nového úkolu
	- `/task/:id` - detail úkolu
- Stack
	- [Typescript](https://www.typescriptlang.org/)
	- [React](https://react.dev/) (v18+) + [Vite](https://vite.dev/)
	- [React Hook Form](https://react-hook-form.com/)
	- [React-router-dom](https://reactrouter.com/) (v6+)
	- [Tailwind CSS](https://tailwindcss.com/) nebo [Material UI](https://mui.com/material-ui/) nebo vlastní CSS
		- Mé řešení používá **Material UI**
- React funkce
	- `useRef()` pro datum vytvoření tasku
	- `useState()` pro správu všech tasků
## Možná vylepšení
- zod validace
- persistentní ukládání tasků (local storage, IndexDB, externí databáze přes API, ...)
