exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(() => {
      // Inserts seed entries
      return knex('activities').insert([
        {
          id: 1,
          name: 'mood',
          icon: '',
          info: 'What is your emotional state today?',
          colour: '#E1350B'
        },
        {
          id: 2,
          name: 'exercise',
          icon: '',
          info: '"Exercise improves mental health by reducing anxiety, depression, and negative mood and by improving self-esteem and cognitive function"',
          link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1470658/',
          colour: '#F47D4A'
        },
        {
          id: 3,
          name: 'diet',
          icon: '',
          info: '"a number of conditions, including depression, may be influenced by dietary factors"',
          link: 'https://www.mentalhealth.org.nz/assets/ResourceFinder/healthy-eating-depression-how-diet-protects-you-health.pdf',
          colour: '#68829E'
        },
        {
          id: 4,
          name: 'sleep',
          icon: '',
          info: '"Studies using different methods and populations estimate that 65% to 90% of adult patients with major depression, and about 90% of children with this disorder, experience some kind of sleep problem."',
          link: 'https://www.health.harvard.edu/newsletter_article/sleep-and-mental-health',
          colour: '#AEBD38'
        },
        {
          id: 5,
          name: 'meditation',
          icon: '',
          info: '"a mindfulness-based stress reduction program helped quell anxiety symptoms in people with generalized anxiety disorder"',
          link: 'https://www.health.harvard.edu/blog/mindfulness-meditation-may-ease-anxiety-mental-stress-201401086967',
          colour: '#598234'
        },
        {
          id: 6,
          name: 'water',
          icon: '',
          info: '"Even mild dehydration that can occur during the course of our ordinary daily activities can degrade how we are feeling"',
          link: 'https://today.uconn.edu/2012/02/even-mild-dehydration-can-alter-mood/',
          colour: '#CF6F6F'
        },
        {
          id: 7,
          name: 'alcohol',
          icon: '',
          info: '"in the long term alcohol misuse can cause big problems for our mental health. It’s linked to a range of issues from depression and memory loss to suicide."',
          link: 'https://www.mentalhealth.org.nz/assets/A-Z/Downloads/The-facts-about-Alcohol-and-mental-health-Drink-Aware-UK-2013.pdf',
          colour: '#FFEC5C'
        },
        {
          id: 8,
          name: 'vice',
          icon: '',
          info: 'What do you want to track to see if it affects your mood? Smoking, a certain drug, gambling, or something else?',
          colour: '#505160'
        },
        {
          id: 9,
          name: 'Medication',
          icon: '',
          info: 'Have you taken any medication today? Does it affects your health?',
          colour: '#7c3284'
        }
      ])
    })
}
