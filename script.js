const data =[
    {
        name:"sundown",
        link:"https://freniix.github.io/sundown",
    },
    {
        name:"calculator",
        link:"https://freniix.github.io/Calculator",
    },
    {
        name:"frontend mentor",
        link:"https://freniix.github.io/frontend-mentor",
    },
    {
        name:"eyes",
        link:"https://freniix.github.io/eyes",
    },
    {
        name:"Python Quiz",
        link:"https://freniix.github.io/quiz",
    },
    {
        name:"Tic Tac Toe",
        link:"https://freniix.github.io/tictactoe/",
    },
     {
        name:"Git find",
        link:"https://freniix.github.io/gitfind/",
    },
    
     {
        name:"Pop the bubbles",
        link:"https://freniix.github.io/bubbles/",
    },

]

const wrapper = document.querySelector("#wrapper");
data.forEach(item =>{
    let div = document.createElement("div");
    div.className ='links w-80 bg-gradient-to-l from-[red] to-[orange] cursor-pointer p-3 text-white  rounded-4xl text-center text-4xl';
    let a = document.createElement('a');
    a.href = item.link;
    a.target = "_blank";
    a.textContent = item.name;
    div.appendChild(a)
    wrapper.appendChild(div)
});
