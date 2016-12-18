import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
    allPlayers = [
        {
            name: 'Spieler 1',
            selected: true
        },
        {
            name: 'Spieler 2',
            selected: true
        },
        {
            name: 'Spieler 3',
            selected: true
        },
        {
            name: 'Spieler 4',
            selected: true
        },
        {
            name: 'Spieler A',
            selected: false
        },
        {
            name: 'Spieler B',
            selected: false
        },
        {
            name: 'Spieler C',
            selected: false
        },
        {
            name: 'Spieler D',
            selected: false
        }
    ];

    constructor() {
    }

    getAllPlayers(): Promise<any[]> {
        return Promise.resolve(this.allPlayers);
    }

    getAllSelectedPlayers(): Promise<any[]> {
        return this.getAllPlayers()
            .then(allPlayers => {
                return allPlayers.filter(player => player.selected)
            })
    }

    addPlayer(player): void {
        this.allPlayers.push(player);
        this.getAllPlayers().then(players => console.log('add', players.length))
    }

    updatePlayers(players) {
        this.allPlayers = players;
    }
}
