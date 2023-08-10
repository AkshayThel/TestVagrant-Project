
import SongStore from '../support/SongStore';

describe('SongStore', () => {
    let store;

    beforeEach(() => {
        store = new SongStore();
    });

    it('should store and retrieve recently played songs correctly', () => {
        store.playSong('user1', 'S1');
        store.playSong('user1', 'S2');
        store.playSong('user1', 'S3');

        const recentlyPlayed = store.getRecentlyPlayed('user1');
        expect(recentlyPlayed).to.deep.equal(['S3', 'S2', 'S1']);
    });

    it('should accommodate N songs per user', () => {
        store.playSong('user2', 'A');
        store.playSong('user2', 'B');
        store.playSong('user2', 'C');
        store.playSong('user2', 'D');
        store.playSong('user2', 'E');

        const recentlyPlayed = store.getRecentlyPlayed('user2');
        expect(recentlyPlayed).to.deep.equal(['E', 'D', 'C']);
    });
});
