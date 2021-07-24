// Definition for singly-linked list.

//param rootNodeA : head node of linked list
//param rootNodeB : head node of linked list
//return the head node in the linked list
function addTwoNumbers(
  rootNodeA: LinkNode<number>,
  rootNodeB: LinkNode<number>
) {
  let head: LinkNode<number> | null = null; 
  let result: LinkNode<number> | null = null;
  let node: LinkNode<number> | null = null;
  let currentA: LinkNode<number> | null = rootNodeA;
  let currentB: LinkNode<number> | null = rootNodeB;
  let carry = 0;
  while (currentA || currentB) {
    let sum = 0;
    if (currentA && currentA.value > -1 && currentB && currentB.value > -1) {
    sum = currentA.value + currentB.value + carry;
      if (sum > 9) {
        [carry, sum] = getCarryAndSum(sum);
      } else {
        carry = 0;
      }
      currentA = currentA.next;
      currentB = currentB.next;
    } else if (currentA && currentA.value > -1) {
      sum = currentA.value + carry;
      if (sum > 9) {
        [carry, sum] = getCarryAndSum(sum);
      } else {
        carry = 0;
      }
      currentA = currentA.next;
    } else if (currentB && currentB.value > -1) {
       sum = currentB.value + carry;
      if (sum > 9) {
        [carry, sum] = getCarryAndSum(sum);
      } else {
        carry = 0;
      }
      currentB = currentB.next;
    }

    node = new LinkNode(sum);

    if(result) {
        result.next = node;
        result = result.next;
    } else {
        head = result = node;
    }
  }
  if (carry > 0 && result) {
    result.next = new LinkNode(carry);
  }
  return head;
}

function getCarryAndSum(num: number): [number, number] {
  const [carry, sum] = num.toString();
  return [parseInt(carry, 10), parseInt(sum, 10)];
}
