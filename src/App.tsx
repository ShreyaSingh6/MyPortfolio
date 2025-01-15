import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Blocks, User2, ArrowRight, Sparkles, FileDown } from 'lucide-react';

function App() {
  const projects = [{
      title: "Portfolio (this)",
      description: "A visually appealing portfolio website showcasing my skills and projects with an elegant design.",
      image: "https://img.freepik.com/premium-vector/portfolio-creative-text-banner-with-black-background-illustration_755074-98.jpg?w=1060",
      tags: ["React", "CSS","Javascript", "Bolt"],
      link: "https://github.com/ShreyaSingh6/MyPortfolio"
    },{
      title: "Face Emotion Detector",
      description: "Recognizes the human face and detects their emotion.",
      image: "https://nevonprojects.com/wp-content/uploads/2021/05/nevon-face-emotion-detection-python-wt.jpg",
      tags: ["Python", "Open-CV", "Tensorflow"],
      link: "https://github.com/ShreyaSingh6/FaceEmotionDetector"
    },
    {
      title: "AssignEase",
      description: "An online assignment submission portal with chatbot",
      image: "https://media.licdn.com/dms/image/v2/D5612AQE5yxYksB44ew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727873019548?e=2147483647&v=beta&t=A0y0c26W7iR4RScu_koFl6klgSdItNCzOhe4O84-uCA",
      tags: ["HTML", "CSS", "JS", "Python-Django"],
      link: "https://github.com/ShreyaSingh6/AssignEase"
    },
    {
      title: "ArtBlend: Neural Style Transfer",
      description: "It uses Neural Style Transfer to create stunning artistic images by combining the content of one image with the style of another using PyTorch.",
      image: "https://cdn.prod.website-files.com/645cec60ffb18d5ebb37da4b/66f1256e30a3a2b76da354eb_655e1faa338fad19ee0c2b64_studio_output.jpeg",
      tags: ["Python", "Matplotlib", "PyTorch", "Numpy"],
      link: "https://github.com/ShreyaSingh6/ArtBlend-Neural-Style-Transfer"
    },
    ];

  const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1TL3mk1motLNnACZ4aQRpBnt_wMLs3m8t";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Shreya_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),rgba(0,0,0,0.9))]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center text-center">
          <div className="space-y-6 transform hover:translate-z-12 transition-transform duration-500">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm transform hover:scale-105 transition-all">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-sm">Available for freelance work</span>
            </div>
            <div>
              <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-4">
                Shreya Singh
              </h1>
              <div className="flex justify-center">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  Full Stack Developer
                </span>
              </div>
              <p className="text-xl text-gray-400 max-w-2xl mt-6">
                Building digital experiences that combine creativity with technical excellence. 
                Specializing in modern web technologies and interactive designs.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-6 pt-4">
              {[
                { icon: Github, href: "https://github.com/ShreyaSingh6", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shreya-singh-740831259", label: "LinkedIn" },
                { icon: Mail, href: "mailto:shreyasingh6515@gmail.com", label: "Email" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="text-gray-400 hover:text-white transform hover:scale-110 hover:rotate-12 transition-all"
                  style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                >
                  <item.icon size={24} className="transform hover:translate-z-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Resume Section */}
      <section className="py-16 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <button
              onClick={handleResumeDownload}
              className="group flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transform hover:translate-y-[-4px] transition-all shadow-lg hover:shadow-purple-500/25"
            >
              <FileDown className="group-hover:animate-bounce" size={24} />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <Terminal className="text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">PROJECTS</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-neutral-800 rounded-xl overflow-hidden transform hover:translate-y-[-8px] hover:rotate-1 transition-all duration-300"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 flex items-center gap-1 group/link"
                    >
                      View Project
                      <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-16">
            <Blocks className="text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">SKILLS & EXPERTISE</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                skills: ["React Js", "HTML", "CSS", "Three.js"]
              },
              {
                category: "Backend",
                skills: ["Node.js", "Python", "Django"]
              },
              {
                category: "Tools & Others",
                skills: ["MySQL", "Git", "GitHub", "Canva"]
              }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 transform hover:translate-y-[-8px] transition-all duration-300"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transform hover:translate-x-2 transition-all"
                    >
                      <div className="w-1 h-1 bg-purple-400 rounded-full" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <User2 className="text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">Let's Connect</h2>
          </div>
          <p className="text-gray-400 mb-12 text-lg">
            Interested in working together? Let's discuss your project and make something incredible.
          </p>
          <a
            href="mailto:shreyasingh6515@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transform hover:translate-y-[-4px] hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/25"
          >
            <Mail size={20} />
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 All rights reserved.</p>
            <div className="flex items-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/ShreyaSingh6" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shreya-singh-740831259" },
                { icon: Mail, href: "mailto:shreyasingh6515@gmail.com" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-white transform hover:scale-110 hover:rotate-12 transition-all"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
