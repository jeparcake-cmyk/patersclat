"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

// Get unique years for the year markers
const years = [...new Set(feedItems.map((item) => item.year))].sort((a, b) => b - a);

export default function PusherMusicPage() {
  const [visibleCount, setVisibleCount] = useState(18);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "placements" | "artists">("all");

  const filtered = activeFilter === "all"
    ? feedItems
    : feedItems.filter((item) =>
        activeFilter === "placements" ? item.type === "placement" : item.type === "artist"
      );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 12, filtered.length));
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [filtered.length, visibleCount]);

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(18);
  }, [activeFilter]);

  const visibleItems = filtered.slice(0, visibleCount);

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{
        position: "fixed", top: 36, left: 0, right: 0, zIndex: 50,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "14px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.5px" }}>PUSHER</span>
          <div style={{ display: "flex", gap: 28, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase" }}>
            {["Work", "Artists", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                color: "rgba(255,255,255,0.5)", textDecoration: "none",
                transition: "color 0.3s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >{item}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        paddingTop: 160, paddingBottom: 80, textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <h1 style={{
          fontSize: "clamp(56px, 12vw, 140px)", fontWeight: 900,
          lineHeight: 0.9, letterSpacing: "-4px", margin: 0,
          background: "linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.3) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          PUSHER
        </h1>
        <p style={{
          fontSize: 14, letterSpacing: "4px", textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)", marginTop: 20, fontWeight: 400,
        }}>
          Sync Licensing &bull; Bespoke Composition &bull; Music Supervision
        </p>
        <p style={{
          color: "rgba(255,255,255,0.35)", marginTop: 16, fontSize: 15,
          maxWidth: 500, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6,
        }}>
          Music for the world&apos;s biggest films, shows, and brands.
          <br />Over 150 artists. 500+ placements. Since 2010.
        </p>
      </section>

      {/* Filter tabs */}
      <div id="work" style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 16px 24px",
        display: "flex", gap: 8, justifyContent: "center",
      }}>
        {(["all", "placements", "artists"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: "8px 20px", borderRadius: 50, border: "none",
              background: activeFilter === f ? "#fff" : "rgba(255,255,255,0.06)",
              color: activeFilter === f ? "#000" : "rgba(255,255,255,0.5)",
              fontSize: 12, fontWeight: 600, letterSpacing: "1.5px",
              textTransform: "uppercase", cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Instagram-style feed grid */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
        }}>
          {visibleItems.map((item, i) => {
            // Check if this is the start of a new year
            const isNewYear = i === 0 || (
              filtered[filtered.indexOf(item) - 1] &&
              filtered[filtered.indexOf(item) - 1].year !== item.year
            );
            const actualIndex = filtered.indexOf(item);
            const showYearMarker = isNewYear && actualIndex % 3 === 0;

            return (
              <div key={`${item.src}-${i}`} style={{ position: "relative" }}>
                {/* Year marker overlay for first item of each year */}
                {isNewYear && (
                  <div style={{
                    position: "absolute", top: 8, left: 8, zIndex: 10,
                    background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
                    padding: "4px 10px", borderRadius: 4,
                    fontSize: 11, fontWeight: 700, letterSpacing: "1px",
                    color: "rgba(255,255,255,0.8)",
                  }}>
                    {item.year}
                  </div>
                )}
                <div style={{
                  aspectRatio: "4/5", position: "relative", overflow: "hidden",
                  cursor: "pointer", transition: "opacity 0.3s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 33vw, 400px"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Load more sentinel */}
        {visibleCount < filtered.length && (
          <div ref={sentinelRef} style={{ textAlign: "center", padding: "48px 0" }}>
            <div style={{
              width: 20, height: 20,
              border: "2px solid rgba(255,255,255,0.2)",
              borderTopColor: "#fff",
              borderRadius: "50%",
              margin: "0 auto",
              animation: "pusher-spin 0.8s linear infinite",
            }} />
            <style>{`@keyframes pusher-spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {visibleCount >= filtered.length && (
          <p style={{
            textAlign: "center", padding: "48px 0",
            color: "rgba(255,255,255,0.2)", fontSize: 13,
            letterSpacing: "3px", textTransform: "uppercase",
          }}>
            Est. 2010
          </p>
        )}
      </section>

      {/* About section */}
      <section id="about" style={{
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1px", marginBottom: 20 }}>
            A modern hydra of music
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.8, fontSize: 15 }}>
            Founded in 2009, Pusher has grown from Los Angeles into a global creative
            force — with offices in LA, New York, London, and Berlin. We represent over
            150 artists and have placed music in some of the most iconic trailers and
            campaigns of the last 15 years — from Inception to Oppenheimer, Blade Runner
            2049 to Wicked. Our mission: connect extraordinary music with extraordinary moments.
          </p>
          <div style={{
            marginTop: 40, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap",
          }}>
            {["Los Angeles", "New York", "London", "Berlin"].map((city) => (
              <span key={city} style={{
                padding: "8px 18px", borderRadius: 50,
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: 12, letterSpacing: "2px", textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 12 }}>
            Get in touch
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 32 }}>
            Have a project? We&apos;d love to hear about it.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <input placeholder="Name" style={{
                padding: "12px 16px", borderRadius: 6,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff", fontSize: 14, outline: "none",
              }} />
              <input placeholder="Email" style={{
                padding: "12px 16px", borderRadius: 6,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff", fontSize: 14, outline: "none",
              }} />
            </div>
            <textarea placeholder="Tell us about your project..." rows={3} style={{
              padding: "12px 16px", borderRadius: 6,
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              color: "#fff", fontSize: 14, outline: "none", resize: "vertical",
            }} />
            <button type="submit" style={{
              padding: "14px", background: "#fff", color: "#000",
              borderRadius: 6, fontWeight: 700, fontSize: 13,
              border: "none", cursor: "pointer", letterSpacing: "1px",
              textTransform: "uppercase",
            }}>
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "32px 24px", textAlign: "center",
      }}>
        <span style={{ fontSize: 14, fontWeight: 900 }}>PUSHER</span>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, marginTop: 8 }}>
          &copy; 2024 Pusher Music Group. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
