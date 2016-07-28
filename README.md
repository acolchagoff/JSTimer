# JSTimer
A simple Javascript timer class that shows hundredths of a second

public Methods:


start(seconds, countdown) -Star the timer

-seconds (optional, integer, number of seconds to start timer at

-countdown (optional, boolean, whether to count up or down to zero)


stop() -Stop the timer

reset() -Reset the timer to zero

getValue() - returns a decimal, gets the current timer value in seconds with milliseconds expressed after the decimal point


##Example
```
<span id="counter"></span>
<script type="text/javascript">
//count down to zero from 10 seconds
var counter = document.getElementById('counter');
var timer = new Timer(counter);
timer.start(10, true);
</script>
```
