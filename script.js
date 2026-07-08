const resultEl = document.getElementById('result');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=';

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    
    if (!password || password === 'Click Generate') {
        return;
    }
    
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    });
});

generateEl.addEventListener('click', () => {
    let generatedPassword = '';
    const length = 14; 

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        generatedPassword += allCharacters[randomIndex];
    }

    resultEl.innerText = generatedPassword;
});