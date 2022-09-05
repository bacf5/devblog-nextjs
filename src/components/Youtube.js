export default function Youtube(id) {
  return (
    <div className="">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay;"
        title="Embedded from Youtube"
        className=""
      />
    </div>
  );
}
