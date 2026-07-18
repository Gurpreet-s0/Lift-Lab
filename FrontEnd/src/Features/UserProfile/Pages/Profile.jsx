import React from 'react'
import {
  CalendarDays,
  Dumbbell,
  Mail,
  Medal,
  Pencil,
  Ruler,
  Scale,
  Target,
  UserRound,
  VenusAndMars,
} from 'lucide-react'
import UseAuth from '../../Auth/Hooks/UseAuth'

const Profile = () => {
  const { user } = UseAuth()

  const heightInMeters = user?.height ? user.height / 100 : 0
  const bmi = heightInMeters && user?.weight
    ? (user.weight / (heightInMeters * heightInMeters)).toFixed(1)
    : 'N/A'
  const memberSince = user?.createdAt
    ? new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(user.createdAt))
    : 'New member'

  const stats = [
    { label: 'Age', value: user?.age ? `${user.age} Years` : 'N/A', icon: CalendarDays },
    { label: 'Gender', value: user?.gender || 'N/A', icon: VenusAndMars },
    { label: 'Height', value: user?.height ? `${user.height} cm` : 'N/A', icon: Ruler },
    { label: 'Weight', value: user?.weight ? `${user.weight} kg` : 'N/A', icon: Scale },
  ]

  const fitnessDetails = [
    { label: 'Goal', value: user?.goal || 'N/A', icon: Target },
    { label: 'Experience', value: user?.experience || 'N/A', icon: Medal },
    { label: 'BMI', value: bmi, icon: Dumbbell },
    { label: 'Member Since', value: memberSince, icon: CalendarDays },
  ]

  return (
    <div className='mx-auto flex w-full max-w-6xl flex-col gap-5'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-sm font-semibold uppercase text-primary'>Account</p>
          <h1 className='mt-1 text-3xl font-bold text-text sm:text-4xl'>Profile</h1>
        </div>

        <button className='inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-background transition-colors hover:bg-primary-hover'>
          <Pencil className='size-4 text-background' />
          Edit Profile
        </button>
      </div>

      <section className='overflow-hidden rounded-2xl border border-border bg-card'>
        <div className='flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left'>
            <img
              className='size-28 rounded-full border-4 border-input object-cover sm:size-32'
              src={user?.profilePicture}
              alt={user?.username ? `${user.username} profile` : 'User profile'}
            />

            <div className='min-w-0'>
              <h2 className='truncate text-2xl font-bold text-text sm:text-3xl'>
                {user?.username || 'Lift Lab Athlete'}
              </h2>
              <div className='mt-2 flex items-center justify-center gap-2 text-sm text-text-secondary sm:justify-start'>
                <Mail className='size-4 shrink-0 text-primary' />
                <span className='truncate'>{user?.email || 'No email available'}</span>
              </div>
              <div className='mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-input px-3 py-1 text-sm font-semibold text-text-secondary'>
                <UserRound className='size-4 text-primary' />
                {user?.experience || 'Fitness Member'}
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[28rem]'>
            {stats.map(({ label, value, icon }) => (
              <div key={label} className='rounded-xl border border-border bg-background p-3'>
                {React.createElement(icon, { className: 'size-5 text-primary', strokeWidth: 2.2 })}
                <p className='mt-3 text-xs font-medium text-muted'>{label}</p>
                <p className='mt-1 truncate text-sm font-bold text-text'>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {fitnessDetails.map(({ label, value, icon }) => (
          <div key={label} className='rounded-xl border border-border bg-card p-5'>
            <div className='flex items-center justify-between gap-3'>
              <div>
                <p className='text-sm font-medium text-muted'>{label}</p>
                <p className='mt-2 text-2xl font-bold text-text'>{value}</p>
              </div>
              <div className='flex size-11 items-center justify-center rounded-lg bg-input'>
                {React.createElement(icon, { className: 'size-5 text-primary', strokeWidth: 2.2 })}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className='rounded-2xl border border-border bg-card p-5 sm:p-6'>
        <div className='flex items-center justify-between gap-3'>
          <div>
            <h2 className='text-xl font-bold text-text'>Fitness Summary</h2>
            <p className='mt-1 text-sm text-text-secondary'>Your current training profile at a glance.</p>
          </div>
          <Dumbbell className='hidden size-8 text-primary sm:block' />
        </div>

        <div className='mt-5 grid gap-3 sm:grid-cols-3'>
          <div className='rounded-xl bg-input p-4'>
            <p className='text-sm text-muted'>Primary Focus</p>
            <p className='mt-2 text-lg font-bold text-text'>{user?.goal || 'Set your goal'}</p>
          </div>
          <div className='rounded-xl bg-input p-4'>
            <p className='text-sm text-muted'>Training Level</p>
            <p className='mt-2 text-lg font-bold text-text'>{user?.experience || 'Add experience'}</p>
          </div>
          <div className='rounded-xl bg-input p-4'>
            <p className='text-sm text-muted'>Body Metrics</p>
            <p className='mt-2 text-lg font-bold text-text'>
              {user?.height && user?.weight ? `${user.height} cm / ${user.weight} kg` : 'Add metrics'}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
