const monitor = document.getElementById('monitor');
const buttons = document.querySelectorAll('button[data-word]');
const clearScreenButton = document.getElementById('clear-screen');
const synth = window.speechSynthesis;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const word = button.getAttribute('data-word');
        monitor.innerHTML += word + ' ';

        // Text-to-speech
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.pitch = 1.2; // Increase pitch
        utterance.rate = 0.9;  // Increase rate slightly
        synth.speak(utterance);
    });
});

clearScreenButton.addEventListener('click', () => {
    monitor.innerHTML = '';
});