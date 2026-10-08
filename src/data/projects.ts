export type ProjectCategory = 'roblox' | 'web' | 'school'

export interface Project {
  name: string
  image: string
  link: string
  description: string
  category: ProjectCategory
  tags: string[]
  featured?: boolean
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: 'Lucky Block Factory',
    image: '/assets/Images/LuckyBlockFactory.png',
    link: 'https://www.roblox.com/games/88367844931035/Lucky-Block-Factory',
    description:
      'Roblox management game: build your own lucky block factory, automate production and upgrade your machines to become the richest player.',
    category: 'roblox',
    tags: ['Luau', 'Roblox Studio', 'DataStore'],
    featured: true,
  },
  {
    name: 'Monster Mayhem',
    image: '/assets/Images/MM.jpg',
    link: 'https://www.roblox.com/games/136890726201326/Monster-Mayhem',
    description:
      'Play a monster destroying everything in your path. A remake of a deleted game I loved, rebuilt to bring back the same feel.',
    category: 'roblox',
    tags: ['Luau', 'Roblox Studio'],
  },
  {
    name: 'LFI or RN',
    image: '/assets/Images/Game3.png',
    link: 'https://www.roblox.com/games/91936375975333/LFI-or-RN',
    description:
      'Political quiz on Roblox: answer 20 questions on economy and society to find your orientation, with other players’ results updated in real time.',
    category: 'roblox',
    tags: ['Luau', 'Realtime', 'MessagingService'],
  },
  {
    name: 'Setting Up',
    image: '/assets/Images/p1.png',
    link: 'https://github.com/HectorColaert/setting-up',
    github: 'https://github.com/HectorColaert/setting-up',
    description:
      'First Epitech project: full setup of a Linux development environment and everyday tooling.',
    category: 'school',
    tags: ['Linux', 'Shell'],
  },
  {
    name: 'my_printf',
    image: '/assets/Images/p2.png',
    link: 'https://github.com/HectorColaert/my_printf',
    github: 'https://github.com/HectorColaert/my_printf',
    description:
      'Re-implementation of printf in C, handling %s, %d, %i, %c and %% without the standard library.',
    category: 'school',
    tags: ['C', 'Makefile'],
  },
  {
    name: 'my_top',
    image: '/assets/Images/p3.png',
    link: 'https://github.com/HectorColaert/my_top',
    github: 'https://github.com/HectorColaert/my_top',
    description:
      'Re-implementation of the top command in C: live view of running processes with PID, CPU and memory usage.',
    category: 'school',
    tags: ['C', 'Linux'],
  },
]
