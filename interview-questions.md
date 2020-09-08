# 1

- We have a Folder class which has name and parent as properties. Parent is also a folder so we can have N nested folders.
- Imagine we have the following folder structure: windows > Documents > Images
- Implement a getPath function that can receive a folder instance and return the full path
- In this case it would be "/windows/Documents/Images"

```
class Folder {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
  }
  getParent() {
    return this.parent
  }
  getName() {
    return this.name;
  }
}

const windows = new Folder('windows', null);
const documents = new Folder('Documents', windows);
const images = new Folder('Images', documents);

const getPath = function(folder) {
    let path = "";
    path = `/${folder.getName()}`;
    
    let parent = folder.getParent();
    while (parent) {
        path = `/${parent.getName()}${path}`;
        parent = parent.getParent();
    };

    return path;
}

getPath(images); // "/windows/Documents/Images";
```
