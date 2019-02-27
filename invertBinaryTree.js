// function invertBinaryTree(tree) {
// 	if (tree.left == undefined && tree.right == undefined) {
// 		return tree;
// 	}
// 	if (tree.left && tree.right) {
// 		let left = tree.left;
// 		tree.left = tree.right; 
// 		tree.right = left;
// 		invertBinaryTree(tree.left);
// 		invertBinaryTree(tree.right);
// 	} else if (tree.left) {
// 		tree.right = tree.left;
// 		tree.left = null;
// 		invertBinaryTree(tree.right);
// 	} else if (tree.right) {
// 		tree.left = tree.right;
// 		tree.right = null;
// 		invertBinaryTree(tree.left);
// 	} 
// 	return tree;
// }

function invertBinaryTree(tree) {
    if (!tree) return;
    let left = tree.left;
    tree.left = tree.right;
    tree.right = left;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    return tree;
}