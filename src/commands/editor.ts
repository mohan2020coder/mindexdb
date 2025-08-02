import * as vscode from 'vscode';
import { CommandManager } from '../CommandManager';

export function registerEditorCommands(commandManager: CommandManager) {
    commandManager.register('my-extension.uppercase', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text.toUpperCase());
            });
        }
    });

    commandManager.register('my-extension.showSelection', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            vscode.window.showInformationMessage(`Selected text: "${text}"`);
        }
    });
}