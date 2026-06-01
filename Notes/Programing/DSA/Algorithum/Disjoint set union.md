# Use
- when need to make sets of something by combining thing ==> Mostly used in group related question => it is DS
- it has 3 function
	- `make(node x)` add independent node
	- `find(node x)` give root/parent of the group
	- `union(node a,node b)` add a,b in one group(add there groups add full group)
add 1, 2, 3 -> find(1)=1, find(2)=2
```mermaid
graph TD
    1
    2
    3
    4
    
```
`union(1,2)` find(2)=1 ,find(1)=1 ,find(3)=3
```mermaid
graph TD
    1-->2
    3
    4
    
```
`union(3,4)` find(1)=find(2)=1, find(3)=find(4)=3
```mermaid
graph TD
    1-->2
    3-->4
    
```
`union(2,4)` it will not join nodes 2,4 it will join there roots
```mermaid
graph TD
    1-->2
    1-->3
    3-->4
    
```
now, find(1)=find(2)=find(3)=find(4)=1
```cpp
#include <bits/stdc++.h>
using namespace std;
#define ll long long

const int N=1e5+10;
int parent[N];
void make(int v){
    parent[v]=v;
}
int find(int v){
    if(v==parent[v])return v;
        // WAY 1: 
        // int a=parent[v];
        // while(a!=parent[v]){
        //     a=parent[v];
        // }
        // return a;
    return find(parent[v]);
}
void Union(int a,int b){
    // join root
    a=find(a); // root 1
    b=find(b); // root 1
    if(a!=b){ // if not in same tree
        parent[b]=a;
    }
}
```
#### Optimization 1 : This is union by size or rank
tree is not equally divided ==> may extent in a line(for some test case)
if not balanced --> find will be O(n) instead of O(logn)
Need to try to make the tree of minimum with 
- can add a->b or b->a is our choose ==> can balance it
- add small tree to big to spread it equally
```mermaid
graph TD
    5-->6
    5-->7
    
    1-->2
    1-->3
    3-->4
    
    
```

```mermaid
graph TD
    1-->2
    1-->3
    3-->4
    
    1-->5
    5-->6
    5-->7
    

```

```mermaid
graph TD
    1-->2
    1-->3
    3-->4
    
    5-->1
    5-->6
    5-->7
```
- use union operation based on size(no of nodes)/rank(depth) ==> same time complexity
#### Optimization 2 : path compression
