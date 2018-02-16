export class Truck {
    id: number;
    brand: string;
    chassis: string;
    engine: string;
    model: string;
    description: string;
    year: number;
    type: string;

    public getDescription() {
        return this.description;
    }
}