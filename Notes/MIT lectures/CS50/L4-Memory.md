###### Images are the RGB value of all pixels on the screen so we can zoom and see this ![[Pasted image 20260219231052.png]] There is a finite limit to how clear a image can be( as there is finite memory available)
## Bit map
###### It is a type of image, if 1=white and 0=black
###### ![[Pasted image 20260219231824.png]]
###### on cs50.ly/art make a spread sheet of pixel 
## RGB
###### RGB color used to represent any color in the rainbow=> this is a popular system not the only system. here, (0,0,0)=>black and (255,255,255)=>white
###### ![[Pasted image 20260219232542.png]]![[Pasted image 20260219232727.png]]
###### (255,0,0)=>red , (0,255,0)=>green ,(0,0,255)=>blue. 
## Hexcode
###### It denotes color by 6 hexadecimal starting with "#" to denote it is a hexcode
###### it is 3, 2 digit base-16 digits which can represent (00->0 and ff->15 * 16^1 + 15 * 16^0 = 255)
###### it is contradictory to our decimal system which is base-10
###### it take 0-9 and a-f to represent base-16.![[Pasted image 20260220173241.png]] here alphabets are case insensitive 
###### ![[Pasted image 20260220174224.png]]  0=![[Pasted image 20260220174735.png]] 
00=0
01=1
...
09=9
0A=10
0B=11
...
0F=15
...
10=16
...
FF=255
###### Why hexadecimal are usefully? =>F=15 how many bits are need to represent number 15 =>1111 => 4 bit as it is half bytes so useful as 1111=F and 11111111=FF thus RGB represented by 3 bytes => fundamentally implementable in the binary byte ![[Pasted image 20260220181900.png]]
###### This is common to use hexadecimal in numbering memory as it is short represents a byte=>![[Pasted image 20260220182132.png]] ![[Pasted image 20260220182159.png]]
###### problem with hexadecimal =>10=10 and in hex 10=16 confusion so, use "0x" symbol before denoting a hex ==>0x says here come a hexadecimal ![[Pasted image 20260220183147.png]]
###### Try printing the address of some variable ![[Pasted image 20260220192809.png]] => int takes 4 bytes => knowing about computer's memory we can do many powerful things but core dumped is a problem =>![[Pasted image 20260220193035.png]] more operators &-> gives the address of that variable as hexadecimal * -> operator gives the value at that address => &->referencing and * ->DE-referencing operators
###### %p allows to print address ![[Pasted image 20260220193430.png]] => pointers
## Pointers
###### This is regarded as most difficult topic in c
###### It is unique feature of c. as it is very close to hardware.=>great powers comes with great responsibility
###### It is a variable Pointer which stores address of another variable.![[Pasted image 20260220193824.png]] * -> here, means this is pointer to this datatype![[Pasted image 20260220194051.png]] => access address of things in memory we can built things and link things together  => go to address => ![[Pasted image 20260220203436.png]]
###### every time run this program get different address as it can be same or not.It is use to make data structures 1D, 2D and 3D.![[Pasted image 20260220200818.png]]
###### It is a big variable size as it is pointer because have large amount of memory need many bytes to represent.
###### Generally not print or write the value of memory address we generally use it to store memory address SO, can visuallize this as a arrow towards the variable.![[Pasted image 20260220201234.png]]
###### It is like address of mail boxes ![[Pasted image 20260220201435.png]]  can go to that address and read value at that address
###### Pointers can point to each other `int * * ptr =&&a;`
###### A string ![[Pasted image 20260220201824.png]] ("" -> implies \0 at the end )in memory ![[Pasted image 20260220202035.png]] => what is variable s, as s\[0\]  and so on are characters stored in memory then what is s. => ![[Pasted image 20260220202228.png]]
###### When declare s it is becomes a pointer to the first character of the string stored => as to know the string we need to know only the pointer to 1st character as rest are continuously stored in memory and stops with null character '\0' ![[Pasted image 20260220202637.png]]
###### String is not a key word in C.There is a ![[Pasted image 20260220202903.png]] , we can make structure ![[Pasted image 20260220203021.png]] . Can define integer as a keyword in C ![[Pasted image 20260220203116.png]] , ![[Pasted image 20260220203140.png]] 
###### ![[Pasted image 20260220203712.png]] ![[Pasted image 20260220203909.png]] ![[Pasted image 20260220204103.png]] %s is smart to identify the char pointer to be represented as a string =>given an address %s know to print all characters till found \0
###### ![[Pasted image 20260220204551.png]] &s\[0\] == s, as by definition s is a char pointer and s \[0\] is a char(not pointer) => ![[Pasted image 20260220204831.png]] This are consultative memory location one byte
###### Can do arithmetic on pointers ![[Pasted image 20260220205132.png]] ![[Pasted image 20260220205313.png]] s\[0\] means * s and s\[1\] means * (s+1) => this is syntax to make the code more readable
###### ![[Pasted image 20260220205552.png]] can do anything see any memory address ![[Pasted image 20260220205633.png]] can have undefined behaviour as its now known address.There is a limited size allocated by OS to the program if go out from that it will give segmentation fault(core dumped)
###### https://www.youtube.com/watch?v=AcWIE9qazLI&list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4?t=3660s