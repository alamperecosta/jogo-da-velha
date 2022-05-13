let jogador1 = 'X';
let jogador2 = 'O';
let timeJgoo = jogador1;
let gameOver = false;
let vez = document.querySelector('.suavez>p');
let tabuleiro = document.querySelectorAll('#casa');
vez.textContent = `${jogador1} Sua vez`;
let ganhador = document.querySelector('.ganhador');
const novoJogo = document.querySelector('.zerar');

const atulizar = () => {
    
     
    if(gameOver){
        vez.textContent = 'Fim de jogo'
    }else if(timeJgoo == jogador1){
        vez.textContent = `${jogador1} Sua vez`;  
    }else if(timeJgoo == jogador2){
        vez.textContent = `${jogador2} Sua vez`;
    }
}

const jogarClick = () => {
    
    let tabuleiroTotal = tabuleiro.length;
    let jogadasFeitas = document.querySelector('.jogadas>p')
    let cont = 0;
    for(let i = 0; i < tabuleiroTotal; i++){
        
      
        tabuleiro[i].addEventListener('click', () => {
            if(gameOver){
                return
            };
            if(tabuleiro[i].innerHTML.length == 0){
                if(timeJgoo == jogador1){
                    timeJgoo = jogador2;
                    tabuleiro[i].innerHTML = jogador1;
                    cont++;
                }else if(timeJgoo == jogador2){
                    timeJgoo = jogador1;
                    tabuleiro[i].innerHTML = jogador2
                    cont++;
                }
            }
            
            atulizar();
            ganhadors();
            jogadasFeitas.textContent = cont;
            
        })
        const zera = () => {
            if(tabuleiro[i].innerHTML.length == true){
                tabuleiro[i].innerHTML = '';
                ganhador.textContent = '';
                cont = 0;
                jogadasFeitas.textContent = 0;
                
            }
        }  
        novoJogo.addEventListener('click', zera);
    }
    
    
}
jogarClick();


const ganhadors = () => {
    
    if(tabuleiro[0].innerHTML == jogador1 && tabuleiro[1].innerHTML == jogador1 && tabuleiro[2].innerHTML == jogador1 ){
        ganhador.textContent =` O Ganhador e "${jogador1}"`
    }else if(tabuleiro[0].innerHTML == jogador1 && tabuleiro[3].innerHTML == jogador1 && tabuleiro[6].innerHTML == jogador1){
        ganhador.textContent =` O Ganhador e "${jogador1}"`
    }else if(tabuleiro[1].innerHTML == jogador1 && tabuleiro[4].innerHTML == jogador1 && tabuleiro[7].innerHTML == jogador1 ){
        ganhador.textContent =` O Ganhador e "${jogador1}"`
    }else if(tabuleiro[2].innerHTML == jogador1 && tabuleiro[5].innerHTML == jogador1 && tabuleiro[8].innerHTML == jogador1 ){
        ganhador.textContent =` O Ganhador e "${jogador1}"`
    }else if(tabuleiro[0].innerHTML == jogador1 && tabuleiro[4].innerHTML == jogador1 && tabuleiro[8].innerHTML == jogador1 ){
        ganhador.textContent =` O Ganhador e "${jogador1}"`
    }else if(tabuleiro[2].innerHTML == jogador1 && tabuleiro[4].innerHTML == jogador1 && tabuleiro[6].innerHTML == jogador1 ){
        ganhador.textContent =` O Ganhador e "${jogador1}"`
    }else {
        if(tabuleiro[0].innerHTML == jogador2 && tabuleiro[1].innerHTML == jogador2 && tabuleiro[2].innerHTML == jogador2 ){
            ganhador.textContent =` O Ganhador e "${jogador2}"`
        }else if(tabuleiro[0].innerHTML == jogador2 && tabuleiro[3].innerHTML == jogador2 && tabuleiro[6].innerHTML == jogador2){
            ganhador.textContent =` O Ganhador e "${jogador2}"`
        }else if(tabuleiro[1].innerHTML == jogador2 && tabuleiro[4].innerHTML == jogador2 && tabuleiro[7].innerHTML == jogador2 ){
            ganhador.textContent =` O Ganhador e"${jogador2}"`
        }else if(tabuleiro[2].innerHTML == jogador2 && tabuleiro[5].innerHTML == jogador2 && tabuleiro[8].innerHTML == jogador2 ){
            ganhador.textContent =` O Ganhador e "${jogador2}"`
        }else if(tabuleiro[0].innerHTML == jogador2 && tabuleiro[4].innerHTML == jogador2 && tabuleiro[8].innerHTML == jogador2 ){
            ganhador.textContent =` O Ganhador e "${jogador2}"`
        }else if(tabuleiro[2].innerHTML == jogador2 && tabuleiro[4].innerHTML == jogador2 && tabuleiro[6].innerHTML == jogador2 ){
            ganhador.textContent =` O Ganhador e "${jogador2}"`
        }
    }
    
}








