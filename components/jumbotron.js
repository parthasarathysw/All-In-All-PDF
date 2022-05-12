export default function Jumbotron() {
  return (
    <div className="px-5 mb-4 bg-light rounded-3" className={styles.jumbotron}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">
          <span className="text-danger">AIA PDF... </span> All in All solution
          for your PDF needs!
        </h1>
        <p className="col-md-8 fs-4">
          Try our powerfull PDF utilities to make your self more productive.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Please try now
        </button>
      </div>
    </div>
  );
}
