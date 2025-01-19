---
sidbar_position: 8
---

# Classe SignupActivity

La classe **SignupActivity** gère l'inscription des utilisateurs dans l'application OuiChat. Elle permet la création d'un nouveau compte utilisateur en validant les entrées et en enregistrant les données dans **Firestore**.

## Propriétés

### et_email
- **Type**: TextInputEditText
- **Description**: Champ permettant de saisir l'adresse email de l'utilisateur.

### et_first_name
- **Type**: TextInputEditText
- **Description**: Champ permettant de saisir le prénom de l'utilisateur.

### et_last_name
- **Type**: TextInputEditText
- **Description**: Champ permettant de saisir le nom de famille de l'utilisateur.

### et_password
- **Type**: TextInputEditText
- **Description**: Champ permettant de saisir le mot de passe de l'utilisateur.

### btn_signup
- **Type**: MaterialButton
- **Description**: Bouton permettant de valider l'inscription.

### db
- **Type**: FirebaseFirestore
- **Description**: Instance de Firestore utilisée pour enregistrer les utilisateurs.

## Méthodes

### onCreate(Bundle savedInstanceState)
- **Description**: Initialise l'interface utilisateur et assigne un listener au bouton d'inscription.

### onSignupClick()
- **Description**: Gère la création du compte utilisateur en validant les entrées et en enregistrant les données dans Firestore.
- **Détails**:
    - Vérifie que tous les champs sont remplis.
    - Génère un identifiant unique basé sur l'email de l'utilisateur.
    - Vérifie si l'utilisateur existe déjà dans Firestore.
    - Crée et enregistre un nouvel utilisateur si l'email n'est pas encore utilisé.
    - Redirige l'utilisateur vers **LoginActivity** après l'inscription.
    - Affiche un message d'erreur en cas d'échec.

## Gestion des comptes utilisateur
- **Validation des entrées** : Vérification des champs obligatoires.
- **Génération d'ID unique** : Basée sur l'adresse email.
- **Stockage des données utilisateur** dans Firestore.

## Redirections
- Redirige vers **LoginActivity** après une inscription réussie.
- Affiche un message d'erreur si l'utilisateur existe déjà.

## Dépendances
- **Firebase Firestore** pour la gestion des utilisateurs.
- **MaterialButton** pour les interactions utilisateur.
- **TextInputEditText** pour les champs de saisie.

## Voir aussi
- [LoginActivity](LoginActivity.java.md)
- [ProfileActivity](ProfileActivity.java.md)
- [MainActivity](MainActivity.java.md)

