const Recommendation = (props: { recommendation: any }) => {
  console.log('recommendation: ', props.recommendation);
  return (
    <div className='recommendation-wrapper'>
      <h1>{props.recommendation.name}</h1>
      <p>{props.recommendation.description}</p>
      {props.recommendation.src ? (
        <p>Dónde ver: {props.recommendation.src}</p>
      ) : null}
    </div>
  );
};

export default Recommendation;
