import HeaderNavButton from './HeaderNavButton';

const TheHeader = () => {
  return (
    <header className='p-layout-p'>
      <div className='flex gap-2'>
        <HeaderNavButton />
        <HeaderNavButton forward={true} />
      </div>
    </header>
  );
};

export default TheHeader;
