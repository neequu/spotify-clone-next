import { redirect } from 'next/navigation';

const page = ({ params }: { params: { id: string } }) => {
  if (params.id === '123') {
    redirect('/not-found');
  }
  return <div>{typeof params.id} hello</div>;
};

export default page;
