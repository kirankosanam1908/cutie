import React, { useState, useEffect, useRef } from 'react';
import { Heart, Clock, Star, MessageCircle, Gift, Phone, Sparkles, CalendarX, Music, Camera, Coffee, Moon, Sun } from 'lucide-react';

const HarshiniApology = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [particles, setParticles] = useState([]);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [showApology, setShowApology] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [glowingElements, setGlowingElements] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [starField, setStarField] = useState([]);
  const [soundWaves, setSoundWaves] = useState([]);
  const cardRef = useRef(null);

  const apologyText = "My heart aches knowing I've let you down...";
  
  // Enhanced typing effect
  useEffect(() => {
    if (currentSection === 0) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < apologyText.length) {
          setTypingText(apologyText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 80);
      return () => clearInterval(timer);
    }
  }, [currentSection]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Time updates
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Create starfield background
  useEffect(() => {
    const stars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      brightness: Math.random(),
      twinkleSpeed: Math.random() * 2 + 1
    }));
    setStarField(stars);
  }, []);

  // Enhanced magical floating particles
  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ['#ff6b9d', '#c44569', '#f8b500', '#e55039', '#8e44ad', '#3742fa', '#00d2d3', '#ff9ff3'];
      const shapes = ['circle', 'star', 'heart', 'diamond'];
      
      setParticles(prev => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 50,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 3,
          speed: Math.random() * 4 + 1,
          delay: Math.random() * 2,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          rotation: Math.random() * 360,
          pulse: Math.random() * 2 + 1
        }
      ]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Enhanced floating hearts with variety
  useEffect(() => {
    const heartInterval = setInterval(() => {
      const heartTypes = ['💖', '💕', '💗', '💝', '💘', '💞', '💓', '❤️'];
      setFloatingHearts(prev => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          delay: Math.random() * 3,
          size: Math.random() * 25 + 20,
          heart: heartTypes[Math.floor(Math.random() * heartTypes.length)],
          rotation: Math.random() * 360,
          drift: Math.random() * 20 - 10
        }
      ]);
    }, 1200);

    return () => clearInterval(heartInterval);
  }, []);

  // Sound wave effect
  useEffect(() => {
    const waveInterval = setInterval(() => {
      setSoundWaves(prev => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 0,
          maxSize: Math.random() * 200 + 100,
          opacity: 0.3
        }
      ]);
    }, 3000);

    return () => clearInterval(waveInterval);
  }, []);

  // Enhanced glowing orbs with movement
  useEffect(() => {
    const orbInterval = setInterval(() => {
      setGlowingElements(prev => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 150 + 75,
          opacity: Math.random() * 0.4 + 0.1,
          color: ['pink', 'purple', 'blue', 'cyan', 'yellow'][Math.floor(Math.random() * 5)],
          moveX: (Math.random() - 0.5) * 2,
          moveY: (Math.random() - 0.5) * 2
        }
      ]);
    }, 1500);

    return () => clearInterval(orbInterval);
  }, []);

  // Cleanup with better performance
  useEffect(() => {
    const cleanup = setTimeout(() => {
      setParticles(prev => prev.slice(-40));
      setFloatingHearts(prev => prev.slice(-15));
      setGlowingElements(prev => prev.slice(-8));
      setSoundWaves(prev => prev.slice(-5));
    }, 10000);
    return () => clearTimeout(cleanup);
  }, [particles, floatingHearts, glowingElements, soundWaves]);

  const sections = [
    {
      title: "I'm Sorry, My Love",
      subtitle: "For Not Cherishing Every Moment With You",
      content: "My precious Harshini, I've been so lost in the chaos of life that I forgot to appreciate the most beautiful part of it - YOU. Your daily message 'Arey' isn't just word, it's your heart reaching out to mine.",
      icon: <Heart className="w-12 h-12" />,
      gradient: "from-red-500 via-pink-500 to-rose-400",
      bgGlow: "bg-red-500/20",
      bgColor: "bg-red-500/10"
    },
    {
      title: "Time Slipped Away",
      subtitle: "But My Love Never Did",
      content: "Every second spent away from giving you my full attention was a second wasted. Those precious moments - your sleepy voice in the morning, your excited stories, your gentle concern - I should have treasured them all.",
      icon: <Clock className="w-12 h-12" />,
      gradient: "from-purple-600 via-blue-500 to-indigo-600",
      bgGlow: "bg-purple-500/20",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "You're My Universe",
      subtitle: "My Beautiful Lady, Harssss",
      content: "You light up my world in ways I never knew were possible. Your smile is my sunrise, your laugh is my favorite song, and your love is my safe heaven. I'm sorry I made you feel anything less than absolutely cherished.",
      icon: <Star className="w-12 h-12" />,
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgGlow: "bg-orange-500/20",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "My Sacred Promise",
      subtitle: "From This Moment Forward",
      content: "I vow to love you louder, hold you closer, and never again make you wonder if you're my priority. You are my heart, my peace, my forever person. This isn't just an apology - it's my commitment to loving you the way you deserve.",
      icon: <Gift className="w-12 h-12" />,
      gradient: "from-green-400 via-teal-500 to-blue-500",
      bgGlow: "bg-teal-500/20",
      bgColor: "bg-teal-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      
      {/* Animated Starfield Background */}
      <div className="absolute inset-0">
        {starField.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.brightness,
              animationDuration: `${star.twinkleSpeed}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.5)`
            }}
          />
        ))}
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Glowing Orbs */}
        {glowingElements.map(orb => (
          <div
            key={orb.id}
            className="absolute rounded-full blur-3xl animate-float-slow"
            style={{
              left: `${orb.x + Math.sin(Date.now() * 0.001) * orb.moveX}%`,
              top: `${orb.y + Math.cos(Date.now() * 0.001) * orb.moveY}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: `radial-gradient(circle, ${
                orb.color === 'pink' ? `rgba(255,107,157,${orb.opacity})` :
                orb.color === 'purple' ? `rgba(147,51,234,${orb.opacity})` :
                orb.color === 'blue' ? `rgba(59,130,246,${orb.opacity})` :
                orb.color === 'cyan' ? `rgba(6,182,212,${orb.opacity})` :
                `rgba(250,204,21,${orb.opacity})`
              } 0%, transparent 70%)`,
              animationDuration: '6s'
            }}
          />
        ))}

        {/* Sound Wave Effects */}
        {soundWaves.map(wave => (
          <div
            key={wave.id}
            className="absolute rounded-full border-2 border-pink-400/20 animate-ping"
            style={{
              left: `${wave.x}%`,
              top: `${wave.y}%`,
              width: `${wave.size}px`,
              height: `${wave.size}px`,
              maxWidth: `${wave.maxSize}px`,
              maxHeight: `${wave.maxSize}px`,
              opacity: wave.opacity,
              animationDuration: '3s'
            }}
          />
        ))}

        {/* Enhanced Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute animate-float-particle ${
              particle.shape === 'star' ? 'star-shape' :
              particle.shape === 'heart' ? 'heart-shape' :
              particle.shape === 'diamond' ? 'diamond-shape' : 'rounded-full'
            }`}
            style={{
              left: `${particle.x}px`,
              bottom: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.shape === 'circle' ? particle.color : 'transparent',
              color: particle.color,
              transform: `rotate(${particle.rotation}deg)`,
              animationDelay: `${particle.delay}s`,
              boxShadow: `0 0 20px ${particle.color}`,
              fontSize: particle.shape === 'heart' ? `${particle.size}px` : 'inherit'
            }}
          >
            {particle.shape === 'star' && '✨'}
            {particle.shape === 'heart' && '💖'}
            {particle.shape === 'diamond' && '💎'}
          </div>
        ))}

        {/* Multi-layered Aurora Effect */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-red-400/30 animate-aurora"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-blue-400/20 via-cyan-400/20 to-green-400/20 animate-aurora-reverse"></div>
        </div>
      </div>

      {/* Enhanced Floating Hearts */}
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-heart-rise opacity-70 pointer-events-none"
          style={{
            left: `${heart.x + heart.drift}%`,
            bottom: '-60px',
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            transform: `rotate(${heart.rotation}deg)`,
            filter: 'drop-shadow(0 0 10px rgba(255,182,193,0.6))'
          }}
        >
          {heart.heart}
        </div>
      ))}

      {/* Mouse follower effect */}
      <div 
        className="fixed pointer-events-none z-50 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-sm opacity-60 animate-pulse"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transition: 'all 0.1s ease-out'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Enhanced Magical Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-3xl rounded-full px-10 py-6 mb-8 border border-pink-300/30 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105">
            <Sparkles className="w-10 h-10 text-yellow-300 animate-spin" />
            <span className="text-white font-bold text-2xl bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              My Heart's Confession
            </span>
            <Sparkles className="w-10 h-10 text-yellow-300 animate-spin" style={{animationDirection: 'reverse'}} />
          </div>
          
          {/* Live time display */}
          <div className="text-white/60 text-sm mb-4 font-mono">
            Written with love at {currentTime.toLocaleTimeString()}
          </div>
        </div>

        {/* Enhanced Main Apology Card */}
        <div className="max-w-7xl mx-auto">
          <div 
            ref={cardRef}
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl rounded-3xl p-8 md:p-20 shadow-2xl border border-white/20 overflow-hidden hover:shadow-pink-500/20 transition-all duration-700 hover:scale-[1.02]"
            onMouseEnter={() => setIsHoveringCard(true)}
            onMouseLeave={() => setIsHoveringCard(false)}
          >
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/60 via-purple-500/60 to-blue-500/60 rounded-3xl blur-sm opacity-40 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 animate-rainbow"></div>
            
            {/* Interactive floating decorations */}
            <div className={`absolute -top-8 -right-8 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl transition-all duration-500 ${isHoveringCard ? 'animate-bounce scale-125' : 'animate-pulse'}`}></div>
            <div className={`absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl transition-all duration-500 ${isHoveringCard ? 'animate-bounce scale-125' : 'animate-pulse'}`}></div>
            <div className={`absolute top-1/2 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl transition-all duration-500 ${isHoveringCard ? 'animate-spin scale-110' : 'animate-pulse'}`}></div>

            <div className="relative z-10">
              
              {/* Enhanced Section Content */}
              <div className="text-center mb-16">
                <div className={`inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br ${sections[currentSection].gradient} rounded-full mb-8 shadow-2xl animate-float relative hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white drop-shadow-lg transform hover:scale-110 transition-transform duration-200">
                    {sections[currentSection].icon}
                  </div>
                  <div className={`absolute inset-0 ${sections[currentSection].bgGlow} rounded-full blur-xl animate-pulse`}></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-spin opacity-50"></div>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent mb-6 animate-slide-up hover:scale-105 transition-transform duration-300 cursor-default">
                  {sections[currentSection].title}
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-pink-200 mb-10 font-medium animate-fade-in-delay italic">
                  {sections[currentSection].subtitle}
                </h2>
                
                <div className="max-w-5xl mx-auto">
                  {currentSection === 0 ? (
                    <div className="space-y-6">
                      <p className="text-2xl md:text-3xl text-white/95 leading-relaxed">
                        <span className="text-3xl md:text-4xl font-bold text-red-300 block mb-6 animate-typing border-r-4 border-red-300">
                          {typingText}
                        </span>
                      </p>
                      <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in-slow">
                        {sections[currentSection].content}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in hover:text-white transition-colors duration-300">
                      {sections[currentSection].content}
                    </p>
                  )}
                </div>
              </div>

              {/* Beautiful Enhanced Progress Bar */}
              <div className="flex justify-center gap-6 mb-16">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`relative transition-all duration-700 group ${
                      currentSection === index 
                        ? 'w-20 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg shadow-pink-500/40 hover:shadow-pink-500/60' 
                        : 'w-8 h-8 bg-white/20 rounded-full hover:bg-white/40 hover:scale-150 hover:shadow-lg hover:shadow-white/30'
                    }`}
                  >
                    {currentSection === index && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-60 animate-pulse"></div>
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      </>
                    )}
                  </button>
                ))}
              </div>

              {/* Enhanced Action Buttons */}
              <div className="text-center space-y-10">
                <button
                  onClick={() => setShowApology(!showApology)}
                  className="group relative bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white px-16 py-8 rounded-full font-bold text-2xl shadow-2xl hover:shadow-pink-500/30 transform hover:scale-110 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center gap-4">
                    <MessageCircle className="w-8 h-8 animate-bounce" />
                    {showApology ? 'Hide My Heart\'s Words 💖' : 'Read My Heart\'s Words 💖'}
                    <Heart className="w-8 h-8 animate-pulse fill-current" />
                  </span>
                </button>

                {/* Enhanced Navigation */}
                <div className="flex justify-center gap-8">
                  <button
                    onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                    disabled={currentSection === 0}
                    className="group px-10 py-5 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/25 hover:to-white/15 disabled:opacity-30 disabled:cursor-not-allowed rounded-full text-white font-medium transition-all duration-300 backdrop-blur-xl border border-white/20 hover:border-white/40 hover:scale-105 disabled:hover:scale-100"
                  >
                    <span className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center group-hover:animate-bounce">
                        ←
                      </div>
                      Previous
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                    disabled={currentSection === sections.length - 1}
                    className="group px-10 py-5 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/25 hover:to-white/15 disabled:opacity-30 disabled:cursor-not-allowed rounded-full text-white font-medium transition-all duration-300 backdrop-blur-xl border border-white/20 hover:border-white/40 hover:scale-105 disabled:hover:scale-100"
                  >
                    <span className="flex items-center gap-3">
                      Next
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center group-hover:animate-bounce">
                        →
                      </div>
                    </span>
                  </button>
                </div>
              </div>

              {/* Enhanced Full Apology Message */}
              {showApology && (
                <div className="mt-20 p-12 bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-indigo-500/15 rounded-3xl border border-pink-300/30 backdrop-blur-3xl animate-scale-in shadow-2xl hover:shadow-pink-500/20 transition-all duration-500">
                  <div className="text-center space-y-8">
                    <div className="flex justify-center items-center gap-4 mb-8">
                      <Heart className="w-12 h-12 text-pink-400 fill-current animate-bounce" />
                      <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                        My Sacred Promise
                      </h3>
                      <Heart className="w-12 h-12 text-pink-400 fill-current animate-bounce" style={{animationDelay: '0.5s'}} />
                    </div>
                    
                    <div className="text-white/95 text-xl md:text-2xl leading-relaxed space-y-8 max-w-5xl mx-auto">
  <p className="text-3xl font-semibold text-pink-300 animate-fade-in">My dearest Harssssss,</p>
  
  <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
    Two months ago, something beautiful began between us.
    And in just these 60 days, you’ve become not just someone I love… but someone my day doesn’t feel complete without.
  </p>
  
  <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
    From that peaceful beach morning…you standing in front of me, my hand on your waist, watching the sunrise…to that unforgettable bike ride….your warm hug, your soft cheek kiss….every moment with you feels like a scene from a love story I never want to end.
  </p>
  
  <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
    But beyond all that, what makes this love even more special are the late-night chats and calls.
    The way we talk until time is 4.00am But honestly, even those long hours feel too short when it’s with you.…
    The cute talks that make me smile like an child…
    And those hot talkssss… They increased my testosterone to its threshold…
  </p>
  
  <p className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
    And you know what I look forward to the most every day?<br />
    That one line I always ask you: 
    <em className="text-pink-300 text-2xl font-bold"> “Ela ayyindhi nee day?”</em><br />
    And the way you reply…telling me every little detail like it matters…<br />
    It’s the cutest, most comforting thing in the world.<br />
    That’s when I realize…you’ve become my daily routine, my peace, my person.
  </p>
  
  <p className="text-2xl font-bold text-yellow-300 animate-fade-in animate-pulse" style={{ animationDelay: '1s' }}>
    Your understanding, your caring heart, the trust you give, the way you just know how to be there…I’ve never known love like this before.
  </p>
  
  <p className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
    You’re so adorably cute, and at the same time, you’re so hot it’s honestly dangerous. 😍🔥<br />
    You’re my Harssss, my Bujjodaaa, my Banda, my Darling, my world.
  </p>
  
  <p className="animate-fade-in" style={{ animationDelay: '1.4s' }}>
    Thank you for being you.<br />
    Thank you for letting me be part of your life.<br />
    Here’s to many more months, years, and forever with you.<br />
    I love you, Maaa. With everything I have. 💖
  </p>
  
  <p className="text-3xl font-bold text-pink-300 animate-fade-in animate-bounce" style={{ animationDelay: '1.6s' }}>
    💖 Two Months of Us 💖
  </p>
</div>

                    
                    <div className="flex justify-center gap-4 mt-12 flex-wrap">
                      {[...Array(15)].map((_, i) => (
                        <Heart 
                          key={i} 
                          className="w-10 h-10 text-red-400 fill-current animate-pulse hover:scale-125 cursor-pointer transition-transform duration-200" 
                          style={{animationDelay: `${i * 0.1}s`}} 
                        />
                      ))}
                    </div>

                    {/* Musical notes animation */}
                    <div className="flex justify-center gap-6 mt-8">
                      {['🎵', '🎶', '💕', '🎵', '🎶'].map((note, i) => (
                        <span 
                          key={i} 
                          className="text-3xl animate-bounce opacity-70"
                          style={{animationDelay: `${i * 0.2}s`}}
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="text-center mt-20 space-y-8">
            <p className="text-white/80 text-3xl font-medium bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Forever yours, through every sunrise and sunset 💖
            </p>
            <div className="flex justify-center gap-4">
              {['💖', '💕', '💗', '💝', '💘', '💞', '💓'].map((heart, i) => (
                <span 
                  key={i}
                  className="text-4xl animate-bounce hover:scale-125 cursor-pointer transition-transform duration-200"
                  style={{animationDelay: `${i * 0.15}s`}}
                >
                  {heart}
                </span>
              ))}
            </div>
            <div className="text-white/60 text-lg italic">
              "In every moment, in every breath, it's always been you... 💫"
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes heart-rise {
          0% {
            transform: translateY(0px) scale(0.5) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
          100% {
            transform: translateY(-120vh) scale(0.3) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes aurora {
          0%, 100% {
            transform: translateX(-100%) scale(1);
          }
          50% {
            transform: translateX(100%) scale(1.1);
          }
        }
        
        @keyframes aurora-reverse {
          0%, 100% {
            transform: translateX(100%) scale(1);
          }
          50% {
            transform: translateX(-100%) scale(1.1);
          }
        }
        
        @keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-slow {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes typing {
          0%, 50% {
            border-color: #f87171;
          }
          51%, 100% {
            border-color: transparent;
          }
        }
        
        .animate-float-particle {
          animation: float-particle 10s linear infinite;
        }
        
        .animate-heart-rise {
          animation: heart-rise 8s linear infinite;
        }
        
        .animate-aurora {
          animation: aurora 25s linear infinite;
          background-size: 200% 200%;
        }
        
        .animate-aurora-reverse {
          animation: aurora-reverse 30s linear infinite;
          background-size: 200% 200%;
        }
        
        .animate-rainbow {
          animation: rainbow 3s linear infinite;
          background-size: 200% 200%;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 1.2s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1.5s ease-out;
        }
        
        .animate-fade-in-slow {
          animation: fade-in-slow 2.5s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 1s ease-out;
        }
        
        .animate-typing {
          animation: typing 1.5s infinite;
        }
        
        .animate-fade-in {
          animation: fade-in-slow 1s ease-out forwards;
          opacity: 0;
        }
        
        .star-shape::before {
          content: '✨';
        }
        
        .heart-shape::before {
          content: '💖';
        }
        
        .diamond-shape::before {
          content: '💎';
        }
      `}</style>
    </div>
  );
};

export default HarshiniApology;