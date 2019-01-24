import {on_, off_, emit, emitPrivate, _listenTo, _invokeHandlers} from './element/events'
import {orientationGetter, aspectRatioGetter} from './element/style'

export default QuickWindow = 
	type: 'window'
	el: window
	raw: window
	_eventCallbacks: {__refs:{}}
	

QuickWindow.on =  on_
QuickWindow.off =  off_
QuickWindow.emit =  emit
QuickWindow.emitPrivate =  emitPrivate
QuickWindow._listenTo =  _listenTo
QuickWindow._invokeHandlers =  _invokeHandlers
Object.defineProperties QuickWindow,
	'width': get: ()-> window.innerWidth
	'height': get: ()-> window.innerHeight
	'orientation': orientationGetter
	'aspectRatio': aspectRatioGetter

