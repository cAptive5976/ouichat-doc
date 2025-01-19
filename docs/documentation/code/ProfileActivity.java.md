---
sidbar_position: 5
---

# Classe ProfileActivity

La classe **ProfileActivity** représente l'activité de profil accessible aux utilisateurs non connectés de l'application OuiChat. Elle permet aux utilisateurs de se connecter ou de s'inscrire via des boutons dédiés.

## Propriétés

### btn_login
- **Type**: MaterialButton
- **Description**: Bouton permettant de rediriger l'utilisateur vers l'écran de connexion (**LoginActivity**).

### btn_signup
- **Type**: MaterialButton
- **Description**: Bouton permettant de rediriger l'utilisateur vers l'écran d'inscription (**SignupActivity**).

## Méthodes

### onCreate(Bundle savedInstanceState)
- **Description**: Initialise l'activité, configure les boutons et met en place la navigation.
- **Détails**:
    - Définit les actions pour les boutons de connexion et d'inscription.
    - Gère la navigation via la **BottomNavigationView**.

## Navigation
- **Barre de navigation inférieure** :
    - `navigation_home` : Redirige vers **MainActivity**.
    - `navigation_search` : Redirige vers **SearchActivity**.
    - `navigation_profile` : Reste sur **ProfileActivity**.

## Gestion des interactions utilisateur
- Permet à l'utilisateur non connecté de :
    - Se connecter via **LoginActivity**.
    - S'inscrire via **SignupActivity**.
    
## Dépendances
- **MaterialButton** pour les interactions utilisateur.
- **BottomNavigationView** pour la navigation.

## Voir aussi
- [LoginActivity](LoginActivity.java.md)
- [SignupActivity](SignupActivity.java.md)
- [MainActivity](MainActivity.java.md)

