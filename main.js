function generatePassword(length) {
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    return password;
}

console.log(generatePassword(8));
