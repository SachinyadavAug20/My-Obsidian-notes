# MongoDB CRUD Operations

MongoDB's CRUD (Create, Read, Update, Delete) operations are fundamental for interacting with data in a database. These operations allow you to manage documents within collections.

Here's a breakdown of the core CRUD operations in MongoDB:

### Create Operations (Insert)
To add new documents to a collection, MongoDB provides the following methods:
*   **`db.collection.insertOne()`**: Inserts a single document into a collection. If the document does not specify an `_id` field, MongoDB automatically adds a unique `ObjectId` value.
*   **`db.collection.insertMany()`**: Inserts multiple documents into a collection. You pass an array of documents to this method.

If a specified collection does not exist, the `create` operation will create it when executed. Insert operations in MongoDB are atomic at the single document level.

### Read Operations (Find)
To query and retrieve documents from a collection, you can use:
*   **`db.collection.find()`**: Selects documents in a collection or view and returns a cursor to the selected documents. You can specify selection criteria (filters) using query operators and also define which fields to return (projection).
*   **`db.collection.findOne()`**: Returns a single document that matches the specified criteria.

### Update Operations
To modify existing documents in a collection, MongoDB offers:
*   **`db.collection.updateOne()`**: Updates the first document that matches a specified filter.
*   **`db.collection.updateMany()`**: Updates all documents that match a specified filter.
*   **`db.collection.replaceOne()`**: Replaces the entire content of a single document (except for the `_id` field) that matches a specified filter with a new document.

Update operations often use update operators like `$set` to modify field values, `$inc` to increment a field, or `$unset` to remove a field. The `upsert` option can be used to insert a new document if no document matches the update query.

### Delete Operations
To remove documents from a collection, you can use:
*   **`db.collection.deleteOne()`**: Deletes at most one document that matches a specified filter.
*   **`db.collection.deleteMany()`**: Deletes all documents that match a specified filter.

These methods replace the deprecated `remove()` method. When using `deleteOne()` or `deleteMany()`, you provide a filter document to specify which documents to delete.
