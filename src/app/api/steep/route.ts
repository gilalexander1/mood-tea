export const dynamic = 'force-dynamic';

// --- Types

type Tea = {
  id: string;
  name: string;
  style: "herbal" | "green" | "black" | "oolong" | "white" | "puerh" | "rooibos" | "mate" | "blend" | "tisane" | "flowering";
  caffeine: "none" | "low" | "medium" | "high";
  flavor: string[];
  moodTags: string[];
  description: string;
  tempC: number;
  timeMin: number;
  origin?: string;
  season?: string;
};

const TEAS: Tea[] = [
  // ———— Core set from the original page ————
  { id: "chamomile", name: "Chamomile", style: "herbal", caffeine: "none", flavor: ["floral","apple","soft"], moodTags: ["anxious","tense","sleepy","overwhelmed","grief"], description: "Soft florals that remind your nervous system it can land.", tempC: 95, timeMin: 5 },
  { id: "peppermint", name: "Peppermint", style: "herbal", caffeine: "none", flavor: ["mint","cool","fresh"], moodTags: ["angry","bloated","foggy","sick"], description: "A cool reset button for body and brain.", tempC: 95, timeMin: 5 },
  { id: "lemon-ginger", name: "Lemon Ginger", style: "herbal", caffeine: "none", flavor: ["zesty","spicy","bright"], moodTags: ["sick","sluggish","hungover","sad"], description: "Sunshine with a kick—hello circulation, goodbye meh.", tempC: 95, timeMin: 6 },
  { id: "rooibos-vanilla", name: "Rooibos Vanilla", style: "rooibos", caffeine: "none", flavor: ["vanilla","honey","warm"], moodTags: ["cozy","sad","reflective","night"], description: "Caffeine-free hug—amber, sweet, endlessly sippable.", tempC: 95, timeMin: 6 },
  { id: "lavender", name: "Lavender Herbal", style: "herbal", caffeine: "none", flavor: ["floral","calming"], moodTags: ["anxious","restless","lonely"], description: "Exhale in cup form. Steam + breathe.", tempC: 95, timeMin: 5 },

  { id: "sencha", name: "Sencha", style: "green", caffeine: "medium", flavor: ["grassy","umami","clean"], moodTags: ["focused","studious","creative","inspired"], description: "Green clarity—bright focus without the jitters.", tempC: 75, timeMin: 2 },
  { id: "gyokuro", name: "Gyokuro", style: "green", caffeine: "high", flavor: ["umami","deep","sweet"], moodTags: ["deep-work","creative","present"], description: "Lux oceanic umami—tiny sips, big presence.", tempC: 60, timeMin: 2 },
  { id: "matcha", name: "Matcha", style: "green", caffeine: "high", flavor: ["umami","cream","fresh"], moodTags: ["tired","creative","gym","social"], description: "Whisked emerald lightning, silky and serene.", tempC: 75, timeMin: 0 },
  { id: "genmaicha", name: "Genmaicha", style: "green", caffeine: "low", flavor: ["toasty","rice","nutty"], moodTags: ["nostalgic","grounded","anxious"], description: "Toasted rice warmth—like a sweater you trust.", tempC: 80, timeMin: 2 },
  { id: "jasmine", name: "Jasmine Green", style: "green", caffeine: "medium", flavor: ["floral","perfumed","gentle"], moodTags: ["romantic","melancholy","soft"], description: "Moonlit garden energy—petals on the page.", tempC: 80, timeMin: 2 },

  { id: "assam", name: "Assam", style: "black", caffeine: "high", flavor: ["malty","bold"], moodTags: ["exhausted","busy","winter"], description: "A steel-toed sunrise—sturdy, malty, unstoppable.", tempC: 95, timeMin: 4 },
  { id: "earl-grey", name: "Earl Grey", style: "black", caffeine: "medium", flavor: ["bergamot","citrus","refined"], moodTags: ["sad","dreary","writerly"], description: "Citrus-kissed sophistication; milk and mood optional.", tempC: 95, timeMin: 3 },
  { id: "darjeeling", name: "Darjeeling", style: "black", caffeine: "medium", flavor: ["muscatel","floral","light"], moodTags: ["thoughtful","social","afternoon"], description: "Champagne of teas—lilting and conversational.", tempC: 95, timeMin: 3 },
  { id: "chai", name: "Masala Chai", style: "black", caffeine: "medium", flavor: ["spiced","sweet","rich"], moodTags: ["cozy","festive","homesick"], description: "Cardamom cinema. Milk it, sweeten it, sigh.", tempC: 95, timeMin: 5 },
  { id: "lapsang", name: "Lapsang Souchong", style: "black", caffeine: "medium", flavor: ["smoky","pine","campfire"], moodTags: ["broody","stormy","reflective"], description: "Campfire in a cup—storms welcome.", tempC: 95, timeMin: 3 },

  { id: "tieguanyin", name: "Tieguanyin (Oolong)", style: "oolong", caffeine: "medium", flavor: ["orchid","butter","mineral"], moodTags: ["restless","curious","balanced"], description: "Orchid velvet that keeps unfolding—sip by sip.", tempC: 90, timeMin: 3 },
  { id: "da-hong-pao", name: "Da Hong Pao (Rock Oolong)", style: "oolong", caffeine: "medium", flavor: ["roasted","mineral","plum"], moodTags: ["grounded","stormy","evening"], description: "Cliff minerality, ancient and steadying.", tempC: 95, timeMin: 3 },

  { id: "silver-needle", name: "Silver Needle", style: "white", caffeine: "low", flavor: ["delicate","nectar","silky"], moodTags: ["gentle","romantic","sunday"], description: "Whisper-soft nectar for tender hours.", tempC: 80, timeMin: 3 },
  { id: "white-peony", name: "White Peony", style: "white", caffeine: "low", flavor: ["honey","floral","hay"], moodTags: ["soft","healing","daydream"], description: "Pastel fields + long exhale.", tempC: 85, timeMin: 3 },

  { id: "puerh", name: "Pu-erh (Shou)", style: "puerh", caffeine: "medium", flavor: ["earthy","dark","mushroom"], moodTags: ["hungover","heavy","after-dinner"], description: "Earth basement comfort—resets the stomach and the soul.", tempC: 95, timeMin: 4 },
  { id: "oolong-milk", name: "Milk Oolong", style: "oolong", caffeine: "medium", flavor: ["creamy","orchid","butter"], moodTags: ["treat","self-care","romantic"], description: "Natural cream note; dessert without dessert.", tempC: 90, timeMin: 3 },

  { id: "yerba-mate", name: "Yerba Maté", style: "mate", caffeine: "high", flavor: ["grassy","herbal","sturdy"], moodTags: ["tired","hiking","focus"], description: "South American rocket fuel with heart.", tempC: 80, timeMin: 3 },
  { id: "mint-green", name: "Moroccan Mint (Green)", style: "blend", caffeine: "medium", flavor: ["mint","sweet","green"], moodTags: ["social","refresh","summer"], description: "Breezy hospitality—pour high, pour often.", tempC: 85, timeMin: 2 },
  { id: "rose-black", name: "Rose Black", style: "blend", caffeine: "medium", flavor: ["rose","dark","romance"], moodTags: ["romantic","soft","evening"], description: "Petals meet bass notes—waltz in a teacup.", tempC: 95, timeMin: 3 },
  { id: "apple-cinnamon", name: "Apple Cinnamon Rooibos", style: "rooibos", caffeine: "none", flavor: ["apple","spice","pie"], moodTags: ["fall","cozy","nostalgic"], description: "Warm pie energy, zero caffeine drama.", tempC: 95, timeMin: 6 },
  { id: "lemon-balm", name: "Lemon Balm", style: "herbal", caffeine: "none", flavor: ["lemon","herb","soothing"], moodTags: ["anxious","tension","sleep"], description: "Nervous system’s favorite lullaby herb.", tempC: 95, timeMin: 5 },

  // ———— New additions to increase variety ————
  { id: "hojicha", name: "Hojicha", style: "green", caffeine: "low", flavor: ["roasted","nutty","comfort"], moodTags: ["evening","grounded","cozy"], description: "Roasted calm—toasty without the buzz.", tempC: 85, timeMin: 2 },
  { id: "buckwheat", name: "Soba-cha (Buckwheat)", style: "herbal", caffeine: "none", flavor: ["toasty","cereal","sweet"], moodTags: ["snack-time","nostalgic","study"], description: "Golden cereal warmth—comfort-in-a-cup.", tempC: 95, timeMin: 4 },
  { id: "lemongrass", name: "Lemongrass", style: "herbal", caffeine: "none", flavor: ["lemon","fresh","green"], moodTags: ["refresh","summer","sick"], description: "Crisp meadow brightness, clean and zippy.", tempC: 95, timeMin: 5 },
  { id: "hibiscus", name: "Hibiscus", style: "herbal", caffeine: "none", flavor: ["tart","berry","zing"], moodTags: ["heat","thirsty","afternoon"], description: "Ruby tang that wakes the room.", tempC: 95, timeMin: 6 },
  { id: "osmanthus-oolong", name: "Osmanthus Oolong", style: "oolong", caffeine: "medium", flavor: ["apricot","floral","silk"], moodTags: ["romantic","spring","creative"], description: "Apricot blossoms drifting on oolong silk.", tempC: 90, timeMin: 3 },
  { id: "ceylon", name: "Ceylon", style: "black", caffeine: "medium", flavor: ["brisk","citrus","clean"], moodTags: ["morning","focus","clear"], description: "Bright breakfast clarity—lemon wedge friendly.", tempC: 95, timeMin: 3 },
  { id: "keemun", name: "Keemun", style: "black", caffeine: "medium", flavor: ["cocoa","plum","smoke"], moodTags: ["writerly","evening","reflective"], description: "Subtle cocoa and plum with a hush of smoke.", tempC: 95, timeMin: 3 },
  { id: "irish-breakfast", name: "Irish Breakfast", style: "black", caffeine: "high", flavor: ["robust","malty","strong"], moodTags: ["exhausted","rainy","monday"], description: "Get-up-and-go with no small talk.", tempC: 95, timeMin: 4 },
  { id: "gunpowder", name: "Gunpowder Green", style: "green", caffeine: "medium", flavor: ["toasty","bold","smoky"], moodTags: ["focus","reset","travel"], description: "Rolled sparks for steady energy.", tempC: 80, timeMin: 2 },
  { id: "kukicha", name: "Kukicha (Twig)", style: "green", caffeine: "low", flavor: ["sweet","woody","gentle"], moodTags: ["calm","study","evening"], description: "Twig tea sweetness—low-key and kind.", tempC: 80, timeMin: 2 },
  { id: "chrysanthemum", name: "Chrysanthemum", style: "herbal", caffeine: "none", flavor: ["floral","honey","cooling"], moodTags: ["heat","headache","calm"], description: "Cooling florals that soften the day.", tempC: 95, timeMin: 5 },
  { id: "butterfly-pea", name: "Butterfly Pea Flower", style: "herbal", caffeine: "none", flavor: ["earthy","cool","color"], moodTags: ["party","creative","aesthetic"], description: "Electric blue steep—add lemon, watch it turn purple.", tempC: 95, timeMin: 5 },
  { id: "sage", name: "Sage Herbal", style: "herbal", caffeine: "none", flavor: ["savory","herbal","clarity"], moodTags: ["foggy","grounded","ritual"], description: "Forest-clearing clarity without the smoke.", tempC: 95, timeMin: 5 },

  // ———— Expanded World Tea Collection ————
  // Chinese Classics
  { id: "longjing", name: "Longjing (Dragonwell)", style: "green", caffeine: "medium", flavor: ["delicate","sweet","nutty"], moodTags: ["peaceful","morning","clarity","zen"], description: "West Lake poetry in a cup—flat leaves, pure intention.", tempC: 80, timeMin: 2, origin: "Hangzhou, China" },
  { id: "biluochun", name: "Bi Luo Chun", style: "green", caffeine: "medium", flavor: ["fruity","floral","spiral"], moodTags: ["spring","delicate","awakening"], description: "Green spiral springs—fruity clouds of tender leaves.", tempC: 75, timeMin: 1.5, origin: "Jiangsu, China", season: "early spring" },
  { id: "white-hair-silver-needle", name: "Bai Hao Yin Zhen", style: "white", caffeine: "low", flavor: ["subtle","melon","silk"], moodTags: ["luxury","meditation","special-occasion"], description: "Imperial whispers—silver buds like moonbeams.", tempC: 80, timeMin: 4, origin: "Fujian, China" },
  { id: "shou-mei", name: "Shou Mei", style: "white", caffeine: "low", flavor: ["fruity","aged","complex"], moodTags: ["contemplative","patient","deep"], description: "Aged white wisdom—complexity earned through time.", tempC: 85, timeMin: 5, origin: "Fujian, China" },
  { id: "raw-puerh", name: "Sheng Pu-erh (Raw)", style: "puerh", caffeine: "high", flavor: ["wild","mineral","alive"], moodTags: ["adventurous","raw","primal","intense"], description: "Yunnan wildness—tea that bites back and teaches.", tempC: 95, timeMin: 3, origin: "Yunnan, China" },
  { id: "aged-puerh", name: "Aged Pu-erh (20+ years)", style: "puerh", caffeine: "medium", flavor: ["museum","leather","time"], moodTags: ["nostalgic","wise","ceremony","investment"], description: "Decades in a sip—tea as time travel machine.", tempC: 95, timeMin: 5, origin: "Yunnan, China" },
  { id: "dong-ding", name: "Dong Ding Oolong", style: "oolong", caffeine: "medium", flavor: ["roasted","honey","mountain"], moodTags: ["balanced","mountain","meditative"], description: "Frozen Peak mastery—roasted honey from Taiwan heights.", tempC: 95, timeMin: 4, origin: "Taiwan" },
  { id: "high-mountain", name: "Gao Shan (High Mountain)", style: "oolong", caffeine: "medium", flavor: ["floral","altitude","crisp"], moodTags: ["elevated","pure","mountain-air"], description: "Taiwanese peaks captured—altitude in every sip.", tempC: 90, timeMin: 3, origin: "Taiwan mountains" },

  // Japanese Treasures
  { id: "kabusecha", name: "Kabusecha", style: "green", caffeine: "medium", flavor: ["shaded","sweet","umami"], moodTags: ["refined","Japanese","tea-ceremony"], description: "Shaded elegance—between sencha and gyokuro.", tempC: 70, timeMin: 1.5, origin: "Japan" },
  { id: "bancha", name: "Bancha", style: "green", caffeine: "low", flavor: ["everyday","reliable","honest"], moodTags: ["daily","comfort","humble","reliable"], description: "Daily companion—honest, humble, always there.", tempC: 85, timeMin: 2, origin: "Japan" },
  { id: "gyokuro-premium", name: "Premium Gyokuro", style: "green", caffeine: "high", flavor: ["ocean","silk","luxury"], moodTags: ["ceremony","luxury","deep-focus","reverent"], description: "The emperor of greens—oceanic depth meets silk.", tempC: 60, timeMin: 2, origin: "Uji, Japan" },
  { id: "tencha", name: "Tencha (Pre-Matcha)", style: "green", caffeine: "high", flavor: ["concentrated","powder-ready","intense"], moodTags: ["preparatory","intense","focused"], description: "Matcha's parent—concentrated leaves before the stone.", tempC: 70, timeMin: 1, origin: "Japan" },

  // Indian & Sri Lankan Estate Teas
  { id: "first-flush-darjeeling", name: "First Flush Darjeeling", style: "black", caffeine: "medium", flavor: ["astringent","green","spring"], moodTags: ["spring","awakening","fresh","bright"], description: "Himalayan spring awakening—green brightness in black tea.", tempC: 95, timeMin: 3, origin: "Darjeeling, India", season: "first flush" },
  { id: "second-flush-darjeeling", name: "Second Flush Darjeeling", style: "black", caffeine: "high", flavor: ["muscatel","bronze","wine"], moodTags: ["sophisticated","wine","afternoon","complex"], description: "Summer's wisdom—muscatel magic from mountain gardens.", tempC: 95, timeMin: 4, origin: "Darjeeling, India", season: "second flush" },
  { id: "nilgiri", name: "Nilgiri", style: "black", caffeine: "medium", flavor: ["citrus","bright","southern"], moodTags: ["bright","citrus","iced-tea","summer"], description: "Blue Mountain brightness—citrus song from South India.", tempC: 95, timeMin: 3, origin: "Nilgiri, India" },
  { id: "uva-ceylon", name: "Uva Province Ceylon", style: "black", caffeine: "high", flavor: ["crisp","high-grown","bright"], moodTags: ["morning","alertness","crisp","mountain"], description: "High-altitude crispness—Lanka's mountain gift.", tempC: 95, timeMin: 3, origin: "Uva, Sri Lanka" },
  { id: "dimbula", name: "Dimbula Ceylon", style: "black", caffeine: "medium", flavor: ["seasonal","balanced","golden"], moodTags: ["seasonal","balanced","reliable"], description: "Seasonal symphony—dry season magic from Ceylon hills.", tempC: 95, timeMin: 3, origin: "Dimbula, Sri Lanka" },

  // Rare & Specialty Teas
  { id: "yellow-tea", name: "Jun Shan Yin Zhen (Yellow)", style: "green", caffeine: "low", flavor: ["rare","mellow","golden"], moodTags: ["rare","special","gentle","unique"], description: "Golden rarity—the mysterious yellow processing.", tempC: 80, timeMin: 3, origin: "Hunan, China" },
  { id: "purple-tea", name: "Purple Tea", style: "black", caffeine: "medium", flavor: ["antioxidant","purple","unique"], moodTags: ["health","unique","colorful","special"], description: "Kenyan purple magic—anthocyanins meet tradition.", tempC: 95, timeMin: 4, origin: "Kenya" },
  { id: "golden-needle", name: "Golden Needle Black", style: "black", caffeine: "medium", flavor: ["honey","golden","sweet"], moodTags: ["luxury","honey","golden","precious"], description: "Golden treasure—honey sweetness in black silk.", tempC: 90, timeMin: 3, origin: "Fujian, China" },
  { id: "sticky-rice-oolong", name: "Sticky Rice Oolong", style: "oolong", caffeine: "medium", flavor: ["rice","natural","unique"], moodTags: ["curious","unique","comforting","natural"], description: "Nature's dessert—rice fragrance without rice added.", tempC: 90, timeMin: 3, origin: "Guangdong, China" },

  // Global Tisanes & Herbals
  { id: "rooibos-red", name: "Red Bush Rooibos", style: "rooibos", caffeine: "none", flavor: ["red","mineral","earthy"], moodTags: ["african","mineral","evening","earthy"], description: "Kalahari sunset—red earth wisdom caffeine-free.", tempC: 95, timeMin: 7, origin: "South Africa" },
  { id: "honeybush", name: "Honeybush", style: "herbal", caffeine: "none", flavor: ["honey","floral","sweet"], moodTags: ["sweet","african","honey","natural"], description: "Sweet African embrace—honey without bees.", tempC: 95, timeMin: 6, origin: "South Africa" },
  { id: "mate-traditional", name: "Traditional Mate", style: "mate", caffeine: "high", flavor: ["bitter","grassy","social"], moodTags: ["social","traditional","bitter","community"], description: "South American community—shared gourd, shared energy.", tempC: 80, timeMin: 5, origin: "Argentina" },
  { id: "mate-roasted", name: "Roasted Mate", style: "mate", caffeine: "high", flavor: ["nutty","roasted","smooth"], moodTags: ["smooth","approachable","nutty"], description: "Mate for beginners—roasted smoothness, same power.", tempC: 85, timeMin: 4, origin: "Brazil" },

  // Flowering & Blooming Teas
  { id: "jasmine-pearls", name: "Jasmine Phoenix Pearls", style: "green", caffeine: "medium", flavor: ["jasmine","pearl","night"], moodTags: ["romantic","night","perfumed","elegant"], description: "Night garden pearls—jasmine dreams rolled tight.", tempC: 80, timeMin: 2.5, origin: "Fujian, China" },
  { id: "blooming-flower", name: "Blooming Flower Ball", style: "flowering", caffeine: "low", flavor: ["visual","delicate","performance"], moodTags: ["theatrical","gift","visual","ceremony"], description: "Tea theater—watch flowers bloom in your cup.", tempC: 80, timeMin: 3, origin: "China" },
  { id: "osmanthus-green", name: "Osmanthus Green", style: "green", caffeine: "medium", flavor: ["apricot","sweet","floral"], moodTags: ["autumn","sweet","apricot","delicate"], description: "Autumn apricot dreams—sweet osmanthus petals.", tempC: 85, timeMin: 2, origin: "China" },

  // Wellness & Functional Blends
  { id: "turmeric-ginger", name: "Turmeric Ginger", style: "herbal", caffeine: "none", flavor: ["golden","spicy","warming"], moodTags: ["inflammation","warming","golden","healing"], description: "Golden healing—ancient spices for modern stress.", tempC: 95, timeMin: 6 },
  { id: "elderflower", name: "Elderflower", style: "herbal", caffeine: "none", flavor: ["floral","immune","delicate"], moodTags: ["immune","spring","delicate","healing"], description: "Spring immunity—elder tree's floral protection.", tempC: 95, timeMin: 5 },
  { id: "nettle", name: "Nettle Leaf", style: "herbal", caffeine: "none", flavor: ["green","mineral","earthy"], moodTags: ["detox","mineral","spring-clean","grounding"], description: "Green detox—nettle's mineral-rich embrace.", tempC: 95, timeMin: 7 },
  { id: "dandelion-root", name: "Roasted Dandelion Root", style: "herbal", caffeine: "none", flavor: ["coffee-like","roasted","bitter"], moodTags: ["coffee-substitute","liver","bitter","grounding"], description: "Coffee's herbal cousin—roasted roots, earthy comfort.", tempC: 95, timeMin: 8 },
  { id: "schisandra", name: "Schisandra Berry", style: "herbal", caffeine: "none", flavor: ["five-flavor","adaptogen","complex"], moodTags: ["adaptogen","stress","complex","balancing"], description: "Five-flavor berry—adaptogen complexity in one sip.", tempC: 95, timeMin: 6, origin: "Northeast Asia" },

  // Seasonal & Holiday Specials
  { id: "christmas-spice", name: "Christmas Spice", style: "blend", caffeine: "none", flavor: ["cinnamon","orange","clove"], moodTags: ["holiday","festive","christmas","cozy"], description: "Holiday memories—cinnamon, orange peel, winter warmth.", tempC: 95, timeMin: 6 },
  { id: "summer-mint", name: "Summer Garden Mint", style: "herbal", caffeine: "none", flavor: ["mint","garden","cooling"], moodTags: ["summer","cooling","garden","fresh"], description: "Garden mint medley—summer cooling from the earth.", tempC: 95, timeMin: 4 },
  { id: "autumn-spice", name: "Autumn Spice Blend", style: "blend", caffeine: "low", flavor: ["apple","cinnamon","nutmeg"], moodTags: ["autumn","spice","apple","harvest"], description: "Harvest celebration—apple orchards and spice warmth.", tempC: 95, timeMin: 5 },
  { id: "spring-cleanse", name: "Spring Cleanse", style: "herbal", caffeine: "none", flavor: ["green","cleansing","fresh"], moodTags: ["cleanse","spring","fresh-start","renewal"], description: "Spring renewal—green cleansing for fresh starts.", tempC: 95, timeMin: 6 },

  // Smoky & Fire Teas
  { id: "russian-caravan", name: "Russian Caravan", style: "blend", caffeine: "medium", flavor: ["smoky","travel","blend"], moodTags: ["travel","smoky","adventure","journey"], description: "Silk road journey—smoky campfires and distant lands.", tempC: 95, timeMin: 4 },
  { id: "pine-smoked", name: "Pine Smoked Black", style: "black", caffeine: "medium", flavor: ["pine","smoke","forest"], moodTags: ["forest","smoke","wild","campfire"], description: "Forest fire memory—pine smoke meets black tea.", tempC: 95, timeMin: 3 },

  // Night & Sleep Blends
  { id: "sleepy-time", name: "Sleepy Time Blend", style: "herbal", caffeine: "none", flavor: ["lavender","chamomile","sleepy"], moodTags: ["sleep","bedtime","dreams","night"], description: "Dreamland express—lavender, chamomile, gentle night.", tempC: 95, timeMin: 6 },
  { id: "valerian-mint", name: "Valerian Mint", style: "herbal", caffeine: "none", flavor: ["herbal","mint","calming"], moodTags: ["deep-sleep","powerful","herbal","night"], description: "Deep sleep herb—valerian's powerful night medicine.", tempC: 95, timeMin: 7 },
  { id: "moon-tea", name: "Moon Tea", style: "herbal", caffeine: "none", flavor: ["lunar","night","mystical"], moodTags: ["mystical","moon","night","ritual"], description: "Lunar ritual—herbs for moon-gazing and night thoughts.", tempC: 95, timeMin: 5 },

  // Energy & Focus Blends
  { id: "brain-boost", name: "Brain Boost", style: "blend", caffeine: "high", flavor: ["ginkgo","mint","focus"], moodTags: ["focus","brain","study","mental"], description: "Mental clarity blend—ginkgo, mint, sharp focus.", tempC: 85, timeMin: 4 },
  { id: "pre-workout", name: "Pre-Workout Tea", style: "mate", caffeine: "high", flavor: ["energy","green","power"], moodTags: ["workout","energy","gym","power"], description: "Natural pre-workout—mate energy without the crash.", tempC: 80, timeMin: 3 },
  { id: "creative-flow", name: "Creative Flow", style: "green", caffeine: "medium", flavor: ["clear","flowing","creative"], moodTags: ["creative","flow","artistic","inspiration"], description: "Artist's companion—green tea clarity for creative flow.", tempC: 80, timeMin: 2 },
];

const INSIGHTS = [
  "The tea teaches patience: wait, steep, sip, breathe.",
  "Your mood is weather, not climate.",
  "Restlessness is often energy with no staircase.",
  "Small rituals tame large feelings.",
  "If you can name it, you can hold it.",
  "Quiet is a skill disguised as silence.",
  "Even storms admire a sturdy mug.",
  "Steam carries prayers better than words.",
  "The leaves know what you need before you do.",
  "A watched pot never boils, but patience always steeps.",
  "Tea time is the space between thoughts.",
  "Your cup reflects what your heart holds.",
  "Steep longer when life feels rushed.",
  "The best conversations happen over shared warmth.",
  "Every tea ceremony is a small rebellion against haste.",
  "Hot tea, cold day, warm heart—simple math.",
  "The ritual is the medicine, the tea is the excuse.",
  "Caffeine lifts the mind, ceremony lifts the spirit.",
  "Tea leaves read you better than any fortune teller.",
  "A proper cup asks nothing and gives everything.",
  "Sip by sip, the world becomes handleable.",
  "Your ancestors knew: pause, pour, breathe, begin again.",
  "The water remembers the mountain, the leaf remembers the sun.",
  "Every cup is a small act of self-care disguised as beverage.",
  "Tea doesn't fix everything, but it holds space for everything.",
  "The perfect temperature is whatever temperature you need.",
  "Loose leaf, tight grip on chaos.",
  "Your mood chose this tea, trust the process.",
  "Steam writes temporary poetry on the air.",
  "Tea time: where multitasking goes to die.",
  "The cup that comforts you today is tomorrow's medicine.",
  "Every tea master was once a beginner who kept steeping.",
  "Your first sip contains tomorrow's possibility.",
  "Tea is meditation you can taste.",
  "The leaves dance their last dance for you.",
  "Your hands know before your mind: this is what I needed.",
  "Ceremony isn't fancy—it's attention with intention.",
  "The pot holds water, the heart holds space, the tea holds time.",
];

function has(s: string, q: string) { return s.toLowerCase().includes(q.toLowerCase()); }
function pickOne<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }
function byIds(ids: string[]) { return TEAS.filter(t => ids.includes(t.id)); }

function recommendTeas(moodRaw: string, k = 3): Tea[] {
  const mood = moodRaw.trim().toLowerCase();
  
  // 1) Direct tag match (highest priority)
  let pool = TEAS.filter(t => t.moodTags.some(tag => has(mood, tag)));

  // 2) Enhanced mood mapping with more categories
  if (!pool.length) {
    const map: Record<string, string[]> = {
      // Core emotions
      anxious: ["chamomile","genmaicha","lemon-balm","lavender","valerian-mint","sleepy-time"],
      sad: ["earl-grey","rooibos-vanilla","jasmine","apple-cinnamon","rose-black","elderflower"],
      tired: ["matcha","assam","yerba-mate","irish-breakfast","pre-workout","brain-boost"],
      restless: ["tieguanyin","mint-green","gunpowder","high-mountain","dong-ding"],
      angry: ["peppermint","da-hong-pao","sage","pine-smoked","russian-caravan"],
      
      // Mental states
      focused: ["sencha","gyokuro","yerba-mate","gunpowder","brain-boost","creative-flow"],
      creative: ["matcha","jasmine","silver-needle","butterfly-pea","osmanthus-oolong","creative-flow"],
      confused: ["sage","nettle","dandelion-root","schisandra","brain-boost"],
      scattered: ["longjing","kabusecha","bancha","hojicha"],
      overwhelmed: ["chamomile","lavender","moon-tea","sleepy-time","valerian-mint"],
      
      // Social & romantic
      romantic: ["rose-black","jasmine","white-peony","osmanthus-oolong","jasmine-pearls"],
      lonely: ["chai","rose-black","blooming-flower","mate-traditional","russian-caravan"],
      social: ["mint-green","mate-traditional","chai","darjeeling","blooming-flower"],
      
      // Physical states
      sick: ["lemon-ginger","peppermint","puerh","lemongrass","turmeric-ginger","elderflower"],
      headache: ["peppermint","chrysanthemum","lavender","turmeric-ginger"],
      nauseous: ["lemon-ginger","peppermint","lemongrass","chamomile"],
      sick_cold: ["lemon-ginger","elderflower","turmeric-ginger","chai"],
      
      // Comfort & seasonal
      cozy: ["chai","rooibos-vanilla","apple-cinnamon","hojicha","christmas-spice","honeybush"],
      nostalgic: ["genmaicha","apple-cinnamon","buckwheat","autumn-spice","christmas-spice"],
      homesick: ["chai","apple-cinnamon","christmas-spice","autumn-spice","mate-traditional"],
      
      // Seasonal moods
      spring: ["biluochun","first-flush-darjeeling","spring-cleanse","elderflower","nettle"],
      summer: ["hibiscus","chrysanthemum","lemongrass","summer-mint","nilgiri"],
      autumn: ["autumn-spice","apple-cinnamon","oolong-milk","keemun","osmanthus-green"],
      winter: ["chai","christmas-spice","assam","lapsang","russian-caravan"],
      
      // Energy levels
      exhausted: ["matcha","assam","yerba-mate","irish-breakfast","pre-workout","raw-puerh"],
      sluggish: ["lemon-ginger","brain-boost","pre-workout","gunpowder","mate-roasted"],
      hyper: ["chamomile","lavender","valerian-mint","moon-tea","sleepy-time"],
      
      // Complex emotional states
      broody: ["lapsang","puerh","da-hong-pao","keemun","pine-smoked","aged-puerh"],
      melancholy: ["earl-grey","jasmine","rose-black","white-peony","shou-mei"],
      contemplative: ["aged-puerh","shou-mei","gyokuro-premium","dong-ding","yellow-tea"],
      rebellious: ["raw-puerh","lapsang","pine-smoked","russian-caravan","mate-traditional"],
      
      // Special occasions
      celebration: ["blooming-flower","jasmine-pearls","gyokuro-premium","golden-needle","purple-tea"],
      meditation: ["white-hair-silver-needle","gyokuro-premium","longjing","moon-tea"],
      ceremony: ["gyokuro-premium","blooming-flower","tencha","aged-puerh"],
      
      // Weather responses
      hot: ["hibiscus","chrysanthemum","lemongrass","summer-mint","mint-green"],
      cold: ["chai","turmeric-ginger","christmas-spice","russian-caravan","pine-smoked"],
      rainy: ["earl-grey","lapsang","chai","hojicha","irish-breakfast"],
    };
    
    for (const key of Object.keys(map)) {
      if (has(mood, key)) { pool = byIds(map[key]); break; }
    }
  }

  // 3) Enhanced keyword matching
  if (!pool.length) {
    if (/(work|study|focus|deadline|exam|thesis|project)/i.test(mood)) {
      pool = byIds(["sencha","gyokuro","yerba-mate","gunpowder","brain-boost","creative-flow"]);
    }
    else if (/(love|date|kiss|romance|valentine|wedding|anniversary)/i.test(mood)) {
      pool = byIds(["rose-black","jasmine","white-peony","osmanthus-oolong","jasmine-pearls","blooming-flower"]);
    }
    else if (/(flu|cold|stomach|hangover|hungover|queasy|sick|ill|fever)/i.test(mood)) {
      pool = byIds(["lemon-ginger","peppermint","puerh","lemongrass","turmeric-ginger","elderflower"]);
    }
    else if (/(gym|workout|exercise|fitness|running|training)/i.test(mood)) {
      pool = byIds(["pre-workout","mate-traditional","matcha","yerba-mate","brain-boost"]);
    }
    else if (/(sleep|insomnia|bedtime|night|tired|sleepy)/i.test(mood)) {
      pool = byIds(["sleepy-time","valerian-mint","chamomile","lavender","moon-tea"]);
    }
    else if (/(stress|pressure|overwhelmed|panic|anxiety)/i.test(mood)) {
      pool = byIds(["chamomile","lavender","lemon-balm","schisandra","valerian-mint"]);
    }
    else if (/(detox|cleanse|clean|healthy|reset)/i.test(mood)) {
      pool = byIds(["nettle","dandelion-root","spring-cleanse","green-tea","lemongrass"]);
    }
    else if (/(travel|adventure|journey|explore|wanderlust)/i.test(mood)) {
      pool = byIds(["russian-caravan","mate-traditional","gunpowder","raw-puerh","pine-smoked"]);
    }
    else if (/(cozy|comfort|warm|hug|snuggle|blanket)/i.test(mood)) {
      pool = byIds(["chai","rooibos-vanilla","apple-cinnamon","hojicha","christmas-spice","honeybush"]);
    }
    else if (/(party|celebrate|festive|joy|happy|celebration)/i.test(mood)) {
      pool = byIds(["blooming-flower","jasmine-pearls","purple-tea","butterfly-pea","mate-traditional"]);
    }
  }

  // 4) Energy-based broad fallbacks
  if (!pool.length) {
    if (/(exhausted|drained|sleepy|zombie|dead|tired)/i.test(mood)) {
      pool = byIds(["matcha","assam","yerba-mate","irish-breakfast","pre-workout","raw-puerh"]);
    }
    else if (/(calm|peace|soft|gentle|quiet|serene|zen)/i.test(mood)) {
      pool = byIds(["silver-needle","white-peony","genmaicha","kukicha","longjing","white-hair-silver-needle"]);
    }
    else if (/(wild|intense|strong|powerful|bold)/i.test(mood)) {
      pool = byIds(["raw-puerh","lapsang","mate-traditional","pine-smoked","da-hong-pao"]);
    }
    else if (/(delicate|subtle|refined|elegant|sophisticated)/i.test(mood)) {
      pool = byIds(["gyokuro-premium","white-hair-silver-needle","yellow-tea","first-flush-darjeeling","longjing"]);
    }
  }

  // 5) Time of day fallbacks
  if (!pool.length) {
    const hour = new Date().getHours();
    if (hour < 10) { // Morning
      pool = byIds(["assam","irish-breakfast","ceylon","first-flush-darjeeling","sencha"]);
    } else if (hour < 14) { // Midday
      pool = byIds(["sencha","gunpowder","nilgiri","brain-boost","creative-flow"]);
    } else if (hour < 18) { // Afternoon
      pool = byIds(["darjeeling","oolong-milk","tieguanyin","earl-grey","jasmine"]);
    } else { // Evening
      pool = byIds(["rooibos-vanilla","chamomile","hojicha","sleepy-time","moon-tea"]);
    }
  }

  // 6) Ultimate fallback - popular crowd-pleasers
  if (!pool.length) {
    pool = byIds(["jasmine","earl-grey","longjing","rooibos-vanilla","hojicha","mint-green"]);
  }

  // Smart selection: prefer variety in styles and caffeine levels
  const out: Tea[] = [];
  const usedStyles = new Set<string>();
  const usedCaffeine = new Set<string>();
  const bag = [...pool];
  
  // First pass: try to get variety in styles and caffeine
  while (out.length < Math.min(k, bag.length) && bag.length > 0) {
    let bestChoice = -1;
    let bestScore = -1;
    
    for (let i = 0; i < bag.length; i++) {
      let score = Math.random(); // Base randomness
      
      // Bonus for style variety
      if (!usedStyles.has(bag[i].style)) score += 0.5;
      
      // Bonus for caffeine variety
      if (!usedCaffeine.has(bag[i].caffeine)) score += 0.3;
      
      // Bonus for origin variety if available
      if (bag[i].origin && !out.some(t => t.origin === bag[i].origin)) score += 0.2;
      
      if (score > bestScore) {
        bestScore = score;
        bestChoice = i;
      }
    }
    
    if (bestChoice >= 0) {
      const chosen = bag.splice(bestChoice, 1)[0];
      out.push(chosen);
      usedStyles.add(chosen.style);
      usedCaffeine.add(chosen.caffeine);
    }
  }
  
  return out;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mood = searchParams.get('mood') || '';
  const n = Math.min(parseInt(searchParams.get('n') || '3', 10) || 3, 6);
  const recs = recommendTeas(mood, n);
  const fortune = pickOne(INSIGHTS);
  // Attach minimal fields needed by UI
  const recommendations = recs.map(t => ({
    id: t.id,
    name: t.name,
    style: t.style,
    caffeine: t.caffeine,
    flavor: t.flavor,
    description: t.description,
    tempC: t.tempC,
    timeMin: t.timeMin,
  }));
  return new Response(JSON.stringify({ mood, recommendations, fortune }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    status: 200,
  });
}