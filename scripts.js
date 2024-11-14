async function enviarScript(scriptText) {
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);
    
    if (!textarea) throw new Error("Não há uma conversa aberta");
    
    for (const line of lines) {
        console.log(line);  // Imprime o conteúdo da linha (no caso será o valor de msng)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));
    
        await new Promise(resolve => {
            setTimeout(() => {
                (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
                resolve(); // Resolve a promessa após clicar no botão de envio
            }, 100);
        });
        
        if (lines.indexOf(line) !== lines.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 250));
        }
    }
    
    return lines.length;
}

// Deixa sa mensagem aqui
const msng = "Deixe aqui sua mensagem";

// Gera as mensagens a serem enviadas com o loop `for`
// O length determina quantas vezes ele ira mandar a mensagem
// Com grandes Poderes vem Grandes Responsabilidades
const mensagens = Array.from({ length: 30000 }, () => msng).join("\n");

// Chama a função com as mensagens geradas pelo loop
enviarScript(mensagens)
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);
