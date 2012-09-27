timer.js
===
Simple native JavaScript timer


Using
===

Simple 10 seconds timer with alert on end

```javascript
var test = new timer({
  'ticks' : 10,
  'onStop' : function() {
    alert('Finish!');
  }
});
test.start()
```

Options
===
```javascript
{
// Options    Default Value
  ticks:      1,              // The number of ticks that carry out the timer before stopping
  delay:      1000,           // Delay between ticks in microseconds
  onStart:    null,           // Callback function on timer.start()
  onStop:     null,           // Callback function on timer.stop()
  onTick:     null            // Callback function on every tick
}
```

Callbacks
===
Callbacks must have save structure
```javascript
function(ticks, ticksRemain) {
  // do something
}
```