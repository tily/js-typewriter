
var Typewriter = {};
(function() {
 	var soundMap = {
		"^[a-zA-z]$"    : "kick1",
		"^(。|．|\\.)$" : "hatOpen1",
		"^(、|，|,)$"   : "hatClose1",
		"^[0-9０-９]$"  : "snare1",
		"^[一-龠]$"     : "clap1",
		"^[ぁ-ん]$"     : "bongo1",
		"^[ァ-ン]$"     : "bongo2"
	}
	function getSoundName(char) {
		var name = ""
		for(var regexp in soundMap) {
			if(char.match(new RegExp(regexp))) {
				name = soundMap[regexp]
				break
			}
		}
		return name
	}
	function playSound(name) {
		var audio = document.createElement("audio")
		audio.src = sounds[name].data
		document.body.appendChild(audio)
		audio.play()
	}
	function playText(text) {
		for(var i = 0; i < text.length; i++) {
			var char = text.slice(i, i+1)
			var name = getSoundName(char)
			if(name == "") return
			var play = function(that) {
				return function() { playSound(that) }
			}
			setTimeout(play(name), i*100)
		}
	}
	Typewriter.onkeyup = function() {
		var prev = 0
		var flag = true
		return function(e) {
			var curr = e.target.selectionStart
			if(flag && e.target.value.length > 1) {
				console.log("hello")
				prev = e.target.value.length - 1
			}
			if(prev < curr) {
				var addition = e.target.value.slice(prev, curr)
				playText(addition)
			}
			prev = curr
			flag = false
		}
	}
})()
