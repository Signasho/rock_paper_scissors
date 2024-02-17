let userPlay = document.getElementById('userSelection')
let rockIcon = `<i class="fa-regular fa-hand-back-fist fa-2xl"></i>`;
let paperIcon = `<i class="fa-regular fa-hand fa-2xl"></i>`;
let scissorsIcon = `<i class="fa-regular fa-hand-scissors fa-2xl"></i>`;
let machinePlay = document.getElementById('machineGame')
let resultGame = document.getElementById('result')


const choices = [rockIcon, paperIcon, scissorsIcon];



    //let games = prompt("Ingresa la cantidad de veces que deseas jugar!");


        const playGame = (userGame) => {
            const machineGame = choices[Math.floor(Math.random() * 3)];
            let result = "";

            if (userGame === 'rock') {
                userGame = rockIcon;
            }
            if (userGame === 'paper') {
                userGame = paperIcon
            }
            if (userGame === 'scissors') {
                userGame = scissorsIcon
            }

            if (userGame === machineGame) {
                result = "EMPATE";
            }
            else {
                switch (userGame) {
                    case rockIcon:
                        result = (machineGame === scissorsIcon) ? "GANASTE!" : "PERDISTE!";
                        break;
                    case paperIcon:
                        result = (machineGame === rockIcon) ? "GANASTE!" : "PERDISTE!";
                        break;
                    case scissorsIcon:
                        result = (machineGame === paperIcon) ? "GANASTE!" : "PERDISTE!";
                        break;
                }
            }

            userPlay.innerHTML = userGame;
            machinePlay.innerHTML = machineGame;
            resultGame.textContent = result;
        }
    






