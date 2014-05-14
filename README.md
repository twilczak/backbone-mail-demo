backbone-mail-demo
==================
This is my Backbone Demo. There are many like it, but this one is mine.

Simple Mail Client Demonstrating several backbone features.

### v0.4.0 Additional Message Operations and Decoupling:

   - **MessageControls.js**: controls toolbar state
   - **index.js**: initializes event bus to communicate between components 
   - **Router.js**: 
     1. Fires messages on event bus when hash state changes.
     2. Responds to delete (remove delete entry)
   - **AppView.js**: move clearMessage to MessageReader
   - **MessageReaderView.js**: responds to delete message events. 
   - **MessageListView.js**: still backed by collection, renders when a message is deleted.
 

### v0.3.0 Add Message Reader and Routing:

   - **MessageReaderView.js**: uses existing message model, but different template.
   - **Index.html**: message template now contains a link 
   - **Router.js**: maps url hashes to functions
     1. Rarely more than one per application.
     2. Each function is called when the hash changes & the application responds in some way.
        Might show or hide views - in our case it displays specific messages
     3. Delegates to application which knows how to manage the application state. 
   - **AppView.js**: Still coordinating components

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
     1. Any global js initialization or config can be performed here.  
   - **AppView.js**: Base application view - coordinates components needed for our mail client.    
   - **MessageListView.js**: Renders a preview list for sent messages.
     1. Delegates message rendering to MessageListItemView.js
   - **MessageListItemView.js**: Renders a preview for an individual message.
   - **Message.js**: Model object which contains message data.