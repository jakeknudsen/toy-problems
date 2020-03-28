/*
 *
 * Linked List Intersection
 *
 * Write a function linkedListIntersection that returns the node
 * at which the intersection of two linked lists begins,
 * or null if there is no such intersection.
 *
 * Example:
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return D
 * as the node of intersection.
 *
 *    A → B → C
 *             ↘
 *               D → E → F
 *             ↗
 *        X → Y
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return NULL
 * as there is no point of intersection.
 *
 *    A → B → C → D
 *    X → Y → Z
 *
 */

// Helper function (do not edit)
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

function linkedListIntersection(list1, list2) {
  let obj = {};

  while (list1.next) {
    obj[list1.value] = list1.next.value;
    list1 = list1.next;
    if (!list1.next) {
      obj[list1.value] = null;
    }
  }

  while (list2.next) {
    if (obj[list2.value] === list2.next.value) {
      return list2.next.value;
    }
    list2 = list2.next;
    if (!list2.next) {
      if (obj[list2.value] === list2.next.value) {
        return list2;
      }
    }
  }
  return null;
}
