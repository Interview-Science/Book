---
sidebar_position: 30
---

# BFS

### 什么是 BFS
BFS（广度优先遍历）是一种沿着宽度扩展的图搜索算法，常用于最短路径或者最优路径搜索，一个关键特点是算法在发现了与源节点 S 距离为 K 的所有节点后，才会发现与源节点 S 距离为 K + 1 的节点。

### 课前练习
尝试先完成以下课前练习，并且阅读官方题解：

- [690 员工的重要性](https://leetcode-cn.com/problems/employee-importance/)
- [279 完全平方数](https://leetcode-cn.com/problems/perfect-squares/)
- [130 被围绕的区域](https://leetcode-cn.com/problems/surrounded-regions/)
- [787 K 站中转内最便宜的航班](https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/)

### 什么时候使用 BFS
一般来说，二叉树的图的题目可以通过 BFS, DFS 来解，具体使用哪种算法根据实际情况选择。

### 选择 BFS 还是 DFS ：

#### 时间复杂度对比

请先浏览 https://stackoverflow.com/a/3332994，简单来说，BFS 更适合只需要搜索部分图，例如寻找最优或者最短路径，或者当你知道结果离源节点不会很远的情况。相反，DFS 则适合在搜索整个图的情况，而且由于 DFS 可以用递归来实现，所以实现起来更加简单。而且有的情况下，通过变换以及记忆化能够转变成动态规划，效率更高。

#### 空间复杂度对比

如果选择了不合适的算法，那么两者都有可能使用过多的空间，例如在最短路径的题目中使用 DFS，那么可能会因为递归嵌套过深而导致栈溢出。如果在一些边特别多的情况使用 BFS，那么可能会在队列中存储大量的节点。

#### 两种解法都可以的情况
- [130. 被围绕的区域](https://leetcode-cn.com/problems/surrounded-regions/)
- [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)

这两题使用 BFS 与 DFS 并没有太明显的区别，因为两种方法都需要搜索整个图一遍

#### 适用 BFS 的情况
- [279 完全平方数](https://leetcode-cn.com/problems/perfect-squares/)
- [787. K 站中转内最便宜的航班](https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/)

当你需要搜索的是最少数量或最优的路径，并不需要搜索整个图的时候，BFS 效率更高。

#### 适用 DFS 的情况
- [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
- [46. 全排列](https://leetcode-cn.com/problems/permutations/)

当你需要搜索整个图才能得到结果的时候，有的时候 BFS 需要更大的空间，例如 104 中 BFS 的空间复杂度为 O(N) ，而 DFS 为 O(height)，46 中 BFS 的空间复杂度为 O(N!) 而 DFS 为 O(N)

### 解题模式

#### 图的表示方式
请自行学习如何使用邻接链表以及邻接矩阵表示图以及它们的优缺点

#### BFS 模版

你需要学习 BFS 的基础模版，模版 1 和模版 2 并没有本质的区别，模版 2 使用额外的变量来记录当前遍历的层级 level，模版 1 也可以通过在队列中记录额外的信息达到此效果。为了方便理解，以下为伪代码，每行都附上注释：

	// 模版 1
	BFS(graph, source)
	// 新建队列
	queue = Queue()
	// 将源节点添加到队列
	EnQueue(queue, source)
	// 当队列不为空的时候
	while queue is not empty
	// 从队列取出首个节点
		node = DeQueue(queue)
		// 遍历与其相邻的所有节点 v
		for each v ∈ graph[node]
		// 如果 v 满足题目要求
			if valid(v)
			// 将 v 添加到队列
				EnQueue(queue, v)

	// 模版 2
	BFS(graph, source)
	// 新建队列
	queue = Queue()
	// 将源节点添加到队列
	EnQueue(queue, source)
	// 记录当前遍历的层数
	level = 0
	// 当队列不为空的时候
	while queue is not empty
		// 建立新队列存放下一层的合法元素
		next_queue = Queue()
		// 获得旧队列的长度
		length = queue.length
		// 遍历旧队列
		for i = 0 to length
		// 从队列取出首个节点
			node = DeQueue(queue)
			// 遍历与其相邻的所有节点 v
			for each v ∈ graph[node]
			// 如果 v 满足题目要求
				if valid(v)
				// 将 v 添加到新队列
					EnQueue(next_queue, v)
                 // 使用新队列替代旧队列
                 queue = next_queue
                 // 更新层数
				 level += 1

### 时间复杂度

有两种技巧可以帮助学习计算 BFS 的时间复杂度，方便你更好地理解程序的运行方式

#### 递归树
学习之前我们用快速排序来举例，假设我们要将 N = [6,3,2,9,8] 进行归并排序，此问题我们用  T(N) 来表示，根据归并排序的特点，我们遍历数组将其划分成两个子问题，每个子问题包含一半的元素，也就是：

$$
T(N) = 2 * T( \frac{1}{2}N ) + O(N)
$$

其中 T((1/2)N) 代表包含一半数组长度的子问题，O(N) 表示遍历需要的时间。我们可以通过此公式画出一棵递归树，左边是每一层的问题，右边是每层所花的时间

![recursion-tree](https://cdn.jsdelivr.net/gh/Interview-Science/Book/static/img/algorithm/recursion-tree.svg)

我们可以观察到，每一层（包括最后一层）所需要的时间都是 O(N)，由于数组每次减少一半，所以一共有 LogN 层，总的时间复杂度是 O(N * LogN)。回到 279 完全平方数 这题，如何使用递归树来计算时间复杂度呢？我们再次假设问题为 T(N)，可以得到公式：

$$
T(N) = \sqrt{N} * T(\sqrt{N}) + O(\sqrt{N})
$$

同样画出递归树之后，每一层所花的时间分别是

$$
第一层：\sqrt{N}, 第二层： \sqrt{N} *  \sqrt{\sqrt{N}} , 第三层：\sqrt{N} * \sqrt{\sqrt{N}} *  \sqrt{\sqrt{\sqrt{N}}}  
$$

加起来并且通过简单简化后，我们可以推测时间复杂度上界为 

$$
O(N * \sqrt{N}) 
$$

#### 聚合分析
除了递归树，我们也可以使用聚合分析的方式来计算时间复杂度，也就是忽略单独的节点，从全局的角度来计算总的时间。 787 K 站中转内最便宜的航班 中，我们可以观察到时间复杂度包含两个部分：

1. 队列的总入队以及出队时间，也就是队列元素的数量 O(S)
2. 对于队列中每个元素的处理时间 O(V)

总的时间复杂度等于 O(S) \* O(V)。

#### 找到队列元素的数量
对于 1，我们先观察队列里面总共有多少种不同的 (node, stop) 元素（我们使用哈希集合记录了 (node, stop) ，通过这样的剪枝，相同的元素组合会被跳过。），根据题意，由于每个节点最多可以与 K 个数字进行组合，可能的组合数量为 n * K，例如例子

    n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]] src = 0, dst = 2, k = 1

中，可能合法的(node, stop)节点组合是

    [0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1]

由于 src = 0，dst = 2，所以 [1, 0] 与 [2, 0], [2, 1] 不是合法的组合。但是不影响总体数量。

#### 每个元素的处理时间
每个元素从队列取出后会遍历与其连接的节点，最多会有 n - 1 个，所以最终的时间复杂度为两者相乘

$$
O(N^{2} * K) 
$$
