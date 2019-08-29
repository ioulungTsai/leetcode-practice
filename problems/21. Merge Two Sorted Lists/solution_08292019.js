
// Definition for singly-linked list.
// function ListNode(val) {
//      this.val = val;
//      this.next = null;
// }

// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}

var mergeTwoLists = function(l1, l2) {
  const output = {val: -1, next: null};
  let current = output;
  while (l1 && l2) {
      if (l1.val > l2.val) {
          current.next = l2;
          l2 = l2.next;
      } else {;
          current.next = l1;
          l1 = l1.next;
      }
      current = current.next;
  }
  current.next = l1 || l2;

  return output.next;
};

