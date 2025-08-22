import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/football.jpg"
            alt="Executive leadership and teamwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium bg-white text-slate-900 shadow-lg">
              About Clements United
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-none drop-shadow-lg">
              Our Foundation
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              Building winning teams through vision, philosophy, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Strongest Teams Begin with Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                We want to be the firm you would recommend to your best friend. Winning teams have a philosophy and a plan and they stick with them. The best teams know how to build and what is required to get to where they want to go.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Specialized Expertise
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Similar to teams that invest in and nurture their players, we have specialists who can deliver specific services. Just as a sports team has a Head Coach supported by specialists such as doctors, strength trainers, physiotherapists, psychologists and coaches for various aspects of the game they play, Clements United has specialists who can provide advice depending on the issue.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#AC0D2B] rounded-full"></div>
                    <span className="text-slate-700 font-medium">Executive Career Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#AC0D2B] rounded-full"></div>
                    <span className="text-slate-700 font-medium">Career Transition Coaching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#AC0D2B] rounded-full"></div>
                    <span className="text-slate-700 font-medium">Strategic Career Planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#AC0D2B] rounded-full"></div>
                    <span className="text-slate-700 font-medium">Leadership Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lou Clements Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <img
                    src="/Louis.jpg"
                    alt="Lou Clements, Managing Director"
                    className="w-72 rounded-2xl shadow-lg mb-6 mx-auto"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Lou Clements</h3>
                    <p className="text-slate-600">Managing Director</p>
                    <div className="mt-4">
                      <Badge variant="secondary" className="bg-[#AC0D2B] text-white">
                        Since 2000
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                  Leading Executive Career Management Since 2000
                </h2>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Lou Clements has focused on executive career management since March 2000. He created Clements United in June 2010 to ensure that executives have the opportunity to work with experts who understand the issues and challenges faced at the executive level, and do so with a high-touch, personalized approach.
                  </p>
                  
                  <p>
                    Lou knows the challenges faced by an executive as well as the opportunities presented by change. He has worked with more than 750 executives, helping guide and coach them through career transitions as well as other career decisions. He conducts Canadian research on career transition, and his findings have been featured in leading national publications and in his newsletters.
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#AC0D2B]">
                    <h4 className="font-semibold text-slate-900 mb-3">Professional Journey</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Joined Miller Dallas in March 2000 (Canada&apos;s career transition firm of choice for executives)</li>
                      <li>• Created Clements United in July 2010</li>
                      <li>• Led consumer and trade efforts of De Beers in Canada for seven years</li>
                      <li>• Experience in multinationals, public sector, consulting firms, and entrepreneurial family enterprise</li>
                    </ul>
                  </div>
                  
                  <p>
                    He has lived in the US, Spain and England and brings an open mind and approach to his clients. His MBA thesis entitled, &ldquo;The Impact of Terrorism on Multinationals&rdquo; was an example of his ability to connect issues and bring thought-leadership to the fore.
                  </p>
                  
                  <p>
                    More recently, he has taken on writing and performing stand-up comedy and learning Greek to demonstrate his commitment to accepting new challenges, just as his clients must do while in transition.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Education</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• MBA, University of Bradford (UK)</li>
                          <li>• Honours Bachelor of Commerce, Laurentian University</li>
                          <li>• Certified Advertising Agency Practitioner (CAAP)</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Experience</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• 750+ executives coached</li>
                          <li>• 24+ years in career management</li>
                          <li>• Canadian research on career transition</li>
                          <li>• Extensive executive network</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. John Crawford Tribute */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              In Memory of Dr. John Crawford
            </h2>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Dr. John Crawford was a leader in the world of career transition consulting from the mid-1970s and was a key member of the Clements United team beginning with our founding in June, 2010. John hired me into Miller Dallas, encouraged my launch of Clements United and was my mentor, supporter and friend.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                John passed on December 22, 2024. We are grateful for his guidance and the foundation he helped us build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with the Expert You&apos;d Recommend?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Lou&apos;s goal is to be the career management expert you would recommend to your best friend.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-[#AC0D2B] hover:bg-[#8A0A22] text-white px-8 py-3 text-lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
