sums are for algorithmic analysis.
example:
1. Lottery price comes in installments --> in years, does both option have same value
	1. have 1 million dollar now.
		1. buying power now(and invest it)
	2. have `50K` every month for next 20 years.
This is how loans work -> annuity
## Annuity
assume interest rate p = 5.33%
$m every year for n years.
$1 -> after 1 year $(1+p) -> after 2 year $(1+p)^2 
- -> as 1+p+(1+p)\*p=p^2 +2\*p+1
after k years $(1+p)\^k
- conversely after 1 year worth =1/(1+p)
![[Pasted image 20260723221255.png]]
total value after n years
let x=1/(1+p) then, sum = ![[Pasted image 20260723221807.png|278]]
 which is m*(1-x^n)/(1-x)
 proof by induction -> guess and check method
### Perturbation method
change series and do operations on it then will be able to evaluate the solution.
 ![[Pasted image 20260723224205.png|394]] ![[Pasted image 20260723224357.png|297]]
![[Pasted image 20260723224605.png]]-> it is less than 1 million.
if get m=$1 n=forever it will be $20.
similarly annuity still exist.
## Ansatz methods
It is also called as educated guess method.
![[Pasted image 20260724221939.png]]It looks kind of integral
it should be some sort of cubic => add of square.
Guess ![[Pasted image 20260724222430.png]]
![[Pasted image 20260724222629.png]]![[Pasted image 20260724222708.png]]
refine the guess => as coefficient are unknowns.![[Pasted image 20260724222828.png]]
for n=0 --> thus, d=0
for n=1 --> thus, a+b+c=1 ![[Pasted image 20260724223513.png]]
can solve 4 equation and 4 variable =>
thus, ![[Pasted image 20260724223614.png]]
now we have equation![[Pasted image 20260724223725.png]] --> now need to prove it by induction
if unable to proof it --> then need to make some other educated guess(based on what broke previously).
### Double sum
It is sum of sums
example ![[Pasted image 20260724232009.png]]-> evaluate inner to outer sum.
![[Pasted image 20260724232320.png]]
can evaluate it ==> 