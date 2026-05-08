Open a new Blender file and add a new **Cube** object. As mentioned before, the orange dot is the **Pivot Point**, which is the point (anchor) of the object that Blender uses to transform (in most cases).

Enter  **Edit Mode** and select a single vertex.

###### Move the 3D cursor snap menu for it (Shift s)  =>  Use `Shift + S` to open the **Snap** **Pie-menu** (a pie-menu is a floating UI element where you can choose a “slice” to quickly select certain operations) and select the bottom one, **“Cursor to Selected”**. This will snap the cursor to the selected vertex. You can do this with any selection. If you select an edge, it will use the center of that edge, for instance. Experiment and continue when you are ready, and [read](https://docs.blender.org/manual/en/4.5/editors/3dview/3d_cursor.html) for more information.

Make the cursor snap to your selection and go to  **Object Mode** and go to the header **Object > Set Origin > Origin** to **3D Cursor**. Once you confirm, you can see that the pivot point has been moved to the **3D Cursor**. This is one of the ways that you can change the pivot point. Try to rotate or scale, and you will quickly see how this works.  ==> make so that act as origin for the that particular object

Another way is to add an object, this can be a **Cube** or **UV Sphere**. Snap the cursor to a point on the cube and go out of  **Edit Mode** and into  **Object Mode**, and select the other object. Go to **Object > Snap > Selection to Cursor**. As you can see, the object has been placed at the location of the cursor

There are multiple [**snapping options**](https://docs.blender.org/manual/en/4.5/scene_layout/object/editing/snap.html) in the menu that we have skipped, we encourage you to play around with the snapping options.
#### [Mini assignment](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_3d-cursor/#mini-assignment)

Create a single stack of Suzanne (  **Monkey**), going from big at the bottom to small at the top. Use the Transform tools or shortcut `G`, `R`, and `S` to achieve this and orbit around to make sure it could potentially stay upright. First, use `Shift + C` (or use the pie-menu **`Shift + S` > Cursor to World Origin** to snap the **3D Cursor** to the center of the world (which is 0.0.0) and add a plane. Now you can start stacking **Suzanne**!

