
# Export your Medium posts to Markdown

There’s a simple solution to avoid copy/pasting and re-editing your Medium posts.

![](https://cdn-images-1.medium.com/max/2000/1*i-S80mDrkJQO2tJ_lhYwfA.png)

First of all, you need to install node on your computer.

There is an installer for node for all platforms, just download it and install it like you would any other program:

* [***https://nodejs.org/en/download/](https://nodejs.org/en/download/)***

Once you have this installed, you fire up the **Command Prompt** on **Windows** or **Terminal** on **MacOS** or **Linux** and run this command.

    npm install -g mediumexporter

This installs **mediumexporter**. Once installed, you can export your Medium post to markdown format.

Go to the directory where you want to file to be exported to.

***(on Windows)***

    cd c:\Users(username)\Desktop 

***(on Mac)***

    cd ~/Desktop 

Next type on 1 line:

    mediumexporter [https://medium.com/p/export-your-medium-posts-to-markdown-b5ccc8cb0050](https://medium.com/@yeong.crypto/export-your-medium-posts-to-markdown-b5ccc8cb0050) > medium_post.md

You’ll see a file called **medium_post.md** containing your Medium post in markdown format. You might have to adjust a couple of things, but most of the time it’s fairly good for preserving formatting and structure.

If you want it copied directly to your clipboard (on OSX) you can add the following **(| pbcopy)** :

    mediumexporter [https://medium.com/p/export-your-medium-posts-to-markdown-b5ccc8cb0050](https://medium.com/@yeong.crypto/export-your-medium-posts-to-markdown-b5ccc8cb0050) | pbcopy

If you don’t like command line solutions there’s also a **Google Chrome Extension**, although it’s good and fast the result does require a bit more editing:

* [**https://chrome.google.com/webstore/detail/convert-medium-posts-to-m/aelnflnmpbjgipamcogpdoppjbebnjea?hl=en](https://chrome.google.com/webstore/detail/convert-medium-posts-to-m/aelnflnmpbjgipamcogpdoppjbebnjea?hl=en)**

![If you enjoyed reading the article don’t forget to applaud.](https://cdn-images-1.medium.com/max/2000/1*eHf64Iyl2VhGN5WVOiu1rw.gif)*If you enjoyed reading the article don’t forget to applaud.*
