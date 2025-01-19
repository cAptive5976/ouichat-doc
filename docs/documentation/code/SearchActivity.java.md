---
sidbar_position: 7
---

# Classe SearchActivity

La classe **SearchActivity** gère la recherche des posts dans l'application OuiChat. Elle permet aux utilisateurs d'effectuer une recherche en temps réel à l'aide d'un **SearchView** et d'afficher les résultats filtrés dans un **RecyclerView**.

## Propriétés

### searchView
- **Type**: SearchView
- **Description**: Permet à l'utilisateur de saisir une requête de recherche.

### search_results
- **Type**: RecyclerView
- **Description**: Liste des résultats de la recherche affichés sous forme de posts.

### postAdapter
- **Type**: Adapter
- **Description**: Gère l'affichage des résultats dans le **RecyclerView**.

### postList
- **Type**: ArrayList\<Post>
- **Description**: Liste complète des posts récupérés depuis Firestore.

### filteredPostList
- **Type**: ArrayList\<Post>
- **Description**: Liste filtrée des posts correspondant à la requête de l'utilisateur.

### db
- **Type**: FirebaseFirestore
- **Description**: Instance de Firestore utilisée pour récupérer les posts.

### postsRef
- **Type**: CollectionReference
- **Description**: Référence à la collection "posts" dans Firestore.

## Méthodes

### onCreate(Bundle savedInstanceState)
- **Description**: Initialise l'activité, configure la barre de recherche, met en place la navigation et récupère les posts depuis Firestore.

### filterPosts(String search)
- **Description**: Filtre les posts en fonction de la recherche de l'utilisateur.
- **Détails**:
    - Charge les posts depuis Firestore.
    - Vérifie si le contenu du post contient la requête de recherche.
    - Trie les résultats par score décroissant.
    - Met à jour l'affichage dans **RecyclerView**.

## Navigation
- **Barre de navigation inférieure** :
    - `navigation_home` : Redirige vers **MainActivity**.
    - `navigation_search` : Reste sur **SearchActivity**.
    - `navigation_profile` : Vérifie si l'utilisateur est connecté, puis redirige vers **ProfileActivityLogon** ou **ProfileActivity**.

## Gestion de la recherche
- **Recherche en temps réel** avec **SearchView**.
- **Filtrage dynamique** des posts sans recharger toute la liste.

## Dépendances
- **Firebase Firestore** pour la récupération des posts.
- **RecyclerView et Adapter** pour l'affichage des publications.
- **SearchView** pour l'entrée utilisateur.

## Voir aussi
- [MainActivity](MainActivity.java.md)
- [ProfileActivityLogon](ProfileActivityLogon.java.md)
- [Adapter](Adapter.java.md)

