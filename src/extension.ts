import * as vscode from 'vscode';
import { CommandManager } from './CommandManager';
import { registerHelloCommand } from './commands/hello';
import { registerStatusCommand } from './commands/status';
import { registerEditorCommands } from './commands/editor';

let commandManager: CommandManager;

export function activate(context: vscode.ExtensionContext) {
    commandManager = new CommandManager();

    // Register all commands
    registerHelloCommand(commandManager);
    registerStatusCommand(commandManager);
    registerEditorCommands(commandManager);

    // Add to context subscriptions
    context.subscriptions.push(commandManager);
}

export function deactivate() {
    if (commandManager) {
        commandManager.dispose();
    }
}