window.onload = function frases() {
    let who = ['My dog', 'My grandma', 'I', 'My bird'];
    let action = ['ate', 'forgot', 'needed to take', 'peed'];
    let what = ['my homework', 'the keys', 'a mental health break', 'the car'];
    let when = ['before the class', 'right on time', 'today', 'during my lunch'];

    let randomNum = Math.floor(Math.random() * 4);
   
    const para = document.createElement("h1");
    const node = document.createTextNode(who[randomNum]+ " " + action[randomNum]+ " " + what[randomNum] +" "+ when[randomNum]);
    para.appendChild(node);

    const element = document.getElementById("div1");
    const child = document.getElementById("p2");
    element.insertBefore(para, child);
     
  };