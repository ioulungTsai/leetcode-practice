// Definition for singly-linked list.
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}

function addTwoNumbers(l1, l2) {
    const output = new ListNode();
    let current;
    let carrier = 0;
    while(l1 || l2 || carrier) {
        let value1;
        let value2;
        if(l1 === null) {
            value1 = 0;
        } else {
            value1 = l1.val;
        }
        if(l2 === null) {
            value2 = 0;
        } else {
            value2 = l2.val;
        }
        let sum = value1 + value2 + carrier;
        let node = new ListNode(sum % 10);
        if (sum >= 10) {
            carrier = 1;
        } else {
            carrier = 0;
        }
        if (output.val === undefined) {
            output.val = sum % 10;
        } else {
            current = output;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return output;
}

