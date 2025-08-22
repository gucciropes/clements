import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "I had the privilege of working with Lou during my recent career transition. Lou brings a measured and transparent approach to executive transition and outplacement support. He respectfully challenges your thinking, emphasizes and coaches you on strong search discipline, and employs practical tools to ensure you find the right opportunity in meeting your unique career goals. I highly recommend Lou if you are an executive in transition.",
      author: "Michael Read",
      title: "EVP, President Consumer International & Specialty Products",
      company: "Church & Dwight Co. Inc",
      location: "Mississauga, ON"
    },
    {
      quote: "Having participated in countless leadership programs over my career, I can categorically state that I have now seen the best - Clements United is the Premiership. My experience with Lou was nothing short of exceptional. Lou&apos;s high touch approach helped me to better understand and appreciate my strengths, as well as my areas of opportunity. His approach is straightforward and pragmatic, as is his program. As a coach, Lou was understanding and empathetic when he needed to be, and when appropriate, he jolted me into action. I often felt as if I was the sole beneficiary of all of his years of wisdom and experience. Another facet of Lou&apos;s program is the access that he offers to his impressive network. It seems that he knows EVERYONE. I believe that many of the introductions that he made for me will be very important to me for the balance of my career. As a result of the Clements United program, not only do I understand myself better now as a leader and a colleague, but also as a person.",
      author: "Sean MacCormack",
      title: "CFO",
      company: "Home Hardware Stores Limited",
      location: "St. Jacobs, ON"
    },
    {
      quote: "While in transition from Loblaw Companies, I insisted on having Lou as my counselor as I knew, better than anyone that his style and experience would work well in my own transition. Lou&apos;s guidance and support was such that I heard the number of interviews or networking meetings you have scheduled each week. Lou quickly knew what approach to take in order to motivate, challenge and support me in each situation I encountered. He was a master at bringing me back to focus on my goals when I was tempted by a new opportunity. Thanks to Lou, I learned so much about myself during my time in transition and all the while, he quietly facilitated this self discovery. From a personal perspective, I would look to Lou should I need his assistance in the future. From a Company perspective, I would be proud to know I provided people with the highest service level and transition experience possible.",
      author: "Kamy Scarlett",
      title: "Chief Human Resources Officer",
      company: "Best Buy",
      location: "Minneapolis, MN"
    },
    {
      quote: "Lou is a guy who asks the right questions. Lou was able to guide me through an interesting transition from thinking Canadian to thinking globally and forced me to look at the tough questions and provide specific and actionable answers. I find this skill, this ability to push another to seek insights by thinking along different axis through thoughtful inquisition, a valuable coaching and management wisdom.",
      author: "Brian Lang",
      title: "President and COO",
      company: "Real Matters",
      location: "Toronto, ON"
    },
    {
      quote: "Lou was a great guide and terrific coach. He helped me better understand my motivations, goals and areas for focus. He was very supportive and highly engaged throughout my transition. It was great to work with him.",
      author: "Ron McKerlie",
      title: "Former President and Special Advisor to the Board",
      company: "Mohawk College",
      location: "Hamilton, ON"
    },
    {
      quote: "As there is no growth in life without some discomfort, Lou and the team pushed me out of my comfort zone, increased my self-awareness and encouraged me to use my resourcefulness to strive for results. Lou was not only interested in my success, but was thoroughly engaged, supportive and his enthusiastic encouragement provided the fuel that helped motivate and propel me to a successful journey.",
      author: "Paul Roach",
      title: "President",
      company: "Belmont Meats",
      location: "Toronto, ON"
    },
    {
      quote: "Notwithstanding my high expectations and aggressive time frame for transition, Lou was very skilled at peeling back the obvious objectives on the surface and formulated a strategy that was very effective. Through a combination of touch questions and penetrating observations, I was able to specifically target my search and process. I would highly recommend Lou to others - as I have done so already, and encourage others to get to know him.",
      author: "Tony DiEmanuele",
      title: "President and CEO",
      company: "Mohawk Medbuy Corp.",
      location: "Burlington, ON"
    },
    {
      quote: "Lou has had a profoundly positive impact on my career and how I think about my own potential. The transition from operating leadership to professional services has been an eye-opening experience for me and one that I would not necessarily have explored without Lou&apos;s counsel and encouragement. He is a natural and talented coach and someone who truly cares. We are all lucky enough to meet partners like this in business and in life, but Lou is the real deal. I could not recommend him more highly.",
      author: "Joseph Lo",
      title: "Partner",
      company: "Sagard Private Equity Canada",
      location: "Toronto, ON"
    },
    {
      quote: "Lou provides really great one-on-one support throughout the transition process. He works at your pace, but is good at pushing you when you need it. His process ensures you get the insights you need to find the right opportunity. I know my transition would not have turned out as well as it did without Lou&apos;s involvement.",
      author: "Juanita Moore",
      title: "COO",
      company: "Food Banks Mississauga",
      location: "Mississauga, ON"
    },
    {
      quote: "Lou has terrific instincts and knows how to be and when to be a consultant or a coach. As a consultant he can quickly assess, develop a mutually agreeable process and draw from a score of experience that will chart a course for success. As a coach he is a wonderful motivator and knows how to constructively critique which is what created the most value for me. In every executive&apos;s career there will be times when the path forward will be unclear, and when you will need Lou. Lou, like a compass, can point you in the right direction and bring clarity to your path forward. He is one of the finest consultants and coaches I have the pleasure to engage. I would recommend him to my friends.",
      author: "Chris Thatcher",
      title: "President and CEO",
      company: "Noxilizer, Inc.",
      location: "Baltimore, MD"
    },
    {
      quote: "Lou is not only an excellent career coach, but he has also become a good friend. I found Lou&apos;s advice invaluable throughout the entire career coaching program. The tools and methods that he uses are created by him and are leading edge. I found myself discussing all aspects of my career and now I am related to my personal goals and what I wanted and needed for my future. I fully recommend Lou as a career advisor and I am proud to be a graduate of Clements United.",
      author: "Renzo Di Carlo",
      title: "VP, Global Business Excellence",
      company: "Alexion Pharmaceuticals",
      location: "Boston, MA"
    },
    {
      quote: "I first met Lou about 10 years ago when I was fortunate enough to be recommended to him by an CHRO colleague who has worked with him numerous times in the past. He took a very personalized approach to what, as a professional and human being, needed at the time given my circumstances. Lou was instrumental in helping me find my way to a new opportunity. His approach is high touch and agile. I have since recommended him to friends and colleagues who also found him incredibly helpful. I recently engaged Lou for a completely different situation and, true to his style, took a very targeted and personal approach. He is insightful and helped me think differently. He is tactful yet challenging. And, above all, he cares. I am forever grateful for his guidance.",
      author: "Nadia Vattovaz",
      title: "CFO & EVP Supply Chain",
      company: "Sporting Life Group",
      location: "Toronto, ON"
    },
    {
      quote: "Lou has been a trusted, personal advisor since my first career transition 10 years ago. His personal commitment to his clients well exceeds the transactional aspect of outplacement, and is the primary reason why he has maintained a list of successful, fiercely loyal clients over ten years. Speaking from personal experience twice over my own working years, Lou's approach is a productive blend of active listening, well-positioned feedback and positive support, leading to a well thought out career decision on the other end!",
      author: "Tom Gunter",
      title: "T.A.G. Consulting",
      company: "",
      location: "Toronto, ON"
    },
    {
      quote: "Lou Clements is an outstanding career transition professional and one of the best in the country. Working with Lou was transformational for my career. He was fully engaged during the process, provided deep insight and was a great sounding board for me. But most importantly, he ensured I always had the support I needed and always made himself available, even when on vacation overseas! Thanks to him, I am now repositioned in my career and have more focus on what my career means to me and how I plan to shape the direction I would like to grow in. If you have an opportunity to work with Lou, don't think twice about it!",
      author: "Adeel Syed",
      title: "SVP Payments, Business Development, Client & Partnership Management",
      company: "Peoples Group",
      location: "Toronto, ON"
    },
    {
      quote: "Lou has a lovely way of guiding executives through times of professional transition bringing them to a place of self discovery and new confidence. His tools and methods are rigorous but not intimidating. The benefits of his services are best appreciated at the end of the engagement when you find your way to new opportunities and happier goals. Working with Lou was a gift.",
      author: "Delaine Hampton",
      title: "Adjunct Professor, Rotman School of Management",
      company: "University of Toronto",
      location: "Toronto, ON"
    },
    {
      quote: "It was great working with Lou. He's a good man and is very effective as a coach and counselor. Lou is very well connected and really works to understand your particular situation and goals. I'd recommend him to anyone looking to make the right transition at any point in their career.",
      author: "Glen Grunwald",
      title: "Executive Advisor, Canada Basketball, and Senior Advisor",
      company: "Memphis Grizzlies",
      location: "Toronto, ON"
    },
    {
      quote: "I met Lou at a critical inflection point in my career when I was looking to make a shift from Bay Street finance to a corporate operating role. Lou's approach included tough but insightful questions regarding my past experiences and future career goals and while the process was uncomfortable at times, it inevitably helped me gain confidence in my ability to secure my desired role and succeed once on the job. Lou truly cared about the role he played in my transition and we continue to stay in touch, discussing both professional and personal milestones. With Lou's assistance, I landed exactly the kind of role he helped me to define - I am thrilled with the company I'm working for and feel truly prepared to excel in the next phase of my career.",
      author: "Ben Fash",
      title: "Chief Financial Officer",
      company: "Fluence Corporation",
      location: "Toronto, ON"
    },
    {
      quote: "Lou was an extremely valuable coach. He offered extraordinary insights during my transition process. Lou was supportive and very well connected. It was a pleasure to work with him.",
      author: "Tim Condon",
      title: "President and CEO",
      company: "AAA, Northern California, Nevada and Utah",
      location: "Emeryville, CA (Retired)"
    },
    {
      quote: "As a VP Human Resources, I have supported many people during their career transitions and been empathetic to their situations. However, when faced with my own career transition, I was awakened to the effects this major life event can have on a person. Now I needed support and my expectations of the person who would provide it were high. Lou Clements met every expectation and more. His calm manner, sense of humour and optimism set the tone for me from the beginning. His expertise, guidance and sense of calm reflection and preparation for the future that built much confidence and led to success. Lou told me that he took pride in his clients always being prepared as they looked for that next opportunity. In my case, Lou helped me know who I was and what I wanted from my career. Then, with each step in my transition journey, Lou was there to encourage and celebrate. Lou was a friend in every way during this challenging time and I would highly recommend him as an outstanding career coach.",
      author: "Craig Foster",
      title: "Vice President, Human Resources",
      company: "The North West Company",
      location: "Winnipeg, MB (Retired)"
    }
  ];

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
              Client Success Stories
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-none drop-shadow-lg">
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              People who are willing to wear the colours and show they are supporters are of great comfort and reassurance for people who might be entering a period of career uncertainty or who are looking to make a change.
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Clements United has many supporters who have been willing to share their thoughts and feelings and some of these may resonate with you.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Lou has had the privilege of working with executives with varied backgrounds, functional expertise and industry experience. His clients have worked in Canada, the US and in other parts of the world.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              A sample of quotes found on his LinkedIn profile provides insight into how he is viewed and more can be found at{' '}
              <a 
                href="https://ca.linkedin.com/in/louclements" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#AC0D2B] hover:text-[#8A0A22] underline font-medium"
              >
                ca.linkedin.com/in/louclements
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 break-inside-avoid mb-8">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-[#AC0D2B] mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <Separator className="mb-4" />
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-slate-600">{testimonial.title}</p>
                    {testimonial.company && (
                      <p className="text-slate-600">{testimonial.company}</p>
                    )}
                    <p className="text-slate-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            Join the many executives who have successfully navigated their career transitions with Lou&apos;s guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-[#AC0D2B] hover:bg-[#8A0A22] rounded-lg transition-colors duration-200"
            >
              Learn More About Lou
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
