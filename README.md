# PoseDance - Perfect your Dance Moves with a friendly TikTok Trainer!

Use PoseNet to train your dancing!

## Blogpost

Blogpost coming soon!

## Video 

Watch a [video explanation](https://www.dropbox.com/s/ccog8uz0tzk10mv/posedance.mp4?dl=0) of the technology behind the silliness.

## Slides

[download](posedance.pptx)

## Behind the Scenes

Learn more about PoseNet [here](https://github.com/tensorflow/tfjs-models/tree/master/posenet/demos)

---

This project is built using Vue.js with PoseNet installed as an npm package. This allows use of the TensorFlow-built models to be used via TensorFlow.js in the web app. It also makes the app PRETTY BIG, especially as you need to analyze two models, one for the video from TikTok, and one for your webcam.

For its backend it also uses [PlayFab](https://playfab.com), a great PAAS for games.

It's hosted on [Azure Static Web Sites](https://aka.ms/trystaticwebapps), a nice way to host your static web apps and SPAS like this one.

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


