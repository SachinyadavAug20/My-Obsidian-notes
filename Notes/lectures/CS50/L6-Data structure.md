## Struct
###### store data in memory in a specific way in computer memory
## ADTs (abstract data type)
###### We don't see implementation we see the outcome
###### `Queue ,`Stack etc`
## Queue
###### It is a line.FIFO->first in first out. ==>
---
operation : enqueue(Adding some thing at rear end) , dequeue(Removing something from the front end)
## Stack
###### it is pile of things one on top of the other
###### it is a LIFO=>last in first out =>messaging ,emails new things comes at the top
###### No one is better than other it is the implementation which matters=>side effect of stack is old things remains untouched.
```
const int CAPACITY=50;
typedef struct{
	person people[CAPACITY];
	int size;
}
```
###### CAPACITY is maximum possible size of a array and size is current size, can make bigger CAPACITY but if size is small than all rest of data is wasted=>need more dynamism in size
###### We stored data in an array for most of the time.=>we will implement all ADTs using a array
![[Pasted image 20260226194504.png]]
###### but we have a size issue as array have fixed sizes, if need more size we need to copy the old array and increase its size ![[Pasted image 20260226194840.png]] ![[Pasted image 20260226194910.png]] this approach of resizing array is complex in space and time=>so it is bad approach (inefficient)
###### =>Solution is to place it somewhere else and have a pointer to that address![[Pasted image 20260226195413.png]]
```
#include <stdio.h>
int main(void){
	int list[3];
	list[0]=1;
	list[1]=2;
	list[2]=3;
	for(int i=0;i<3;i++){
		printf("%d ",list[i]);
	}
	printf("\n");
}
```
###### to allocate memory dynamically (buz it is unclear how much memory it might take)
```
 #include <stdio.h>
 #include <stdlib.h> // for malloc
int main(void){
	int *list=malloc(3*sizeof(int));
	if(list==NULL){
		return 1; // as no memory
	}
	list[0]=1;
	list[1]=2;
	list[2]=3;
	
	//..
	int *tmp=malloc(4*sizeof(int));
	if (tmp==NULL){
		free(list); // free old heap memory to avoid memory leak
		return 1; // if memory not found
	}
	for(int i=0;i<3;i++){
		tmp[i]=list[i];
	}
	free(list); //Free the original list
	tmp[3]=4; // expanded size of list
	list=temp; // as list is a pointer who is free so can reasigned
	free(list);
	return 0;//successful end
}
```
###### Always check is it returns NULL and at last free the memory after use
---
### Realloc
###### can use reallocate(realloc) by which we can reallocate the memory
```
 #include <stdio.h>
 #include <stdlib.h> // for malloc
int main(void){
	int *list=malloc(3*sizeof(int));
	if(list==NULL){
		return 1; // as no memory
	}
	list[0]=1;
	list[1]=2;
	list[2]=3;
	
	//..
	int *tmp=realloc(list,4*sizeof(int));// copy and free work handled automatically
	if (tmp==NULL){
		free(list);
		return 1;
	}
	tmp[3]=4; // expanded size of list
	list=temp; // as list is a pointer who is free so can reasigned
	free(list);
	return 0;//successful end
}
```
###### Made a temporary variable to check if realloc possible and avoid memory leaks if it is possible (i.e if we do a realloc by same name thus, we forget the old memory(address) before free it) => realloc frees the old automatically, also if realloc can make us efficient by checking if we have that much free memory continuously and uses it(improves best case complexity)
###### Can do this for 2D array also=>some logic but more steps
###### Now can take initially 1 block and then can ask for more and more memory by using realloc
```
struct      //make a structure
.           // access the a varaiable in struct
*           // dereference a pointer and make pointer
->          // combination of '*' and '.' in order
malloc      
realloc
```
## Linked list
###### It is a linked data structure(not linear) ![[Pasted image 20260228140404.png|304]]
![[Pasted image 20260228140729.png|255]]
###### marking the end of the linked list by using the NULL(0x0 is reserved for this special case) pointer ![[Pasted image 20260228141022.png|259]]  ![[Pasted image 20260228141327.png|342]]![[Pasted image 20260228141429.png|417]]
###### it is singly linked list can go in 1 direction only(can't go back from 3 to start)

###### ![[Pasted image 20260228142040.png]] ![[Pasted image 20260228142801.png]] can add more simply. as need more memory for pointers
```
#include <stdlib.h>
#include <stdio.h>
typedef struct node{ // need to use it as next so need declaration
    int number;
    struct node *next; //pointers to next node
}node;

int main(){
    node *list=NULL; // starts and initially empty(NULL)
    node *n1=malloc(sizeof(node));
    if(n1==NULL){
        return 1;
    }
    list=n1;
    n1->number=1;
    node *n2=malloc(sizeof(node));
    if(n2==NULL){
        return 1;
    }
    n1->next=n2;
    n2->number=2;
    n2->next=NULL;
    // print nodes
    for(node*ptr=list;ptr!=NULL;ptr=ptr->next){
        printf("%d ",ptr->number);
    }
}
```
###### problems ->1. takes more space , 2. can't index it, 3. not continuous can't do binary search(as need middle which is not possible) ![[Pasted image 20260228150932.png]] ![[Pasted image 20260228152035.png|303]]![[Pasted image 20260228152224.png|349]]![[Pasted image 20260228153842.png|312]]![[Pasted image 20260228154117.png|322]]
###### no need of realloc as can expand the size by simply pointing to it to previous
```
#include <stdio.h>
#include <stdlib.h>
typedef struct node { // need to use it as next so need declaration
  int number;
  struct node *next; // pointers to next node
} node;

int main(int argc, char *argv[]) {
  node *list = NULL;
  for (int i = 1; i < argc; i++) {
    int number = atoi(argv[i]);
    node *n = malloc(sizeof(node));
    if (n == NULL) {
      return 1;
    }
    n->number = number;
    n->next = NULL; // pre-append to list
    n->next = list;
    list = n;
  }
  // print the nodes
  for (node *ptr = list; ptr != NULL; ptr = ptr->next) {
    printf("%d ", ptr->number);
  }
    printf("\n");
}
```
![[Pasted image 20260228164227.png|256]]
###### free the memory used
```
#include <stdio.h>
#include <stdlib.h>
typedef struct node { // need to use it as next so need declaration
  int number;
  struct node *next; // pointers to next node
} node;

int main(int argc, char *argv[]) {
  node *list = NULL;
  for (int i = 1; i < argc; i++) {
    int number = atoi(argv[i]);
    node *n = malloc(sizeof(node));
    if (n == NULL) {
      return 1;
    }
    n->number = number;
    n->next = NULL; // pre-append to list
    n->next = list;
    list = n;
  }
  // print the nodes
  for (node *ptr = list; ptr != NULL; ptr = ptr->next) {
    printf("%d ", ptr->number);
  }
    printf("\n");

    // free up memory
    node *ptr=list;
    while (list!=NULL) {
        node*tmp=ptr;
        ptr=ptr->next;
        free(tmp);
    }
}
```
###### Time complexity of search=>O(n) as binary search not possible
###### Time complexity of insertion(appending at front) =>O(1)
![[Pasted image 20260228222231.png|310]] ![[Pasted image 20260228222321.png|303]]
###### Now appending at last =>O(n)
###### insert maintain a order =>O(n) as in worst case will transfer back fully to find place for insertion
###### search is still O(n) as can't to binary search on sorted linked list
## Trees
###### It gives speed of binary search and flexibility of linked list->by thinking in 2-dimension
###### Like a family tree/ tree diagram -> like divide and conquer built in==>
```
1|2|3|4|5|6|7
make it a tree
      |4|
   2|     |6|
|1| |3| |5| |7|
```
###### Make this nodes and connect by pointers ![[Pasted image 20260301180309.png|379]] It is tree storing what array stored
###### It helpful as here can do binary search easily->search for 5 =>"4->6->5"=> as height of the tree is 3 == log(base-2)(7)
###### It give the dynamism of linked list and binary search together=>take a lot memory 
```
typedef struct node{
	int number;
	struct node *left;
	struct node *right;
}node;
bool search(node *tree,int number){
	if(tree==NULL) return false; //gave empty tree
	else if(number < tree->number) search(tree->left,number);
	else if(number > tree->number) search(tree->right,number);
	else if(number == tree->number) return true;
	int middle=tree->number;
	
}

```
###### Binary search tree is a special tree where the children node of node 1 is greater than parent and one is smaller than the parent node
![[Pasted image 20260301185742.png|298]] ![[Pasted image 20260301185856.png|250]]
###### If number are inserted in a sorted order it becomes a linked list instead of binary search tree -->can make some code to balance this ![[Pasted image 20260301190118.png|249]]
###### So height of a balanced binary search tree is log(n)-> if unbalanced it can have O(n) for search
## Dictionaries
###### If can search in O(1) by giving each element a unique key.![[Pasted image 20260301190723.png|252]]
###### It is a key-value pairs(like in contact list name-number pairs) 
### Hashing
###### It is making unique simpler version of some input( e.g name is simpler version of the phone number of the person and it is unique )
###### Cards sorting by shots ![[Pasted image 20260301191028.png|292]] storing in buckets related cards=> reducing taking a particular card and storing it in a broader domain(like black 5 stored in black card bucket) 
###### Hash function :It is a function which does hashing->converting something bigger to smaller ranges(52 cards -> 4 bucket of 13 cards each)
###### Hash table : It is best of arrays and linked list. e.g like make a contact list bucket by alphabets![[Pasted image 20260301191730.png|37]]![[Pasted image 20260301191818.png|108]] two people with same start![[Pasted image 20260301192019.png|234]]
###### Most of character have O(1). Some where same 1st letter have more time look up
###### This is faster than linked list and faster than array by binary search.
###### Make faster store as per 2 initials (aa,ab,ac ..... zx,zy,zz)=> bring more close to O(1)
###### ![[Pasted image 20260301192537.png|246]] still collision look for 3 letter![[Pasted image 20260301192704.png|156]] problem being it is now taking a lot of memory
######  ![[Pasted image 20260301193003.png|205]]![[Pasted image 20260301193119.png|196]] hash table is an array
![[Pasted image 20260301193355.png|310]] ![[Pasted image 20260301193555.png|375]]
######  for a hash table, In worst case O(n) but best case omega(1) -->it depends on how smart is the hash function to lean toward O(1)
## Tries
###### It is true O(1). It is a form of a tree .try->short for retrial.
###### It a tree who nodes are arrays.![[Pasted image 20260301194345.png|448]]
###### ![[Pasted image 20260301194540.png|610]] run time of tries=>O(size of name)== O(1)
###### It takes huge amount of  memory if longest name is 50 char => (50 * 26 * (50+16+32)) * n bytes => and wastes many as hugely spare data structure ![[Pasted image 20260301195155.png|279]] ![[Pasted image 20260301195304.png|133]]not saving name as it is in path
###### It is always space and time trade off--> *there is no good solution there is always a trade off*
###### ![[Pasted image 20260301195521.png]] here two name one is extension of other (Daniel and Danielle)
###### It give worst and best case is O(1)
![[Pasted image 20260301195714.png|482]]  It is store where they sorted, if order by name Daniel they will put it in Box D-> it is a hash table, if two people with same name start stacking-> array of linked list(/ array as limited by ceiling).
