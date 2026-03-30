# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Newsletter Sign-up Form](./screenshot.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/newsletter-signup-form-with-success-message-html-css-js-abc123)
- Live Site URL: [Live Demo](https://paul-afumba-newsletter-signup.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS variables)
- Flexbox
- CSS Grid
- Mobile-first responsive design
- Vanilla JavaScript (ES6+)
- Form validation with regex

### What I learned

This project was a great opportunity to practice form handling and validation in vanilla JavaScript. Here are some key learnings:

**Form Validation:**

```js
// Email validation using regex
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

**DOM Manipulation:**

```js
// Toggling visibility of elements
card.style.display = "none";
popupSuccess.style.display = "flex";
```

**Event Handling:**

```js
// Preventing default form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Custom validation logic
});
```

I also improved my understanding of responsive design patterns and how to create smooth user interactions without relying on frameworks.

### Continued development

In future projects, I want to focus on:

- Advanced form validation techniques (server-side validation)
- Accessibility improvements (ARIA attributes, keyboard navigation)
- Performance optimization for JavaScript-heavy applications
- Testing frameworks like Jest for JavaScript code

### Useful resources

- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Comprehensive guide on form validation techniques
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Excellent reference for Flexbox layouts
- [Regex101](https://regex101.com/) - Great tool for testing and understanding regular expressions
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Amazing community for feedback and inspiration

### AI Collaboration

This project benefited from AI-assisted development, particularly in:

- Debugging JavaScript event handling
- Optimizing CSS for responsive design
- Code review and best practices suggestions

## Author

- Frontend Mentor - [@paul-afumba](https://www.frontendmentor.io/profile/paul-afumba)
- LinkedIn - [Paul Afumba](https://www.linkedin.com/in/paul-afumba)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenging project, and to the community for their helpful feedback and suggestions.

- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
- What worked well? What didn't?

**Note: Delete this note and the content above if you didn't use AI, or replace with your own experience.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
