const affirmations = [
    'Today, I am brimming with energy and overflowing with joy',
    'I am superior to negative thoughts and low actions',
    'I possess the qualities needed to be extremely successful'
]

const getAffirmDisplay = () => document.getElementById('affirmDisplay');

function affirmShow() {
    const affirmDisplay = getAffirmDisplay();
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmDisplay.innerHTML = affirmations[randomIndex];
}

const handleClick = () => {
    affirmShow();
    const affirmDisplay = getAffirmDisplay();
    affirmDisplay.classList.remove('ended');
    // const { type } = setupTypewriter(affirmDisplay);
    // type();
}

// сразу показывается при загрузке страницы
handleClick();

const affirmButton = document.getElementById('affirmButton');
affirmButton.addEventListener('click', handleClick);

// function setupTypewriter(t) {
//     const html = t.innerHTML;
//     let virtualHtml = '';

//     let position = 0;
//     let speed = 100;
//     let timeout = 0;

//     const type = () => {
//         timeout = html[position] === " " ? 0 : (Math.random() * speed) + 50;
//         virtualHtml += html[position];
//         t.innerHTML = virtualHtml;
//         position++;
//         if (position < html.length) {
//             setTimeout(type, timeout);
//         } else {
//             setTimeout(() => {
//                 const affirmDisplay = getAffirmDisplay();
//                 affirmDisplay.classList.add('ended');
//             }, 1000);
//         }
//     }
//     return { type };
// }