import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Freelance Marketplace',
      description: 'A platform connecting freelancers with employers, featuring real-time messaging and secure payments.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Flask', 'Vue.js', 'PostgreSQL']
    },
    {
      title: 'Job Listings App',
      description: 'Efficient job posting and search platform with advanced filtering and recommendation system.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      tags: ['FastAPI', 'React', 'Redis', 'ElasticSearch']
    },
    {
      title: 'Attendance System',
      description: 'Real-time attendance tracking system with facial recognition and access controls.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'OpenCV', 'SQLite', 'Flask']
    },
    {
      title: 'Inventory Management',
      description: 'CRUD operations with analytics visualization for inventory tracking.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Vue.js', 'D3.js', 'PostgreSQL']
    },
    {
      title: 'Tech Company Website',
      description: 'Modern corporate website with CMS integration and performance optimization.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
    },
    {
      title: 'Online Learning System',
      description: 'Modern learning system with analytics visualization and study Tracking.',
      image: 'https://media.istockphoto.com/id/1059510610/vector/it-communication-e-learning-internet-network-as-knowledge-base.jpg?s=612x612&w=0&k=20&c=QEyHx6JnZleLmW9lYgpzvLv765rizr__5zwwKylo300=',
      tags: ['Python', 'Flask', 'Vue.js', 'PostgreSQL',]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href="https://github.com/Ropykevin" className="text-white hover:text-[#ff6700]">
                    <Github className="h-6 w-6" target='_blank' />
                  </a>
                  <a href="#" className="text-white hover:text-[#ff6700]">
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;