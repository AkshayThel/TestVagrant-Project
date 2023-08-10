class User {
    constructor(userId, maxCapacity) {
        this.userId = userId;
        this.maxCapacity = maxCapacity;
        this.recentlyPlayed = [];
    }
    playSong(song) {
        if (this.recentlyPlayed.length >= this.maxCapacity) {
            this.recentlyPlayed.pop();
        }
        this.recentlyPlayed.unshift(song);
    }
    getRecentlyPlayed() {
        return this.recentlyPlayed;
    }
}



export default User;
