---
sidbar_position: 3
---

# Classe LoginActivity

La classe **LoginActivity** gère le processus de connexion d'un utilisateur à l'application OuiChat. Elle permet à l'utilisateur de saisir ses identifiants et d'accéder à son profil s'ils sont corrects. La classe interagit avec Firestore pour vérifier l'existence de l'utilisateur et valider ses informations.

## Propriétés

### et_email
- **Type**: TextInputEditText
- **Description**: Champ permettant à l'utilisateur de saisir son adresse e-mail.

### et_password
- **Type**: TextInputEditText
- **Description**: Champ permettant à l'utilisateur de saisir son mot de passe.

### db
- **Type**: FirebaseFirestore
- **Description**: Instance de Firestore utilisée pour récupérer les informations des utilisateurs.

### usersRef
- **Type**: CollectionReference
- **Description**: Référence à la collection "users" dans Firestore.

## Méthodes

### onCreate(Bundle savedInstanceState)
- **Description**: Initialise l'activité, récupère les éléments de l'interface et assigne un listener au bouton de connexion.

### onLoginClick(View view)
- **Description**: Gère la tentative de connexion d'un utilisateur. Vérifie les informations saisies et compare les données avec celles stockées dans Firestore.
- **Paramètres**:
    - view: Vue associée au bouton de connexion.
- **Détails**:
    - Vérifie si l'email existe dans Firestore.
    - Vérifie si le mot de passe saisi correspond à celui stocké.
    - Stocke les informations utilisateur dans **SharedPreferences** si la connexion réussit.
    - Redirige l'utilisateur vers **ProfileActivityLogon** après connexion.
    - Affiche un message d'erreur si les informations sont incorrectes ou si l'utilisateur n'existe pas.

## Gestion des préférences utilisateur
- Utilisation de **SharedPreferences** pour stocker les informations de session.
- Clés stockées : `userId`, `email`, `first_name`, `last_name`, `isLoggedIn`.

## Redirections
- Redirige vers **ProfileActivityLogon** en cas de succès.
- Affiche un message d'erreur si les informations sont incorrectes.

## Utilisation
Cette activité est utilisée dans les cas suivants :
- Accueil de l'application si l'utilisateur n'est pas connecté.
- Redirection depuis **ProfileActivity** lorsque l'utilisateur souhaite se connecter.

## Dépendances
- **Firebase Firestore** pour l'authentification.
- **SharedPreferences** pour stocker les informations de session.
- **MaterialButton** pour l'interface utilisateur.

## Voir aussi
- [MainActivity](MainActivity.java.md)
- [SignupActivity](SignupActivity.java.md)
- [ProfileActivityLogon](ProfileActivityLogon.java.md)

