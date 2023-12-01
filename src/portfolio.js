const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/hassairyz',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Zakaria Hassairy',
  role: 'Front/Back end developpeur',
  description:
    'Passionné par le développement informatique depuis mon plus jeune âge. ' +
      'J\'ai fait de ma passion le pilier fondateur de mon projet professionnel.',


  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/zakaria-hassairy-062386264/',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Etu-sTage',
    description:
      'Conception et implementation d\'un site web permettant aux étudiants de rechercher et postuler pour des alternances/stages',
    stack: ['PHP', 'JS', 'CSS'],
    sourceCode: 'https://gitlabinfo.iutmontp.univ-montp2.fr/velteri/sae-s3',
  },
  {
    name: 'Aventurier du rail',
    description:
      'Implementation du jeu de société Les aventuriers du rail avec une interface utilisateur',
    stack: ['JAVA', 'JavaFX', 'FXML'],
    sourceCode: 'https://gitlabinfo.iutmontp.univ-montp2.fr/dev-objets/etu/bassiere-hassairyz/aventuriers-monde',
  },
  {
      name: 'A venir',
    description:
      'Projet en cours de developpement',
    stack: [''],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'C',
  'Git',
    'SQL',
    'PL SQL',
    'Oracle'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Keolystv@gmail.com',
}

export { header, about, projects, skills, contact }