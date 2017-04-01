
var blessed = require('blessed')
  , contrib = require('blessed-contrib');

var characterScreen = blessed.screen()
var grid = new contrib.grid({rows: 12, cols: 12, screen: characterScreen});

var characterForm = grid.set(0, 0, 6, 6, blessed.form, {label: 'Character Form'});


// Key Map information box
var box = grid.set(11, 0, 1, 12, blessed.box, {
  label: 'Key Map',
  content: 'q/Escape/C-c: Quit'
});

characterScreen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

characterScreen.render();
