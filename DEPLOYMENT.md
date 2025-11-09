# Guide de Déploiement GitHub Pages

Ce guide vous explique comment déployer votre portfolio sur GitHub Pages.

## Prérequis

- Un compte GitHub
- Git installé sur votre ordinateur
- Node.js et npm installés

## Étapes de Déploiement

### 1. Préparer votre Dépôt GitHub

Si ce n'est pas déjà fait, créez un nouveau dépôt sur GitHub :

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"New"** pour créer un nouveau dépôt
3. Donnez-lui un nom (par exemple : `portfolio`)
4. Laissez-le public pour utiliser GitHub Pages gratuitement
5. **Ne pas** initialiser avec README, .gitignore ou licence (nous avons déjà ces fichiers)
6. Cliquez sur **"Create repository"**

### 2. Lier votre Projet au Dépôt GitHub

Dans le terminal, à la racine du projet :

```bash
# Initialiser git si ce n'est pas déjà fait
git init

# Ajouter tous les fichiers
git add .

# Créer votre premier commit
git commit -m "Initial commit - Portfolio ready for deployment"

# Ajouter le remote (remplacez USERNAME et REPO par vos valeurs)
git remote add origin https://github.com/USERNAME/REPO.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

### 3. Mettre à Jour la Configuration

Éditez `package.json` et mettez à jour le champ `homepage` :

```json
"homepage": "https://USERNAME.github.io/REPO"
```

Remplacez :
- `USERNAME` par votre nom d'utilisateur GitHub
- `REPO` par le nom de votre dépôt

**Note** : Si vous utilisez un domaine personnalisé, utilisez plutôt :
```json
"homepage": "https://votredomaine.com"
```

### 4. Installer les Dépendances

```bash
npm install
```

### 5. Déployer sur GitHub Pages

```bash
npm run deploy
```

Cette commande va :
1. Créer un build de production optimisé
2. Créer (ou mettre à jour) une branche `gh-pages`
3. Pousser le contenu du build vers cette branche

### 6. Activer GitHub Pages

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source** :
   - Sélectionnez la branche : `gh-pages`
   - Sélectionnez le dossier : `/ (root)`
5. Cliquez sur **Save**

### 7. Accéder à Votre Site

Après quelques minutes, votre site sera disponible à :
```
https://USERNAME.github.io/REPO
```

GitHub Pages affichera l'URL exacte dans la section Pages des paramètres.

## Mises à Jour

Pour déployer des modifications :

1. Faites vos changements dans le code
2. Testez localement avec `npm start`
3. Commitez vos changements :
   ```bash
   git add .
   git commit -m "Description des changements"
   git push
   ```
4. Redéployez :
   ```bash
   npm run deploy
   ```

## Domaine Personnalisé (Optionnel)

Pour utiliser votre propre domaine :

1. Achetez un nom de domaine
2. Dans les paramètres GitHub Pages, ajoutez votre domaine personnalisé
3. Configurez les enregistrements DNS chez votre registrar :
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
4. Pour www :
   ```
   Type: CNAME
   Name: www
   Value: USERNAME.github.io
   ```

## Dépannage

### Le site ne s'affiche pas

- Attendez 5-10 minutes après le premier déploiement
- Vérifiez que la branche `gh-pages` existe dans votre dépôt
- Vérifiez les paramètres GitHub Pages

### Erreurs 404 sur les routes React

Si vous obtenez des erreurs 404 lors de l'actualisation des pages :
- C'est normal avec GitHub Pages et React Router
- Une solution est d'utiliser HashRouter au lieu de BrowserRouter
- Ou configurez un 404.html qui redirige vers index.html

### Les styles ne s'appliquent pas

- Vérifiez que le champ `homepage` est correctement configuré
- Nettoyez le cache et reconstruisez : `npm run deploy`

## Ressources

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Documentation gh-pages](https://github.com/tschaub/gh-pages)
- [Deploying Create React App](https://create-react-app.dev/docs/deployment/)

## Support

Pour toute question ou problème, consultez les issues GitHub ou contactez-moi.
