function TicTacToe() {
}

function Loader(frames = ['|', '/', '-', "\\"]) {
    let index = 0
    this.clearConsole = function () {
        console.clear();
    };

    loading = setInterval(function () {
        if (index >= frames.length) index = 0;
        this.clearConsole();
        console.log(frames[index]);
        index += 1;
    }, 500);
};

function Clock() {
    let self = this;
    let clockInterval;
    let isClockVisible = true;

    this.start = function () {
        if (isClockVisible) {
            clockInterval = setInterval(function () {
                let currentDate = new Date();
                let hours = currentDate.getHours();
                let minutes = currentDate.getMinutes();
                let seconds = currentDate.getSeconds();

                let formattedTime = self.formatTime(hours) + ':' + self.formatTime(minutes) + ':' + self.formatTime(seconds);
                self.clearConsole();
                console.log(formattedTime);
            }, 1000);
        }
    };

    this.formatTime = function (time) {
        return time < 10 ? '0' + time : time;
    };

    this.clearConsole = function () {
        console.clear();
    };

    this.stop = function () {
        clearInterval(clockInterval);
        self.clearConsole();
        console.log("Let's keep playing!");
    };

    // Captura el evento de clic en cualquier parte de la ventana
    window.addEventListener('click', function () {
        isClockVisible = false;
        self.stop();
    });
}

function Marquee(sentence, spaces) {
    this.frames = [];
    pos = 0

    this.fill = () => { for (let i = spaces; i >= 0; i--) {
     let a = " ".repeat(i) + sentence
     this.frames.push(a)
    };
    }

    this.erase = () => { 
        let size = sentence.length
        let arr = sentence.split("")

        for (let i = 0; i < size; i++) {
          arr.shift()
          this.frames.push(arr.join(""))
        }
    }

    this.render = function () {
        return setInterval(() => {
        if (pos >= this.frames.length) pos = 0;
        console.clear();
        console.log(this.frames[pos]);
        pos += 1;}, 300)
    };

    this.run = () => {
        this.fill()
        this.erase()
        const intervalId = this.render();

        setTimeout(() => {
            clearInterval(intervalId);
            console.clear();
        }, (spaces + sentence.length + 1) * 500);
  };

}

function numberFormatter(divider, array) { // 1024 , ["b", "kb", "mb"]
    this.snippet = function (number) {      //2000 =>  2000/1024 = 1.95  1.9kb  //1000
      let count = 0;
      let quotient = number;
      if (number >= divider) {
        do {
          count += 1;
          quotient = quotient / divider;
        } while (quotient >= divider);
      }
      return `${Math.floor(quotient)} ${array[count]}`;
    };
}


function EasterEgg() {
}

// let clock = new Clock();
// clock.start();

// Loader()
