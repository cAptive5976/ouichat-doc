---
sidebar_position: 2
---

# Classe User.java

La classe `User` représente un utilisateur dans l'application **OuiChat**. Chaque utilisateur correspond à un document dans la collection **Users** sur Firestore. Elle contient les informations de base d'un utilisateur, telles que l'adresse e-mail, le prénom, le nom de famille, et le mot de passe.

## Propriétés

### `email`
- **Type**: `String`
- **Description**: Adresse e-mail de l'utilisateur. Ce champ est utilisé pour identifier de manière unique chaque utilisateur.

### `first_name`
- **Type**: `String`
- **Description**: Prénom de l'utilisateur.

### `last_name`
- **Type**: `String`
- **Description**: Nom de famille de l'utilisateur.

### `password`
- **Type**: `String`
- **Description**: Mot de passe de l'utilisateur.

## Constructeurs

### `User()`
- **Description**: Constructeur vide requis par Firestore pour la création d'une instance de `User` lors de la récupération des documents. Ce constructeur permet la désérialisation des documents en objets Java.

### `User(String email, String first_name, String last_name, String password)`
- **Description**: Constructeur utilisé pour initialiser un nouvel utilisateur dans l'application avec les attributs spécifiés.
- **Paramètres**:
    - `email`: Adresse e-mail de l'utilisateur.
    - `first_name`: Prénom de l'utilisateur.
    - `last_name`: Nom de famille de l'utilisateur.
    - `password`: Mot de passe de l'utilisateur.

## Méthodes

### `getEmail()`
- **Retour**: `String`
- **Description**: Retourne l'adresse e-mail de l'utilisateur.

### `setEmail(String email)`
- **Paramètre**: `email` - Nouvelle adresse e-mail à définir pour l'utilisateur.
- **Description**: Définit l'adresse e-mail de l'utilisateur.

### `getFirst_name()`
- **Retour**: `String`
- **Description**: Retourne le prénom de l'utilisateur.

### `setFirst_name(String first_name)`
- **Paramètre**: `first_name` - Nouveau prénom à définir pour l'utilisateur.
- **Description**: Définit le prénom de l'utilisateur.

### `getLast_name()`
- **Retour**: `String`
- **Description**: Retourne le nom de famille de l'utilisateur.

### `setLast_name(String last_name)`
- **Paramètre**: `last_name` - Nouveau nom de famille à définir pour l'utilisateur.
- **Description**: Définit le nom de famille de l'utilisateur.

### `getPassword()`
- **Retour**: `String`
- **Description**: Retourne le mot de passe de l'utilisateur.

### `setPassword(String password)`
- **Paramètre**: `password` - Nouveau mot de passe à définir pour l'utilisateur.
- **Description**: Définit le mot de passe de l'utilisateur.

## Utilisation dans Firestore

Chaque instance de `User` est stockée comme un document dans la collection **Users** de Firestore. Firestore gère la synchronisation des données en temps réel, permettant à l'application de récupérer immédiatement les modifications effectuées sur les informations des utilisateurs (par exemple, changement d'e-mail ou de mot de passe).

Lors de la création ou de la mise à jour d'un utilisateur, les données sont envoyées à Firestore, qui les désérialise en objets `User` en utilisant le constructeur par défaut.
