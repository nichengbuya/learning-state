export default function removeWordSpace(word: string) {
    let isInTag = false;
    let _word = '';
    for (let w of word) {
        if (w == '<') {
            isInTag = true;
        } else if (w === '>') {
            isInTag = false;
        }
        if (! /\s/.test(w)) {
            _word += w;
        } else {
            if (isInTag) {
                _word += ' ';
            }
        }
    }
    return _word;
}