"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Coffee, CupSoda, Shuffle, RefreshCw, Copy, Check } from "lucide-react";

/**
 * Mood → Tea (web) — single-file React app
 * - Tailwind CSS for styling (glassy, matcha vibe)
 * - Framer Motion for tasteful animations + 3D flip card
 * - Zero backend; deterministic + fun recommender with a big tea catalog
 *
 * How to use in Next.js (App Router):
 * 1) Create a Next.js app: npx create-next-app@latest mood-tea && cd mood-tea
 * 2) Add Tailwind (official guide): https://tailwindcss.com/docs/guides/nextjs
 * 3) Replace app/page.tsx with this file's default export contents
 * 4) npm i framer-motion lucide-react
 * 5) npm run dev → open http://localhost:3000
 * 6) Push to GitHub and "Import" in Vercel, or run `vercel` from the project folder
 */

// --- Types

type Tea = {
  id: string;
  name: string;
  style: "herbal" | "green" | "black" | "oolong" | "white" | "puerh" | "rooibos" | "mate" | "blend";
  caffeine: "none" | "low" | "medium" | "high";
  flavor: string[]; // descriptors
  moodTags: string[]; // moods it pairs well with
  description: string; // cozy copy
  tempC: number; // ideal brew temp C
  timeMin: number; // steep mins
};

// --- A delightfully extra but compact tea catalog
// (A mix of classics + fun blends; tweak freely.)
const TEAS: Tea[] = [
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
];

const INSIGHTS = [
  "The tea teaches patience: wait, steep, sip, breathe.",
  "Your mood is weather, not climate.",
  "Restlessness is often energy with no staircase.",
  "Your body is a witness—ask it for testimony, not a verdict.",
  "Small rituals tame large feelings.",
  "If you can name it, you can hold it.",
  "Quiet is a skill disguised as silence.",
  "Let the kettle be a metronome for your thoughts.",
  "You don’t need answers—just better questions.",
  "Warm hands convince a cold mind.",
  "Steep your day, don’t boil it.",
  "You’re not behind; you’re becoming.",
  "Sips > gulps > gasps.",
  "Even storms admire a sturdy mug.",
  "Gentleness is a power tool.",
];

const PRESET_MOODS = [
  "anxious","sad","tired","restless","angry","creative","focused","romantic","sick","cozy","nostalgic","broody"
];

// Utility: fuzzy contains (case-insens)
const has = (s: string, q: string) => s.toLowerCase().includes(q.toLowerCase());

function recommendTea(moodRaw: string): Tea {
  const mood = moodRaw.trim().toLowerCase();
  if (!mood) return TEAS.find(t => t.id === "genmaicha")!;

  // 1) direct tag match weight
  const tagged = TEAS.filter(t => t.moodTags.some(tag => has(mood, tag)));
  if (tagged.length) return pickOne(tagged);

  // 2) heuristic mapping
  const map: Record<string, string[]> = {
    anxious: ["chamomile","genmaicha","lemon-balm","lavender"],
    sad: ["earl-grey","rooibos-vanilla","jasmine","apple-cinnamon"],
    tired: ["matcha","assam","yerba-mate"],
    restless: ["tieguanyin","mint-green"],
    angry: ["peppermint","da-hong-pao"],
    focused: ["sencha","gyokuro","yerba-mate"],
    creative: ["matcha","jasmine","silver-needle"],
    romantic: ["rose-black","jasmine","white-peony"],
    sick: ["lemon-ginger","peppermint","puerh"],
    cozy: ["chai","rooibos-vanilla","apple-cinnamon"],
    nostalgic: ["genmaicha","apple-cinnamon"],
    broody: ["lapsang","puerh","da-hong-pao"],
  };
  for (const key of Object.keys(map)) {
    if (has(mood, key)) {
      const options = TEAS.filter(t => map[key].includes(t.id));
      if (options.length) return pickOne(options);
    }
  }

  // 3) keyword cues
  if (/(work|study|focus|deadline|exam)/i.test(mood)) return pickOne(byIds(["sencha","gyokuro","yerba-mate"]));
  if (/(love|date|kiss|romance)/i.test(mood)) return pickOne(byIds(["rose-black","jasmine","white-peony"]));
  if (/(flu|cold|stomach|hangover|hungover|queasy)/i.test(mood)) return pickOne(byIds(["lemon-ginger","peppermint","puerh"]));

  // 4) graceful fallback by energy word
  if (/(exhausted|drained|sleepy|zombie)/i.test(mood)) return pickOne(byIds(["matcha","assam","yerba-mate"]));
  if (/(calm|peace|soft|gentle)/i.test(mood)) return pickOne(byIds(["silver-needle","white-peony","genmaicha"]));

  // 5) default crowd-pleasers
  return TEAS.find(t => t.id === "jasmine")!;
}

function byIds(ids: string[]) { return TEAS.filter(t => ids.includes(t.id)); }
function pickOne<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

// --- Pretty background (aurora / matcha glass)
function AuroraBG() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-950 to-black">
      <div className="absolute -top-20 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-30"
           style={{ background: "radial-gradient(closest-side, rgba(16,185,129,0.6), transparent)" }} />
      <div className="absolute top-1/3 -right-32 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-25"
           style={{ background: "radial-gradient(closest-side, rgba(34,197,94,0.5), transparent)" }} />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34d399"/>
              <stop offset="100%" stopColor="#10b981"/>
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <motion.path key={i}
              d={`M -10 ${i*60} C ${200+i*20} ${40+i*10}, ${600-i*10} ${80+i*15}, 1300 ${i*60}`}
              stroke="url(#glow)" strokeWidth="0.8" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2.5 + i*0.1, delay: i*0.05 }}
              className="mix-blend-screen" />
          ))}
        </svg>
      </motion.div>
      {/* Subtle stars */}
      <Stars />
    </div>
  );
}

function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    function resize(){ 
      if (!canvas) return;
      canvas.width = canvas.clientWidth * DPR; 
      canvas.height = canvas.clientHeight * DPR; 
    }
    resize();
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.1 + 0.2,
      tw: Math.random() * 0.6 + 0.2,
      p: Math.random() * Math.PI * 2,
    }));
    const render = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (const s of stars) {
        s.p += 0.02; const a = (Math.sin(s.p) * 0.4 + 0.6);
        ctx.globalAlpha = a; ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * DPR, 0, Math.PI * 2);
        ctx.fillStyle = "#a7f3d0"; // mint star
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-30" />
}

// 3D Flip Card container
function FlipCard({ front, back, flipped }: { front: React.ReactNode; back: React.ReactNode; flipped: boolean }) {
  return (
    <div className="[perspective:1200px] w-full max-w-xl mx-auto">
      <motion.div
        className="relative h-[340px] w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">{front}</div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">{back}</div>
      </motion.div>
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl shadow-emerald-900/30 ${className}`}>
      {children}
    </div>
  );
}

function formatBrew(t: Tea) {
  return `${t.timeMin} min • ${t.tempC}°C`;
}

function TeaGlyph({ style }: { style: Tea["style"] }) {
  const iconProps = { className: "w-5 h-5" } as const;
  switch(style) {
    case "green": return <CupSoda {...iconProps} />;
    case "black": return <Coffee {...iconProps} />;
    case "oolong": return <Coffee {...iconProps} />;
    case "white": return <CupSoda {...iconProps} />;
    case "rooibos": return <CupSoda {...iconProps} />;
    case "puerh": return <Coffee {...iconProps} />;
    case "mate": return <CupSoda {...iconProps} />;
    default: return <CupSoda {...iconProps} />;
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-2.5 py-1 rounded-full text-xs bg-emerald-300/15 text-emerald-200 border border-emerald-400/20">{children}</span>
}

function Fortune({ text }: { text: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-100/90 text-sm text-center">
      <Sparkles className="inline-block w-4 h-4 mr-1 -mt-0.5" />
      {text}
    </motion.div>
  );
}

function TeaCard({ tea }: { tea: Tea }) {
  return (
    <GlassCard className="h-full p-6 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-emerald-50">
          <TeaGlyph style={tea.style} />
          <h3 className="text-xl font-semibold tracking-tight">{tea.name}</h3>
          <span className="ml-auto text-xs uppercase tracking-wider text-emerald-200/70">{tea.style}</span>
        </div>
        <p className="text-emerald-100/90 leading-relaxed">{tea.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Badge>{tea.caffeine} caffeine</Badge>
          {tea.flavor.slice(0,3).map(f => <Badge key={f}>{f}</Badge>)}
          <Badge>{formatBrew(tea)}</Badge>
        </div>
      </div>
      <div className="pt-4">
        <div className="h-1.5 rounded-full bg-gradient-to-r from-emerald-300/60 via-emerald-500/60 to-emerald-300/60"></div>
      </div>
    </GlassCard>
  );
}

function FrontCard({ onRandom, onSteep, mood, setMood }:{ onRandom:()=>void; onSteep:()=>void; mood:string; setMood:(v:string)=>void; }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = useMemo(() => {
    const url = new URL(typeof window !== 'undefined' ? window.location.href : 'http://localhost');
    if (mood) url.searchParams.set('mood', mood); else url.searchParams.delete('mood');
    return url.toString();
  }, [mood]);

  return (
    <GlassCard className="h-full p-6">
      <div className="flex items-center gap-2 text-emerald-50">
        <CupSoda className="w-5 h-5" />
        <h3 className="text-xl font-semibold tracking-tight">Mood → Tea</h3>
        <span className="ml-auto text-xs uppercase tracking-wider text-emerald-200/70">matcha mode</span>
      </div>
      <div className="grid grid-rows-[auto,1fr,auto] h-[270px]">
        <div className="mt-4">
          <label className="block text-sm text-emerald-100/80 mb-1">Tell me your vibe</label>
          <div className="flex gap-2">
            <input
              value={mood}
              onChange={e=>setMood(e.target.value)}
              placeholder="e.g., anxious, romantic, broody, focused…"
              className="w-full px-4 py-3 rounded-2xl bg-white/5 text-emerald-50 placeholder-emerald-200/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
            <button onClick={onRandom} className="px-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <Shuffle className="w-5 h-5 text-emerald-100" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {PRESET_MOODS.map(tag => (
              <button key={tag} onClick={()=>setMood(tag)}
                className="px-3 py-1.5 rounded-full text-xs bg-emerald-300/10 hover:bg-emerald-300/20 text-emerald-100 border border-emerald-400/20 transition">
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="self-end" />
        <div className="flex items-center justify-between mt-6">
          <button onClick={onSteep} className="px-4 py-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-400/90 text-emerald-950 font-semibold shadow-lg shadow-emerald-900/30 transition">
            Steep me something
          </button>
          <button onClick={async ()=>{ await navigator.clipboard.writeText(shareUrl); setCopied(true); setTimeout(()=>setCopied(false), 1500); }} className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-emerald-100 transition flex items-center gap-2">
            {copied ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
            {copied? "Copied" : "Share"}
          </button>
        </div>
      </div>
    </GlassCard>
  );
}

function InsightStrip({ text }: { text: string }) {
  return (
    <div className="w-full max-w-xl mx-auto mt-5">
      <GlassCard className="p-3">
        <Fortune text={text} />
      </GlassCard>
    </div>
  );
}

export default function Page() {
  const [mood, setMood] = useState("");
  const [tea, setTea] = useState<Tea | null>(null);
  const [fortune, setFortune] = useState(INSIGHTS[0]);
  const [flipped, setFlipped] = useState(false);

  // Load mood from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initial = params.get("mood");
    if (initial) setMood(initial);
  }, []);

  const handleRandom = () => {
    setMood(pickOne(PRESET_MOODS));
  };

  const handleSteep = () => {
    const pick = recommendTea(mood);
    setTea(pick);
    setFortune(pickOne(INSIGHTS));
    setFlipped(true);
  };

  const reset = () => setFlipped(false);

  return (
    <div className="min-h-dvh relative text-emerald-50">
      <AuroraBG />

      <main className="max-w-5xl mx-auto px-4 pt-14 pb-24">
        <header className="flex items-center justify-between mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/20 border border-emerald-300/20 shadow">
              <Sparkles className="w-5 h-5 text-emerald-200" />
            </span>
            Mood → Tea
          </h1>
          <div className="text-emerald-200/70 text-sm">a tiny ritual engine</div>
        </header>

        <FlipCard
          flipped={flipped}
          front={<FrontCard onRandom={handleRandom} onSteep={handleSteep} mood={mood} setMood={setMood} />}
          back={
            <div className="h-full grid grid-rows-[1fr,auto]">
              {tea ? (
                <TeaCard tea={tea} />
              ) : (
                <GlassCard className="h-full p-6 flex items-center justify-center">
                  <div className="text-emerald-100/70">No tea yet—tell me a mood ✨</div>
                </GlassCard>
              )}
              <div className="flex items-center justify-between mt-4">
                <button onClick={reset} className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-emerald-100 transition flex items-center gap-2">
                  <RefreshCw className="w-4 h-4"/> Back
                </button>
                {tea && <div className="text-xs text-emerald-200/70">brew: {formatBrew(tea)}</div>}
              </div>
            </div>
          }
        />

        <AnimatePresence mode="wait">
          {fortune && !flipped && (
            <motion.div key={fortune} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              <InsightStrip text={fortune} />
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-12 flex items-center justify-center">
          <div className="text-xs text-emerald-200/50">Built with ❤️ + hot leaf water</div>
        </footer>
      </main>
    </div>
  );
}
