const emojiButton = document.getElementById('emoji-button');
const emojiDisplay = document.getElementById('emoji-display');
const messageDisplay = document.getElementById('message-display');

const emojis = ['😊', '🥳', '🎉', '🤩', '🚀', '🌟', '✨'];
const messages = [
    "You're awesome!",
    "Keep shining!",
    "You've got this!",
    "Dream big!",
    "Believe in yourself!",
    "You are capable of amazing things!",
    "The best is yet to come!"
];

emojiButton.addEventListener('click', () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    emojiDisplay.textContent = randomEmoji;
    messageDisplay.textContent = randomMessage;
});