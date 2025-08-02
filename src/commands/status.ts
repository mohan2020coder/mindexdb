import * as vscode from 'vscode';
import { CommandManager } from '../CommandManager';

export function registerStatusCommand(commandManager: CommandManager) {
    // Create status bar item
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = '$(smiley) Click me';
    statusBarItem.command = 'my-extension.statusClick';
    statusBarItem.show();

    // Register click command
    commandManager.register('my-extension.statusClick', () => {
        vscode.window.showInformationMessage('Status bar item clicked!');
    });
}