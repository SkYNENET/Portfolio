export interface SkillGroup {
  title: string
  icon: 'gamepad' | 'layout' | 'database' | 'terminal'
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Roblox',
    icon: 'gamepad',
    description: 'Years of shipping live games with real players.',
    items: ['Luau', 'Roblox Studio', 'DataStore', 'Client/server architecture', 'Anti-cheat', 'Cross-server sync'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    description: 'Modern, responsive interfaces.',
    items: ['React', 'TypeScript', 'Next.js', 'HTML / CSS'],
  },
  {
    title: 'Backend & Databases',
    icon: 'database',
    description: 'Data models and APIs behind the UI.',
    items: ['Supabase', 'PostgreSQL', 'Node.js'],
  },
  {
    title: 'Languages & Tools',
    icon: 'terminal',
    description: 'Fundamentals learned at Epitech.',
    items: ['C', 'Python', 'Git / GitHub', 'Linux', 'Makefile'],
  },
]
