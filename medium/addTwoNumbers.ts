/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function generateLinkedList(n: bigint): ListNode {
    let digitsArray: string[] | number[] = n.toString().split('');
    digitsArray = digitsArray.map(e => parseInt(e));
    digitsArray.reverse();
    
    let currentList = new ListNode();
    const firstNode: ListNode = currentList;
    
    for (let i = 0; i < digitsArray.length; i++) {
        currentList.val = digitsArray[i];
        
        // If it's the last iteration.
        if (i === digitsArray.length - 1) {
            currentList.next = null;
        } else {
            currentList.next = new ListNode();
            currentList = currentList.next;
        }
    }
    return firstNode;
}

function reverseDigits(linkedList: ListNode): number[] {
    let hasNext: boolean = true;
    const digitsArray: number[] = [];
    let currentList: ListNode = linkedList;
    
    while (hasNext) {
        digitsArray.push(currentList.val);
        if (currentList.next !== null) {
            currentList = currentList.next;
        } else {
            hasNext = false;
        }
    }
    return digitsArray.reverse();
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const reversedL1: number[] = reverseDigits(l1);
    const reversedL2: number[] = reverseDigits(l2);
    
    const integerOne: bigint = BigInt(reversedL1.join(''));
    const integerTwo: bigint = BigInt(reversedL2.join(''));
    
    const integerSum: bigint = integerOne + integerTwo;
    
    return generateLinkedList(integerSum);
};

// Steps:
// 1. Reverse the digits.
// 2. Concatenate the digits and turn them into an integer.
// 3. Add the two integers.
// 4. Reverse the digits of the added integer.
// 5. Create a linked list with the reversed digits.
