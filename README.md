# Welcome
Here is a basic template to get started with Crestron CH5 which uses:

HTML, Java Script, SCSS, Node.js, Webpack

# Instructions

### Initial setup
- In VS Code extensions install "Crestron Components"
- install node (tested in node 10.12.2, npm 10.5.0)
- ```git clone https://github.com/Azwa32/CH5-Basic-Template.git```
- ```cd CH5-Basic-Template```
- install node_modules ```npm i```

### Run app in browser
- ```npm run start```
- go to http://localhost:8080/ to view in browser

### Create .ch5z for transfer to touchpanel later
- to get the ch5z for transferring ```npm run deploy``` 
If you've updated the tsw script, this will handle the build/archive/transfer for you.

### Transfer directly to touch panel
- Edit package.json script "tsw", replace the IP addresses with the ones for your devices.
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



