<img src="./images/eu&ela.png" style="width: 20%;">

# 365-motivos-para-te-amar-S2

Repositório de código criado com o objetivo de homenagear o amor da minha vida **(Daniele Ribeiro <3)** pelo nosso 1° ano de namoro.
Pode parecer um pouco boiola? Sim... Porém, criativo (talvez, rs).

A homenagem consiste em listar 365 motivos para amá-la em um array (lista) e após isso, enviar todos os motivos através de um "travazap" KKKKKKKKK.

Basta copiar o código do arquivo "console-whatsapp.js" dentro do console do navegador (com o whatsapp web aberto). Após isso, como parâmetros da função de envio de mensagens, é setado o array com os motivos e o intervalo de envio entre cada mensagem.

## Exemplo de uso (copy-paste no console do navegador)

```bash
const motives = [
    'Motivo 1',
    'Motivo 2',
];

async function sendMessage(arrayMessages, interval) {
    const selectorInputText = 'P.copyable-text.selectable-text';
    const button = 'button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq'
    const InputText = document.querySelector(selectorInputText);
    for (let i = 0; i < arrayMessages.length; i++) {
        await readMessageInput(InputText, arrayMessages[i], interval);
        await clickSend(button);
    }
}

function readMessageInput(element, message, interval) {
    return new Promise((resolved, rejected) => {
        try {
            setTimeout(() => {
                element.focus();
                if (!document.execCommand('insertText', false, message)) {
                    element.value = message;
                }
                element.dispatchEvent(new Event('change', { bubbles: true }));
                resolved('resolved');
            }, interval * 1000);
        } catch (error) {
            rejected(error);
        }
    })
}

function clickSend(selectorButton) {
    return new Promise((resolved, rejected) => {
        try {
            document.querySelector(selectorButton).click();
            console.log('Message sent...');
            resolved('resolved');
        } catch (error) {
            rejected(error);
        }
    })
}

sendMessage(motives, 1);

```

## License
```bash
##### Usem a minha ideia com moderação HSUAHASUHSAU
MIT License - <jonas-elias/>
```
