# Rchat — pack de pages unifié

Ce pack ajoute une couche de design commune aux pages HTML fournies, sans remplacer leurs scripts métier ni leurs connexions existantes.

## Pages incluses
- index.html — accueil / Hub
- chat.html — salon général (interface d’aperçu)
- evenements.html — évènements et aperçu QCM
- profil.html — profil
- ia.html — Rchat IA
- defis.html — défis
- ia 2.html — formulaire/ancienne page de consultation
- conversations.html — CODE CHAT
- premium.html — Rchat+
- administrateur.html — administration

## Fichiers communs ajoutés
- `rchat-global.css` : palette, surfaces, navigation, contrôles, responsive et préférences de mouvement.
- `rchat-global.js` : état actif du menu, navigation accessible et micro-interactions non bloquantes.

## Points à compléter
Les pages `chat.html` et `evenements.html` ont été créées dans le même design system. Elles fonctionnent en aperçu local. Le chat partagé, l’authentification, la publication d’évènements et l’enregistrement des QCM restent à raccorder aux tables et fonctions Supabase exactes. Le fichier `rchat-4.css` n’était pas fourni ; les pages utilisent `rchat-global.css`.

## Mise en ligne
Conserver les fichiers HTML à la racine du même dossier que `rchat-global.css` et `rchat-global.js`. Ne pas déplacer ces deux fichiers communs dans un sous-dossier sans modifier les chemins des balises `<link>` et `<script>`.

Les scripts et appels Supabase d'origine sont conservés. Tester les parcours d'authentification, les formulaires et les actions d'administration après déploiement.
