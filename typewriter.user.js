// ==UserScript==
// @name           Typewriter
// @namespace      http://d.hatena.ne.jp/tily/
// @include        http://*
// @include        https://*
// @require        https://gist.github.com/894548/sounds.js
// @require        https://gist.github.com/894548/typewriter.js
// ==/UserScript==
(function() {
	var inputs = document.querySelectorAll("input[type='text'], textarea")
	for(var i = 0; i < inputs.length; i++) {
		inputs[i].onkeyup = Typewriter.onkeyup()
	}
)()
