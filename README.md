# AutoEnvio de Mensagens no WhatsApp Web

Este script permite o envio automático de mensagens no WhatsApp Web, definindo a mensagem a ser enviada e a quantidade de repetições.

---

## Pré‑requisitos

- Navegador Google Chrome (ou outro com DevTools similar)  
- Conexão ativa com a internet  
- Conta logada no WhatsApp Web

---

## Passo a passo de uso

1. **Baixar os arquivos**  
   Clone ou faça o download do repositório no GitHub para obter os arquivos:  
   - **`BibliaSagradaSendScript.js`**: muito grande, não é prático colar diretamente no GitHub.  
   - **`mensagemPersonalizada.js`**: pode ser visualizado e editado diretamente no GitHub; permite personalizar a mensagem e a quantidade de envios antes de copiar o código.

2. **Abrir em um editor de código**  
   Use um editor como VS Code, Notepad++, Sublime Text ou outro de sua preferência para abrir o arquivo baixado.

3. **Copiar o conteúdo**  
   No editor, selecione todo o conteúdo de `BibliaSagradaSendScript.js` e copie (Ctrl+C ou Cmd+C).

4. **Abrir o WhatsApp Web**  
   Acesse: https://web.whatsapp.com e faça login, caso ainda não esteja logado.

5. **Inspecionar a página**  
   - No Chrome, pressione `F12` ou `Ctrl+Shift+I` (Windows/Linux) ou `Cmd+Option+I` (Mac).  
   - Em outros navegadores, procure por **Inspecionar elemento** ou **Ferramentas do desenvolvedor**.

6. **Ir até o Console**  
   Na janela de DevTools, clique na aba **Console**.

7. **Colar e executar o script**  
   - Cole o código copiado (Ctrl+V ou Cmd+V).  
   - Pressione `Enter` para rodar.

8. **Acompanhar no Console**  
   Você verá logs do tipo `Envio 1 concluído.`, `Envio 2 concluído.`, até `Finalizado: X mensagens enviadas.`

---

## Personalização

- **mensagem**: altere, no próprio `BibliaSagradaSendScript.js`, a string que será enviada.  
- **quantidadeRepeticoes**: defina quantas vezes a mensagem deve ser enviada.  
- **intervalo entre envios**: se necessário, ajuste o tempo de espera interno no arquivo para dar mais segurança entre cada clique de envio.

---

## Avisos

- O envio em massa de mensagens pode violar os termos de uso do WhatsApp.  
- Use esta ferramenta com responsabilidade e evite spam.

---

© Gabriel Cordeiro | Abril 2025

