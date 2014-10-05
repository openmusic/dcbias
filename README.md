# openmusic-dcbias

> A node for introducing a fixed-value signal in your audio graph

[![Install with NPM](https://nodei.co/npm/openmusic-dcbias.png?downloads=true&stars=true)](https://nodei.co/npm/openmusic-dcbias/)

You can use it for things such as: 

* shifting the signal upwards/downwards when connected to a gain node (the demo)
* modifying the value of an AudioParam by a fixed-value. E.g. adding -100. by setting the `gain.value` to -100.

## Using it

Create an audio context.

```javascript
var audioContext = new AudioContext();
```

Require the code somehow:

```javascript
var DCBias = require('openmusic-dcbias');
```

or

```javascript
<script src="DCBias.js"></script>
```

Then create instances by passing the context to the function:

```javascript
var bias = DCBias(audioContext);
```

And it's ready to be used!

```
// Raise the frequency by 100
var oscillator = audioContext.createOscillator();
bias.gain.value = 100;
bias.connect(oscillator.frequency);
```

```
// Saturate/clip a "mixer"
var mixer = audioContext.createGain();
oscillator.connect(mixer);
bias.gain.value = 1;
bias.connect(mixer);
// the output of mixer is now half of the usual oscillator output as we've shifted it upwards by 1
```
## Demo

Run `npm install` first to have all the dependencies (i.e. the oscilloscope component) installed.

Then open `index.html`. Code is in `demo.js`.

** YOU NEED SUPPORT FOR WEB COMPONENTS IN YOUR BROWSER BECAUSE WE'RE NOT SHIMMING ANYTHING IN **

Firefox: go to `about:config`, find `dom.webcomponents.enabled` and set it to true.

Chrome: maybe nothing to do?
