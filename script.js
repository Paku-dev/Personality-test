'use strict';
const userNameInput = document.getElementById('user-name');
const resultButton = document.getElementById('result-button');
const resultDivided = document.getElementById('result-area');


function removeAllChildren(element){
    while(element.firstChild){
        //if there is a child element delete
        element.removeChild(element.firstChild);
    }
}

  //if no name end
   resultButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0){
    return;
  }
    
    //will show as header
    removeAllChildren(resultDivided);
   const header = document.createElement('h3');
    header.innerText = 'Result';
    resultDivided.appendChild(header);

    //creates a html element to show result
    const paragraph = document.createElement('p');
    const result = retrunResult(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
  

    //make it able to get results from clicking enter
    userNameInput.onkeydown = event => {
        if (event.key === 'Enter') {
          resultButton.onclick();
        }
    };
};
const answers = [
  "The best thing about {userName} is its voice. The distinctive voice of {userName} attracts everyone and stays with you.",
  "The nice thing about {userName} is the eyes. If {userName} stares at you, you're going to be curious!",
  "The best thing about {userName} is passion. People around you are inspired by {userName}'s passion.",
  "The best thing about {userName} is its rigor. The strictness of {userName} is what always makes things work!",
  "The nice thing about {userName} is knowledge. A lot of people rely on the knowledgeable {userName}.",
  "The best thing about {userName} is its uniqueness. It's the only characteristic that makes everyone happy.",
  "The nice thing about {userName} is that he's cautious. {userName}'s insights can help a lot of people.",
  "The best thing about {userName} is the way it looks. People are drawn to the goodness of {userName} that overflows from within",
  "The nice thing about {userName} is the ability to make decisions. There are always people who can help you with the decisions that {userName} makes.",
  "The nice thing about {userName} is compassion. A lot of people who have been cared for by {userName} are grateful.",
  "The nice thing about {userName} is sensitivity. We can all relate to and understand what {userName} feels.",
  "The nice thing about {userName} is moderation. We all appreciate the idea of {userName} not being too pushy.",
  "The nice thing about {userName} is curiosity. The attitude of {userName} towards new things appeals to a lot of people.",
  "The nice thing about {userName} is that it is attentive. {userName}'s care has helped a lot of people.",
  "The good thing about {userName} is all of that. The good thing about {userName} is that it's just the way it is.",
  "The nice thing about {userName} is self-control. Everyone appreciates {userName}'s ability to firmly control his impulses when he feels like he's in trouble.",
  "The good thing about {userName} is kindness. Many people are soothed by {userName}'s gentle atmosphere and demeanor.",
  "The best thing about {userNamer} is the warmth. Heal everyone with the warmth of {userName}."    
];
function retrunResult(userName){
      
    //make the results random 

    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    //replaces {userName} with your user name
    result = result.replace(/\{userName\}/g, userName);

    return result;
}
