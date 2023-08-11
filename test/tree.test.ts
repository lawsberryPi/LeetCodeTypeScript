import { TreeNode, connect, isSameTree } from "../src/leetcode/trees";

describe("Tree type practice", () => {
  test("isSameTree", () => {
    const p = new TreeNode(1, new TreeNode(2));
    const q = new TreeNode(1, null, new TreeNode(2));
    const isSame = isSameTree(p, q);
    expect(isSame).toBeFalsy();
  });

  test("connect", () => {
    const p = new TreeNode(
      -1,
      new TreeNode(
        0,
        new TreeNode(2, new TreeNode(6), new TreeNode(7)),
        new TreeNode(3, new TreeNode(8), new TreeNode(9))
      ),
      new TreeNode(
        1,
        new TreeNode(4, new TreeNode(10), new TreeNode(11)),
        new TreeNode(5, new TreeNode(12), new TreeNode(13))
      )
    );
    const isSame = connect(p);
  });

  test("connect", () => {
    const p = new TreeNode(
      0,
      new TreeNode(
        1,
        new TreeNode(4),
        new TreeNode(5)
      ),
      new TreeNode(
        2,
        new TreeNode(6),
        new TreeNode(7)
      )
    );
    const isSame = connect(p);
    expect(isSame).toBeFalsy();
  });
});
