exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(() => {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, name: 'mood', icon: 'icon 1, ico', info: 'What is your emotional state today?'},
        {id: 2, name: 'exercise', icon: '', info: '"Exercise improves mental health by reducing anxiety, depression, and negative mood and by improving self-esteem and cognitive function" - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1470658/'},
        {id: 3, name: 'diet', icon: '', info: '"a number of conditions, including depression, may be influenced by dietary factors" - https://www.mentalhealth.org.nz/assets/ResourceFinder/healthy-eating-depression-how-diet-protects-you-health.pdf'},
        {id: 4, name: 'sleep', icon: '', info: '"Studies using different methods and populations estimate that 65% to 90% of adult patients with major depression, and about 90% of children with this disorder, experience some kind of sleep problem." - https://www.health.harvard.edu/newsletter_article/sleep-and-mental-health'},
        {id: 5, name: 'meditation', icon: '', info: '"a mindfulness-based stress reduction program helped quell anxiety symptoms in people with generalized anxiety disorder" - https://www.health.harvard.edu/blog/mindfulness-meditation-may-ease-anxiety-mental-stress-201401086967'},
        {id: 6, name: 'water', icon: '', info: '"Even mild dehydration that can occur during the course of our ordinary daily activities can degrade how we are feeling" - https://today.uconn.edu/2012/02/even-mild-dehydration-can-alter-mood/'},
        {id: 7, name: 'alcohol', icon: '', info: '"in the long term alcohol misuse can cause big problems for our mental health. It’s linked to a range of issues from depression and memory loss to suicide." - https://www.mentalhealth.org.nz/assets/A-Z/Downloads/The-facts-about-Alcohol-and-mental-health-Drink-Aware-UK-2013.pdf'},
        {id: 8, name: 'vice', icon: '', info: 'What do you want to track to see if it affects your mood? Smoking, a certain drug, gambling, or something else?'}
      ])
    })
}
