---
sidebar_position: 3
---

# Classe Adapter

La classe **Adapter** est une classe personnalisée pour l'affichage des publications dans une RecyclerView dans l'application **OuiChat**. Elle gère la liaison entre les données (liste des objets `Post`) et les vues (éléments de l'interface utilisateur) définies dans le fichier XML.

## Propriétés

### posts
- **Type**: ArrayList\<Post>
- **Description**: Liste des publications (objets `Post`) à afficher dans la RecyclerView.

### db
- **Type**: FirebaseFirestore
- **Description**: Instance de la base de données Firestore utilisée pour interagir avec les documents `Post` et `User`.

### currentUserId
- **Type**: String
- **Description**: Identifiant de l'utilisateur actuellement connecté, récupéré depuis les préférences partagées.

### prefs
- **Type**: SharedPreferences
- **Description**: Stocke les préférences utilisateur locales, notamment pour gérer l'état des likes.

## Constructeurs

### Adapter(ArrayList\<Post> posts, Context context)
- **Description**: Initialise l'Adapter avec la liste des posts et le contexte de l'application.
- **Paramètres**:
    - `posts`: Liste des publications à afficher.
    - `context`: Contexte de l'application, utilisé pour accéder aux préférences partagées.

## Méthodes

### onCreateViewHolder(@NonNull ViewGroup parent, int viewType)
- **Retour**: ViewHolder
- **Description**: Instancie et retourne un ViewHolder en utilisant le layout défini dans `posts_list.xml`.

### onBindViewHolder(@NonNull ViewHolder holder, int position)
- **Paramètres**:
    - `holder`: Instance du ViewHolder pour la position actuelle.
    - `position`: Position de l'élément dans la liste des posts.
- **Description**: Lie les données du post à la position spécifiée avec les vues correspondantes dans le ViewHolder :
    - Définit le contenu, la date, le nombre de likes, et l'état du like pour le post.
    - Configure les interactions utilisateur, telles que le bouton de like.

### refresh(List\<Post> posts)
- **Paramètre**: `posts`: Nouvelle liste de posts à afficher.
- **Description**: Actualise l'Adapter avec une nouvelle liste de posts et notifie les changements.

### filter(List\<Post> filteredPosts)
- **Paramètre**: `filteredPosts`: Liste filtrée des posts à afficher.
- **Description**: Met à jour l'Adapter avec une liste filtrée de posts, par exemple, lors d'une recherche.

### getItemCount()
- **Retour**: int
- **Description**: Retourne le nombre d'éléments dans la liste des posts.

## Classe interne : ViewHolder

### Propriétés
- **content** : TextView
    - Contient le texte de la publication.
- **username** : TextView
    - Affiche le nom de l'utilisateur qui a créé la publication.
- **date** : TextView
    - Affiche la date et l'heure de création du post.
- **likeCount** : TextView
    - Affiche le nombre de likes associés au post.
- **likeIcon** : ImageView
    - Bouton interactif pour liker ou retirer un like.

### Constructeur
- **ViewHolder(View itemView)**
    - Initialise les vues à partir du layout `posts_list.xml`.

## Gestion des interactions utilisateur

### Gestion des likes
- Vérifie si l'utilisateur actuel a déjà liké la publication en interrogeant Firestore.
- Permet à l'utilisateur de liker ou de retirer son like, et met à jour :
    - Le champ `likes` dans Firestore.
    - Le tableau `likedBy` pour la publication dans Firestore.
    - L'état visuel du bouton de like.

## Utilisation dans RecyclerView

L'Adapter est utilisé pour alimenter la RecyclerView dans les activités principales de l'application, telles que :
- **MainActivity** : Affichage du fil d'actualité.
- **SearchActivity** : Recherche et filtrage des publications.
- **ProfileActivityLogon** : Liste des publications d'un utilisateur spécifique.

Chaque interaction avec un élément de la RecyclerView est synchronisée avec Firestore pour garantir la cohérence des données en temps réel.
