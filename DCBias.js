(function() {

	function DCBias(context) {

		var output = context.createGain();
		var buffer = context.createBuffer(1, 1, context.sampleRate);
		var bufferSource = null;

		buffer.getChannelData(0)[0] = 1.0;

		output.start = function(when) {
			when = typeof(when) === 'undefined' ? context.currentTime : when
			bufferSource = context.createBufferSource();
			bufferSource.buffer = buffer;
			bufferSource.loop = true;
			bufferSource.connect(output);
			bufferSource.start(when);
		};

		output.stop = function(when) {
			if(bufferSource !== null) {
				bufferSource.stop(when);
				bufferSource.disconnect();
			}
			bufferSource = null;
		};

		return output;

	}

	//

	if(typeof module !== 'undefined' && module.exports) {
		module.exports = DCBias;
	} else {
		this.DCBias = DCBias;
	}

}).call(this);
