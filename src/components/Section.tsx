import Element from './Element';

const Section = ({ content, id, title }: Frontier.Section) => (
  <div className="section">
    <h2>{title}</h2>
    {content.map((props, i) => (
      <Element {...props} prefix={id} key={i} />
    ))}
  </div>
);

export default Section;
