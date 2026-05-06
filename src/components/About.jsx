import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-medium">
            <p>
              I am a passionate{" "}
              <span className="text-white">Full-Stack Developer</span>{" "}
              dedicated to turning complex problems into elegant, user-centric
              solutions. With a strong foundation in{" "}
              <span className="text-purple-400">React</span> and{" "}
              <span className="text-cyan-400">Django REST Framework</span>, I bridge the gap
              between robust backend architecture and intuitive frontend
              experiences.
            </p>
            <p>
              I’m driven by curiosity and the challenge of solving problems.
              I’m always learning, whether it’s picking up a new framework,
              understanding system architecture, or just figuring out why
              something broke.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">Location</h4>
                  <p className="text-slate-500 text-sm">Kathmandu, Nepal</p>
              </div>
              <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">Experience</h4>
                  <p className="text-slate-500 text-sm">1+ Years Professional</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square max-w-md mx-auto lg:ml-auto w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <div className="w-48 h-48 rounded-full border-2 border-purple-500/30 overflow-hidden mb-8 bg-slate-900">
                  <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nirdesh" 
                      alt="Nirdesh Khanal" 
                      className="w-full h-full object-cover"
                  />
             </div>
            <div className="text-center">
              <div className="text-7xl font-bold text-white mb-2 uppercase tracking-tighter">
                01+
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                Years of Code
              </div>
            </div>
          </div>
          {/* Corner Decorative Elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500" />
        </div>
      </div>
    </Section>
  );
};

export default About;
