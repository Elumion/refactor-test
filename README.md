Test project
Steps to open project on local computer
1. <code>git clone https://github.com/Elumion/refactor-test.git</code>
2. <code>cd refactor-test/</code>
3. <code>shopify theme dev --store=YOUR_STORE.myshopify.com</code>
4. login to your store
5. <code>shopify theme pull</code> - select your theme
6. <code>npm install</code>
7. <code>npm run dev</code>

Project has default file system as in regular shopify project. 
All scss and js files compiles via Webpack. They are located in src/ folder. After creating file in src/folder-name dont forget to add file name to .gitignore, example assets/file-name.css
If server running live and you create file in src/, then you need to restart the server in case you want Webpack to watch all changes in new file and rebuild it. All builded files located in assets.
<code></code>
