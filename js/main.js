function generateRandom() {
    // Rangni generatsiya qilish
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Raqamni generatsiya qilish
    var randomNumber = Math.floor(Math.random()*25) + 1;
    // Natijani ekranga chiqarish
    document.getElementById('result').innerHTML = '<p style="color:' + randomColor + '">Rang: ' + randomColor + '</p><p>Raqam: ' + randomNumber + '</p>';
}
