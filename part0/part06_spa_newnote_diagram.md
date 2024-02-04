```mermaid
sequenceDiagram

participant browser
participant server

browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
note left of server: Browser sends note and date in request body
activate server
note left of server: Server executes new_note_spa.js
server ->> browser: message: note created
activate browser
```