export class StringCalculator {
    add(numbers: string): number {
        if ( !numbers ) return 0;

        // Split the string by comma, and map the strings to numbers
        const numList = numbers
            .split(',')
            .map(num => num.trim())   // Trim any whitespace around the numbers
            .filter(num => num)       // Filter out any empty strings from trailing commas
            .map(num => parseInt(num, 10)); // Convert to integers

        // Sum the numbers and return the result
        return numList.reduce((sum, num) => sum + num, 0);
    }
}