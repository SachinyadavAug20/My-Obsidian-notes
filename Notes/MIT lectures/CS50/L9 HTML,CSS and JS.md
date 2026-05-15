###### Internet : it is a technology
First image of internet was this 4 inter-connected computers
![[Pasted image 20260514185324.png]]

###### Dotes are routers which connect one computer to other 
###### to transfer data we need to make routing decisions(how data should move) handled by ISP. by using IP and TCP address system.
## TCP and IP
###### It is protocol/rule which tells the computer at location where the data should go
###### IP is set of convection what to do when something happens
###### IP -> tell all computer connected to internet have a unique address called IP address --> #.#.#.# (address 0<#<255 i.e # is 8 bit)
###### IP address is 32 bit -> we can have 256^4 = 4,294,967,296(4 billion) computers on internet at once 
###### It happens to be less than need so new version IPv6 which is #.#.#.#.#.# (total 256^6 = 618 Trillion computer)
###### each packet carries info about where to reach and how to reach
###### TCP(transmission control protocol) :- what is type of internet server need.--> web(part of internet).It is port number. example :
- 80 -> HTTP
- 443 -> HTTPS (secure/encrypted)
- 53 -> DNS
- 22 -> SSH
###### TCP -> big data file are fragmented and send in fragments and tell info how to re-arrange (if router drops package(due to traffic it will check all packages integrity, and ask what is missed not full download again and got all then receiver acknowledge it))
## DNS (domain name system)
###### IP address is not memorable(like phone numbers) similar name->IP table is made in DNS.
###### DNS -> is collection of servers who convert domain name to IP address
###### world wide DNS/Top level domain --> .com .edu .in .ru .us
###### smaller DNS server own by local institution and also home router is also a local cached(stores frequent used domain:IP for speed) DNS.
###### DNS -> hash table of domain![[Pasted image 20260515230310.png]] fully qualified -> https://www.samtagon.in like full names
# Protocols
## HTTP/HTTPS(hyper text transfer protocol secure)
###### it is at beginning of every URL visited.It is most famous
###### web is a server running on the internet.
###### 