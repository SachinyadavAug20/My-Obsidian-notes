[Extruding - Blender Fundamentals 4.5 LTS - Blender Studio](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_extruding/)
![[Pasted image 20260330182933.png]]
###### ![[Pasted image 20260330201849.png]]
###### Learn by see the bottom panel see the possible options
![[Pasted image 20260330203305.png]]
###### Manifold is for better cut extrude
![[Pasted image 20260330204402.png]]
#### [Common obstacles and solutions](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_extruding/#common-obstacles-and-solutions)
- If you want to cancel (Esc or RMB) the extrude operation, it is better to Undo using Ctrl + Z to avoid overlapping mesh elements.
- Avoid extruding inward where faces are perpendicular, creating overlapping faces. Try to add "thickness" to your model by using the Inset operation
- Unless you want to separate the extrusion, it's not recommended to extrude edges out of solid shapes.
- In general, when you see "Z fighting" or jittery faces like this, there is usually something wrong with your mesh. Make sure not to overshoot your inset; it is the same for any operation that causes these errors.
- Be careful when extruding neighboring faces that create a very thin connection. There are multiple solutions, but using an Inset works fine.
##### Learning use I when E creates problem
