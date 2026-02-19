##### Game dev is more about expectation management
##### Assets=**anything that is NOT code**
###### **CC0** (Creative Commons Zero) = "I give up all my rights. Use this however you want."
###### CC-BY = "You can use it, BUT give me credit"
###### CC-BY-SA(Share Alike)  "Risky for commercial games"
###### CC-BY-ND (No Derivatives) = "Very restrictive → avoid."

## Node
In Godot everything is a node.![[Pasted image 20260129155052.png]]
Some nodes display image, sound, rigid body etc.
## Scenes
Collection of nodes to manage it.(Bundle nodes to reusable packages)
A scene can be a player, sword, menu ,level , A single coin
Can put scene in scene by nesting![[Pasted image 20260129155628.png]]![[Pasted image 20260129155826.png]]
![[Pasted image 20260129155704.png]]

### Tile map
This a way to divide the world into tiles make levels easily and do ease to use from tile set repeatedly 
![[Pasted image 20260129163626.png]]
![[Pasted image 20260129163709.png]]When adding colliders to the tiles be carefully with connecting so player don't get stuck
platform moving is animatable body 2D

Make platforms moving==> AnimatableBody2D (on way collison)

```
Note : In sense trees things are drawn from top to bottom so (Layer it keep player at bottom so it is always on top)

or can do ordering z-index in player property(by deafult all are zero) for same z-index it will follow the sense tree logic
```
Use animation player to make  any simple animation(give key frams it will make animation)
Area2D==> don't want to collide node but detect if collided 
       =>It has a layer and mask
drag and drop components in script press ctl+shift on releasing it creates a variable pointing at that node path
### Path
A way to get from 1 node to another![[Pasted image 20260130193341.png]]
Make basic node to organise things together
## layers
make layers in tiles mid,background, brackground on top so it will be drawn first 
### Frames
draw as many frames as possible
before drawing a frame need to update the state of the game
This process of the Draw->update->repeat is GAME LOOP![[Pasted image 20260130223932.png]]
It happens automatically but can add functionaliy to it by :
![[Pasted image 20260130224148.png]]
_ready() runs only once![[Pasted image 20260131090555.png]]
![[Pasted image 20260131090612.png]]
As different devices have different fps we use delta![[Pasted image 20260131090822.png]]
time elapsed btw last frame and current frame
![[Pasted image 20260131090934.png]]This makes movement independent of delta
When player hit enemy and dies remove player collided so looks like he fall of the map
Physics_process runs 60 fps by default 
![[Pasted image 20260131094220.png]]
### Actions
![[Pasted image 20260131094453.png]]
can bind keys to this actions (can bind multiple keys)
### Story
Can make text part of world / UI
As label and text node
## Game Manager
Create a node Game-manager and add all global variable like scores and points etc
If a something is unique mark it as unique and get % sign next to it.
easy to get reference Get %Game Manager Note ($../../GameManger).
## Audio
It has AudioStreamPlayer2D 
use audio mixer and make it low volume ==> make music bus for each type of music
The audio restart when player dies and scene reloads
make it a scene and auto-load persistens
## Export 
Export the game to share with others
Install export template
