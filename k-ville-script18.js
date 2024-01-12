const imageUrls = [
    'https://raw.githubusercontent.com/Nosam4/website_test5/main/images/cameronIndoor.jpg',
    'https://raw.githubusercontent.com/Nosam4/website_test5/main/images/devilCameron.jpg',
    'https://raw.githubusercontent.com/Nosam4/website_test5/main/images/kvilleColorful.jpg',
    'https://raw.githubusercontent.com/Nosam4/website_test5/main/images/kvilleLawn.jpg',
    'https://raw.githubusercontent.com/Nosam4/website_test5/main/images/kvilleSnow2.jpg',
    'https://raw.githubusercontent.com/Nosam4/website_test5/main/images/DallE_K-Ville-Winter1.png',
    'https://raw.githubusercontent.com/Nosam4/website_test5/main/images/DallECartoonTentingTest.png',
    'https://raw.githubusercontent.com/Nosam4/website_test5/main/images/DallE_BlueDevilShatterBackboard.png',
    'https://raw.githubusercontent.com/Nosam4/website_test5/main/images/DallE_K-Ville.png'
    
    // Add more image URLs as needed
  ];
  
  function setRandomBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    document.body.style.backgroundImage = `url('${randomImageUrl}')`;
  }
  
  setRandomBackgroundImage();
  
  //// Background Image Logic -- End
  
  /////Player List - Start
  const playerList = [
    {value: 'Alaa Abdelnaby' , datadecade: 1980 , datastart: 1986 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 30, gamemode: 'normal', fact: 'NBA 1st Round Pick', InstaUsername: '@alaasgram' , InstaURL: 'https://www.instagram.com/alaasgram/'},
{value: 'Grayson Allen' , datadecade: 2010 , datastart: 2014 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 3, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick', InstaUsername: '@graysonjallen' , InstaURL: 'https://www.instagram.com/graysonjallen/'},
{value: 'Marvin Bagley III' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'F' , dataheight: 611 , datanumber: 35, gamemode: 'normal', fact: '2nd Overall NBA Draft Pick, Rapper, and Hip Hop Artist', InstaUsername: '@mb3five' , InstaURL: 'https://www.instagram.com/mb3five/'},
{value: 'Paolo Banchero' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 610 , datanumber: 5, gamemode: 'easy', fact: '1st Overall NBA Draft Pick, Rookie of the Year', InstaUsername: '@paolo5' , InstaURL: 'https://www.instagram.com/paolo5/'},
{value: 'RJ Barrett' , datadecade: 2010 , datastart: 2018 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 5, gamemode: 'easy', fact: '3rd Overall NBA Draft Pick', InstaUsername: '@rjbarrett' , InstaURL: 'https://www.instagram.com/rjbarrett/'},
{value: 'Shane Battier' , datadecade: 1990 , datastart: 1997 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 31, gamemode: 'easy', fact: 'NCAA Champion (2001) & 2x NBA Champion', InstaUsername: '@shanebattier' , InstaURL: 'https://www.instagram.com/shanebattier/'},
{value: 'Neal Begovich' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 20, gamemode: 'easy', fact: 'Graduate Transfer from Stanford', InstaUsername: '@nealbegovich' , InstaURL: 'https://www.instagram.com/nealbegovich/'},
{value: 'Jay Bilas' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'C' , dataheight: 608 , datanumber: 21, gamemode: 'easy', fact: 'ESPN College Basketball Analyst, Lawyer, and NCAA Final 4 & Runner-Up', InstaUsername: '@jaybilas' , InstaURL: 'https://www.instagram.com/jaybilas/'},
{value: 'Jaylen Blakes' , datadecade: 2020 , datastart: 2021 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 2, gamemode: 'easy', fact: 'Recipient of the Glenn E. Mann Award and Dr. Daryl Hart Award, Duke\'s Batman', InstaUsername: '@j.b00gi' , InstaURL: 'https://www.instagram.com/j.b00gi/'},
{value: 'Carlos Boozer' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'F' , dataheight: 609 , datanumber: 4, gamemode: 'easy', fact: '2x NBA All-Star, NCAA Champion (2001), Highest FG Percentage in Duke History', InstaUsername: '@mrcbooz' , InstaURL: 'https://www.instagram.com/mrcbooz/'},
{value: 'Stanley Borden' , datadecade: 2020 , datastart: 2021 , datayears: 3 , dataposition: 'C' , dataheight: 700 , datanumber: 52, gamemode: 'easy', fact: 'Organized a 7.8 Kilometer Charity Run to raise aid for Turkish & Syrian Earthquake Victims, Portuguese U20 National Team in FIBA European Challengers', InstaUsername: '@stanleysborden' , InstaURL: 'https://www.instagram.com/stanleysborden/'},
{value: 'Elton Brand' , datadecade: 1990 , datastart: 1997 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 42, gamemode: 'normal', fact: '2x NBA All-Star, 1st Overall NBA Draft Pick, current Philadelphia 76ers General Manager'},
{value: 'Jeff Capel' , datadecade: 1990 , datastart: 1993 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 5, gamemode: 'normal', fact: 'Four Year Starter, Former Duke Associate Head Coach, Current Pittsburgh Head Coach', InstaUsername: '@jeffcapel' , InstaURL: 'https://www.instagram.com/jeffcapel/'},
{value: 'Vernon Carey Jr' , datadecade: 2010 , datastart: 2019 , datayears: 1 , dataposition: 'C' , dataheight: 610 , datanumber: 1, gamemode: 'normal', fact: '1st Round Pick', InstaUsername: '@vernon' , InstaURL: 'https://www.instagram.com/vernon/'},
{value: 'Chris Carrawell' , datadecade: 1990 , datastart: 1996 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 23, gamemode: 'easy', fact: '4x ACC Champion, ACC Player of the Year (2000), Current Duke Assistant Coach', InstaUsername: '@chriscarrawell' , InstaURL: 'https://www.instagram.com/chriscarrawell/'},
{value: 'Wendell Carter Jr' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'F' , dataheight: 610 , datanumber: 34, gamemode: 'normal', fact: 'Current NBA Player, 1st Round Pick', InstaUsername: '@wendellcarterjr' , InstaURL: 'https://www.instagram.com/wendellcarterjr/'},
{value: 'Quinn Cook' , datadecade: 2010 , datastart: 2011 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 2, gamemode: 'normal', fact: 'NCAA Champion, 2x NBA Champion', InstaUsername: '@qcook323' , InstaURL: 'https://www.instagram.com/qcook323/'},
{value: 'Seth Curry' , datadecade: 2000 , datastart: 2009 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 30, gamemode: 'easy', fact: 'Current NBA Player, 6th in NBA History for 3-Point FG Percentage', InstaUsername: '@sdotcurry' , InstaURL: 'https://www.instagram.com/sdotcurry/'},
{value: 'Johnny Dawkins' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 24, gamemode: 'normal', fact: 'Naismith College Player of the Year (1986), Current UCF Head Coach, Most FG in Duke History'},
{value: 'Chris Duhon' , datadecade: 2000 , datastart: 2000 , datayears: 2 , dataposition: 'G' , dataheight: 601 , datanumber: 21, gamemode: 'normal', fact: 'Former NBA Player, Most Steals in Duke History, NCAA Champion (2001), 3x ACC Champion', InstaUsername: '@cdu21' , InstaURL: 'https://www.instagram.com/cdu21/'},
{value: 'Mike Dunleavy Jr' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'F' , dataheight: 609 , datanumber: 34, gamemode: 'normal', fact: 'NCAA Champion, 3rd Overall NBA Draft Pick, General Manager of the Golden State Warriors'},
{value: 'Danny Ferry' , datadecade: 1980 , datastart: 1985 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 35, gamemode: 'normal', fact: 'NBA Champion, Naismith College Player of the Year (1989), #35 Jersey was Retired by Duke, 2nd Overall NBA Draft Pick'},
{value: 'Kyle Filipowski' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'C' , dataheight: 700 , datanumber: 30, gamemode: 'easy', fact: 'ACC Rookie of the Year', InstaUsername: '@kyleflip' , InstaURL: 'https://www.instagram.com/kyleflip/'},
{value: 'Caleb Foster' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 1, gamemode: 'easy', fact: '5-Star Recruit', InstaUsername: '@iamcalebfoster' , InstaURL: 'https://www.instagram.com/iamcalebfoster/'},
{value: 'AJ Griffin' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 21, gamemode: 'normal', fact: 'Current NBA Player, 1st Round Pick', InstaUsername: '@adrian.griffinjr' , InstaURL: 'https://www.instagram.com/adrian.griffinjr/'},
{value: 'Dick Groat' , datadecade: 1940 , datastart: 1948 , datayears: 4 , dataposition: 'G' , dataheight: 511 , datanumber: 10, gamemode: 'easy', fact: '3rd Overall Pick NBA Draft, #10 Jersey Retired by Duke, 8x MLB All-Star, 2x World Series Champion, Pittsburgh Pirate Hall of Fame '},
{value: 'Grant Hill' , datadecade: 1990 , datastart: 1990 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 33, gamemode: 'easy', fact: '7x NBA All-Star, 2x NCAA Champion, College & NBA Hall of Fame, #33 Jersey Retired by Duke, CBS Basketball Analyst, Co-Owner of the Atlanta Hawks', InstaUsername: '@realgranthill' , InstaURL: 'https://www.instagram.com/realgranthill/'},
{value: 'Spencer Hubbard' , datadecade: 2020 , datastart: 2020 , datayears: 4 , dataposition: 'G' , dataheight: 508 , datanumber: 55, gamemode: 'easy', fact: 'Two-Time Letter Winner, Former Walk-On ', InstaUsername: '@spenhubb' , InstaURL: 'https://www.instagram.com/spenhubb/'},
{value: 'Bobby Hurley' , datadecade: 1980 , datastart: 1989 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 11, gamemode: 'normal', fact: '2x NCAA Champion, Most Assists in Duke History, 7th Overall Pick in NBA Draft, ASU Head Coach'},
{value: 'Brandon Ingram' , datadecade: 2010 , datastart: 2015 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 14, gamemode: 'easy', fact: 'Current NBA Player, NBA All-Star, 2nd Overall Pick', InstaUsername: '@1ngram4' , InstaURL: 'https://www.instagram.com/1ngram4/'},
{value: 'Kyrie Irving' , datadecade: 2010 , datastart: 2010 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 1, gamemode: 'easy', fact: 'NBA Champion, 8x All-Star, 1st Overall Pick', InstaUsername: '@kyrieirving' , InstaURL: 'https://www.instagram.com/kyrieirving/'},
{value: 'Amile Jefferson' , datadecade: 2010 , datastart: 2012 , datayears: 5 , dataposition: 'F' , dataheight: 609 , datanumber: 21, gamemode: 'easy', fact: 'Current Celtics Assistant Coach, Former Duke Assistant Coach, Most Games Played in Duke History', InstaUsername: '@amilejefferson' , InstaURL: 'https://www.instagram.com/amilejefferson/'},
{value: 'Jalen Johnson' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 1, gamemode: 'normal', fact: 'Current NBA Player, 1st Round Pick', InstaUsername: '@jalenjohnson' , InstaURL: 'https://www.instagram.com/jalenjohnson/'},
{value: 'Tre Jones' , datadecade: 2010 , datastart: 2018 , datayears: 2 , dataposition: 'G' , dataheight: 603 , datanumber: 3, gamemode: 'easy', fact: 'Current NBA Player, ACC Player of the Year (2020), Brother of Tyus Jones', InstaUsername: '@trejones03' , InstaURL: 'https://www.instagram.com/trejones03/'},
{value: 'Tyus Jones' , datadecade: 2010 , datastart: 2014 , datayears: 1 , dataposition: 'G' , dataheight: 601 , datanumber: 5, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick, Brother of Tre Jones', InstaUsername: '@1tyus' , InstaURL: 'https://www.instagram.com/1tyus/'},
{value: 'Luke Kennard' , datadecade: 2010 , datastart: 2015 , datayears: 2 , dataposition: 'G' , dataheight: 606 , datanumber: 5, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick, ACC Tournament MVP (2017)', InstaUsername: '@lukekennard5' , InstaURL: 'https://www.instagram.com/lukekennard5/'},
{value: 'Christian Laettner' , datadecade: 1980 , datastart: 1988 , datayears: 4 , dataposition: 'F' , dataheight: 611 , datanumber: 32, gamemode: 'easy', fact: 'NBA All-Star, 2x NCAA Champion, "THE SHOT", Most made Free Throws in Duke History'},
{value: 'Antonio Lang' , datadecade: 1990 , datastart: 1990 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 21, gamemode: 'normal', fact: '2x NCAA Champion, Former NBA Player, Current Assistant Coach for Cleveland Cavaliers'},
{value: 'Trajan Langdon' , datadecade: 1990 , datastart: 1995 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 21, gamemode: 'normal', fact: 'Current GM of New Orleans Pelicans, Former NBA Player, 1st Round Pick, Highest 3-Point FG Percentage in Duke History, 6th Round MLB Draft'},
{value: 'Dereck Lively II' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'C' , dataheight: 701 , datanumber: 1, gamemode: 'easy', fact: 'Current NBA Player, 12th Overall Pick, All-ACC Freshman Team', InstaUsername: '@derecklively' , InstaURL: 'https://www.instagram.com/derecklively/'},
{value: 'Jared McCain' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 0, gamemode: 'easy', fact: '5-Star Recruit, McDonald\'s All-American, California Gatorade Player of the Year, 5:08 Mile Time', InstaUsername: '@jmccain24' , InstaURL: 'https://www.instagram.com/jmccain24/'},
{value: 'Mark Mitchell' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 25, gamemode: 'easy', fact: 'One of the Nation\'s best defensive players (94th percentile), awarded the Pagluica Family Coach\'s Award', InstaUsername: '@mark.mitchell25' , InstaURL: 'https://www.instagram.com/mark.mitchell25/'},
{value: 'Wendell Moore Jr' , datadecade: 2010 , datastart: 2019 , datayears: 3 , dataposition: 'F' , dataheight: 605 , datanumber: 0, gamemode: 'normal', fact: 'Current NBA Player, 1st Round Pick', InstaUsername: '@thewendellmoore' , InstaURL: 'https://www.instagram.com/thewendellmoore/'},
{value: 'Jahlil Okafor' , datadecade: 2010 , datastart: 2014 , datayears: 1 , dataposition: 'C' , dataheight: 611 , datanumber: 15, gamemode: 'normal', fact: 'NCAA Champion (2015), Former NBA Player, 3rd Overall Pick', InstaUsername: '@jah8' , InstaURL: 'https://www.instagram.com/jah8/'},
{value: 'Jabari Parker' , datadecade: 2010 , datastart: 2013 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 1, gamemode: 'normal', fact: '2nd Overall Pick, ACC Rookie of the Year', InstaUsername: '@jabari.parker22' , InstaURL: 'https://www.instagram.com/jabari.parker22/'},
{value: 'Marshall Plumlee' , datadecade: 2010 , datastart: 2011 , datayears: 5 , dataposition: 'C' , dataheight: 700 , datanumber: 40, gamemode: 'normal', fact: 'NCAA Champion (2015), Team Captain', InstaUsername: '@marshallplumlee40' , InstaURL: 'https://www.instagram.com/marshallplumlee40/'},
{value: 'Mason Plumlee' , datadecade: 2000 , datastart: 2009 , datayears: 3 , dataposition: 'F' , dataheight: 610 , datanumber: 5, gamemode: 'normal', fact: 'NCAA Champion (2010), Current NBA Payer, 1st Round Pick', InstaUsername: '@masonplumlee' , InstaURL: 'https://www.instagram.com/masonplumlee/'},
{value: 'Miles Plumlee' , datadecade: 2000 , datastart: 2008 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 21, gamemode: 'normal', fact: 'NCAA Champion (2010), Former NBA Player, 1st Round Pick', InstaUsername: '@milesplumlee' , InstaURL: 'https://www.instagram.com/milesplumlee/'},
{value: 'TJ Power' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 12, gamemode: 'easy', fact: 'Twitter - @TJPower14 , 5-Star Recruit'},
{value: 'Tyrese Proctor' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'G' , dataheight: 605 , datanumber: 5, gamemode: 'easy', fact: 'ACC All-Freshman Team', InstaUsername: '@tyrese4proctor' , InstaURL: 'https://www.instagram.com/tyrese4proctor/'},
{value: 'Cam Reddish' , datadecade: 2010 , datastart: 2018 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 2, gamemode: 'normal', fact: 'Current NBA Player, 10th Overall Pick'},
{value: 'J.J. Redick' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 4, gamemode: 'easy', fact: 'Former NBA Player, 11th Overall Pick, #4 Jersey Retired by Duke, Most Points & 3-Point FGs in Duke History', InstaUsername: '@jjredick' , InstaURL: 'https://www.instagram.com/jjredick/'},
{value: 'Christian Reeves' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'C' , dataheight: 701 , datanumber: 21, gamemode: 'easy', fact: '4-Star Center, 5th Overall Player from North Carolina in his Class', InstaUsername: '@cmr_32_' , InstaURL: 'https://www.instagram.com/cmr_32_/'},
{value: 'Austin Rivers' , datadecade: 2010 , datastart: 2011 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 0, gamemode: 'easy', fact: 'Current NBA Player, 10th Overall Pick, First NBA Player in History to play for his Father', InstaUsername: '@austinjrivers' , InstaURL: 'https://www.instagram.com/austinjrivers/'},
{value: 'Jeremy Roach' , datadecade: 2020 , datastart: 2020 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 3, gamemode: 'easy', fact: 'Two-Time Team Captain, First Team All-ACC Tournament, 1,000 Point Club', InstaUsername: '@jeremyy' , InstaURL: 'https://www.instagram.com/jeremyy/'},
{value: 'Michael Savarino' , datadecade: 2010 , datastart: 2019 , datayears: 3 , dataposition: 'G' , dataheight: 600 , datanumber: 30, gamemode: 'easy', fact: 'Grandson of Coach K, Currently playing at NYU, Amber gives a shout-out to Debbie!', InstaUsername: '@michael.savarino' , InstaURL: 'https://www.instagram.com/michael.savarino/'},
{value: 'Jon Scheyer' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 30, gamemode: 'easy', fact: 'Current Duke Head Coach, NCAA Champion (2015), 2x ACC Champion as Player, ACC Champion as Coach', InstaUsername: '@jscheyer' , InstaURL: 'https://www.instagram.com/jscheyer/'},
{value: 'Jaden Schutt' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'G' , dataheight: 605 , datanumber: 14, gamemode: 'easy', fact: '4-Star Shooting Guard, 2022 Gatorade Player of the Year', InstaUsername: '@jadenschutt' , InstaURL: 'https://www.instagram.com/jadenschutt/'},
{value: 'Nolan Smith' , datadecade: 2000 , datastart: 2007 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 2, gamemode: 'easy', fact: 'NCAA Champion (2010), ACC Player of the Year (2011), 1st Round NBA Draft Pick, Former Duke Assistant Coach, Current Assistant Coach at Louisville', InstaUsername: '@ndotsmitty' , InstaURL: 'https://www.instagram.com/ndotsmitty/'},
{value: 'Quin Snyder' , datadecade: 1980 , datastart: 1985 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 14, gamemode: 'normal', fact: 'Current Head Coach of the Atlanta Hawks, Former Utah Jazz Head Coach, Team Captain at Duke', InstaUsername: '@quinsnyder' , InstaURL: 'https://www.instagram.com/quinsnyder/'},
{value: 'Sean Stewart' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 13, gamemode: 'easy', fact: '5-Star Recruit, McDonald\'s All-American', InstaUsername: '@sean13stewart' , InstaURL: 'https://www.instagram.com/sean13stewart/'},
{value: 'Jayson Tatum' , datadecade: 2010 , datastart: 2016 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 0, gamemode: 'easy', fact: '4x NBA All-Star, 3rd Overall Pick, Gold Medal Olympian (2020)', InstaUsername: '@jaytatum0' , InstaURL: 'https://www.instagram.com/jaytatum0/'},
{value: 'Dariq Whitehead' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 0, gamemode: 'normal', fact: '1st Round Pick, Mr. Basketball USA (2022)', InstaUsername: '@riqwhitehead' , InstaURL: 'https://www.instagram.com/riqwhitehead/'},
{value: 'Mark Williams' , datadecade: 2020 , datastart: 2020 , datayears: 2 , dataposition: 'C' , dataheight: 701 , datanumber: 15, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick, ACC Defensive Player of the Year (2022)', InstaUsername: '@markwilliams' , InstaURL: 'https://www.instagram.com/markwilliams/'},
{value: 'Jay Williams' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 22, gamemode: 'easy', fact: 'Current ESPN Basketball Analyst, NCAA Champion (2001), Former NBA Player, 2nd Overall Pick', InstaUsername: '@realjaywilliams' , InstaURL: 'https://www.instagram.com/realjaywilliams/'},
{value: 'Zion Williamson' , datadecade: 2010 , datastart: 2018 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 1, gamemode: 'easy', fact: '2x NBA All-Star, 1st Overall Pick, National College Player of the Year (2019)', InstaUsername: '@zionwilliamson' , InstaURL: 'https://www.instagram.com/zionwilliamson/'},
{value: 'Justise Winslow' , datadecade: 2010 , datastart: 2014 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 12, gamemode: 'normal', fact: 'NCAA Champion (2015), Current NBA Player, 10th Overall Pick', InstaUsername: '@iamjustise' , InstaURL: 'https://www.instagram.com/iamjustise/'},
{value: 'Ryan Young' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'C' , dataheight: 610 , datanumber: 15, gamemode: 'easy', fact: 'Team Captain, Grad Student from Northwestern', InstaUsername: '@ryan_young23' , InstaURL: 'https://www.instagram.com/ryan_young23/'},
{value: 'Christian Ast' , datadecade: 1990 , datastart: 1990 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 54, gamemode: 'extreme', fact: ''},
{value: 'Joey Beard' , datadecade: 1990 , datastart: 1990 , datayears: 4 , dataposition: 'F' , dataheight: 609 , datanumber: 42, gamemode: 'extreme', fact: ''},
{value: 'Andy Berndt' , datadecade: 1980 , datastart: 1985 , datayears: 2 , dataposition: 'G' , dataheight: 606 , datanumber: 0, gamemode: 'extreme', fact: 'Frat Brother of Steven Siegel'},
{value: 'Brennan Besser' , datadecade: 2010 , datastart: 2015 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 53, gamemode: 'extreme', fact: '', InstaUsername: '@brennanbesser' , InstaURL: 'https://www.instagram.com/brennanbesser/'},
{value: 'Kenny Blakeney' , datadecade: 1990 , datastart: 1991 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 4, gamemode: 'extreme', fact: ''},
{value: 'Eric Boateng' , datadecade: 2000 , datastart: 2005 , datayears: 1 , dataposition: 'C' , dataheight: 610 , datanumber: 45, gamemode: 'extreme', fact: ''},
{value: 'Marques Bolden' , datadecade: 2010 , datastart: 2016 , datayears: 3 , dataposition: 'C' , dataheight: 611 , datanumber: 20, gamemode: 'extreme', fact: '', InstaUsername: '@marques' , InstaURL: 'https://www.instagram.com/marques/'},
{value: 'Andy Borman' , datadecade: 1990 , datastart: 1999 , datayears: 3 , dataposition: 'G' , dataheight: 601 , datanumber: 40, gamemode: 'extreme', fact: ''},
{value: 'Jamal Boykin' , datadecade: 2000 , datastart: 2005 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 34, gamemode: 'extreme', fact: '', InstaUsername: '@jamal_boykin' , InstaURL: 'https://www.instagram.com/jamal_boykin/'},
{value: 'Robert Brickey' , datadecade: 1980 , datastart: 1986 , datayears: 4 , dataposition: 'F' , dataheight: 605 , datanumber: 21, gamemode: 'extreme', fact: ''},
{value: 'Kenney Brown' , datadecade: 1990 , datastart: 1992 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 14, gamemode: 'extreme', fact: ''},
{value: 'Stan Brunson' , datadecade: 1990 , datastart: 1992 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 31, gamemode: 'extreme', fact: ''},
{value: 'D. Bryant' , datadecade: 1990 , datastart: 1996 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 0, gamemode: 'extreme', fact: ''},
{value: 'Clay Buckley' , datadecade: 1980 , datastart: 1987 , datayears: 3 , dataposition: 'C' , dataheight: 610 , datanumber: 45, gamemode: 'extreme', fact: ''},
{value: 'Mike Buckmire' , datadecade: 2010 , datastart: 2017 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 51, gamemode: 'extreme', fact: '', InstaUsername: '@buckmike_00' , InstaURL: 'https://www.instagram.com/buckmike_00/'},
{value: 'Andre Buckner' , datadecade: 2000 , datastart: 2002 , datayears: 2 , dataposition: 'G' , dataheight: 510 , datanumber: 2, gamemode: 'extreme', fact: ''},
{value: 'Ron Burt' , datadecade: 1990 , datastart: 1991 , datayears: 1 , dataposition: 'G' , dataheight: 600 , datanumber: 5, gamemode: 'extreme', fact: ''},
{value: 'Ryan Caldbeck' , datadecade: 1990 , datastart: 1998 , datayears: 3 , dataposition: 'G' , dataheight: 603 , datanumber: 5, gamemode: 'extreme', fact: ''},
{value: 'Justin Caldbeck' , datadecade: 1990 , datastart: 1996 , datayears: 3 , dataposition: 'G' , dataheight: 603 , datanumber: 3, gamemode: 'extreme', fact: ''},
{value: 'Mark Causey' , datadecade: 2000 , datastart: 2002 , datayears: 2 , dataposition: 'G' , dataheight: 603 , datanumber: 45, gamemode: 'extreme', fact: ''},
{value: 'Mike Chappell' , datadecade: 1990 , datastart: 1996 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 0, gamemode: 'extreme', fact: ''},
{value: 'Matt Christensen' , datadecade: 2000 , datastart: 2000 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 41, gamemode: 'extreme', fact: ''},
{value: 'Joe Cook' , datadecade: 1980 , datastart: 1987 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 13, gamemode: 'extreme', fact: ''},
{value: 'Olek Czyz' , datadecade: 2000 , datastart: 2008 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 13, gamemode: 'extreme', fact: '', InstaUsername: '@olekczyz' , InstaURL: 'https://www.instagram.com/olekczyz/'},
{value: 'Jordan Davidson' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'G' , dataheight: 601 , datanumber: 41, gamemode: 'extreme', fact: ''},
{value: 'Patrick Davidson' , datadecade: 2000 , datastart: 2003 , datayears: 3 , dataposition: 'G' , dataheight: 600 , datanumber: 41, gamemode: 'extreme', fact: ''},
{value: 'Andre Dawkins' , datadecade: 2000 , datastart: 2009 , datayears: 5 , dataposition: 'G' , dataheight: 605 , datanumber: 34, gamemode: 'extreme', fact: '', InstaUsername: '@andre_dawkins34' , InstaURL: 'https://www.instagram.com/andre_dawkins34/'},
{value: 'Taymon Domzalski' , datadecade: 1990 , datastart: 1995 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 13, gamemode: 'extreme', fact: ''},
{value: 'Trevon Duval' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 1, gamemode: 'extreme', fact: '', InstaUsername: '@treduval' , InstaURL: 'https://www.instagram.com/treduval/'},
{value: 'Daniel Ewing' , datadecade: 2000 , datastart: 2001 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 5, gamemode: 'extreme', fact: 'Former NBA Player, Texas Mr. Basketball (2001)', InstaUsername: '@mrdanielewing' , InstaURL: 'https://www.instagram.com/mrdanielewing/'},
{value: 'Michael Gbinije' , datadecade: 2010 , datastart: 2011 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 13, gamemode: 'extreme', fact: '', InstaUsername: '@mikegbinije' , InstaURL: 'https://www.instagram.com/mikegbinije/'},
{value: 'Josh Hairston' , datadecade: 2000 , datastart: 2009 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 15, gamemode: 'extreme', fact: '', InstaUsername: '@jhairston15' , InstaURL: 'https://www.instagram.com/jhairston15/'},
{value: 'Jeremy Hall' , datadecade: 1990 , datastart: 1995 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 0, gamemode: 'extreme', fact: ''},
{value: 'Jay Heaps' , datadecade: 1990 , datastart: 1995 , datayears: 4 , dataposition: 'G' , dataheight: 509 , datanumber: 22, gamemode: 'extreme', fact: ''},
{value: 'Dave Henderson' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 12, gamemode: 'extreme', fact: ''},
{value: 'Thomas Hill' , datadecade: 1980 , datastart: 1989 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 25, gamemode: 'extreme', fact: ''},
{value: 'Nick Horvath' , datadecade: 2000 , datastart: 2000 , datayears: 2 , dataposition: 'F' , dataheight: 610 , datanumber: 3, gamemode: 'extreme', fact: ''},
{value: 'Frank Jackson' , datadecade: 2010 , datastart: 2016 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 1, gamemode: 'extreme', fact: '', InstaUsername: '@franklinjackson5' , InstaURL: 'https://www.instagram.com/franklinjackson5/'},
{value: 'Chase Jeter' , datadecade: 2010 , datastart: 2015 , datayears: 2 , dataposition: 'C' , dataheight: 610 , datanumber: 2, gamemode: 'extreme', fact: '', InstaUsername: '@yhase_' , InstaURL: 'https://www.instagram.com/yhase_/'},
{value: 'Max Johns' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 41, gamemode: 'extreme', fact: '', InstaUsername: '@maj0hns' , InstaURL: 'https://www.instagram.com/maj0hns/'},
{value: 'Steve Johnson' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'F' , dataheight: 605 , datanumber: 51, gamemode: 'extreme', fact: ''},
{value: 'Patrick Johnson' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'C' , dataheight: 609 , datanumber: 51, gamemode: 'extreme', fact: ''},
{value: 'Bates Jones' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 34, gamemode: 'extreme', fact: 'Siblings of Daniel Jones (NFL) and Ruthie Jones (Duke Soccer)', InstaUsername: '@batesjones' , InstaURL: 'https://www.instagram.com/batesjones/'},
{value: 'Matt Jones' , datadecade: 2010 , datastart: 2013 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 13, gamemode: 'extreme', fact: ''},
{value: 'Sean Kelly' , datadecade: 2010 , datastart: 2011 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 42, gamemode: 'extreme', fact: '', InstaUsername: '@_skbok_' , InstaURL: 'https://www.instagram.com/_skbok_/'},
{value: 'Taylor King' , datadecade: 2000 , datastart: 2007 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 20, gamemode: 'extreme', fact: '', InstaUsername: '@tayking31' , InstaURL: 'https://www.instagram.com/tayking31/'},
{value: 'Billy King' , datadecade: 1980 , datastart: 1984 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 55, gamemode: 'extreme', fact: ''},
{value: 'Greg Koubek' , datadecade: 1980 , datastart: 1987 , datayears: 3 , dataposition: 'F' , dataheight: 606 , datanumber: 22, gamemode: 'extreme', fact: ''},
{value: 'Reggie Love' , datadecade: 2000 , datastart: 2001 , datayears: 4 , dataposition: 'F' , dataheight: 604 , datanumber: 30, gamemode: 'extreme', fact: '', InstaUsername: '@reggielove33' , InstaURL: 'https://www.instagram.com/reggielove33/'},
{value: 'David Mayer' , datadecade: 2010 , datastart: 2010 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 51, gamemode: 'extreme', fact: ''},
{value: 'Bill McCaffrey' , datadecade: 1980 , datastart: 1989 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 5, gamemode: 'extreme', fact: ''},
{value: 'David McClure' , datadecade: 2000 , datastart: 2005 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 14, gamemode: 'extreme', fact: ''},
{value: 'Doug McNeely' , datadecade: 1980 , datastart: 1980 , datayears: 4 , dataposition: 'F' , dataheight: 604 , datanumber: 11, gamemode: 'extreme', fact: ''},
{value: 'Dan Meagher' , datadecade: 1980 , datastart: 1981 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 45, gamemode: 'extreme', fact: 'Competed in 1984 Summer Olympics for Team Canada'},
{value: 'Andy Means' , datadecade: 2000 , datastart: 2001 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 53, gamemode: 'extreme', fact: ''},
{value: 'Lee Melchionni' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 13, gamemode: 'extreme', fact: 'Currently an NBA player agent, Father, Gary Melchionni, was a 2x Duke Captain', InstaUsername: '@leemelch' , InstaURL: 'https://www.instagram.com/leemelch/'},
{value: 'Tony Moore' , datadecade: 1990 , datastart: 1992 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 30, gamemode: 'extreme', fact: ''},
{value: 'Alex Murphy' , datadecade: 2010 , datastart: 2011 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 12, gamemode: 'extreme', fact: '', InstaUsername: '@a5murphy' , InstaURL: 'https://www.instagram.com/a5murphy/'},
{value: 'DeMarcus Nelson' , datadecade: 2000 , datastart: 2004 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 21, gamemode: 'extreme', fact: ''},
{value: 'Martin Nessley' , datadecade: 1980 , datastart: 1983 , datayears: 4 , dataposition: 'C' , dataheight: 702 , datanumber: 44, gamemode: 'extreme', fact: 'Former NBA Player'},
{value: 'Greg Newton' , datadecade: 1990 , datastart: 1993 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 55, gamemode: 'extreme', fact: 'Member of 1998 Canadian National Team at the World Championships & led Canada in Scoring & Rebounding'},
{value: 'Tom Novik' , datadecade: 2000 , datastart: 2003 , datayears: 2 , dataposition: 'F' , dataheight: 606 , datanumber: 50, gamemode: 'extreme', fact: ''},
{value: 'Sean Obi' , datadecade: 2010 , datastart: 2014 , datayears: 3 , dataposition: 'F' , dataheight: 609 , datanumber: 34, gamemode: 'extreme', fact: '', InstaUsername: '@seanobi34' , InstaURL: 'https://www.instagram.com/seanobi34/'},
{value: 'Nick Pagliuca' , datadecade: 2010 , datastart: 2013 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 45, gamemode: 'extreme', fact: '', InstaUsername: '@nickpag23' , InstaURL: 'https://www.instagram.com/nickpag23/'},
{value: 'Joe Pagliuca' , datadecade: 2000 , datastart: 2003 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 45, gamemode: 'extreme', fact: ''},
{value: 'Crawford Palmer' , datadecade: 1980 , datastart: 1988 , datayears: 2 , dataposition: 'C' , dataheight: 609 , datanumber: 34, gamemode: 'extreme', fact: ''},
{value: 'Greg Paulus' , datadecade: 2000 , datastart: 2005 , datayears: 4 , dataposition: 'G' , dataheight: 601 , datanumber: 3, gamemode: 'extreme', fact: ''},
{value: 'Ross Perkins' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 40, gamemode: 'extreme', fact: ''},
{value: 'Baker Perry' , datadecade: 1990 , datastart: 1995 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 0, gamemode: 'extreme', fact: ''},
{value: 'Casey Peters' , datadecade: 2000 , datastart: 2007 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 53, gamemode: 'extreme', fact: '', InstaUsername: '@cpcincotres' , InstaURL: 'https://www.instagram.com/cpcincotres/'},
{value: 'Martynas Pocius' , datadecade: 2000 , datastart: 2005 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 5, gamemode: 'extreme', fact: '', InstaUsername: '@mpocius' , InstaURL: 'https://www.instagram.com/mpocius/'},
{value: 'Ricky Price' , datadecade: 1990 , datastart: 1994 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 3, gamemode: 'extreme', fact: ''},
{value: 'Justin Robinson' , datadecade: 2010 , datastart: 2015 , datayears: 5 , dataposition: 'F' , dataheight: 609 , datanumber: 50, gamemode: 'extreme', fact: '', InstaUsername: '@jmoney_05' , InstaURL: 'https://www.instagram.com/jmoney_05/'},
{value: 'Casey Sanders' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'C' , dataheight: 611 , datanumber: 20, gamemode: 'extreme', fact: ''},
{value: 'J.D. Simpson' , datadecade: 1990 , datastart: 1997 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 13, gamemode: 'extreme', fact: ''},
{value: 'Todd Singleton' , datadecade: 1990 , datastart: 1994 , datayears: 4 , dataposition: 'F' , dataheight: 604 , datanumber: 15, gamemode: 'extreme', fact: ''},
{value: 'John Smith' , datadecade: 1980 , datastart: 1985 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 33, gamemode: 'extreme', fact: ''},
{value: 'Nick Sutton' , datadecade: 2000 , datastart: 2006 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 13, gamemode: 'extreme', fact: ''},
{value: 'Andre Sweet' , datadecade: 2000 , datastart: 2000 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 12, gamemode: 'extreme', fact: ''},
{value: 'Patrick Tapé' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 12, gamemode: 'extreme', fact: ''},
{value: 'Tyler Thornton' , datadecade: 2010 , datastart: 2010 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 3, gamemode: 'extreme', fact: '', InstaUsername: '@tythornton3' , InstaURL: 'https://www.instagram.com/tythornton3/'},
{value: 'Griffin Tormey' , datadecade: 2000 , datastart: 2005 , datayears: 2 , dataposition: 'G' , dataheight: 511 , datanumber: 40, gamemode: 'extreme', fact: ''},
{value: 'Antonio Vrankovic' , datadecade: 2010 , datastart: 2015 , datayears: 4 , dataposition: 'C' , dataheight: 700 , datanumber: 30, gamemode: 'extreme', fact: '', InstaUsername: '@v_tonio' , InstaURL: 'https://www.instagram.com/v_tonio/'},
{value: 'Carmen Wallace' , datadecade: 1990 , datastart: 1993 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 34, gamemode: 'extreme', fact: ''},
{value: 'Weldon Williams' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 40, gamemode: 'extreme', fact: ''},
{value: 'Steve Wojciechowski' , datadecade: 1990 , datastart: 1994 , datayears: 4 , dataposition: 'G' , dataheight: 511 , datanumber: 12, gamemode: 'extreme', fact: ''},
{value: 'Todd Zafirovski' , datadecade: 2000 , datastart: 2009 , datayears: 5 , dataposition: 'F' , dataheight: 609 , datanumber: 52, gamemode: 'extreme', fact: '', InstaUsername: '@tdotzaf' , InstaURL: 'https://www.instagram.com/tdotzaf/'},
{value: 'Brian Zoubek' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'C' , dataheight: 701 , datanumber: 55, gamemode: 'extreme', fact: 'NCAA Champion (2010)', InstaUsername: '@zoubuilds' , InstaURL: 'https://www.instagram.com/zoubuilds/'},
{value: 'Mark Alarie' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 32, gamemode: 'hard', fact: 'NBA 1st Round Pick, 3-Time All-ACC, All-America (1986)'},
{value: 'Tommy Amaker' , datadecade: 1980 , datastart: 1983 , datayears: 4 , dataposition: 'G' , dataheight: 600 , datanumber: 4, gamemode: 'hard', fact: 'Former NBA Player, Current Head Coach of Harvard Basketball'},
{value: 'William Avery' , datadecade: 1990 , datastart: 1997 , datayears: 2 , dataposition: 'G' , dataheight: 602 , datanumber: 5, gamemode: 'hard', fact: 'NBA 1st Round Pick'},
{value: 'Joey Baker' , datadecade: 2010 , datastart: 2018 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 13, gamemode: 'hard', fact: '', InstaUsername: '@joeywbaker' , InstaURL: 'https://www.instagram.com/joeywbaker/'},
{value: 'Jaemyn Brakefield' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 5, gamemode: 'hard', fact: '', InstaUsername: '@jaemynbrakefield' , InstaURL: 'https://www.instagram.com/jaemynbrakefield/'},
{value: 'Kale Catchings' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'F' , dataheight: 605 , datanumber: 12, gamemode: 'hard', fact: '', InstaUsername: '@_kcatch_' , InstaURL: 'https://www.instagram.com/_kcatch_/'},
{value: 'Marty Clark' , datadecade: 1990 , datastart: 1990 , datayears: 4 , dataposition: 'G' , dataheight: 606 , datanumber: 3, gamemode: 'hard', fact: '2x NCAA Champion'},
{value: 'Henry Coleman' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 34, gamemode: 'hard', fact: '', InstaUsername: '@henrycolemann3' , InstaURL: 'https://www.instagram.com/henrycolemann3/'},
{value: 'Chris Collins' , datadecade: 1990 , datastart: 1992 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 20, gamemode: 'hard', fact: 'Former Duke Associate Head Coach, Current Northwestern Head Coach'},
{value: 'Brian Davis' , datadecade: 1980 , datastart: 1988 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 23, gamemode: 'hard', fact: '2x NCAA Champion, Former NBA Player'},
{value: 'Javin DeLaurier' , datadecade: 2010 , datastart: 2016 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 12, gamemode: 'hard', fact: '', InstaUsername: '@javin' , InstaURL: 'https://www.instagram.com/javin/'},
{value: 'Sean Dockery' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 15, gamemode: 'hard', fact: ''},
{value: 'Harry Giles III' , datadecade: 2010 , datastart: 2016 , datayears: 1 , dataposition: 'F' , dataheight: 610 , datanumber: 1, gamemode: 'hard', fact: 'Current NBA Player, 1st Round Pick', InstaUsername: '@hgiizzle' , InstaURL: 'https://www.instagram.com/hgiizzle/'},
{value: 'Jordan Goldwire' , datadecade: 2010 , datastart: 2017 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 14, gamemode: 'hard', fact: '', InstaUsername: '@jordangoldwire' , InstaURL: 'https://www.instagram.com/jordangoldwire/'},
{value: 'Jacob Grandison' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'G' , dataheight: 606 , datanumber: 13, gamemode: 'hard', fact: 'Graduate Transfer from Illinois', InstaUsername: '@slimjake_' , InstaURL: 'https://www.instagram.com/slimjake_/'},
{value: 'Gerald Henderson' , datadecade: 2000 , datastart: 2006 , datayears: 3 , dataposition: 'G' , dataheight: 604 , datanumber: 15, gamemode: 'hard', fact: 'Former NBA Player, 1st Round Pick', InstaUsername: '@g_hender09' , InstaURL: 'https://www.instagram.com/g_hender09/'},
{value: 'Phil Henderson' , datadecade: 1980 , datastart: 1986 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 44, gamemode: 'hard', fact: 'Led Duke to three consecutive Final Four appearances'},
{value: 'Rodney Hood' , datadecade: 2010 , datastart: 2012 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 5, gamemode: 'hard', fact: '1st Round Pick', InstaUsername: '@hoodie5' , InstaURL: 'https://www.instagram.com/hoodie5/'},
{value: 'Matthew Hurt' , datadecade: 2010 , datastart: 2019 , datayears: 2 , dataposition: 'F' , dataheight: 609 , datanumber: 21, gamemode: 'hard', fact: 'First Team All-ACC (2021)', InstaUsername: '@mhurt22' , InstaURL: 'https://www.instagram.com/mhurt22/'},
{value: 'Nate James' , datadecade: 1990 , datastart: 1997 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 14, gamemode: 'hard', fact: 'NCAA Champion (2010) & NCAA Champion Coach (2015), Current Austin Peay Head Coach', InstaUsername: '@realnatejames' , InstaURL: 'https://www.instagram.com/realnatejames/'},
{value: 'Theo John' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 12, gamemode: 'hard', fact: '', InstaUsername: '@theojohn123' , InstaURL: 'https://www.instagram.com/theojohn123/'},
{value: 'Dahntay Jones' , datadecade: 2000 , datastart: 2002 , datayears: 2 , dataposition: 'F' , dataheight: 606 , datanumber: 30, gamemode: 'hard', fact: 'NBA Champion, Former NBA Player, 1st Round Pick'},
{value: 'Trevor Keels' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 1, gamemode: 'hard', fact: 'Current NBA Player, Second Round Draft Pick', InstaUsername: '@trevorkeels' , InstaURL: 'https://www.instagram.com/trevorkeels/'},
{value: 'Ryan Kelly' , datadecade: 2000 , datastart: 2009 , datayears: 4 , dataposition: 'F' , dataheight: 611 , datanumber: 34, gamemode: 'hard', fact: 'NCAA Champion (2010)', InstaUsername: '@ryannkelly34' , InstaURL: 'https://www.instagram.com/ryannkelly34/'},
{value: 'Corey Maggette' , datadecade: 1990 , datastart: 1998 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 50, gamemode: 'hard', fact: 'Former NBA Player, 1st Round Pick'},
{value: 'Roshown Mcleod' , datadecade: 1990 , datastart: 1996 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 4, gamemode: 'hard', fact: 'Former NBA Player, 1st Round Pick'},
{value: 'Josh McRoberts' , datadecade: 2000 , datastart: 2005 , datayears: 2 , dataposition: 'F' , dataheight: 610 , datanumber: 2, gamemode: 'hard', fact: 'Former NBA Player, 2nd Round Pick'},
{value: 'Erik Meek' , datadecade: 1990 , datastart: 1991 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 52, gamemode: 'hard', fact: 'NCAA Champion, 2nd Round NBA Draft Pick'},
{value: 'Alex O\'Connell' , datadecade: 2010 , datastart: 2017 , datayears: 3 , dataposition: 'G' , dataheight: 606 , datanumber: 15, gamemode: 'hard', fact: '', InstaUsername: '@alex_oc15' , InstaURL: 'https://www.instagram.com/alex_oc15/'},
{value: 'Semi Ojeleye' , datadecade: 2010 , datastart: 2013 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 20, gamemode: 'hard', fact: 'Former NBA Player, 2nd Round Pick', InstaUsername: '@semi' , InstaURL: 'https://www.instagram.com/semi/'},
{value: 'Cherokee Parks' , datadecade: 1990 , datastart: 1991 , datayears: 4 , dataposition: 'C' , dataheight: 611 , datanumber: 44, gamemode: 'hard', fact: 'NCAA Champion (1992), Former NBA Player, 1st Round Pick'},
{value: 'Shavlik Randolph' , datadecade: 2000 , datastart: 2002 , datayears: 3 , dataposition: 'F' , dataheight: 610 , datanumber: 42, gamemode: 'hard', fact: 'Former NBA Player', InstaUsername: '@shavrandolph1' , InstaURL: 'https://www.instagram.com/shavrandolph1/'},
{value: 'Kyle Singler' , datadecade: 2000 , datastart: 2007 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 12, gamemode: 'hard', fact: 'NCAA Champion (2010), 2nd Round NBA Draft Pick, Most minutes played in Duke History', InstaUsername: '@kylesingler' , InstaURL: 'https://www.instagram.com/kylesingler/'},
{value: 'Cassius Stanley' , datadecade: 2010 , datastart: 2019 , datayears: 1 , dataposition: 'G' , dataheight: 606 , datanumber: 2, gamemode: 'hard', fact: '2nd Round Pick', InstaUsername: '@cassiusstannley' , InstaURL: 'https://www.instagram.com/cassiusstannley/'},
{value: 'DJ Steward' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 2, gamemode: 'hard', fact: 'ACC All-Freshman Team', InstaUsername: '@djstewardd' , InstaURL: 'https://www.instagram.com/djstewardd/'},
{value: 'Kevin Strickland' , datadecade: 1980 , datastart: 1984 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 31, gamemode: 'hard', fact: ''},
{value: 'Rasheed Sulaimon' , datadecade: 2010 , datastart: 2012 , datayears: 2 , dataposition: 'G' , dataheight: 604 , datanumber: 14, gamemode: 'hard', fact: 'ACC All-Freshman Team', InstaUsername: '@kingsulaimon0' , InstaURL: 'https://www.instagram.com/kingsulaimon0/'},
{value: 'Lance Thomas' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 42, gamemode: 'hard', fact: 'NCAA Champion (2010), Former NBA Player', InstaUsername: '@mrlance42' , InstaURL: 'https://www.instagram.com/mrlance42/'},
{value: 'Gary Trent Jr' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'G' , dataheight: 606 , datanumber: 2, gamemode: 'hard', fact: 'Current NBA Player, 2nd Round Draft Pick', InstaUsername: '@gtrentjr' , InstaURL: 'https://www.instagram.com/gtrentjr/'},
{value: 'Jack White' , datadecade: 2010 , datastart: 2016 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 41, gamemode: 'hard', fact: 'Duke Team Captain', InstaUsername: '@jackwhite5' , InstaURL: 'https://www.instagram.com/jackwhite5/'},
{value: 'Elliot Williams' , datadecade: 2000 , datastart: 2008 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 20, gamemode: 'hard', fact: 'Former NBA Player, 1st Round Pick', InstaUsername: '@_ewill901' , InstaURL: 'https://www.instagram.com/_ewill901/'},
{value: 'Shelden Williams' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'F' , dataheight: 609 , datanumber: 23, gamemode: 'hard', fact: 'Former NBA Player, 5th Overall Pick. Most Blocks, Offensive Rebounds, and Defensive Rebounds in Duke History', InstaUsername: '@sheldennwilliams' , InstaURL: 'https://www.instagram.com/sheldennwilliams/'},
{value: 'Keenan Worthington' , datadecade: 2010 , datastart: 2019 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 45, gamemode: 'hard', fact: '', InstaUsername: '@keenanworthington' , InstaURL: 'https://www.instagram.com/keenanworthington/'},
]
  
  ///Player List - End
  
  let secretPlayer = null;
  let normalmode = document.getElementById('normal-mode');
  let easymode = document.getElementById('easy-mode');
  let hardmode = document.getElementById('hard-mode');
  
  let timerButton = document.getElementById('timer');
  
  easymode.disabled = true;
  

  /////////Input Button Change - Start
  
  const inputEl = document.querySelector("#player-list");
  const autocompleteContainer = document.querySelector("#autocomplete-container");
  
  inputEl.addEventListener("input", onInputChange);
  
  function onInputChange() {
    removeAutocompleteDropdown();
  
    const value = inputEl.value.toLowerCase();
  
    if (value.length === 0) return;
  
    let filteredPlayers = [];
  
    if (easymode.disabled) {
      filteredPlayers = playerList.filter((player) =>
        player.value.toLowerCase().includes(value) && player.gamemode === "easy"
      );
    } else if (normalmode.disabled) {
      filteredPlayers = playerList.filter((player) =>
        player.value.toLowerCase().includes(value) &&
        (player.gamemode === "easy" || player.gamemode === "normal")
      );
    } else if (hardmode.disabled) {
      filteredPlayers = playerList.filter((player) =>
        player.value.toLowerCase().includes(value)
      );
    }
  
    createAutoCompleteDropdown(filteredPlayers);
  }
  
  
  function createAutoCompleteDropdown(filteredPlayers) {
    const listEl = document.createElement("ul");
    listEl.className = "autocomplete-list";
    listEl.id = "autocomplete-list";
  
    filteredPlayers.forEach((player) => {
      const listItem = document.createElement("li");
      const playerButton = document.createElement("button");
      playerButton.innerHTML = player.value;
      playerButton.addEventListener("click", () => {
        inputEl.value = player.value;
        listEl.innerHTML = ""; // Clear the dropdown after selection
      });
      listItem.appendChild(playerButton);
      listEl.appendChild(listItem);
    });
  
    autocompleteContainer.appendChild(listEl);
  }
  
  
  function removeAutocompleteDropdown() {
  const listEl = document.querySelector("#autocomplete-list");
  if (listEl) listEl.remove();
  }
  
  //////Input Button Change - End
  
  ////Toggle for Button - Start
  [normalmode, easymode, hardmode].forEach((button, i) => {
    button.addEventListener('click', () => {
      if (button === normalmode) {
        easymode.disabled = false;
        hardmode.disabled = false;
      } else if (button === easymode) {
        normalmode.disabled = false;
        hardmode.disabled = false;
      } else {
        normalmode.disabled = false;
        easymode.disabled = false;
      }
      button.disabled = true;
      resetGame();
    });
  });
  
  ////Toggle for Buttons - End
  
  
  // Pick a secret player at random - Start
  function pickSecretPlayer() {
    const playerSelect = document.getElementById('player-list');
  
    //Easy Mode - Start//
  if (easymode.disabled === true) {
    const easyPlayers = playerList.filter(player => player.gamemode === 'easy');
    
    // Create options for the easy players
    easyPlayers.forEach((player) => {
      const option = document.createElement('option');
      option.value = player.value;
      option.text = player.value;
      playerSelect.appendChild(option);
    });
  
    // Get a random index for selecting a player
    const playerIndex = Math.floor(Math.random() * easyPlayers.length);
  
    // Get the selected player's attributes
    const selectedPlayer = easyPlayers[playerIndex];
    const name = selectedPlayer.value;
    const decade = selectedPlayer.datadecade;
    const start = selectedPlayer.datastart;
    const years = selectedPlayer.datayears;
    const position = selectedPlayer.dataposition;
    const height = selectedPlayer.dataheight;
    const number = selectedPlayer.datanumber;
  
    const fact = selectedPlayer.fact;
    // Get the selected player's Instagram info
    const instaUsername = selectedPlayer.InstaUsername;
    const instaURL = selectedPlayer.InstaURL;

    // Set the selected player as the secret player
    secretPlayer = { name, decade, start, years, position, height, number, fact, InstaUsername: instaUsername, InstaURL: instaURL };
  }
  
  
    
  //Easy Mode - End//
    
    
    ////Normal Mode///
    if (normalmode.disabled === true) {
    const normalPlayers = playerList.filter(player => player.gamemode === 'easy' || player.gamemode === 'normal');
    
      // Create options for the normal players
      normalPlayers.forEach((player) => {
        const option = document.createElement('option');
        option.value = player.value;
        option.text = player.value;
        playerSelect.appendChild(option);
      });
  
      // Get a random index for selecting a player
      const playerIndex = Math.floor(Math.random() * normalPlayers.length);
  
      // Get the selected player's attributes
      const selectedPlayer = normalPlayers[playerIndex];
      const name = selectedPlayer.value;
      const decade = selectedPlayer.datadecade;
      const start = selectedPlayer.datastart;
      const years = selectedPlayer.datayears;
      const position = selectedPlayer.dataposition;
      const height = selectedPlayer.dataheight;
      const number = selectedPlayer.datanumber;
      
      const fact = selectedPlayer.fact;
  
      // Set the selected player as the secret player
      secretPlayer = { name, decade, start, years, position, height, number, fact };
    }
    
  //Hard Mode - Start /
    if (hardmode.disabled === true) {
      playerList.forEach((player) => {
        const option = document.createElement('option');
        option.value = player.value;
        option.text = player.value;
        playerSelect.appendChild(option);
      });
    
      // Get a random index for selecting a player
      const playerIndex = Math.floor(Math.random() * playerList.length);
  
      // Get the selected player's attributes
      const selectedPlayer = playerList[playerIndex];
      const name = selectedPlayer.value;
      const decade = selectedPlayer.datadecade;
      const start = selectedPlayer.datastart;
      const years = selectedPlayer.datayears;
      const position = selectedPlayer.dataposition;
      const height = selectedPlayer.dataheight;
      const number = selectedPlayer.datanumber;
      const fact = selectedPlayer.fact;
      // Set the selected player as the secret player
      secretPlayer = { name, decade, start, years, position, height, number, fact };
    }
    ///Hard Mode End
  }
  
    document.addEventListener('DOMContentLoaded', function() {
    // Call the pickSecretPlayer() function to set the initial secret player
    pickSecretPlayer()
  });
  
  document.getElementById("guess-button").addEventListener("click", function() {
    updateTable();
    clearInputField();
  });
  
  function clearInputField() {
    inputEl.value = "";
  }
  
  /// Secret Player - End
  
  //////// Start of Input Protection
  
  const inputElement = document.getElementById('player-list');
  
  inputElement.addEventListener('input', function(event) {
      const inputValue = event.target.value;
  
      // Remove any characters that are not letters or spaces
      const sanitizedValue = inputValue.replace(/[^A-Za-z\s]/g, '');
  
      // Ensure the length does not exceed 30 characters
      const truncatedValue = sanitizedValue.slice(0, 20);
  
      // Update the input value
      event.target.value = truncatedValue;
  });
  
  inputElement.addEventListener('input', function(event) {
      const inputValue = event.target.value;
  
      // Remove any characters that are not letters or spaces
      const sanitizedValue = inputValue.replace(/[^A-Za-z\s]/g, '');
  
      // Ensure the length does not exceed 30 characters
      const truncatedValue = sanitizedValue.slice(0, 20);
  
      // Update the input value
      event.target.value = truncatedValue;
  });
  
  inputElement.addEventListener('keydown', function(event) {
      // Prevent the Enter key from triggering the default form submission
      if (event.key === 'Enter') {
          event.preventDefault();
      }
  });
  
  
  /////// End of Input Protection
  

  /////////// Animation Buttons -  Start

  const resetButton = document.getElementById('reset-button');
  let isAnimating = false;
  
  // Function to animate the button left and right
  function animateResetButtonWin() {
    if (!isAnimating) {
      isAnimating = true;
  
      // Apply CSS transition for smooth animation
      resetButton.style.transition = 'transform 0.5s ease-in-out';
  
      // Move the button to the left
      resetButton.style.transform = 'translateX(-50px)';
  
      // After a delay, move the button back to the right
      setTimeout(() => {
        resetButton.style.transform = 'translateX(50px)';
      }, 500);
  
      // After another delay, reset the button to its original position
      setTimeout(() => {
        resetButton.style.transform = 'translateX(0)';
        isAnimating = false;
  
        // Remove the transition to prevent future animations from being affected
        resetButton.style.transition = 'transform 0.5s ease-in-out';
      }, 1000);
    }
  }
  
   // Function to animate the button pop!
   function animateResetButtonLose() {
    if (!isAnimating) {
        isAnimating = true;
        const resetButton = document.getElementById('reset-button');

        // Change button text to "Try Again!" and apply scaling animation
        resetButton.textContent = 'Try Again!';
        // Apply CSS transition for scaling animation with a longer duration
        resetButton.style.transition = 'transform 3s ease-in-out';

        // Slightly scale up the button for a more subtle effect
        resetButton.style.transform = 'scale(20)';

        // After a delay, scale the button back down
        setTimeout(() => {
            resetButton.style.transform = 'scale(1)';
        }, 750); // The duration for scaling back down

        // Reset the animation state
        setTimeout(() => {
            resetButton.textContent = 'Reset';
            isAnimating = false;
            resetButton.style.transition = '';
        }, 3000); // This should match the duration of the scale down transition
        
    }
}




  /////////// Animation Buttons -  End
  


  ////// Start - Update the Guess Number in H3
  
  function updateGuessesRemaining() {
    let emptyCellsInCurrentRow = 0;
    let foundEmptyCell = false;
  
    // Find the next available row
    for (let i = 1; i <= 6; i++) {
      const playerCell = document.querySelector(`#guess-row-${i} .player-${i}`);
      if (playerCell.innerHTML.trim() === '') {
        emptyCellsInCurrentRow = i - 1; // Calculate remaining empty cells in the current row
        foundEmptyCell = true;
        break;
      }
    }
  
    if (!foundEmptyCell) {
      document.getElementById('guesses-remaining').textContent = 'Try Again! 6';
    } else {
      document.getElementById('guesses-remaining').textContent = emptyCellsInCurrentRow.toString();
    }

  }
  
  
  ///// End - Update the Guess Number in H3
  
  //////// Update Table - Start
  
  function updateTable() {
    const selectedOption = document.getElementById("player-list").value;
    const selectedIndex = playerList.map(e => e.value).indexOf(selectedOption);
  
    if (playerList[selectedIndex].value === secretPlayer.name) {
      // Disable UI elements
      document.getElementById("player-list").disabled = true;
      document.getElementById("guess-button").disabled = true;
  
      // Clear the secret player fact container before appending
      const secretPlayerFactContainer = document.getElementById("secret-player-fact");
      secretPlayerFactContainer.innerHTML = "";  // Clear the content before appending
  
      // Append the new fact to the cleared container
      const secretPlayerFactCorrect = document.createTextNode(secretPlayer.fact);
      secretPlayerFactContainer.appendChild(secretPlayerFactCorrect);

      // Append the player's name to the cleared container
        const secretPlayerNameContainer = document.getElementById("secret-player-name");
        const secretPlayerNameText = document.createTextNode(secretPlayer.name); // Use 'name' for the player's name
        secretPlayerNameContainer.appendChild(secretPlayerNameText);

        const secretPlayerInstaUsernameContainer = document.getElementById("secret-player-instagram");
        secretPlayerInstaUsernameContainer.innerHTML = "";  // Clear the content before appending
        
        // Check if InstaUsername and InstaURL are defined for the player
        if (secretPlayer.InstaUsername && secretPlayer.InstaURL) {
            const instagramLink = document.createElement('a');
            instagramLink.href = secretPlayer.InstaURL;
            instagramLink.textContent = secretPlayer.InstaUsername;
            instagramLink.target = '_blank';
            secretPlayerInstaUsernameContainer.appendChild(instagramLink);
        } else {
            // Handle the case where InstaUsername or InstaURL is not defined
            secretPlayerInstaUsernameContainer.textContent = "";
        }
        


  
      // Runs the correct guess function as well
      correctGuess();
    }
    
    //// Score Counter - if function (end) ///
    
    
    // Get the player row that needs to be updated
    let rowNumber = 0;
    for (let i = 1; i <= 6; i++) {
      if (!document.querySelector(`#guess-row-${i} .player-${i}`).innerHTML) {
        rowNumber = i;
        break;
      }
    }
  
    // Update the table with the selected player's attributes
    const selectedPlayer = document.querySelector(
      `option[value="${selectedOption}"]`
    );
  
    document.querySelector(`#guess-row-${rowNumber} .player-${rowNumber}`).innerHTML =
      playerList[selectedIndex].value;
    document.querySelector(`#guess-row-${rowNumber} .decade-${rowNumber}`).innerHTML =
     playerList[selectedIndex].datadecade;
    document.querySelector(`#guess-row-${rowNumber} .first-year-${rowNumber}`).innerHTML =
      playerList[selectedIndex].datastart;
    document.querySelector(`#guess-row-${rowNumber} .num-years-${rowNumber}`).innerHTML =
      playerList[selectedIndex].datayears;
    document.querySelector(`#guess-row-${rowNumber} .position-${rowNumber}`).innerHTML =
      playerList[selectedIndex].dataposition;
    document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).innerHTML =
      playerList[selectedIndex].dataheight;
    document.querySelector(`#guess-row-${rowNumber} .number-${rowNumber}`).innerHTML =
      playerList[selectedIndex].datanumber;
  
    // Check if the selected player matches the secret player
    if (playerList[selectedIndex].value === secretPlayer.name) {
        const guessedRow = document.querySelector(`#guess-row-${rowNumber}`);
      
        // Add the "guessed" class to the entire row
        guessedRow.classList.add("guessed");
      
        // Add the "guessed" class to all cells in the row
        guessedRow.querySelectorAll('td').forEach(cell => {
          cell.classList.add("guessed");
        });
      
        // Add the "guessed" class to cells for additional player data
        guessedRow.querySelector(`.decade`).classList.add("guessed");
        guessedRow.querySelector(`.start`).classList.add("guessed");
        guessedRow.querySelector(`.years`).classList.add("guessed");
        guessedRow.querySelector(`.position`).classList.add("guessed");
        guessedRow.querySelector(`.height`).classList.add("guessed");
        guessedRow.querySelector(`.number`).classList.add("guessed");
      
        // Disable UI elements
        document.getElementById("player-list").disabled = true;
        document.getElementById("guess-button").disabled = true;
      }
      
      
  
   // Check if the selected player's decade matches with the secret player's decade
  if (playerList[selectedIndex].datadecade === secretPlayer.decade) {
    document.querySelector(`#guess-row-${rowNumber} .decade-${rowNumber}`).classList.add("matched");
  } else if (Math.abs(playerList[selectedIndex].datadecade - secretPlayer.decade) <= 20) {
    document.querySelector(`#guess-row-${rowNumber} .decade-${rowNumber}`).classList.add("close");
  }
  
  // Check if the selected player's start year matches with the secret player's start year
  if (playerList[selectedIndex].datastart === secretPlayer.start) {
    document.querySelector(`#guess-row-${rowNumber} .first-year-${rowNumber}`).classList.add("matched");
  } else if (Math.abs(playerList[selectedIndex].datastart - secretPlayer.start) <= 2) {
    document.querySelector(`#guess-row-${rowNumber} .first-year-${rowNumber}`).classList.add("close");
  }
  
  // Check if the selected player's number of years matches with the secret player's number of years
  if (playerList[selectedIndex].datayears === secretPlayer.years) {
    document.querySelector(`#guess-row-${rowNumber} .num-years-${rowNumber}`).classList.add("matched");
  }else if (Math.abs(playerList[selectedIndex].datayears - secretPlayer.years) <= 2) {
    document.querySelector(`#guess-row-${rowNumber} .num-years-${rowNumber}`).classList.add("close");
  }
  
  // Check if the selected player's position matches with the secret player's position
  if (playerList[selectedIndex].dataposition === secretPlayer.position) {
    document.querySelector(`#guess-row-${rowNumber} .position-${rowNumber}`).classList.add("matched");
  }
  
  // Check if the selected player's height matches with the secret player's height
  if (playerList[selectedIndex].dataheight === secretPlayer.height) {
    document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).classList.add("matched");
  } else if (Math.abs(playerList[selectedIndex].dataheight - secretPlayer.height) <= 2) {
    document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).classList.add("close");
  } else if (Math.abs(playerList[selectedIndex].dataheight - secretPlayer.height) >= 89 && Math.abs(playerList[selectedIndex].dataheight - secretPlayer.height) <= 90) {
    document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).classList.add("close");
  }
  
  // Check if the selected player's number matches with the secret player's number
  if (playerList[selectedIndex].datanumber === secretPlayer.number) {
    document.querySelector(`#guess-row-${rowNumber} .number-${rowNumber}`).classList.add("matched");
  } else if (Math.abs(playerList[selectedIndex].datanumber - secretPlayer.number) <= 2) {
    document.querySelector(`#guess-row-${rowNumber} .number-${rowNumber}`).classList.add("close");
  }
  
    // Disable the dropdown menu after 6 selections or when rowNumber is 6
    const numSelections = document.querySelectorAll(".player-6:not(:empty)").length;
    if (numSelections === 6 || rowNumber === 6) {
        document.getElementById("player-list").disabled = true;
        document.getElementById("guess-button").disabled = true;
        // Assuming that the secret player object is already defined
        const secretPlayerName = document.createTextNode(secretPlayer.name);
        const secretPlayerNameContainer = document.getElementById("secret-player-name");
        secretPlayerNameContainer.appendChild(secretPlayerName);
  
        // Append the fact only if it's not already appended
        const secretPlayerFactContainer = document.getElementById("secret-player-fact");
        if (secretPlayerFactContainer.innerHTML === "") {
            const secretPlayerFact = document.createTextNode(secretPlayer.fact);
            secretPlayerFactContainer.appendChild(secretPlayerFact);
        }

        const secretPlayerInstaUsernameContainer = document.getElementById("secret-player-instagram");
        secretPlayerInstaUsernameContainer.innerHTML = "";  // Clear the content before appending
        
        // Check if InstaUsername and InstaURL are defined for the player
        if (secretPlayer.InstaUsername && secretPlayer.InstaURL) {
            const instagramLink = document.createElement('a');
            instagramLink.href = secretPlayer.InstaURL;
            instagramLink.textContent = secretPlayer.InstaUsername;
            instagramLink.target = '_blank';
            secretPlayerInstaUsernameContainer.appendChild(instagramLink);
        } else {
            // Handle the case where InstaUsername or InstaURL is not defined
            secretPlayerInstaUsernameContainer.textContent = "No Instagram Profile";
        }
  
        // Change reset button color to yellow and text color to black
        changeResetButtonColor('yellow', 'black');
        animateResetButtonLose();
        toggleDimOverlay();
        
    }
    updateGuessesRemaining();
  }
      ///// Fun Fact Section: Sub-End
      
    
      
  
  ////// Reset the Game
  
  document.getElementById("reset-button").addEventListener("click", function() {
    resetGame();
  });
  
  
  //////// Update Table - End
  
  /////////
  // Reset the game function - Start
  
  function resetGame() {
    ///void the player-list
     const playerList = document.getElementById("player-list");
    playerList.innerHTML = "";
    inputEl.value = "";
    emptyCellsInCurrentRow = 6;
    document.getElementById('guesses-remaining').textContent = '0';
  
    removeAutocompleteDropdown();
    // Reset the secret player
   
    pickSecretPlayer();
  
    // Clear all player guesses
    for (let i = 1; i <= 6; i++) {
      document.querySelector(`#guess-row-${i} .player-${i}`).innerHTML = "";
      document.querySelector(`#guess-row-${i} .decade-${i}`).innerHTML = "";
      document.querySelector(`#guess-row-${i} .first-year-${i}`).innerHTML = "";
      document.querySelector(`#guess-row-${i} .num-years-${i}`).innerHTML = "";
      document.querySelector(`#guess-row-${i} .position-${i}`).innerHTML = "";
      document.querySelector(`#guess-row-${i} .height-${i}`).innerHTML = "";
      document.querySelector(`#guess-row-${i} .number-${i}`).innerHTML = "";
      document.querySelector(`#guess-row-${i}`).classList.remove("guessed");
      document.querySelector(`#guess-row-${i} .player-${i}`).classList.remove("guessed");
      document.querySelector(`#guess-row-${i} .decade-${i}`).classList.remove("guessed");
      document.querySelector(`#guess-row-${i} .first-year-${i}`).classList.remove("guessed");
      document.querySelector(`#guess-row-${i} .num-years-${i}`).classList.remove("guessed");
      document.querySelector(`#guess-row-${i} .position-${i}`).classList.remove("guessed");
      document.querySelector(`#guess-row-${i} .height-${i}`).classList.remove("guessed");
      document.querySelector(`#guess-row-${i} .number-${i}`).classList.remove("guessed");
      document.querySelector(`#guess-row-${i} .decade-${i}`).classList.remove("matched");
      document.querySelector(`#guess-row-${i} .first-year-${i}`).classList.remove("matched");
      document.querySelector(`#guess-row-${i} .num-years-${i}`).classList.remove("matched");
      document.querySelector(`#guess-row-${i} .position-${i}`).classList.remove("matched");
      document.querySelector(`#guess-row-${i} .height-${i}`).classList.remove("matched");
      document.querySelector(`#guess-row-${i} .number-${i}`).classList.remove("matched");
     document.querySelector(`#guess-row-${i} .decade-${i}`).classList.remove("close");
      document.querySelector(`#guess-row-${i} .first-year-${i}`).classList.remove("close");
      document.querySelector(`#guess-row-${i} .num-years-${i}`).classList.remove("close");
      document.querySelector(`#guess-row-${i} .position-${i}`).classList.remove("close");
      document.querySelector(`#guess-row-${i} .height-${i}`).classList.remove("close");
      document.querySelector(`#guess-row-${i} .number-${i}`).classList.remove("close");
      
    }
    // Reset the dropdown and enable it
    const playerListReset = document.getElementById("player-list");
    playerList.selectedIndex = 0;
    playerList.disabled = false;
    
   const guessButton = document.getElementById("guess-button");
    guessButton.selectedIndex = 0;
    guessButton.disabled = false;
    
  
    // Clear the secret player name
    const secretPlayerNameContainer = document.getElementById("secret-player-name");
    secretPlayerNameContainer.innerHTML = "";
    
    const secretPlayerFactContainer = document.getElementById("secret-player-fact");
    secretPlayerFactContainer.innerHTML = "";
    
    const secretPlayerInstaUsernameContainer = document.getElementById("secret-player-instagram");
    secretPlayerInstaUsernameContainer.innerHTML = "";
    
  }
   
  
  
  /// Reset the Game Funciton - End
  
  //////Trigger Confetti - Start
  
  // Globals
  var random = Math.random
  , cos = Math.cos
  , sin = Math.sin
  , PI = Math.PI
  , PI2 = PI * 2
  , timer = undefined
  , frame = undefined
  , confetti = [];
  
  var particles = 10
  , spread = 40
  , sizeMin = 3
  , sizeMax = 12 - sizeMin
  , eccentricity = 10
  , deviation = 100
  , dxThetaMin = -.1
  , dxThetaMax = -dxThetaMin - dxThetaMin
  , dyMin = .13
  , dyMax = .18
  , dThetaMin = .4
  , dThetaMax = .7 - dThetaMin;
  
  var colorThemes = [
  function() {
  return color(200 * random()|0, 200 * random()|0, 200 * random()|0);
  }, function() {
  var black = 200 * random()|0; return color(200, black, black);
  }, function() {
  var black = 200 * random()|0; return color(black, 200, black);
  }, function() {
  var black = 200 * random()|0; return color(black, black, 200);
  }, function() {
  return color(200, 100, 200 * random()|0);
  }, function() {
  return color(200 * random()|0, 200, 200);
  }, function() {
  var black = 256 * random()|0; return color(black, black, black);
  }, function() {
  return colorThemes[random() < .5 ? 1 : 2]();
  }, function() {
  return colorThemes[random() < .5 ? 3 : 5]();
  }, function() {
  return colorThemes[random() < .5 ? 2 : 4]();
  }
  ];
  function color(r, g, b) {
  return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  
  // Cosine interpolation
  function interpolation(a, b, t) {
  return (1-cos(PI*t))/2 * (b-a) + a;
  }
  
  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1/eccentricity, radius2 = radius+radius;
  function createPoisson() {
  // domain is the set of points which are still available to pick from
  // D = union{ [d_i, d_i+1] | i is even }
  var domain = [radius, 1-radius], measure = 1-radius2, spline = [0, 1];
  while (measure) {
  var dart = measure * random(), i, l, interval, a, b, c, d;
  
  // Find where dart lies
  for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
    a = domain[i], b = domain[i+1], interval = b-a;
    if (dart < measure+interval) {
      spline.push(dart += a-measure);
      break;
    }
    measure += interval;
  }
  c = dart-radius, d = dart+radius;
  
  // Update the domain
  for (i = domain.length-1; i > 0; i -= 2) {
    l = i-1, a = domain[l], b = domain[i];
    // c---d          c---d  Do nothing
    //   c-----d  c-----d    Move interior
    //   c--------------d    Delete interval
    //         c--d          Split interval
    //       a------b
    if (a >= c && a < d)
      if (b > d) domain[l] = d; // Move interior (Left case)
      else domain.splice(l, 2); // Delete interval
    else if (a < c && b > c)
      if (b <= d) domain[i] = c; // Move interior (Right case)
      else domain.splice(i, 0, c, d); // Split interval
  }
  
  // Re-measure the domain
  for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
    measure += domain[i+1]-domain[i];
  }
  
  return spline.sort();
  }
  
  // Create the overarching container
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top      = '0';
  container.style.left     = '0';
  container.style.width    = '100%';
  container.style.height   = '0';
  container.style.overflow = 'visible';
  container.style.zIndex   = '9999';
  
  // Confetto constructor
  function Confetto(theme) {
  this.frame = 0;
  this.outer = document.createElement('div');
  this.inner = document.createElement('div');
  this.outer.appendChild(this.inner);
  
  var outerStyle = this.outer.style, innerStyle = this.inner.style;
  outerStyle.position = 'absolute';
  outerStyle.width  = (sizeMin + sizeMax * random()) + 'px';
  outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
  innerStyle.width  = '100%';
  innerStyle.height = '100%';
  innerStyle.backgroundColor = theme();
  
  outerStyle.perspective = '50px';
  outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
  this.axis = 'rotate3D(' +
  cos(360 * random()) + ',' +
  cos(360 * random()) + ',0,';
  this.theta = 360 * random();
  this.dTheta = dThetaMin + dThetaMax * random();
  innerStyle.transform = this.axis + this.theta + 'deg)';
  
  this.x = window.innerWidth * random();
  this.y = -deviation;
  this.dx = sin(dxThetaMin + dxThetaMax * random());
  this.dy = dyMin + dyMax * random();
  outerStyle.left = this.x + 'px';
  outerStyle.top  = this.y + 'px';
  
  // Create the periodic spline
  this.splineX = createPoisson();
  this.splineY = [];
  for (var i = 1, l = this.splineX.length-1; i < l; ++i)
  this.splineY[i] = deviation * random();
  this.splineY[0] = this.splineY[l] = deviation * random();
  
  this.update = function(height, delta) {
  this.frame += delta;
  this.x += this.dx * delta;
  this.y += this.dy * delta;
  this.theta += this.dTheta * delta;
  
  // Compute spline and convert to polar
  var phi = this.frame % 7777 / 7777, i = 0, j = 1;
  while (phi >= this.splineX[j]) i = j++;
  var rho = interpolation(
    this.splineY[i],
    this.splineY[j],
    (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
  );
  phi *= PI2;
  
  outerStyle.left = this.x + rho * cos(phi) + 'px';
  outerStyle.top  = this.y + rho * sin(phi) + 'px';
  innerStyle.transform = this.axis + this.theta + 'deg)';
  return this.y > height+deviation;
  };
  }
  
  let startTime; // Variable to store the start time
  
  function removeConfetti() {
    // Cancel the ongoing addition of confetti
    if (timer !== undefined) {
        clearTimeout(timer);
        timer = undefined;
    }

    // Remove each confetti element from the DOM
    confetti.forEach(function(confetto) {
        if (confetto.outer.parentNode === container) {
            container.removeChild(confetto.outer);
        }
    });

    // Clear the confetti array
    confetti.length = 0;
}

function poof(duration) {
    if (!frame) {
        // Ensure any existing confetti is removed
        removeConfetti();

        // Append the container
        document.body.appendChild(container);

        // Add confetti
        var theme = colorThemes[0];
        (function addConfetto() {
            var confetto = new Confetto(theme);
            confetti.push(confetto);
            container.appendChild(confetto.outer);
            timer = setTimeout(addConfetto, spread * random());
        })(0);

        // Start the loop
        var prev = undefined;
        startTime = performance.now();
        requestAnimationFrame(function loop(timestamp) {
            var delta = prev ? timestamp - prev : 0;
            prev = timestamp;
            var height = window.innerHeight;

            for (var i = confetti.length - 1; i >= 0; --i) {
                if (confetti[i].update(height, delta)) {
                    container.removeChild(confetti[i].outer);
                    confetti.splice(i, 1);
                }
            }

            // Check if duration has passed
            if (timestamp < startTime + duration && (timer || confetti.length)) {
                frame = requestAnimationFrame(loop);
            } else {
                // Cleanup
                removeConfetti();
                document.body.removeChild(container);
                frame = undefined;
            }
        });
    }
}

// Trigger confetti
function triggerConfetti() {
    const confettiDuration = 5000; // 5 seconds
    poof(confettiDuration);
}

  
  
  
  ///// Score Tracker End ////////
  
  
  
  ///Timer Function - Start
  
  const easyScore = document.getElementById("easy-score");
  const normalScore = document.getElementById("normal-score");
  const hardScore = document.getElementById("hard-score");
  
  
  function displayDisabledModeAndScores() {
    
    let disabledMode = '';
    let score = '';
    
    if (normalmode.disabled) {
      disabledMode = 'Normal';
      score = 'Mode: ' + normalScore.textContent;
    } else if (easymode.disabled) {
      disabledMode = 'Easy';
      score = 'Mode: ' + easyScore.textContent;
    } else if (hardmode.disabled) {
      disabledMode = 'Hard';
      score = 'Mode: ' + hardScore.textContent;
    }
  
    const scoreText = disabledMode + " " + score;
    document.getElementById('scoreModalText').innerText = scoreText;

    // Open the score modal
    openModal('scoreModal');
  }
  
  // Add event listener to the timer button
  timerButton.addEventListener('click', () => {
    // Disable the button when clicked
    timerButton.disabled = true;
    
    // Call resetGame() immediately
    resetGame();
    
    // Reset the scores
    easyScore.textContent = '0';
    normalScore.textContent = '0';
    hardScore.textContent = '0';
  
    setTimeout(() => {
      // Call displayDisabledModeAndScores
      displayDisabledModeAndScores();
      
      // Enable the button after the timer has completed
      timerButton.disabled = false;
    }, 122000); // Delayed execution after 2 minutes (adjust the time as needed)
  });
  
  ////// Start -- correctGuess Button
  
  function changeResetButtonColor(backgroundColor, textColor) {
  resetButton.style.backgroundColor = backgroundColor;
  resetButton.style.color = textColor;
  }
  
  // Function to check if the guess is correct and update the scores
  function correctGuess(selectedIndex, secretPlayer) {
  if (playerList[selectedIndex] === secretPlayer) {
    if (easymode.disabled) {
      document.getElementById('easy-score').textContent++;
    }
    if (normalmode.disabled) {
      document.getElementById('normal-score').textContent++;
    }
    if (hardmode.disabled) {
      document.getElementById('hard-score').textContent++;
    }

    // Trigger confetti when the guess is correct
    triggerConfetti();
  
    // Change reset button color to yellow and text color to black
    changeResetButtonColor('yellow', 'black');
    animateResetButtonWin();
  
    document.getElementById('guesses-remaining').textContent = 'WINNER!';
  }

  }
  
  function changeButtonColors() {
  resetButton.style.backgroundColor = '#003087';
  resetButton.style.color = '#f1f1e6';
  }
  
  // Function to handle the click event on the reset button
  document.getElementById('reset-button').addEventListener('click', function() {
  changeButtonColors();
  });
  
  
  ////// End -- correctGuess Button
  
  ///Timer Function - End
  
  ////Prevention of Inspect Element - Start///
  
  // Disable right-click
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  
  function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }
  
  document.onkeydown = (e) => {
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    if (
      event.keyCode === 123 ||
      ctrlShiftKey(e, 'I') ||
      ctrlShiftKey(e, 'J') ||
      ctrlShiftKey(e, 'C') ||
      (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
      return false;
  };
  
  /////Prevention of Inspect Element - End/////
  
  
  //////////////////////////////////////////////////////////
  
  
  /////////// Start - Input Field Clearing Logic
  
  const inputField = document.getElementById('player-list');
  
  // Reset the input value when clicked
  inputField.addEventListener('click', function() {
    this.value = ''; // Reset the input value to an empty string
  });
  
  
  const dropDownButton = document.getElementById('dropDownArrow');
  const guessButton = document.getElementById('guess-button');
  const easyModeButton = document.getElementById('easy-mode');
  const normalModeButton = document.getElementById('normal-mode');
  const hardModeButton = document.getElementById('hard-mode');
  const timerButtonClick = document.getElementById('timer');
  
  easyModeButton.addEventListener('click', function() {
    changeButtonColors();
});

normalModeButton.addEventListener('click', function() {
    changeButtonColors();
});

hardModeButton.addEventListener('click', function() {
    changeButtonColors();
});

timerButtonClick.addEventListener('click', function() {
    changeButtonColors();
});
  
  let clickCount = 0;
  
  function toggleInput(event) {
  // Clear the input field at the beginning
  inputField.value = '';
  
  if (clickCount % 2 === 0 && event.target === guessButton) {
    // If the count is even and the clicked button is the submit button, don't change clickCount
    // or perform any actions
    return;
  }
  
  clickCount++;
  
  if (clickCount % 2 === 1) {
    // If odd number of clicks, add a space to the input
    inputField.value += ' ';
    const event = new Event('input', { bubbles: true });
    inputField.dispatchEvent(event);
  } else {
    // If even number of clicks, add a space and then remove it
    inputField.value += ' ';
    inputField.value = inputField.value.slice(0, -1); // Remove the added space
    const eventSpace = new Event('input', { bubbles: true });
    inputField.dispatchEvent(eventSpace);
  }
  toggleArrowText();
  }
  
  function resetClickCount() {
  if (clickCount % 2 === 0) {
      // If clickCount is even, reset and toggle
      clickCount = 1;
      // Toggle the input when resetting the click count
      toggleInput();
  }
  toggleArrowText();
  }
  
  
  // Add click event listeners to the specified buttons
  dropDownButton.addEventListener('click', toggleInput);
  guessButton.addEventListener('click', toggleInput);
  resetButton.addEventListener('click', resetClickCount);
  timerButton.addEventListener('click', resetClickCount);
  easyModeButton.addEventListener('click', resetClickCount);
  normalModeButton.addEventListener('click', resetClickCount);
  hardModeButton.addEventListener('click', resetClickCount);
  
  
  /// End -- dropDownArrow Button
  
  ///// Start --- UpArrow & Down Arrow Toggle
  
  function toggleArrowText() {
  const arrowDown = '↑'; // Unicode for Down Arrow
  const arrowUp = '↓'; // Unicode for Up Arrow
  
  if (clickCount === 0 || clickCount % 2 === 1) {
    dropDownButton.textContent = arrowDown;
  } else {
    dropDownButton.textContent = arrowUp;
  }
  }
  
  
  //// End - UpArrow & Down Arrow Toggle
  
  
  
  ///// Start - H3 Dynamic Input Tracker
  

  function findEmptyRow() {
    let filledRows = 0;
    for (let i = 1; i <= 6; i++) {
        // Assuming each row has a unique ID like 'guess-row-1', 'guess-row-2', etc.
        const rowContent = document.querySelector(`#guess-row-${i} .player-${i}`).textContent;
        if (rowContent.trim() !== '') {
            filledRows++;
        }
    }
    return filledRows; // Number of filled (guessed) rows
}



  // Function to update the guesses remaining text
  document.addEventListener('DOMContentLoaded', function() {
  // Function to update the guesses remaining text
  function updateGuessesRemainingText() {
    const guessesUsed = findEmptyRow();
    const remainingGuesses = guessesUsed;
    const guessesRemaining = document.getElementById('guesses-remaining');
    guessesRemaining.textContent = `${remainingGuesses}`;

    // Get the parent h3 element
    const h3Element = guessesRemaining.parentElement;

    // Trigger both the flash and pop animations on the h3 element
    h3Element.classList.remove('animate-flash');
    void h3Element.offsetWidth; // Force reflow to reset the animations
    h3Element.classList.add('animate-flash');
}
  
  // Add click event listener to the submit button
  document.getElementById('guess-button').addEventListener('click', function() {
    updateGuessesRemainingText(); // Update the text every time the button is clicked
    // ... Other logic related to the submit button click event
  });
  });
  
  
  ///// End - H3 Dynamic Input Tracker
  
  
  ///// START - TIMER COUNTDOWN VISUAL LOGIC
  class Timer {
  constructor() {
    this.timerDisplay = document.getElementById('timerDisplay');
    this.timerButton = document.getElementById('timer');
    this.resetTime = 120; // 2 minutes in seconds
    this.remainingSeconds = this.resetTime;
  
    this.timerButton.addEventListener('click', () => {
      this.start();
    });
  }
  
  updateTimerDisplay() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    this.timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  start() {
    this.timerButton.disabled = true;
    this.updateTimerDisplay();
  
    this.interval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.updateTimerDisplay();
      } else {
        this.stop();
      }
    }, 1000);
  }
  
  stop() {
    clearInterval(this.interval);
    this.timerButton.disabled = false;
    this.remainingSeconds = this.resetTime; // Reset the timer to 2 minutes
    this.updateTimerDisplay();
  }
  }
  
  // Initialize Timer on button click
  document.getElementById('timer').addEventListener('click', function () {
  const timer = new Timer();
  timer.start();
  });
  
  
  
  ///// END - TIMER COUNTDOWN VISUAL LOGIC
  

  
  //// Lose Screen Animation -- Start

  function toggleDimOverlay() {
    const overlay = document.getElementById('dim-overlay');
    overlay.classList.add('visible');

    setTimeout(() => {
        overlay.classList.remove('visible');
    }, 2000); // Removes the 'visible' class after 2 second
}



  //// Lose Screen Animation -- End


  //// Page Load Animations -- Start

// Set up event listeners for the modal
// Function to close the modal and animate elements
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    var mainContainer = document.querySelector('.main-container');
    modal.style.display = 'none';
    mainContainer.classList.remove('body-blur');

    // Elements to animate
    var elementsToAnimate = [
        document.getElementById('guess-button'),
        document.getElementById('dropDownArrow'),
        document.getElementById('player-list')
    ];

    // Apply the keyframe animation to each element, repeating it 3 times
    elementsToAnimate.forEach(function(element) {
        element.style.animation = 'arrowAnimation 1.5s ease-in-out 3';
        setTimeout(function() {
            element.style.animation = '';
        }, 1.5 * 1000 * 2); // Duration of the animation times the number of iterations
    });

}

function openModal(modalId, content) {
    var modal = document.getElementById(modalId);
    var mainContainer = document.querySelector('.main-container');
    if (content) {
        modal.querySelector('.modal-content p').innerHTML = content;
    }
    modal.style.display = 'block';
    mainContainer.classList.add('body-blur');
}

// Event listeners for buttons to open modals
document.querySelectorAll('[data-modal-target]').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = button.getAttribute('data-modal-target');
        const modalContent = button.getAttribute('data-modal-content');
        openModal(modalId, modalContent);
    });
});

// Event listeners for closing modals
document.querySelectorAll('.closeModal').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const modal = closeButton.closest('.modal');
        closeModal(modal.id);
    });
});

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var howToPlayButton = document.getElementById('how-to-play');
    if (howToPlayButton) {
        howToPlayButton.click();
    }
});


  //// Page Load Animations -- End

  //// Modal Buttons -- End

    //// Modal Buttons -- Start