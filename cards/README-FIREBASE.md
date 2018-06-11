# Firebase build and deploy goes roughly like this

## Build

Enable production mode, cards/src/app/app.module.ts
  ```typescipt
  import { enableProdMode } from '@angular/core';
  enableProdMode();
  ```

Choose settings, cards/src/app/settings.ts:
  ```typescipt
  export const METHOD: string = 'firebase';`
  ```

Build it, in cards directory:
  `ng build --prod --build-optimizer`

## Deploy

Install the Firebase CLI, RUN ONLY ONCE:
  `npm install -g firebase-tools`

Login to Firebase:
  `firebase login`

Initialize site, in cards directory, RUN ONLY ONCE:
  `firebase init`

Make sure cards/.firebaserc is correct:
  ```json
  {
    "projects": {
      "default": "vertex-lottery"
    }
  }
  ```
  
Make sure cards/firebase.json is correct:
  ```json
  {
    "hosting": {
      "public": "dist/cards",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "rewrites": [{
        "source": "**",
        "destination": "/index.html"
      }]
    }
  }
  ```
  
Test the app locally in http://localhost:5000:
  `firebase serve`

Deploy the app:
  `firebase deploy`

Test it live:
  https://vertex-lottery.firebaseapp.com