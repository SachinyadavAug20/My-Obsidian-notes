![[Pasted image 20260802205514.png]]
maximum distance away from the tab can we go by n block if length of each block is 1. =![[Pasted image 20260802205907.png]]
There is no closed form for this sum called `Harmonic number`.
lets approximate the sum => integral method -> ![[Pasted image 20260802210741.png]]
rule for weakly deceasing function=> ![[Pasted image 20260802210902.png]]
for increasing function it is same but f(n) and f(1) switch places.
![[Pasted image 20260802213202.png]]
thus ![[Pasted image 20260802213316.png]]
for reaching distance ![[Pasted image 20260802215123.png]]
n = e^20 = 400 billion blocks.-> 40 distance to moon.
## Asymptotic
~ -> symbol for asymptotic notation
![[Pasted image 20260802220425.png]]
for harmonic notation -> ![[Pasted image 20260802220557.png]]
This is sandwich theorem
For n-> infinite ==> ![[Pasted image 20260802220906.png]]
## Products
it can be analysed as sum.
turn into sums -> using log
![[Pasted image 20260804220603.png]]
log x -> increasing function can use increasing bound.
![[Pasted image 20260804220658.png]]
![[Pasted image 20260804224744.png]]
![[Pasted image 20260804224823.png]]
Both factor are off by n.
is this say ![[Pasted image 20260805212352.png]] is n! not asymptotic as n -> infinity.
need to have more tight bounds.
## Stirling approximation
![[Pasted image 20260805214901.png]] -> it is good in a limit.
also have better bounds ![[Pasted image 20260805220309.png]]
### Swap sort
no of swaps = no of inverted pairs.
in worst case -> no of inverted pairs = (n-1) + (n-2) + ... + 1
![[Pasted image 20260805220959.png]]
### Merge sort
m(n) = `nlogn-n+1`.![[Pasted image 20260805221136.png]]
### Conclusion
Now between this 2 algorithm which is better.![[Pasted image 20260808220122.png]]
when n-> infinite, thus no need to care of constant.
![[Pasted image 20260808231650.png]]
as frequency = 2.4Hz ![[Pasted image 20260808233526.png]]
- ignore constant factors
- ignore small n
- ignore lower order terms.
Define of Big-O: ![[Pasted image 20260808234123.png]],![[Pasted image 20260808234346.png]]
as not carring about unit.
## Big O notation
Idea: f(n)<=O(g(n)) when, "f(n)<=g(n)".
- Ignore constant feators.
- Ignore small n, also ignoring lower order term.
 Finally, defination![[Pasted image 20260809214824.png]]
 examples -> ![[Pasted image 20260809220419.png]]
f(n)=n^2 | g(n)=n.![[Pasted image 20260809220919.png]]
![[Pasted image 20260809223317.png]]
![[Pasted image 20260809223541.png]]
## Big-O
![[Pasted image 20260813225213.png]]
example : ![[Pasted image 20260813225232.png]], ![[Pasted image 20260813225441.png]],
![[Pasted image 20260813225610.png]]
notation for Big-O notation -> ![[Pasted image 20260813225927.png]]
## Big-Omega
![[Pasted image 20260814230935.png]] -> 
