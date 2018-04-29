import Layout from '../components/Layout';

const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog content for {props.url.query.title}</p>
  </div>
);

export default props => (
  <Layout>
    {/**
     * Passed props.url as a prop to <Content />
     * because the url props is only exposed to
     * the main component of the page.
     *
     * To make it available to another component,
     * you have to pass it as a prop to that component.
     */}
    <Content url={props.url} />
  </Layout>
);
