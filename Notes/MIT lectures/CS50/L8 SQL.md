###### It continue python.We have to deal with data of different forms and types.Lots of data.
###### It is possible to handle data using python but it will be alot of work.Use a specialised language of it. => use SQL(structure query language)
###### It another language to manage alot of data.=> Learn to learn any language.
###### Go to cs50.ly/favorites => survey data is very large ![[Pasted image 20260307152238.png|360]]![[Pasted image 20260307152300.png|300]]
###### It data to answer question =>(no. of student with python). => simplest data base in the world is a .csv file ![[Pasted image 20260307152632.png|446]] python supports handling of CSV to read and write in CSV
```
$ open favorite.py
import csv

with open("favorite.csv","r") as f:
	# load the csv file
	reader=csv.reader(file)  # In docs, it give back special object treat as collection of line, where line is list of all cells
	for row in reader:
		faviouratLan = row[1]
		print(faviouratLan) # it prints language
```
![[Pasted image 20260307153628.png|272]]![[Pasted image 20260307154027.png|270]]
```
import csv

with open("favorite.csv","r") as f:
	# load the csv file
	reader=csv.DictReader(f)  # In docs, it gives dictionaries
	for row in reader:
		faviouratLan = row["language"]
		print(faviouratLan) # it prints language
```
```
import csv
# calculate populatrity of language
score={}

with open("favorite.csv","r") as f:
	# load the csv file
	reader=csv.DictReader(f)  # In docs, it gives dictionaries
	for row in reader:
		faviouratLan = row["language"]
		if faviouratLan in score: # to avoid error
			score[faviouratLan]+=1
		else:
			score[faviouratLan]=1 # seeing a language for 1st time
print(f"Scratch {score["scratch"]}\nC {score["c"]}\npython {score["python"]}")
		
```
###### Can sort by `sorted(score)` in lexicographical order, to sort by scores magnitude.=> by a function as a key![[Pasted image 20260307163124.png|428]]
```
import csv
# calculate populatrity of language
score={}

def get_count(language):
	return score[language]

with open("favorite.csv","r") as f:
    # load the csv file
    reader=csv.DictReader(f)  # In docs, it gives dictionaries
    for row in reader:
        faviouratLan = row["language"]
        if faviouratLan in score: # to avoid error
            score[faviouratLan]+=1
        else:
            score[faviouratLan]=1 # seeing a language for 1st time

for key in sorted(score,key =get_value,reverse=True):
    print(f"{key} : {score[key]}")
```
###### But made a function for using it only once so use lambda(anonymus) function  `lambda language:score[language]`
```
import csv
# calculate populatrity of language
score={}


with open("favorite.csv","r") as f:
    # load the csv file
    reader=csv.DictReader(f)  # In docs, it gives dictionaries
    for row in reader:
        faviouratLan = row["language"]
        if faviouratLan in score: # to avoid error
            score[faviouratLan]+=1
        else:
            score[faviouratLan]=1 # seeing a language for 1st time
for key in sorted(score,reverse=True,key=lambda language:score[language]):
    print(f"{key} : {score[key]}")
```
###### Now by doing small changes can do a for problems
```
import csv
# calculate populatrity of problem
score={}


with open("favorite.csv","r") as f:
    # load the csv file
    reader=csv.DictReader(f)  # In docs, it gives dictionaries
    for row in reader:
        faviouratLan = row["problem"]
        if faviouratLan in score: # to avoid error
            score[faviouratLan]+=1
        else:
            score[faviouratLan]=1 # seeing a problem for 1st time
    
favorite=input("Favorite : ")
if favorite.capatalize in score:
	print(f"{favorite} : {score[favorite]}")
```
###### It is many lines of code for managing the data so it is good to use a different language "Get the right tool for the job"
## Data base
###### Flat file data base => It is text CSV image file etc.
###### Relational data base => It is most popular way of handling large amount of data(like google meta and etc).
###### There are SQL ,no SQL ,OPP DB ,MySQL ,PostgreSQL ,MongoDB, Azure ,Oracal DB etc
###### It all is same way data stored in rows and column, In tables form.
## SQL
###### It can do CRUD(create read update delete) operations.Operations are of form CREATE,INSERT,SELECT,UPDATE,DELETE,DROP ![[Pasted image 20260307173051.png|189]]
```
CREATE TABLE table (column type,...)
```
###### ![[Pasted image 20260307174045.png|267]] ![[Pasted image 20260307174141.png|198]] 
![[Pasted image 20260307174813.png|410]] ![[Pasted image 20260307175546.png]]
![[Pasted image 20260307180454.png|470]]
###### . commands are SQL specific commands. The .schema give the schema of the DB like what data types stored in what column of what heading 
`Schema => design of the database what are tables and columns`
###### Can select a column in SQL by ![[Pasted image 20260307182530.png|238]] here all capital things are SQL syntax and small are our name. * means give everything![[Pasted image 20260307183018.png|197]]![[Pasted image 20260307183128.png]]![[Pasted image 20260307183604.png|408]]
######  Functions which are built in SQL ![[Pasted image 20260307184029.png|119]] simple and useful![[Pasted image 20260307192106.png|318]] To see how many unique language are there ![[Pasted image 20260307192259.png|308]] can combine commands ![[Pasted image 20260307192432.png|518]]
###### Output of this basic functions are temporary tables only.![[Pasted image 20260307193248.png|556]]
###### For getting headers and column like ASCII art use 
```
.headers on
.mode column   -> make simple colum
# OR
.mode table     -> make full ASCII table

.mode list     -- default simple list
.mode column   -- aligned columns
.mode table    -- ASCII table
.mode box      -- nicer box style
.mode csv      -- CSV format
.mode json     -- JSON output
```
###### AS -> for nickname the table output of a query.
###### Some more commands in SQL
```
WHERE        -> filter conditional
LIKE         -> similar to something
ORDER BY     -> sorting
LIMIT        -> see limited no of rows 
GROUP BY
...
```
###### In SQL always use ' for literal strings ![[Pasted image 20260307194822.png|376]]
![[Pasted image 20260307195015.png]]
###### `SELECT language,COUNT(*) FROM favorite GROUP BY language;` here, select give 2 column table of language and count from table GROUP BY(means show 1 language i.e 1st column unique entries only) ![[Pasted image 20260307200144.png|686]]![[Pasted image 20260307200850.png]]
###### If need only 1 language LIMIT 1
###### Insert a data in the table `INSERT INTO tablename (column,..) VALUES(value,...);` example ![[Pasted image 20260307201644.png|604]]
###### Can update -> change c to cpp by `UPDATE tablename SET column=value WHERE condition;` ![[Pasted image 20260307202343.png]]
###### If added no condition it will set every row to cpp i.e replace all language with cpp (This is dangerous mistake you can do , so do backups regularly) -> It is simply find and replace
###### DELETE -> deletes rows from tables `DELETE FROM tablename WHERE condition;`
![[Pasted image 20260307202937.png]]
###### It is very destructive operation in SQL. If did `DELETE FROM favorite;` delete all rows from database
###### There are other more complex database in the world. -> like IMDb (internet movie data base) It is millions of rows -> ![[Pasted image 20260307203704.png]]
###### This is a 6 table DB from IMDb. This is a entity relation diagram => each box is a table and arrow shows some relation.
###### file `shows.db` => e.g shows is connected to genres table(can be one or more).why not add genres in shows table as a column? => then pick a genes for one id ,but movies are from multiple genres at the same time.(One to one relation) -->similar for rating => making relation
###### In SQLite is a lite weight version of SQL for mobile apps and other small things

```
SQL data types
BLOB      -> binary large object
INTEGER   -> integer
NUMBERIC  -> formated number yy/mm/dd
REAL      -> float
TEXT      -> strings
...
```
###### To protect from cells can be ,like in previous table we did added a "SQL" and "SPOT" as language and problem but left the time column null.If time column is make TEXT NOT NULL then this behaviour is prevented 
```
NOT NULL    -> cells can't be NULL
UNIQUE      -> very row in column is unique
```
###### Primary key for a table is some column of the table.![[Pasted image 20260308171002.png|205]]
######  ![[Pasted image 20260308175034.png|273]] peoples and shows table connected by stares table
![[Pasted image 20260308181714.png]]
![[Pasted image 20260308182129.png]] It combines query and order of operation is followed here.
![[Pasted image 20260308182347.png]]
![[Pasted image 20260308182444.png]]
###### How to know how to get all movies from Steve Carell 
![[Pasted image 20260308190045.png]]
![[Pasted image 20260308190804.png]]
![[Pasted image 20260308190946.png]]
###### To know all genres of a show ![[Pasted image 20260308191204.png|375]] `JOIN` It is powerful keyword in SQL ![[Pasted image 20260308193718.png]] ![[Pasted image 20260308194549.png]]
###### Join distributed data together by using. SQL queries
###### ![[Pasted image 20260308195300.png]] can do implicit joint ![[Pasted image 20260308195605.png]] 
###### Can % symbol to say in string after it 0 or more characters ![[Pasted image 20260308200139.png]]
## Indexes
###### For frequently used data can be indexes.Make new column for index it and get frequent access. This are searched linearly.
`.timer on` show time taken by each query ![[Pasted image 20260308201540.png|365]]
###### By indexing can reach log search time