SenseiDocs_Latest is the latest version and attached to Git

in command mode.

cd to c:/SenseiDocs_Latest/docs

---- For development
npm Start

---------to build locally
npm run build 

---------to serve locally
npm run serve 



--- For deploymentcd

open gitbash
cd /
---- NB THIS DIRECTORY IS CASE SENSITIVE!!!!!! - WILL BREAK BUILD
cd c:/SenseiDocs_Latest/docs
deploy

GIT_USER=Frozenbear12 yarn deploy
--------------------------------

-------------------------------------------------
for relative links that work
**[Desc](../docs/DOC-123.mdx)

with specific area inside doc
 **[Desc](../docs/DOC-123.mdx#late-capture-of-actual-demand)


---------------------------------------------
npm config set legacy-peer-deps true
npm i
-----
npm audit fix
----------------
npm install react-player

-------------------------------------------------
check versions of 
NodeJS
Cmdline : In folder of project :
  node -v

Yarn
Cmdline : In folder of project :
   yarn -v



