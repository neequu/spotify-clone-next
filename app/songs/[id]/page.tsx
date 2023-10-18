const page = ({ params }: { params: { id: number } }) => {
  return <div>{params.id} hello</div>;
};

export default page;
