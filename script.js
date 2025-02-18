document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('lengthRange').value);
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    
    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('password').value = password;
});

document.getElementById('lengthRange').addEventListener('input', () => {
    const lengthValue = document.getElementById('lengthRange').value;
    document.getElementById('lengthValue').textContent = lengthValue;
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    let charset = "";

    if (includeLowercase) charset += lowercase;
    if (includeUppercase) charset += uppercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset === "") return "";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
