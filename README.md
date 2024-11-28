## MUI
As of late 2021, styled-components is not compatible with server-rendered Material UI projects. This is because babel-plugin-styled-components isn't able to work with the styled() utility inside @mui packages. See this GitHub issue for more details. We strongly recommend using Emotion for SSR projects.
-. npm install @mui/material @emotion/react @emotion/styled (Ok)
-. npm install @mui/material @mui/styled-engine-sc styled-components (No)

## Git Upload
git init
git remote add origin https://github.com/kinsingo/SNU-BMT-NextJS-Deployment.git
git add .
git commit -m "241110"
git branch -M main
git push -f origin main