class Participant {
    constructor(name) {
      this.name = name;
      this.chatroom = null;
    }
    send(message, to) {
      this.chatroom.send(message, this, to);
    }
  
    receive(message, from) {
      log.add(from.name + " to " + this.name + ": " + message);
    }
  }
   
  let Chatroom = function() {
    let participants = {};
  
    return { 
      register: function(participant) {
        participants[participant.name] = participant;
        participant.chatroom = this;
      },
    
      send: function(message, from, to) {
        if (to) {                      // single message
          to.receive(message, from);    
        } else {                       // broadcast message
          for (let key in participants) {   
            if (participants[key] !== from) {
              participants[key].receive(message, from);
            }
          }
        }
      }
    };
  };
  
  // log helper
  log = (function() {
      let log = '';
  
      return {
          add: msg => { log += msg + '\n'; },
          show: () => { alert(log); log = ''; }
      }
  })();
   
  function run() {
    let yoko = new Participant('Yoko'),
        john = new Participant('John'),
        paul = new Participant('Paul'),
        ringo = new Participant('Ringo'),
        chatroom = new Chatroom(),
  
    chatroom.register(yoko);
    chatroom.register(john);
    chatroom.register(paul);
    chatroom.register(ringo);
  
    yoko.send('All you need is love.');
    yoko.send('I love you John.');
    john.send('Hey, no need to broadcast', yoko);
    paul.send('Ha, I heard that!');
    ringo.send('Paul, what do you think?', paul);
  
    log.show();
  }
  
  run();