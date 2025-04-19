async function enviarScript(scriptText){
    const main = document.querySelector("#main"),
          textarea = main.querySelector(`div[contenteditable="true"]`);

    if (!textarea) throw new Error("Não há uma conversa aberta");

    console.log("Enviando mensagem: ", scriptText);

    textarea.focus();
    document.execCommand('insertText', false, scriptText);
    textarea.dispatchEvent(new Event('change', {bubbles: true}));

    setTimeout(() => {
        // Clique no botão de envio
        (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
    }, 100);

    // Aguardar o envio antes de continuar
    await new Promise(resolve => setTimeout(resolve, 500));

    return 1; // Sempre envia 1 mensagem por vez
}

// Escolha a sua mensagem 
let mensagem = "Bla";  

// Escolha a quantidade de repetições
// Lembresse "Com grandes poderes vêm grandes responsabilidades"
let quantidadeRepeticoes = 3;

async function enviarComRepeticoes(){
    let mensagensEnviadas = 0;


    for (let i = 1; i <= quantidadeRepeticoes; i++) {
        const envio = await enviarScript(mensagem);
        mensagensEnviadas += envio;
        console.log(`Envio ${i} concluído.`);
    }

    console.log(`Código finalizado, ${mensagensEnviadas} mensagens enviadas.`);
}

enviarComRepeticoes().catch(console.error);
