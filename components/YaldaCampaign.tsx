import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Wallet, 
  TrendingUp, 
  Gem, 
  ArrowLeft,
  Coins,
  Snowflake,
  Instagram,
  Bitcoin,
  CircleDollarSign,
  CloudRain
} from 'lucide-react';

// --- Types ---
type ParticleType = 'snow' | 'money' | 'bitcoin' | 'tether' | 'seed' | 'rain';

interface ParticleProps {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  type: ParticleType;
  scale: number;
}

interface ExplosionParticleProps {
  id: number;
  angle: number;
  velocity: number;
  type: 'seed' | 'money' | 'bitcoin' | 'tether';
}

// --- Sub-Components: CSS Art & Visuals ---

/**
 * CyberPomegranate: A CSS-constructed pomegranate with a cyber-crypto aesthetic.
 */
const CyberPomegranate: React.FC<{ isCracking?: boolean }> = ({ isCracking }) => {
  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64"
      animate={isCracking ? {
        scale: [1, 1.1, 0.9, 1.2],
        rotate: [0, -10, 10, -5, 5, 0],
        filter: ["brightness(1)", "brightness(2)", "brightness(0.5)"]
      } : { 
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={isCracking ? { duration: 0.5 } : { 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-40 rounded-full animate-pulse" />
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-red-500 via-red-900 to-black border border-red-500/30 shadow-[inset_0_0_40px_rgba(255,0,0,0.5)] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Seeds/Circles removed as requested */}
        
        <div className="absolute top-4 left-4 w-12 h-8 bg-white opacity-20 blur-xl rounded-full rotate-45" />
      </div>
      <div 
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-red-600 to-red-800"
        style={{
          clipPath: "polygon(0% 100%, 20% 0%, 40% 60%, 60% 0%, 80% 60%, 100% 0%, 100% 100%)"
        }}
      />
    </motion.div>
  );
};

/**
 * CyberWatermelon: A semi-circle abstract watermelon made of gradients and code.
 */
const CyberWatermelon: React.FC = () => {
  return (
    <motion.div
      className="relative w-56 h-32 md:w-72 md:h-40"
      animate={{ 
        y: [0, 20, 0],
        rotate: [0, -3, 3, 0]
      }}
      transition={{ 
        duration: 7, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: 1
      }}
    >
      <div className="absolute inset-0 bg-green-600 blur-[80px] opacity-30 rounded-b-full animate-pulse" />
      <div className="w-full h-full rounded-b-full bg-gradient-to-r from-green-900 via-green-600 to-green-900 border-b-2 border-r-2 border-l-2 border-green-400/50 shadow-[0_10px_30px_rgba(0,255,0,0.2)] overflow-hidden relative">
        <div className="absolute inset-0 opacity-50" 
             style={{ 
               backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 20px, #003300 20px, #003300 40px)" 
             }} 
        />
        <div className="absolute top-4 left-4 right-4 bottom-4 rounded-b-full bg-gradient-to-b from-red-500/80 to-red-900/80 backdrop-blur-sm border-t border-white/10 flex justify-center items-end pb-4">
           {/* Chart Arrows Removed */}
        </div>
      </div>
    </motion.div>
  );
};

/**
 * GlassCard: The main offering visualization.
 */
const GlassCard: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <motion.div 
      onClick={onClick}
      className="relative group perspective-1000 cursor-pointer"
      initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        rotateX: 0,
        y: [0, -15, 0], // Continuous loop
      }}
      transition={{ 
        scale: { duration: 1.2, type: "spring" },
        opacity: { duration: 1.2 },
        rotateX: { duration: 1.2 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
      <div className="relative w-full max-w-sm md:max-w-md h-56 md:h-64 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Header */}
        <div className="flex justify-between items-start z-10" dir="rtl">
          <div className="flex items-center gap-2">
            <Gem className="text-red-500" size={24} />
            <span className="text-lg font-bold tracking-wider text-white/90 font-['RokhFaNum']">صرافکس</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white/70 font-['RokhFaNum']">
            نسخه یلدا
          </div>
        </div>

        {/* Balance */}
        <div className="z-10 text-center space-y-1">
          <div className="text-sm text-green-400 font-mono tracking-widest uppercase font-['RokhFaNum']">موجودی هدیه</div>
          <div className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] font-black tracking-widest font-['RokhFaNum']" dir="ltr">
            ۱۰۰,۰۰۰,۰۰۰
          </div>
          <div className="text-xl text-white/60 font-medium font-['RokhFaNum']">تومان</div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end z-10" dir="rtl">
          <div className="space-y-1">
             <div className="text-xs text-white/40 font-['RokhFaNum']">دارنده کارت</div>
             <div className="text-sm font-semibold text-white/80 font-['RokhFaNum']">کاربر صرافکس</div>
          </div>
          <CreditCard className="text-white/20" size={40} />
        </div>

        {/* Shine Animation */}
        <motion.div 
          className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          animate={{ left: "200%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        />
      </div>
    </motion.div>
  );
};

// --- Explosion Overlay Component ---
const ExplosionOverlay: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const particles: ExplosionParticleProps[] = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => {
      const types: ('seed' | 'money' | 'bitcoin' | 'tether')[] = ['seed', 'seed', 'money', 'bitcoin', 'tether'];
      return {
        id: i,
        angle: Math.random() * 360,
        velocity: 500 + Math.random() * 1000, // Speed
        type: types[Math.floor(Math.random() * types.length)]
      };
    });
  }, []);

  // Self-cleanup after animation duration
  useEffect(() => {
    const timer = setTimeout(() => {
        onComplete();
    }, 5500); // 5s animation + buffer
    return () => clearTimeout(timer);
  }, [onComplete]);

  const renderExplosionParticle = (type: string) => {
    switch (type) {
      case 'bitcoin': return <Bitcoin size={32} className="text-yellow-500 drop-shadow-lg" />;
      case 'tether': return <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-bold text-white shadow-lg">₮</div>;
      case 'money': return <Coins size={28} className="text-green-400 drop-shadow-lg" />;
      case 'seed': 
      default: return <div className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_10px_red]" style={{ borderRadius: '50% 50% 50% 0' }} />;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden flex items-center justify-center">
      {particles.map((p) => {
         // Convert angle to radian
         const rad = p.angle * (Math.PI / 180);
         // Calculate target based on velocity
         const targetX = Math.cos(rad) * p.velocity;
         const targetY = Math.sin(rad) * p.velocity;
         
         return (
          <motion.div
            key={p.id}
            className="absolute"
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{ 
              x: targetX, 
              y: targetY + (Math.abs(targetX) * 0.5), // Add "Gravity" effect
              scale: [0, 1.5, 1],
              opacity: [1, 1, 0],
              rotate: 720
            }}
            transition={{ 
              duration: 5, 
              ease: [0.2, 0.4, 0.8, 1] // Ease out cubic
            }}
          >
            {renderExplosionParticle(p.type)}
          </motion.div>
         )
      })}
    </div>
  );
};


// --- Main Component ---

const YaldaCampaign: React.FC = () => {
  // Store multiple explosions by ID
  const [explosions, setExplosions] = useState<number[]>([]);
  const [pomegranateCracking, setPomegranateCracking] = useState(false);

  const handleCardClick = () => {
    // 1. Trigger Explosion: Add new unique ID to state
    setExplosions(prev => [...prev, Date.now() + Math.random()]);

    // 2. Trigger/Restart Pomegranate Crack Animation
    // Resetting to false then true ensures the animation restarts if clicked rapidly
    setPomegranateCracking(false);
    setTimeout(() => {
        setPomegranateCracking(true);
        // Turn off cracking state after animation duration to allow idle state return
        setTimeout(() => {
           setPomegranateCracking(false);
        }, 500);
    }, 10);
  };

  const removeExplosion = (id: number) => {
      setExplosions(prev => prev.filter(e => e !== id));
  };

  // Generate background ambient particles
  const particles: ParticleProps[] = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const rand = Math.random();
      let type: ParticleType = 'snow';
      if (rand < 0.1) type = 'bitcoin';
      else if (rand < 0.2) type = 'tether';
      else if (rand < 0.3) type = 'money';
      else if (rand < 0.5) type = 'seed'; 
      else if (rand < 0.6) type = 'rain';
      else type = 'snow';

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
        type,
        scale: 0.5 + Math.random() * 0.8
      };
    });
  }, []);

  const renderParticle = (p: ParticleProps) => {
    switch (p.type) {
      case 'bitcoin': return <Bitcoin size={20} className="text-yellow-500" />;
      case 'tether': return <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold text-white">₮</div>;
      case 'money': return <Coins size={18} className="text-green-400" />;
      case 'seed': return <div className="w-2 h-3 rounded-full bg-red-600 shadow-[0_0_5px_red]" style={{ borderRadius: '50% 50% 50% 0' }} />;
      case 'rain': return <div className="w-[1px] h-4 bg-white/40" />;
      case 'snow':
      default: return <div className="w-1 h-1 rounded-full bg-white blur-[1px]" />;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-8">
      
      {/* --- Unlimited Explosion Overlays --- */}
      {explosions.map((id) => (
          <ExplosionOverlay key={id} onComplete={() => removeExplosion(id)} />
      ))}
      
      {/* --- Background Layers --- */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,0,0,0.6)_0%,rgba(5,5,5,1)_70%)]" />

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute text-white/30"
            style={{ 
              left: `${p.x}%`, 
              top: -20,
              scale: p.scale
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ 
              y: '110vh', 
              opacity: [0, 1, 1, 0],
              rotate: p.type === 'rain' ? 0 : 360
            }}
            transition={{ 
              duration: p.duration, 
              delay: p.delay, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {renderParticle(p)}
          </motion.div>
        ))}
      </div>

      {/* --- Main Content Container --- */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center gap-8">
        
        {/* 1. Logo & Title */}
        <motion.div 
          className="flex flex-col items-center text-center w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.img 
            src="logo.png" 
            alt="Sarrafex Logo" 
            className="h-20 md:h-28 w-auto object-contain mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-green-500 pb-2 drop-shadow-[0_0_25px_rgba(200,0,0,0.4)] font-black">
            یلدای پر اعتبار
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-400 mt-2">
            تو نمیخواد بسازیش!
          </h2>
        </motion.div>

        {/* 2. Visuals */}
        <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] flex items-center justify-center">
           {/* Scale Wrapper for Composition */}
           <div className="w-full h-full flex items-center justify-center relative">
             
              {/* Background Glows for Art */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-red-900/20 via-transparent to-green-900/20 blur-3xl rounded-full" />

              {/* Composition Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Pomegranate - Z-Index 10 (Behind Card) */}
                <div className="absolute top-0 right-0 md:-right-4 z-10 scale-100 md:scale-125 opacity-100 drop-shadow-2xl">
                   <CyberPomegranate isCracking={pomegranateCracking} />
                </div>

                {/* Watermelon - Z-Index 10 (Behind Card) */}
                <div className="absolute bottom-0 left-0 md:-left-4 z-10 scale-100 md:scale-125 opacity-100 drop-shadow-2xl">
                   <CyberWatermelon />
                </div>

                {/* Hero Card - Z-Index 30 (Overlay) - CLICKABLE */}
                <div className="z-30 transform hover:scale-105 transition-transform duration-500 mt-4 md:mt-0">
                   <GlassCard onClick={handleCardClick} />
                </div>
              </div>

           </div>
        </div>

        {/* 3. CTA Button - Z-Index 50 (TOP MOST) */}
        <motion.div 
           className="w-full flex justify-center mt-6 relative z-50"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5 }}
        >
           <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full md:w-auto px-12 py-5 bg-gradient-to-r from-red-700 to-red-600 rounded-xl font-bold text-xl text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] overflow-hidden flex items-center justify-center gap-3 transition-all cursor-pointer"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
             <Wallet className="w-6 h-6" />
             <span>ثبت نام و دریافت اعتبار</span>
             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
           </motion.button>
        </motion.div>

        {/* 4. Description */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 leading-relaxed dir-rtl text-center max-w-lg relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          این اعتبار <span className="text-white font-bold border-b border-green-500 text-2xl mx-1">۱۰۰ میلیونی</span> برای هر نفر میتونه جداگانه درخواست بده. قرعه‌کشی در کار نیست، اعتبارت آماده‌ست.
        </motion.p>

        {/* 5. Trust Badges (Icon Box) */}
        <motion.div 
          className="w-full max-w-lg relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="grid grid-cols-3 gap-6 w-full pt-4 border-t border-white/5">
             {[
               { val: "بدون قرعه‌کشی", icon: "✨" },
               { val: "واریز آنی", icon: "⚡" },
               { val: "تضمین نقدینگی", icon: "💎" },
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center justify-center gap-2">
                 <span className="text-2xl">{item.icon}</span>
                 <span className="text-xs text-gray-400 whitespace-nowrap">{item.val}</span>
               </div>
             ))}
          </div>
        </motion.div>

        {/* 6. Social Media CTAs */}
        <motion.div 
          className="flex gap-4 mt-2 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
           <a href="https://instagram.com/sarrafex_com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-pink-600/20 hover:border-pink-500 hover:text-pink-400 transition-all group">
             <Instagram size={20} />
             <span className="font-medium text-sm">Instagram</span>
           </a>
           
           <a href="https://x.com/sarrafex_com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-400/20 hover:border-blue-400 hover:text-blue-300 transition-all group">
             {/* X Logo simulation using svg */}
             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
             </svg>
             <span className="font-medium text-sm">Saraffex X</span>
           </a>
        </motion.div>
        
        <div className="flex items-center gap-2 text-xs text-white/40 mt-4 relative z-10">
            <Snowflake size={12} />
            <span>فرصت محدود تا پایان شب یلدا</span>
        </div>

      </div>

      {/* Decorative Footer Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />

    </div>
  );
};

export default YaldaCampaign;