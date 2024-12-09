export const Post = ({ data, classNames }) => {
  const postTime = data && new Date(data?.time);

  return (
    <div>
      {data && (
        <div className={classNames}>
          <p>type: {data.type}</p>
          <p>by: {data.by}</p>
          <p>text: {data.text}</p>
          <p>
            time: {postTime.getDate()}.{postTime.getMonth() + 1}.
            {postTime.getFullYear()}.
          </p>
        </div>
      )}
    </div>
  );
};
