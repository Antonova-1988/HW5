// Угадай число

function guessGame() {
    const guessNumber = Math.floor(Math.random() * 100) + 1;
    
    while(true) {
        const userNumber = Number(prompt('Угадай число от 1 до 100'));

        if (userNumber === null) {
            alert ('Неверно!');
            return;
        } 
        
        if (userNumber === guessNumber){
            alert ('Верно! Молодец!');
            break;
        } else if (userNumber < guessNumber){
            alert ('Неверно! Число должно быть больше.');
        } else{
            alert ('Неверно! Число должно быть меньше.');
        }
            
    }
}


