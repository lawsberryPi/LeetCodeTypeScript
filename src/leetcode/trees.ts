export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p || !q) return q === p ? true : false;
  const bfsQueuep = new Array<TreeNode | null>(p);
  const bfsQueueq = new Array<TreeNode | null>(q);
  // initialize with root
  while (bfsQueuep.length > 0 || bfsQueueq.length > 0) {
    const pDequeue = bfsQueuep.shift();
    const qDequeue = bfsQueueq.shift();
    if (pDequeue?.val !== qDequeue?.val) return false;
    if (pDequeue?.right !== (null || undefined)) {
      bfsQueuep.push(pDequeue.left);
      bfsQueuep.push(pDequeue.right);
    }
    if (qDequeue?.right !== (null || undefined)) {
      bfsQueueq.push(qDequeue.left);
      bfsQueueq.push(qDequeue.right);
    }
  }
  return true;
}

export function connect(root: TreeNode | null): TreeNode | null {
  const bfsQueuep = new Array<TreeNode | null>(root);
  let previousNode: TreeNode | null = null;
  while (bfsQueuep.length > 0) {
    const levelLength = bfsQueuep.length;
    previousNode = null;
    for (let i = 0; i < levelLength; i++) {
      const currentNode = bfsQueuep.shift();
      if (currentNode?.right && currentNode?.left) {
        currentNode.left.next = currentNode.right;
        if (previousNode?.right) previousNode.right.next = currentNode.left;
        bfsQueuep.push(currentNode.left);
        bfsQueuep.push(currentNode.right);
        previousNode = currentNode;
      }
    }
  }
  return root;
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  next: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null, next?: TreeNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}
