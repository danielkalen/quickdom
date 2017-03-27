QuickWindow = 
	type: 'window'
	el: window
	raw: window
	_eventCallbacks: {__refs:{}}
	

QuickWindow.on =  QuickElement::on
QuickWindow.off =  QuickElement::off
QuickWindow.emit =  QuickElement::emit
QuickWindow._listenTo =  QuickElement::_listenTo

Object.defineProperties QuickWindow,
	'width': get: ()-> window.innerWidth
	'height': get: ()-> window.innerHeight
	'orientation': orientationGetter
	'aspectRatio': aspectRatioGetter

