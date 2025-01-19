---
sidbar_position: 4
---

# Classe MainActivity

La classe **MainActivity** est l'activité principale de l'application OuiChat. Elle gère l'affichage des publications (posts), la navigation entre les différentes sections de l'application, et l'actualisation des posts.

## Propriétés

### recyclerViewPosts
- **Type**: RecyclerView
- **Description**: Affiche la liste des posts récupérés depuis Firestore.

### swipeRefreshLayout
- **Type**: SwipeRefreshLayout
- **Description**: Permet aux utilisateurs d'actualiser la liste des posts en tirant vers le bas.

### fabNewPost
- **Type**: FloatingActionButton
- **Description**: Bouton permettant d'accéder à l'activité d'écriture d'un post.

### postAdapter
- **Type**: Adapter
- **Description**: Adaptateur utilisé pour gérer l'affichage des posts dans RecyclerView.

### postList
- **Type**: ArrayList\<Post\>
- **Description**: Liste des publications récupérées depuis Firestore.

### db
- **Type**: FirebaseFirestore
- **Description**: Instance de Firestore utilisée pour interagir avec la collection "posts".

### postsRef
- **Type**: CollectionReference
- **Description**: Référence à la collection "posts" dans Firestore.

## Méthodes

### onCreate(Bundle savedInstanceState)
- **Description**: Initialise l'activité, configure RecyclerView, charge les posts, et met en place les listeners pour l'actualisation et la navigation.

### loadPosts()
- **Description**: Récupère les posts depuis Firestore, les trie par score, et met à jour l'Adapter.
- **Détails**:
    - Charge tous les posts de Firestore.
    - Trie les posts par score décroissant.
    - Met à jour l'affichage dans RecyclerView.

## Navigation
- **Barre de navigation inférieure** :
    - `navigation_home` : Page principale (MainActivity).
    - `navigation_search` : Redirige vers **SearchActivity**.
    - `navigation_profile` : Vérifie si l'utilisateur est connecté pour rediriger vers **ProfileActivityLogon** ou **ProfileActivity**.

## Gestion des posts
- **Chargement et affichage en temps réel** grâce à Firestore.
- **Actualisation** via **SwipeRefreshLayout**.
- **Navigation vers l'écriture d'un post** via **fabNewPost** (redirige vers **WriteActivity**).

## Dépendances
- **Firebase Firestore** pour la récupération des posts.
- **RecyclerView et Adapter** pour l'affichage des publications.
- **SwipeRefreshLayout** pour l'actualisation.
- **FloatingActionButton** pour la création de posts.

## Voir aussi
- [WriteActivity](WriteActivity.java.md)
- [SearchActivity](SearchActivity.java.md)
- [ProfileActivityLogon](ProfileActivityLogon.java.md)

