export class StringCalculator {
    add(numbers: string): number {
        if ( !numbers ) return 0;

        return 0;
        // Handle the single number case
        return parseInt(numbers, 10);
    }
}