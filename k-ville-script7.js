/////Player List - Start
const playerList = [{value: 'Alaa Abdelnaby' , datadecade: 1980 , datastart: 1986 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 30, gamemode: 'easy', fact: 'NBA 1st Round Pick, Twitter: @alaatweets Insta: @alaasgram'},
{value: 'Mark Alarie' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 32, gamemode: 'normal', fact: 'NBA 1st Round Pick'},
{value: 'Grayson Allen' , datadecade: 2010 , datastart: 2014 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 3, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick'},
{value: 'Tommy Amaker' , datadecade: 1980 , datastart: 1983 , datayears: 4 , dataposition: 'G' , dataheight: 600 , datanumber: 4, gamemode: 'normal', fact: 'Former NBA Player, Current Head Coach of Harvard Basketball'},
{value: 'Christian Ast' , datadecade: 1990 , datastart: 1990 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 54, gamemode: 'hard', fact: ''},
{value: 'William Avery' , datadecade: 1990 , datastart: 1997 , datayears: 2 , dataposition: 'G' , dataheight: 602 , datanumber: 5, gamemode: 'normal', fact: 'NBA 1st Round Pick'},
{value: 'Marvin Bagley III' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'F' , dataheight: 611 , datanumber: 35, gamemode: 'easy', fact: '2nd Overall NBA Draft Pick, Rapper, and Hip Hop Artist'},
{value: 'Joey Baker' , datadecade: 2010 , datastart: 2018 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 13, gamemode: 'normal', fact: ''},
{value: 'Paolo Banchero' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 610 , datanumber: 5, gamemode: 'easy', fact: '1st Overall NBA Draft Pick, Rookie of the Year'},
{value: 'RJ Barrett' , datadecade: 2010 , datastart: 2018 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 5, gamemode: 'easy', fact: '3rd Overall NBA Draft Pick'},
{value: 'Shane Battier' , datadecade: 1990 , datastart: 1997 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 31, gamemode: 'easy', fact: 'NCAA Champion (2001) & 2x NBA Champion'},
{value: 'Joey Beard' , datadecade: 1990 , datastart: 1990 , datayears: 4 , dataposition: 'F' , dataheight: 609 , datanumber: 42, gamemode: 'hard', fact: ''},
{value: 'Neal  Begovich' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 20, gamemode: 'easy', fact: 'Insta: @nealbegovich , Graduate Transfer from Stanford'},
{value: 'Andy Berndt' , datadecade: 1980 , datastart: 1985 , datayears: 2 , dataposition: 'G' , dataheight: 606 , datanumber: 0, gamemode: 'hard', fact: 'Frat Brother of Steven Siegel'},
{value: 'Brennan Besser' , datadecade: 2010 , datastart: 2015 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 53, gamemode: 'hard', fact: ''},
{value: 'Jay Bilas' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'C' , dataheight: 608 , datanumber: 21, gamemode: 'easy', fact: 'ESPN College Basketball Analyst, Lawyer, and NCAA Final 4 & Runner-Up '},
{value: 'Kenny Blakeney' , datadecade: 1990 , datastart: 1991 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 4, gamemode: 'hard', fact: ''},
{value: 'Jaylen Blakes' , datadecade: 2020 , datastart: 2021 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 2, gamemode: 'easy', fact: 'Insta: @j.b00gi , Batman Mask'},
{value: 'Eric Boateng' , datadecade: 2000 , datastart: 2005 , datayears: 1 , dataposition: 'C' , dataheight: 610 , datanumber: 45, gamemode: 'hard', fact: ''},
{value: 'Marques Bolden' , datadecade: 2010 , datastart: 2016 , datayears: 3 , dataposition: 'C' , dataheight: 611 , datanumber: 20, gamemode: 'hard', fact: ''},
{value: 'Carlos Boozer' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'F' , dataheight: 609 , datanumber: 4, gamemode: 'easy', fact: '2x NBA All-Star, NCAA Champion (2001), Highest FG Percentage in Duke History'},
{value: 'Stanley Borden' , datadecade: 2020 , datastart: 2021 , datayears: 3 , dataposition: 'C' , dataheight: 700 , datanumber: 52, gamemode: 'easy', fact: 'Insta: @stanleysborden'},
{value: 'Andy Borman' , datadecade: 1990 , datastart: 1999 , datayears: 3 , dataposition: 'G' , dataheight: 601 , datanumber: 40, gamemode: 'hard', fact: ''},
{value: 'Jamal Boykin' , datadecade: 2000 , datastart: 2005 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 34, gamemode: 'hard', fact: ''},
{value: 'Jaemyn Brakefield' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 5, gamemode: 'normal', fact: ''},
{value: 'Elton Brand' , datadecade: 1990 , datastart: 1997 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 42, gamemode: 'easy', fact: '2x NBA All-Star, 1st Overall NBA Draft Pick'},
{value: 'Robert Brickey' , datadecade: 1980 , datastart: 1986 , datayears: 4 , dataposition: 'F' , dataheight: 605 , datanumber: 21, gamemode: 'hard', fact: ''},
{value: 'Kenney Brown' , datadecade: 1990 , datastart: 1992 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 14, gamemode: 'hard', fact: ''},
{value: 'Stan Brunson' , datadecade: 1990 , datastart: 1992 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 31, gamemode: 'hard', fact: ''},
{value: 'D. Bryant' , datadecade: 1990 , datastart: 1996 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 0, gamemode: 'hard', fact: ''},
{value: 'Clay Buckley' , datadecade: 1980 , datastart: 1987 , datayears: 3 , dataposition: 'C' , dataheight: 610 , datanumber: 45, gamemode: 'hard', fact: ''},
{value: 'Mike Buckmire' , datadecade: 2010 , datastart: 2017 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 51, gamemode: 'hard', fact: ''},
{value: 'Andre Buckner' , datadecade: 2000 , datastart: 2002 , datayears: 2 , dataposition: 'G' , dataheight: 510 , datanumber: 2, gamemode: 'hard', fact: ''},
{value: 'Ron Burt' , datadecade: 1990 , datastart: 1991 , datayears: 1 , dataposition: 'G' , dataheight: 600 , datanumber: 5, gamemode: 'hard', fact: ''},
{value: 'Ryan Caldbeck' , datadecade: 1990 , datastart: 1998 , datayears: 3 , dataposition: 'G' , dataheight: 603 , datanumber: 5, gamemode: 'hard', fact: ''},
{value: 'Justin Caldbeck' , datadecade: 1990 , datastart: 1996 , datayears: 3 , dataposition: 'G' , dataheight: 603 , datanumber: 3, gamemode: 'hard', fact: ''},
{value: 'Jeff Capel' , datadecade: 1990 , datastart: 1993 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 5, gamemode: 'easy', fact: 'Four Year Starter, Former Duke Associate Head Coach, Current Pittsburgh Head Coach'},
{value: 'Vernon Carey Jr' , datadecade: 2010 , datastart: 2019 , datayears: 1 , dataposition: 'C' , dataheight: 610 , datanumber: 1, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick'},
{value: 'Chris Carrawell' , datadecade: 1990 , datastart: 1996 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 23, gamemode: 'easy', fact: '4x ACC Champion, ACC Player of the Year (2000), Current Duke Assistant Coach'},
{value: 'Wendell Carter Jr.' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'F' , dataheight: 610 , datanumber: 34, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick'},
{value: 'Kale Catchings' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'F' , dataheight: 605 , datanumber: 12, gamemode: 'normal', fact: ''},
{value: 'Mark Causey' , datadecade: 2000 , datastart: 2002 , datayears: 2 , dataposition: 'G' , dataheight: 603 , datanumber: 45, gamemode: 'hard', fact: ''},
{value: 'Mike Chappell' , datadecade: 1990 , datastart: 1996 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 0, gamemode: 'hard', fact: ''},
{value: 'Matt Christensen' , datadecade: 2000 , datastart: 2000 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 41, gamemode: 'hard', fact: ''},
{value: 'Marty Clark' , datadecade: 1990 , datastart: 1990 , datayears: 4 , dataposition: 'G' , dataheight: 606 , datanumber: 3, gamemode: 'normal', fact: '2x NCAA Champion'},
{value: 'Henry Coleman' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 34, gamemode: 'normal', fact: ''},
{value: 'Chris Collins' , datadecade: 1990 , datastart: 1992 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 20, gamemode: 'normal', fact: 'Former Duke Associate Head Coach, Current Northwestern Head Coach '},
{value: 'Quinn Cook' , datadecade: 2010 , datastart: 2011 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 2, gamemode: 'easy', fact: 'NCAA Champion, 2x NBA Champion'},
{value: 'Joe Cook' , datadecade: 1980 , datastart: 1987 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 13, gamemode: 'hard', fact: ''},
{value: 'Seth Curry' , datadecade: 2000 , datastart: 2009 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 30, gamemode: 'easy', fact: 'Current NBA Player, 6th in NBA History for 3-Point FG Percentage '},
{value: 'Olek Czyz' , datadecade: 2000 , datastart: 2008 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 13, gamemode: 'hard', fact: ''},
{value: 'Jordan Davidson' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'G' , dataheight: 601 , datanumber: 41, gamemode: 'hard', fact: ''},
{value: 'Patrick Davidson' , datadecade: 2000 , datastart: 2003 , datayears: 3 , dataposition: 'G' , dataheight: 600 , datanumber: 41, gamemode: 'hard', fact: ''},
{value: 'Brian Davis' , datadecade: 1980 , datastart: 1988 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 23, gamemode: 'normal', fact: '2x NCAA Champion, Former NBA Player'},
{value: 'Andre Dawkins' , datadecade: 2000 , datastart: 2009 , datayears: 5 , dataposition: 'G' , dataheight: 605 , datanumber: 34, gamemode: 'hard', fact: ''},
{value: 'Johnny Dawkins' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 24, gamemode: 'easy', fact: 'Naismith College Player of the Year (1986), Current UCF Head Coach, Most FG in Duke History'},
{value: 'Javin DeLaurier' , datadecade: 2010 , datastart: 2016 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 12, gamemode: 'normal', fact: ''},
{value: 'Sean Dockery' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 15, gamemode: 'normal', fact: ''},
{value: 'Taymon Domzalski' , datadecade: 1990 , datastart: 1995 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 13, gamemode: 'hard', fact: ''},
{value: 'Chris Duhon' , datadecade: 2000 , datastart: 2000 , datayears: 2 , dataposition: 'G' , dataheight: 601 , datanumber: 21, gamemode: 'easy', fact: 'Former NBA Player, Most Steals in Duke History, NCAA Champion (2001), 3x ACC Champion'},
{value: 'Mike Dunleavy' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'F' , dataheight: 609 , datanumber: 34, gamemode: 'easy', fact: 'NCAA Champion, 3rd Overall NBA Draft Pick, VP Basketball Operations for Golden State Warriors'},
{value: 'Trevon Duval' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 1, gamemode: 'hard', fact: ''},
{value: 'Daniel Ewing' , datadecade: 2000 , datastart: 2001 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 5, gamemode: 'hard', fact: 'Former NBA Player, Texas Mr. Basketball (2001)'},
{value: 'Danny Ferry' , datadecade: 1980 , datastart: 1985 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 35, gamemode: 'easy', fact: 'NBA Champion, Naismith College Player of the Year (1989), #35 Jersey was Retired by Duke, 2nd Overall NBA Draft Pick'},
{value: 'Kyle Filipowski' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'C' , dataheight: 700 , datanumber: 30, gamemode: 'easy', fact: 'ACC Rookie of the Year, Insta: @kyleflip Twitter: @kylefilipowski'},
{value: 'Caleb Foster' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 1, gamemode: 'easy', fact: 'Insta: @iamcalebfoster , 5-Star Recruit'},
{value: 'Michael Gbinije' , datadecade: 2010 , datastart: 2011 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 13, gamemode: 'hard', fact: ''},
{value: 'Harry Giles' , datadecade: 2010 , datastart: 2016 , datayears: 1 , dataposition: 'F' , dataheight: 610 , datanumber: 1, gamemode: 'normal', fact: 'Current NBA Player, 1st Round Pick'},
{value: 'Jordan Goldwire' , datadecade: 2010 , datastart: 2017 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 14, gamemode: 'normal', fact: ''},
{value: 'Jacob Grandison' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'G' , dataheight: 606 , datanumber: 13, gamemode: 'normal', fact: ''},
{value: 'AJ Griffin' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 21, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick'},
{value: 'Dick Groat' , datadecade: 1940 , datastart: 1948 , datayears: 4 , dataposition: 'G' , dataheight: 511 , datanumber: 10, gamemode: 'easy', fact: '3rd Overall Pick NBA Draft, #10 Jersey Retired by Duke, 8x MLB All-Star, 2x World Series Champion, Pittsburgh Pirate Hall of Fame '},
{value: 'Josh Hairston' , datadecade: 2000 , datastart: 2009 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 15, gamemode: 'hard', fact: ''},
{value: 'Jeremy Hall' , datadecade: 1990 , datastart: 1995 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 0, gamemode: 'hard', fact: ''},
{value: 'Jay Heaps' , datadecade: 1990 , datastart: 1995 , datayears: 4 , dataposition: 'G' , dataheight: 509 , datanumber: 22, gamemode: 'hard', fact: ''},
{value: 'Gerald Henderson' , datadecade: 2000 , datastart: 2006 , datayears: 3 , dataposition: 'G' , dataheight: 604 , datanumber: 15, gamemode: 'normal', fact: 'Former NBA Player, 1st Round Pick'},
{value: 'Phil Henderson' , datadecade: 1980 , datastart: 1986 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 44, gamemode: 'normal', fact: 'Led Duke to three consecutive Final Four appearances'},
{value: 'Dave Henderson' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 12, gamemode: 'hard', fact: ''},
{value: 'Grant Hill' , datadecade: 1990 , datastart: 1990 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 33, gamemode: 'easy', fact: '7x NBA All-Star, 2x NCAA Champion, College & NBA Hall of Fame, #33 Jersey Retired by Duke, CBS Basketball Analyst'},
{value: 'Thomas Hill' , datadecade: 1980 , datastart: 1989 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 25, gamemode: 'hard', fact: ''},
{value: 'Rodney Hood' , datadecade: 2010 , datastart: 2012 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 5, gamemode: 'normal', fact: 'Current NBA Player, 1st Round Pick'},
{value: 'Nick Horvath' , datadecade: 2000 , datastart: 2000 , datayears: 2 , dataposition: 'F' , dataheight: 610 , datanumber: 3, gamemode: 'hard', fact: ''},
{value: 'Spencer Hubbard' , datadecade: 2020 , datastart: 2020 , datayears: 4 , dataposition: 'G' , dataheight: 508 , datanumber: 55, gamemode: 'easy', fact: 'Insta: @spenhubb'},
{value: 'Bobby Hurley' , datadecade: 1980 , datastart: 1989 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 11, gamemode: 'easy', fact: '2x NCAA Champion, Most Assists in Duke History, 7th Overall Pick in NBA Draft, ASU Head Coach'},
{value: 'Matthew Hurt' , datadecade: 2010 , datastart: 2019 , datayears: 2 , dataposition: 'F' , dataheight: 609 , datanumber: 21, gamemode: 'normal', fact: 'First Team All-ACC (2021)'},
{value: 'Brandon Ingram' , datadecade: 2010 , datastart: 2015 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 14, gamemode: 'easy', fact: 'Current NBA Player, NBA All-Star, 2nd Overall Pick'},
{value: 'Kyrie Irving' , datadecade: 2010 , datastart: 2010 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 1, gamemode: 'easy', fact: 'NBA Champion, 8x All-Star, 1st Overall Pick'},
{value: 'Frank Jackson' , datadecade: 2010 , datastart: 2016 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 1, gamemode: 'hard', fact: ''},
{value: 'Nate James' , datadecade: 1990 , datastart: 1997 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 14, gamemode: 'normal', fact: 'NCAA Champion (2010) & NCAA Champion Coach (2015), Current Austin Peay Head Coach'},
{value: 'Amile Jefferson' , datadecade: 2010 , datastart: 2012 , datayears: 5 , dataposition: 'F' , dataheight: 609 , datanumber: 21, gamemode: 'easy', fact: 'Current Duke Assistant Coach, Most Games Played in Duke History'},
{value: 'Chase Jeter' , datadecade: 2010 , datastart: 2015 , datayears: 2 , dataposition: 'C' , dataheight: 610 , datanumber: 2, gamemode: 'hard', fact: ''},
{value: 'Theo John' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 12, gamemode: 'normal', fact: ''},
{value: 'Max Johns' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 41, gamemode: 'hard', fact: ''},
{value: 'Jalen Johnson' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 1, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick'},
{value: 'Steve Johnson' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'F' , dataheight: 605 , datanumber: 51, gamemode: 'hard', fact: ''},
{value: 'Patrick Johnson' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'C' , dataheight: 609 , datanumber: 51, gamemode: 'hard', fact: ''},
{value: 'Bates Jones' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 34, gamemode: 'hard', fact: 'Siblings of Daniel Jones (NFL) and Ruthie Jones (Duke Soccer)'},
{value: 'Tre Jones' , datadecade: 2010 , datastart: 2018 , datayears: 2 , dataposition: 'G' , dataheight: 603 , datanumber: 3, gamemode: 'easy', fact: 'Current NBA Player, ACC Player of the Year (2020), Brother of Tyus Jones'},
{value: 'Matt Jones' , datadecade: 2010 , datastart: 2013 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 13, gamemode: 'hard', fact: ''},
{value: 'Tyus Jones' , datadecade: 2010 , datastart: 2014 , datayears: 1 , dataposition: 'G' , dataheight: 601 , datanumber: 5, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick, Brother of Tre Jones'},
{value: 'Dahntay Jones' , datadecade: 2000 , datastart: 2002 , datayears: 2 , dataposition: 'F' , dataheight: 606 , datanumber: 30, gamemode: 'normal', fact: 'NBA Champion, Former NBA Player, 1st Round Pick'},
{value: 'Trevor Keels' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 1, gamemode: 'normal', fact: 'Current NBA Player, Second Round Draft Pick'},
{value: 'Sean Kelly' , datadecade: 2010 , datastart: 2011 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 42, gamemode: 'hard', fact: ''},
{value: 'Ryan Kelly' , datadecade: 2000 , datastart: 2009 , datayears: 4 , dataposition: 'F' , dataheight: 611 , datanumber: 34, gamemode: 'normal', fact: 'NCAA Champion (2010)'},
{value: 'Luke Kennard' , datadecade: 2010 , datastart: 2015 , datayears: 2 , dataposition: 'G' , dataheight: 606 , datanumber: 5, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick, ACC Tournament MVP (2017)'},
{value: 'Taylor King' , datadecade: 2000 , datastart: 2007 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 20, gamemode: 'hard', fact: ''},
{value: 'Billy King' , datadecade: 1980 , datastart: 1984 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 55, gamemode: 'hard', fact: ''},
{value: 'Greg Koubek' , datadecade: 1980 , datastart: 1987 , datayears: 3 , dataposition: 'F' , dataheight: 606 , datanumber: 22, gamemode: 'hard', fact: ''},
{value: 'Christian Laettner' , datadecade: 1980 , datastart: 1988 , datayears: 4 , dataposition: 'F' , dataheight: 611 , datanumber: 32, gamemode: 'easy', fact: 'NBA All-Star, 2x NCAA Champion, "THE SHOT", Most made Free Throws in Duke History'},
{value: 'Antonio Lang' , datadecade: 1990 , datastart: 1990 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 21, gamemode: 'easy', fact: '2x NCAA Champion Former, NBA Player, Current Assistant Coach for Cleveland Cavaliers'},
{value: 'Trajan Langdon' , datadecade: 1990 , datastart: 1995 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 21, gamemode: 'easy', fact: 'Former NBA Player, 1st Round Pick, Highest 3-Point FG Percentage in Duke History, 6th Round MLB Draft'},
{value: 'Dereck Lively II' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'C' , dataheight: 701 , datanumber: 1, gamemode: 'easy', fact: 'Future NBA Player, All-ACC Freshman Team'},
{value: 'Reggie Love' , datadecade: 2000 , datastart: 2001 , datayears: 4 , dataposition: 'F' , dataheight: 604 , datanumber: 30, gamemode: 'hard', fact: ''},
{value: 'Corey Maggette' , datadecade: 1990 , datastart: 1998 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 50, gamemode: 'normal', fact: 'Former NBA Player, 1st Round Pick'},
{value: 'David Mayer' , datadecade: 2010 , datastart: 2010 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 51, gamemode: 'hard', fact: ''},
{value: 'Bill McCaffrey' , datadecade: 1980 , datastart: 1989 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 5, gamemode: 'hard', fact: ''},
{value: 'Jared McCain' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 0, gamemode: 'easy', fact: 'Insta: @jmccain24 , 5-Star Recruit, McDonald\'s All-American, California Gatorade Player of the Year, 5:08 Mile Time'},
{value: 'David McClure' , datadecade: 2000 , datastart: 2005 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 14, gamemode: 'hard', fact: ''},
{value: 'Roshown Mcleod' , datadecade: 1990 , datastart: 1996 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 4, gamemode: 'normal', fact: 'Former NBA Player, 1st Round Pick'},
{value: 'Doug McNeely' , datadecade: 1980 , datastart: 1980 , datayears: 4 , dataposition: 'F' , dataheight: 604 , datanumber: 11, gamemode: 'hard', fact: ''},
{value: 'Josh McRoberts' , datadecade: 2000 , datastart: 2005 , datayears: 2 , dataposition: 'F' , dataheight: 610 , datanumber: 2, gamemode: 'normal', fact: 'Former NBA Player, 2nd Round Pick'},
{value: 'Dan Meagher' , datadecade: 1980 , datastart: 1981 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 45, gamemode: 'hard', fact: 'Competed in 1984 Summer Olympics for Team Canada'},
{value: 'Andy Means' , datadecade: 2000 , datastart: 2001 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 53, gamemode: 'hard', fact: ''},
{value: 'Erik Meek' , datadecade: 1990 , datastart: 1991 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 52, gamemode: 'normal', fact: 'NCAA Champion, 2nd Round NBA Draft Pick'},
{value: 'Lee Melchionni' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 13, gamemode: 'hard', fact: 'Currently an NBA player agent, Father, Gary Melchionni, was a 2x Duke Captain'},
{value: 'Mark Mitchell' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 25, gamemode: 'easy', fact: 'Insta: @mark.mitchell25'},
{value: 'Tony Moore' , datadecade: 1990 , datastart: 1992 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 30, gamemode: 'hard', fact: ''},
{value: 'Wendell Moore Jr' , datadecade: 2010 , datastart: 2019 , datayears: 3 , dataposition: 'F' , dataheight: 605 , datanumber: 0, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick'},
{value: 'Alex Murphy' , datadecade: 2010 , datastart: 2011 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 12, gamemode: 'hard', fact: ''},
{value: 'DeMarcus Nelson' , datadecade: 2000 , datastart: 2004 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 21, gamemode: 'hard', fact: ''},
{value: 'Martin Nessley' , datadecade: 1980 , datastart: 1983 , datayears: 4 , dataposition: 'C' , dataheight: 702 , datanumber: 44, gamemode: 'hard', fact: 'Former NBA Player'},
{value: 'Greg Newton' , datadecade: 1990 , datastart: 1993 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 55, gamemode: 'hard', fact: 'Member of 1998 Canadian National Team at the World Championships & led Canada in Scoring & Rebounding'},
{value: 'Tom Novik' , datadecade: 2000 , datastart: 2003 , datayears: 2 , dataposition: 'F' , dataheight: 606 , datanumber: 50, gamemode: 'hard', fact: ''},
{value: 'Alex O\'Connell' , datadecade: 2010 , datastart: 2017 , datayears: 3 , dataposition: 'G' , dataheight: 606 , datanumber: 15, gamemode: 'normal', fact: ''},
{value: 'Sean Obi' , datadecade: 2010 , datastart: 2014 , datayears: 3 , dataposition: 'F' , dataheight: 609 , datanumber: 34, gamemode: 'hard', fact: ''},
{value: 'Semi Ojeleye' , datadecade: 2010 , datastart: 2013 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 20, gamemode: 'normal', fact: 'Former NBA Player, 2nd Round Pick'},
{value: 'Jahlil Okafor' , datadecade: 2010 , datastart: 2014 , datayears: 1 , dataposition: 'C' , dataheight: 611 , datanumber: 15, gamemode: 'easy', fact: 'NCAA Champion (2015), Former NBA Player, 3rd Overall Pick '},
{value: 'Nick Pagliuca' , datadecade: 2010 , datastart: 2013 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 45, gamemode: 'hard', fact: ''},
{value: 'Joe Pagliuca' , datadecade: 2000 , datastart: 2003 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 45, gamemode: 'hard', fact: ''},
{value: 'Crawford Palmer' , datadecade: 1980 , datastart: 1988 , datayears: 2 , dataposition: 'C' , dataheight: 609 , datanumber: 34, gamemode: 'hard', fact: ''},
{value: 'Jabari Parker' , datadecade: 2010 , datastart: 2013 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 1, gamemode: 'easy', fact: 'Current NBA Player, 2nd Overall Pick, ACC Rookie of the Year'},
{value: 'Cherokee Parks' , datadecade: 1990 , datastart: 1991 , datayears: 4 , dataposition: 'C' , dataheight: 611 , datanumber: 44, gamemode: 'normal', fact: 'NCAA Champion (1992), Former NBA Player, 1st Round Pick'},
{value: 'Greg Paulus' , datadecade: 2000 , datastart: 2005 , datayears: 4 , dataposition: 'G' , dataheight: 601 , datanumber: 3, gamemode: 'hard', fact: ''},
{value: 'Ross Perkins' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 40, gamemode: 'hard', fact: ''},
{value: 'Baker Perry' , datadecade: 1990 , datastart: 1995 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 0, gamemode: 'hard', fact: ''},
{value: 'Casey Peters' , datadecade: 2000 , datastart: 2007 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 53, gamemode: 'hard', fact: ''},
{value: 'Marshall Plumlee' , datadecade: 2010 , datastart: 2011 , datayears: 5 , dataposition: 'C' , dataheight: 700 , datanumber: 40, gamemode: 'easy', fact: 'NCAA Champion (2015), Team Captain'},
{value: 'Miles Plumlee' , datadecade: 2000 , datastart: 2008 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 21, gamemode: 'easy', fact: 'NCAA Champion (2010), Former NBA Player, 1st Round Pick'},
{value: 'Mason Plumlee' , datadecade: 2000 , datastart: 2009 , datayears: 3 , dataposition: 'F' , dataheight: 610 , datanumber: 5, gamemode: 'easy', fact: 'NCAA Champion (2010), Current NBA Payer,  1st Round Pick'},
{value: 'Martynas Pocius' , datadecade: 2000 , datastart: 2005 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 5, gamemode: 'hard', fact: ''},
{value: 'TJ Power' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 12, gamemode: 'easy', fact: 'Twitter - @TJPower14 , 5-Star Recruit'},
{value: 'Ricky Price' , datadecade: 1990 , datastart: 1994 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 3, gamemode: 'hard', fact: ''},
{value: 'Tyrese Proctor' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'G' , dataheight: 605 , datanumber: 5, gamemode: 'easy', fact: 'ACC All-Freshman Team, Insta: @tyrese4proctor'},
{value: 'Shavlik Randolph' , datadecade: 2000 , datastart: 2002 , datayears: 3 , dataposition: 'F' , dataheight: 610 , datanumber: 42, gamemode: 'normal', fact: 'Former NBA Player'},
{value: 'Cam Reddish' , datadecade: 2010 , datastart: 2018 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 2, gamemode: 'easy', fact: 'Current NBA Player, 10th Overall Pick'},
{value: 'J.J. Redick' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 4, gamemode: 'easy', fact: 'Former NBA Player, 11th Overall Pick, #4 Jersey Retired by Duke, Most Points & 3-Point FGs in Duke History'},
{value: 'Christian Reeves' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'C' , dataheight: 701 , datanumber: 21, gamemode: 'easy', fact: 'Insta: @cmr_32_'},
{value: 'Austin Rivers' , datadecade: 2010 , datastart: 2011 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 0, gamemode: 'easy', fact: 'Current NBA Player, 10th Overall Pick, First NBA Player in History to play for his Father'},
{value: 'Jeremy Roach' , datadecade: 2020 , datastart: 2020 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 3, gamemode: 'easy', fact: 'Team Captain, Insta: @jeremyy'},
{value: 'Justin Robinson' , datadecade: 2010 , datastart: 2015 , datayears: 5 , dataposition: 'F' , dataheight: 609 , datanumber: 50, gamemode: 'hard', fact: ''},
{value: 'Casey Sanders' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'C' , dataheight: 611 , datanumber: 20, gamemode: 'hard', fact: ''},
{value: 'Michael Savarino' , datadecade: 2010 , datastart: 2019 , datayears: 3 , dataposition: 'G' , dataheight: 600 , datanumber: 30, gamemode: 'normal', fact: 'Grandson of Coach K'},
{value: 'Jon Scheyer' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 30, gamemode: 'easy', fact: 'Current Duke Head Coach, NCAA Champion (2015), 2x ACC Champion as Player, ACC Champion as Coach'},
{value: 'Jaden Schutt' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'G' , dataheight: 605 , datanumber: 14, gamemode: 'easy', fact: 'Insta: @jadenschutt'},
{value: 'J.D. Simpson' , datadecade: 1990 , datastart: 1997 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 13, gamemode: 'hard', fact: ''},
{value: 'Kyle Singler' , datadecade: 2000 , datastart: 2007 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 12, gamemode: 'normal', fact: 'NCAA Champion (2010), 2nd Round NBA Draft Pick, Most minutes played in Duke History'},
{value: 'Todd Singleton' , datadecade: 1990 , datastart: 1994 , datayears: 4 , dataposition: 'F' , dataheight: 604 , datanumber: 15, gamemode: 'hard', fact: ''},
{value: 'Nolan Smith' , datadecade: 2000 , datastart: 2007 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 2, gamemode: 'easy', fact: 'NCAA Champion (2010), ACC Player of the Year (2011), 1st Round NBA Draft Pick, Former Duke Assistant Coach, Current Assistant Coach at Louisville '},
{value: 'John Smith' , datadecade: 1980 , datastart: 1985 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 33, gamemode: 'hard', fact: ''},
{value: 'Quin Snyder' , datadecade: 1980 , datastart: 1985 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 14, gamemode: 'easy', fact: 'Current Head Coach of the Atlanta Hawks, Former Utah Jazz Head Coach, Team Captain at Duke'},
{value: 'Cassius Stanley' , datadecade: 2010 , datastart: 2019 , datayears: 1 , dataposition: 'G' , dataheight: 606 , datanumber: 2, gamemode: 'normal', fact: 'Current NBA Player, 2nd Round Pick'},
{value: 'DJ Steward' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 2, gamemode: 'normal', fact: 'ACC All-Freshman Team'},
{value: 'Sean  Stewart' , datadecade: 2020 , datastart: 2023 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 13, gamemode: 'easy', fact: 'Insta: @sean13stewart , 5-Star Recruit, McDonald\'s All-American'},
{value: 'Kevin Strickland' , datadecade: 1980 , datastart: 1984 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 31, gamemode: 'normal', fact: ''},
{value: 'Rasheed Sulaimon' , datadecade: 2010 , datastart: 2012 , datayears: 2 , dataposition: 'G' , dataheight: 604 , datanumber: 14, gamemode: 'normal', fact: 'ACC All-Freshman Team'},
{value: 'Nick Sutton' , datadecade: 2000 , datastart: 2006 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 13, gamemode: 'hard', fact: ''},
{value: 'Andre Sweet' , datadecade: 2000 , datastart: 2000 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 12, gamemode: 'hard', fact: ''},
{value: 'Patrick Tapé' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 12, gamemode: 'hard', fact: ''},
{value: 'Jayson Tatum' , datadecade: 2010 , datastart: 2016 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 0, gamemode: 'easy', fact: '4x NBA All-Star, 3rd Overall Pick, Gold Medal Olympian (2020)'},
{value: 'Lance Thomas' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 42, gamemode: 'normal', fact: 'NCAA Champion (2010), Former NBA Player'},
{value: 'Tyler Thornton' , datadecade: 2010 , datastart: 2010 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 3, gamemode: 'hard', fact: ''},
{value: 'Griffin Tormey' , datadecade: 2000 , datastart: 2005 , datayears: 2 , dataposition: 'G' , dataheight: 511 , datanumber: 40, gamemode: 'hard', fact: ''},
{value: 'Gary Trent' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'G' , dataheight: 606 , datanumber: 2, gamemode: 'normal', fact: 'Current NBA Player, 2nd Round Draft Pick'},
{value: 'Antonio Vrankovic' , datadecade: 2010 , datastart: 2015 , datayears: 4 , dataposition: 'C' , dataheight: 700 , datanumber: 30, gamemode: 'hard', fact: ''},
{value: 'Carmen Wallace' , datadecade: 1990 , datastart: 1993 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 34, gamemode: 'hard', fact: ''},
{value: 'Jack White' , datadecade: 2010 , datastart: 2016 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 41, gamemode: 'normal', fact: 'Current NBA Player, Duke Team Captain'},
{value: 'Dariq Whitehead' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 0, gamemode: 'easy', fact: 'Mr. Basketball USA (2022), Insta: @riqwhitehead'},
{value: 'Mark Williams' , datadecade: 2020 , datastart: 2020 , datayears: 2 , dataposition: 'C' , dataheight: 701 , datanumber: 15, gamemode: 'easy', fact: 'Current NBA Player, 1st Round Pick, ACC Defensive Player of the Year (2022)'},
{value: 'Elliot Williams' , datadecade: 2000 , datastart: 2008 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 20, gamemode: 'normal', fact: 'Former NBA Player, 1st Round Pick'},
{value: 'Shelden Williams' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'F' , dataheight: 609 , datanumber: 23, gamemode: 'normal', fact: 'Former NBA Player, 5th Overall Pick. Most Blocks, Offensive Rebounds, and Defensive Rebounds in Duke History'},
{value: 'Jason Williams' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 22, gamemode: 'easy', fact: 'Current ESPN Basketball Analyst, NCAA Champion (2001), Former NBA Player, 2nd Overall Pick'},
{value: 'Weldon Williams' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 40, gamemode: 'hard', fact: ''},
{value: 'Zion Williamson' , datadecade: 2010 , datastart: 2018 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 1, gamemode: 'easy', fact: '2x NBA All-Star, 1st Overall Pick, National College Player of the Year (2019)'},
{value: 'Justise Winslow' , datadecade: 2010 , datastart: 2014 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 12, gamemode: 'easy', fact: 'NCAA Champion (2015), Current NBA Player, 10th Overall Pick'},
{value: 'Steve Wojciechowski' , datadecade: 1990 , datastart: 1994 , datayears: 4 , dataposition: 'G' , dataheight: 511 , datanumber: 12, gamemode: 'hard', fact: ''},
{value: 'Keenan Worthington' , datadecade: 2010 , datastart: 2019 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 45, gamemode: 'normal', fact: ''},
{value: 'Ryan Young' , datadecade: 2020 , datastart: 2022 , datayears: 2 , dataposition: 'C' , dataheight: 610 , datanumber: 15, gamemode: 'easy', fact: 'Insta: @ryan_young23'},
{value: 'Todd Zafirovski' , datadecade: 2000 , datastart: 2009 , datayears: 5 , dataposition: 'F' , dataheight: 609 , datanumber: 52, gamemode: 'hard', fact: ''},
{value: 'Brian Zoubek' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'C' , dataheight: 701 , datanumber: 55, gamemode: 'hard', fact: 'NCAA Champion (2010)'}]
  
  ///Player List - End 
  
  let secretPlayer = null;
  let normalmode = document.getElementById('normal-mode');
  let easymode = document.getElementById('easy-mode');
  let hardmode = document.getElementById('hard-mode');
  
  let timerButton = document.getElementById('timer');
  
  normalmode.disabled = true;
  
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
    
    // Set the selected player as the secret player
    secretPlayer = { name, decade, start, years, position, height, number, fact };
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
  
  ////////
  
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
  } else if (Math.abs(playerList[selectedIndex].datadecade - secretPlayer.decade) <= 10) {
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
    }

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
    
  }
   


  /// Reset the Game Funciton - End
  
  
  //// Score Tracker - Start /////
  
  function correctGuess(selectedIndex, secretPlayer) {
    
    if (playerList[selectedIndex] === secretPlayer) {
      if (easymode.disabled===true) {   document.getElementById("easy-score").textContent++;
      } if (normalmode.disabled===true) { document.getElementById("normal-score").textContent++;
      } if (hardmode.disabled===true) {
        document.getElementById("hard-score").textContent++;
      }
    }
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
      score = 'Score: ' + normalScore.textContent;
    } else if (easymode.disabled) {
      disabledMode = 'Easy';
      score = 'Score: ' + easyScore.textContent;
    } else if (hardmode.disabled) {
      disabledMode = 'Hard';
      score = 'Score: ' + hardScore.textContent;
    }
  
    // Display an alert with the currently disabled game mode and scores
    alert(disabledMode + ' Mode\n' + score);
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
    }, 60000); // Delayed execution after 15 seconds (adjust the time as needed)
  });
  
  
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
    }
  }
  
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
