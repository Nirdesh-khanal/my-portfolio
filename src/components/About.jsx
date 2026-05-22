import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-2">
        <div className="relative">
          <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base font-light">
            <p>
              I am a passionate{" "}
              <span className="text-white font-normal">Full-Stack Developer</span>{" "}
              dedicated to turning complex problems into elegant, user-centric
              solutions. With a strong foundation in{" "}
              <span className="text-purple-400 font-normal">React</span> and{" "}
              <span className="text-cyan-400 font-normal">Django REST Framework</span>, I bridge the gap
              between robust backend architecture and intuitive frontend
              experiences.
            </p>
            <p>
              I’m driven by curiosity and the challenge of solving problems.
              I’m always learning, whether it’s picking up a new framework,
              understanding system architecture, or just figuring out why
              something broke.
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-6">
              <div>
                  <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-1.5">Location</h4>
                  <p className="text-slate-500 text-xs">Kathmandu, Nepal</p>
              </div>
              <div>
                  <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-1.5">Experience</h4>
                  <p className="text-slate-500 text-xs">1+ Years Professional</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square max-w-xs md:max-w-sm mx-auto lg:ml-auto w-full">
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10 border border-white/5" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <div className="w-32 h-32 rounded-full border border-purple-500/20 overflow-hidden mb-6 bg-slate-900">
                  <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nirdesh" 
                      alt="Nirdesh Khanal" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                  />
             </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-1 uppercase tracking-tighter">
                01+
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-400">
                Years of Code
              </div>
            </div>
          </div>
          {/* Corner Decorative Elements */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-purple-500/50" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyan-500/50" />
        </div>
      </div>
    </Section>
  );
};

export default About;
