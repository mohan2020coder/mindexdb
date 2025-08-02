import * as vscode from 'vscode';

type CommandCallback = (...args: any[]) => any;

export class CommandManager {
    private readonly _commands = new Map<string, vscode.Disposable>();

    public dispose() {
        for (const registration of this._commands.values()) {
            registration.dispose();
        }
        this._commands.clear();
    }

    public register<T extends CommandCallback>(
        command: string, 
        callback: T, 
        thisArg?: any
    ): vscode.Disposable {
        const disposable = vscode.commands.registerCommand(command, callback, thisArg);
        this._commands.set(command, disposable);
        return disposable;
    }
}