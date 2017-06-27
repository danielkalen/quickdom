module.exports = (file, options, file_, content)->
	if options._flags.debug
		return content
	else
		output = content
		replacements.forEach (replacement)->
			source = replacement[0]
			dest = replacement[1]

			output = output.replace(source, dest)
		return output


replacements = [
	[/iterable/g, 'iT']
	[/domEl/g, 'dE']
	[/domText/g, 'dT']
	[/domNode/g, 'dN']
	[/quickDomEl/g, 'qE']
	[/defined:/g, 'De:']
	[/\.defined/g, '.De']
	[/array:/g, 'Ar:']
	[/\.array/g, '.Ar']
	[/object:/g, 'Ob:']
	[/\.object/g, '.Ob']
	[/string:/g, 'St:']
	[/\.string/g, '.St']
	[/number:/g, 'Nu:']
	[/\.number/g, '.Nu']
	
	[/includes/g, 'In']
	[/removeItem/g, 'R']
	[/normalizeGivenEl/g, 'N']
	[/_parsed/g, '_']
	[/_parent/g, '_p']
	[/_state/g, '_s']
	[/_mediaStates/g, '_m']
	[/_providedStatesShared/g, '_psh']
	[/_providedStates/g, '_ps']
	[/_styles/g, '_st']
	[/_stylesShared/g, '_stS']
	[/_children/g, '_c']
	[/_childRefs/g, '_C']
	[/_eventCallbacks/g, '_e']
	[/_insertedCallbacks/g, '_i']
	[/_inserted/g, '_I']
	[/_normalizeOptions/g, '_n']
	[/_parseStyles/g, '_ns']
	[/_applyOptions/g, '_a']
	[/_attachStateEvents/g, '_ae']
	[/_listenTo/g, '_l']
	[/_refreshParent/g, '_rP']
	[/_removeChild/g, '_r']
	[/_getActiveStates/g, '_as']
	[/_getSuperiorStates/g, '_ss']
	[/_getSharedStates/g, '_shs']
	[/_getStateStyles/g, '_SS']
	[/_statePipeTarget/g, '_pt']
	[/_turnStyleOn/g, '_ts1']
	[/_turnStyleOff/g, '_ts0']
	[/_proxyParent/g, '_pp']
	[/_unproxyParent/g, '_up']
	[/_hasComputers/g, 'hC']
	[/__refs/g, '_R']
	[/returnResults/g, 'rR']
	[/lastResults/g, 'lR']
	[/parseQuery/g, 'pQ']
	[/register/g, 'rg']
]
