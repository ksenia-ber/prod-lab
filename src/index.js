const affirmations = [
    'Today, I am brimming with energy and overflowing with joy',
    'I am superior to negative thoughts and low actions',
    'I possess the qualities needed to be extremely successful'
]

const chooseRandom = (length) =>  Math.floor(Math.random() * length);

let random
const chooseNextAffirmation = () => {
    if (typeof random !== 'number') {
        random = chooseRandom(affirmations.length)
        return affirmations[random];
    } else {
        const nextAffirmations = [...affirmations.slice(0, random), ...affirmations.slice(random + 1)];
        const nextRandom = chooseRandom(nextAffirmations.length);
        const nextAffirmation = nextAffirmations[nextRandom]
        random = affirmations.indexOf(nextAffirmation)
        return nextAffirmation
    }

}

function affirmShow() {
    const affirmDisplay = document.getElementById('affirmDisplay');
    const affirmation = chooseNextAffirmation();
    affirmDisplay.innerHTML = affirmation;
}

affirmShow();

const input = document.createElement('input');
input.type = 'button'
input.value = 'Show new';
input.addEventListener('click', () => {
    affirmShow();
});
document.body.appendChild(input);