import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ServicesPage() {
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
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-none drop-shadow-lg">
              Career Management
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              What are you trying to achieve at this point in your career and how does it fit into the overall context of your life?
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              How do you define success at this juncture and what are your obligations and responsibilities?
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-700 leading-relaxed">
              You may be reconsidering your direction, an established executive or looking to redefine the role of work in your life. In addition to Career Transition services, we have Career Redefinition and Career Direction offerings, which are focused on helping our clients realize their potential within the context of what they are trying to accomplish.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Career Redefinition */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#AC0D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Career Redefinition</CardTitle>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                  Redefine your purpose and impact when traditional roles no longer fit
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#AC0D2B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Navigate financial independence and career meaning
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#AC0D2B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Stay engaged and contributing beyond full-time roles
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#AC0D2B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Leverage experience for new opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Direction */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#AC0D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Career Direction</CardTitle>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                  Find clarity and purpose in your next career chapter
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#AC0D2B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Evaluate time and energy investment priorities
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#AC0D2B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Move beyond traditional retirement paradigms
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#AC0D2B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Create a clear game plan for your future
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Transition */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#AC0D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Career Transition</CardTitle>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                  Navigate career changes with strategic guidance and support
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#AC0D2B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Develop race strategies for career opportunities
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#AC0D2B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Get back on track after setbacks
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#AC0D2B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Coach through pursuit of next opportunity
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Career Redefinition Detail */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#AC0D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Career Redefinition</h2>
              </div>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  In both circumstances a person may not want to continue at a 24/7 pace, but that same person still may want to explore ideas, continue to learn and make an impact. You may want to go from being part of one team to pulling on different jerseys depending on the day.
                </p>
                <p>
                  If you fall into either camp, what might you do to stay engaged and contributing once you are no longer a full-time executive? How can you leverage your knowledge and experience as you go forward? Athletes face these issues when they reach a certain point in their careers and so do executives. Sometimes the knees go before the will goes!
                </p>
                <p>
                  Some players become role models and mentors for the next generation, some pass along a winning tradition and some use their experiences to keep the team competitive until younger hands are ready to take over. Role changes and less "playing time" have extended athletes' and executives careers and everyone has benefited.
                </p>
              </div>
            </div>

            {/* Career Direction Detail */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#AC0D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Career Direction</h2>
              </div>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  It really is an opportunity for you to consider, and plan for, the future - as the traditional ideas regarding our productive years change, people such as you who have knowledge, skills, energy and a need to contribute will benefit from guidance to help you determine how, where, when and under what circumstances you will want to engage. Organizations and individuals will both benefit.
                </p>
                <p>
                  Clements United has experience working with many executives who faced that decision and we will work with you to determine whether you are ready to move beyond the traditional "retire/do not retire" paradigm, and if so, what the game plan for the future looks like.
                </p>
                <p>
                  Some people have a very clear plan and a very clear path that they are following. This is a smaller group than you realize, but most people feel everyone around them has it sorted out. Some people discover that what they thought they wanted no longer resonates. Similar to most athletes, many of us need time to learn or experiences to help us to determine how we can contribute and where we wish to contribute.
                </p>
                <p>
                  We can help you to get headed in the right direction by working with you to understand your interests, your goals, your strengths, where the gaps are and how they can be addressed.
                </p>
                <p>
                  Just as a coach in sports assesses and directs training, at Clements United we do the same for people who are looking to find the right situation in which to ply their talents. For many of us it is all about just getting a chance to show what we can do under the right circumstances!
                </p>
              </div>
            </div>

            {/* Career Transition Detail */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#AC0D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Career Transition</h2>
              </div>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  There are times when we cannot get to the finish line due to circumstances beyond our control. Ask any competitor how it feels to lose their position with their team or who have suffered a career setback ranging from an injury to a temporary decline in performance and you will get similar answers. Many struggle as their sense of belonging, their sense of purpose, their very sense of self are all susceptible to the change. Yet, through determination, hard work and often a change in environment, they can get back on track.
                </p>
                <p>
                  Just like athletes, some executives lose their positions solely because a new owner or leader wants to create a new squad. Maybe there has been a change in philosophy and your "game" suddenly no longer suits their needs. Sometimes people get distracted by life's events, or lose their energy or drive and like an athlete, a change of scenery can be beneficial.
                </p>
                <p>
                  There are times when a person really does need to revitalize a career, just as athletes do. With Clements United our clients return to "training camp." They benefit from stepping back, taking stock and getting some honest feedback. It is an opportunity for a person to evaluate goals, to regroup, collect thoughts and gain perspective.
                </p>
                <p>
                  Once ready to return to action, we work with our clients to develop a "race strategy" and coach them as they pursue their next opportunity. Getting to the finish line will involve hard work, some luck and disappointment but there will be personal growth, and we try to have some fun too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Touch Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our High-Touch Approach
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We can be that "swing coach." Sometimes the adjustments are minor while in other instances, changes are more fundamental.
              </p>
            </div>
            
            <div className="space-y-8 text-slate-700 leading-relaxed">
              <p>
                There are times when a person needs to take a hard look at how they operate, what strengths and weaknesses they possess, whether or not what they set out to achieve remains the focus or whether they have other interests and goals that are at odds with what they have been doing. Sometimes broader life issues necessitate a re-evaluation.
              </p>
              <p>
                Have you ever marveled at how a long-established professional golfer will go back to the drawing board, seek out a swing coach and change the swing that got them to the highest level of competition? There are many instances in professional sports where "what got you there, won't keep you there" and it is the same for executives.
              </p>
              <p>
                In all instances the work begins with a thorough assessment, because establishing an understanding is crucial. As in sports, so it is in careers that people are interested in statistics. Research is something Lou Clements believes in and he has led the way in Canada as it pertains to executives in transition.
              </p>
              <p>
                Having created and executed research with executives in transition, no one in the country knows more about attitudes, the impact, the reasons why and how people react and what they can expect. Clements United uses the information to help our clients understand that their reactions and feelings at any point in the journey have probably been experienced by others and the insights derived from the research are used to inform how they approach their transition in order to make it a more engaging and successful experience.
              </p>
              <p>
                At Clements United, we help our clients to identify what they do exceptionally and what they need to work on in order to stay at the top level, to help them to get there or to find a new stage for their talents. We use evidence-based insights as opposed to wishful thinking!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Program Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Your Personal Program
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We work with you to build a program that will work to help you realize your potential.
              </p>
            </div>
            
            <div className="space-y-8 text-slate-700 leading-relaxed">
              <p>
                We will help you to identify and evaluate what it is you want to accomplish going forward and help prepare you to pursue it. Of course, part of our job is to help you to set goals that make sense based on what we have learned about your interests, abilities, desires and expectations. Your life stage has an impact as well.
              </p>
              <p>
                We offer high-touch, personalized programs to help individuals answer the important questions, to determine what it is you want to achieve, to evaluate what is realistic, how it can be approached, to feel comfortable with your choices, define how you can go about realizing the goals and support you in your efforts as you move forward.
              </p>
              <p>
                We do not believe that seminars and webinars are the forums for something as personal as one's future, so we work one-on-one with you as opposed to grouping you with others who are in similar circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's work together to identify your path forward and create a personalized strategy for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-[#AC0D2B] hover:bg-[#8A0A22] rounded-lg transition-colors duration-200"
            >
              Learn More About Us
            </a>
            <a 
              href="https://ca.linkedin.com/in/louclements" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors duration-200"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
