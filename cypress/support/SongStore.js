import User from './User';

class SongStore {
    constructor() {
        this.userMap = new Map();
    }
    playSong(userId, song) {
        if (!this.userMap.has(userId)) {
            this.userMap.set(userId, new User(userId, 3)); // Change 3 to desired capacity
        }
        const user = this.userMap.get(userId);
        user.playSong(song);
    }
    getRecentlyPlayed(userId) {
        if (this.userMap.has(userId)) {
            const user = this.userMap.get(userId);
            return user.getRecentlyPlayed();
        }
        return [];
    }
}



export default SongStore;
