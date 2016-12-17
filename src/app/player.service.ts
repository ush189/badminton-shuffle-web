import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

    constructor() {
    }

    getAllPlayers(): Promise<string[]> {
        let allPlayers = [
            'Spieler 1',
            'Spieler 2'
        ];

        return Promise.resolve(allPlayers);
    }
}
