const landing = new Vue({

    // Element Where you mounting the app
    el: '#app-landing',

    //  Memebers - Variables
    data: {
        searchInput: {
            searchText: "",
        },

        searched: false,

        movies: [
            {
                Title: "Charlie and the Chocolate Factory",
                Poster: "https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_SX300.jpg",
                Description:
                    "When Willy Wonka decides to let five children into his chocolate factory, he decides to release five "
                    + "golden tickets in five separate chocolate bars, causing complete mayhem. The tickets start to be found,"
                    + "with the fifth going to a very special boy, called Charlie Bucket. With his Grandpa, Charlie joins the "
                    + "rest of the children to experience the most amazing factory ever. But not everything goes to plan within "
                    + "the factory.",
                CommingSoon: "0",
                Reminder: "0",
                ReleaseDate: "2005",
                Genre: "Fantasy",
                Actors: "7",
            },

            {
                Title: "Cruella",
                Poster: "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
                Description:
                    "Before she becomes Cruella de Vil, teenage Estella has a dream. She wishes to become a fashion designer,"
                    + "having been gifted with talent, innovation, and ambition all in equal measures. But life seems intent on "
                    + "making sure her dreams never come true. Having wound up penniless and orphaned in London at 12, 10 years "
                    + "later Estella runs wild through the city streets with her best friends and partners-in-(petty)-crime, "
                    + "Horace and Jasper, two amateur thieves. When a chance encounter vaults Estella into the world of the young "
                    + "rich and famous, however, she begins to question the existence she's built for herself in London and wonders "
                    + "whether she might, indeed, be destined for more after all.",
                CommingSoon: "0",
                Reminder: "0",
                ReleaseDate: "2021",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Interstellar",
                Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                Description:
                    "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival:"
                    + "Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to "
                    + "go where no man has gone before, a planet that may have the right environment to sustain human life.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2014",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "Sunshine",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTU5Nzg2OTk2NF5BMl5BanBnXkFtZTYwNTc1ODM3._V1_SX300.jpg",
                Description:
                    "50 years into the future, the Sun begins to die, and Earth is dying as a result. A team of astronauts is sent "
                    + "to revive the Sun - but the mission fails. Seven years later, a new team is sent to finish the mission "
                    + "as mankind's last hope.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2007",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "James and the Giant Peach",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTNkNWIwNGUtNTJlOC00NDU3LTk0NWEtNjNjNDM4NzRiNThkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                Description:
                    "James' happy life at the English seaside is rudely ended when his parents are killed by a rhinoceros "
                    + "and he goes to live with his two horrid aunts. Daringly saving the life of a spider he comes "
                    + "into possession of magic boiled crocodile tongues, after which an enormous peach starts to grow in the garden. "
                    + "Venturing inside, he meets not only the spider but a number of new friends including a ladybug and a centipede "
                    + "who help him with his plan to try to get to New York.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1996",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "Chicken Run",
                Poster: "https://m.media-amazon.com/images/M/MV5BNDgxNjZlZDYtZGJmZC00Mjg0LWEwYzctYWQ0MWFjNTM3ZmM4XkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_SX300.jpg",
                Description:
                    "Having been hopelessly repressed and facing eventual certain death at the chicken farm where they are held, "
                    + "Rocky the rooster and Ginger the chicken decide to rebel against the evil Mr. and Ms. Tweedy, the farm's owners. "
                    + "Rocky and Ginger lead their fellow chickens in a great escape from the murderous farmers and their farm of doom.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2000",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "A.I. Artificial Intelligence",
                Poster: "https://m.media-amazon.com/images/M/MV5BNWU2NzEyMDYtM2MyOS00OGM3LWFkNzAtMzRiNzE2ZjU5ZTljXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
                Description:
                    "In the not-so-far future the polar ice caps have melted and the resulting rise of the ocean waters has drowned all "
                    + "the coastal cities of the world. Withdrawn to the interior of the continents, the human race keeps advancing, "
                    + "reaching the point of creating realistic robots (called mechas) to serve them. One of the mecha-producing companies "
                    + "builds David, an artificial kid which is the first to have real feelings, especially a never-ending love for his 'mother', "
                    + "Monica. Monica is the woman who adopted him as a substitute for her real son, who remains in cryo-stasis, stricken by an "
                    + "incurable disease. David is living happily with Monica and her husband, but when their real son returns home after a cure "
                    + "is discovered, his life changes dramatically.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2001",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "Grave of the Fireflies",
                Poster: "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
                Description:
                    "The story of Seita and Setsuko, two young Japanese siblings, living in the declining days of World War II. "
                    + "When an American firebombing separates the two children from their parents, the two siblings must rely completely "
                    + "on one another while they struggle to fight for their survival.",
                CommingSoon: "1",
                Reminder: "4",
                ReleaseDate: "1988",
                Genre: "Drama",
                Actors: "7",
            },
            {
                Title: "The Gods Must Be Crazy",
                Poster: "https://m.media-amazon.com/images/M/MV5BMzVhZDE2N2UtMjEyZi00ODkyLWJhMTctM2NhZWNkNGE4NWYyXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg",
                Description:
                    "A Sho in the Kalahari desert encounters technology for the first time--in the shape of a Coke bottle. "
                    + "He takes it back to his people, and they use it for many tasks. The people start to fight over it, "
                    + "so he decides to return it to the God--where he thinks it came from. Meanwhile, we are introduced to "
                    + "a clumsy biologist, a schoolteacher assigned to a small village, and a despotic revolutionary.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1980",
                Genre: "Comedy",
                Actors: "7",
            },
            {
                Title: "Ant-Man",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
                Description:
                    "Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace "
                    + "his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from "
                    + "a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull "
                    + "off a heist that will save the world.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2015",
                Genre: "Adventure",
                Actors: "7",
            },
            {
                Title: "Uncharted",
                Poster: "https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg",
                Description:
                    "Street-smart Nathan Drake (Tom Holland) is recruited by seasoned treasure hunter Victor 'Sully' Sullivan (Mark Wahlberg) "
                    + "to recover a fortune amassed by Ferdinand Magellan and lost 500 years ago by the House of Moncada. What starts as a heist "
                    + "job for the duo becomes a globe-trotting, white-knuckle race to reach the prize before the ruthless Santiago Moncada "
                    + "(Antonio Banderas), who believes he and his family are the rightful heirs. If Nate and Sully can decipher the clues "
                    + "and solve one of the world's oldest mysteries, they stand to find $5 billion in treasure and perhaps even Nate's long-lost "
                    + "brother...but only if they can learn to work together.",
                CommingSoon: "1",
                Reminder: "4",
                ReleaseDate: "2022",
                Genre: "Adventure",
                Actors: "7",
            },
            {
                Title: "Red Notice",
                Poster: "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
                Description:
                    "When an Interpol-issued Red Notice the highest level warrant to hunt and capture the world's most wanted goes out, "
                    + "the FBI's top  profiler John Hartley (Dwayne Johnson) is on the case. His global pursuit finds him smack dab in the "
                    + "middle of a daring heist where he's forced to partner with the world's greatest art thief Nolan Booth (Ryan Reynolds) "
                    + "in order to catch the world's most wanted art thief, 'The Bishop' (Gal Gadot). The high-flying adventure that ensues "
                    + "takes the trio around the world, across the dance floor, trapped in a secluded prison, into the jungle and, worst of all "
                    + "for them, constantly into each other's company.",
                CommingSoon: "1",
                Reminder: "4",
                ReleaseDate: "2021",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Wonder Woman",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
                Description:
                    "Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, "
                    + "when a pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, "
                    + "convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full "
                    + "powers and her true destiny.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2017",
                Genre: "Adventure",
                Actors: "7",
            },
            {
                Title: "Honey, I Shrunk the Kids",
                Poster: "https://m.media-amazon.com/images/M/MV5BOTQ1NTg4MDAtOGU0OS00ZGQwLTliZjQtNDEzZjAzZGI5MjFjXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
                Description:
                    "On the brink of perfecting his state-of-the-art matter-shrinking machine, the suburban paterfamilias and indefatigable inventor, "
                    + "Professor Wayne Szalinski, realises that his device truly works, when it zaps both his kids and their friends. Now, to return "
                    + "to the relative safety of their home while being reduced to a mere quarter-inch size, the minuscule humans must venture out "
                    + "into the dense and perilous landscapes of their now-immense backyard--a hostile environment where nearly everything spells "
                    + "trouble. Can the kids exit the green maze of grass in one piece?",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1989",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "Babe",
                Poster: "https://m.media-amazon.com/images/M/MV5BYjg4ZjUzMzMtYzlmYi00YTcwLTlkOWUtYWFmY2RhNjliODQzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
                Description:
                    "Gentle farmer Arthur Hoggett wins a piglet named Babe at a county fair. Narrowly escaping his fate as Christmas dinner when "
                    + "Farmer Hoggett decides to show him at the next fair, Babe bonds with motherly border collie Fly and discovers that he can "
                    + "herd sheep too. But will the other farm animals, including Fly's jealous husband, Rex, accept a pig who doesn't conform to "
                    + "the farm's social hierarchy?",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1995",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "Edward Scissorhands",
                Poster: "https://m.media-amazon.com/images/M/MV5BMWY2MGRkNjgtZDczNi00YWJjLTkwNmUtMTY0NTE5ZDhkZjgwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
                Description:
                    "In a castle high on top of a hill lives an inventor's greatest creation - Edward, a near-complete person. "
                    + "The creator died before he could finish Edward's hands; instead, he is left with metal scissors for hands. "
                    + "Since then, he has lived alone, until a kind lady called Peg discovers him and welcomes him into her home. "
                    + "At first, everyone welcomes him into the community, but soon things begin to take a change for the worse.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1990",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "The Adventures of Tintin",
                Poster: "https://m.media-amazon.com/images/M/MV5BNDE5MDExNTQ1OF5BMl5BanBnXkFtZTcwMDIxMTM5Ng@@._V1_SX300.jpg",
                Description:
                    "Having bought a model ship, the Unicorn, for a pound off a market stall Tintin is initially puzzled that the sinister "
                    + "Mr. Sakharine should be so eager to buy it from him, resorting to murder and kidnapping Tintin - accompanied by his "
                    + "marvellous dog Snowy - to join him and his gang as they sail to Morocco on an old cargo ship. Sakharine has bribed the "
                    + "crew to revolt against the ship's master, drunken Captain Haddock, but Tintin, Snowy and Haddock escape, arriving in "
                    + "Morocco at the court of a sheikh, who also has a model of the Unicorn. Haddock tells Tintin that over three hundred "
                    + "years earlier his ancestor Sir Francis Haddock was forced to scuttle the original Unicorn when attacked by a piratical "
                    + "forebear of Sakharine but he managed to save his treasure and provide clues to its location in three separate scrolls, "
                    + "all of which were secreted in models of the Unicorn. Tintin and Sakharine have one each and the villain intends to use "
                    + "the glass-shattering top Cs of operatic soprano the Milanese Nightingale to secure the third. With aid from bumbling "
                    + "Interpol agents the Thompson Twins our boy hero, his dog and the captain must prevent Sakharine from obtaining all "
                    + "three scrolls to fulfil the prophesy that only the last of the Haddocks can discover the treasure's whereabouts.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2011",
                Genre: "Adventure",
                Actors: "7",
            },
            {
                Title: "Life of Pi",
                Poster: "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_SX300.jpg",
                Description:
                    "In Canada, a writer visits the Indian storyteller Pi Patel and asks him to tell his life story. Pi tells the story of his "
                    + "childhood in Pondicherry, India, and the origin of his nickname. One day, his father, a zoo owner, explains that the "
                    + "municipality is no longer supporting the zoo and he has hence decided to move to Canada, where the animals the family owns "
                    + "would also be sold. They board on a Japanese cargo ship with the animals and out of the blue, there is a storm, followed by "
                    + "a shipwrecking. Pi survives in a lifeboat with a zebra, an orangutan, a hyena and a male Bengal tiger nicknamed "
                    + "Richard Parker. They are adrift in the Pacific Ocean, with aggressive hyena and Richard Parker getting hungry. "
                    + "Pi needs to find a way to survive.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2012",
                Genre: "Adventure",
                Actors: "7",
            },
            {
                Title: "Ice Age",
                Poster: "https://m.media-amazon.com/images/M/MV5BOGEwMTQyMDktMWUwZC00MzExLTg1MGMtYWJiNWNhMzIyMGU5XkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_SX300.jpg",
                Description:
                    "Back when the Earth was being overrun by glaciers, and animals were scurrying to save themselves from the upcoming Ice Age, "
                    + "a sloth named Sid, a woolly mammoth named Manny, and a saber-toothed tiger named Diego are forced to become unlikely heroes. "
                    + "The three reluctantly come together when they have to return a human child to its father while braving the deadly elements of "
                    + "the impending Ice Age.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2002",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "The Road to El Dorado",
                Poster: "https://m.media-amazon.com/images/M/MV5BOTEzNWIwMzctOTE1YS00YjIyLTgwZGEtMTMxZDAzNzlmODMxXkEyXkFqcGdeQXVyMjgyMDk1MzY@._V1_SX300.jpg",
                Description:
                    "The story is about two swindlers who get their hands on a map to the fabled city of gold, El Dorado, while pulling off some "
                    + "sort of scam. Their plan goes bad and the rogues end up lost at sea after several misfortunes. Oddly enough, they end up "
                    + "on the shores of El Dorado, and are worshipped by the natives for their foreign appearances.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2000",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "Home Alone",
                Poster: "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                Description:
                    "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, "
                    + "Kevin (Macaulay Culkin), got into a scuffle with his older brother Buzz (Devin Ratray) and was sent to his room, "
                    + "which is on the third floor of his house. Then, the next morning, while the rest of the family was in a rush to make it to "
                    + "the airport on time, they completely forgot about Kevin, who now has the house all to himself. Being home alone was fun "
                    + "for Kevin, having a pizza all to himself, jumping on his parents' bed, and making a mess. Then, Kevin discovers about "
                    + "two burglars, Harry (Joe Pesci) and Marv (Daniel Stern), about to rob his house on Christmas Eve. Kevin acts quickly by "
                    + "wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1990",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "Johnny English Strikes Again",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjI4MjQ3MjI5MV5BMl5BanBnXkFtZTgwNjczMDE4NTM@._V1_SX300.jpg",
                Description:
                    "A cyber-attack reveals the identity of all active undercover agents in Britain, leaving Johnny English (Rowan Atkinson) "
                    + "as the Secret Service's last hope. Called out of retirement, English dives head first into action with the mission to "
                    + "find the mastermind hacker. As a man with few skills and analogue methods, Johnny English must overcome the challenges "
                    + "of modern technology to make this mission a success.",
                CommingSoon: "1",
                Reminder: "4",
                ReleaseDate: "2018",
                Genre: "Comedy",
                Actors: "7",
            },
            {
                Title: "Johnny English Reborn",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjEzODY2MjU1Nl5BMl5BanBnXkFtZTcwMzc1ODUzNg@@._V1_SX300.jpg",
                Description:
                    "Johnny English, the accidental secret agent who doesn't know fear or danger and the most unlikely intelligence officer "
                    + "in Her Majesty's Secret Service, must stop a group of international assassins before they eliminate a world leader and "
                    + "cause global chaos. In the years since MI7's top spy vanished off the grid, he has been honing his unique skills in a "
                    + "remote region of Asia. But when his agency superiors learn of an attempt against the Chinese Premier's life, they must "
                    + "hunt down the highly unorthodox agent. Now that the world needs him once again, Johnny English is back in action. "
                    + "With one shot at redemption, he must employ the latest in hi-tech gadgets to unravel a web of conspiracy that runs "
                    + "throughout the K.G.B., C.I.A., and even MI7. With a mere few days until a heads of state conference, one man must use "
                    + "every trick in his playbook to protect us all. For Johnny English, disaster may be an option, but failure never is.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2011",
                Genre: "Comedy",
                Actors: "7",
            },
            {
                Title: "Johnny English",
                Poster: "https://m.media-amazon.com/images/M/MV5BNDkxODhlNmItYjhiMC00ZjNmLWE2YmMtOTQ3NmQxM2YzOGFiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
                Description:
                    "When a funeral of a British spy is attacked, all of the remaining spies are killed. Only one spy is left and is now "
                    + "Britain's last hope. Johnny English and his sidekick, Bough have been assigned the case of investigating the theft "
                    + "of the British Crown Jewels. The prime suspect is a mysterious French entrepreneur, known as Pascal Sauvage. English "
                    + "and Bough soon find out the horrifying truth behind the theft and Sauvage, but it's not going to be an easy job to "
                    + "bring him to justice.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2003",
                Genre: "Comedy",
                Actors: "7",
            },
            {
                Title: "Legally Blonde",
                Poster: "https://m.media-amazon.com/images/M/MV5BNTEyNjUwMTkxMV5BMl5BanBnXkFtZTcwNjk0NDk0NA@@._V1_SX300.jpg",
                Description:
                    "Elle Woods (Reese Witherspoon) has it all. She's the President of her sorority, a Hawaiian Tropic girl, "
                    + "Miss June in her campus calendar, and, above all, a natural blonde. She dates the cutest fraternity boy on campus "
                    + "and wants nothing more than to be Mrs. Warner Huntington III. But, there's just one thing stopping Warner (Matthew Davis) "
                    + "from popping the question: Elle is too blonde. Growing up across the street from Aaron Spelling might mean something in "
                    + "Los Angeles, California, but nothing to Warner's East-Coast blue blood family. So, when Warner packs up for Harvard Law "
                    + "and reunites with an old sweetheart from prep school, Elle rallies all her resources and gets into Harvard, determined to "
                    + "win him back. But law school is a far cry from the comforts of her poolside and the mall. Elle must wage the battle of her "
                    + "life, for her guy, for herself and for all the blondes who suffer endless indignities everyday.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2001",
                Genre: "Comedy",
                Actors: "7",
            },
            {
                Title: "Legally Blonde 2: Red, White &amp; Blonde",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTkwNzExMjk0MF5BMl5BanBnXkFtZTcwOTUzNDcyMw@@._V1_SX300.jpg",
                Description:
                    "Sassy postgrad Elle Woods (Reese Witherspoon) is all about animal rights. In fact, she puts her nuptial plans on hold to head "
                    + "to Washington, D.C. to get an anti-animal testing bill passed. Her building's doorman quickly shows her the ways and workings" + "of our nation's capital.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2003",
                Genre: "Comedy",
                Actors: "7",
            },
            {
                Title: "Rat Race",
                Poster: "https://m.media-amazon.com/images/M/MV5BNWEzM2NjMjctM2U3Yi00MGZhLWJlYTYtMWEyYjVjZDEzZjM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                Description:
                    "Donald P. Sinclair has placed six separate gold coins in different slot machines in his casino. The lucky six who find "
                    + "these coins discover an opportunity of a lifetime: the chance to own $2 million, locked up in a locker in New Mexico. "
                    + "These six contestants must now race each other to be the first to the cash. There are no rules in place and everything "
                    + "that could possibly happen, does. Whilst, behind the scenes, Sinclair's associates are placing their bets.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2001",
                Genre: "Comedy",
                Actors: "7",
            },
            {
                Title: "Matilda",
                Poster: "https://m.media-amazon.com/images/M/MV5BNzRhYmZhOWEtZjA4NC00MTU1LWE1ODgtN2Q5Y2QxN2JlNDljXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
                Description:
                    "Matilda Wormwood is an exquisite and intelligent little girl.Unfortunately, Matilda is misunderstood by her family "
                    + "because she is very different from their ways of life.As time passes, Matilda finally starts school that has a "
                    + "kindly teacher, loyal friends and a sadistic principal.As she gets fed up with the constant cruelty, Matilda begins "
                    + "to realize that she has a gift of telekinetic powers.After some days of practice, Matilda suddenly turns the tables "
                    + "to stand up to her parents and outwit the principal.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1996",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "Stuart Little",
                Poster: "https://m.media-amazon.com/images/M/MV5BMDJlZWZiODItMGE3NC00Yzg3LWFhYTYtZTI2YWNlNjExMDE4XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
                Description:
                    "In New York City, you would come across a small house, home to a family known as the Littles. You would happen to think of "
                    + "them as the nicest family you'd ever meet. One day, Fredrick and Eleanor, both parents and Littles, ho to and orphanage "
                    + "to find a brother for their son, George. While at it, they meet Stuart, a small, but charming mouse, who apparently, "
                    + "is human-civilized. They adopt him, and everyone, even George, loves him. But there is one problem with Stuart's "
                    + "life Snowbell, the Little family cat, who wants him. But when trouble starts up almost immediately, Stuart must make it "
                    + "back to his home-before snowbell's friends find out about him.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1999",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "Pitch Perfect",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTcyMTMzNzE5N15BMl5BanBnXkFtZTcwNzg5NjM5Nw@@._V1_SX300.jpg",
                Description:
                    "The Barden Bellas are a collegiate, all-girls a cappella singing group thriving on female pop songs and their "
                    + "perfect looks. After a disastrous failing at last year's finals, they are forced to regroup. Among the new recruits "
                    + "is freshman Beca, an independent, aspiring DJ with no interest in the college life. But after she meets Jesse, from "
                    + "the rival all-male a cappella group, Beca has a new outlook and takes it upon herself to help the Bellas find their new "
                    + "look and sound and get back into the competition.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2012",
                Genre: "Comedy",
                Actors: "7",
            },
            {
                Title: "Pitch Perfect 2",
                Poster: "https://m.media-amazon.com/images/M/MV5BMzk4OTM2NzMzNl5BMl5BanBnXkFtZTgwNTAzNDE0NDE@._V1_SX300.jpg",
                Description:
                    "The Bellas are back, and they are better than ever. After being humiliated in front of none other than the President of "
                    + "the United States of America, the Bellas are taken out of the Aca-Circuit. In order to clear their name and regain "
                    + "their status, the Bellas take on a seemingly impossible task: winning an International competition no American team has "
                    + "ever won. In order to accomplish this monumental task, they need to strengthen the bonds of friendship and sisterhood, "
                    + "and blow away the competition with their amazing aca-magic! With all new friends and old rivals tagging along for "
                    + "the trip, the Bellas can hopefully accomplish their dreams once again.",

                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2015",
                Genre: "Comedy",
                Actors: "7",
            },
            {
                Title: "Cast Away",
                Poster: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg",
                Description:
                    "Memphis-based FedEx operations executive Chuck Noland and grad student Kelly Frears have long dated and lived together, "
                    + "and despite each being the love of the other's life, have not gotten married because of their respective busy schedules, "
                    + "especially Chuck's as he is more often on business trips than he is at home. That marital status changes when on Christmas "
                    + "Day 1995 as Chuck is rushing off to catch yet another FedEx plane for a business trip, he gives Kelly a ring. That flight "
                    + "experiences technical difficulties, and goes down somewhere in the south Pacific. In a life raft, a relatively unharmed "
                    + "Chuck washes up on shore what he will learn is a deserted island, he unaware what has happened to any of his fellow "
                    + "flight mates, or the plane. However several of the packages on board for delivery do wash up on shore with him, "
                    + "those packages which he initially treats with respect. Chuck realizes that his priority is survival - which primarily "
                    + "means food, water, shelter and fire - and rescue. But survival is also in an emotional sense. To fulfill that emotional "
                    + "need, he has an heirloom pocket watch with Kelly's photo that she gave him as a Christmas present, and eventually opening "
                    + "the FedEx packages, a Wilson volleyball on which he paints a face and which he names Wilson. As time progresses, "
                    + "Chuck goes through a range of emotions, but if rescue is ever in the cards, he realizes that he has to find a way to get "
                    + "off the island, which is seemingly impossible in his circumstance due to the strong on shore surf he cannot get beyond "
                    + "without assistance. What Chuck may not fully realize is the longer he is not rescued, the harder it will be for him to "
                    + "return to his old life in its entirety if he ever is rescued. Although the thought of Kelly is what largely keeps "
                    + "him motivated to be rescued, Kelly, who probably believes him to be dead, may have moved on emotionally "
                    + "from him in the intervening time.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2000",
                Genre: "Drama",
                Actors: "7",
            },
            {
                Title: "House of Gucci",
                Poster: "https://m.media-amazon.com/images/M/MV5BYzdlMTMyZWQtZWNmMC00MTJiLWIyMWMtM2ZlZDdlYzZhNTc0XkEyXkFqcGdeQXVyMTMzNDE5NDM2._V1_SX300.jpg",
                Description:
                    "House of Gucci is inspired by the family empire behind the Italian fashion house of Gucci. When Patrizia Reggiani "
                    + "(Lady Gaga), an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel "
                    + "the family legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately...murder.",
                CommingSoon: "1",
                Reminder: "4",
                ReleaseDate: "2021",
                Genre: "Drama",
                Actors: "7",
            },
            {
                Title: "Gladiator",
                Poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
                Description:
                    "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, "
                    + "the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his "
                    + "family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get "
                    + "captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the "
                    + "top so that he will be able to look into the eyes of the man who will feel his revenge.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2000",
                Genre: "Drama",
                Actors: "7",
            },
            {
                Title: "The Karate Kid",
                Poster: "https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                Description:
                    "Daniel and his mother move from New Jersey to California. She has a wonderful new job, but Daniel quickly discovers that a "
                    + "dark haired Italian boy with a Jersey accent doesn't fit into the blond surfer crowd. Daniel manages to talk his way out "
                    + "of some fights, but he is finally cornered by several who belong to the same karate school. As Daniel is passing out from "
                    + "the beating he sees Miyagi, the elderly gardener leaps into the fray and save him by outfighting half a dozen "
                    + "teenagers. Miyagi and Daniel soon find out the real motivator behind the boys' violent attitude in the form of their "
                    + "karate teacher. Miyagi promises to teach Daniel karate and arranges a fight at the all-valley tournament some months off. "
                    + "When his training begins, Daniel doesn't understand what he is being shown. Miyagi seems more interested in having "
                    + "Daniel paint fences and wax cars than teaching him Karate.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1984",
                Genre: "Drama",
                Actors: "7",
            },
            {
                Title: "Joker",
                Poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
                Description:
                    "Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves "
                    + "uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. "
                    + "Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known "
                    + "as...Joker.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2019",
                Genre: "Drama",
                Actors: "7",
            },
            {
                Title: "The Karate Kid",
                Poster: "https://m.media-amazon.com/images/M/MV5BYjQ1NzRhYjYtMWY3My00ODA0LTk5ZDctYjQ4YjE0M2RhMGNiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
                Description:
                    "12-year-old Dre Parker has moved to China, and finds himself like a fish out of water. He befriends a fellow classmate, "
                    + "Mei Ying, only to make a rival, Cheng, who starts to bully and attack Dre. Soon, Mr Han, the maintenance man of "
                    + "Dre's apartment, fends off Cheng and his friends when they are attacking Dre and signs Dre up to fight in the "
                    + "Kung Fu tournament in return for the bullies laying off of Dre. Dre realizes Mr. Han is much more than a maintenance "
                    + "man, when he's revealed as a master of Kung Fu and Dre soon learns that Kung Fu is about self defense and peace, instead "
                    + "of violence and bloodshed.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2010",
                Genre: "Drama",
                Actors: "7",
            },
            {
                Title: "Bohemian Rhapsody",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SX300.jpg",
                Description:
                    "Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer "
                    + "Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers "
                    + "on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. "
                    + "They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just "
                    + "in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest "
                    + "performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and "
                    + "music lovers to this day.",
                CommingSoon: "1",
                Reminder: "4",
                ReleaseDate: "2018",
                Genre: "Drama",
                Actors: "7",
            },
            {
                Title: "Forrest Gump",
                Poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                Description:
                    "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only "
                    + "friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for "
                    + "service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, "
                    + "inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people "
                    + "and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood "
                    + "sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1994",
                Genre: "Drama",
                Actors: "7",
            },
            {
                Title: "Black Panther",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
                Description:
                    "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced "
                    + "African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the "
                    + "throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther "
                    + "must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda "
                    + "from being dragged into a world war.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2018",
                Genre: "Adventure",
                Actors: "7",
            },
            {
                Title: "TRON: Legacy",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_SX300.jpg",
                Description:
                    "Sam Flynn, the tech-savvy 27-year-old son of Kevin Flynn, looks into his father's disappearance and finds himself pulled "
                    + "into the same world of fierce programs and gladiatorial games where his father has been living for 20 years. Along with "
                    + "Kevin's loyal confidant Quorra, father and son embark on a life-and-death journey across a visually-stunning cyber "
                    + "universe that has become far more advanced and exceedingly dangerous. Meanwhile, the malevolent program CLU, who dominates "
                    + "the digital world, plans to invade the real world and will stop at nothing to prevent their escape.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2010",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "Jurassic Park",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
                Description:
                    "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond "
                    + "has invited four individuals, along with his two grandchildren, to join him at Jurassic Park. But will everything go "
                    + "according to plan? A park employee attempts to steal dinosaur embryos, critical security systems are shut down and it now "
                    + "becomes a race for survival with dinosaurs roaming freely over the island.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1993",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "The Terminator",
                Poster: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                Description:
                    "Sent back from a dystopian 2029--where the cold machines have conquered the entire world--to 1984 Los Angeles, the "
                    + "indestructible cyborg-assassin known as the 'Terminator' commences his deadly mission to kill humankind's most important "
                    + "woman: the unsuspecting Sarah Connor. However, from the same war-torn post-apocalyptic future comes a battle-scarred "
                    + "defender--Kyle Reese, a brave soldier of the human Resistance Army--bent on stopping the cybernetic killer from eliminating "
                    + "the world's last hope. But, the Terminator has no feelings, he doesn't sleep, and above all, he won't stop until he carries "
                    + "out his grim task. Does our future lie in our past?",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1984",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "E.T. the Extra-Terrestrial",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                Description:
                    "After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. "
                    + "Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, "
                    + "to his brother and his little sister, Gertie, and the children decide to keep its existence a secret. Soon, however, "
                    + "E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1982",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "WALL·E",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
                Description:
                    "In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash "
                    + "from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left "
                    + "to clean up the mess. Mesmerized with trinkets of Earth's history and show tunes, WALL-E is alone on Earth except for a "
                    + "sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that "
                    + "life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living "
                    + "plant he found amongst the rubble. Consistent with her 'directive', EVE takes the plant and automatically enters a "
                    + "deactivated state except for a blinking green beacon. WALL-E, doesn't understand what has happened to his new friend, "
                    + "but, true to his love, he protects her from wind, rain, and lightning, even as she is unresponsive. One day a massive ship "
                    + "comes to reclaim EVE, but WALL-E, out of love or loneliness, hitches a ride on the outside of the ship to rescue EVE. "
                    + "The ship arrives back at a large space cruise ship, which is carrying all of the humans who evacuated Earth 700 years "
                    + "earlier. The people of Earth ride around this space resort on hovering chairs which give them a constant feed of TV and "
                    + "video chatting. They drink all of their meals through a straw out of laziness and/or bone loss, and are all so fat that "
                    + "they can barely move. When the auto-pilot computer, acting on hastily-given instructions sent many centuries before, tries "
                    + "to prevent the people of Earth from returning by stealing the plant, WALL-E, EVE, the portly captain, and a band of "
                    + "broken robots stage a mutiny.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2008",
                Genre: "Family",
                Actors: "7",
            },
            {
                Title: "The Maze Runner",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",
                Description:
                    "Awakening in an elevator, remembering nothing of his past, Thomas emerges into a world of about thirty teenage boys, all "
                    + "without past memories, who have learned to survive under their own set of rules in a completely enclosed environment, "
                    + "subsisting on their own agriculture and supplies. With a new boy arriving every thirty days, the group has been in "
                    + "The Glade' for three years, trying to find a way to escape through the Maze that surrounds their living space "
                    + "(patrolled by cyborg monsters named 'Grievers'). They have begun to give up hope when a comatose girl arrives with a "
                    + "strange note, and their world begins to change with the boys dividing into two factions: those willing to risk their lives "
                    + "to escape and those wanting to hang onto what they've got and survive.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2014",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "Divergent",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTYxMzYwODE4OV5BMl5BanBnXkFtZTgwNDE5MzE2MDE@._V1_SX300.jpg",
                Description:
                    "Set in a futuristic dystopia where society is divided into five factions that each represent a different virtue, teenagers "
                    + "have to decide if they want to stay in their faction or switch to another - for the rest of their lives. Tris Prior makes "
                    + "a choice that surprises everyone. Then Tris and her fellow faction-members have to live through a highly competitive "
                    + "initiation process to live out the choice they have made. They must undergo extreme physical and intense psychological tests, "
                    + "that transform them all. But Tris has a secret that she is Divergent, which means she doesn't fit into any one group. If "
                    + "anyone knew, it would mean a certain death. As she discovers a growing conflict that threatens to unravel her seemingly "
                    + "peaceful society, this secret might help her save the people she loves... or it might destroy her.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2014",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "The Divergent Series: Insurgent",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTgxOTYxMTg3OF5BMl5BanBnXkFtZTgwMDgyMzA2NDE@._V1_SX300.jpg",
                Description:
                    "As she searches for allies and answers in the wake of the uprising, Tris and Four are on the run. Being hunted by Jeanine "
                    + "Matthews, the leader of the Erudite faction, Tris and Four will race against time as they try to figure out what Abnegation "
                    + "sacrificed their lives to protect, and why the Erudite leaders will do anything to stop them. Haunted by her past choices but " + "desperate to protect the ones she loves, Tris faces one impossible challenge after another as she unlocks the truth about the "
                    + "past and ultimately the future of her world.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2015",
                Genre: "Sci-fi",
                Actors: "7",
            },
            {
                Title: "Death on the Nile",
                Poster: "https://m.media-amazon.com/images/M/MV5BNjI4ZTQ1OTYtNTI0Yi00M2EyLThiNjMtMzk1MmZlOWMyMDQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
                Description:
                    "Belgian sleuth Hercule Poirot's vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when "
                    + "a picture-perfect couple's idyllic honeymoon is tragically cut short. Set against an epic landscape of sweeping Egyptian "
                    + "desert vistas and the majestic Giza pyramids, this tale of unbridled passion and incapacitating jealousy features a "
                    + "cosmopolitan group of impeccably dressed travelers, and enough wicked twists and turns to leave audiences guessing until "
                    + "the final, shocking denouement.",
                CommingSoon: "1",
                Reminder: "4",
                ReleaseDate: "2022",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "The Italian Job",
                Poster: "https://m.media-amazon.com/images/M/MV5BNDYyNzYxNjYtNmYzMC00MTE0LWIwMmYtNTAyZDBjYTIxMTRhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
                Description:
                    "Led by John Bridger (Donald Sutherland) and Charlie Croker (Mark Wahlberg) a team is assembled for one last heist to steal $35 "
                    + "million in gold bars from a heavily guarded safe in Venice, Italy. After successfully pulling off the heist, a team member, "
                    + "Steve (Edward Norton), driven by greed and jealousy, arranges to take the gold for himself and eliminate the remaining members "
                    + "of the group. Thinking the team dead, he returns to Los Angeles with the gold. Charlie and the survivors of this betrayal "
                    + "follow Steve to L.A. to exact revenge against the traitor. Charlie enlists the help of John Bridger's daughter, Stella "
                    + "(Charlize Theron) - a professional safe cracker - to get revenge. With Stella and the hacking skills of Lyle (Seth Green), "
                    + "the explosives skills of 'Left Ear' (Yasiin Bey), and the driving skills of 'Handsome' Rob (Jason Statham) this new team "
                    + "plans and executes a daring heist that weaves through the freeways and subways of L.A.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2003",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Catch Me If You Can",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
                Description:
                    "A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks "
                    + "as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not "
                    + "only eludes capture, he revels in the pursuit.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2002",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "The Fast and the Furious: Tokyo Drift",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
                Description:
                    "An American teenager named Sean Boswell is a loner in school, however he challenges his rival for an illegal street racing, "
                    + "and he totals his car in the end of the race. To avoid time in prison he is sent to Tokyo to live with his father who is "
                    + "in the military. As soon as he arrives he discovers a new, fun but dangerous way of street racing in the underworld of the "
                    + "streets of Tokyo, Japan.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2006",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Skyfall",
                Poster: "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg",
                Description:
                    "When James Bond's (Daniel Craig's) latest assignment goes gravely wrong and Agents around the world are exposed, MI6 is "
                    + "attacked, forcing (M Dame Judi Dench) to relocate the agency. These events cause her authority and position to be challenged "
                    + "by Gareth Mallory (Ralph Fiennes), the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from "
                    + "both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows, aided only by field agent, Miss "
                    + "Eve Moneypenny (Naomie Harris), following a trail to the mysterious Tiago Rodriguez, a.k.a. Raoul Silva (Javier Bardem), "
                    + "whose lethal and hidden motives have yet to reveal themselves.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2012",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Spectre",
                Poster: "https://m.media-amazon.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                Description:
                    "A cryptic message from the past sends James Bond (Daniel Craig) on a rogue mission to Mexico City and eventually Rome, where "
                    + "he meets Lucia Sciarra (Monica Belluci), the beautiful and forbidden widow of an infamous criminal. Bond infiltrates a secret "
                    + "meeting and uncovers the existence of the sinister organisation known as S.P.E.C.T.R.E. Meanwhile, back in London, "
                    + "Max Denbigh (Andrew Scott), the new head of the Centre of National Security, questions Bond's actions and challenges the "
                    + "relevance of MI6, led by M (Ralph Fiennes). Bond covertly enlists Miss Eve Moneypenny (Naomie Harris) and Q (Ben Whishaw) to help him seek out Dr. Madeleine Swann (Léa Seydoux), the daughter of his old nemesis Mr. White (Jesper Christensen), who may "
                    + "hold the clue to untangling the web of S.P.E.C.T.R.E. As the daughter of the assassin, she understands Bond in a way most "
                    + "others cannot. As Bond ventures towards the heart of S.P.E.C.T.R.E., he learns a chilling connection between him and the "
                    + "enemy he seeks.",

                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2015",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Casino Royale",
                Poster: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
                Description:
                    "James Bond (Daniel Craig) goes on his first mission as a 00. Le Chiffre (Mads Mikkelsen) is a banker to the world's terrorists. "
                    + "He is participating in a poker game at Montenegro, where he must win back his money, in order to stay safe amongst the "
                    + "terrorist market. The boss of MI6, known simply as 'M' (Dame Judi Dench) sends Bond, along with Vesper Lynd Eva Green) to "
                    + "attend this game and prevent Le Chiffre from winning. Bond, using help from Felix Leiter (Jeffrey Wright), Rene Mathis "
                    + "(Giancarlo Giannini), and having Vesper pose as his partner, enters the most important poker game in his already dangerous "
                    + "career. But if Bond defeats Le Chiffre, will he and Vesper Lynd remain safe?",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2006",
                Genre: "Crime",
                Actors: "7",
            },
            {
                Title: "Alice in Wonderland",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg",
                Description:
                    "Alice, an unpretentious and individual 19-year-old, is betrothed to a dunce of an English nobleman. At her engagement party, " + "she escapes the crowd to consider whether to go through with the marriage and falls down a hole in the garden after spotting "
                    + "an unusual rabbit. Arriving in a strange and surreal place called 'Underland,' she finds herself in a world that resembles "
                    + "the nightmares she had as a child, filled with talking animals, villainous queens and knights, and frumious bandersnatches. "
                    + "Alice realizes that she is there for a reason--to conquer the horrific Jabberwocky and restore the rightful "
                    + "queen to her throne.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2010",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "Peter Pan",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_SX300.jpg",
                Description:
                    "In stifling Edwardian London, Wendy Darling mesmerizes her brothers every night with bedtime tales of swordplay, "
                    + "swashbuckling, and the fearsome Captain Hook. But the children become the heroes of an even greater story, when Peter Pan "
                    + "flies into their nursery one night and leads them over moonlit rooftops through a galaxy of stars and to the lush jungles of "
                    + "Neverland. Wendy and her brothers join Peter and the Lost Boys in an exhilarating life--free of grown-up rules--while also "
                    + "facing the inevitable showdown with Hook and his bloodthirsty pirates.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2003",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_SX300.jpg",
                Description:
                    "Four children from the same family have to leave their town because of the bombings of WWII. A woman and a professor take the "
                    + "children to their house. While playing a game of hide-and-seek, the youngest member of the family, Lucy, finds a wardrobe to "
                    + "hide in. She travels back and back into the wardrobe and finds a place named Narnia. After going in twice, the four children "
                    + "go in together for the last time. They battle wolves, meet talking animals, encounter an evil white witch and meet a "
                    + "magnificent lion named Aslan. Will this be the end of their journey to Narnia or will they stay?",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2005",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "King Kong Lives",
                Poster: "https://m.media-amazon.com/images/M/MV5BNzAxNTQyMzYtMTg5Zi00OTA1LWEwYjEtNjg3ZmJhOWZiMzk3XkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg",
                Description:
                    "A giant ape King Kong, which was shot and fell off the World Trade Center tower, appears to be alive, but is in coma for 10 "
                    + "years and desperately needs a blood transfusion in order to have an artificial heart implanted. Suddenly, in the rainforest, "
                    + "another gigantic ape is found - this time a female. She is brought to the USA, and the heart is successfully implanted. But "
                    + "then King Kong, having sensed the female ape, breaks loose.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "1986",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "Jumanji: The Next Level",
                Poster: "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
                Description:
                    "The gang is back but the game has changed. As they return to Jumanji to rescue one of their own, they discover that nothing is "
                    + "as they expect. The players will have to brave parts unknown and unexplored, from the arid deserts to the snowy mountains, in "
                    + "order to escape the world's most dangerous game.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2019",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "Prince of Persia: The Sands of Time",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTMwNDg0NzcyMV5BMl5BanBnXkFtZTcwNjg4MjQyMw@@._V1_SX300.jpg",
                Description:
                    "Set in the mystical lands of Persia, a rogue prince and a mysterious princess race against dark forces to safeguard an ancient " + "dagger capable of releasing the Sands of Time -- a gift from the gods that can reverse time and allow its possessor to rule "
                    + "the world.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2010",
                Genre: "Fantasy",
                Actors: "7",
            },
            {
                Title: "Spider-Man: Homecoming",
                Poster: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
                Description:
                    "A young Peter Parker/Spider-Man begins to navigate his newfound identity as the web-slinging super hero Spider-Man. "
                    + "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye "
                    + "of his new mentor Tony Stark. Peter tries to fall back into his normal daily routine - distracted by thoughts of proving "
                    + "himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, "
                    + "everything that Peter holds most important will be threatened.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2017",
                Genre: "Adventure",
                Actors: "7",
            },
            {
                Title: "Indiana Jones and the Kingdom of the Crystal Skull",
                Poster: "https://m.media-amazon.com/images/M/MV5BZDIzNzM5MDUtZmI5MC00NGQ5LWFlNzEtYzE3ODIxNDI3ZmNhXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_SX300.jpg",
                Description:
                    "During the Cold War, Soviet Agents watch Professor Henry 'Indiana' Jones, Jr. (Harrison Ford), when a young man brings him a "
                    + "coded message from an aged, demented colleague, Professor Harold Oxley (Sir John Hurt). Led by the brilliant Irina Spalko "
                    + "(Cate Blanchett), the Soviets tail Jones and the young man, Mutt Williams (Shia LeBeouf), to Peru. With Oxley's code, they "
                    + "find a legendary skull made of a single piece of quartz. If Jones can deliver the skull to its rightful place, all may be "
                    + "well. But if Irina takes it to its origin, she'll gain powers that could endanger the West. Aging professor and young buck "
                    + "join forces with a woman from Jones' past, Marion Ravenwood (Karen Allen), to face the dangers of the jungle, "
                    + "Russia, and the supernatural.",
                CommingSoon: "0",
                Reminder: "4",
                ReleaseDate: "2008",
                Genre: "Adventure",
                Actors: "7",
            },
        ],
    },

    computed: {
        filteredMoviesTitle() {
            return this.filteredMoviesFunction();
        },

        filteredMoviesCommingSoon() {
            let filteredMoviesCommingSoon = this.movies.filter((movie) => {
                return movie.CommingSoon.toLowerCase().includes("1".toLowerCase());
            })
            let orderedMovies = filteredMoviesCommingSoon.sort((a, b) => {
                return b.ReleaseDate - a.ReleaseDate;
            })
            return orderedMovies;
        },

        filteredMoviesFantasy() {
            let filteredMoviesFantasy = this.movies.filter((movie) => {
                return movie.Genre.toLowerCase().includes("Fantasy".toLowerCase());
            })
            let orderedMovies = filteredMoviesFantasy.sort((a, b) => {
                return b.ReleaseDate - a.ReleaseDate;
            })
            return orderedMovies;
        },

        filteredMoviesScifi() {
            let filteredMoviesScifi = this.movies.filter((movie) => {
                return movie.Genre.toLowerCase().includes("Sci-fi".toLowerCase());
            })
            let orderedMovies = filteredMoviesScifi.sort((a, b) => {
                return a.ReleaseDate - b.ReleaseDate;
            })
            return orderedMovies;
        },

        filteredMoviesCrime() {
            let filteredMoviesCrime = this.movies.filter((movie) => {
                return movie.Genre.toLowerCase().includes("Crime".toLowerCase());
            })
            let orderedMovies = filteredMoviesCrime.sort((a, b) => {
                return b.ReleaseDate - a.ReleaseDate;
            })
            return orderedMovies;
        },

        filteredMoviesFamily() {
            let filteredMoviesFamily = this.movies.filter((movie) => {
                return movie.Genre.toLowerCase().includes("Family".toLowerCase());
            })
            let orderedMovies = filteredMoviesFamily.sort((a, b) => {
                return b.ReleaseDate - a.ReleaseDate;
            })
            return orderedMovies;
        },

        filteredMoviesDrama() {
            let filteredMoviesDrama = this.movies.filter((movie) => {
                return movie.Genre.toLowerCase().includes("Drama".toLowerCase());
            })
            let orderedMovies = filteredMoviesDrama.sort((a, b) => {
                return b.ReleaseDate - a.ReleaseDate;
            })
            return orderedMovies;
        },

        filteredMoviesComedy() {
            let filteredMoviesComedy = this.movies.filter((movie) => {
                return movie.Genre.toLowerCase().includes("Comedy".toLowerCase());
            })
            let orderedMovies = filteredMoviesComedy.sort((a, b) => {
                return b.ReleaseDate - a.ReleaseDate;
            })
            return orderedMovies;
        },

        filteredMoviesAdventure() {
            let filteredMoviesAdventure = this.movies.filter((movie) => {
                return movie.Genre.toLowerCase().includes("Adventure".toLowerCase());
            })
            let orderedMovies = filteredMoviesAdventure.sort((a, b) => {
                return b.ReleaseDate - a.ReleaseDate;
            })
            return orderedMovies;
        }


    },

    // Functions of an object
    methods: {

        theSearch() {
            this.searched = !this.searched;
        },

        addToWatchList() {
            if (!localStorage.getItem("vrl-app-key")) {

                let watchList = []
                watchList.push(this.movies[0])

                localStorage.setItem("vrl-app-key", JSON.stringify(watchList))
                console.log('not working')

            } else {

                let watchList = JSON.parse(localStorage.getItem("vrl-app-key"))
                console.log(watchList)

                watchList.push(this.movies[0])
                console.log(watchList)

                // watchList = JSON.stringify(watchList)
                localStorage.setItem("vrl-app-key", JSON.stringify(watchList))
                console.log(localStorage.getItem('vrl-app-key'))
            }
        },


        filteredMoviesFunction() {
            alert("Hier!");
            let filteredMoviesTitle = this.movies.filter((movie) => {
                return movie.Title.toLowerCase().includes(this.searchInput.searchText.toLowerCase());
            })
            let filteredMovies = filteredMoviesTitle;

            let filteredMoviesGenre = this.movies.filter((movie) => {
                return movie.Genre.toLowerCase().includes(this.searchInput.searchText.toLowerCase());
            })

            let filteredMoviesReleaseDate = this.movies.filter((movie) => {
                return movie.ReleaseDate.toLowerCase().includes(this.searchInput.searchText.toLowerCase());
            })

            let filteredMoviesCommingSoon = this.movies.filter((movie) => {
                return movie.CommingSoon.toLowerCase().includes(this.searchInput.searchText.toLowerCase());
            })


            for (let i = 0; i < filteredMovies.length; i++) {
                for (let j = 0; j < filteredMoviesReleaseDate.length; j++) {
                    if (filteredMovies[i] !== filteredMoviesReleaseDate[j]) {
                        filteredMovies.push(filteredMoviesReleaseDate[j]);
                    }
                }
            }

            for (let i = 0; i < filteredMovies.length; i++) {
                for (let j = 0; j < filteredMoviesCommingSoon.length; j++) {
                    if (filteredMovies[i] !== filteredMoviesCommingSoon[j]) {
                        filteredMovies.push(filteredMoviesCommingSoon[j]);
                    }
                }
            }

            for (let i = 0; i < filteredMovies.length; i++) {
                for (let j = 0; j < filteredMoviesGenre.length; j++) {
                    if (filteredMovies[i] !== filteredMoviesGenre[j]) {
                        filteredMovies.push(filteredMoviesGenre[j]);
                    }
                }
            }


            let orderedMovies = filteredMovies.sort((a, b) => {
                return b.ReleaseDate - a.ReleaseDate;
            })

            return orderedMovies;
        }
    }
})
