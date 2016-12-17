import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
    allPlayers = [
        'Spieler 1',
        'Spieler 2',
        'Spieler 3',
        'Spieler 4',
        'Spieler A',
        'Spieler B',
        'Spieler C',
        'Spieler D'
    ];

    constructor() {
    }

    getAllPlayers(): Promise<string[]> {
        return Promise.resolve(this.allPlayers);
    }

    addPlayer(player): void {
        this.allPlayers.push(player);
    }
}
