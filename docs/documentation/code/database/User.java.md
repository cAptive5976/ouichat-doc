---
sidebar_position: 3
---

# Classe des utilisateurs

La classe `User` représente un utilisateur dans l'application **OuiChat**. Chaque utilisateur correspond à un document dans la collection **users** sur Firestore. Elle contient les informations relatives à un utilisateur, telles que son email, son prénom, son nom, et son mot de passe.

## Propriétés

### `email`
- **Type**: `String`
- **Description**: Adresse e-mail unique de l'utilisateur. Ce champ est utilisé comme identifiant principal pour se connecter et récupérer les informations d'un utilisateur.

### `first_name`
- **Type**: `String`
- **Description**: Prénom de l'utilisateur. Utilisé pour afficher des informations personnalisées, comme dans les messages de bienvenue.

### `last_name`
- **Type**: `String`
- **Description**: Nom de famille de l'utilisateur. Utilisé conjointement avec le prénom pour identifier un utilisateur dans l'application.

### `password`
- **Type**: `String`
- **Description**: Mot de passe de l'utilisateur, utilisé pour l'authentification. Note : Ce champ devrait être stocké sous une forme hachée pour des raisons de sécurité.

## Constructeurs

### `User()`
- **Description**: Constructeur vide utilisé par Firestore pour créer une instance de la classe lors de la récupération des documents. Il est requis pour que Firestore puisse désérialiser un document en objet Java.

### `User(String email, String first_name, String last_name, String password)`
- **Description**: Constructeur utilisé pour créer une instance d'utilisateur avec les attributs spécifiés.
- **Paramètres**:
    - `email`: Adresse e-mail unique de l'utilisateur.
    - `first_name`: Prénom de l'utilisateur.
    - `last_name`: Nom de l'utilisateur.
    - `password`: Mot de passe de l'utilisateur.

## Méthodes

### `getEmail()`
- **Retour**: `String`
- **Description**: Retourne l'adresse e-mail de l'utilisateur.

### `getFirst_name()`
- **Retour**: `String`
- **Description**: Retourne le prénom de l'utilisateur.

### `getLast_name()`
- **Retour**: `String`
- **Description**: Retourne le nom de famille de l'utilisateur.

### `getPassword()`
- **Retour**: `String`
- **Description**: Retourne le mot de passe de l'utilisateur.

### `setEmail(String email)`
- **Paramètre**: `email` : Nouvelle adresse e-mail de l'utilisateur.
- **Description**: Définit l'adresse e-mail de l'utilisateur.

### `setFirst_name(String first_name)`
- **Paramètre**: `first_name` : Nouveau prénom de l'utilisateur.
- **Description**: Définit le prénom de l'utilisateur.

### `setLast_name(String last_name)`
- **Paramètre**: `last_name` : Nouveau nom de famille de l'utilisateur.
- **Description**: Définit le nom de famille de l'utilisateur.

### `setPassword(String password)`
- **Paramètre**: `password` : Nouveau mot de passe de l'utilisateur.
- **Description**: Définit le mot de passe de l'utilisateur.

## Méthode de mappage : `mapping()`

### `mapping()`
- **Retour**: `Map<String, Object>`
- **Description**: Cette méthode permet de mapper les attributs de la classe `User` en un `Map` afin de pouvoir facilement envoyer les données vers Firestore. Elle est utilisée pour convertir l'objet Java en un format compatible avec Firestore lors de l'ajout ou de la mise à jour d'un document.

### Structure du `Map` :
- `"email"`: Adresse e-mail de l'utilisateur.
- `"first_name"`: Prénom de l'utilisateur.
- `"last_name"`: Nom de l'utilisateur.
- `"password"`: Mot de passe de l'utilisateur.

## Utilisation dans Firestore

Chaque instance de `User` est stockée comme un document dans la collection **users** de Firestore. Firestore gère la synchronisation des données en temps réel, permettant à l'application de récupérer immédiatement les modifications effectuées sur les utilisateurs (par exemple, une mise à jour de leur prénom ou adresse e-mail).

Lors de la création ou de la mise à jour d'un utilisateur, les données sont converties en un `Map` avec la méthode `mapping()`, et envoyées à Firestore. De même, lors de la récupération des utilisateurs, Firestore les désérialise en objets `User` en utilisant le constructeur par défaut de la classe.