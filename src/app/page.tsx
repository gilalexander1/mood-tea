// ---------------------
// File: app/page.tsx
// ---------------------

'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Coffee, CupSoda, Shuffle, RefreshCw, Copy, Check, Forward } from 'lucide-react';

// Types must mirror API response
type Rec = {
  id: string;
  name: string;
  style: string;
  caffeine: string;
  flavor: string[];
  description: string;
  tempC: number;
  timeMin: number;
};

const PRESET_MOODS = ["anxious","sad","tired","restless","angry","creative","focused","romantic","sick","cozy","nostalgic","broody","heat"];


function formatBrew(t: Rec) { return `${t.timeMin} min • ${t.tempC}°C`; }

function TeaGlyph({ style }: { style: Rec['style'] }) {
  const iconProps = { className: 'w-5 h-5' } as const;
  switch(style){
    case 'green': return <CupSoda {...iconProps}/>;
    case 'black': return <Coffee {...iconProps}/>;
    case 'oolong': return <Coffee {...iconProps}/>;
    case 'white': return <CupSoda {...iconProps}/>;
    case 'rooibos': return <CupSoda {...iconProps}/>;
    case 'puerh': return <Coffee {...iconProps}/>;
    case 'mate': return <CupSoda {...iconProps}/>;
    default: return <CupSoda {...iconProps}/>;
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-2.5 py-1 rounded-full text-xs bg-emerald-300/15 text-emerald-200 border border-emerald-400/20">{children}</span>
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl shadow-emerald-900/30 ${className}`}>
      {children}
    </div>
  );
}

function Fortune({ text }: { text: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-100/90 text-sm text-center">
      <Sparkles className="inline-block w-4 h-4 mr-1 -mt-0.5" />
      {text}
    </motion.div>
  );
}

function TeaCard({ tea }: { tea: Rec }) {
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

function AuroraBG() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-950 to-black">
      <div className="absolute -top-20 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-30"
           style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.6), transparent)' }} />
      <div className="absolute top-1/3 -right-32 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-25"
           style={{ background: 'radial-gradient(closest-side, rgba(34,197,94,0.5), transparent)' }} />
      <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 0.25 }} transition={{ duration: 2 }}>
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
      <Stars />
    </div>
  );
}

function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    function resize(){ if (canvas) { canvas.width = canvas.clientWidth * DPR; canvas.height = canvas.clientHeight * DPR; } }
    resize();
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.1 + 0.2,
      p: Math.random() * Math.PI * 2,
    }));
    const render = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (const s of stars) {
        s.p += 0.02; const a = (Math.sin(s.p) * 0.4 + 0.6);
        ctx.globalAlpha = a; ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * DPR, 0, Math.PI * 2);
        ctx.fillStyle = '#a7f3d0';
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-30" />
}

function FlipCard({ front, back, flipped }: { front: React.ReactNode; back: React.ReactNode; flipped: boolean }) {
  return (
    <div className="[perspective:1200px] w-full max-w-xl mx-auto">
      <motion.div 
        className="relative h-[340px] w-full" 
        animate={{ rotateY: flipped ? 180 : 0 }} 
        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        style={{ 
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
      >
        <div 
          className="absolute inset-0 [backface-visibility:hidden]" 
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {front}
        </div>
        <div 
          className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]"
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}

function FrontCard({ onRandom, onSteep, mood, setMood, loading }:{ onRandom:()=>void; onSteep:()=>void; mood:string; setMood:(v:string)=>void; loading:boolean; }) {
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
            <button onClick={onRandom} className="px-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition" title="Random mood">
              <Shuffle className="w-5 h-5 text-emerald-100" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {PRESET_MOODS.map(tag => (
              <button key={tag} onClick={()=>setMood(tag)} className="px-3 py-1.5 rounded-full text-xs bg-emerald-300/10 hover:bg-emerald-300/20 text-emerald-100 border border-emerald-400/20 transition">
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="self-end" />
        <div className="flex items-center justify-between mt-6">
          <button onClick={onSteep} disabled={loading} className="px-4 py-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-400/90 disabled:opacity-60 text-emerald-950 font-semibold shadow-lg shadow-emerald-900/30 transition">
            {loading ? 'Steeping…' : 'Steep me something'}
          </button>
          <button onClick={async ()=>{ await navigator.clipboard.writeText(shareUrl); setCopied(true); setTimeout(()=>setCopied(false), 1500); }} className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-emerald-100 transition flex items-center gap-2">
            {copied ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
            {copied? 'Copied' : 'Share'}
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
  const [mood, setMood] = useState('');
  const [fortune, setFortune] = useState('');
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recs, setRecs] = useState<Rec[]>([]);
  const [idx, setIdx] = useState(0);

  // Load mood from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initial = params.get('mood');
    if (initial) setMood(initial);
  }, []);

  async function fetchTeas(currentMood: string) {
    setLoading(true);
    try {
      const res = await fetch(`/api/steep?mood=${encodeURIComponent(currentMood)}&n=3`, { cache: 'no-store' });
      const json = await res.json();
      setRecs(json.recommendations || []);
      setIdx(0);
      setFortune(json.fortune || '');
      setFlipped(true);
    } finally { setLoading(false); }
  }

  const handleRandom = () => setMood(pickOne(PRESET_MOODS));
  const handleSteep = () => fetchTeas(mood);
  const reset = () => setFlipped(false);
  const another = () => setIdx(i => (i + 1) % Math.max(recs.length || 1, 1));

  const tea = recs[idx];

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
          front={<FrontCard onRandom={handleRandom} onSteep={handleSteep} mood={mood} setMood={setMood} loading={loading} />}
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
                <div className="flex gap-2">
                  <button onClick={reset} className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-emerald-100 transition flex items-center gap-2">
                    <RefreshCw className="w-4 h-4"/> Back
                  </button>
                  {recs.length > 1 && (
                    <button onClick={another} className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-emerald-100 transition flex items-center gap-2" title="Another suggestion">
                      <Forward className="w-4 h-4"/> Another
                    </button>
                  )}
                </div>
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
          <div className="text-xs text-emerald-200/50">Built with ❤️ + hot leaf water by Gil for Mel🌻</div>
        </footer>
      </main>
    </div>
  );
}

function pickOne<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }
