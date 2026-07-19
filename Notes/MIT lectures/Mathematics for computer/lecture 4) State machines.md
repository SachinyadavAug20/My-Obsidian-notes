## State machine
tool to thick of process over time. => keep track of state.
- Preserved predicates and invariant
- final state and termination
- application to correctness,termination,puzzles.
It consists of 
- set Q of states
- start at some state q belong to Q
- set T of allowed transitions,each of the form q->r for some q,r belong Q
example:
->0->1->2->3->4...
`->` is indicate.
Q = {1,2,3,4...}
T = {n -> n+1| i belong to naturals}
## Execution
Execution of state machines is an (in)finite sequence.
`q0->q1->q2->q3...(->qn)` where, `qi->q(i+1)` belong T.
## Reach-ability
state r belong Q is reachable, if ∃ execution `q->...->r `.
## State predicate
 ![[Pasted image 20260704223356.png]]
8 puzzle:
Claim : ![[Pasted image 20260705074657.png]]
Q = {all possible arrangements of 1,2,3,4,5,6,7,8,blank in `3X3`}
start state `q0` -> anything 
final state `qn` -> sorted by reading order
transitions T = {q->r | can get from q to r in one slide} <=4 transition for any state.
### State predicate
predicate P(q) on state state q belong Q.(function from Q to {true,false}).
#### Preserved Predicates
if for every q->r belongs T, P(q)->P(r). that is true of P is conserved along transitions.
#### Invariant 
if P(q) is true for all reachable states q.
if P(q) is invariant and P(r) is false then r is unreachable.

what to prove this P is invariant => can do using preserved.

using Invariant principle,
for a predicate P(q), if 
1. P(`q0`) is true
2. P(q) is preserved
Then, P(q) is invariant.(induction in other form).
Proof of principle:
- by induction,
- IH(n) = for all length n executions `q0`->...->`q(n-1)`->`q(n)`, `P(qn)` is true
- Base case: IH(0) execution `q0` know P(`q0`) by 1
- Assume, IH(n-1) prove IH(n)
- Consider any length, length n execution `q0`->...->`q(n-1)`->`q(n)`
- what to show P(`qn`), `q0`->...->`q(n-1)`. 
- by induction IH(n-1) P(`q(n-1)`) is true. also P(`n`) is true because P(q) is preserved.
- Thus, by induction we get for all n IH(n) -> P(q) for all reach-able state q.

### Template
Theorem: P(q) is invariant
Proof: by Invariant Principle
		1. P(`q0`) is true because \[Reason]
		2. P(`q`) is preserved => consider any q->r in T, assume P(q) prove P(r) is true.
		3. Thus, proved it is invariant.
State predicate for 8-puzzle: 
- for 1<=i<=j<=8, call {i,j} an inverted pair if j appears before i in reading order(in state g).
count number of inverted pairs.
theorem : possible to do 4 inverted pairs to 0, but 1 inverted pair to 0 not possible.
because parity;odd or even.
P(q) = {# no of inverted pairs in state g is odd}.

Theorem: P(q) is preserved.
- consider q->r belong T with P(q) is true what to prove P(r) is true
- 2 types of move
- case 1: horizontal move -> moving x horizontally no changes reading order or no. of inverted pair => so, P(r)
- case 2: vertical move ->![[Pasted image 20260712223912.png]]
	- swap i<->x is equivalent to i<->j then i<->k.it changes # inverted pairs by +-1 + +-1 = even(sum of odds) pair.Thus, P(r) is true.
	- ![[Pasted image 20260712230630.png]]
- Corollary : if P(`q0`) is true, then P(`q`) is invariant.so if P(r) is false then, `qf` is unreachable
	1. P(`q0`) is true
	2. P(`q`) is preserved(Theorem)
Hence proved odd number of inverted pair => will be not possible to sort it.

---
## Termination
example:
##### Simple sorter machine
given `a1`,`a2`,...,`an` belong to R, want to sort them in increasing order.
```cpp
while(there exist i such a[i]>a[i+1]){
	swap(a[i],a[i+1]);
}
```
![[Pasted image 20260715224400.png|338]]![[Pasted image 20260715224450.png|300]]
analyse it as state machine
- states Q => all possible ordering of `a1` to `an`.(assuming count only reachable states)
- transitions => {take `a[i]` and `a[i+1]` such `a[i]>a[i+1]` swap them}.![[Pasted image 20260715224942.png]]
- Final state : state g is final if no transition g->r belong to T.There is exactly 1 final state.
- partially correct: if machine terminates then, gives correct answer.
- state machine terminates: if no infinite execution `q0`->`q1`->..->`qn` matches final state
- this will always terminate.
Terminates 
- correct: if terminates and partially correct.
###### Derived variable
is a value X(g) belong to reals for each state q belong to Q. i.e function from Q to reals.
It is strictly decreasing: if, for each q->r belong transition T : X(q)\>X(r).
###### Termination theorem
if X(g) is a derived variable satisfying
1. X(g) belong N(naturals) for every q belong to Q.
2. X(g) is strictly decreasing
then, state machine terminates.
PROOF:
- All execution have length <=X(`q0`)

for SSS(simple sorting machine)
- P(`q`), q is natural = # inverted({i,j} where i<j but `ai`>`aj`) pairs in state q. ![[Pasted image 20260719222021.png]]
- no of inverted pair is no of dots as making ray to left side.
- for every swap -> inverted pair count decreases.
- P(q) strictly decreasing during every transition.(as per definition of transition).
- Thus terminates in finite time.
