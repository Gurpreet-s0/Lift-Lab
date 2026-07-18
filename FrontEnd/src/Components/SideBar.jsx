import React from 'react'
import { ChartLine, Dumbbell, House, Trophy, User } from 'lucide-react'
import { NavLink } from 'react-router'

const navItems = [
    { label: 'Home', to: '/', icon: House },
    { label: 'Workouts', to: '/', icon: Dumbbell },
    { label: 'Stats', to: '/', icon: ChartLine },
    { label: 'Goals', to: '/', icon: Trophy },
    { label: 'Profile', to: '/profile', icon: User },
]

const SideBar = () => {
    return (
        <aside className='fixed inset-x-0 bottom-0 z-50 h-20 border-t border-border bg-card/95 px-3 backdrop-blur lg:inset-y-0 lg:left-0 lg:h-dvh lg:w-52 lg:border-r lg:border-t-0 lg:rounded-r-2xl lg:px-4 lg:py-5'>
            <NavLink to='/' className='mb-8 hidden justify-center lg:flex' aria-label='Go to dashboard'>
                <img className='h-24 w-36 object-contain' src="https://ik.imagekit.io/guri/dumbell%20logo_ySVKBxzT7.png" alt="" />
            </NavLink>

            <nav className='flex h-full items-center justify-between gap-1 lg:h-auto lg:flex-col lg:items-stretch lg:justify-start lg:gap-3'>
                {navItems.map(({ label, to, icon }) => (
                    <NavLink
                        key={label}
                        to={to}
                        title={label}
                        aria-label={label}
                        className={({ isActive }) =>
                            `flex h-14 min-w-0 flex-1 items-center justify-center rounded-xl transition-colors duration-150 lg:w-full lg:flex-none lg:justify-start lg:gap-3 lg:px-4 ${
                                isActive
                                    ? 'bg-input text-primary'
                                    : 'text-text-secondary hover:bg-input hover:text-text'
                            }`
                        }
                    >
                        {React.createElement(icon, { className: 'size-6 shrink-0 lg:size-7', strokeWidth: 2.2 })}
                        <span className='hidden truncate text-sm font-semibold lg:block'>{label}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}

export default SideBar
