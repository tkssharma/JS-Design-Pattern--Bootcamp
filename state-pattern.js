var player = {
  state: undefined,
  states: {
    playing: {
      initialize: function(target) {
        this.target = target;
      },
      enter: function() {
        console.log("setting up the playing state");
      },
      execute: function() {
        console.log("playing!");
      },
      play: function() {
        console.log("already playing!");
      },
      stop: function() {
        this.target.changeState(this.target.states.stopping);
      },
      pause: function() {
        this.target.changeState(this.target.states.pausing);
      },
      exit: function() {
        console.log("tearing down the playing state");
      }
    },
    stopping: {
      initialize: function(target) {
        this.target = target;
      },
      enter: function() {
        console.log("setting up the stopping state");
      },
      execute: function() {
        console.log("stopping!");
      },
      play: function() {
        this.target.changeState(this.target.states.playing);
      },
      stop: function() {
        console.log("already stopped!");
      },
      pause: function() {
        this.target.changeState(this.target.states.pausing);
      },
      exit: function() {
        console.log("tearing down the stopping state");
      }
    },
    pausing: {
      initialize: function(target) {
        this.target = target;
      },
      enter: function() {
        console.log("setting up the pausing state");
      },
      execute: function() {
        console.log("pausing!");
      },
      play: function() {
        this.target.changeState(this.target.states.playing);
      },
      stop: function() {
        this.target.changeState(this.target.states.stopping);
      },
      pause: function() {
        console.log("already paused!");
      },
      exit: function() {
        console.log("tearing down the pausing state!");
      }
    }
  },
  initialize: function() {
    this.states.playing.initialize(this);
    this.states.stopping.initialize(this);
    this.states.pausing.initialize(this);
    this.state = this.states.stopping;
  },
  play: function() {
    this.state.play();
  },
  stop: function() {
    this.state.stop();
  },
  pause: function() {
    this.state.pause();
  },
  changeState: function(state) {
    if (this.state !== state) {
      this.state.exit();
      this.state = state;
      this.state.enter();
      this.state.execute();
    }
  }
};
