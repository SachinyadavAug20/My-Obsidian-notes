## Intro
It is high-level, OOP, imperative, python-syntax, gradually typed, built for godot
![[Pasted image 20260201194037.png]]
## Topics
![[Pasted image 20260201194228.png]]
## Hello world
![[Pasted image 20260201201748.png]]
## Syntax
It is similar to python so it has indentation blocks (Indentation specific)
And case sensitive language
## Modifying Nodes
example make a label
need to things reference to node(here label) and property(here text)
If hover over the property in the inspector tab will see the name of property
![[Pasted image 20260201202649.png]]
![[Pasted image 20260201203128.png]]
can store this reference in a variable
It is by drop holding ctl + shift
It is by default @onready as when node is rendered in the scene(exist)
![[Pasted image 20260202231522.png]]
do .get_path to get relative path of it from the root
==Note : best practice to use path for nodes who are child of current node==
can do direct export to inspect and drag and drop ![[Pasted image 20260202232641.png]]


## Inputs
In project setting add input maps name it and record it
make input function![[Pasted image 20260201211843.png]]
This function is called when user gives input
event ==> info about the input
![[Pasted image 20260201212523.png]]
https://docs.godotengine.org/en/stable/tutorials/inputs/input_examples.html
## Variables
Are a container that hold information
![[Pasted image 20260201213629.png]]
![[Pasted image 20260201213927.png]]
prints 120 (As 100->40->20+30->50+20->70-10->60*4/2=120)
![[Pasted image 20260201221328.png]]
variable have scope they can't be accessed everywhere
Variables can be access in the inner code blocks but can't be accedes outside the code block
![[Pasted image 20260201221743.png]]
![[Pasted image 20260201222331.png]]
the orange lines of warning are for UN-used variable
to fix the warning of UN-used variable use _name (like i did in var1)
Data types
![[Pasted image 20260201222550.png]]
![[Pasted image 20260201222653.png]]
Same as python casting int(var) , str(var) , float(var)
![[Pasted image 20260201222743.png]]
Common data structure are vector 2D and 3D
![[Pasted image 20260201222947.png]]
%%  Note Gd Script is by default dynamically typed so we don't define data type in advance but we should use static type to avoid errors %%
 ![[Pasted image 20260201223235.png]]
 ![[Pasted image 20260201223518.png]]
 Change value in inspector tab ![[Pasted image 20260201223728.png]]
 Constants : it is standard to name constant in all uppercase
 ![[Pasted image 20260201223858.png]]
 

## If statement
Same as python ![[Pasted image 20260201214509.png]]
![[Pasted image 20260201221027.png]]
All possible comparison operators will work >,<,<=,>=,![[Pasted image 20260201220722.png]]
also logical or,and also works
## Comment
To add whats and why of the code
![[Pasted image 20260201221254.png]]
## Functions
Same syntax as python
![[Pasted image 20260201223936.png]]
Function name started with "_" is accessed and called by engine it self(No need to call it)
![[Pasted image 20260201224014.png]]
examples: ![[Pasted image 20260201224138.png]]
This can be called on an action
Functions can have input(paramters) and output(return)
![[Pasted image 20260202210238.png]]
statically typed datatypes (return parameter type defined)
![[Pasted image 20260202210420.png]]
## Random numbers
randf() ->gives random number btw 0,1
![[Pasted image 20260202210821.png]]
can get random number in range in range => randi_range(m,n) -> it gives an integer between m and n.
![[Pasted image 20260202211253.png]]
## Documentation
Hover over something you want to know and it's documentation will appear over it.
![[Pasted image 20260202212312.png]]
## Arrays
This a collection data type
![[Pasted image 20260202213100.png]]
## For loop
This is loop when item (For each loop)
![[Pasted image 20260202213523.png]]
Avoid creating infinite loop
![[Pasted image 20260202215753.png]]
Same logic of break and continues statement
## Dictionaries
This stores key value pair like in python
![[Pasted image 20260202220118.png]]
example![[Pasted image 20260202224037.png]]
can print dictionary same way as in python
![[Pasted image 20260202224511.png]]
## Enums
Tags and states define by it
 ![[Pasted image 20260202225429.png]]
 Can use it in the inspect tab as a options
 ![[Pasted image 20260202225817.png]]
 Enums are just value assigned in the build in logic![[Pasted image 20260202225949.png]]
 Thus if print Alignment.ALLy it gives 2 as output as it is just index given 
 Enum ==>Constants arranged in order to mark something like state
 (like is 1 then it is ALLY, 2 then enemy and 3 means neutral)
 Can override the default values
 ![[Pasted image 20260202230314.png]]
 Displays -1
## Match 
Switch statement in python
![[Pasted image 20260202230926.png]]
## Signals
This green icon shows it is connected to a signal
![[Pasted image 20260207202856.png]]
it is like a action in unity![[Pasted image 20260207203025.png]]
can apply any action to a signal
it helps decoupling component
it ends up becoming a mess very quicky
![[Pasted image 20260207204101.png]]
do it all in different function![[Pasted image 20260207204201.png]]
We can make a signal ![[Pasted image 20260207205301.png]]
 making a signal which other signals can connect to![[Pasted image 20260207213058.png]]
 emit the signal made
## get/set methods
This is like useState in nextJs
![[Pasted image 20260207213925.png]]
it is called when the value of health is changed
![[Pasted image 20260207215405.png]]
## Classes
GDscripts is OPPs language
class: it is blue print of object 
like blue print of character which any character can have
![[Pasted image 20260207215651.png]]
object / Instances : are specific versions of class
![[Pasted image 20260207215846.png]]
All built-in nodes are classes in Godot ![[Pasted image 20260207220118.png]]
 can use this character by duplication of node![[Pasted image 20260207221012.png]]

## Inner class
Classes inside another class 
alternative to dictionary  ![[Pasted image 20260207221247.png]]
as it gives suggestions before hand so it is safer than dictionary
## Inheritance
It is ability to derive a class from another class
![[Pasted image 20260207222102.png]]
means all functions and variables of Node class are also available in our class![[Pasted image 20260207222533.png]]
![[Pasted image 20260207222641.png]]
## Compositions
It is a way to structure your code
It is tactics used in programming to use code as much as possible
![[Pasted image 20260207225059.png]]
Problem we have![[Pasted image 20260207222846.png]]
In inheritance method![[Pasted image 20260207225457.png]]
Composition ![[Pasted image 20260207225432.png]]
## Standard practice
![[Pasted image 20260207225740.png]]
Call be nodes in hericay![[Pasted image 20260207225933.png]]![[Pasted image 20260207225954.png]]
parents can tell children what to do but children are not allowed to tell parents directly they can give signals![[Pasted image 20260207230257.png]]
## Styles
This is a guide which are conventions to follow for readability
