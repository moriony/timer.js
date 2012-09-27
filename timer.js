var timer = function (options) {

    var active = false;
    var timer = null;
    var ticks = 0;
    var self = this;

    options = options || {};
    options = {
        ticks:      options.ticks || 1,
        delay:      options.delay || 1000,
        onStart:    options.onStart || null,
        onFinish:   options.onFinish || null,
        onTick:     options.onTick || null
    };

    var tick = function () {
        if(ticks < options.ticks) {
            if(options.onStart && ticks == 0) {
                options.onStart.call(self, ticks, options.ticks - ticks);
            }
            if(options.onTick && ticks > 0) {
                options.onTick.call(self, ticks, options.ticks - ticks);
            }
            ticks++;
            timer = setTimeout(tick, options.delay)
        } else {
            self.stop();
            if(options.onFinish) {
                options.onFinish.call(self, ticks, 0);
            }
        }
    };

    this.isActive = function() {
        return active;
    }

    this.start = function () {
        if(!this.isActive()) {
            active = true;
            tick();
        }
        return this;
    };

    this.pause = function () {
        clearTimeout(timer);
        active = false;
        return this;
    };

    this.reset = function () {
        ticks = 0;
        return this;
    };

    this.stop = function () {
        return this.pause().reset();
    };
};