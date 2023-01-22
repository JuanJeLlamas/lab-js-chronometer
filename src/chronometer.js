class Chronometer {
  
    // ... your code goes here

   
    constructor(){
      this.currentTime = 0;
      this.intervalId = null;
    }
  
  
  } 

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
    this.currentTime++;
    if (printTimeCallback) {printTimeCallback()}
    }, 1000);
    
  }

  getMinutes() { return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }

  getSeconds() { return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) { return value < 10 ? `0${value}` : `${value}`
    // ... your code goes here
  }

  stop() {    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() { this.currentTime = 0;
    // ... your code goes here
  }



}
