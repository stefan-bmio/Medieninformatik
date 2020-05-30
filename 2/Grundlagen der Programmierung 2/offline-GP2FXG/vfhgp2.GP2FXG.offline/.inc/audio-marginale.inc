<div id="audioBack" class="audioBack shadow">
	<div id="audioDownload" class="audioDownload" title="Download (MP3)">
		<svg height="19" width="15">
			<polygon points="5,2 5,9 2,9 8,14 14,9 10,9 10,2" style="fill:#9f9f9f;"></polygon>
			<polygon points="1,15 14,15 14,18 1,18" style="fill:#9f9f9f;"></polygon>
		</svg>
	</div>
	<div id="speaker" class="cover scale-quarter">
		<span class="icon speaker"></span>
	</div>
	<div id="audioInfo" class="audioInfo" title="Info">
		<svg width="15" height="20">
			<circle cx="7" cy="4" r="2" fill="#9f9f9f"></circle>
			<polygon points="5,8 9,8 9,17 5,17 " fill="#9f9f9f"></polygon>
		</svg>
	</div>
	<div id="audioInfoText" class="audioInfoText"></div>
</div>
<input id="range" class="audiorange" type="range" min="0" value="0" step="1" max="0">
<div class="audiobutton_leiste">
	<button id="start" type="button" title="Start" style="background-color: #efefef; border: none; float: left;">
		<svg height="20" width="15">
			<polygon points="0,1 0,19 4,19 4,1" style="fill:black;"></polygon>
			<polygon points="4,10 14,2 14,18" style="fill:black;"></polygon>
		</svg>
	</button>
	<button id="play" type="button" title="Play" style="background-color: #efefef; border: none; float: left;">
		<svg style="width: 15px; height: 20px;">
			<polygon points="0,0 0,20 15,10" style="fill:black;"></polygon>
		</svg>
	</button>
	<data id="audioTimer" class="audioTimer">00:00</data>
	<button id="pause" type="button" title="Pause" style="background-color: #efefef; border: none; float: left;">
		<svg height="20" width="15">
			<polygon points="1.5,2.0 1.5,18.0 5.5,18.0 5.5,2.0" style="fill:black;"></polygon>
			<polygon points="9.5,2.0 9.5,18.0 13.5,18.0 13.5,2.0" style="fill:black;"></polygon>
		</svg>
	</button>
	<button id="ende" type="button" title="Ende" style="background-color: #efefef; border: none; float: left;">
		<svg height="20" width="15">
			<polygon points="0,2.0 0,18.0 10.0,10.0" style="fill:black;"></polygon>
			<polygon points="10.0,1.0 10.0,19.0 14.0,19.0 14.0,1.0" style="fill:black;"></polygon>
		</svg>
	</button>
</div>
<!-- Audio-Include -->