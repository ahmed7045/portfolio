import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, Phone, MapPin, Download, Code, Database, Cloud, Wrench } from 'lucide-react';

function App() {
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white border-b border-gray-300 shadow-md z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">M.Ahmed</h1> {/* TODO: Replace with your name */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-black transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-black transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-black transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-black transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-black transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">M.Ahmed</h1> {/* TODO: Replace with your name */}
          <p className="text-xl text-black/80 mb-6">Backend Developer</p>
          <p className="text-lg text-black/70 mb-8 max-w-2xl">
            Passionate backend developer specializing in building scalable APIs, optimizing databases, and architecting robust infrastructure.
            With expertise in modern frameworks and cloud technologies, I create efficient solutions that power seamless user experiences. {/* TODO: Replace with your bio */}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => scrollToSection('projects')} className="bg-black text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors">
              View Projects
            </button>
            <a 
              href="/M.Ahmed_Resume.pdf" 
              download 
              className="border border-black text-black px-6 py-3 rounded hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Download className="inline mr-2" size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" ref={skillsRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 drop-shadow-md">Skills</h2>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Languages */}
            <div>
              <div className="flex items-center mb-4">
                <Code className="mr-2 text-black" size={24} />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm text-black/80">JavaScript</span>
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm text-black/80">Python</span>
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm text-black/80">SQL</span>
              </div>
            </div>
            {/* Frameworks */}
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="mr-2 text-black" size={24} />
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">Node.js</span>
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">Nest.js</span>
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">Express</span>
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">REST API</span>
              </div>
            </div>
            {/* Databases */}
            <div>
              <div className="flex items-center mb-4">
                <Database className="mr-2 text-black" size={24} />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">MySQL</span>
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">MongoDB</span>
              </div>
            </div>
            {/* DevOps & Tools */}
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="mr-2 text-black" size={24} />
                <h3 className="text-xl font-semibold">DevOps & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">Git</span>
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">Docker</span>
              </div>
            </div>
            {/* Cloud */}
            <div>
              <div className="flex items-center mb-4">
                <Cloud className="mr-2 text-black" size={24} />
                <h3 className="text-xl font-semibold">Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">AWS</span>
                <span className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 drop-shadow-md">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white border border-black/10 rounded p-6 hover:border-black transition-colors">
              <h3 className="text-xl font-semibold mb-2">Transaction Reconciliation System</h3>
              <p className="text-black/70 mb-4">Built backend APIs for a transaction reconciliation system processing 25K transactions in under a second with high accuracy and reliability.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm text-black/80">NestJS</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm text-black/80">MySQL</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm text-black/80">TypeScript</span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white border border-black/10 rounded p-6 hover:border-black transition-colors">
              <h3 className="text-xl font-semibold mb-2">YouTube-Inspired REST API</h3>
              <p className="text-black/70 mb-4">Built a YouTube-inspired REST API supporting video uploads, JWT authentication, and cloud media storage with secure user management.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Express</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">MongoDB</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Mongoose</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Cloudinary</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">JWT</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/ahmed7045/Video_tube" target="_blank" rel="noopener noreferrer" className="flex items-center text-black/80 hover:text-black">
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white border border-black/10 rounded p-6 hover:border-black transition-colors">
              <h3 className="text-xl font-semibold mb-2">Authentication System</h3>
              <p className="text-black/70 mb-4">Comprehensive authentication system with secure user management, login/logout functionality, and access control features.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">TypeScript</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">Node.js</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/ahmed7045/Auth-project" target="_blank" rel="noopener noreferrer" className="flex items-center text-black/80 hover:text-black">
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Timeline */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 drop-shadow-md">Experience</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300"></div>
            <div className="space-y-8">
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-3 h-3 bg-black rounded-full"></div>
                <h3 className="text-xl font-semibold">Backend Developer</h3>
                <p className="text-black/70 mb-2">Digital Team Pvt. Ltd. | Jul 2025 - Present</p>
                <p className="text-black/70 text-sm mb-2">Karachi Division, Sindh, Pakistan · Full-time</p>
                <ul className="text-black/70 space-y-1">
                  <li>• Develop and maintain backend functionality for the reconciliation project</li>
                  <li>• Handle large datasets efficiently and ensure smooth processing</li>
                  <li>• Work on system reliability, performance, and data accuracy</li>
                  <li>• Collaborate on backend architecture and overall project workflow</li>
                </ul>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-3 h-3 bg-black rounded-full"></div>
                <h3 className="text-xl font-semibold">Backend Development Intern - Recon System</h3>
                <p className="text-black/70 mb-2">Digital Team Pvt. Ltd. | Jul 2025 - Sep 2025</p>
                <p className="text-black/70 text-sm mb-2">Internship · 3 mos</p>
                <ul className="text-black/70 space-y-1">
                  <li>• Improved performance with batch processing for large transactions</li>
                  <li>• Resolved SQL parameter limit issues for stable processing</li>
                  <li>• Enhanced data matching accuracy using optimized queries</li>
                  <li>• Contributed to a reliable, scalable NestJS & MS SQL system</li>
                </ul>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-3 h-3 bg-black rounded-full"></div>
                <h3 className="text-xl font-semibold">Backend Developer Internee</h3>
                <p className="text-black/70 mb-2">The Marksman Arena | Feb 2025 - Apr 2025</p>
                <p className="text-black/70 text-sm mb-2">Karachi Division, Sindh, Pakistan · Internship · 3 mos</p>
                <ul className="text-black/70 space-y-1">
                  <li>• Gained hands-on experience in back-end web development</li>
                  <li>• Worked with Node.js and related technologies</li>
                  <li>• Honed backend skills and best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 drop-shadow-md">Contact</h2>
          <p className="text-black/70 mb-8">Let's connect! Find me on these platforms:</p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.linkedin.com/in/muhammad-ahmed-82b11b241"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/ahmed7045"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://wa.me/923212508338"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-black/10">
        <div className="max-w-6xl mx-auto text-center text-black/70">
          <p>&copy; 2024 M.Ahmed. All rights reserved.</p> {/* TODO: Replace with your name */}
        </div>
      </footer>
    </div>
  );
}

export default App;
