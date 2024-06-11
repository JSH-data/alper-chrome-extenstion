# Alpher

Alpha is a Chrome Extension that automatically uploads the algorithm code you solved to Github!

<img src="https://github.com/JSH-data/alper-chrome-extenstion/assets/62323657/fbdfebbb-a0f8-46d7-aa49-a31898b80de2" width="700"/>

>It will be uploaded to the Chrome Extension market soon! Until then, you will have to download and run manually. 

## Installation
0. Install node.js [DOWNLOAD](https://nodejs.org/en) and Create [Github OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) 
1. Download and decompress Code ZIP
<br />

<img src="https://github.com/JSH-data/alper-chrome-extenstion/assets/62323657/a1886b59-a08b-4faa-b8a1-b5b4b7b04735" width="300"/>

<br />

2. Install dependencies

```bash
yarn install
```

3. Create `.env` file and add your github Github OAuth Client ID & Client secrets

```
VITE_CLIENT_SECRET="YOUR_SECRET"
VITE_CLIENT_ID="YOUR_ID"
```


4. Build Application

```bash
yarn build
```


5. Enable [Chrome Extension](chrome://extensions/) Developer mode 


6. Load dist folder into Chrome Extension
<br />
<img src="https://github.com/JSH-data/alper-chrome-extenstion/assets/62323657/e0cfd433-335b-4a53-a9df-608142bca9a8" width="500" />

## Usage
1. Get user authentication through Popup
<br />
<img src="https://github.com/JSH-data/alper-chrome-extenstion/assets/62323657/5b709b45-91d8-456e-84b5-517ea72c200b"/>
<br />

2. Add your Repository Name(Required) and Folder Name(Optional)
<br />
<img src="https://github.com/JSH-data/alper-chrome-extenstion/assets/62323657/947184ca-46e9-47ea-b069-76e4a8d967bd"/>
<br />

3. Enjoy Alpher!
