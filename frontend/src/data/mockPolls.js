export const mockPolls = [
  {
    id: 'poll-1',
    title: 'Which frontend framework will you choose in 2026?',
    description:
      'Pick the framework you expect to rely on most for production work this year.',
    category: 'Tech',
    type: 'single',
    startsAt: '2026-01-10T08:00:00Z',
    closesAt: '2026-02-20T23:59:00Z',
    tags: ['Frontend', 'Developers'],
    featured: true,
    options: [
      { id: 'react', text: 'React', votes: 118 },
      { id: 'vue', text: 'Vue', votes: 46 },
      { id: 'svelte', text: 'Svelte', votes: 32 },
      { id: 'angular', text: 'Angular', votes: 21 }
    ]
  },
  {
    id: 'poll-2',
    title: 'Best AI use case for higher education in 2026',
    description:
      'Choose the AI capability you think will deliver the biggest impact for students and teachers.',
    category: 'Education',
    type: 'multiple',
    startsAt: '2026-01-02T09:00:00Z',
    closesAt: '2026-02-05T16:00:00Z',
    tags: ['AI', 'Learning'],
    featured: true,
    options: [
      { id: 'tutors', text: 'Adaptive AI tutors', votes: 74 },
      { id: 'grading', text: 'Automated grading', votes: 51 },
      { id: 'labs', text: 'Virtual labs', votes: 48 },
      { id: 'assistants', text: 'Writing assistants', votes: 62 }
    ]
  },
  {
    id: 'poll-3',
    title: 'Who will win the next World Cup?',
    description: 'Single-choice vote for your predicted champion.',
    category: 'Sports',
    type: 'single',
    startsAt: '2025-05-01T09:00:00Z',
    closesAt: '2025-12-18T22:00:00Z',
    tags: ['Football'],
    options: [
      { id: 'argentina', text: 'Argentina', votes: 89 },
      { id: 'brazil', text: 'Brazil', votes: 102 },
      { id: 'france', text: 'France', votes: 95 },
      { id: 'spain', text: 'Spain', votes: 40 }
    ]
  },
  {
    id: 'poll-4',
    title: 'What topics should we cover in the next product webinar?',
    description: 'Pick one or more topics you want to see live.',
    category: 'Product',
    type: 'multiple',
    startsAt: '2026-01-15T08:00:00Z',
    closesAt: '2026-02-28T12:00:00Z',
    tags: ['Customer', 'Roadmap'],
    options: [
      { id: 'analytics', text: 'Advanced analytics', votes: 33 },
      { id: 'integrations', text: 'Third-party integrations', votes: 41 },
      { id: 'realtime', text: 'Real-time voting', votes: 29 },
      { id: 'security', text: 'Security & compliance', votes: 25 }
    ]
  },
  {
    id: 'poll-5',
    title: 'Which sustainability actions will you commit to this quarter?',
    description: 'Select all that apply to your lifestyle.',
    category: 'Environment',
    type: 'multiple',
    startsAt: '2026-02-05T07:00:00Z',
    closesAt: '2026-03-05T23:00:00Z',
    tags: ['Climate'],
    options: [
      { id: 'recycle', text: 'Improve recycling habits', votes: 14 },
      { id: 'commute', text: 'Reduce car commutes', votes: 18 },
      { id: 'energy', text: 'Lower home energy use', votes: 11 },
      { id: 'diet', text: 'More plant-based meals', votes: 16 }
    ]
  },
  {
    id: 'poll-6',
    title: 'Which features should our polling platform prioritize next?',
    description: 'Choose the improvements you want to see in the next release.',
    category: 'Product',
    type: 'multiple',
    startsAt: '2026-01-05T08:00:00Z',
    closesAt: '2026-02-22T23:00:00Z',
    tags: ['Roadmap'],
    featured: true,
    options: [
      { id: 'mobile', text: 'Offline-friendly mobile voting', votes: 45 },
      { id: 'moderation', text: 'Moderation controls', votes: 27 },
      { id: 'themes', text: 'Custom themes & branding', votes: 36 },
      { id: 'exports', text: 'Data exports & dashboards', votes: 31 }
    ]
  }
];

