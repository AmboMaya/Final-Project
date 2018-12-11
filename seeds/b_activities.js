exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(() => {
      // Inserts seed entries
      return knex('activities').insert([
        {
          id: 1,
          name: 'Mood',
          info: 'What is your emotional state today?',
          colour: 'rgba(142, 11, 0, 0.8)'
        },
        {
          id: 2,
          name: 'Exercise',
          info: '"Exercise improves mental health by reducing anxiety, depression, and negative mood and by improving self-esteem and cognitive function"',
          link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1470658/',
          colour: 'rgba(255, 95, 14, 0.7)'
        },
        {
          id: 3,
          name: 'Diet',
          info: '"a number of conditions, including depression, may be influenced by dietary factors"',
          link: 'https://www.mentalhealth.org.nz/assets/ResourceFinder/healthy-eating-depression-how-diet-protects-you-health.pdf',
          colour: 'rgba(232, 37, 98, 0.7)'
        },
        {
          id: 4,
          name: 'Sleep',
          info: '"Studies using different methods and populations estimate that 65% to 90% of adult patients with major depression, and about 90% of children with this disorder, experience some kind of sleep problem."',
          link: 'https://www.health.harvard.edu/newsletter_article/sleep-and-mental-health',
          colour: 'rgba(45, 23, 150, 0.7)'
        },
        {
          id: 5,
          name: 'Meditation',
          info: '"a mindfulness-based stress reduction program helped quell anxiety symptoms in people with generalized anxiety disorder"',
          link: 'https://www.health.harvard.edu/blog/mindfulness-meditation-may-ease-anxiety-mental-stress-201401086967',
          colour: 'rgba(0, 168, 115, 0.7)'
        },
        {
          id: 6,
          name: 'Water',
          info: '"Even mild dehydration that can occur during the course of our ordinary daily activities can degrade how we are feeling"',
          link: 'https://today.uconn.edu/2012/02/even-mild-dehydration-can-alter-mood/',
          colour: 'rgba(25, 130, 196, 0.7)'
        },
        {
          id: 7,
          name: 'Alcohol',
          info: '"in the long term alcohol misuse can cause big problems for our mental health. It’s linked to a range of issues from depression and memory loss to suicide."',
          link: 'https://www.mentalhealth.org.nz/assets/A-Z/Downloads/The-facts-about-Alcohol-and-mental-health-Drink-Aware-UK-2013.pdf',
          colour: 'rgba(106, 76, 147, 0.7)'
        },
        {
          id: 8,
          name: 'Vice',
          info: 'What do you want to track to see if it affects your mood? Smoking, a certain drug, gambling, or something else?',
          colour: 'rgba(175, 129, 48, 0.7)'
        },
        {
          id: 9,
          name: 'Stress',
          info: '"If our stress response is activated repeatedly, or it persists over time, the effects can result in wear and tear on the body and can cause us to feel permanently in a state of ‘fight or flight’."',
          link: 'https://www.mentalhealth.org.uk/a-to-z/s/stress',
          colour: 'rgba(80, 81, 96, 0.7)'
        }
      ])
    })
}
