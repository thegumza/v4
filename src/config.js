module.exports = {
  siteTitle: 'Wiwat Fongkan | Android Developer',
  siteDescription:
    'Wiwat Fongkan is a Android Developer based in Bangkok, TH who specializes in building (and occasionally designing) exceptional mobile apps, applications, and everything in between.',
  siteKeywords:
    'Wiwat Fongkan, Wiwat, Tek, Android Developer, back-end engineer, mobile developer, javascript, bangkok, thailand',
  siteUrl: 'https://wiwat.app',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Wiwat Fongkan',
  location: 'Android Developer, TH',
  email: 'wiwat.fongkan@gmail.com',
  github: 'https://github.com/thegumza',
  twitterHandle: '@thegumza',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/thegumza',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thegumza',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/thegumza',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thegumza',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/thegumza',
    },
  ],

  navLinks: [
    {
      name: 'เกี่ยวกับ',
      url: '/#about',
    },
    {
      name: 'ประสบการณ์',
      url: '/#jobs',
    },
    {
      name: 'ผลงาน',
      url: '/#projects',
    },
    {
      name: 'ติดต่อ',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
