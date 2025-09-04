export const dynamic = 'force-dynamic';

// --- Types

type Tea = {
  id: string;
  name: string;
  style: "herbal" | "green" | "black" | "oolong" | "white" | "puerh" | "rooibos" | "mate" | "blend";
  caffeine: "none" | "low" | "medium" | "high";
  flavor: string[];
  moodTags: string[];
  description: string;
  tempC: number;
  timeMin: number;
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
];

const INSIGHTS = [
  "The tea teaches patience: wait, steep, sip, breathe.",
  "Your mood is weather, not climate.",
  "Restlessness is often energy with no staircase.",
  "Small rituals tame large feelings.",
  "If you can name it, you can hold it.",
  "Quiet is a skill disguised as silence.",
  "Even storms admire a sturdy mug.",
];

function has(s: string, q: string) { return s.toLowerCase().includes(q.toLowerCase()); }
function pickOne<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }
function byIds(ids: string[]) { return TEAS.filter(t => ids.includes(t.id)); }

function recommendTeas(moodRaw: string, k = 3): Tea[] {
  const mood = moodRaw.trim().toLowerCase();
  // 1) direct tag match
  let pool = TEAS.filter(t => t.moodTags.some(tag => has(mood, tag)));

  // 2) heuristics if empty
  if (!pool.length) {
    const map: Record<string, string[]> = {
      anxious: ["chamomile","genmaicha","lemon-balm","lavender"],
      sad: ["earl-grey","rooibos-vanilla","jasmine","apple-cinnamon"],
      tired: ["matcha","assam","yerba-mate","irish-breakfast"],
      restless: ["tieguanyin","mint-green","gunpowder"],
      angry: ["peppermint","da-hong-pao","sage"],
      focused: ["sencha","gyokuro","yerba-mate","gunpowder"],
      creative: ["matcha","jasmine","silver-needle","butterfly-pea","osmanthus-oolong"],
      romantic: ["rose-black","jasmine","white-peony","osmanthus-oolong"],
      sick: ["lemon-ginger","peppermint","puerh","lemongrass"],
      cozy: ["chai","rooibos-vanilla","apple-cinnamon","hojicha"],
      nostalgic: ["genmaicha","apple-cinnamon","buckwheat"],
      broody: ["lapsang","puerh","da-hong-pao","keemun"],
      heat: ["hibiscus","chrysanthemum","lemongrass"],
    };
    for (const key of Object.keys(map)) {
      if (has(mood, key)) { pool = byIds(map[key]); break; }
    }
  }

  // 3) keywords
  if (!pool.length) {
    if (/(work|study|focus|deadline|exam)/i.test(mood)) pool = byIds(["sencha","gyokuro","yerba-mate","gunpowder"]);
    else if (/(love|date|kiss|romance)/i.test(mood)) pool = byIds(["rose-black","jasmine","white-peony","osmanthus-oolong"]);
    else if (/(flu|cold|stomach|hangover|hungover|queasy)/i.test(mood)) pool = byIds(["lemon-ginger","peppermint","puerh","lemongrass"]);
  }

  // 4) broad fallbacks by energy
  if (!pool.length) {
    if (/(exhausted|drained|sleepy|zombie)/i.test(mood)) pool = byIds(["matcha","assam","yerba-mate","irish-breakfast"]);
    else if (/(calm|peace|soft|gentle)/i.test(mood)) pool = byIds(["silver-needle","white-peony","genmaicha","kukicha"]);
  }

  // 5) final fallbacks
  if (!pool.length) pool = byIds(["jasmine","ceylon","hojicha","mint-green"]);

  // pick k distinct at random
  const out: Tea[] = [];
  const bag = [...pool];
  while (out.length < Math.min(k, bag.length)) {
    const i = Math.floor(Math.random() * bag.length);
    out.push(bag.splice(i,1)[0]);
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