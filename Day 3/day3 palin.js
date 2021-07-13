//Finding palindrome words in a sentence
s = "My mom knows malayalam upto some level "
s1 = "" 
s2 = ""
  for (t of s) {
    if (t != " ") {   //breaking word acc to space
      s2 = s2 + t   //word
      s1 = t + s1   //reversed word
    }
    else {
      if (s1 == s2) 
      console.log(s1) //check is both words are equal
      s1 = "" //make it empty again
      s2 = ""
    }
  }
  
  
  
