import * as vscode from 'vscode';

/**
 * @file 插件入口
 */

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "helloworld-sample" is now active!');

  const disposable = vscode.commands.registerCommand('extension.mdf', () => {
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello MDF!');
  });

  context.subscriptions.push(disposable);
}
