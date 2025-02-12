# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- [Tailwind](https://tailwindcss.com/)

### What I learned

- I further solidified the use of custom variable in Tailwind CSS, to have my desired font family, colors, and font-sizes in a re-usable variable, as seen below:

```@theme {
  --color-body: hsl(210, 46%, 95%);
  --color-head: hsl(217, 19%, 35%);
  --color-paragraph: hsl(214, 17%, 51%);

  --font-manrope: "Manrope", sans-serif;

  --text-paragraph-clamp: clamp(0.813rem, 0.746rem + 0.282vw, 1rem);
}
```

- This is my first project with Tailwind, in which I made use of responsive screen sizes like `md`, `lg`
- I learnt how to use box-shadow in tailwind, using arbitrary values
- I am particularly pleased to have been able to style elements based on the state of another element, for example, if element A has `aria-expanded=true`, then element B should have this style. See snippet below after next point.
- I also used the `peer` and `group` classes for the first time, allowing me to style elements based on the state of a sibling and parent respectively. Snippet below:

```
<div class="peer-[[aria-expanded=true]]:flex peer-[[aria-expanded=true]]:items-center ...">...</div>
```

```
class="group-hover:fill-white group-aria-expanded:fill-white"
```

- I used @starting style property in tailwind in this project to add some transitions

- This is my first javasript project, so i am glad i was able to get the right functions to use

### Continued development

I want to further learn on how to build an accessible disclosure, with javascript and further in my learning process

### Useful resources

- [Tailwind Documentations](https://tailwindcss.com)
- [MDN](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com/)
- [CSS shapes](https://css-tricks.com/the-shapes-of-css/) - create different shapes with css

## Author

- Github - [https://github.com/repro123](https://github.com/repro123)
- Frontend Mentor - [https://www.frontendmentor.io/profile/repro123](https://www.frontendmentor.io/profile/repro123)
- Twitter - [https://x.com/Dr_Repro](https://x.com/Dr_Repro)
