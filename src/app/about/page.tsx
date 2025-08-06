import { motion } from 'framer-motion';

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former blockchain engineer at Coinbase with 10+ years in crypto"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Security expert with background in cryptographic systems"
    },
    {
      name: "Emily Johnson",
      role: "Head of Legal",
      bio: "Specialized in digital asset law and inheritance regulations"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in DeFi protocols"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded",
      description: "LegacyX was founded with a mission to solve crypto inheritance challenges"
    },
    {
      year: "2023 Q2",
      title: "Seed Funding",
      description: "Raised $5M in seed funding from top crypto VCs"
    },
    {
      year: "2023 Q4",
      title: "Beta Launch",
      description: "Launched beta version with 1,000+ early adopters"
    },
    {
      year: "2024 Q1",
      title: "Mainnet Launch",
      description: "Official launch on mainnet with full feature set"
    },
    {
      year: "2024 Q3",
      title: "Enterprise Solutions",
      description: "Released enterprise-grade solutions for institutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-legacy-dark to-blue-900/20 pt-24">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About LegacyX</h1>
          <p className="text-xl text-legacy-gray max-w-3xl mx-auto">
            We're building the future of digital inheritance, ensuring your crypto assets are passed on according to your wishes.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-legacy-gray mb-4">
                At LegacyX, we believe everyone should have control over their digital legacy. As cryptocurrency adoption grows, so does the need for secure, reliable inheritance solutions.
              </p>
              <p className="text-legacy-gray mb-4">
                Our platform combines cutting-edge blockchain technology with intuitive design to make digital inheritance accessible to everyone, from crypto newcomers to institutional investors.
              </p>
              <p className="text-legacy-gray">
                We're committed to setting the standard for security, transparency, and user experience in the crypto inheritance space.
              </p>
            </div>
            <div className="bg-gradient-to-br from-legacy-blue to-blue-800 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-legacy-gold mb-2">$10B+</div>
                  <div className="text-legacy-gray">Assets Secured</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-legacy-gold mb-2">50K+</div>
                  <div className="text-legacy-gray">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-legacy-gold mb-2">99.9%</div>
                  <div className="text-legacy-gray">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-legacy-gold mb-2">24/7</div>
                  <div className="text-legacy-gray">Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-legacy-blue/30"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className={`absolute top-0 ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} transform -translate-y-1/2 w-4 h-4 bg-legacy-gold rounded-full`}></div>
                <div className={`inline-block ${index % 2 === 0 ? 'pr-8' : 'pl-8'} w-5/12`}>
                  <div className="bg-legacy-blue/20 p-6 rounded-xl border border-legacy-blue/30">
                    <div className="text-legacy-gold font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-legacy-gray">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-legacy-blue/20 p-6 rounded-xl border border-legacy-blue/30 text-center"
              >
                <div className="w-24 h-24 bg-legacy-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-legacy-dark">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-legacy-gold mb-3">{member.role}</p>
                <p className="text-sm text-legacy-gray">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}