import {includes} from './helpers'
import quickdom from './'

SHORTCUTS = [
	'link:a'
	'anchor:a'
	'a'
	'text'
	'div'
	'span'
	'h1'
	'h2'
	'h3'
	'h4'
	'h5'
	'h6'
	'header'
	'footer'
	'section'
	'button'
	'br'
	'ul'
	'ol'
	'li'
	'fieldset'
	'input'
	'textarea'
	'select'
	'option'
	'form'
	'frame'
	'hr'
	'iframe'
	'img'
	'picture'
	'main'
	'nav'
	'meta'
	'object'
	'pre'
	'style'
	'table'
	'tbody'
	'th'
	'tr'
	'td'
	'tfoot'
	# 'template'
	'video'
]


for shortcut in SHORTCUTS then do (shortcut)->
	prop = type = shortcut
	if includes(shortcut, ':')
		split = shortcut.split(':')
		prop = split[0]
		type = split[1]

	quickdom[prop] = ()-> quickdom(type, arguments...)
