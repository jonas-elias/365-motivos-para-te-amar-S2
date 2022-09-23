/**
 * Method to send message with contain in arrayMessages
 * 
 * @param {array} arrayMessages 
 * @param {integer} interval
 * @return {void} 
 */
async function sendMessage(arrayMessages, interval) {
    const selectorInputText = 'P.copyable-text.selectable-text';
    const button = 'button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq'
    const InputText = document.querySelector(selectorInputText);
    for (let i = 0; i < arrayMessages.length; i++) {
        await readMessageInput(InputText, arrayMessages[i], interval);
        await clickSend(button);
    }
}

/**
 * Method to insert message in input element text of whatsapp
 * 
 * @param {HTMLElement} element 
 * @param {string} message 
 * @param {integer} interval 
 * @returns {Promise}
 */
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
            rejected(error)
        }
    })
}

/**
 * Method to click in button send (sent message...)
 * 
 * @param {string} selectorButton 
 * @returns {Promise}
 */
function clickSend(selectorButton) {
    return new Promise((resolved, rejected) => {
        try {
            document.querySelector(selectorButton).click();
            console.log('Message sent...');
            resolved('resolved');
        } catch (error) {
            rejected(error)
        }
    })
}
