"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// Feed items in Instagram posting order: placement then artist, by year
const feedItems: { type: "placement" | "artist"; src: string; label: string; year: number }[] = [
  // 2025
  { type: "placement", src: "/pusher/placements/Alien Earth (2025).png", label: "Alien Earth", year: 2025 },
  { type: "artist", src: "/pusher/artists/1128 (2025).png", label: "1128", year: 2025 },
  { type: "placement", src: "/pusher/placements/Final Destination Bloodlines (2025).png", label: "Final Destination Bloodlines", year: 2025 },
  { type: "artist", src: "/pusher/artists/Calvin Markus 2 (2025).png", label: "Calvin Markus", year: 2025 },
  { type: "placement", src: "/pusher/placements/Predator Badlands (2025).png", label: "Predator Badlands", year: 2025 },
  { type: "artist", src: "/pusher/artists/Matthew Chastney (2025).png", label: "Matthew Chastney", year: 2025 },
  { type: "placement", src: "/pusher/placements/The Rip (2025).png", label: "The Rip", year: 2025 },
  { type: "artist", src: "/pusher/artists/Hahlweg (2025).png", label: "Hahlweg", year: 2025 },
  { type: "placement", src: "/pusher/placements/Eyes Of Wakanda (2025).png", label: "Eyes Of Wakanda", year: 2025 },
  { type: "artist", src: "/pusher/artists/Finishing Move (2025).png", label: "Finishing Move", year: 2025 },
  { type: "placement", src: "/pusher/placements/Porsche (2025).png", label: "Porsche", year: 2025 },
  { type: "artist", src: "/pusher/artists/Ursine Vulpine (2025).png", label: "Ursine Vulpine", year: 2025 },
  // 2024
  { type: "placement", src: "/pusher/placements/Love Lies Bleeding (2024).png", label: "Love Lies Bleeding", year: 2024 },
  { type: "artist", src: "/pusher/artists/Walton (2024).png", label: "Walton", year: 2024 },
  { type: "placement", src: "/pusher/placements/The Amateur (2024).png", label: "The Amateur", year: 2024 },
  { type: "artist", src: "/pusher/artists/Matthew Chastney 2 (2024).png", label: "Matthew Chastney", year: 2024 },
  { type: "placement", src: "/pusher/placements/Beetlejuice Beetlejuice (2024).png", label: "Beetlejuice Beetlejuice", year: 2024 },
  { type: "artist", src: "/pusher/artists/Antoine Becks (2024).png", label: "Antoine Becks", year: 2024 },
  { type: "placement", src: "/pusher/placements/Captain America Brave New World (2024).png", label: "Captain America: Brave New World", year: 2024 },
  { type: "artist", src: "/pusher/artists/Walton (2024) 2.png", label: "Walton", year: 2024 },
  { type: "placement", src: "/pusher/placements/Wicked (2024).png", label: "Wicked", year: 2024 },
  { type: "artist", src: "/pusher/artists/Human Origin (2024).png", label: "Human Origin", year: 2024 },
  { type: "placement", src: "/pusher/placements/Furiosa A Mad Max Saga (2024).png", label: "Furiosa: A Mad Max Saga", year: 2024 },
  { type: "artist", src: "/pusher/artists/Matthew Chastney (2024).png", label: "Matthew Chastney", year: 2024 },
  // 2023
  { type: "placement", src: "/pusher/placements/Google (2023).png", label: "Google", year: 2023 },
  { type: "artist", src: "/pusher/artists/Martin Wiklund (2023).png", label: "Martin Wiklund", year: 2023 },
  { type: "placement", src: "/pusher/placements/YSL Pure Shot (2023).png", label: "YSL Pure Shot", year: 2023 },
  { type: "artist", src: "/pusher/artists/Superhuman (2023).png", label: "Superhuman", year: 2023 },
  { type: "placement", src: "/pusher/placements/Saltburn (2023).png", label: "Saltburn", year: 2023 },
  { type: "artist", src: "/pusher/artists/Ted Regklis 2 (2023).png", label: "Ted Regklis", year: 2023 },
  { type: "placement", src: "/pusher/placements/Empire Of Light (2023).png", label: "Empire Of Light", year: 2023 },
  { type: "artist", src: "/pusher/artists/Boxsta (2023).png", label: "Boxsta", year: 2023 },
  { type: "placement", src: "/pusher/placements/Hunger Games Ballad Of Songbirds & Snakes (2023).png", label: "Hunger Games: Ballad Of Songbirds & Snakes", year: 2023 },
  { type: "artist", src: "/pusher/artists/Ursine Vulpine 2 (2023).png", label: "Ursine Vulpine", year: 2023 },
  { type: "placement", src: "/pusher/placements/Oppenheimer (2023).png", label: "Oppenheimer", year: 2023 },
  { type: "artist", src: "/pusher/artists/Matthew Chastney (2023).png", label: "Matthew Chastney", year: 2023 },
  // 2022
  { type: "placement", src: "/pusher/placements/The Batman (2022).png", label: "The Batman", year: 2022 },
  { type: "artist", src: "/pusher/artists/Boxsta (2022).png", label: "Boxsta", year: 2022 },
  { type: "placement", src: "/pusher/placements/Elvis (2022).png", label: "Elvis", year: 2022 },
  { type: "artist", src: "/pusher/artists/Superhuman (2022).png", label: "Superhuman", year: 2022 },
  { type: "placement", src: "/pusher/placements/Lord Of The Rings Rings Of Power (2022).png", label: "Lord of the Rings: Rings of Power", year: 2022 },
  { type: "artist", src: "/pusher/artists/Ursine Vulpine (2022).png", label: "Ursine Vulpine", year: 2022 },
  { type: "placement", src: "/pusher/placements/Slow Horses (2022).png", label: "Slow Horses", year: 2022 },
  { type: "artist", src: "/pusher/artists/AG (2022).png", label: "AG", year: 2022 },
  { type: "placement", src: "/pusher/placements/Bentley Continental GT (2022).png", label: "Bentley Continental GT", year: 2022 },
  { type: "artist", src: "/pusher/artists/Amy Root (2022).png", label: "Amy Root", year: 2022 },
  { type: "placement", src: "/pusher/placements/Renault Austral (2022).png", label: "Renault Austral", year: 2022 },
  { type: "artist", src: "/pusher/artists/Superhuman 2 (2022).png", label: "Superhuman", year: 2022 },
  { type: "placement", src: "/pusher/placements/Dangerous Liaisons (2022).png", label: "Dangerous Liaisons", year: 2022 },
  { type: "artist", src: "/pusher/artists/Fort Nowhere (2022).png", label: "Fort Nowhere", year: 2022 },
  // 2021
  { type: "placement", src: "/pusher/placements/Adidas (2021).png", label: "Adidas", year: 2021 },
  { type: "artist", src: "/pusher/artists/Maestro Harrell (2021).png", label: "Maestro Harrell", year: 2021 },
  { type: "placement", src: "/pusher/placements/Zack Snyder's Justice League (2021).png", label: "Zack Snyder's Justice League", year: 2021 },
  { type: "artist", src: "/pusher/artists/Ursine Vulpine 2 (2021).png", label: "Ursine Vulpine", year: 2021 },
  { type: "placement", src: "/pusher/placements/Honda Origin Of Determination (2021).png", label: "Honda: Origin Of Determination", year: 2021 },
  { type: "artist", src: "/pusher/artists/Superhuman (2021).png", label: "Superhuman", year: 2021 },
  { type: "placement", src: "/pusher/placements/Dune (2021).png", label: "Dune", year: 2021 },
  { type: "artist", src: "/pusher/artists/Benoît Lefèvre (2021).png", label: "Benoît Lefèvre", year: 2021 },
  { type: "placement", src: "/pusher/placements/Top Boy (2021).png", label: "Top Boy", year: 2021 },
  { type: "artist", src: "/pusher/artists/Calvin Markus (2021).png", label: "Calvin Markus", year: 2021 },
  { type: "placement", src: "/pusher/placements/House Of Gucci (2021).png", label: "House of Gucci", year: 2021 },
  { type: "artist", src: "/pusher/artists/Calvin Markus 2 (2021).png", label: "Calvin Markus", year: 2021 },
  // 2020
  { type: "placement", src: "/pusher/placements/VW Golf (2020).png", label: "VW Golf", year: 2020 },
  { type: "artist", src: "/pusher/artists/Campfire (2020).png", label: "Campfire", year: 2020 },
  { type: "placement", src: "/pusher/placements/Porsche Dream Aloud (2020).png", label: "Porsche: Dream Aloud", year: 2020 },
  { type: "artist", src: "/pusher/artists/Martin Wiklund (2020).png", label: "Martin Wiklund", year: 2020 },
  { type: "placement", src: "/pusher/placements/Umbrella Academy (2020).png", label: "Umbrella Academy", year: 2020 },
  { type: "artist", src: "/pusher/artists/Olly Hounds (2020).png", label: "Olly Hounds", year: 2020 },
  { type: "placement", src: "/pusher/placements/Toyota Outlive The Day (2020).png", label: "Toyota: Outlive The Day", year: 2020 },
  { type: "artist", src: "/pusher/artists/Superhuman (2020).png", label: "Superhuman", year: 2020 },
  { type: "placement", src: "/pusher/placements/Call Of Duty Warzone (2020).png", label: "Call of Duty: Warzone", year: 2020 },
  { type: "artist", src: "/pusher/artists/The Undefeated (2020).png", label: "The Undefeated", year: 2020 },
  { type: "placement", src: "/pusher/placements/Audi Scary Beautiful (2020).png", label: "Audi: Scary Beautiful", year: 2020 },
  { type: "artist", src: "/pusher/artists/Wildernessa (2020).png", label: "Wildernessa", year: 2020 },
  // 2019
  { type: "placement", src: "/pusher/placements/Joker (2019).png", label: "Joker", year: 2019 },
  { type: "artist", src: "/pusher/artists/Superhuman (2019).png", label: "Superhuman", year: 2019 },
  { type: "placement", src: "/pusher/placements/Ad Astra (2019).png", label: "Ad Astra", year: 2019 },
  { type: "artist", src: "/pusher/artists/Superhuman (2019) 2.png", label: "Superhuman", year: 2019 },
  { type: "placement", src: "/pusher/placements/X-Men Dark Phoenix (2019).png", label: "X-Men: Dark Phoenix", year: 2019 },
  { type: "artist", src: "/pusher/artists/Safari Riot (2019).png", label: "Safari Riot", year: 2019 },
  { type: "placement", src: "/pusher/placements/Batman v Superman Dawn Of Justice (2019).png", label: "Batman v Superman: Dawn of Justice", year: 2019 },
  { type: "artist", src: "/pusher/artists/Eelke Kleijn (2019).png", label: "Eelke Kleijn", year: 2019 },
  { type: "placement", src: "/pusher/placements/Game Of Thrones (2019).png", label: "Game Of Thrones", year: 2019 },
  { type: "artist", src: "/pusher/artists/Tapani Siirtola 2 (2019).png", label: "Tapani Siirtola", year: 2019 },
  { type: "placement", src: "/pusher/placements/Parasite (2019).png", label: "Parasite", year: 2019 },
  { type: "artist", src: "/pusher/artists/Ted Regklis (2019).png", label: "Ted Regklis", year: 2019 },
  { type: "placement", src: "/pusher/placements/The Crown (2019).png", label: "The Crown", year: 2019 },
  { type: "artist", src: "/pusher/artists/Fort Nowhere (2019).png", label: "Fort Nowhere", year: 2019 },
  // 2018
  { type: "placement", src: "/pusher/placements/Hunter Kiler (2018).png", label: "Hunter Killer", year: 2018 },
  { type: "artist", src: "/pusher/artists/Hyper (2018).png", label: "Hyper", year: 2018 },
  { type: "placement", src: "/pusher/placements/1517 To Paris (2018).png", label: "15:17 To Paris", year: 2018 },
  { type: "artist", src: "/pusher/artists/The Void (2018).png", label: "The Void", year: 2018 },
  { type: "placement", src: "/pusher/placements/Ant Man & The Wasp (2018).png", label: "Ant-Man & The Wasp", year: 2018 },
  { type: "artist", src: "/pusher/artists/Superhuman (2018).png", label: "Superhuman", year: 2018 },
  { type: "placement", src: "/pusher/placements/Only The Brave (2018).png", label: "Only The Brave", year: 2018 },
  { type: "artist", src: "/pusher/artists/Campfire (2018).png", label: "Campfire", year: 2018 },
  { type: "placement", src: "/pusher/placements/Wreck It Ralph 2 (2018).png", label: "Wreck-It Ralph 2", year: 2018 },
  { type: "artist", src: "/pusher/artists/François-Paul Aïche (2018).png", label: "François-Paul Aïche", year: 2018 },
  { type: "placement", src: "/pusher/placements/Samsung 8K TV (2018).png", label: "Samsung 8K TV", year: 2018 },
  { type: "artist", src: "/pusher/artists/Superhuman 2 (2018).png", label: "Superhuman", year: 2018 },
  // 2017
  { type: "placement", src: "/pusher/placements/Blade Runner 2049 (2017).png", label: "Blade Runner 2049", year: 2017 },
  { type: "artist", src: "/pusher/artists/Ian Miller (2017).png", label: "Ian Miller", year: 2017 },
  { type: "placement", src: "/pusher/placements/Alien Covenant (2017).png", label: "Alien: Covenant", year: 2017 },
  { type: "artist", src: "/pusher/artists/Tamer (2017).png", label: "Tamer", year: 2017 },
  { type: "placement", src: "/pusher/placements/Rogue One A Star Wars Story (2017).png", label: "Rogue One: A Star Wars Story", year: 2017 },
  { type: "artist", src: "/pusher/artists/Superhuman (2017).png", label: "Superhuman", year: 2017 },
  { type: "placement", src: "/pusher/placements/Transformers The Last Knight (2017).png", label: "Transformers: The Last Knight", year: 2017 },
  { type: "artist", src: "/pusher/artists/Ursine Vulpine (2017).png", label: "Ursine Vulpine", year: 2017 },
  { type: "placement", src: "/pusher/placements/War For The Planet Of The Apes (2017).png", label: "War for the Planet of the Apes", year: 2017 },
  { type: "artist", src: "/pusher/artists/Human Origin (2017).png", label: "Human Origin", year: 2017 },
  { type: "placement", src: "/pusher/placements/Star Wars Last Jedi (2017).png", label: "Star Wars: The Last Jedi", year: 2017 },
  { type: "artist", src: "/pusher/artists/Ursine Vulpine (2017) 2.png", label: "Ursine Vulpine", year: 2017 },
  // 2016
  { type: "placement", src: "/pusher/placements/Star Wars Force Awakens (2016).png", label: "Star Wars: The Force Awakens", year: 2016 },
  { type: "artist", src: "/pusher/artists/Ursine Vulpine (2016).png", label: "Ursine Vulpine", year: 2016 },
  { type: "placement", src: "/pusher/placements/The Tale Of Thomas Burberry (2016).png", label: "Burberry: The Tale Of Thomas Burberry", year: 2016 },
  { type: "artist", src: "/pusher/artists/Lawless (2016).png", label: "Lawless", year: 2016 },
  { type: "placement", src: "/pusher/placements/Daredevil (2016).png", label: "Daredevil", year: 2016 },
  { type: "artist", src: "/pusher/artists/Tapani Siirtola (2016).png", label: "Tapani Siirtola", year: 2016 },
  { type: "placement", src: "/pusher/placements/Wonder Woman (2016).png", label: "Wonder Woman", year: 2016 },
  { type: "artist", src: "/pusher/artists/1128 (2016).png", label: "1128", year: 2016 },
  { type: "placement", src: "/pusher/placements/Creed (2016).png", label: "Creed", year: 2016 },
  { type: "artist", src: "/pusher/artists/Superhuman (2016).png", label: "Superhuman", year: 2016 },
  { type: "placement", src: "/pusher/placements/Legend Of Tarzan (2016).png", label: "The Legend of Tarzan", year: 2016 },
  { type: "artist", src: "/pusher/artists/Benoît Lefèvre (2016).png", label: "Benoît Lefèvre", year: 2016 },
  // 2015
  { type: "placement", src: "/pusher/placements/Mad Max Fury Road (2015).png", label: "Mad Max: Fury Road", year: 2015 },
  { type: "artist", src: "/pusher/artists/Superhuman (2015).png", label: "Superhuman", year: 2015 },
  { type: "placement", src: "/pusher/placements/The Martian (2015).png", label: "The Martian", year: 2015 },
  { type: "artist", src: "/pusher/artists/Dean Valentine 2 (2015).png", label: "Dean Valentine", year: 2015 },
  { type: "placement", src: "/pusher/placements/Interstellar (2015).png", label: "Interstellar", year: 2015 },
  { type: "artist", src: "/pusher/artists/1128 (2015).png", label: "1128", year: 2015 },
  { type: "placement", src: "/pusher/placements/X-Men Apocalypse (2015).png", label: "X-Men: Apocalypse", year: 2015 },
  { type: "artist", src: "/pusher/artists/Snow Ghosts (2015).png", label: "Snow Ghosts", year: 2015 },
  { type: "placement", src: "/pusher/placements/Hunger Games Mockingjay II (2015).png", label: "Hunger Games: Mockingjay Part II", year: 2015 },
  { type: "artist", src: "/pusher/artists/Superhuman 2 (2015).png", label: "Superhuman", year: 2015 },
  { type: "placement", src: "/pusher/placements/Selma (2015).png", label: "Selma", year: 2015 },
  { type: "artist", src: "/pusher/artists/Zack Hemsey 2 (2015).png", label: "Zack Hemsey", year: 2015 },
  // 2014
  { type: "placement", src: "/pusher/placements/Dawn Of The Planet Of The Apes (2014).png", label: "Dawn of the Planet of the Apes", year: 2014 },
  { type: "artist", src: "/pusher/artists/Superhuman (2014).png", label: "Superhuman", year: 2014 },
  { type: "placement", src: "/pusher/placements/Jack Ryan (2014).png", label: "Jack Ryan", year: 2014 },
  { type: "artist", src: "/pusher/artists/Zack Hemsey (2014).png", label: "Zack Hemsey", year: 2014 },
  { type: "placement", src: "/pusher/placements/The Hobbit (2014).png", label: "The Hobbit", year: 2014 },
  { type: "artist", src: "/pusher/artists/Superhuman 2 (2014).png", label: "Superhuman", year: 2014 },
  { type: "placement", src: "/pusher/placements/Fury (2014).png", label: "Fury", year: 2014 },
  { type: "artist", src: "/pusher/artists/Dean Valentine (2014).png", label: "Dean Valentine", year: 2014 },
  { type: "placement", src: "/pusher/placements/The Counselor (2014).png", label: "The Counselor", year: 2014 },
  { type: "artist", src: "/pusher/artists/DJ Shadow (2014).png", label: "DJ Shadow", year: 2014 },
  { type: "placement", src: "/pusher/placements/Captain America The Winter Soldier (2014).png", label: "Captain America: The Winter Soldier", year: 2014 },
  { type: "artist", src: "/pusher/artists/1128 (2014).png", label: "1128", year: 2014 },
  // 2013
  { type: "placement", src: "/pusher/placements/Captain Phillips (2013).png", label: "Captain Phillips", year: 2013 },
  { type: "artist", src: "/pusher/artists/Dean Valentine 2 (2013).png", label: "Dean Valentine", year: 2013 },
  { type: "placement", src: "/pusher/placements/Wolverine (2013).png", label: "Wolverine", year: 2013 },
  { type: "artist", src: "/pusher/artists/Felix Erskine (2013).png", label: "Felix Erskine", year: 2013 },
  { type: "placement", src: "/pusher/placements/World War Z (2013).png", label: "World War Z", year: 2013 },
  { type: "artist", src: "/pusher/artists/Multiverse (2013).png", label: "Multiverse", year: 2013 },
  { type: "placement", src: "/pusher/placements/Lone Ranger (2013).png", label: "Lone Ranger", year: 2013 },
  { type: "artist", src: "/pusher/artists/Zack Hemsey 2 (2013).png", label: "Zack Hemsey", year: 2013 },
  { type: "placement", src: "/pusher/placements/Star Trek 2 (2013).png", label: "Star Trek Into Darkness", year: 2013 },
  { type: "artist", src: "/pusher/artists/Superhuman 2 (2013).png", label: "Superhuman", year: 2013 },
  { type: "placement", src: "/pusher/placements/Call Of Duty Black Ops II (2013).png", label: "Call of Duty: Black Ops II", year: 2013 },
  { type: "artist", src: "/pusher/artists/The Crystal Method (2013).png", label: "The Crystal Method", year: 2013 },
  // 2012
  { type: "placement", src: "/pusher/placements/Abraham Lincoln Vampire Hunter (2012).png", label: "Abraham Lincoln: Vampire Hunter", year: 2012 },
  { type: "artist", src: "/pusher/artists/Hanna Lim (2012).png", label: "Hanna Lim", year: 2012 },
  { type: "placement", src: "/pusher/placements/Hunger Games Catching Fire (2012).png", label: "Hunger Games: Catching Fire", year: 2012 },
  { type: "artist", src: "/pusher/artists/Dean Valentine (2012).png", label: "Dean Valentine", year: 2012 },
  { type: "placement", src: "/pusher/placements/Prometheus (2012).png", label: "Prometheus", year: 2012 },
  { type: "artist", src: "/pusher/artists/Dean Valentine 2 (2012).png", label: "Dean Valentine", year: 2012 },
  { type: "placement", src: "/pusher/placements/Spiderman (2012).png", label: "Spiderman", year: 2012 },
  { type: "artist", src: "/pusher/artists/Heavy Young Heathens (2012).png", label: "Heavy Young Heathens", year: 2012 },
  { type: "placement", src: "/pusher/placements/Girl With The Dragon Tattoo (2012).png", label: "Girl with the Dragon Tattoo", year: 2012 },
  { type: "artist", src: "/pusher/artists/Alan Griffiths (2012).png", label: "Alan Griffiths", year: 2012 },
  { type: "placement", src: "/pusher/placements/Snow White & The Huntsman (2012).png", label: "Snow White & The Huntsman", year: 2012 },
  { type: "artist", src: "/pusher/artists/Lawless (2012).png", label: "Lawless", year: 2012 },
  // 2011
  { type: "placement", src: "/pusher/placements/Jayne Eyre (2011).png", label: "Jane Eyre", year: 2011 },
  { type: "artist", src: "/pusher/artists/Jeff Cardoni (2011).png", label: "Jeff Cardoni", year: 2011 },
  { type: "placement", src: "/pusher/placements/Man On A Ledge (2011).png", label: "Man On A Ledge", year: 2011 },
  { type: "artist", src: "/pusher/artists/Timo Baker (2011).png", label: "Timo Baker", year: 2011 },
  { type: "placement", src: "/pusher/placements/Cowboys & Aliens (2011).png", label: "Cowboys & Aliens", year: 2011 },
  { type: "artist", src: "/pusher/artists/Echolab (2011).png", label: "Echolab", year: 2011 },
  { type: "placement", src: "/pusher/placements/Transformers Dark Of The Moon (2011).png", label: "Transformers: Dark of the Moon", year: 2011 },
  { type: "artist", src: "/pusher/artists/Paul Jebanasam (2011).png", label: "Paul Jebanasam", year: 2011 },
  { type: "placement", src: "/pusher/placements/Johnny English Reborn (2011).png", label: "Johnny English Reborn", year: 2011 },
  { type: "artist", src: "/pusher/artists/Heavy Young Heathens (2011).png", label: "Heavy Young Heathens", year: 2011 },
  { type: "placement", src: "/pusher/placements/Green Lantern (2011).png", label: "Green Lantern", year: 2011 },
  { type: "artist", src: "/pusher/artists/Guy-Roger Duvert (2011).png", label: "Guy-Roger Duvert", year: 2011 },
  // 2010
  { type: "placement", src: "/pusher/placements/Inception (2010).png", label: "Inception", year: 2010 },
  { type: "artist", src: "/pusher/artists/Zack Hemsey (2010).png", label: "Zack Hemsey", year: 2010 },
  { type: "placement", src: "/pusher/placements/Knight And Day (2010).png", label: "Knight & Day", year: 2010 },
  { type: "artist", src: "/pusher/artists/Neil Ormandy (2010).png", label: "Neil Ormandy", year: 2010 },
  { type: "placement", src: "/pusher/placements/Robin Hood (2010).png", label: "Robin Hood", year: 2010 },
  { type: "artist", src: "/pusher/artists/Nine Leaves (2010).png", label: "Nine Leaves", year: 2010 },
  { type: "placement", src: "/pusher/placements/The Town (2010).png", label: "The Town", year: 2010 },
  { type: "artist", src: "/pusher/artists/Zack Hemsey 2 (2010).png", label: "Zack Hemsey", year: 2010 },
  { type: "placement", src: "/pusher/placements/Sherlock Holmes Game Of Shadows (2010).png", label: "Sherlock Holmes: Game of Shadows", year: 2010 },
  { type: "artist", src: "/pusher/artists/Crud (2010).png", label: "Crud", year: 2010 },
  { type: "placement", src: "/pusher/placements/Unstoppable (2010).png", label: "Unstoppable", year: 2010 },
  { type: "artist", src: "/pusher/artists/Echolab (2010).png", label: "Echolab", year: 2010 },
];

// Fibonacci sphere distribution for even spacing
function fibSphere(n: number): { x: number; y: number; z: number }[] {
  const points: { x: number; y: number; z: number }[] = [];
  const golden = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < n; i++) {
    const theta = (2 * Math.PI * i) / golden;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
    points.push({
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
    });
  }
  return points;
}

export default function PusherMusicPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    rotX: 0.3,
    rotY: 0,
    velX: 0,
    velY: 0.002,
    zoom: 1,
    targetZoom: 1,
    dragging: false,
    lastX: 0,
    lastY: 0,
    images: [] as (HTMLImageElement | null)[],
    loaded: 0,
    hovered: -1,
    points: fibSphere(feedItems.length),
  });
  const [selected, setSelected] = useState<number | null>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [showHint, setShowHint] = useState(true);

  // Preload images
  useEffect(() => {
    const s = stateRef.current;
    s.images = new Array(feedItems.length).fill(null);
    feedItems.forEach((item, i) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        s.images[i] = img;
        s.loaded++;
        setLoadProgress(Math.floor((s.loaded / feedItems.length) * 100));
      };
      img.onerror = () => {
        s.loaded++;
        setLoadProgress(Math.floor((s.loaded / feedItems.length) * 100));
      };
      img.src = item.src;
    });
  }, []);

  // Hide hint after 4s
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  // Canvas render loop
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    // Size canvas to window
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Clear
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    // Draw subtle star field
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    for (let i = 0; i < 120; i++) {
      const sx = ((i * 7919 + 1) % w);
      const sy = ((i * 6271 + 3) % h);
      const sr = ((i * 3571) % 3) * 0.3 + 0.3;
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }

    // Physics
    if (!s.dragging) {
      s.rotY += s.velY;
      s.rotX += s.velX;
      s.velX *= 0.97;
      s.velY *= 0.97;
      if (Math.abs(s.velY) < 0.0005) s.velY = 0.002; // gentle auto-rotate
    }
    s.zoom += (s.targetZoom - s.zoom) * 0.1;

    const radius = Math.min(w, h) * 0.32 * s.zoom;
    const cardW = 70 * s.zoom;
    const cardH = 88 * s.zoom;
    const cx = w / 2;
    const cy = h / 2;

    // Transform and sort points by Z for painter's algorithm
    const cosX = Math.cos(s.rotX), sinX = Math.sin(s.rotX);
    const cosY = Math.cos(s.rotY), sinY = Math.sin(s.rotY);

    const projected = s.points.map((p, i) => {
      // Rotate Y
      let x = p.x * cosY - p.z * sinY;
      let z = p.x * sinY + p.z * cosY;
      let y = p.y;
      // Rotate X
      const y2 = y * cosX - z * sinX;
      const z2 = y * sinX + z * cosX;
      y = y2;
      z = z2;

      const scale = 1 / (1 - z * 0.4); // perspective
      return {
        sx: cx + x * radius * scale,
        sy: cy + y * radius * scale,
        z,
        scale,
        i,
      };
    });

    projected.sort((a, b) => a.z - b.z);

    // Draw cards
    for (const pt of projected) {
      const item = feedItems[pt.i];
      const img = s.images[pt.i];
      const alpha = Math.max(0, Math.min(1, (pt.z + 1) * 0.6 + 0.2));
      const cw = cardW * pt.scale;
      const ch = cardH * pt.scale;
      const px = pt.sx - cw / 2;
      const py = pt.sy - ch / 2;

      ctx.globalAlpha = alpha;

      // Draw card shadow
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.beginPath();
      ctx.roundRect(px + 2, py + 2, cw, ch, 4 * pt.scale);
      ctx.fill();

      // Draw card background
      if (item.type === "placement") {
        ctx.fillStyle = "#111";
      } else {
        ctx.fillStyle = "#8B7EC8"; // lilac fallback
      }
      ctx.beginPath();
      ctx.roundRect(px, py, cw, ch, 4 * pt.scale);
      ctx.fill();

      // Draw image if loaded
      if (img) {
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(px, py, cw, ch, 4 * pt.scale);
        ctx.clip();
        // Cover fit
        const imgRatio = img.width / img.height;
        const cardRatio = cw / ch;
        let dw: number, dh: number, dx: number, dy: number;
        if (imgRatio > cardRatio) {
          dh = ch;
          dw = ch * imgRatio;
          dx = px - (dw - cw) / 2;
          dy = py;
        } else {
          dw = cw;
          dh = cw / imgRatio;
          dx = px;
          dy = py - (dh - ch) / 2;
        }
        ctx.drawImage(img, dx, dy, dw, dh);
        ctx.restore();
      }

      // Hover glow
      if (s.hovered === pt.i) {
        ctx.strokeStyle = "rgba(255,255,255,0.8)";
        ctx.lineWidth = 2 * pt.scale;
        ctx.beginPath();
        ctx.roundRect(px, py, cw, ch, 4 * pt.scale);
        ctx.stroke();
      }
    }

    ctx.globalAlpha = 1;

    // Draw center text
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.font = `900 ${Math.min(120, w * 0.1)}px system-ui, sans-serif`;
    ctx.fillText("PUSHER", cx, cy + Math.min(120, w * 0.1) * 0.35);

    requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    requestAnimationFrame(render);
  }, [render]);

  // Mouse/touch handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const s = stateRef.current;

    const onDown = (ex: number, ey: number) => {
      s.dragging = true;
      s.lastX = ex;
      s.lastY = ey;
      s.velX = 0;
      s.velY = 0;
    };
    const onMove = (ex: number, ey: number) => {
      if (s.dragging) {
        const dx = ex - s.lastX;
        const dy = ey - s.lastY;
        s.velY = dx * 0.003;
        s.velX = dy * 0.003;
        s.rotY += dx * 0.005;
        s.rotX += dy * 0.005;
        s.lastX = ex;
        s.lastY = ey;
      }

      // Hit test for hover
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.32 * s.zoom;
      const cardW = 70 * s.zoom;
      const cardH = 88 * s.zoom;
      const cosX = Math.cos(s.rotX), sinX = Math.sin(s.rotX);
      const cosY = Math.cos(s.rotY), sinY = Math.sin(s.rotY);

      let closest = -1;
      let closestDist = Infinity;

      for (let i = 0; i < s.points.length; i++) {
        const p = s.points[i];
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;
        let y = p.y;
        const y2 = y * cosX - z * sinX;
        const z2 = y * sinX + z * cosX;
        y = y2;
        z = z2;
        if (z < -0.2) continue; // skip back-facing

        const scale = 1 / (1 - z * 0.4);
        const sx = cx + x * radius * scale;
        const sy = cy + y * radius * scale;
        const cw = cardW * scale;
        const ch = cardH * scale;

        if (ex >= sx - cw / 2 && ex <= sx + cw / 2 && ey >= sy - ch / 2 && ey <= sy + ch / 2) {
          const d = Math.abs(z);
          if (d < closestDist) {
            closest = i;
            closestDist = d;
          }
        }
      }
      s.hovered = closest;
      canvas.style.cursor = closest >= 0 ? "pointer" : "grab";
    };
    const onUp = () => { s.dragging = false; };

    const onClick = (e: MouseEvent) => {
      if (Math.abs(s.velX) > 0.01 || Math.abs(s.velY) > 0.01) return;
      if (s.hovered >= 0) setSelected(s.hovered);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      s.targetZoom = Math.max(0.4, Math.min(3, s.targetZoom - e.deltaY * 0.001));
    };

    const mouseDown = (e: MouseEvent) => onDown(e.clientX, e.clientY);
    const mouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const touchStart = (e: TouchEvent) => { e.preventDefault(); onDown(e.touches[0].clientX, e.touches[0].clientY); };
    const touchMove = (e: TouchEvent) => { e.preventDefault(); onMove(e.touches[0].clientX, e.touches[0].clientY); };

    canvas.addEventListener("mousedown", mouseDown);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", onUp);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("touchstart", touchStart, { passive: false });
    canvas.addEventListener("touchmove", touchMove, { passive: false });
    canvas.addEventListener("touchend", onUp);

    return () => {
      canvas.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("touchstart", touchStart);
      canvas.removeEventListener("touchmove", touchMove);
      canvas.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div style={{ background: "#000", width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      {/* Loading overlay */}
      {loadProgress < 100 && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 100, background: "#000",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: "#fff", letterSpacing: -2, marginBottom: 24 }}>PUSHER</div>
          <div style={{ width: 200, height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: `${loadProgress}%`, height: "100%", background: "#fff", transition: "width 0.3s" }} />
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 12, letterSpacing: 2 }}>{loadProgress}%</div>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, cursor: "grab" }}
      />

      {/* Top nav overlay */}
      <div style={{
        position: "absolute", top: 36, left: 0, right: 0, zIndex: 20,
        padding: "14px 24px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
        pointerEvents: "none",
      }}>
        <span style={{ fontSize: 22, fontWeight: 900, color: "#fff", pointerEvents: "auto" }}>PUSHER</span>
        <div style={{ display: "flex", gap: 24, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", pointerEvents: "auto" }}>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>Sync Licensing</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>Bespoke Composition</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>Music Supervision</span>
        </div>
      </div>

      {/* Hint */}
      {showHint && loadProgress >= 100 && (
        <div style={{
          position: "absolute", bottom: 60, left: "50%", transform: "translateX(-50%)",
          zIndex: 20, color: "rgba(255,255,255,0.4)", fontSize: 13,
          letterSpacing: 3, textTransform: "uppercase", textAlign: "center",
          animation: "pusher-fade 4s ease-in-out",
          pointerEvents: "none",
        }}>
          Drag to explore &bull; Scroll to zoom &bull; Click to view
        </div>
      )}

      {/* Stats bottom-left */}
      <div style={{
        position: "absolute", bottom: 24, left: 24, zIndex: 20,
        color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: 2,
        textTransform: "uppercase", pointerEvents: "none",
      }}>
        196 Placements &bull; 150+ Artists &bull; Since 2010
      </div>

      {/* Selected card modal */}
      {selected !== null && (
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 50,
            background: "rgba(0,0,0,0.85)", backdropFilter: "blur(20px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => setSelected(null)}
        >
          <div style={{
            maxWidth: 400, width: "90%", textAlign: "center",
          }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              aspectRatio: "4/5", borderRadius: 12, overflow: "hidden",
              boxShadow: "0 0 80px rgba(255,255,255,0.1)",
              marginBottom: 24,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feedItems[selected].src}
                alt={feedItems[selected].label}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>
              {feedItems[selected].label}
            </div>
            <div style={{
              color: "rgba(255,255,255,0.4)", fontSize: 12,
              marginTop: 6, letterSpacing: 2, textTransform: "uppercase",
            }}>
              {feedItems[selected].type === "placement" ? "Placement" : "Artist / Composer"} &bull; {feedItems[selected].year}
            </div>
            <button
              onClick={() => setSelected(null)}
              style={{
                marginTop: 24, padding: "10px 28px",
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", borderRadius: 50, fontSize: 12,
                cursor: "pointer", letterSpacing: 2, textTransform: "uppercase",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pusher-fade {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
