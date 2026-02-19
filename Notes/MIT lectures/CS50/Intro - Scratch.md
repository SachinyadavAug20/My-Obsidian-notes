Computer science is a study of information managing and processing on it.
## Problem solving
![[Pasted image 20260207163037.png]]
###### we need the black box
###### Uniary => simple symbol counting like counting figures 1,2,3,4,5,6... => Base 1
###### Binary => 2 symbol for counting => base 2
###### Base 10- we use counting on paper 
### Bit
###### It is a single 0 or 1
###### 0 or 1 is to be done physically like 0=>off and 1=>on
###### There are tiny transistor which can act as on or off
###### How to count higher than 0 1=> use more bulbs/transistor
###### from 3 bits can have 8 combination so count from 0 to 7 => by given position value
###### ![[Pasted image 20260207164512.png]]
this is number 1 2 3 => we user base 10 so we do 10^0*1 +10^2+2 + 10^3 *3 = 123

![[Pasted image 20260207164718.png]]
###### Place has value and symbol has value
###### Computers have only 2 options on and off thus only base 2
###### ![[Pasted image 20260207165044.png]]
###### ![[Pasted image 20260207165237.png]]![[Pasted image 20260207165257.png]]![[Pasted image 20260207165318.png]]![[Pasted image 20260207165340.png]]![[Pasted image 20260207165405.png]]![[Pasted image 20260207165440.png]]![[Pasted image 20260207165602.png]]![[Pasted image 20260207165625.png]]
### Byte
###### 1 Byte = 8 bits
###### All thing are measured in bytes =>kilobyte(KB),megabyte(MB),gigabyte(GB) 
###### with 8 bits can count till 2^8 + 2^7 + 2^6 + .. + 2^0 = 255
######  'A' => 65 decimal in ASCII => American standard code for information interchange
###### ![[Pasted image 20260207173312.png]]
###### Pattern of 0 and 1
###### 01001000 01001001 00100001 => 72 73 33 => HI!
###### How to represent number => '1' => 49 
###### Depend on datatype. It doesn't have emoji and other language 
![[Pasted image 20260207173941.png]]![[Pasted image 20260207174008.png]]
###### 8 bits and 1 byte for character will have **256 character only**
###### Solution have more 8 bytes can 
##### Unicode : final solution all form of human symbol
###### 32 bytes use 4 billion symbol
###### 111100001001111110011001111100010 => 4036991106 => 😂
###### This are characters not images they have fonts
###### can have skin tone in emoji implemented as (instead of using 5 different patterns of each tone what to do) use filter to change, 1st byte certain byte colour tone so have double size not 5 times![[Pasted image 20260207175245.png]]
###### 3 emoji combine to make different of 1 like family emoji![[Pasted image 20260207175838.png]]
###### like assembly of emoji  
###### Computer are always evolving
###### I program it is defined when this sequence will be represented as character, number, emoji, colour etc
###### RGB code ![[Pasted image 20260207180730.png]] used in images
###### every pixel on the screen can show some amount of red,green and blue to represent who spectrum of colours
![[Pasted image 20260207181134.png]] colour is ![[Pasted image 20260207181149.png]] is ![[Pasted image 20260207181231.png]]
thus quality of image depend on the size( amount of information about colour is stored )
###### ![[Pasted image 20260207181434.png]]
###### Thus image and gifts and videos are stored are big. Videos are pixel changing over time
###### ![[Pasted image 20260207181631.png]]
###### A move is 24 fps and game is 30-60 fps
###### So, we use compression algorithm to reduce the size of the image so to reduce it's size.
###### music is ![[Pasted image 20260207183148.png]] how to store audio stored as some frequencies to be played by a player assign values of frequencies to can store loudness duration of node other factors can be stored in the form of bytes and can be played back 
###### Human have standardise all the form of input and output
### Black box - Abstraction
###### It is simplification of something so lower level implementation of some solution is hidden
![[Pasted image 20260207184143.png]]
###### More focus on the high level goal it accomplishes. => in general this abstraction is called as Algorithm
###### Implementation ![[Pasted image 20260207184230.png]] this is contact icon
###### Searching in it by typing it works and show all matching if type 'a' => it shows all contacts with letter 'a'![[Pasted image 20260207184459.png]]
###### This happens so fast when typing, how to search in phone book can dictionary type search has order and index and sorted
###### Open middle page and where he is left or right . do half of that part and so on. keep on doing it. thus, it is better than linear search or linear search n with skipping 2 pages n/2
###### ![[Pasted image 20260207185433.png]]
## Pseudo Code
###### Write pseudo code in plane English to solve a problem 
###### Write what steps you will take to solve the problem in your language so you can implement it in other language like C, python etc![[Pasted image 20260208135212.png]]
###### Verbs => action word are function in programming![[Pasted image 20260208135350.png]]
###### Conditionals => are like wh-words in English![[Pasted image 20260208135533.png]]
###### Boolean expression => yes/no question![[Pasted image 20260208135643.png]]
###### loops => do this again ![[Pasted image 20260208135832.png]]This won't result in infinite loop if we continue to divide the problem
###### This are the ideas each programming language has at it's core![[Pasted image 20260208140203.png]]
###### At the end all will convert to binary![[Pasted image 20260208140304.png]] This has to print "hello world" it has all letter all action/verbs which are for printing
### Scratch - it is a visual programming language which is used to learn basics of programming
###### This visual programming drag and drop features which make logical sense and will snap together![[Pasted image 20260208143407.png]]This is hello, world
###### ![[Pasted image 20260208144013.png]]This is hello world
###### By default we have a cat sprite in it to start with.
###### stage for scratch cat ![[Pasted image 20260208144236.png]]
###### x y coordinates are used to locate cat and movement
![[Pasted image 20260208144620.png]]
###### Event : anything happen like clicking a button etc.This event are listen for and some code is written to be excite when that event occurs ![[Pasted image 20260208145146.png]]
###### It is like algorithm 
![[Pasted image 20260207163037.png]]
![[Pasted image 20260208145348.png]]![[Pasted image 20260208165908.png]]

###### Cat asks your name and says your name ![[Pasted image 20260208150100.png]] 
This ask function has a return value of answer which i used as parameter to say function
###### But it says only name now hello, it says fast we can't see it.fix it by using another function which as timer of 1 second ![[Pasted image 20260208150322.png]]
###### But need hello, name => need to do operation on string ![[Pasted image 20260208150621.png]]
###### Composition of function nested function of joining and say function are nested
###### Can add more function in add extension tab like need a text to speech function
###### ![[Pasted image 20260208150910.png]]  This extension add more puzzle peace![[Pasted image 20260208151058.png]]
###### Use this new function in your program ![[Pasted image 20260208151219.png]]
###### if need to make the cat Me ow repeatedly for very long time ![[Pasted image 20260208151512.png]]
###### It plays very fast need a wait for like 2 second ![[Pasted image 20260208152421.png]]
###### Correct code : it does what is was supposed to do in any way(brute force also) e.g ![[Pasted image 20260208152634.png]]
###### Best design : Accurate way of doing something e.g ![[Pasted image 20260208152742.png]]
###### We can also write function it is not required for all function should be per-built we can make our own => cover this logic of me-ow in a function can use it latter
###### define your own function ![[Pasted image 20260208161616.png]]
###### It is a abstraction to, now take argument of no of times to me-ow ![[Pasted image 20260208162102.png]]
###### Put the code which is repeated several times wrap it in a function give a descriptive name and then use i may times
###### make it me-ow if cursor touches the cat ![[Pasted image 20260208163041.png]] it does infinite loop checking instead of checking once as computers are very fast
###### Video motion detection extension.![[Pasted image 20260208163604.png]]
###### ![[Pasted image 20260208164438.png]] make trash fall down![[Pasted image 20260208164808.png]] make it random ![[Pasted image 20260208164921.png]] make it drag and drop able to trash can ![[Pasted image 20260208165416.png]]
###### make a variable  ![[Pasted image 20260208165516.png]]
###### Use the variable to keep track of the score ![[Pasted image 20260208165612.png]]
###### Complete the vision of the program in simple actionable steps. Do it slowly
###### making a player controller ![[Pasted image 20260208170357.png]]