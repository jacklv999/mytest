## 广度优先（BFS）

#### 最简单的递归版本

```python
def levelOrder(self, root: TreeNode) -> List[List[int]]:
    res = []
    def BFS(root,i):
        if root==None:
            return
        if len(res)==i:
            res.append([])
        res[i].append(root.val)
        BFS(root.left,i+1)
        BFS(root.right,i+1)

    BFS(root,0)
    return res
```

#### 非递归版本

构建双端队列 `[]`, 然后步骤如下：

- 1、root进入队列 `[root]`;
- 2、append root的子节点，同时删除 root；
  - `[root.left, root.right]` 
- 3、删除 root.left，append 其子节点
  - `[root.right,root.left.left,root.left.right]` 
- 4、删除 root.right，append 其子节点
  - `[root.left.left,root.left.right, root.right.left,root.right.right,]`  
- 5、然后不断重复

```python
def levelOrder(self, root):
    if not root:
        return []
    stack = [[root, 0]]
    res = []
    while stack:
        [cur_node, cur_dep] = stack[0]
        del stack[0]
        if cur_dep >= len(res):
            res.append([])
        res[cur_dep].append(cur_node.val)
        if cur_node.left:
            stack.append(
                [cur_node.left, cur_dep + 1]
            )
        if cur_node.right:
            stack.append(
                [cur_node.right, cur_dep + 1]
            )

    return res
```

#### 常见Leetcode题

##### 锯齿层序遍历

使用Z字型的方式遍历二叉树，即先使用BFS遍历，然后对奇数层做倒序。

```python
def zigzagLevelOrder(self, root) :
    if not root:
        return []
    stack = [[root, 0]]
    res = []
    while stack:
        [cur_node, cur_dep] = stack[0]
        if cur_dep >= len(res):
            res.append([])
        res[cur_dep].append(cur_node.val)
        del stack[0]
        if cur_node.left:
            stack.append([cur_node.left, cur_dep + 1])
        if cur_node.right:
            stack.append([cur_node.right, cur_dep + 1])

    for x in res:
            if res.index(x)%2 == 1:
                res[res.index(x)] = x[::-1]
                
    return res
```

##### 二叉树的右视图

使用BFS遍历二叉树，然后对每一数组，仅保留最右边的元素

```python
def rightSideView(self, root):
    res = []
    def BFS(root, index):
        if not root:
            return []
        if len(res) == index:
            res.append([])
        res[index].append(root.val)
        BFS(root.left, index+1)
        BFS(root.right, index + 1)
        
    BFS(root, 0)
    res_new = []
    for x in res:
        res_new.append(x.pop())
    return res_new
```





