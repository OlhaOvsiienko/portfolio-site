import Link from '../link/Link'

const ProjectCardContent = [
  {
    imgSrc: require('./../../images/DentalClinic.jpg'),
    imgAlt: 'Dental Clinic Site',
    title: 'Dental Clinic Site',
    abstract: 'HTML CSS JS',
    description: (
      <>
        The assignment is a part of the curriculum of the HTML CSS JS course at SoftServeAcademy.
        <br /><br />
         
        The full version of the team project can be seen  {' '} 
        <Link 
          href='https://koldovsky.github.io/1038-team-03' 
          target="_blank" 
          rel="noopener noreferrer"
        >         
        here
        </Link>.
        <br /><br />
        Mobile responsive website.
        <br /><br />
        My work in the project can be seen by clicking on the View button.
        <br /><br />
      </>
    ),
    label: 'DentalClinic',
    tryLink: 'https://dental-clinic-schedule.netlify.app/schedule.html', 
    btnTryText: 'View',
    gitHubLink: 'https://github.com/OlhaOvsiienko/dental-clinic',
    btnGitHubText: 'GitHub Repo'
  },
    {
      imgSrc: require('./../../images/Minesweeper.jpg'),
      imgAlt: 'Minesweeper Game',
      title: 'Minesweeper Game',
      abstract: 'Vanilla JS',
      description: (
        <>
          This is an educational project made after completing the JavaScript fundamental courses at SoftServeAcademy.
          <br /><br />
          The game "Mineweeper" is written in pure JavaScript. It uses the following technologies:
          <br /><br />
          &#10003; interaction with the DOM;
          <br />
          &#10003; classes;
          <br />
          &#10003; working with local storage;
          <br />
          &#10003; recursive functions.
          <br /><br />
          The game has got 3 difficulty levels. At the beginning of the game, the timer is activated. If the result at a current difficulty level has been improved, a message about the record is displayed.
        </>
      ),
      label: 'Minesweeper',
      tryLink: 'https://minesweeper-js-game.netlify.app/', 
      btnTryText: 'Play',
      gitHubLink: 'https://github.com/OlhaOvsiienko/mine-sweeper-game-js/tree/main',
      btnGitHubText: 'GitHub Repo'
    },
    {
        imgSrc: require('./../../images/ToDoList.jpg'),
        imgAlt: 'To Do List',
        title: 'To Do List',
        abstract: 'React, TypeScript',
        description: (
          <>
          The assignment is a part of the curriculum of the ReactPractice course at SoftServeAcademy.
          <br /><br />
          UseState and UseEffect hooks are used. TypeScript is also used.
          <br /><br />
          </>
        ),
        label: 'ToDoList',
        tryLink: 'https://to-do-list-ovsiienko.netlify.app/', 
        btnTryText: 'Try',
        gitHubLink: 'https://github.com/OlhaOvsiienko/to-do-list-Ovsiienko/tree/master/src/Components',
        btnGitHubText: 'GitHub Repo'
    },
    {
        imgSrc: require('./../../images/ValidationForm.jpg'),
        imgAlt: 'Form Validation',
        title: 'Form Validation',
        abstract: 'HTML CSS JS, RegExp',
        description: (
        <>
          This is an educational project made after completing the HTML CSS JS course at SoftServeAcademy.
          <br /><br />
          Formspree is used to submit form data.
          <br /><br />
        </>
        ),
        label: 'FormValidation',
        tryLink: 'https://dental-clinic-schedule.netlify.app', 
        btnTryText: 'View',
        gitHubLink: 'https://github.com/OlhaOvsiienko/dental-clinic/blob/main/js/index.book-visit.js',
        btnGitHubText: 'GitHub Repo'
    },
    {
      imgSrc: require('./../../images/Space2Study.jpg'),
      imgAlt: 'Space2Study',
      title: 'Space2Study',
      abstract: 'React, MuiMaterials',
      description: (
        <>
        The assignment is part of the curriculum of the ReactPractice course at SoftServAcademy.
        <br /><br />
        UseState and UseEffect hooks are used. TypeScript is also used.
        <br /><br />
        </>
      ),
      label: 'Space2Study',
      //tryLink: 'https://koldovsky.github.io/1038-team-03/schedule.html#', 
      btnTryText: 'View',
      //gitHubLink: 'https://github.com/koldovsky/1038-team-03/blob/main/partials/schedule.clinics.partial.html',
      //btnGitHubText: 'GitHub Repo'
  },
  {
    imgSrc: require('./../../images/ThisSite.jpg'),
    imgAlt: 'ThisSite',
    title: 'This Site',
    abstract: 'React',
    description: (
      <>
      The site you are on is written in React.
      <br /><br />
      </>
    ),
    label: 'ThisSite',
    gitHubLink: 'https://github.com/OlhaOvsiienko/portfolio-site',
    btnGitHubText: 'GitHub Repo'
},

{
  imgSrc: require('./../../images/Quiz.jpg'),
  imgAlt: 'Quiz',
  title: 'Quiz',
  abstract: 'React, Mui Materials',
  description: (
  <>
    This is React project.
    <br /><br />
    Material UI is used.
    <br /><br />
  </>
  ),
  label: 'Quiz',
  tryLink: 'https://quiz-ovsiienko.netlify.app/', 
  btnTryText: 'Try',
  gitHubLink: 'https://github.com/OlhaOvsiienko/quiz',
  btnGitHubText: 'GitHub Repo'
},
  ]
  
  export default ProjectCardContent