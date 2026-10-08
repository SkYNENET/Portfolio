export interface ExperienceItem {
  title: string
  org: string
  period: string
  summary: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Roblox Game Developer',
    org: 'Independent',
    period: 'Several years',
    summary:
      'Building and shipping Roblox games on my own. This is where I learned programming logic, long before Epitech.',
    points: [
      'Modular client/server architecture',
      'Player data persistence across sessions with DataStore',
      'Anti-cheat systems',
      'Synchronization between multiple servers',
    ],
  },
  {
    title: 'Student',
    org: 'Epitech',
    period: 'Current',
    summary: 'Learning to code rigorously: manual memory management, algorithms and teamwork tooling.',
    points: [
      'C: BSQ, custom Makefiles, Epitech coding style, modular code',
      'Python data and ML: logistic regression, Random Forest on large datasets',
      '2D graphics with CSFML: a small game',
      'Daily Git and GitHub workflow',
    ],
  },
  {
    title: 'Self-taught Web Developer',
    org: 'Personal projects',
    period: 'Recent',
    summary: 'Exploring the full stack on my own, from database schema to deployed UI.',
    points: [
      'Next.js and React web projects',
      'Supabase and PostgreSQL schema experiments',
      'Python scripts to automate repetitive tasks',
    ],
  },
]
