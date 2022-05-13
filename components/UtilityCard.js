import Link from 'next/link';
export default function UtilityCard(prop) {
  const cards = prop.tools.map((tool) => {
    return (
      <Link href={tool.href}>
        <div className="col 4">
          <div className="card">
            <img
              src={tool.ImageSrc}
              className="card-img-top"
              alt={tool.ImageText}
            />
            <div className="card-body">
              <h5 className="card-title">{tool.Title}</h5>
              <p className="card-text">{tool.Description}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">{cards}</div>
    </div>
  );
}
