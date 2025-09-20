import { Target, Eye, Award, Users, Code, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We leverage cutting-edge technologies to deliver innovative solutions that give our clients a competitive edge.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients as trusted partners, understanding their unique challenges and goals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "We think outside the box to find creative solutions that drive business growth and efficiency.",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">InnoWare Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a dynamic IT consulting firm dedicated to empowering small and medium 
            enterprises with affordable, innovative technology solutions that drive growth 
            and digital transformation.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="service-card p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To democratize access to advanced IT solutions by providing SMEs with 
              enterprise-grade technology services at affordable prices. We believe 
              that every business, regardless of size, deserves access to the tools 
              and expertise needed to thrive in the digital age.
            </p>
          </Card>

          <Card className="service-card p-8">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading IT consulting partner for SMEs across the region, 
              recognized for our innovative solutions, exceptional service, and 
              commitment to helping businesses achieve their digital transformation 
              goals while maintaining operational excellence.
            </p>
          </Card>
        </div>

        {/* Core Offerings */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core <span className="gradient-text">Offerings</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Solutions</h3>
              <p className="text-muted-foreground">
                Custom web and software development tailored to your business needs.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consulting</h3>
              <p className="text-muted-foreground">
                Strategic IT consulting and digital transformation guidance.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Training</h3>
              <p className="text-muted-foreground">
                International standards training and capacity building programs.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="service-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;