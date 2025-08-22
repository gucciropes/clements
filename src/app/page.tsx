import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/football.jpg"
            alt="Executive leadership and teamwork"
            className="w-full h-full object-cover"
          />
          {/* Black overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium bg-white text-slate-900 shadow-lg">
              Executive Career Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-none drop-shadow-lg">
              Helping Executives
              <span className="bg-gradient-to-t from-[#AC0D2B] via-[#C53030] to-[#E53E3E] bg-clip-text text-transparent block drop-shadow-2xl leading-tight">Navigate Change</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              Expert guidance for senior leaders navigating career transitions, redefinition, and strategic direction changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services">
                <Button size="lg" className="bg-[#AC0D2B] hover:bg-[#8A0A22] text-white px-8 py-3 text-lg shadow-lg cursor-pointer">
                  Explore Services
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg bg-white/10 backdrop-blur-sm cursor-pointer">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Success, Our Mission
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help executives navigate the complexities of career evolution with personalized strategies and proven methodologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#AC0D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-slate-900">Sometimes you need a<br />new position…</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Discover and seize executive opportunities that align with your expertise and career aspirations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#AC0D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-slate-900">Sometimes you need a<br />new team…</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Build and lead high-performing teams that drive organizational success and personal growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#AC0D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-slate-900">Sometimes you need a<br />new game.</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Chart innovative career paths that leverage your experience for maximum impact and fulfillment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Our Philosophy
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We believe that executive career transitions are not just about finding the next role, but about creating meaningful impact and personal fulfillment. Our approach combines deep industry knowledge with personalized coaching to help you navigate complex career decisions.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Every executive journey is unique, and we tailor our strategies to your specific goals, experience, and aspirations. We're committed to being your trusted partner throughout your career evolution.
                </p>
                <a href="/about">
                  <Button variant="outline" className="border-[#AC0D2B] text-[#AC0D2B] hover:bg-red-50 cursor-pointer">
                    Learn More About Us
                  </Button>
                </a>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#AC0D2B] rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Personalized Approach</h3>
                      <p className="text-slate-600">Tailored strategies based on your unique background and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#AC0D2B] rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Proven Methodologies</h3>
                      <p className="text-slate-600">Time-tested frameworks for successful career transitions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#AC0D2B] rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Ongoing Support</h3>
                      <p className="text-slate-600">Continuous guidance throughout your career journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to address every aspect of executive career development and transition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Career Transition</CardTitle>
                <CardDescription className="text-slate-600">
                  Strategic guidance for executives moving between roles, industries, or organizations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li>• Role evaluation and positioning</li>
                  <li>• Industry analysis and opportunities</li>
                  <li>• Transition planning and execution</li>
                </ul>
                <a href="/services" className="w-full">
                  <Button variant="outline" className="w-full border-[#AC0D2B] text-[#AC0D2B] hover:bg-red-50 cursor-pointer">
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Career Redefinition</CardTitle>
                <CardDescription className="text-slate-600">
                  Help executives pivot their careers while leveraging their core competencies and experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li>• Skills assessment and development</li>
                  <li>• Market opportunity identification</li>
                  <li>• Strategic repositioning</li>
                </ul>
                <a href="/services" className="w-full">
                  <Button variant="outline" className="w-full border-[#AC0D2B] text-[#AC0D2B] hover:bg-red-50 cursor-pointer">
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Career Direction</CardTitle>
                <CardDescription className="text-slate-600">
                  Long-term career strategy and leadership development for sustained executive success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li>• Leadership development</li>
                  <li>• Strategic career planning</li>
                  <li>• Succession preparation</li>
                </ul>
                <a href="/services" className="w-full">
                  <Button variant="outline" className="w-full border-[#AC0D2B] text-[#AC0D2B] hover:bg-red-50 cursor-pointer">
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hear from executives who have transformed their careers with our guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#AC0D2B] font-semibold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Sarah Chen</h4>
                    <p className="text-sm text-slate-600">CFO, Tech Startup</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">
                  "The team's strategic approach helped me transition from a Fortune 500 CFO role to leading finance at an innovative startup. Their guidance was invaluable."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#AC0D2B] font-semibold text-lg">K</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Michael Rodriguez</h4>
                    <p className="text-sm text-slate-600">VP Operations, Manufacturing</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">
                  "They helped me redefine my career path and discover new opportunities I never considered. The personalized approach made all the difference."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <a href="/testimonials">
              <Button variant="outline" className="border-[#AC0D2B] text-[#AC0D2B] hover:bg-red-50 cursor-pointer">
                View More Testimonials
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Insights/Blog Section */}
      <section id="insights" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay informed with our latest articles on executive career development and industry trends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <Badge variant="secondary" className="w-fit">Career Strategy</Badge>
                <CardTitle className="text-lg text-slate-900">
                  Navigating Executive Career Transitions in 2024
                </CardTitle>
                <p className="text-sm text-slate-500">March 15, 2024</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  Key strategies for executives looking to make strategic career moves in today's evolving business landscape.
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-[#AC0D2B] hover:text-[#8A0A22]">
                  Read More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <Badge variant="secondary" className="w-fit">Leadership</Badge>
                <CardTitle className="text-lg text-slate-900">
                  Building High-Performing Executive Teams
                </CardTitle>
                <p className="text-sm text-slate-500">March 10, 2024</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  Essential strategies for executives to assemble and lead teams that drive organizational success.
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-[#AC0D2B] hover:text-[#8A0A22]">
                  Read More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <Badge variant="secondary" className="w-fit">Industry Trends</Badge>
                <CardTitle className="text-lg text-slate-900">
                  The Future of Executive Leadership
                </CardTitle>
                <p className="text-sm text-slate-500">March 5, 2024</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  Emerging trends and skills that will define successful executive leadership in the coming decade.
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-[#AC0D2B] hover:text-[#8A0A22]">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's start a conversation about your executive career goals and how we can help you achieve them.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#AC0D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-slate-300">lou@clementsunited.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#AC0D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-slate-300">416 388 6808</p>
              </div>
              

            </div>

            <Button size="lg" className="bg-[#AC0D2B] hover:bg-[#8A0A22] text-white px-8 py-3 text-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
