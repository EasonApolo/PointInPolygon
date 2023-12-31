#### 前提

多边形端点需要按顺序给出（顺时针、逆时针都可以）

#### 射线法

点[x,y]，多边形上任意边的两个端点[x1,y1], [x2,y2]。

1. 向任意方向（一般是水平向右）做一条射线，判断射线与多边形相交的次数。奇数为在内部，偶数为在外部。
2. 但会存在特殊情况，即点在边上。

#### 点在边上特判

- 点到这两点的两个斜率相等（位于延长线上）
- 点到这两点的两个向量方向相反（位于两点之间）

#### 射线与边的相交判定

- y位于y1,y2之间。y可以等于y1或y2，但不包含y1==y2。
- x在射线左侧（x小于射线与边交点[x0,y]的横坐标x0）

#### 参考

[WilliamSun0122 - CSDN博客](https://blog.csdn.net/WilliamSun0122/article/details/77994526)
