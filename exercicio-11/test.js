const user = {
    name: "Emilio Dias Mazzola",
    nickname: 'mazzolinha',
    time_range: {
        from: 1942,
        to: 1961
    },
    games: 856,
    active: true,
    birthday: 1921,
    position: 'Meio campo',
    times: ['Comandatuba', 'Fiorentina'],
    gols: 102,

    marcarGol (gol) {
        return this.gols = this.gols + gol
    },

    toogleActivePlayer () {
        this.active = !this.active;
    },

    getTeams () {
        return `${this.name} aka ${this.nickname}. Played in ${ this.times.join() } between ages of ${ this.time_range.from } until year of ${this.time_range.to}.
        He started her careen in ${this.times[0]} in ${this.time_range.from}`
    }
}

user.marcarGol(5);
user.toogleActivePlayer()
user.getTeams()
console.log(user.getTeams())
console.log(user)