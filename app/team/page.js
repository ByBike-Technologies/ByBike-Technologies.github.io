'use client';

import Reveal from '../_components/Reveal';

const leads = [
  {
    name: 'Burak Karataş',
    role: 'Chief Executive Officer',
    image: '/picture_burak.png',
    alt: 'Burak Karataş',
  },
  {
    name: 'Emre Harbutoğlu',
    role: 'Chief Technical Officer',
    image: '/picture_emre_h.png',
    alt: 'Emre Harbutoğlu',
  },
  {
    name: 'Eren Dağsuyu',
    role: 'Chief Operation Officer',
    image: '/picture_eren.png',
    alt: 'Eren Dağsuyu',
  },
  {
    name: 'Emre Aslan',
    role: 'Research and Development Manager',
    image: '/picture_emre.png',
    alt: 'Emre Aslan',
  },
];

const rdTeam = [
  {
    name: 'Ata Çorumluoğlu',
    role: 'Mechanical Engineer',
    image: '/picture_ata.png',
    alt: 'Ata Çorumluoğlu',
  },
  {
    name: 'Çağan Kutlay',
    role: 'Mechanical Engineer',
    image: '/picture_cagan.png',
    alt: 'Çağan Kutlay',
  },
  {
    name: 'Egehan Ceylan',
    role: 'Electronic Design Intern',
    image: '/picture_egehan.png',
    alt: 'Egehan Ceylan',
  },
  {
    name: 'Tolga Selimoğlu',
    role: 'Mechatronics Engineer',
    image: '/picture_tolga.png',
    alt: 'Tolga Selimoğlu',
  },
  {
    name: 'Abdullah Belikırık',
    role: 'Embedded Developer',
    image: '/picture_abdullah.png',
    alt: 'Abdullah Belikırık',
  },
];

const softwareTeam = [
  {
    name: 'Javad Khalilov',
    role: 'Mobile Developer',
    image: '/picture_javad.png',
    alt: 'Javad Khalilov',
  },
  {
    name: 'Vusal İsmayilov',
    role: 'Backend Developer',
    image: '/picture_vusal.png',
    alt: 'Vusal İsmayilov',
  },
  {
    name: 'Gökdeniz Çakır',
    role: 'Frontend Developer',
    image: '/picture_gokdeniz.png',
    alt: 'Gökdeniz Çakır',
  },
  {
    name: 'Burak Uyanık',
    role: 'Full Stack Developer',
    image: '/picture_burak_uyanik.jpg',
    alt: 'Burak Uyanık',
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

const TeamSection = ({ title, label, members, dividerClass = 'bg-bbBorder' }) => (
  <section className='px-4 sm:px-6 pb-8'>
    <Reveal>
      <p className='bb-label text-center mt-10 mb-2'>{label}</p>
      <h2 className='bb-title text-center text-3xl sm:text-4xl'>{title}</h2>
    </Reveal>
    <Reveal delay={60}>
      <div className={`h-px ${dividerClass} mt-4 mb-10 max-w-xs mx-auto`} />
    </Reveal>

    <div className='max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 py-6 place-items-center'>
      {members.map((member, index) => (
        <MemberCard
          key={member.name}
          member={member}
          delay={index * 55}
          className={
            members.length % 3 === 1 && index === members.length - 1
              ? 'sm:col-start-2'
              : members.length % 2 === 1 && index === members.length - 1
                ? 'col-span-2 justify-self-center sm:col-span-1'
                : ''
          }
        />
      ))}
    </div>
  </section>
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

      <TeamSection
        label='Hardware & product'
        title='R&D Team'
        members={rdTeam}
        dividerClass='bg-bybikeBlue/40'
      />

      <TeamSection
        label='Platform & apps'
        title='Software Team'
        members={softwareTeam}
        dividerClass='bg-bbBorder'
      />

      <div className='pb-16' />
    </main>
  );
};

export default page;
