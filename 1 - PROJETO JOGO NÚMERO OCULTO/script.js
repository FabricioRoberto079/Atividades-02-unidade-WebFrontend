var numeroMaquina = Math.floor(Math.random() * 20);
        var tentativas = 5; 

        function verificar() {
            const divTeste = document.getElementById('teste');
            const numeroUsuario = document.getElementById('numeroUsuario').value; 

            if (tentativas > 0) {
                if (numeroMaquina == numeroUsuario) {
                    divTeste.innerHTML = `Você acertou! O número era ${numeroMaquina}.`;
                    tentativas = 0; 
                } else {
                    tentativas--;
                    divTeste.innerHTML = `Você errou! Você tem ${tentativas} tentativas restantes.`;
                }
            }

            if (tentativas == 0 && numeroMaquina != numeroUsuario) {
                divTeste.innerHTML = `Suas tentativas acabaram. O número correto era ${numeroMaquina}.`;
            }
        }