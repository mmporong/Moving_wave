import {
    Wave
} from './wave.js';

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(0,119,235,0.4)', 'rgba(0,146,199,0.4)', 'rgba(0,87,158,0.4)'];
        // this.color = ['rgba(7, 5, 41, 0.4)', 'rgba(99, 0, 51, 0.4)', 'rgba(255, 162, 93)'];

        this.waves = [];

        for(let i = 0; i < this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for(let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}