document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('lengthRange').value);
    const password = generatePassword(length);
    document.getElementById('password').value = password;
});

document.getElementById('lengthRange').addEventListener('input', () => {
    const lengthValue = document.getElementById('lengthRange').value;
    document.getElementById('lengthValue').textContent = lengthValue;
});

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
