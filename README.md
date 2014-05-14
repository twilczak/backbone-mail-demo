backbone-mail-demo
==================
This is my Backbone Demo. There are many like it, but this one is mine.

Simple Mail Client Demonstrating several backbone features.

### v0.2.0 Add collection and fetch:

   - **MessageCollection.js**: List of message model objects.
   - **AppView.js**: Still coordinating components: 
     1. Initializes collection.
     2. Passes message collection to MailListView.
     3. Calls fetch() on collection.
   - **MessageListView.js**: Now bound to a collection:
     1. Reference to collection is automagically set by Backbone.
     2. Listens for events on collection
     3. Renders message objects once collection has them.  

### v0.1.0 Baseline mail client:

   - **Index.js**: Root js file - initializes application.  
      (Any global js initialization or config can be performed here.)  
   - **AppView.js**: Base application view - coordinates components needed for our mail client.    
   - **MessageListView.js**: Renders a preview list for sent messages.
     1. Delegates message rendering to MessageListItemView.js
   - **MessageListItemView.js**: Renders a preview for an individual message.
   - **Message.js**: Model object which contains message data.