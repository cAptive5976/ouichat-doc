---
sidbar_position: 6
---

# Classe ProfileActivityLogon

La classe **ProfileActivityLogon** représente l'activité de profil pour un utilisateur connecté dans l'application OuiChat. Elle affiche les informations du compte utilisateur et permet d'afficher ses publications ainsi que de se déconnecter.

## Propriétés

### tv_first_name
- **Type**: TextView
- **Description**: Affiche le prénom de l'utilisateur.

### tv_last_name
- **Type**: TextView
- **Description**: Affiche le nom de famille de l'utilisateur.

### tv_email
- **Type**: TextView
- **Description**: Affiche l'adresse email de l'utilisateur.

### tv_id
- **Type**: TextView
- **Description**: Affiche l'identifiant unique de l'utilisateur.

### btn_logout
- **Type**: MaterialButton
- **Description**: Bouton permettant de se déconnecter.

### recyclerViewPosts
- **Type**: RecyclerView
- **Description**: Affiche la liste des publications de l'utilisateur.

### postAdapter
- **Type**: Adapter
- **Description**: Gère l'affichage des publications dans RecyclerView.

### postList
- **Type**: ArrayList\<Post>
- **Description**: Liste des publications de l'utilisateur.

### db
- **Type**: FirebaseFirestore
- **Description**: Instance de Firestore utilisée pour interagir avec les posts.

### postsRef
- **Type**: CollectionReference
- **Description**: Référence à la collection "posts" dans Firestore.

### prefs
- **Type**: SharedPreferences
- **Description**: Stocke les informations de session de l'utilisateur.

## Méthodes

### onCreate(Bundle savedInstanceState)
- **Description**: Initialise l'activité, charge les informations utilisateur, configure RecyclerView et la barre de navigation.

### loadPosts(DocumentReference userRef)
- **Description**: Récupère les posts de l'utilisateur connecté depuis Firestore et met à jour l'affichage.
- **Détails**:
    - Charge uniquement les posts créés par l'utilisateur.
    - Trie les posts par score décroissant.
    - Actualise la liste affichée dans RecyclerView.

### Déconnexion
- **Processus**:
    - Efface les données de session dans **SharedPreferences**.
    - Redirige l'utilisateur vers **ProfileActivity**.

## Navigation
- **Barre de navigation inférieure** :
    - `navigation_home` : Redirige vers **MainActivity**.
    - `navigation_search` : Redirige vers **SearchActivity**.
    - `navigation_profile` : Reste sur **ProfileActivityLogon**.

## Dépendances
- **Firebase Firestore** pour la récupération des posts.
- **RecyclerView et Adapter** pour l'affichage des publications.
- **SharedPreferences** pour stocker les informations de session.

## Voir aussi
- [MainActivity](MainActivity.java.md)
- [ProfileActivity](ProfileActivity.java.md)
- [LoginActivity](LoginActivity.java.md)

