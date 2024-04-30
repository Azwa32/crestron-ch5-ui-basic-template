# Welcome
Here is a basic template to get started with Crestron CH5 which uses:

HTML, Java Script, SCSS, Node.js, Webpack

# Instructions

### Initial setup
- In VS Code extensions install "Crestron Components"
- install node (tested in node 10.12.2, npm 10.5.0)
- ```git clone```
- ```cd CH5-Template```
- install node_modules ```npm i```

### Run app in browser
- ```npm run start```
- go to http://localhost:8080/ to view in browser

### Create .ch5z for transfer to touchpanel
- to get the ch5z for transferring ```npm run build``` then ```npm run archive``` 
If you've updated the tsw script, this will handle the build/archive/transfer for you.

### Transfer directly to touch panel
- Edit package.json scripts, replace the IP addresses with the ones for your devices.
- ```npm run tsw```

### Connect to controller from dev server
- If using the dev server ```npm run start``` you may need to login to the processor using the browser if you have auth enabled before it will work. (Use F12, you'll see link in console if it hasn't been able to login)


### Toubleshooting
error:
```sh: 1: webpack: Permission denied```
need to allow permission in node_modules.bin
```>chmod +x node_modules/.bin/*```


# Other Useful Repositories 
https://github.com/CloudDrivenSolutions/CH5-Basic
https://github.com/Mirage-AV/Crestron-CH5-Webpack-basic-example/tree/main

------------------------------------------------------------------------------------------------------
> some notes from another CH5 example, I have not yet tested to ensure they work with this program yet but may be helpful for development
# Processor setup
This will allow you to use a browser running from your development server to connect to the processor, you may need to login to the processor web interface first.
Use npm run start" in terminal to get a development server running, any changes to source will be automatically built and loaded when you save them.

Console into the processor and use the command;
webserver allowedsharedsession on

4-Series control systems use session management and session cookies that are sent a web browser to keeptrack of a given user's login status. If you host am HTML5 Web XPanel project on an independent webserver than the one provided by the control system, or you are using web development tools to host a webserver on your workstation during project development, the web browser will not be able to access the 4Series control system CIP protocol.
For maximum security, the session cookies provided by a 4-Series control system are accessibly only by webpages served by the control system web server and are not accessible by web pages served up byindependent web servers. If you plan to deploy your HTML5 Web XPanel project on an independent webserver, or if you plan to develop your project using a web server hosted on your workstation, you must change the default configuration using the
webserver allowedsharedsession on
command.
Issue webserver allowedsharedsession
without a parameter to view the current value for this setting



