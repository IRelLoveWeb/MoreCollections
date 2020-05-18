/*
 * @Author: lyf
 * @Date: 2020-04-02 13:42:04
 * @LastEditors: lyf
 * @LastEditTime: 2020-04-24 10:57:01
 * @Description: In User Settings Edit
 * @FilePath: /iread/Users/a58/iworkspace/MoreCollections/数据结构和算法/剑指offer/面试题7.js
 */
function TreeNode(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
}

const preOrder = [1,2,4,7,3,5,6,8]
const midOrder = [4,7,2,1,5,3,8,6]

function reTree(preOrder, midOrder) {
    const rootVal = preOrder[0]
   
    const midRootIndex = midOrder.findIndex(item => item === rootVal)

    const leftPre = preOrder.slice(1, midRootIndex + 1)
    const rightPre = preOrder.slice(midRootIndex + 1)

    const leftMid = midOrder.slice(0, midRootIndex)
    const rightMid = midOrder.slice(midRootIndex + 1)

    // 递归中应该又一个终止条件, 来停止递归的执行
    const node = new TreeNode(rootVal)
    if (leftPre.length && leftMid.length) {
        node.left = reTree(leftPre, leftMid)
    }
    
    if (rightPre.length && rightPre.length) {
        node.right = reTree(rightPre, rightMid)
    }

   return node
}

console.log(reTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]))