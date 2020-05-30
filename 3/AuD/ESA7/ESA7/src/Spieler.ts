export class Spieler {
    constructor(private name: string, private points: number) {

    }

    public equals(other: any): boolean {
        if (!(other instanceof Spieler)) {
            return false;
        }

        let spieler: Spieler = other;
        return this.name === other.name && this.points === other.points;
    }

    /**
     * Implementation like in Java (Javadoc) for easy comparison of the results.
     *
     * @returns {number} the computed hash code of this Spieler object
     */
    public hashCode(): number {
        let hash = this.points;
        for (let i: number = 0; i < this.name.length; i++) {
            hash *= 31;
            hash += this.name.charCodeAt(i);
        }
        return hash;
    }
}