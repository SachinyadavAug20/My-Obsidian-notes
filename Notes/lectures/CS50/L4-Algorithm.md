###### We make step by step procedures to solve a problem then analyse the solution by using algorithm analysis
###### ![[Pasted image 20260213195751.png]] ![[Pasted image 20260213195859.png]]
###### Computers can do 1 thing at a time we have a birds eye view of the entire thing to search
###### ![[Pasted image 20260213200304.png]] we have searching algorithm everywhere 
![[Pasted image 20260213200750.png]]
###### ![[Pasted image 20260213201016.png]]![[Pasted image 20260213210812.png]]![[Pasted image 20260213203901.png]]
## Big O notation
###### As n is sufficiently large so there is no meaning in putting the other term of lower degree![[Pasted image 20260213204719.png]]![[Pasted image 20260213204814.png]]
###### O =>![[Pasted image 20260213205131.png]] it describes the upper bound of worst case
## Omega Ω
###### Big O was upper bound. Ω is lower bound that is best case complexity ![[Pasted image 20260213205628.png]]
###### Linear search => Ω(1) best case is found in 1st position 
###### Binary search => Ω(1) best case found in middle only
###### This analysis helps in knowing how good or bad a algorithm is.
## Big θ
###### It is the average case complexity.Average of the big O and big Ω ![[Pasted image 20260213210123.png]]
###### If the upper and lower bound is same the big θ is defined.example counting number of people in a room best case n and worst case n ==>O(n)=Ω(n)=θ(n)
###### In string comparison won't compare for all character by user ' == ' compare string by a string.h function strcpm(str\[i\],s);
![[Pasted image 20260213213755.png]]
###### Error :  ![[Pasted image 20260213214213.png]] because 6 items and 7 iteration
###### This is exit code helps in programmer to know by checking which exit code is given
###### Make a phone book implementation using 2 arrays ![[Pasted image 20260213215830.png]] This is bad design 
###### Implement new type of data structure
## Invent new data type
###### Make new data types :- Make a datatype which has 2 properties name and number called person ![[Pasted image 20260213220653.png]]
###### ![[Pasted image 20260213220849.png]] ![[Pasted image 20260213221143.png]] C is not OPPs
## Sorting
###### Sorting should be fast so it is good design to do binary search
###### ![[Pasted image 20260213222001.png]]
### Selection sort
###### Make notes of smallest number in the list and swap 1st number with the smallest
###### Then seeing from 2nd till last and swap smallest with 2nd position and so on till reach the (n-1) element ![[Pasted image 20260215192749.png]] => it is O((n-1)+(n-2)+(n-3)+(n-4)...+1) = O((n-1+1)(n-1)/2)=> O(n(n-1)/2)  => O(n^2) quadratic complexity
=> best case already sorted => Ω(n-1+n-2+n-3)=>Ω(n^2) => Θ(n^2)
## Bubble sort
###### Take 2 at a time and swap them => as we do it repeat it n-2 times small number will bubble at 1st position
###### Doing it n-2 times as taking swap between 2 so 1st -> 2 used and then last -> 2 used 
###### ![[Pasted image 20260215202957.png]]
###### This is worst case all need to bubble up  doing (n-1) things (n-1) times=> O((n-1)(n-1)) => O(n^2) => best case is same Ω(n^2) => therefore Θ(n^2)
###### can improve code to optimize for the best case => ![[Pasted image 20260215203741.png]] => Ω(n-1) => makes bubble sort better if the data is mostly sorted due to the short quit logic
## Recursion
###### when a function is expressed in terms of itself it is called as recursion
###### ![[Pasted image 20260215205519.png]] => is not infinite recursion as have  base condition => exit condition
###### ![[Pasted image 20260215213231.png]]
###### recursion example ![[Pasted image 20260215214313.png]] has recursive decreasing order till reach 0
###### pyramids(4)=4 + pyramids(3) = 4 + 3 + pyramids(2) = 4 + 3 + 2 + pyramids(1) = 4 + 3 +2 +1
###### Define thing in terms of itself => ![[Pasted image 20260215215150.png]]  can lead to stack overflow 
###### Keep restarting procrastinating the draw function ![[Pasted image 20260215220049.png]]
###### ![[Pasted image 20260215220307.png]]  => meme by google
## Merge sort
###### Can speed up by reducing the no of calculations ![[Pasted image 20260215222015.png]]
###### Merge sorting the halves means merging the sorted halves in such a way that the merged is sorted ![[Pasted image 20260215221255.png]] ![[Pasted image 20260215221437.png]] ![[Pasted image 20260215221544.png]] ...![[Pasted image 20260215221634.png]] ![[Pasted image 20260215221833.png]] ![[Pasted image 20260215222128.png]]
###### Key detail is always moving ahead no going back but need more memory => keep sorting the left half till it is only one element which is already sorted(list of size 1 is sorted) =>merging all this actually does the main part of sorting => divide and conquer the problem
###### ![[Pasted image 20260215222936.png]] => divide log n time=> touch every element once => O(n*logn) lower bound Ω(n*logn) => Θ(n*logn)
###### But it need more space so it is trade off between space and time ![[Pasted image 20260215223250.png]]
###### As now a days space is cheap
![[Pasted image 20260215223355.png]] ![[Pasted image 20260215223418.png]] ![[Pasted image 20260215223449.png]] ![[Pasted image 20260215223522.png]] ![[Pasted image 20260215223538.png]] ![[Pasted image 20260215223602.png]]
