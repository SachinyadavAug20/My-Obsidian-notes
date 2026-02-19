## Problems
###### Reading level from words => high-level(use complex sentences word) words used
### Analyse text
###### Use encryption to secure data they also have levels 
###### Make is not a compiler. it is a program which make our program. It used clang as a compiler we can use GCC also as compiler
###### ![[Pasted image 20260211193927.png]] => ![[Pasted image 20260211193905.png]]
###### it creates a file a.out => assembler.out =>./a.out => mv a.out hello
###### use command line arguments![[Pasted image 20260211194711.png]]
###### can specify it's output . will learn about more thing about it by manual
##### ![[Pasted image 20260211195447.png]]
###### It gives wired output error when using clang => it doesn't give info clang about the get_string() it gives ![[Pasted image 20260211195716.png]]
###### need to specifies which library is used => to use >make command to automate 
###### So library are to add some at compiler time.
###### 4 steps in compiling
![[Pasted image 20260211200128.png]]
###### Pre-processing : it collects all the required header files which are used in the program, anything '#' is supposed to be pre-processed that is analysed initially.it take /usr/include is folder which has stdio.h. it includes everything which is in that library
###### ![[Pasted image 20260211200922.png]]=>![[Pasted image 20260211201453.png]]printf returns no of character printed
###### compiling : converts high level code into assembly(what processor understand) it is very efficient code
###### ![[Pasted image 20260211202610.png]]
###### Assembling : the assembly code is still not 01 form so. it coverts assembly  into 01 form 
###### Linking : adding library binaries to the program => links all together made code
## De-compiling
###### Convert the machine code to source code but has disadvantage of privacy and copy-write(intellectual property).It is reverse engineering someones product
###### It is tough as the variable name and the function name are not retained in the machine code, and loop of different types doing same thing will compile to same binary so it is also not retained
###### It is very hard.Like it is hard to reinvent the smart phone we have with us by reverse engineering
## debugging
###### Tools to correct code. to solve a bug in a computer program
![[Pasted image 20260211211729.png]]
###### First time has a bug in the machine so it is called as bug
###### There are logical bug in the programs. example
![[Pasted image 20260211212341.png]]=>it has 4 staff
###### Use printf to print states of a variable ![[Pasted image 20260211212802.png]]
###### After realized the bug then remove the printf
###### But printf can be a mess so use a written software called debugger
###### Debugger come built in a text editor like VS code
###### It has break point where it stops execution and give a button to go forward in program at you page and debug it
###### It show state of all variable and playback icons (control the execution of program)![[Pasted image 20260211213953.png]]
######  example 2![[Pasted image 20260211214132.png]] it has condition of negative number as it will prompt user if he enter negative number.  contradictory to our intend it forces user to enter 0 or positive number only
![[Pasted image 20260211215029.png]]
 fixed it ![[Pasted image 20260211215357.png]]
 ###### Use of rubber duck debugging : talk about your code and bug to a rubber duck.In expressing yourself you will find flaw in your logic
 ###### ![[Pasted image 20260211220307.png]]![[Pasted image 20260211220318.png]]![[Pasted image 20260211220339.png]]
## Data type
###### Size allocated for different data types depends on the architecture of the system ![[Pasted image 20260211220954.png]]
###### bool need 8 bit instead of 1 bit as true/false, As there are 8 bit operators in a processor so it can work with 1 bytes at a time
###### strings have variable size depending on the length of the string
###### Can number this bytes![[Pasted image 20260211230120.png]]
###### ![[Pasted image 20260211230521.png]]
###### ![[Pasted image 20260211230639.png]]
######  ![[Pasted image 20260211230709.png]]
###### Bad design as storing same things
###### Solution is use of array
## Array
###### Way of storing data continuously in memory
###### ![[Pasted image 20260212183132.png]] Saving scores under 1 variable
###### ![[Pasted image 20260212183515.png]]
###### Still bad design as repeating yourself ![[Pasted image 20260212184528.png]] ![[Pasted image 20260212184507.png]]
###### Make a function to find array![[Pasted image 20260212184820.png]]
###### ![[Pasted image 20260212192115.png]]
###### In other languages can use arr.size() to know to size but in C have to remember it.
## Strings
![[Pasted image 20260212192713.png]] => ![[Pasted image 20260212192800.png]]![[Pasted image 20260212193211.png]]
###### Strings are variable length array of character.
###### String is a array. How to know where string end as it takes variable size?
###### Solve his as added 1 bytes it is a \0 ![[Pasted image 20260212193507.png]]
###### \0 is called as null terminator it is a zero =>backslash is for showing it is a character zero
######  ![[Pasted image 20260212193638.png]]
###### \0 => 00000000 from ASCII table ![[Pasted image 20260212193733.png]]![[Pasted image 20260212193939.png]]![[Pasted image 20260212194055.png]]![[Pasted image 20260212194253.png]]![[Pasted image 20260212194337.png]]
###### ![[Pasted image 20260212194539.png]]![[Pasted image 20260212194611.png]]
###### ![[Pasted image 20260212194837.png]]![[Pasted image 20260212195016.png]]
###### Can know the length of string as it has a NULL terminator
###### ![[Pasted image 20260212195255.png]]
###### There is a header file string.h all function strlen(str) => give the length of the string ![[Pasted image 20260212195609.png]]
###### ctype.h => stand for C-Data-type gives function 
###### In string.h we get make upper case uppercase to lower case is 32 apart ![[Pasted image 20260212202708.png]] ![[Pasted image 20260212202801.png]]
###### Can do it manually or can use the function from ctype library ![[Pasted image 20260212203225.png]]
###### But we are calling strlen() every-time as it is O(n) complexity store it in a variable
![[Pasted image 20260212203526.png]]
## Command line arguments used by clang
###### it is a input the command => Like make a program wait for prompt do input the output takes a lot of time how to automate
###### ![[Pasted image 20260212220557.png]]
###### Main will take command line arguments=> argc is the no of arguments argv\[] will has all strings which are input
###### This is because the array doesn't keep track of it's own size to need a parameter to determine the number of input received by the user 
######  ![[Pasted image 20260212221010.png]]
###### We can make our program to take command line arguments
###### It speed things up =>![[Pasted image 20260212221121.png]] argv\[0] has the name of the file
###### We can now how program was used ![[Pasted image 20260212221246.png]]
###### ![[Pasted image 20260212221632.png]]
###### This are two ways to define main function in c
![[Pasted image 20260212221736.png]]![[Pasted image 20260212221750.png]]
###### Cowsay => it is a program built in linux made by some one with a lot of free time it take similar command line argument to display a cow showing a ASCII art of a cow saying something which user passed as a argument
###### ![[Pasted image 20260212222239.png]] => for options -f ![[Pasted image 20260212222646.png]]
###### ![[Pasted image 20260212222715.png]]
## Exit status
###### When main function exit it return a special value it indicates how program ended successfully or with an error ![[Pasted image 20260213191106.png]]
###### It shows the error code which the program knows what happened
On web error codes ![[Pasted image 20260213191216.png]] =>means page not found
###### int is there for main always for returning exit code as integer![[Pasted image 20260213191902.png]]
###### echo is a command it shows the exit status
![[Pasted image 20260213192013.png]]
###### 0 by default shows success, return 1 to show error
 ![[Pasted image 20260213192336.png]]
 ###### Check what is exit status of the program used by your program
## Cryptography
###### Scrabble the info to make it unreadable and send it safely
###### ![[Pasted image 20260213192717.png]]
###### Scissor cipher => shifts all alphabets by n letter and circles around by %26
![[Pasted image 20260213193108.png]]
###### ![[Pasted image 20260213193322.png]]
