# Prise en main des composants

Ce TP vous familiarise sur la notion de composants, de states et de props. Pour commencer, copiez [le répertoire du projet](https://github.com/guhur/premiers_composants) dans un [nouveau répertoire git](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo).


## Questions

**1. Comment installer le projet ?**

**2. Comment lancer l'application ?**

**3. Que se passe-t'il lors du lancement de l'application ?**

En regardant dans le code de `src/index.jsx`, vous remarquez que le composant `App` n'est pas utilisé. 

**4. Résoudre ce problème. Qu'avez-vous fait ?**


**5. Un message d'erreur apparaît désormais dans la console. Corrigez ce problème.**

Nous allons maintenant personnaliser notre bouton en ajoutant un peu de CSS.
Pour cela, ajoutez la ligne `import './button.css'` dans le fichier `src/components/button.jsx`.

**6. Modifiez les fichiers `src/index.css` et `src/button.js` pour que le bouton ait un fond rouge et un texte en blanc**

Nous souhaitons maintenant avoir plusieurs fois le même bouton.

**7. Modifiez le fichier `src/index.jsx` pour dupliquer le bouton en plusieurs exemplaires**

Vous risquez d'obtenir une nouvelle erreur, car un composant ne peut avoir qu'une seule enfant. Cela se résout en encapsulant les différents enfants dans une balise vide : `<></>`.

