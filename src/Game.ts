export class Game {

    private static _instance: Game;
    private _words: string[] = [];

    private constructor() {
        console.log('Ready!');
        this.loadWords();
    }

    public static instance(): Game {
        if (this._instance === undefined) {
            this._instance = new Game();
        }
        return this._instance;
    }

    private loadWords(): void {

        if (this._words.length > 0) {
            return;
        }

        const client = new XMLHttpRequest();
        client.open('GET', '/assets/5-letter-words.txt');
        client.send();

        client.onreadystatechange = (e) => {
            if(client.readyState === XMLHttpRequest.DONE) {
                if (client.responseText.length > 0) {
                    this._words = client.responseText.split(/\r?\n/);
                }
            }
        }
    }
}
