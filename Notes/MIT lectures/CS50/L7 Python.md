###### Teach your-self new language 
![[Pasted image 20260302223814.png|135]]->![[Pasted image 20260302223829.png|215]]->`print("Hello, World")`
###### There are different language (as languages evolve) in same language there are updates.
###### In C we do ![[Pasted image 20260302225122.png|251]] -> Now `python hello.py` here, python is a program which runs python code
###### C->complied language and python->interpreted language
`Syntax changes the ideas remain same.`
![[Pasted image 20260302225434.png|317]] -> no need of semicolon and by-default gets newline
`#include<stdio.h>` -->`import pyjokes`
![[Pasted image 20260302225823.png|151]]![[Pasted image 20260302230227.png|478]] ![[Pasted image 20260302230905.png|339]]![[Pasted image 20260302230817.png|337]]
###### python is dynamically typed so, compiler decides at runtime data type, used + sign for concatenation(join strings) ->by default(it gives newlines and space between different argument passed to print) 
###### can also use format-string in python ![[Pasted image 20260302231129.png|320]]->{variables}=> Variable is interpolated , f indicates this is a format-string
###### learn new language --> infer from the given context what it can do(mostly your inference is write as language are made by human to be understand by humans)
![[Pasted image 20260302232242.png|245]]![[Pasted image 20260302232314.png|244]]
###### Types(not very explicit)
![[Pasted image 20260302232520.png|69]] ![[Pasted image 20260302232614.png|60]] + ![[Pasted image 20260302232710.png|59]]
```
words=set() # values 

def unfinishedFn():
    ...

def check(word):
    if word.lower() in words: # handles lower uppercase and checks for each word in words
        return True
    else:
        return False

def load():
    try:
        with open("dictionary.txt","r") as dict:
            for line in dict:
                line=line.rstrip()
                words.add(line)
    except FileNotFoundError:
        print("File not found")
    except Exception as e:
        print("Error :",e)

def size():
    return len(words);

def unload():
    # as memory free is done already by python
    return True 

print('asdfghjk'=='ASDFGHJK')
print('asdfghjk'=='ASDFGHJK'.lower())
load()
print(words)
print(size())

```
###### C is fast -> ![[Pasted image 20260302235333.png|354]] Because there are general abstraction in python which lead to more lines of code.
###### Image recongnition code in python ![[Pasted image 20260302235826.png|461]]-> it gives all faces in image office.jpg ![[Pasted image 20260303003709.png|406]]
###### in recognise.py ![[Pasted image 20260303003820.png|464]] ![[Pasted image 20260303004034.png|520]]
###### This small code to face finding by using library -->It might be matching patter pixel 
###### `from cs50 import get_string get_int get_float` can import specific function
###### ![[Pasted image 20260303004510.png|509]] -> : and indentation
###### ![[Pasted image 20260303004827.png|364]]![[Pasted image 20260303004932.png|324]] -> else if condensed to elif
###### Variables in python are dynamically typed. So, `int count =0` ->`count=0` 
###### `counter+=1` -->`counter++` is not there is python(counter++ is not a valid syntax)
```
// In C
int i=0;
while(i<3){
	printf("Meow\n");
	i++;
}
for(int i=0;i<3;i++){
	printf("Meow\n");
}
while(true){
	printf("Meow\n");
}
```
```
# In Python
i=0
while i<3:
	print("Meow")
	i+=1
for i in [0,1,2]:
	print("Meow")
# OR
for i in range(3):
	print("Hello, World")
while True:
	print("Meow")
```
###### Python doesn't have arrays but have higher level data structure
###### range(n) give 0 to n-1 one by one instead of giving full \[0,1,2...,n-1].Thus range is memory efficient
```
# make a calculator
from cs50 import get_int
x=get_int("x: ")
y=get_int("y: ")
print(x+y)
```
###### There is no main function in python (to avoid boiler plate) -->here left most code is run first(top to bottom and left to right)
```
# make a calculator
x=input("x: ")  # x=2
y=input("y: ")  # y=3
print(x+y)      # x+y=23
print(int(x)+int(y))   # x+y=5

# or

x=int(input("x: "))  # x=2
y=int(input("y: "))  # y=3
print(x+y)      # x+y=5
```
###### input always take string -> parse it to int --> integer division 1/3=0 it is called truncation(0.333->0) ![[Pasted image 20260303113401.png|143]] see more digits ![[Pasted image 20260303113641.png|279]] It has floating point imprecision
###### Integer overflow: size of int is limited 32 bit integer(-2^31 to 2^31). In python can count as high as we want it will auto allocate more and more bytes for it.(integer overflow won't happen)
###### Compare in python 
```
x=int(input("x: "))
y=int(input("y: "))
if x<y:
	print("x is less than y")
elif x>y:
	print("x is greater than y")
else:
	print("x is equal to y")

s=input("Do you agree? ")
if s=="y" or s=="Y":
	print("Agreed.")
elif s=="n" or s=="N":
	print("Disagreed.")

# OR
if s in ['y','Y','yes','Yes','YES']:
	print('Agreed.')
elif s in ['n','N','no','No','NO']:
	print('Disagreed.')

# OR
s=input("Do you agree? ")
s=s.lower()
if s in ['y','yes']:
	print('Agreed.')
elif s in ['n','no']:
	print('Disagreed.')
```
###### In python "" and '' means same thing
## Object oriented programming(OPPs)
###### Till now we did procedural programming we write procedure(top to bottom and left to right) to do something.
###### If some data types can have built in function for them (like char and toUpper and toLower function are at different places) ==>str has properties and also behaviours like .lower and .upper to make it upper and lower case respectively (like struct which can also store functions)
###### Method =>is a function built into a data type (know about this function only through the documentation of that data type)
###### In python strings are immutable->s.lower() return a copy of s not changes the string s
## function 
```
def meow(n):
	for i in range(n):
		print("Meow")
# as excuted up to down so define before using
meow(3)
```
###### Can make a main function in python (no prototype just call main at last and write at top)
```
def main():
	meow(3)

def meow(n):
	for i in range(n):
		print("Meow")

main()  # main is also a function need to call it
```
###### print Mario obstacles (do while loops not in python -> so use while true loop as it is pythonic(ideal way to do this in python))
```
def main():
	height=get_height()
	makeCol(height)

def get_height():
	while True:
		try:
			i=int(input("height : "))
		except ValueError:
			print("Plz enter a int")
			continue
		else:
			if i>0:
				#return i better way
				break
	return i # there is no problem of scope
	
def makeCol(n):
	for i in range(n)
		print("#")

main()

O/P : size : -2
size : 3
#
#
#
```
###### In python we don't do input validation to much we do catch error if they happen and Now, need to print ????? in row
```
def main():
	printRow(4)

def printRow(n):
	for i in range(4):
		print("?",end="")
	print() # get \n free

# OR WAY
def SmartPrintRow(n):
	print("?"*n)

main()
```
###### Print function takes a lot of argument
###### `visit python.docs` -> print function can have many arguments (default value of end is "\n" it is called named argument)
```
print("Hello","World","meow",end="")
# here "Hello", "World", "meow" are position arguments and end is a named arguments
```
###### Python doesn't have malloc, realloc, free, pointers(very things automatically)
###### Make cube of n X m
```
def makeCube(n,m=0):   # make m optional argument
    if m==0:
        m=n
    for i in range(m):
        print("$"*n)
makeCube(5)
makeCube(3,4)
```
## List
###### To know the length of list use len(list) ->go to docs
```
scores=[72,73,33]
average=sum(scores)/len(scores)
print(f"Average :{average}")

from cs50 import get_int

score=[]
for i in range(3):
	score=get_int("Score : ")
	# score.append(score)
	# OR WAY TO APPEND
	scores+=[score]
print(f"Average is {sum(scores)/len(scores)}")

```
![[Pasted image 20260304220812.png|219]] 
```
before=input("Before : ")
print("After : ",end="")
for c in before:  # hands 1 char at a time
	print(c.upper(),end="")


O/P :
Before : sachin
After : SACHIN
```
```
before=input("Before : ")
print("After : ",before.upper(),end="")

```
###### Can use library to enhance functionality of code like
## Libraries
###### To unlock more functionality. To take command line arguments by using module/libraries -> sys( i.e system module )
```
from sys import argv
if len(argv)==2:
	print(f"Hello, {argv[1]}")
else:
	print("Hello world")

if len(argv)>2:
	for i in range(len(argv)):
		print(argv[i],end=" ")
	# OR WAY
	for arg in argv:
		print(arg,end=" ")

O/P:
python greet.py Harry 
=> Hello Harry
python greet.py
=> Hello World 
python greet.py 1 2 3 4 5 6 7 
=> Hello World 
=> greet.py 1 2 3 4 5 6 7 
```
###### Slice a list => `argv[1:]` will give a slice of list from index 1 to end.
###### Exit Codes in python using sys
```
import sys   # import all things from sys can use anything in it
if len(sys.argv)!=2:
	print("./exit.py <partmeter1>")
	sys.exit(1)
	
print(f"hello, {sys.argv[1]}")
sys.exit(0)

O/P :
$ code exit.py
$ python exit.py
./exit.py <partmeter1>
$ echo $?
1 
$ python exit.py David
hello, David
$ echo $?
0 
```
###### search and sort are automatic
```
form sys import exit
names = ["Anna","Bill","Sachin","Ron","Harry","Percy","Ron","George"]
name = input("Name : ")
for n in name:      # linear search
	if name == n:
		print("Found")
		exit(0)
print("Not found")
exit(1)


# OR WAY
if name.lowe in names: # Linear search
	print("Found")
	exit(0)
print("Not found")
exit(1)
```
![[Pasted image 20260305215529.png|160]]
###### Phone book => dictionary
```
peoples=dict()
# or
peoples={
	"Name":"+0120 23 929",
	"David":"+9298 27 622",
	"Carter":"+29 277372 62"
}
name=input("Name : ")
if name in people:  # search if name is as key in names
	number = people[name]
	print(f"Number : {numbers}")
```
###### search are made particular good in so it brings near to constant time O(1). It will optimise.
###### Compare string
```
s=input("s: ")
t=input("s: ")

if s==t:
	print("Same")
else:
	print("Differnet")
```
###### ![[Pasted image 20260306201514.png|203]] It does automatically(it check character by character).In C it gives different always buz it compares pointer of two strings.
```
s=input("s: ")
t=s.capaitalize()
print(f"s: {s}\nt: {t}")
# s and t are different as string are immutable
```
```
# SWAP
x=1
y=2

print(f"x : {x}, y : {y}")
x,y = y,x    # swaped
print(f"x : {x}, y : {y}")
```
###### Put name and numbers in CSV file=> import csv and read docs of it.
```
 @ phonebook.csv
 name,number
 
```
```
import csv

with open("phonebook.csv","a") as fs:
	name =input("Name :")
	name =int(input("Number :")
	
	writer =csv.writer(file) # treat this file as csv file 
	writer.writerow([name,number])  # if someone swaped name and number coloum
	# OR
	writer =csv.DictWriter(file,fieldnames=["name","number"]) # figure out bases on first line
	writer.writerow("name":name,"number",number)
	
```
![[Pasted image 20260306202729.png|186]]
###### More libraries
###### pyttsx3 : python text to speech
```
import pyttsx3
engine=pyttsx3.init() # initialize this library
name =input("Name : ")
engine.say(f"Hello, {name}")
engine.runAndWait()  # run and wait it speech finished
```
![[Pasted image 20260306203424.png|207]]![[Pasted image 20260306203510.png|223]]
###### os -> operating system related functionality
```
import os
import qrcode

img=qrcode.make("https://youtu.be/xvFZjo5PG0")
img.save("qr.png","PNG") # save the image as protable network graphic(PNG)
os.system("open qr.png")
```
![[Pasted image 20260306203833.png|367]] 