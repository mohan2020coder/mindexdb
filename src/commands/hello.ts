import * as vscode from 'vscode';
import { CommandManager } from '../CommandManager';

export function registerHelloCommand(commandManager: CommandManager) {
    commandManager.register('my-extension.hello', () => {
        vscode.window.showInformationMessage('Hello from My Extension!');
    });
}