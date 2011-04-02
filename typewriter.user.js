// ==UserScript==
// @name           Typewriter
// @namespace      http://d.hatena.ne.jp/tily/
// @description    make input fields typewriter
// @include        http://*
// @include        https://*
// @require        https://github.com/tily/js-typewriter/raw/master/sounds.js
// @require        https://github.com/tily/js-typewriter/raw/master/typewriter.js
// ==/UserScript==
(function() {
	var inputs = document.querySelectorAll("input[type='text'], textarea")
	for(var i = 0; i < inputs.length; i++) {
		inputs[i].onkeyup = Typewriter.onkeyup()
	}
)()
