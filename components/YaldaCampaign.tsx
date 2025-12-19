import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Wallet, 
  TrendingUp, 
  Gem, 
  ArrowLeft,
  Coins,
  Snowflake,
  Instagram
} from 'lucide-react';

// --- Types ---
interface ParticleProps {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  type: 'snow' | 'money';
}

// --- Sub-Components: CSS Art & Visuals ---

/**
 * CyberPomegranate: A CSS-constructed pomegranate with a cyber-crypto aesthetic.
 */
const CyberPomegranate: React.FC = () => {
  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64"
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-40 rounded-full animate-pulse" />
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-red-500 via-red-900 to-black border border-red-500/30 shadow-[inset_0_0_40px_rgba(255,0,0,0.5)] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <motion.div 
          className="absolute inset-0 flex flex-wrap justify-center items-center p-6 gap-2 opacity-60"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
           {Array.from({ length: 12 }).map((_, i) => (
             <div key={i} className="w-4 h-4 rounded-full bg-red-400 shadow-[0_0_10px_red] flex items-center justify-center text-[8px] font-bold text-black border border-red-200">
                ₿
             </div>
           ))}
        </motion.div>
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
           <div className="flex gap-4">
             {[1, 2, 3, 4].map((i) => (
               <motion.div 
                key={i}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
               >
                 <TrendingUp size={16} className="text-black fill-black" />
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * GlassCard: The main offering visualization.
 */
const GlassCard: React.FC = () => {
  return (
    <motion.div 
      className="relative group perspective-1000"
      initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      transition={{ duration: 1.2, type: "spring" }}
      whileHover={{ scale: 1.02, rotateY: 5 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
      <div className="relative w-full max-w-sm md:max-w-md h-56 md:h-64 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="flex justify-between items-start z-10">
          <div className="flex items-center gap-2">
            <Gem className="text-red-500" size={24} />
            <span className="text-lg font-bold tracking-wider text-white/90">SARRAFEX</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white/70">
            YALDA EDITION
          </div>
        </div>

        <div className="z-10 text-center space-y-1">
          <div className="text-sm text-green-400 font-mono tracking-widest uppercase">Available Balance</div>
          <div className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] font-black tracking-widest">
            100,000,000
          </div>
          <div className="text-xl text-white/60 font-medium">TOMAN</div>
        </div>

        <div className="flex justify-between items-end z-10">
          <div className="space-y-1">
             <div className="text-xs text-white/40">CARD HOLDER</div>
             <div className="text-sm font-semibold text-white/80">FUTURE TRADER</div>
          </div>
          <CreditCard className="text-white/20" size={40} />
        </div>

        <motion.div 
          className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          animate={{ left: "200%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        />
      </div>
    </motion.div>
  );
};

// --- Main Component ---

const YaldaCampaign: React.FC = () => {
  const particles: ParticleProps[] = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      type: Math.random() > 0.7 ? 'money' : 'snow'
    }));
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-8">
      
      {/* --- Background Layers --- */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,0,0,0.6)_0%,rgba(5,5,5,1)_70%)]" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute ${p.type === 'money' ? 'text-green-500/40' : 'text-white/20'}`}
            style={{ 
              left: `${p.x}%`, 
              top: -20,
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ 
              y: '110vh', 
              opacity: [0, 1, 1, 0],
              rotate: p.type === 'money' ? 360 : 0
            }}
            transition={{ 
              duration: p.duration, 
              delay: p.delay, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {p.type === 'money' ? <Coins size={12 + Math.random() * 10} /> : <div className="w-1 h-1 rounded-full bg-white blur-[1px]" />}
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

        {/* 2. Visuals (Scaled Down ~25%) */}
        {/* Reduced wrapper height to compensate for scale */}
        <div className="relative w-full max-w-3xl h-[260px] md:h-[340px] flex items-center justify-center">
           {/* Scale Wrapper */}
           <div className="w-full h-full flex items-center justify-center scale-75 origin-center">
             
              {/* Background Glows for Art */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-red-900/20 via-transparent to-green-900/20 blur-3xl rounded-full" />

              <div className="relative w-full h-full flex items-center justify-center">
                {/* Pomegranate */}
                <div className="absolute top-0 right-10 md:right-32 z-0 scale-75 md:scale-90 opacity-80 md:opacity-100">
                   <CyberPomegranate />
                </div>

                {/* Watermelon */}
                <div className="absolute bottom-10 left-10 md:left-32 z-0 scale-75 md:scale-90 opacity-80 md:opacity-100">
                   <CyberWatermelon />
                </div>

                {/* Hero Card */}
                <div className="z-20 transform hover:scale-105 transition-transform duration-500 mt-8">
                   <GlassCard />
                </div>
              </div>

           </div>
        </div>

        {/* 3. CTA Button */}
        <motion.div 
           className="w-full flex justify-center"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5 }}
        >
           <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full md:w-auto px-12 py-5 bg-gradient-to-r from-red-700 to-red-600 rounded-xl font-bold text-xl text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] overflow-hidden flex items-center justify-center gap-3 transition-all"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
             <Wallet className="w-6 h-6" />
             <span>ثبت نام و دریافت اعتبار</span>
             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
           </motion.button>
        </motion.div>

        {/* 4. Description */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 leading-relaxed dir-rtl text-center max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          این اعتبار <span className="text-white font-bold border-b border-green-500 text-2xl mx-1">۱۰۰ میلیونی</span> برای هر نفر میتونه جداگانه درخواست بده. قرعه‌کشی در کار نیست، اعتبارت آماده‌ست.
        </motion.p>

        {/* 5. Trust Badges (Icon Box) */}
        <motion.div 
          className="w-full max-w-lg"
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
          className="flex gap-4 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
           <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-pink-600/20 hover:border-pink-500 hover:text-pink-400 transition-all group">
             <Instagram size={20} />
             <span className="font-medium text-sm">Instagram</span>
           </a>
           
           <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-400/20 hover:border-blue-400 hover:text-blue-300 transition-all group">
             {/* X Logo simulation using svg */}
             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
             </svg>
             <span className="font-medium text-sm">Saraffex X</span>
           </a>
        </motion.div>
        
        <div className="flex items-center gap-2 text-xs text-white/40 mt-4">
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