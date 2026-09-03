class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mapping = {};
        let count = 0;

        if (s.length !== t.length) return false;

        const tArray = t.split("");
    

        for (let i = 0; i <= s.length -1; i++) {
            const letter = s[i];
            if (mapping[letter]) mapping[letter]++;
            else mapping[letter] = 1;
        }

        for (let x = 0; x <= t.length -1; x++) {
            const tLetter = t[x];

            if (!mapping[tLetter]) return false;

            mapping[tLetter]--;
        }

        return true;
    }
}
