# Identité visuelle — Elf-ant

## 1. Référence de marque
Le README présente Elf-ant comme une application web éducative intelligente et sécurisée pour les enfants, proposant des activités en mathématiques, français, sciences et anglais, des quiz, des jeux éducatifs, un assistant IA et des récompenses.

L'identité doit évoquer l'apprentissage, la curiosité, la confiance et la sécurité. Elle doit être chaleureuse et ludique, mais assez sobre pour accompagner aussi les enfants plus âgés et rassurer les parents.

**Signature proposée :** Apprendre en s'amusant, grandir en confiance.

## 2. Direction artistique
- **Ton :** joyeux, accueillant, curieux, encourageant et fiable.
- **Style :** illustration simple, formes rondes, peu de détails, composition aérée.
- **Mascotte :** éléphant sympathique, symbole de mémoire et d'accompagnement ; il ne doit pas dominer les contenus pédagogiques.
- **Équilibre :** interface enfant expressive, espace parent plus sobre, sans créer deux marques différentes.
- **Cohérence :** même palette, même typographie et mêmes formes sur le site, la PWA et les supports.

## 3. Palette de marque

| Rôle | Couleur | Code |
|---|---|---|
| Principale | Violet | `#5527A5` |
| Accent lumineux | Jaune | `#FFC629` |
| Accent frais | Turquoise | `#20B9C7` |
| Accent chaleureux | Corail | `#F46C91` |
| Fond doux | Crème | `#FFF1D9` |
| Texte | Encre | `#28243A` |
| Surface | Blanc | `#FFFFFF` |

### Utilisation
- Violet : logo, titres, navigation et actions principales.
- Turquoise : éléments interactifs secondaires et repères de progression.
- Jaune : étoiles, récompenses et petits accents décoratifs.
- Corail : encouragements et accents ponctuels.
- Crème : fond de page et zones de respiration.
- Encre : texte courant.

Le jaune et le corail ne doivent pas être utilisés seuls pour du texte de petite taille sur fond clair. Vérifier les contrastes de chaque paire réellement utilisée.

## 4. Logo
Le logo associe un symbole d'éléphant stylisé et amical, le nom **Elf-ant** dans une typographie ronde et lisible, et une palette cohérente avec l'interface.

- Ne pas déformer, incliner ou recolorer le logo.
- Préserver une marge autour du symbole et du mot-symbole.
- Sur petit écran, utiliser le symbole seul si le nom devient illisible.
- Garder le logo sur une surface claire ou utiliser une variante contrastée dédiée.
- Ne pas intégrer de slogan dans le logo compact.
- Le logo ne doit pas être confondu avec une validation de sécurité ou un indicateur de statut.

Fichier source : `brand/elfant-logo.svg`.

## 5. Typographie
- Titres : Nunito, poids 700 à 900.
- Paragraphes et libellés : Nunito, poids 400 à 600.
- Police de secours : system-ui, sans-serif.
- Limiter les textes en capitales et les longues lignes.
- Utiliser des tailles confortables, notamment pour les consignes des plus jeunes.

## 6. Formes, icônes et illustrations
- Cartes : rayon de 16 à 24 px.
- Boutons : arrondis, libellés explicites, zone tactile confortable.
- Ombres : discrètes.
- Icônes : une seule famille cohérente, accompagnée de texte si le sens n'est pas évident.
- Illustrations : simples, positives, non stéréotypées et adaptées à plusieurs âges.

## 7. Adaptation par tranche d'âge
- 3–5 ans : gros boutons, peu de choix simultanés, illustrations explicites, consignes courtes.
- 6–8 ans : repères visuels, étapes courtes, feedback immédiat et encourageant.
- 9–12 ans : interface moins infantilisante, autonomie, objectifs et progression plus détaillée.

Les couleurs et le logo restent identiques sur les trois parcours.

## 8. Accessibilité et mouvement
- Contraste lisible et focus clavier visible.
- Ne jamais transmettre une information uniquement par la couleur.
- Respecter `prefers-reduced-motion`.
- Éviter les clignotements, animations rapides et effets anxiogènes.
- Prévoir des libellés accessibles pour les icônes et contrôles.

## 9. Ressources
- Logo : `brand/elfant-logo.svg`
- Variables CSS : `brand/tokens.css`
- Cahier des charges : `docs/cahier-des-charges.md`
