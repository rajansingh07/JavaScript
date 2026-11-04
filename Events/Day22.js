// // function handleClick(){
// //     const element = document.getElementById("first");
// //     element.textContent = "JavaScript"
// // }


const element = document.getElementById('first');
// // element.onclick = function handleClick(){
// //     element.textContent = "JavaScript"
// // } 


// //  Use OnClick for single event and addEventListner for multiple event


// element.addEventListener('click', function(){
//     element.textContent = "JavaScript"
//     element.style.color = "yellowgreen"
// })

// element.addEventListener('mouseenter', function(){
//     element.textContent = "Rajan"
// })

// // const child1 = document.getElementById('child1');
// // child1.addEventListener('click', function(){
// //     child1.textContent = "Im Clicked"
// // })

// const parent = document.getElementById('parent');
// for (let child of parent.children) {
//     child.addEventListener('click', function() {
//         child.textContent = "I'm Clicked"
//     })
// }

let grandparent = document.getElementById('grandparent');
grandparent.addEventListener('click', ()=>{
    console.log("GrandParent is clicked");
})

let parent = document.getElementById('parent');
parent.addEventListener('click', ()=>{
    console.log("Parent is clicked");
})

let child = document.getElementById('child');
child.addEventListener('click', ()=>{
    console.log("Child is clicked");
})

