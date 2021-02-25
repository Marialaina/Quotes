const button = document.querySelector(".btn");
const pTag = document.querySelector(".quotes");
const buttonChoices = document.querySelectorAll(".btns")

var select = document.querySelector('select');

select.addEventListener('change', () => {
    console.log(select.value)
})


console.log(buttonChoices)
console.log(button);
console.log(pTag);


const affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."
]
const mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",

"Don’t let yesterday take up too much of today.",

"Every day is a second chance.",

"Tell the truth and love everyone.",

"I am free from sadness.",

"I am enough.",

"In the beginning it is you, in the middle it is you and in the end it is you.",

"I love myself.",

"I am present now.",

"Inhale the future, exhale the past.",

"This too shall pass.",

"Yesterday is not today.",

"The only constant is change.",

"Onward and upward.",

"I am the sky, the rest is weather."]

 const buttonFunc = () => {
    // const randomAffirmations = affirmations[Math.floor(Math.random() * affirmations.length)]
    // const randomMantras = mantras[Math.floor(Math.random() * affirmations.length)]

    if(select.value === "mantras"){
        console.log("it worked")
    }

    // pTag.innerHTML = randomAffirmations;
    // pTag.innerHTML = randomMantras;

   
 }

// if (buttonChoices && button){
//         pTag.innerHTML = randomAffirmations;
// }


button.addEventListener('click', buttonFunc)
// buttonChoices.addEventListener('click', buttonFunc)
// buttonChoice.addEventListener('click', buttonFunc)
