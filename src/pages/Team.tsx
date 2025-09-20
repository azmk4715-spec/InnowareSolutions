import { Mail, Linkedin, Github, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import LinkedInProfileImage from "@/components/LinkedInProfileImage";

const Team = () => {
  const navigate = useNavigate();
  
  const teamMembers = [
    {
      name: "Abdul Rahman Asmatullah Khan",
      studentId: "SUKD2302094",
      role: "Lead Developer & Project Manager",
      email: "SUKD2302094@segi4u.my",
      linkedin: "https://www.linkedin.com/in/abdul-rahman-asmatullah-khan-7611a32b4/",
      expertise: ["Full-Stack Development", "Project Management", "Cloud Architecture"],
      bio: "Passionate about creating scalable solutions and leading development teams to deliver exceptional results.",
    },
    {
      name: "Alamin Mohaddis Hasan",
      studentId: "SUKD2302289", 
      role: "Senior Software Engineer",
      email: "SUKD2302289@segi4u.my",
      expertise: ["Backend Development", "Database Design", "API Architecture"],
      bio: "Specialized in building robust backend systems and optimizing database performance for enterprise applications.",
    },
    {
      name: "Rabeea A. R. Al Najjar",
      studentId: "SUKD2202388",
      role: "Security Operations Center Lead",
      email: "SUKD2202388@segi4u.my",
      linkedin: "https://www.linkedin.com/in/rabeea-alnajjar-686ba62b6/",
      expertise: ["Cybersecurity", "SOC Operations", "Threat Detection", "Incident Response"],
      bio: "Dedicated security professional leading SOC operations and ensuring robust cybersecurity posture for our clients.",
    },
    {
      name: "Abdul Rahman Aloush",
      studentId: "SUKD2301786",
      role: "Cloud Solutions Architect",
      email: "SUKD2301786@segi4u.my",
      expertise: ["AWS/Azure", "DevOps", "Infrastructure as Code", "Cloud Architecture"],
      bio: "Expert in designing and implementing scalable cloud infrastructure solutions for modern businesses.",
    },
    {
      name: "Tan Jun Jie",
      studentId: "SUKD2401217",
      role: "IT Consultant & Systems Analyst",
      email: "SUKD2401217@segi4u.my",
      linkedin: "https://www.linkedin.com/in/tan-jun-jie-105214296/",
      expertise: ["Business Analysis", "System Integration", "Digital Transformation"],
      bio: "Strategic thinker who bridges the gap between business requirements and technical solutions.",
    },
  ];

  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-purple-100 text-purple-800", 
    "bg-green-100 text-green-800",
    "bg-orange-100 text-orange-800",
    "bg-pink-100 text-pink-800"
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of passionate technologists brings together expertise 
            in software development, cloud computing, and digital transformation 
            to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="team-card service-card p-6">
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <LinkedInProfileImage
                  linkedinUrl={member.linkedin || ""}
                  name={member.name}
                  className="w-24 h-24 rounded-full object-cover"
                  fallbackClassName="w-24 h-24 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center text-white text-2xl font-bold"
                />
              </div>
              
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.studentId}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${colors[skillIndex % colors.length]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div className="flex justify-center space-x-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex items-center space-x-1"
                  onClick={() => window.open(`mailto:${member.email}`)}
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Email</span>
                </Button>
                {member.linkedin && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex items-center space-x-1"
                    onClick={() => window.open(member.linkedin, '_blank', 'noopener,noreferrer')}
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Why Our <span className="gradient-text">Team</span> Excels
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Diverse Expertise</h4>
              <p className="text-sm text-muted-foreground">
                Our team combines complementary skills across all aspects of modern IT solutions
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Github className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Collaborative Approach</h4>
              <p className="text-sm text-muted-foreground">
                We work together seamlessly to deliver integrated solutions that exceed expectations
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">
                We stay current with the latest technologies and best practices in the industry
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your project and discover how our team 
            can help bring your vision to life.
          </p>
          <Button 
            size="lg" 
            className="btn-hero"
            onClick={() => navigate('/project-inquiry')}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Team;