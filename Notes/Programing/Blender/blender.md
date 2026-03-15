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
###### 