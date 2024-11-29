export class StringCalculator {
    add(numbers: string): number {
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

        let sum = 0;                 // Variable to accumulate the sum of numbers
        let currentNumber = '';      // String to accumulate characters for the current number
        const negatives: number[] = [];  // Array to keep track of any negative numbers

        // Loop through each character in the input string
        for (let i = 0; i < numbers.length; i++) {
            const char = numbers[i];

            // Check if the current character matches any of the delimiters
            if (char.match(delimiter)) {
                if (currentNumber) {
                    const num = parseInt(currentNumber.trim(), 10);
                    if (num < 0) {
                        negatives.push(num); // Track negative numbers
                    }
                    sum += num;
                    currentNumber = '';  // Reset currentNumber for the next number
                }
            } else {
                // Accumulate characters to form the current number
                currentNumber += char;
            }
        }

        // After the loop, handle the last number (if there's any left)
        if (currentNumber) {
            const num = parseInt(currentNumber.trim(), 10);
            if (num < 0) {
                negatives.push(num); // Track negative numbers
            }
            sum += num;
        }

        // If there are any negative numbers, throw an exception with the list of negatives
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }

        // Return the final sum of all numbers
        return sum;
    }
}