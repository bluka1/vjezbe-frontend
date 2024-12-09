export const Post = ({ data, kid }) => {
  const postTime = data && new Date(data?.time);
  const kidTime = kid && new Date(kid?.time);

  return (
    <div>
      {data && (
        <div className="post">
          <p>type: {data.type}</p>
          <p>by: {data.by}</p>
          <p>text: {data.text}</p>
          <p>
            time: {postTime.getDate()}.{postTime.getMonth() + 1}.
            {postTime.getFullYear()}.
          </p>
        </div>
      )}

      {kid && (
        <div className="kid">
          <p>type: {kid.type}</p>
          <p>by: {kid.by}</p>
          <p>text: {kid.text}</p>
          <p>
            time: {kidTime.getDate()}.{kidTime.getMonth() + 1}.
            {kidTime.getFullYear()}.
          </p>
        </div>
      )}
    </div>
  );
};
