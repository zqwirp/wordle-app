# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- CSS Grid
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Animation(flip & bounce)

```css
.row > div.green {
  --background: #5ac85a;
  --border-color: #5ac85a;
  animation: flip 0.5s ease forwards;
}
.row > div.grey {
  --background: #a1a1a1;
  --border-color: #a1a1a1;
  animation: flip 0.6s ease forwards;
}
.row > div.yellow {
  --background: #e2cc68;
  --border-color: #e2cc68;
  animation: flip 0.5s ease forwards;
}
.row > div:nth-child(2) {
  animation-delay: 0.2s;
}
.row > div:nth-child(3) {
  animation-delay: 0.4s;
}
.row > div:nth-child(4) {
  animation-delay: 0.6s;
}
.row > div:nth-child(5) {
  animation-delay: 0.8s;
}
.row.current > div.filled {
  animation: bounce 0.2s ease-in-out forwards;
}

@keyframes flip {
  0% {
    transform: rotateX(0);
    background: #fff;
    border-color: #333;
  }
  45% {
    transform: rotateX(90deg);
    background: white;
    border-color: #333;
  }
  55% {
    transform: rotateX(90deg);
    background: var(--background);
    border-color: var(--border-color);
  }
  100% {
    transform: rotateX(0deg);
    background: var(--background);
    border-color: var(--border-color);
    color: #eee;
  }
}

@keyframes bounce {
  0% {
    transform: scale(1);
    border-color: #ddd;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    border-color: #333;
  }
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
