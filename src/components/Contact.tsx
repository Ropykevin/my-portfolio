import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';
import { SectionTitle } from './ui/SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <SectionTitle>Get in Touch</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              Whether you're interested in working together, need training services,
              or just want to say hello, I'd love to hear from you.
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:ropykevin@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-[#ff6700]"
              >
                <Mail className="h-5 w-5" />
                <span>ropykevin@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/kevin-ropy-154238128/" 
                className="flex items-center space-x-3 text-gray-300 hover:text-[#ff6700]"
              >
                <Linkedin className="h-5 w-5" />
                <span>kevin ropy</span>
              </a>
              <a 
                href="https://github.com/ropykevin" target='blank'
                className="flex items-center space-x-3 text-gray-300 hover:text-[#ff6700]"
              >
                <Github className="h-5 w-5" />
                <span>Ropy Kevin</span>
              </a>
            </div>
          </div>
          <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
            <Input type="hidden" name="access_key" value="1de59aea-e71d-49a5-be32-f0fb019405bb"/>

            <Input 
              label="Name"
              type="text"
              name='Your name'
              placeholder="Your name"
            />
            <Input 
              label="Email"
              type="email"
              name='email'
              placeholder="your.email@example.com"
            />
            <TextArea 
              label="Message"
              rows={4}
              placeholder="Your message"
              name='message'
            />
            <Input type="hidden" name="redirect" value="https://web3forms.com/success"/>

            <Button type="submit" className="w-full">
              <span>Send Message</span>
              <Send className="h-4 w-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;