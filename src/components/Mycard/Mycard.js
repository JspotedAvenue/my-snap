import './Mycard.css';

    const Mycard = ({ title, children }) => (
      <div className="card">
        <h3>{title}</h3>
        <div className="muted">{children}</div>
      </div>
    );
    

export default Mycard;
