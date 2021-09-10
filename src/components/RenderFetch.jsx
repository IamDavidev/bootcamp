const RenderFetch = ({ props }) => {
  return (
    <>
      {props.map(({ content, title, url, publishedAt, urlToImage }) => (
        <>
          <img src={urlToImage} key={url} alt={content} />
          <h4>{title}</h4>
          <p>
              {content}
          </p>
          <strong>
              {publishedAt}
          </strong>
          <hr/>
        </>
      ))}
    </>
  );
};

export default RenderFetch;
