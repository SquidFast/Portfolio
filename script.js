function SayHello() {
    const button = document.getElementById('Bonjour');
    const container = document.getElementById('text-container');
    if (!button || !container) return;

    button.remove();

    const wrapper = document.createElement('div');
    wrapper.className = 'message-wrapper';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'messageInput';
    input.placeholder = 'Demander moi ce que vous voulez';
    input.className = 'message-field';

    const submit = document.createElement('button');
    submit.type = 'button';
    submit.id = 'sendButton';
    submit.textContent = 'Envoyer';
    submit.className = 'send-button';
    submit.onclick = sendToAI;

    wrapper.appendChild(input);
    wrapper.appendChild(submit);
    container.appendChild(wrapper);
    input.focus();
}

function sendToAI() {
    const input = document.getElementById('messageInput');
    if (!input) return;

    const message = input.value.trim();
    if (!message) {
        input.focus();
        return;
    }

    const responseContainer = getOrCreateResponseContainer();
    responseContainer.textContent = `Texte envoyé à l’IA : « ${message} »`;

    console.log('Envoi à l IA :', message);
    input.value = '';
    input.focus();
}