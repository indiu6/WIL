class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    invertTree(root: TreeNode | null): TreeNode | null {
        if (root === null) {
            return null; // 트리가 비어 있는 경우
        }

        // 왼쪽과 오른쪽 서브트리를 뒤집기
        const left = this.invertTree(root.left);
        const right = this.invertTree(root.right);

        // 왼쪽과 오른쪽 자식 교환
        root.left = right;
        root.right = left;

        return root; // 루트를 반환
    }
}

// 예제 사용
const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
const solution = new Solution();
console.log(solution.invertTree(root));
