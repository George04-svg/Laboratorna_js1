let userName = "";
let userAge = "";

while (true) {
    userName = prompt("Введите ваше имя", userName);
    userAge = prompt("Введите ваш возраст", userAge);

    if (userName && !isNaN(userAge)) {
        userAge = Number(userAge);
        break;
    } else {
        alert("Пожалуйста, введите корректные имя и возраст");
    }
}

if (userAge < 18) {
    alert("You are not allowed to visit this website");
} else if (userAge >= 18 && userAge <= 22) {
    let confirmation = confirm("Are you sure you want to continue?");
    if (confirmation) {
        alert(`Welcome, ${userName}`);
    } else {
        alert("You are not allowed to visit this website");
    }
} else {
    alert(`Welcome, ${userName}`);
}