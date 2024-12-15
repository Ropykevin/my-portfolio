import React from 'react';
import { Code2, Database, Users, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              With over 7 years of experience in software development and training, I specialize in
              building robust applications that solve real-world problems. My expertise spans
              across modern technologies and frameworks, with a strong focus on creating
              scalable, user-centric solutions.
            </p>
            <p className="text-lg text-gray-700">
              As a software development trainer, I'm passionate about sharing knowledge and
              helping others grow in their tech careers. I believe in writing clean, maintainable
              code and implementing best practices that stand the test of time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Code2 className="h-8 w-8 text-[#ff6700]" />,
                title: 'Full Stack Development',
                description: 'Building scalable applications'
              },
              {
                icon: <Database className="h-8 w-8 text-[#ff6700]" />,
                title: 'Database Design',
                description: 'Optimized data architecture'
              },
              {
                icon: <Users className="h-8 w-8 text-[#ff6700]" />,
                title: 'Team Leadership',
                description: 'Technical team management'
              },
              {
                icon: <BookOpen className="h-8 w-8 text-[#ff6700]" />,
                title: 'Training',
                description: 'Developer education & mentoring'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                {item.icon}
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;