---
sidebar_position: 9
---

# Classe WriteActivity

La classe **WriteActivity** permet aux utilisateurs de rédiger et publier un nouveau post dans l'application OuiChat. L'activité enregistre les posts dans **Firestore** et assure une navigation fluide après la publication.

## Propriétés

### write\_post

- **Type**: TextInputEditText
- **Description**: Champ permettant à l'utilisateur de saisir le contenu de son post.

### btn\_post

- **Type**: MaterialButton
- **Description**: Bouton permettant de publier le post.

### btn\_cancel

- **Type**: MaterialButton
- **Description**: Bouton permettant d'annuler la création du post et de retourner à **MainActivity**.

### db

- **Type**: FirebaseFirestore
- **Description**: Instance de Firestore utilisée pour enregistrer les posts.

### postsRef

- **Type**: CollectionReference
- **Description**: Référence à la collection "posts" dans Firestore.

### prefs

- **Type**: SharedPreferences
- **Description**: Stocke les informations de session de l'utilisateur.

## Méthodes

### onCreate(Bundle savedInstanceState)

- **Description**: Initialise l'interface utilisateur, configure les boutons et récupère les préférences utilisateur.

### onPostClick()

- **Description**: Gère la publication d'un nouveau post dans Firestore.
- **Détails**:
  - Vérifie que le champ de texte n'est pas vide.
  - Génère un **UUID** pour l'identifiant du post.
  - Associe le post à l'utilisateur actuellement connecté.
  - Stocke le post dans Firestore avec une date et un compteur de likes initialisé à 0.
  - Redirige vers **MainActivity** après la publication.

## Gestion des posts

- **Validation des entrées** : Vérification du contenu du post.
- **Génération d'ID unique** : Utilisation de **UUID**.
- **Stockage des données** : Enregistrement dans Firestore avec une date et un auteur.

## Redirections

- Redirige vers **MainActivity** après une publication réussie.
- Annule la publication et retourne à **MainActivity** si l'utilisateur appuie sur **btn\_cancel**.

## Dépendances

- **Firebase Firestore** pour la gestion des posts.
- **MaterialButton** pour les interactions utilisateur.
- **TextInputEditText** pour la saisie de texte.

## Voir aussi

- [MainActivity](MainActivity.java.md)
- [Post](database/Post.java.md)

