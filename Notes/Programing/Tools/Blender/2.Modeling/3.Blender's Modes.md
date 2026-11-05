When we open a new Blender file, delete everything (`A` to select all, `X` to delete) and add a  **Monkey**, we have six modes to choose from (there are more, but these are the most common). They are:

-  [**Object Mode**](https://docs.blender.org/manual/en/4.5/scene_layout/object/index.html) = default mode allows simple transformation and viewing the model
-  [**Edit Mode**](https://docs.blender.org/manual/en/4.5/modeling/index.html) = allows changing the [**"topology"**](https://docs.blender.org/manual/en/latest/glossary/index.html#term-Topology) into complex shapes
-  [**Sculpt Mode**](https://docs.blender.org/manual/en/4.5/sculpt_paint/sculpting/index.html) = allows more organic manipulation of the model, useful for characters
-  [**Weight Paint Mode**](https://docs.blender.org/manual/en/4.5/sculpt_paint/weight_paint/index.html) = mostly used for rigging to assign values to bones, more on this in the rigging chapter. But it can also be used to determine where to add hair, grass, and rocks using a particle system
-  [**Vertex Paint Mode**](https://docs.blender.org/manual/en/4.5/sculpt_paint/vertex_paint/index.html) = can be used for shading
-  [**Texture Paint Mode**](https://docs.blender.org/manual/en/4.5/sculpt_paint/texture_paint/index.html) = allows adding complex image based details

In this chapter, we will mainly focus on  **Edit Mode** and how to create more complex models using various tools and techniques.

 #####  Sculpt Mode

Using `Ctrl + Tab` will open a pie-menu, just like the snapping options in the previous chapter, but with different functionalities. First  **Sculpt Mode**. Notice how the Toolbar changes and a new **"Asset Shelf"** at the bottom pops up. You can select brushes in the Toolbar or in the Asset Shelf. Using a **"Grab"** brush (`G`) we can stretch out Suzanne's ears or change the mouth. For this video, we are working with a drawing tablet that makes it easier to do this. In the **"Sculpting"** chapter, we will go in-depth.

#####  Texture Paint Mode

We can change our brush to any color to add texture detail to our model. The painted texture is saved to an image like a .png.

#####  Weight Paint Mode

This creates a gradient from blue (true zero value is black, but blue is zero too) to red. This data is saved on the mesh and not to an image like **Texture Paint Mode**.

#####  Vertex Paint Mode

This allows for painting with any color and is mainly used in shading, but can also be read with Geometry Nodes. As you can see, it has the same "resolution" as **Weight Paint Mode** since this is also stored on a mesh-level. In older video games, they would color different parts of the world using Vertex Paint.

---
Using `Ctrl + Tab` will open a pie-menu, just like the snapping options in the previous chapter, but with different functionalities. First  **Sculpt Mode**. Notice how the Toolbar changes and a new **"Asset Shelf"** at the bottom pops up. You can select brushes in the Toolbar or in the Asset Shelf. Using a **"Grab"** brush (`G`) we can stretch out Suzanne's ears or change the mouth. For this video, we are working with a drawing tablet that makes it easier to do this. In the **"Sculpting"** chapter, we will go in-depth.

---

