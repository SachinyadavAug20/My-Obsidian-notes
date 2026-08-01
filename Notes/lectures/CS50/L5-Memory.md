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
![[Pasted image 20260224225906.png]]
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
######  Hackers can also search around the memory address to find data to steal the data of the user.This way code can be injected in our program and steal data of the person using a suffocated system.=>power with responsibility
###### Treat address as number can do mathematics on this number.![[Pasted image 20260221153036.png]]  ![[Pasted image 20260221155718.png]] compiler know how long is a variable.i.e for int pointer adding one automatically jumps to next by adding 4 byte ![[Pasted image 20260221205214.png]] ![[Pasted image 20260221205320.png]] ![[Pasted image 20260221205459.png]] They are different as they are different strings and thus have different pointer to them even if they are same character by character=>![[Pasted image 20260221210106.png]] ![[Pasted image 20260221210535.png]] 
###### Compare two string is not direct as need a function strcmp(str1,str2);=> (str1 == str2=>this compares memory address not character by character)=> we have to do manually check character by character=>strcmp return 0 if same strings, ![[Pasted image 20260221210404.png]] ![[Pasted image 20260221210420.png]]![[Pasted image 20260221210438.png]]
###### Make a copy string =>![[Pasted image 20260221211208.png]] This will make t store same address as s.It will work but if changed s, t will automatically change as we made a copy of the pointer not all characters.=>use strcyp(s,t) it will loop and make
###### we uppercase the 1st char of s, 1st char of t is automatically uppercase because they are same string ![[Pasted image 20260221211647.png]] 
###### ![[Pasted image 20260221211809.png]] ![[Pasted image 20260221211900.png]] avoid segmentation fault ![[Pasted image 20260221212045.png]]
###### Need new building block=>![[Pasted image 20260221212246.png]] , malloc =>memory allocation can ask for any number of bytes it will give the address to 1st memory available and free is to free some memory(pointer) after used. it is in ![[Pasted image 20260221212801.png]] 
###### if a program continuously ask for memory and never free it, computer will run out of memory and freeze
###### Make a free space of copy of our string ![[Pasted image 20260221213749.png]] apply for loop and copy char by char![[Pasted image 20260221213859.png]]  +1 is for the null character ![[Pasted image 20260221214028.png]] ![[Pasted image 20260221214101.png]] ![[Pasted image 20260221223124.png]] ![[Pasted image 20260221223150.png]]
###### calling a function like strlen every time again in for loop=>as it does for loop on string every time =>use variable to strong the length ![[Pasted image 20260221224818.png]]  this is auto made by a function call strcpy ![[Pasted image 20260221224933.png]] 
###### malloc can return NULL pointer=>it is address 0 (nothing is supposed to go there) => if write very long string and computer don't have sufficient memory to store it continuously it return a null pointer ![[Pasted image 20260221231020.png]] , if able to take input but can't afford to have that amount again malloc will return NULL ![[Pasted image 20260221231203.png]] return 1 gives signal something as went wrong.At bottom return 0 as everything went successfully and ![[Pasted image 20260221232015.png]] don't have use free for prebuilt functions as they do it automatically, But which ask for memory by malloc free it after use.
NOTE: nul='\0' and NULL is a pointer
###### if mess up with memory will end-up in a leakage and potential problems.=>need tool to save oneself from it Valgrind
## Valgrind
###### This helps to identify memory faults before they arrive.![[Pasted image 20260222103425.png]]  it is manual way to ask for memory for array direct way is ![[Pasted image 20260222103344.png]] =>bug ->zero indexing , not free the memory![[Pasted image 20260222103633.png]] =>No crash no error it doesn't mean there is no bug (there can be bugs)
###### Valgrind is used to see the memory related bugs in run time.![[Pasted image 20260222103906.png]] ![[Pasted image 20260222104101.png]] => can see invalid write write of size 4 at line 9, at line 9 we did x\[3]=33 which is invalid as only made 3 sizes i.e 0,1,2 are valid. 2nd error ![[Pasted image 20260222104535.png]] line 6 we used malloc we lost memory means memory leak-> understand leak because not freed it after use so, free it. now correct code->![[Pasted image 20260222104949.png]] ![[Pasted image 20260222105030.png]] 
###### ![[Pasted image 20260222105145.png]] not declared what is in memory and either took input =>what value it will print now=>garbage value(in C if not initialised a variable or array there will be garbage value in it. )![[Pasted image 20260222105629.png]] alot are initialised to zero but some are garbage
###### ![[Pasted image 20260222105751.png]] * y is a problem as we did not malloc any space for it.->* y has garbage value![[Pasted image 20260222110009.png]] ![[Pasted image 20260222110155.png]] ![[Pasted image 20260222110323.png]] ![[Pasted image 20260222110354.png]] ![[Pasted image 20260222110508.png]] ![[Pasted image 20260222110540.png]]![[Pasted image 20260222110631.png]] ![[Pasted image 20260222110658.png]] 
## Swap
###### To transfer liquid from one glass to another need a 3rd glass(need a temporary variable)=>![[Pasted image 20260222112737.png]] ![[Pasted image 20260222114849.png]] ![[Pasted image 20260222114908.png]] ![[Pasted image 20260222115026.png]] not swapped why??? -->It is because passed by value(copy) not by reference=>Need to change value at the address ==>This is a issue of scope(it the region in which the variable lives) as x and y are in the context of {} of main function==> solution pass x and y's address outside to sway function so it can go on the address and swap the value at that address
###### ![[Pasted image 20260222120603.png]] malloc grabs memory from the heap. heap fills from top to bottom![[Pasted image 20260222120820.png]]  but when call a function it's variables and arguments starts to fill from bottom to top(stack)==> need to make sure this heap and stack don't collide by checking the return value of a function and malloc is a non NULL. For our program ![[Pasted image 20260222121317.png]] ->![[Pasted image 20260222121347.png]]->![[Pasted image 20260222121402.png]] , for variable ![[Pasted image 20260222121529.png]] ->after swap return![[Pasted image 20260222121621.png]] 
###### ![[Pasted image 20260222121706.png]]->![[Pasted image 20260222121726.png]]  now in stack ![[Pasted image 20260222121945.png]] ![[Pasted image 20260222125650.png]] ![[Pasted image 20260222125741.png]]
###### ![[Pasted image 20260222125845.png]] this are together called ![[Pasted image 20260222125941.png]] 
## User input
###### Use scanf which looks for the input of a given format to be stored in at the address of variable ![[Pasted image 20260222130255.png]] But, here we can put anything we need to specifically loop when user gives integer
###### For string we don't know in advance how long a string will be and how much memory we need by malloc -->don't need a address of  '&' as s is itself a pointer ![[Pasted image 20260222130949.png]] it is not happy with uninitialize value ![[Pasted image 20260222131053.png]] Why not working for string, ![[Pasted image 20260222131231.png]] solution is read char by char and if get new char malloc 1 one byte do it for all char and the last '\0'
###### Store things in CSV(comma separated value)=>excel file![[Pasted image 20260222131632.png]] ![[Pasted image 20260222131838.png]]
###### BMP file -> stores colourful image![[Pasted image 20260222132125.png]]
###### [[L6-Data structure]]
