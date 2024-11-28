export class StringCalculator {
    add(numbers: string): number {
        if ( !numbers ) return 0;

        // Split the string by comma
        const numList = numbers.split(',').map(num => parseInt(num, 10));

        // Sum the numbers and return the result
        return numList.reduce((sum, num) => sum + num, 0);
    }
}