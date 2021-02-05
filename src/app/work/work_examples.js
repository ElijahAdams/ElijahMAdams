export const data = [
  {
    name: 'Retirement Readiness',
    description: 'A tool available to Vanguard institutional clients; It projects users\'' +
      ' monthly income at retirement based on a few factors, such as social security, retail investments and health savings.',
    tech: 'TypeScript, Angular, Java, DB2',
    showText: false,
    overview: 'I owned the architecture for the front-end of this project. The tool was created with AngularJS a few years ' +
      'before my workings with it. It is a critical offering for users giving them peace of mind on retirement so it' +
      ' needed to migrate to Angular before AngularJS lost support. I trained the other developers on the team in the newer ' +
      'version of the library ' +
      'to help with the learning curve. I determined how we would handle data in the UI using RXJS subjects to reduce' +
      ' calls to the backend. I selected the additional libraries/modules that the project would use, such as D3,' +
      ' Angular Material, and Font Awesome to speed up the development process. I implemented code across all pages ' +
      'of the application. Additionally, I contributed to breaking out the Java REST endpoints used for the backend ' +
      'from a monolith into smaller microservices. ',
    product: '',
    image: 'rr_1',
    imagesUrl: 'https://elijahmadamsresources.s3.amazonaws.com/retirement-readiness-ema.pdf',
    code: ''
  },
  {
    name: 'AngularJS Component Library',
    description: 'A library that provides reusable, ADA compliant UI components;  This library expedites development ' +
      'teams\' implementation time of front-end applications.',
    tech: 'Javascript, AngularJS, Node.js, Webpack, Grunt',
    showText: false,
    overview: 'I worked on this project as a developer implementing components and updating the libraries documentation with examples. ' +
      'Users would be able to view the documentation to learn how to use the different components and customize ' +
      'them with different styles. The library had over 30 components that could be tested out in real time before using ' +
      'them in a front-end projects. This library saved other developers a lot of time and help with brand consistency.',
    product: '',
    image: 'complib_1',
    imagesUrl: 'https://elijahmadamsresources.s3.amazonaws.com/component-library-ema.pdf',
    code: ''
  },
  {
    name: 'Acres',
    description: 'A mobile app that helps users find and support local black-owned businesses; ' +
      'It\'s currently servicing the Charlotte, North Carolina area.',
    tech: 'Typescript, Ionic, Capacitor, Google Maps, Firebase',
    showText: false,
    overview: 'I created the entire mobile application using Javascript/Typescript. When thinking through ' +
      'architecture and implementation I answered the tough question of go native or a hybrid app? After ' +
      'considering the functionality it needed and the timeframe to develop it for two platforms I went the' +
      ' hybrid route. I utilized Ionic and Capacitor to make this app a success. Knowing this would be a large' +
      ' project I implemented unit tests on critical functionality like authorization and the main page views.' +
      ' I developed the front-end based on the designs and conducted user research and testing to maximize user ' +
      'satisfaction and usability. Lastly, I ensured the back end was scalable and efficient by using Firebase ' +
      'and other Google API\'s like Maps. I launched my MVP version into the Google Playstore in January 2021. ' +
      'Coming soon to the App Store for iOS. ',
    product: 'https://play.google.com/store/apps/details?id=com.funktory.fortyAcres',
    image: 'acres',
    imagesUrl: 'https://elijahmadamsresources.s3.amazonaws.com/vui_home.png',
    code: ''
  },
  {
    name: 'TrueCount21',
    description: 'A pet project teaching users how to count cards using the classic Hi-Lo system and revealing logical ' +
      'arithmetic nuances when playing Blackjack; I took one of my personal interests and made it a fun and interactive game.',
    tech: 'AWS, Typescript, Angular, Node.js',
    overview: 'I wanted to help others visually understand the arithmetic behind the fan-favorite game, Blackjack. ' +
      'That desire to help soon snowballed into this application, which I\'ve spent a lot of time on "testing," ' +
      'admittedly. Once I knocked out the operations work (domain, SSL cert, delivery pipeline, etc.) utilizing AWS, ' +
      'I navigated the maze of if statements that is Blackjack. Once I had the logic implemented I added some light ' +
      'animation to give it a real casino feeling. I would routinely play the app to understand the user\'s point of ' +
      'view, and that helped me to make it simple and scalable. I want to add a blackjack basic strategy chatbot and' +
      ' actual betting options in the future so stay tuned! ',
    showText: false,
    product: 'https://www.truecount21.com',
    image: 'truecount21',
    imagesUrl: '',
    code: 'https://github.com/ElijahAdams/truecount21'
  }
];


