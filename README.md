# Système de Gestion de Paiement

## Introduction

Bienvenue dans le guide de l'utilisateur pour notre système de gestion de paiement de cotisation syndicale. Ce projet a été initié en réponse à la demande de notre client visant à simplifier la gestion des appartements, des paiements mensuels, et de l'impression des factures associées par les syndics d'immeuble.

## Fonctionnalités

### Gestion des Appartements

- Remplissez aisément un formulaire de création d'appartement.
- Modifiez rapidement les informations d'un appartement existant.
- Supprimez en toute simplicité un appartement qui n'est plus pertinent.

### Gestion des Paiements Mensuels

- Utilisez une interface conviviale pour enregistrer les paiements mensuels.

### Impression de Factures

- Automatisez la génération des factures pour chaque paiement effectué.
- Imprimez facilement les factures pour une gestion efficace de la documentation.

## Installation

Consultez les instructions détaillées ci-dessous pour installer le système dans votre environnement de production.

### Clonez le référentiel

```bash
git clone https://github.com/Merykam/Syst-me-de-gestion-de-paiement-.git
```

### Setup du Serveur

```bash
# Navigate to the ./Server directory
cd Server

# Install server dependencies
npm install

# Start the server
npm run dev
```

### Setup du Client

```bash
# Navigate to the ../client directory
cd client/"System de gestion de paiement"

# Install frontend dependencies
npm install

# Start the frontend development server
npm run dev
```

## Technologies Utilisées

### Backend (NodeJs)

- bcryptjs: for password hashing.
- cookie-parser: for parsing cookies.
- cors: for handling Cross-Origin Resource Sharing.
- dotenv: for environment variable management.
- express: for building the web server.
- jest: for testing.
- jsonwebtoken: for creating and verifying JSON Web Tokens.
- mongodb, mongoose: for MongoDB database integration.
- nodemon: for automatic server restarts during development.
- validator: for data validation.

### Frontend (ReactJs)

- @react-pdf/renderer: for PDF generation.
- axios: for handling HTTP requests.
- react, react-dom: core React libraries.
- react-router-dom: for client-side routing.