import React from 'react';

function About() {
  const experiences = [
    {
      year: '2023 - Present',
      role: 'Senior Full Stack Developer',
      company: 'TechFlow Solutions',
      description: 'Leading development of enterprise applications using React, Node.js, and cloud technologies.'
    },
    {
      year: '2021 - 2023',
      role: 'Full Stack Developer',
      company: 'InnovateTech Studio',
      description: 'Built scalable web applications, improved performance by 45%, and mentored junior developers.'
    },
    {
      year: '2019 - 2021',
      role: 'Frontend Developer',
      company: 'Digital Creative Agency',
      description: 'Created responsive user interfaces and collaborated with design teams to deliver exceptional UX.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Thena_dev</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
              Creative Developer & Tech Enthusiast
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated full-stack developer with over 4 years of experience crafting 
              digital solutions that merge beautiful design with robust functionality. 
              My journey in technology began with curiosity about how applications work and 
              evolved into a passion for building systems that create real value.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring emerging technologies, contributing to 
              open-source projects, or sharing knowledge through technical blogs and community events. 
              I believe in continuous learning and staying ahead of industry trends.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">60+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-700">
                <div className="text-3xl font-bold text-pink-400 mb-2">25+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-100 mb-8">Experience</h3>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l border-gray-600 last:border-l-0">
                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                
                <div className="bg-gray-900/30 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="text-sm text-blue-400 font-semibold mb-1">{exp.year}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{exp.role}</h4>
                  <div className="text-purple-400 font-medium mb-3">{exp.company}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;