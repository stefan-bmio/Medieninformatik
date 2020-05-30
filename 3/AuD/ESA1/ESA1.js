const LINE_WIDTH = 1;
const DISC_WIDTH = 180;
const DISC_HEIGHT = 25;
const DISTANCE = 200;
const BAR_WIDTH = 20;
const BAR_LENGTH = 200;
const BAR_COLOUR = "#C0C0C0";
const DISC_COLOURS = ['steelblue', 'indianred', 'darkseagreen', 'goldenrod', 'lightblue', 'khaki'];
const DELAY = 500;

class Rekursion {
    constructor(n) {
        this.n = n;
        this.towers = [];

        for (let i = 0; i < 3; i++) {
            this.towers.push(new Tower(i + 1));
        }

        for (let i = 0; i < n; i++) {
            let disc = new Disk(i, (DISC_WIDTH - DISC_WIDTH * (1 / 4)) / n);
            disc.setX(DISTANCE);
            disc.setY(i);
            this.towers[0].discs.push(disc);
        }

        this.delays = 0;
        this.recursiveCalls = 0;
    };

    init() {
        this.redraw(this.towers);
        return this;
    }

    start() {
        this.tuermeHanoi(this.n, this.towers[0], this.towers[1], this.towers[2]);
        console.log(this.recursiveCalls + ' Aufrufe von tuermeHanoi');
    }

    tuermeHanoi(n, x, y, z) {
        this.recursiveCalls++;

        if (n === 1) {
            this.zieheScheibe(x, z);
        } else {
            this.tuermeHanoi(n - 1, x, z, y);
            this.zieheScheibe(x, z);
            this.tuermeHanoi(n - 1, y, x, z);
        }
    }

    zieheScheibe(a, b) {
        let disc = a.discs.pop();
        b.discs.push(disc);

        console.log('Ziehe Scheibe von Turm ' + a.index + ' nach Turm ' + b.index);
        this.updateDiscCoordinates(disc, b);
        let towers = JSON.parse(JSON.stringify(this.towers));
        setTimeout(() => this.redraw(towers), this.delays += DELAY);
    }

    updateDiscCoordinates(disc, tower){
        disc.setX(tower.xOffset);
        disc.setY(tower.discs.length - 1);
    }

    redraw(towers) {
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.lineJoin = 'round';
        context.lineWidth = LINE_WIDTH;
        context.fillStyle = BAR_COLOUR;

        for (let i = 1; i <= 3; i++) {
            context.fillRect(i * DISTANCE, DISTANCE, BAR_WIDTH, BAR_LENGTH);
            context.strokeRect(i * DISTANCE, DISTANCE, BAR_WIDTH, BAR_LENGTH);
        }

        for (let tower of towers) {
            for (let disc of tower.discs) {
                context.fillStyle = disc.colour;
                context.fillRect(disc.x, disc.y, disc.w, disc.h);
                context.strokeRect(disc.x, disc.y, disc.w, disc.h);
            }
        }
    }
}

class Tower {
    constructor(i) {
        this.index = i;
        this.xOffset = i * DISTANCE;
        this.discs = [];
    }
}

class Disk {
    constructor(towerDiscCount, discWidthDiff) {
        this.w = DISC_WIDTH - towerDiscCount * discWidthDiff;
        this.h = DISC_HEIGHT - LINE_WIDTH;
        this.colour = DISC_COLOURS[towerDiscCount % DISC_COLOURS.length];
    }

    setX(xTowerOffset) {
        this.x = xTowerOffset - DISC_WIDTH / 2 + BAR_WIDTH / 2 + (DISC_WIDTH - this.w) / 2;
    }

    setY(towerDiscCount) {
        this.y = DISTANCE + BAR_LENGTH - (towerDiscCount + 1) * DISC_HEIGHT + LINE_WIDTH;
    }
}