## Switches
###### it is cables which are spread over the seas ![[Pasted image 20260214143914.png]]
###### Use a switch, Switch is a device which helps to connect devices in same environment together
###### ![[Pasted image 20260214144238.png]]
 ###### her CAT => category 
 ###### Need wires to connect devices which are fiber optics or copper cable
## Wire-less
###### Need to connect to some Access point not a switch ![[Pasted image 20260214144600.png]] 
###### This computers are connected to the network so they can share information![[Pasted image 20260214144932.png]]
###### ![[Pasted image 20260214145008.png]]
###### Switch :- It helps to connect the device together with cable
###### Any communication between the PC-1 and PC-6 is done via the switch in form of packets
###### ![[Pasted image 20260214211801.png]]
###### This is a switch can have many ports depending on the manufactures, higher number of ports higher the price called as LAN ports
###### LAN port are there of computer to connect to the switch ![[Pasted image 20260214212023.png]]
## Router
![[Pasted image 20260214212450.png]]
###### ![[Pasted image 20260214212546.png]]
![[Pasted image 20260214212831.png]]
###### If a computer can send and receive packets from the internet then this computer is connected to the internet
###### Router receive all packages going to internet, There are ports on the router.![[Pasted image 20260214221957.png]] The white special cable is for internet connection provides by ISP
## Internet represent
###### ![[Pasted image 20260214222356.png]]
###### This is a simplified model.it is way more complex in real life
###### There are many router of the internet => router is the device used to communicate with the internet in same as connecting to other LAN
###### ![[Pasted image 20260214223217.png]]
###### Internet is the way to connect all the LAN in world together
###### There are many routers in the internet.instead of 1 big router ![[Pasted image 20260214232154.png]]
###### If there are only 1 PC or more which are not inter-connected => use home router, which acts as switch and router together
###### ![[Pasted image 20260214232507.png]] ![[Pasted image 20260214232648.png]]
###### If there are to many devices in environment home router won't be enough then need switch
###### If there is only 1 router => all are supposed to be connected to it but, it is not possible.![[Pasted image 20260214233159.png]] ![[Pasted image 20260214233327.png]]
###### Solution to this is the many router ![[Pasted image 20260214233420.png]]
###### Why there are many router instead of one big router? =>
###### 1.Mess minimised since not many cable are are connected to router in the distributed structure => avoid overloading of router
###### 2.Load balance process is very efficiently.If some router break the internet won't stop only it's efficiency will decrease ![[Pasted image 20260214234232.png]]
###### 3.The world is connected by underwater wires ![[Pasted image 20260214234321.png]]
###### ![[Pasted image 20260214235445.png]] ![[Pasted image 20260215000842.png]]
######  ![[Pasted image 20260219200752.png]] This wire was cut by a ship and it lead to turn off of internet for many countries
###### ![[Pasted image 20260219201026.png]] This cables also get stolen ![[Pasted image 20260219201120.png]] ![[Pasted image 20260219201142.png]]
###### There are cables on land of Russia which are not shown in this image as only underwater => which are fibre optic cable which uses light speed for being fast 
###### Don't use copper cable as length increases it's error increase by square so not used
## How a packet moves over internet
###### ![[Pasted image 20260219201845.png]]
###### Package => switch(understands it should go to internet(i.e router))  => router(see packages destinations is not in this LAN1 so go to internet) =>Then it has many router option but where to go from here decided by "Router table"
###### ![[Pasted image 20260219204039.png]] This table has all possible paths ![[Pasted image 20260219204147.png]] This operation called as "Forwarding" => ![[Pasted image 20260219204301.png]]
###### Router pre-decide some paths as not an option(example path back is not option as going back is not forwarding) called as router filter ![[Pasted image 20260219204516.png]] ![[Pasted image 20260219204600.png]] ![[Pasted image 20260219204713.png]] and so on till reaches a switch of some other LAN where it originally has to reach
###### Note path chosen by the router is not always the most sortest(looking) path it is the path suggested by the algorithm which as many variables ( router want to delevier the package to its destination as soon as possible ) ![[Pasted image 20260219205209.png]] other variable like traffic(busy path means long queue) called congestion control
###### We can communicate with distance devices other side of the word via internet in milliseconds
###### Therefore, internet is the network of networks. ![[Pasted image 20260219210459.png]]
###### It is the connection of all LANs![[Pasted image 20260219210235.png]]
###### Generally, there is a cloud(![[Pasted image 20260219210720.png]])
## Internet to computer
###### ![[Pasted image 20260219210933.png]]
###### Here only router as only 1 device and not need a switch
###### ![[Pasted image 20260219211403.png]]
###### If it is a continuous file(massive file) it is not in single go it is continuous send ![[Pasted image 20260219211757.png]] ![[Pasted image 20260219211905.png]] ![[Pasted image 20260219211928.png]] The size of this packages varies as per our speed of the internet
###### The special Computers(server) has very powerful PC(Ryzen Threadripper) Which handles all requests for this website![[Pasted image 20260219212415.png]] There are many server to handle all requests ![[Pasted image 20260219212548.png]] .According to your location router choices closest server to your home=> all serves for same data serves the same data no matter where you connect
## WAN(wide area network)
###### ![[Pasted image 20260219213312.png]]
###### example have a company has many offices around the world we want them to be connected.
###### ![[Pasted image 20260219213802.png]] This is a special network between our LANs![[Pasted image 20260219213926.png]]
###### ![[Pasted image 20260219214012.png]] This LANs are already connected as internet
######  If able to communicate over internet why need a WAN ??
###### =>![[Pasted image 20260219215012.png]] needs security over
###### => Inter LAN transfer are have no problem as it is private ![[Pasted image 20260219215917.png]] No guarantee of secure transfer 
###### There are many methods to setup a WAN. Most popular is using VPN ![[Pasted image 20260219220110.png]] It simply encrypts our data before sending it over the internet ![[Pasted image 20260219220755.png]] ![[Pasted image 20260219220929.png]] Still ![[Pasted image 20260219221008.png]]
###### The packages it encrypted only if it has to other site(part of our WAN) and decryption key are with that site(LAN) so it can read the packet Thus, it is called as Site-to-Site VPN![[Pasted image 20260219221445.png]] analogous to putting it in a lock and giving the receiver the key to open it. => even then there are possible loss but not leak of data (encrypted data is non-understandable data) ![[Pasted image 20260219225443.png]] ![[Pasted image 20260219225546.png]]
###### ![[Pasted image 20260219225647.png]] is it secure to use internet as service providers(Whatsapp, Facebook,  Gmail etc) make sure secure package transfer ![[Pasted image 20260219225954.png]] only end points can de-crypt the data and see it. 
###### ![[Pasted image 20260219230405.png]] ![[Pasted image 20260219230453.png]]
###### Internet itself is the biggest WAN in the world
## Router
![[Pasted image 20260303203948.png|697]]
![[Pasted image 20260303204106.png]]
###### To create a LAN distance must be short --> called as Campus area network(CAN) it is special type of LAN. Can also connect this by WAN![[Pasted image 20260303204421.png|286]]
###### Which is more secure "WAN with VPN" or "LAN/CAN" ? LAN is more secure.

###### ![[Pasted image 20260303204733.png]] "private WAN" done using dedicated lines ![[Pasted image 20260303204837.png]]
###### LAN->switch and WAN->router ==> We cannot create a WAN using traditional switch device
![[Pasted image 20260303210533.png|697]]
## Router
###### The main task of the router is to connect different networks.The location of these networks does not matter. ![[Pasted image 20260303210825.png|580]]
###### router can allow communication between LAN 1 and LAN 2
######  Different cables of router are connected to different networks ![[Pasted image 20260303211036.png|311]]
###### Dividing this computers into units increases order
## ISP( Internet service provider )
###### Internet cable we got from the ISP
![[Pasted image 20260303211538.png]]
###### It is responsible for the transmission of packages from 1 location to another![[Pasted image 20260303211810.png]]
###### Router distributed around the world are controlled by this ISP.
######  Each ISP is responsible for specific router.
###### ISPs represent companies that enable us to connect to the internet for money.There are millions of ISP connected together
###### Local ISP : Responsible for small area communication ![[Pasted image 20260303220353.png|171]] .local ISP offices called as Point of presence(POP) ![[Pasted image 20260303220524.png|380]]
###### There are routers and other devices in This POP ![[Pasted image 20260303220642.png|530]]
![[Pasted image 20260303224242.png|465]]
![[Pasted image 20260303224343.png|469]] This POP's connect many local neighbour ![[Pasted image 20260303224801.png|441]] ![[Pasted image 20260303224849.png|445]]![[Pasted image 20260303225019.png|243]] ![[Pasted image 20260303225207.png|412]]
###### Local ISP connect to Regional ISP not to other local ISP directly as this will break the hierarchy of ISP(not to make a web(complexity increases) make a tree(organised))
![[Pasted image 20260303225708.png|310]]![[Pasted image 20260303225915.png|363]]![[Pasted image 20260303225938.png|536]]
###### Some companies provide fast connect to there region be directly connecting ![[Pasted image 20260303230546.png|650]]
![[Pasted image 20260303230943.png|476]]![[Pasted image 20260303231032.png|226]]![[Pasted image 20260303231508.png|435]] Path for the message is decided on the way ![[Pasted image 20260303231616.png|326]] ![[Pasted image 20260303231644.png|371]]
###### ![[Pasted image 20260303231713.png]] to provide efficient and faster service to the costumer![[Pasted image 20260303231823.png|314]]![[Pasted image 20260303231904.png|167]]
###### Google sometime finds its communication with users slow. -> solution is peering ==>Google establishes an almost direct connection with the user![[Pasted image 20260303232131.png|200]]
###### Due to peering the packet pass through mush less POP(security increases) ![[Pasted image 20260303232423.png|260]] due to ![[Pasted image 20260303232505.png|188]] ![[Pasted image 20260303232557.png|324]] as it is not as strong as google. Udemy doesn't does peering
###### Global ISP-> are international communication.
###### If have a lot of money start a global ISP company is a good idea makes big profit as they are internet backbone. ![[Pasted image 20260303234547.png|285]] You can directly connect to ![[Pasted image 20260303234629.png]] can connect to regional or global ISP directly.