window.onload = function frases() {
  let who = ['My dog', 'My grandma', 'I', 'My bird'];
  let action = ['ate', 'forgot', 'needed to take', 'peed'];
  let what = ['my homework', 'the keys', 'a mental health break', 'the car'];
  let when = ['before the class', 'right on time', 'today', 'during my lunch'];

  let randomNumber = Math.floor(Math.random() * 4);

  //Le puse un nombre más específico y claro a mis variables.
  const new_tag = document.createElement("h1");
  const text = document.createTextNode(who[randomNumber] + " " + action[randomNumber] + " " + what[randomNumber] + " " + when[randomNumber]);
  new_tag.appendChild(text);

  const element = document.getElementById("div1");
  const child = document.getElementById("p2");
  element.insertBefore(new_tag, child);

};