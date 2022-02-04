# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

My users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Switch between viewing Daily, Weekly, and Monthly stats
-   Have a responsive view on different devices
-   (New) Click ellipsis and see the Magic!

### Screenshot

![Laptop View + Week](./images/screenshots/Screenshot-1.jpg)
![Laptop View + Daily](./images/screenshots/Screenshot-2.jpg)
![Tablet View](./images/screenshots/Screenshot-3.jpg)
![Phone View](./images/screenshots/Screenshot-4.jpg)
![](./images/screenshots/Screenshot-5.jpg)

### Links

-   Solution URL: [Solution URL](https://github.com/SGautam1108/TimeTrackerDashboard)
-   Live Site URL: [Live site](https://sgautam1108.github.io/TimeTrackerDashboard/)

## My process

Started with HTML and styling using CSS.
Media queries were added with CSS for responsive pages.
Javascript was added to parse JSON and update page for appropriate stats.

### Built with

-   Semantic HTML5 markup
-   CSS
-   BEM Methodology
-   JQuery

### What I learned

The following project took a couple of days. There were quite many things to learn along the process-

1. First and foremost, json fetch, and accessing Promises for data

```js
const data = fetch("./data.json") // gets a promise as response
    .then((response) => response.json()) // response to json promise
    .then((json) => {
        //Do something with json
        console.log(json[0]);
        json.forEach((obj) => update(obj));
    });
```

2. Using Data attributes can come handy to match criterias or changing texts based on target

```html
<h3
    class="stats__option stats__option--active"
    data-timeframe="weekly"
    data-time_span="Week"
>
    Weekly
</h3>
```

There are two data attributes, timeframe and time_span which will be later used to match Json data, and change previous Time phrase based on time span.

3. We can use variables not just in :root, but also in other elements if we desire to change properties of children or pseudo elements using them, dynamically!

```css
.tracker__cards {
    --scale: 1;
    --rotate: 0deg;

    cursor: pointer;
    position: relative;
    align-self: flex-end;
    height: 80%;
}

/* This class can be added to change properties later using JS */

.tracker__cards--rotate {
    --scale: 0.9;
    --rotate: -10deg;
}
```

4. We can use

```js
$(".element").get(x);
```

to get xth element in DOM format rather than DOMList. This helps in using Vanilla Js methods

### Useful resources

-   [Kevin Powell](https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw) - Great CSS Ideas and frontend best practices tips

## Author

-   LinkedIn - [Shaurya Gautam](https://www.linkedin.com/in/sgautam1108/)
-   Frontend Mentor - [@SGautam1108](https://www.frontendmentor.io/profile/SGautam1108)
-   CSSBattles.dev - [@SGautam1108](https://cssbattle.dev/player/sgautam1108)
-   Github - [@SGautam1108](https://github.com/SGautam1108/)

## Acknowledgments

A Special thanks to Angela Yu, Course Instructor for "Full stack development" course at Udemy. Her course has been of a great help for me to start out with these projects on my own. Cheers to y'all!!
