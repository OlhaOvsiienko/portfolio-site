import './CVData.styles.css'

const CVData = [
    {
      title: 'Education',
      text1: 'V. N. Karazin Kharkiv National University',
      list1: ['1996-2001: Faculty of Economics. Specialty: economist-manager', '2001-2004: Postgraduate student at the Department of Economics and Management. Scientific degree: PhD in Economics'],
      text2: 'SoftServe Academy',
      list2: ['HTML/CSS/JS Fundamentals (2023)', 'JAVASCRIPT Fundamentals (2023)', 'DATABASE Fundamentals (2023)', 'Practical REACT (2024)', 'WebUI Project Based Learning (2024)'],
      button1: {
        label: 'View Certificates',
        to: '/certificates',
      }
    },
    {
      title: 'Experience',
      text1: 'Yaroslav Mudryi National Law University (Kharkiv)',
      list1: ['2006-2023: Associate professor of the Department of Economic Theory', '2008-2015: Responsible executor of research projects, which are carried out at the expense of the state budget', 'Duties: Lecturer of masters programs "Business Consulting" and "Business Management", bachelors programs "Law", "Business Economics". Head of master’s thesis. Preparation of scientific and analytical reviews, analysis of macroeconomic information, conducting comparative studies, drawing up reports, preparation of recommendations for improvement of economic policy, current legislation, publication of research results in specialized publications, at conferences, meetings.'],
      text2: 'National Pharmaceutical University (Kharkiv)',
      list2: ['2002-2006: Teacher of the department of Economic Theory', '2008-2018: Associate Professor of the Department of Management and Administration', 'Duties: Lecturer of the courses "Management of the business potential of the enterprise", "Organization of the managers work", "International Economics".'],
      button1: {
        label: 'View GoogleSchoolar Profile',
        href: 'https://scholar.google.com.ua/citations?user=kbKrhxQAAAAJ&hl=ru',
      },
      button2: {
        label: 'View publications',
        href: 'https://dspace.nlu.edu.ua/simple-search?query=%D0%9E%D0%B2%D1%81%D1%96%D1%94%D0%BD%D0%BA%D0%BE&filter_field_1=author&filter_type_1=contains&filter_value_1=%D0%9E%D0%B2%D1%81%D1%96%D1%94%D0%BD%D0%BA%D0%BE%2C+%D0%9E.%D0%92.&sort_by=dc.date.issued_dt&order=desc&rpp=10&etal=0&start=',
      }
    },
    {
        title: 'IT Experience',
        list1: ['SoftServe Academy: Participation in an educational project Space2Study', 'Independent development of mini-projects'],
        button1: {
          label: 'View Portfolio',
          to: '/portfolio',
        },
      },
    {
      title: 'IT Skills',
      list1: ['React', 'Website development', 'Working with Git', 'Teamwork',],
    },
    {
        title: 'General Skills',
        list1: ['Project management', 'Time-management', 'Public speeches, business correspondence', 'Preparation of analytical reviews, reports, articles'],
      },
  ]

export default CVData