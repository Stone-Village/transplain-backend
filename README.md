# Transplain backend

## Database Schema

Two main items in the database: the User and the Article. 

The User will contain multiple Bookmark items, which contain the link, id, tags, and title of an article.

The User and Article items will contain Tag items, which contain an id and string name.

The Article will contain a title, author, post date, body text, and Tags.

![database diagram](/database-diagram.png)
