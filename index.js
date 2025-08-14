 const fileManager = require('./fileManager')
 const readlineSync = require('readline-sync');
 const path = require('path');

async function main() {
    const dirPath = path.join(__dirname, 'my_files');
    
    fileManager.createDirectory(baseDir)

    while (true) {
     console.log("\nMenu:");
     console.log("1. Criar arquivo");
     console.log("2. Listar arquivos");
     console.log("3. Ler arquivo");
     console.log("4. Escrever arquivo");
     console.log("5. Deletar arquivo");
     console.log("6. Sair");     
 
        const choice = readlineSync.question("Escolha uma opção: ");
       
        try {
                   switch (choice) {
            case '1':
                const fileName = readlineSync.question("Digite o nome do arquivo: ");
                const fileContent = readlineSync.question("Digite o conteúdo do novo arquivo: "

                );
 
                const createdFilePath = path.join(baseDir, fileName);      
                const fileMessage = await fileManager.createFile(createdFilePath, fileContent)

                console.log(fileMessage);
                break;
                 case '2':
                console.log("Arquivo no dirtório:")
                break;
                 case '3':
                console.log("Conteudo do arquivo:")
                break;
                 case '4':
                console.log("Arquivo escrito com sucesso.")
                break;
                 case '5':
                console.log("Arquivo que foi deletado")
                break; case '6':
                console.log("Saindo do programa...");
                return;
            default:
                console.log("Opção inválida, tente novamente.");
        } 
          
        }
        catch (err) {
            console.log(err)
        }
       

    }
 }
 main();  


