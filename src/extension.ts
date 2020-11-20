// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as decompress from "decompress";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let cmd_openTheiaUploadDlg = vscode.commands.registerCommand('extension.openTheiaUploadDlg', async (path: vscode.Uri) => {
        const uploadResult: any = await vscode.commands.executeCommand("file.upload");
        const filePath = uploadResult?.uploaded[0];
        const sourcePath = vscode.Uri.parse(filePath);
        vscode.window.showInformationMessage(`Congratulations, file.upload < ${sourcePath.fsPath} > completed!`);
        await decompress(sourcePath.fsPath, path.fsPath);
        vscode.window.showInformationMessage(`Congratulations, decompress < ${path.fsPath} > completed!`);
    });

    context.subscriptions.push(cmd_openTheiaUploadDlg);
}

// this method is called when your extension is deactivated
export function deactivate() {}
