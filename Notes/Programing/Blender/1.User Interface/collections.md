**Collections** are sort of like folders (like on the desktop) to store data like objects, lights, cameras, and more. They are used to:

- Separate parts of the scene, think about a street with houses, with a street, walkways, trees, bushes, cars, houses, and utilities **collections**. Essentially organizing your scene to keep everything tidy.
- They are used for rendering to enable the visibility or influence other objects indirectly, this will be shown in the [**Compositing Techniques**](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_compositing-techniques/).
- **Collections** are used for [instancing](https://docs.blender.org/manual/en/latest/scene_layout/object/properties/instancing/collection.html) to efficiently reuse data.
Now simply hold `LMB` and drag the **“Sphere”** object into the **“Sphere”** **collection**. Do this with the **"Suzanne"** and **“Cube”** object too. You can also use `Shift` and `Ctrl` to increase the selection.
##### Excluding
Since our objects are placed inside collections, the **collection** decides if the objects inside are visible. There are different toggles (by default) / /  we can choose, but let’s keep it simple and “  uncheck” the **"Cube"** **collection**. This means that any object in this collection won’t be visible and rendered in our final image.

The **collections** are also "greyed out," meaning they are deactivated once you uncheck them. This concept of deactivation is common in Blender. It is good to know that if you see a parameter or other UI element in this state, any changes you try to make will usually not work unless you activate it again.
#### [Duplicating collection](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_collections/#duplicating-collection)

We can select the **“Suzanne”** **collection** followed by `RMB` > **Duplicate Collection**. This will create the same suffix as discussed earlier, since the names are identical.

#### [Deleting collection](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_collections/#deleting-collection)

You might think we can delete the “**Suzanne.001**” **collection** by using `X` or `Del`. But this will only delete the **collection**, not its contents. If you want to delete everything in the **collection**, use `RMB` > **Delete Hierarchy**. --> it will spread it at bottom.

#### [Color Tagging](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_collections/#color-tagging)

We can assign colors to the **collection** to make a better visual distinction. Let’s assign red to the **“Suzanne**” **collection** `RMB` > **Set Color Tag**. This way, you can organize all the Monkeys (Suzanne) into a single **collection**.
