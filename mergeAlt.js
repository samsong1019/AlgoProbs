let word1 = "abc";
let word2 = "def"


mergeAlternately = function(word1, word2) {
        let newWord = "";
        //loop through both strings
        for(let i = 0;  i < Math.max(word1.length, word2.length); i++){
            //if current index is less than the length of word add i if not move on 
              if (i < word1.length) newWord += word1[i];
              if (i < word2.length) newWord += word2[i];
        
        };
        return newWord;
};

mergeAlternately(word1,word2);
