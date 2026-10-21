// DOM (Document Object Model)

// 1. What is DOM?
// DOM stands for Document Object Model.
// It is a programming interface that represents
// an HTML document as a tree of objects.
// JavaScript can use the DOM to access, change,
// add, or remove HTML elements.

// 2. DOM Structure
//
// Window
//   |
//   └── Document
//         |
//         └── HTML
//               |
//               ├── Head
//               |     ├── Meta
//               |     └── Title
//               |
//               └── Body
//                     ├── Div
//                     ├── Heading (h1)
//                     └── Paragraph (p)

// 3. What is Window?
// Window is the global object in a browser.
// It provides access to browser features such as
// the document, location, history, and timers.

// Example:
// console.log(window);

// 4. What is Document?
// Document represents the current HTML page.
// JavaScript uses it to access HTML elements.

// Example:
// console.log(document);

// 5. Selecting HTML Elements

// Select an element by its ID
// document.getElementById("myId");

// Select an element by its class
// document.getElementsByClassName("myClass");

// Select elements by tag name
// document.getElementsByTagName("p");

// Select the first matching CSS selector
// document.querySelector(".heading");

// Select all matching CSS selectors
// document.querySelectorAll("p");

// 6. Changing HTML Content

// Change text inside an element
// document.querySelector(".heading").textContent =
//     "Learning JavaScript DOM";

// 7. Changing CSS Styles

// const heading = document.querySelector(".heading");
// heading.style.color = "blue";
// heading.style.backgroundColor = "yellow";

// 8. Creating a New Element

// const newPara = document.createElement("p");
// newPara.textContent = "This paragraph was created using JS";
// document.body.appendChild(newPara);

// 9. Removing an Element

// const para = document.querySelector("p");
// para.remove();

// 10. Handling Events

// const heading = document.querySelector(".heading");
// heading.addEventListener("click", () => {
//     console.log("Heading clicked!");
// });

// 11. Important DOM Properties
// innerHTML   - Gets or sets HTML content
// textContent - Gets or sets text content
// innerText   - Gets or sets rendered text
// style       - Changes inline CSS styles
// parentElement - Gets the parent element
// children    - Gets child elements

// 12. Important Note
// The DOM is created by the browser from HTML.
// JavaScript interacts with the DOM to make
// webpages dynamic and interactive.
