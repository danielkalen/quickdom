import CSS from 'quickcss'
import QuickElement from './element'
import QuickTemplate from './template'
import QuickWindow from './window'
import QuickBatch from './batch'
import {version} from '../package.json'

import quickdom,{init} from './quickdom'
import './instance-shortcuts'

init(QuickElement, QuickWindow)
quickdom.QuickElement = QuickElement
quickdom.QuickTemplate = QuickTemplate
quickdom.QuickWindow = QuickWindow
quickdom.QuickBatch = QuickBatch

quickdom.version = version
quickdom.CSS = CSS

export default quickdom
# export {quickdom as default, QuickElement, QuickTemplate, QuickWindow, QuickBatch}

