function isEven(n) {
    return ((n % 2) === 0);
}

// O(n)
function lengthOfLongestSubstring(s: string): number {
    let letters = s.split("");
    let substrings = [[]];
    function returnLongest(array: any[][]) {
        if (array[0].length > array[1].length) {
            array.pop();
            return array;
        }
        array.shift();
        return array;
    }

    /** 
    *   Function that loops through the input while creating an array of
    *   characters for each substring without repeating letters.
    **/
    function loopThroughSentence() {

        for (let i = 0; i < letters.length; i++) {
            const currentLetter = letters[i];
            // If the current letter already exists in the current substring,
            // create a new substring array.
            const indexOfCurrentLetterInSubstrings = 
                substrings[substrings.length - 1].indexOf(currentLetter);

            if (indexOfCurrentLetterInSubstrings !== -1) {
                if (substrings.length === 2) {
                    substrings = returnLongest(substrings);
                }
                substrings.push([]);
                letters = letters.slice(indexOfCurrentLetterInSubstrings + 1);
                i = -1;
            } else {
                substrings[substrings.length - 1].push(currentLetter);
            }
        }
    }
    loopThroughSentence();
    if (substrings.length === 2) {
        substrings = returnLongest(substrings);
    }
        
    return substrings[0].length;
};
