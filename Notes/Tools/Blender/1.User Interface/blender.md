short cuts
- Use `Numpad .` to [**Frame Selected**](https://docs.blender.org/manual/en/4.5/editors/3dview/navigate/navigation.html?utm_source=blender-4.5.3-lts-release-candidate#bpy-ops-view3d-view-selected).
- Use `Shift + B` to [**Zoom Region**](https://docs.blender.org/manual/en/4.5/editors/3dview/navigate/navigation.html?utm_source=blender-4.5.3-lts-release-candidate#bpy-ops-view3d-zoom-border) drag a box and the view will zoom towards that region.
- `Numpad 1` to go to the Front view
- `Numpad 3` to go to the Right (side) view
- `Numpad 7` to go to the Top view

You will notice that the view projection is switched to **Orthographic** when using the numpad keys. Using the previous numpad keys by first holding `Ctrl + numpad-key` will reverse the view. So `Ctrl + numpad 1` will be the **Back** instead of the **Front**, try the other key combinations yourself.
--
The `Numpad + 2 or 4 or 6 or 8` will allow you to rotate the view in 15-degree increments. This isn’t something you will often use, but it is good to know that it is possible.
--
`Numpad 5` is used to switch between **Perspective** and **Orthographic**.
Most of these can be accessed using the `~` key, that will open a pie-menu.
```
If you want to align your view even faster without using the numpad, you can orbit using `MMB` normally, but introduce holding `Alt` to snap in 45-degree increments.
```
---
###### If you forget how a specific element of the interface is called, you can hover your cursor above it, and it will show a **tooltip** with the name and description.
###### A gizmo or widget is a way to interact with a tool; you can see it as the steering wheel of a car, by turning the wheel you rotate the front wheels.
###### Next is the Header, which contains menus, tools, and **3D Viewport** options.

![](https://studio.blender.org/files/ef/d9/efd9ecdca431cce98dc72196b58d2755-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=WPXVUIKB8MLIOWB7INUX%2F20260315%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260315T064427Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=859def1b50617aa9e0a5a94094eda33bfba16d4adfa2b2a0d318a5990beb1533)
###### Place your mouse inside the **3D Viewport** – this is important because Blender works based on context to know which functions to run – and use the `T` to open (or close) the Toolbar. The Toolbar is also context-sensitive based on what mode you are in (we are in [**Object Mode**](https://docs.blender.org/manual/en/latest/editors/3dview/modes.html).
###### At the bottom of the Toolbar, you can use the **“  Add Cube”** tool. Notice how your mouse now has a circle and a highlighted grid when you move the cursor across the grid.
###### The next is the **Sidebar** `N` that displays the **Item, Tool,** and **View** tabs (and many more depending on installed addons).
You can: in properties tab
- Scale elements in a single editor using `Ctrl + MMB` drag
- Re-order the individual tabs by using the row of dots to drag the order
- Collapse tabs by clicking on the arrow (or by using `A`)
- Drag regions inside the other editor to occupy more space
######  a circle with a white and red checker pattern with black lines. This is called the **3D Cursor** and is an essential tool in Blender to specify the location or sometimes rotation for certain operations. We will talk about the **3D Cursor** later on in this chapter. The **3D Cursor** is:

- Telling Blender where to add objects
- Integral part of the general Blender workflow
- Can be hidden but not deleted
- Won’t be visible in the final render
#### [Move](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_selecting-transform/#move)

Open the **Toolbar** `T` and select the **Move Tool** in the top left corner. The selected object has a new gizmo, which is specifically for moving the object. Use the `LMB` to drag the arrow to move the cube on that axis.
#### [Rotate](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_selecting-transform/#rotate)

Change the **Move Tool** to the **Rotate Tool**. The gizmo changed to these colored arches, which indicate the axis the cube can be rotated. Rotating the cube shows the number of degrees the cube has been rotated in the top left corner. The white circle is able to rotate the cube in screen space. Selecting the darker part of the gizmo allows for **Trackball** rotation, which allows rotating the object to be rotated more freely.
#### [Scale](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_selecting-transform/#scale)

Once you have explored rotating the object, we will switch to the **Scale Tool**. This tool is quite similar to the **Move Tool** to scale constrained along a plane. Use the white circle to scale the tool uniformly.
#### [Transform](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_selecting-transform/#transform)

Which is the tool below the **Scale Tool** that allows the functionalities of almost all the previous three ones into a single tool.
#### Shortcuts
The following shortcuts can be used both in  **Object and  Edit mode** to achieve the same thing, but faster (I removed the previous cube and added a new one):

- Move by using `G` to **"Grab"** the selection
- Scale by using `S`
- Rotate by using `R` and using `R+R` (R twice) for [**Trackball**](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/transform/rotate.html#trackball-rotation) rotation
After pressing one of the shortcuts, you can constrain it to an axis like the previous method. To move the selection, simply press `G` followed by any axis, such as `X`, to only change the selection on the X-axis.
You can change the axis again after pressing another. Once you are satisfied with the transformation, use `LMB` to confirm. You can cancel the operation using the `RMB` or pressing `Esc`.
Play around and get used to these shortcuts. These shortcuts work in other editors in Blender too, which makes them an essential part of the Blender workflow.
You can change the axis again after pressing another. Once you are satisfied with the transformation, use `LMB` to confirm. You can cancel the operation using the `RMB` or pressing `Esc`.
![[Pasted image 20260316185014.png]]
#### [Transform Orientations](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_selecting-transform/#transform-orientations)

So far, we have been using the **Global** [**Transform Orientation**](https://docs.blender.org/manual/en/4.5/editors/3dview/controls/orientation.html?utm_source=blender-4.5.1-lts#bpy-types-transformorientationslot-type) to move, rotate, and scale. But, there are other orientations that can be useful.

Use the default cube and go to the top right corner and enable the [**Move Viewport Gizmo**](https://docs.blender.org/manual/en/4.5/editors/3dview/display/gizmo.html?utm_source=blender-4.5.1-lts#object-gizmos). This will enable the **Move** gizmo to be visible as long as this option is toggled.

Rotate the cube 45 degrees or more on the **Z** axis. By pressing `Z` and typing **45**.

Go to the **Transform Orientations** and switch to **Local**. Notice how the **Move** gizmo is now oriented and aligned with the cube. This is because we transformed the cube "locally".
Now, reset the transformations of the cube, setting it to zero by opening the **Sidebar** `N`, selecting one of the parameters and typing either **0** or using `Backspace` (hovering the cursor above it) to reset all three parameters simultaneously.

Rotate the cube again, but this time do it in  **Edit Mode** using the **Local** orientation. Notice how the gizmo isn't aligned anymore. We can fix this by switching to **Normal**.

### [Units](https://docs.blender.org/manual/en/4.5/scene_layout/scene/properties.html?utm_source=blender-4.5.1-lts#bpy-types-unitsettings-scale-length) in Blender have three options:

- None, which is basically metric behind the scenes without showing metric units
- Metric system
- Imperial system

Depending on your goals, whether it is Architectural Visualization, 3D printing, or creating low-poly art, you can decide if you like to work in real-world units. For this course, we use Metric with Separate Units enabled to make it easier to differentiate between larger and smaller values.

If you want to enable a specific unit system, follow these steps:

Close Blender if you have it open and open a new Blender instance.

Go to the  **Scene Properties** and open the **Units** tab. Choose your **Unit System** and any other options you want to enable

Then, finally go to the top left corner **File > Defaults > Save Startup File**, you will get a prompt asking if you want to confirm the changes and choose **Overwrite**. Any other changes you have made – even orbiting around an empty scene or adjusting windows - will be saved too.
#### [Mini assignment](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_selecting-transform/#mini-assignment)

Try to recreate this with transforming and duplicating cubes.
#### [Solution](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_selecting-transform/#solution)
