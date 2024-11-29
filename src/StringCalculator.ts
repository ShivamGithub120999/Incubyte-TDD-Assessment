export class StringCalculator {
    add(numbers: string): number {
        // If the input is an empty string, return 0
        if (!numbers) {
            return 0;
        }

        let delimiter = /,|\n/; // Default delimiters: comma and newline

        // Check for custom delimiter
        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
            delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
            numbers = numbers.substring(delimiterEndIndex + 1); // Remove delimiter line from the numbers string
        }

        let sum = 0;               // Variable to accumulate the sum of numbers
        let currentNumber = '';    // String to accumulate characters for the current number

        // Loop through each character in the input string
        for (let i = 0; i < numbers.length; i++) {
            const char = numbers[i];

            // Check if the current character matches any of the delimiters
            if (char.match(delimiter)) {
                if (currentNumber) {
                    // Convert the accumulated string to an integer, trim whitespace, and add to the sum
                    sum += parseInt(currentNumber.trim(), 10);
                    currentNumber = '';  // Reset currentNumber for the next number
                }
            } else {
                // Accumulate characters to form the current number
                currentNumber += char;
            }
        }

        // After the loop, handle the last number (if there's any left)
        if (currentNumber) {
            sum += parseInt(currentNumber.trim(), 10);
        }

        // Return the final sum of all numbers
        return sum;
    }
}