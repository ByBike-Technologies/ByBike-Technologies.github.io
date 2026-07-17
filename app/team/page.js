'use client';

import Reveal from '../_components/Reveal';

const leads = [
  {
    name: 'Burak Karataş',
    role: 'Chief Executive Officer',
    image: '/picture_burak.png',
    alt: 'BURAK',
  },
  {
    name: 'Emre Harbutoğlu',
    role: 'Chief Technical Officer',
    image: '/picture_emre_h.png',
    alt: 'EMRE',
  },
  {
    name: 'Eren Dağsuyu',
    role: 'Chief Operation Officer',
    image: '/picture_eren.png',
    alt: 'EREN',
  },
  {
    name: 'Emre Aslan',
    role: 'Research and Development Manager',
    image: '/picture_emre.png',
    alt: 'EMRE ASLAN',
  },
];

const team = [
  {
    name: 'Berkay Şenyüz',
    role: 'Content Management Specialist',
    image: '/picture_berkay.png',
    alt: 'BERKAY',
  },
  {
    name: 'Ata Çorumluoğlu',
    role: 'Mechanical Engineer',
    image: '/picture_ata.png',
    alt: 'ATA',
  },
  {
    name: 'Çağan Kutlay',
    role: 'Mechanical Engineer',
    image: '/picture_cagan.png',
    alt: 'CAGAN',
  },
  {
    name: 'Egehan Ceylan',
    role: 'Electronic Design Intern',
    image: '/picture_egehan.png',
    alt: 'EGEHAN',
  },
  {
    name: 'Tolga Selimoğlu',
    role: 'Mechatronics Engineer',
    image: '/picture_tolga.png',
    alt: 'TOLGA',
  },
  {
    name: 'Abdullah Belikırık',
    role: 'Embedded Developer',
    image: '/picture_abdullah.png',
    alt: 'ABDULLAH',
  },
  {
    name: 'Javad Khalilov',
    role: 'Mobile Developer',
    image: '/picture_javad.png',
    alt: 'JAVAD',
  },
  {
    name: 'Vusal İsmayilov',
    role: 'Backend Developer',
    image: '/picture_vusal.png',
    alt: 'VUSAL',
  },
  {
    name: 'Gökdeniz Çakır',
    role: 'Frontend Developer',
    image: '/picture_gokdeniz.png',
    alt: 'GOKDENIZ',
  },
];

const MemberCard = ({ member, delay = 0, className = '' }) => (
  <Reveal delay={delay} className={className}>
    <div className='team-card flex flex-col items-center'>
      <div className='team-card__media w-28 sm:w-36 md:w-44 lg:w-52 mb-3'>
        <img src={member.image} alt={member.alt} loading='lazy' />
      </div>
      <h2 className='text-sm sm:text-base font-semibold text-bybikeBlack'>
        {member.name}
      </h2>
      <h3 className='text-xs text-center sm:text-sm text-bbMuted'>{member.role}</h3>
    </div>
  </Reveal>
);

const page = () => {
  return (
    <main className='bg-white'>
      <section className='bb-page-hero flex flex-col gap-2 justify-center items-center h-64 sm:h-72 px-4'>
        <Reveal>
          <p className='bb-label mb-2'>People</p>
          <h1 className='bb-title text-3xl md:text-5xl text-center'>
            Our <span className='text-bybikeBlue'>team</span>
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className='bb-subtitle text-center w-11/12 sm:w-auto md:text-lg mt-1'>
            Young and determined, with one goal in mind.
          </p>
        </Reveal>
      </section>

      <section className='px-4 sm:px-6'>
        <Reveal>
          <h2 className='bb-title text-center mt-14 text-3xl sm:text-4xl'>
            Leads
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <div className='h-px bg-bybikeBlue/40 mt-4 mb-10 max-w-xs mx-auto' />
        </Reveal>

        <div className='max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 py-6 place-items-center'>
          {leads.map((member, index) => (
            <MemberCard
              key={member.name}
              member={member}
              delay={index * 70}
              className={index === 3 ? 'sm:col-start-2' : ''}
            />
          ))}
        </div>
      </section>

      <section className='px-4 sm:px-6 pb-16'>
        <Reveal>
          <h2 className='bb-title text-center mt-14 text-3xl sm:text-4xl'>
            Team
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <div className='h-px bg-bbBorder mt-4 mb-10 max-w-xs mx-auto' />
        </Reveal>

        <div className='max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 py-6 place-items-center'>
          {team.map((member, index) => (
            <MemberCard
              key={member.name}
              member={member}
              delay={index * 55}
              className={
                index === team.length - 1
                  ? 'col-span-2 justify-self-center sm:col-span-1'
                  : ''
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
