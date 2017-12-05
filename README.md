# Angular Example

This application uses the MEAN stack architeture.

## Install Angular and Dependencies

If angular is not installed, run the command:

`npm install -g @angluar/cli`

Install dependencies

`npm install`

## Run the application in Development mode

This command will run in development mode and will watch for any changes in src folder, both for frontend (Angular) and for backend (/src/server):

`npm run dev`


# Only for information

## Development Log (frontend)
- npm install -g @angular/cli
- ng new app1 --style=scss
- ng generate component page1
- ng generate component page2
- ng generate module app-router --flat --module=app
- ng generate service app-data --module=app
- ng generate service app-log --module=app
- ng generate component msglog

## Development Log (backend)
- npm install express --save
- npm install body-parser --save
- npm install mongoose --save
- npm install @types/express --save-dev
- npm install @types/mongoose --save-dev
- npm install @types/body-parser --save-dev
- npm install node-watch --save-dev

## Development General
- npm install concurrently --save-dev