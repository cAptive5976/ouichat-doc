---
sidebar_position: 2
---

# Classe Post.java

La classe `Post` représente une publication dans l'application **OuiChat**. Chaque publication correspond à un document dans la collection **Posts** sur Firestore. Elle contient les informations relatives à la publication, telles que le contenu, l'utilisateur qui a créé le post, le nombre de likes, et la date de création.

## Propriétés

### `post_id`
- **Type**: `String`
- **Description**: Identifiant unique de la publication. Ce champ est utilisé pour identifier chaque post de manière unique dans Firestore.

### `content`
- **Type**: `String`
- **Description**: Contenu textuel de la publication. Il s'agit du message que l'utilisateur a écrit dans son post.

### `user_id`
- **Type**: `DocumentReference`
- **Description**: Référence au document utilisateur dans la collection **Users** de Firestore. Cette référence permet de lier une publication à un utilisateur spécifique.

### `likes`
- **Type**: `int`
- **Description**: Nombre de "likes" associés à la publication. Ce champ représente l'engagement des utilisateurs vis-à-vis de ce post.

### `date`
- **Type**: `Timestamp`
- **Description**: Date et heure de la création de la publication. Utilisé sous forme de `Timestamp` pour garantir une gestion précise des dates dans Firestore.

## Constructeurs

### `Post()`
- **Description**: Constructeur vide utilisé par Firestore pour créer une instance de la classe lors de la récupération des documents. Il est nécessaire pour que Firestore puisse désérialiser le document en objet Java.

### `Post(String content, DocumentReference user_id, int likes, Timestamp date, String post_id)`
- **Description**: Constructeur utilisé pour créer un nouveau post dans l'application avec tous les attributs spécifiés.
- **Paramètres**:
    - `content`: Contenu de la publication.
    - `user_id`: Référence au document utilisateur dans Firestore.
    - `likes`: Nombre de "likes" de la publication.
    - `date`: Date de création sous forme de `Timestamp`.
    - `post_id`: Identifiant unique de la publication.

## Méthodes

### `getContent()`
- **Retour**: `String`
- **Description**: Retourne le contenu de la publication.

### `getUser_id()`
- **Retour**: `DocumentReference`
- **Description**: Retourne la référence au document utilisateur dans Firestore qui a créé la publication.

### `getLikes()`
- **Retour**: `int`
- **Description**: Retourne le nombre de "likes" de la publication.

### `getDate()`
- **Retour**: `Timestamp`
- **Description**: Retourne la date de création de la publication.

### `getPostId()`
- **Retour**: `String`
- **Description**: Retourne l'identifiant unique de la publication.

### `getScore()`
- **Retour**: `int`
- **Description**: Calcule un score pour la publication en fonction de son âge et du nombre de "likes". Le score est calculé avec la formule `(30 - age) * likes`, où `age` est l'âge de la publication en jours.
    - **Logique**:
        - `age` : Nombre de jours écoulés depuis la date de création du post.
        - `likes` : Nombre de "likes" reçus par la publication.
        - Le score est utilisé pour classer les publications en fonction de leur popularité et de leur ancienneté.

### `setLikes(int likes)`
- **Paramètre**: `likes` : Nouveau nombre de "likes" pour la publication.
- **Description**: Définit le nombre de "likes" de la publication.

### `setPost_id(String post_id)`
- **Paramètre**: `post_id` : Nouvel identifiant pour la publication.
- **Description**: Définit l'identifiant unique de la publication.

## Méthode de mappage : `mapping()`

### `mapping()`
- **Retour**: `Map<String, Object>`
- **Description**: Cette méthode permet de mapper les attributs de la classe `Post` en un `Map` afin de pouvoir facilement envoyer les données vers Firestore. Elle est utilisée pour convertir l'objet Java en un format compatible avec Firestore lors de l'ajout ou de la mise à jour d'un document.

### Structure du `Map` :
- `"content"`: Contenu de la publication.
- `"user_id"`: Référence au document utilisateur dans Firestore.
- `"likes"`: Nombre de "likes".
- `"date"`: Date de création de la publication.
- `"post_id"`: Identifiant unique de la publication.

## Utilisation dans Firestore

Chaque instance de `Post` est stockée comme un document dans la collection **Posts** de Firestore. Firestore gère la synchronisation des données en temps réel, permettant à l'application de récupérer immédiatement les modifications effectuées sur les publications (par exemple, un nouveau like ou un changement de contenu).

Lors de la création ou de la mise à jour d'une publication, les données sont converties en un `Map` avec la méthode `mapping()`, et envoyées à Firestore. De même, lors de la récupération des publications, Firestore les désérialise en objets `Post` en utilisant le constructeur par défaut de la classe.
