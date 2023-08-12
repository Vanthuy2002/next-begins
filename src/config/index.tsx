import { Metadata } from 'next';

const metadata = (props: Metadata) => {
  return {
    title: props.title,
    desc: props.description,
    keyword: props.keywords,
  };
};
export { metadata };
