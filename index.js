import fileManager from "./fileManager.js";
import readlineSync from "readline-sync";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
    const baseDir = path.join(__dirname, "my_files");   // ← corrigido (era dirPath)

    // Cria a pasta se não existir
    await fileManager.createDirectory(baseDir);

    while (true) {
        console.log("\n=== Menu ===");
        console.log("1. Create file");
        console.log("2. List files");
        console.log("3. Read file");
        console.log("4. Write to file");
        console.log("5. Delete file");
        console.log("6. Exit");

        const choice = readlineSync.question("Choose an option: ");

        try {
            switch (choice) {
                case "1": {
                    const fileName = readlineSync.question("File name: ");
                    const fileContent = readlineSync.question("File content: ");

                    const filePath = path.join(baseDir, fileName);
                    const message = await fileManager.createFile(filePath, fileContent);
                    console.log(message);
                    break;
                }

                case "2":
                    console.log("Files in directory:");
                    const files = await fileManager.listFiles(baseDir);
                    console.log(files.length ? files.join("\n") : "Folder is empty.");
                    break;

                case "3": {
                    const fileName = readlineSync.question("File name to read: ");
                    const filePath = path.join(baseDir, fileName);
                    const content = await fileManager.readFile(filePath);
                    console.log("\n--- Content ---\n" + content);
                    break;
                }

                case "4": {
                    const fileName = readlineSync.question("File name to write: ");
                    const newContent = readlineSync.question("New content: ");
                    const filePath = path.join(baseDir, fileName);
                    const message = await fileManager.writeFile(filePath, newContent);
                    console.log(message);
                    break;
                }

                case "5": {
                    const fileName = readlineSync.question("File name to delete: ");
                    const filePath = path.join(baseDir, fileName);
                    const message = await fileManager.deleteFile(filePath);
                    console.log(message);
                    break;
                }

                case "6":
                    console.log("Exiting the program...");
                    return;

                default:
                    console.log("Invalid option, try again.");
            }
        } catch (err) {
            console.error("Error:", err.message);
        }
    }
}

main();