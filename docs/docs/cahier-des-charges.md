# Cahier des charges fonctionnel et technique — Elf-ant

- **Version :** 1.0
- **Statut :** cadrage initial
- **Public cible :** enfants de 3 à 12 ans et leurs parents
- **Plateforme :** application web responsive et PWA
- **Signature :** Apprendre en s'amusant, grandir en confiance.

## 1. Présentation

Elf-ant est une plateforme éducative numérique qui accompagne les enfants de 3 à 12 ans au moyen d'activités interactives, de jeux et de parcours adaptés à leur âge. Un espace parent permet de gérer les profils, suivre la progression et contrôler les paramètres du compte.

Le produit doit rendre l'apprentissage accessible et motivant tout en protégeant les enfants, leurs données personnelles et leur expérience numérique.

### Objectifs
- Proposer des activités pédagogiques simples et agréables.
- Adapter la présentation, les consignes et la difficulté à l'âge.
- Encourager la progression sans mécanismes de pression.
- Permettre aux parents de gérer les profils et consulter les progrès.
- Protéger les comptes, les données et les interactions.
- Fournir une base technique maintenable, testable et évolutive.

## 2. Publics et rôles

| Profil | Besoins et droits |
|---|---|
| Enfant 3–5 ans | Découverte très visuelle, consignes courtes, interactions simples |
| Enfant 6–8 ans | Apprentissage guidé, étapes visibles, retours encourageants |
| Enfant 9–12 ans | Plus d'autonomie, objectifs clairs et progression détaillée |
| Parent | Compte principal, gestion des profils, consultation des progrès et paramètres |
| Administrateur | Gestion restreinte des contenus et opérations techniques |

Les profils enfants sont créés et gérés par un parent. Un enfant n'a pas besoin d'une adresse e-mail personnelle.

## 3. Périmètre fonctionnel

### MVP

| ID | Fonctionnalité | Description | Priorité |
|---|---|---|---|
| F-01 | Compte parent | Inscription et validation des données | Indispensable |
| F-02 | Authentification | Connexion, déconnexion et récupération du compte | Indispensable |
| F-03 | Profils enfants | Création, modification, consultation et suppression | Indispensable |
| F-04 | Espace enfant | Accueil et navigation adaptés à l'âge | Indispensable |
| F-05 | Catalogue | Activités classées par matière et niveau | Indispensable |
| F-06 | Moteur de jeux | Questions, réponses, consignes, correction et score | Indispensable |
| F-07 | Premiers jeux | Mathématiques, vocabulaire/français et mémoire | Indispensable |
| F-08 | Difficulté adaptée | Contenus adaptés au parcours et au niveau | Haute |
| F-09 | Tentatives | Enregistrement des activités et résultats | Indispensable |
| F-10 | Progression | Historique synthétique des compétences travaillées | Haute |
| F-11 | Récompenses | Badges et encouragements non marchands | Moyenne |
| F-12 | Espace parent | Vue d'ensemble des profils et progrès | Indispensable |
| F-13 | Confidentialité | Paramètres et informations accessibles au parent | Indispensable |
| F-14 | Journal d'audit | Traçabilité des événements sensibles côté serveur | Haute |
| F-15 | Responsive/PWA | Utilisation mobile, tablette et ordinateur | Haute |

### Évolutions ultérieures
- Activités supplémentaires en sciences et anglais.
- Assistant pédagogique IA encadré et adapté aux enfants.
- Synthèses de progression enrichies.
- Mode hors ligne partiel.
- Offre premium éventuelle, présentée uniquement dans l'espace parent.

### Hors périmètre MVP
- Paiement et abonnements.
- Réseau social, profils publics ou classement public.
- Messagerie ouverte entre enfants.
- Publicité comportementale.
- Géolocalisation précise non nécessaire.
- Microservices prématurés.

## 4. Parcours utilisateurs

### Parent
1. Accède à la page de présentation.
2. Crée son compte et valide les informations nécessaires.
3. Se connecte à son espace sécurisé.
4. Crée un ou plusieurs profils enfants.
5. Sélectionne un profil.
6. Consulte les activités et les résultats.
7. Gère les paramètres de confidentialité et du compte.

### Enfant
1. Le parent sélectionne le profil enfant.
2. L'enfant arrive sur un accueil adapté à son âge.
3. Il choisit une matière ou une activité.
4. Il lit ou écoute une consigne courte.
5. Il réalise l'activité et reçoit un retour pédagogique.
6. Le résultat est enregistré côté serveur.
7. Il retrouve sa progression et ses encouragements.

## 5. Règles de gestion
- Un compte parent peut gérer plusieurs profils enfants.
- Chaque profil enfant est rattaché à un compte parent.
- Les données sont isolées entre comptes et profils.
- Les droits sont contrôlés côté serveur, pas seulement dans l'interface.
- Les scores transmis par le navigateur sont validés côté serveur.
- Les contenus sont associés à une tranche d'âge, une matière et un niveau.
- Les récompenses encouragent l'effort sans compétition publique.
- Les fonctions sensibles du compte sont réservées au parent.
- Les propositions commerciales éventuelles sont confinées à l'espace parent.

## 6. Identité visuelle et UX

La conception suit la charte du dépôt : identité joyeuse, rassurante, lisible et moderne, sans infantiliser les plus grands.

Palette :
- Violet `#5527A5`
- Jaune `#FFC629`
- Turquoise `#20B9C7`
- Corail `#F46C91`
- Crème `#FFF1D9`

Prévoir trois parcours d'interface (3–5, 6–8, 9–12 ans), une navigation courte, des boutons explicites, des consignes simples et des retours encourageants. L'espace parent doit être plus sobre et distinct de l'espace enfant.

## 7. Architecture technique cible

### Principes
Monolithe modulaire pour le MVP, API versionnée, validation systématique, contrôle d'accès côté serveur, tests automatisés et intégration continue.

### Technologies
| Couche | Technologie |
|---|---|
| Frontend | React, TypeScript, Vite |
| Routage | React Router |
| Backend | Python, FastAPI, Pydantic |
| ORM/migrations | SQLAlchemy, Alembic |
| Base de données | PostgreSQL |
| Tests backend | Pytest |
| Tests frontend | Vitest, Testing Library |
| Tests E2E | Playwright |
| Conteneurs | Docker, Docker Compose |
| CI | GitHub Actions |
| Déploiement | HTTPS derrière un reverse proxy |

### Modules backend
`auth`, `parents`, `children`, `games`, `learning`, `progress`, `rewards`, `parent_dashboard`, `privacy`, `admin`, `audit`.

### Entités initiales
`parents`, `children`, `games`, `activities`, `skills`, `attempts`, `rewards`, `child_rewards`, `consents`, `audit_logs`.

## 8. Sécurité et protection des mineurs

### Sécurité technique
- Hachage des mots de passe avec un algorithme robuste tel qu'Argon2id.
- Sessions et jetons protégés, durée de vie maîtrisée et révocation possible.
- Contrôle d'accès par rôle et vérification de propriété des ressources.
- Protection contre injections, XSS, CSRF selon le mode d'authentification et abus d'API.
- Limitation de débit sur les points sensibles.
- Secrets conservés dans l'environnement et jamais dans Git.
- HTTPS en production.
- Journaux sans secrets ni données inutiles.
- Sauvegardes et procédure de restauration testée.
- Dépendances suivies et mises à jour.

### Vie privée
- Collecter uniquement les données nécessaires.
- Définir les durées de conservation et règles de suppression.
- Documenter les finalités et bases légales à valider.
- Prévoir l'information des responsables légaux et les mécanismes de consentement requis.
- Permettre l'exercice des droits applicables.
- Encadrer les prestataires et transferts éventuels.
- Évaluer la nécessité d'une AIPD/DPIA avant mise en production.

Ce document est un cadrage produit et technique ; il ne remplace pas une validation juridique du dispositif au regard du RGPD et des règles applicables aux mineurs.

### Usages enfant
Pas de messagerie publique entre enfants, de profil public, de publicité comportementale ni de collecte de géolocalisation précise non nécessaire. Un assistant IA éventuel doit être encadré et ne pas solliciter de données personnelles.

## 9. Exigences non fonctionnelles

| Domaine | Exigence |
|---|---|
| Accessibilité | Contraste, focus visible, clavier, textes compréhensibles |
| Responsive | Mobile, tablette et ordinateur |
| Performance | Pages légères et requêtes surveillées |
| Fiabilité | Gestion d'erreurs, sauvegardes et restauration |
| Maintenabilité | Code modulaire, typé, documenté et testé |
| Sécurité | Contrôles serveur, secrets hors Git, dépendances suivies |
| Évolutivité | Ajout de jeux sans refonte du socle |
| Confidentialité | Minimisation et séparation des profils |

## 10. Tests et critères de recette

Tests unitaires, intégration API/base, permissions entre comptes, parcours parent/enfant, validation des entrées, responsive, accessibilité, sauvegarde/restauration et vérification des dépendances.

Le MVP est recevable lorsque :
1. Un parent peut créer son compte, se connecter et se déconnecter.
2. Il peut créer, modifier et supprimer ses profils.
3. Un profil ne peut accéder aux données d'un autre compte.
4. L'enfant accède à des activités adaptées à son âge.
5. Au moins trois familles de jeux sont utilisables.
6. Les réponses et résultats sont validés côté serveur.
7. Les progrès sont enregistrés et visibles par le parent.
8. L'interface fonctionne sur mobile, tablette et ordinateur.
9. Les tests essentiels passent dans la CI.
10. Aucun secret n'est présent dans le dépôt.
11. Une sauvegarde peut être restaurée dans un environnement de test.
12. Les informations de confidentialité et paramètres parentaux sont accessibles.

## 11. Planning prévisionnel

Estimation indicative pour un développement individuel, à ajuster selon la disponibilité.

| Phase | Durée indicative | Livrables |
|---|---:|---|
| Cadrage et conception | 1 semaine | Cahier des charges, parcours, maquettes, backlog |
| Socle technique | 1–2 semaines | Frontend, API, PostgreSQL, CI |
| Comptes et profils | 2 semaines | Authentification, profils et permissions |
| Expérience et catalogue | 1–2 semaines | Espaces parent/enfant, catalogue |
| Jeux et apprentissage | 2–3 semaines | Moteur et trois familles d'activités |
| Progression et tableau parent | 1–2 semaines | Historique, indicateurs, récompenses |
| Sécurité et confidentialité | 1–2 semaines | Contrôles, audit, sauvegardes |
| Recette et préparation | 1–2 semaines | Tests, corrections, documentation |

## 12. Livrables
- Cahier des charges.
- Charte graphique et ressources de marque.
- Maquettes et parcours utilisateurs.
- Code source frontend et backend.
- Schéma de données et migrations.
- Documentation d'installation et API.
- Tests automatisés et résultats de recette.
- Procédures de sauvegarde/restauration.
- Documentation sécurité et confidentialité.
- Version de démonstration déployable.

## 13. Risques et mesures
| Risque | Mesure |
|---|---|
| Collecte excessive de données | Minimisation dès la conception |
| Accès indu entre profils | Autorisations serveur et tests multi-comptes |
| Usage difficile selon l'âge | Tests utilisateurs et parcours différenciés |
| Périmètre trop large | Priorisation du MVP |
| Résultats falsifiés côté navigateur | Validation métier côté serveur |
| Perte de données | Sauvegardes et tests de restauration |
| Usage IA inadapté | Fonction encadrée, limitée et non essentielle au MVP |

## 14. Décisions à confirmer avant production
Hébergeur et région, politique de conservation, parcours de consentement et informations légales, fournisseur d'e-mails, contenus pédagogiques validés par âge, conditions d'un assistant IA et protocole de tests avec les familles.

---
**Référence :** toute évolution importante du périmètre doit être ajoutée au backlog et validée avant développement.
