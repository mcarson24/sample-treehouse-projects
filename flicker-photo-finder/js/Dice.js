var dice = {
    sides: '',
    roll: function() {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        console.log(randomNumber);
    }
}
