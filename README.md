# JBC Portfolio

Portfolio personnel de Jean Benoit Clément - Directeur, Formateur et Leader

## 🌟 À propos

Ce portfolio présente mon parcours professionnel, mes expériences, ma formation et mes compétences. Il s'agit d'une application web React moderne développée avec Tailwind CSS.

## 🚀 Technologies Utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **React Router** - Navigation entre les pages
- **Tailwind CSS** - Framework CSS utilitaire
- **Sonner** - Notifications toast élégantes
- **CRACO** - Configuration personnalisée de Create React App

## 📦 Installation

1. Clonez ce dépôt :
```bash
git clone https://github.com/votre-username/JBC-Portfolio-main.git
cd JBC-Portfolio-main
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Lancez le serveur de développement :
```bash
npm start
# ou
yarn start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build de Production

Pour créer une version optimisée pour la production :

```bash
npm run build
# ou
yarn build
```

Les fichiers optimisés seront générés dans le dossier `build/`.

## 🌐 Déploiement sur GitHub Pages

### Configuration Initiale

1. Assurez-vous que votre projet est un dépôt Git et est poussé sur GitHub

2. Installez les dépendances si ce n'est pas déjà fait :
```bash
npm install
```

### Déployer

Pour déployer votre portfolio sur GitHub Pages :

```bash
npm run deploy
```

Cette commande :
- Construit automatiquement votre application (`npm run build`)
- Déploie le contenu du dossier `build` vers la branche `gh-pages`

### Activer GitHub Pages

1. Allez dans les paramètres de votre dépôt GitHub
2. Naviguez vers **Pages** dans le menu latéral
3. Sous **Source**, sélectionnez la branche `gh-pages`
4. Cliquez sur **Save**

Votre site sera disponible à : `https://votre-username.github.io/JBC-Portfolio-main/`

**Note** : Si vous utilisez un nom de dépôt personnalisé, mettez à jour le champ `homepage` dans `package.json` :
```json
"homepage": "https://votre-username.github.io/nom-du-repo"
```

## 📁 Structure du Projet

```
JBC-Portfolio-main/
├── public/          # Fichiers statiques
├── src/
│   ├── components/  # Composants réutilisables
│   ├── pages/       # Pages de l'application
│   ├── App.js       # Composant principal
│   └── index.js     # Point d'entrée
├── package.json     # Dépendances et scripts
└── tailwind.config.js
```

## 📄 Licence

© 2025 Jean Benoit Clément. Tous droits réservés.

