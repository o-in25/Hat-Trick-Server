module.exports = {
    // will replace whatever tokens specified
    // with empty strings
    // this is caused by the
    // mysportsfeeds api including
    // invalid json chars into the response
    parseTokens: function (str) {
        for(let i = 0; i < str.length; i++) {
            let currentPos = str.charAt(i);
            // replace ex: {"@text": "stat"} -> {"text":"stat"}
            if(currentPos == '@' || currentPos == '#') {
                str = str.replace(currentPos, '');
            }
        }
        return str;
    },
    parseToken: function (str) {
        for(let i = 0; i < str.length; i++) {
            let currentPos = str.charAt(i);
            // replace ex: {"@text": "stat"} -> {"text":"stat"}
            if(currentPos == '"') {
                str = str.replace(currentPos, '');
            }
        }
        return str;
    }
};
