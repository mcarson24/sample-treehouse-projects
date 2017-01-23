var Portland = {
    bridges: 12,
    soccerTeams: 1,
    basketballTeams: 1,
    footballTeams: 1,
    logNumberOfBridges: function() {
        console.log("Portland has " + this.bridges + " bridges.");
    }
}

function logNumberOfTeams() {
    console.log(this.soccerTeams + this.basketballTeams + this.footballTeams);
}

Portland.foo = logNumberOfTeams;

// Portland.logNumberOfBridges();

Portland.foo();