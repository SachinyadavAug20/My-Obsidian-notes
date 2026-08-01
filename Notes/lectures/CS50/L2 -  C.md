## C language
###### Same ideas different language
###### ![[Pasted image 20260209185127.png]]
###### Now hello world has changed
![[Pasted image 20260209190007.png]]![[Pasted image 20260209185943.png]]
## Source code
###### What human programmers write , but computers understand only machine code(binary) so it is converted by compiler
![[Pasted image 20260209194636.png]]
###### write good code ![[Pasted image 20260209194749.png]] 
###### Code in text editor VS code in code.cs50.io ![[Pasted image 20260209195322.png]]
###### GUI => graphical user interface, CLI =>command line interface
###### ![[Pasted image 20260209195953.png]]
###### This make command is a short cut to make >gcc hello.c -o hello , and hello is a binary file
###### Computer is so regimented to do what you told it to do
###### It is already going syntax highlighting to enhance readablity
###### ![[Pasted image 20260209201810.png]] => ![[Pasted image 20260209201837.png]]
###### ![[Pasted image 20260209202106.png]]
###### ; is at the end of a statement ==> sentence in English
###### '\n' is escape sequence character to go to new line
######  #include<stdio.h> is a external library written by someone else to provide the functionality of printf,scanf etc => for efficiency as import what is need
###### how to know what function see documentation at manual.cs50.io
###### ![[Pasted image 20260209210409.png]]
###### <cs50.h> is a library has many function to take user input ![[Pasted image 20260209210556.png]]
###### ![[Pasted image 20260209210647.png]]=>string answer=get_string("What's your name? ");
######  ![[Pasted image 20260209212014.png]]
###### printf(format) will look for format specifiers (%s,%d,%c,%f .. ) and the fill them with the corresponding parameters given at end
###### Problem if use %s here as specifier so if what to print %s literally then ==> ![[Pasted image 20260209231203.png]]
###### Can't use % sign as it is identified as special character solution is  ![[Pasted image 20260209231300.png]]
## Data types
###### They are different types are as we know we need to specify what the binary sequence is supposed to to translated to ![[Pasted image 20260209231707.png]]
## Conditional
###### ![[Pasted image 20260209231915.png]]This is way in scratch
###### ![[Pasted image 20260210165004.png]]
###### ![[Pasted image 20260210165130.png]]
###### Like % problem solved by the %\% we solve = assignment to == as equality check
###### ![[Pasted image 20260210165557.png]]=>![[Pasted image 20260210165628.png]]
###### ![[Pasted image 20260210172255.png]]
###### ![[Pasted image 20260210172403.png]]
###### ![[Pasted image 20260210173156.png]]
###### any non-zero number is true in c and other programming language
###### ctl + c => terminate the infinite loop
###### mv command is used to rename ![[Pasted image 20260210174529.png]]
###### some CLI command are ![[Pasted image 20260210174920.png]]
###### Use of do while loop ![[Pasted image 20260210190511.png]]=>![[Pasted image 20260210190606.png]]
###### Comments explanatory remark make => instead make it a function and give a appropriate name
###### ![[Pasted image 20260210191151.png]]![[Pasted image 20260210191706.png]]
###### Operators can do +,-,*,/,% 
## Limits
![[Pasted image 20260210191938.png]]
###### In ram has finite memory how high we count
###### Minimum are 32 bit integer  0 to 4294967295
###### For negative number -2147483648 to 2147483647
###### This will Integer overflow and ![[Pasted image 20260210192402.png]]
###### Thus it loops around
###### make long int ![[Pasted image 20260210192517.png]] has 64 bits ![[Pasted image 20260210192631.png]]
## Truncation
###### Loss everything after decimal point
###### 1/3=0 as it int as it does not support floating point operations
###### ![[Pasted image 20260210192941.png]]
###### Type casting is the solution![[Pasted image 20260210193116.png]]
## Floating point imprecision
###### There is some inner approximation as floats are 32 bit
![[Pasted image 20260210193243.png]]
###### It has finite number as can have infinity numbers after the decimal
###### Can use double which has 64 bit ![[Pasted image 20260210193449.png]]
###### In 1999 has years are 2 bits 99 thus now problem and will do as 1900 instead of 2000
###### This has came again time is stored from 1 January 1970
###### As on 19 January 2038 will run out of bits to store time in second from that 1 January 1970 as we use 32 bit integers. 
