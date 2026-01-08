const WorkProcess = () => {
  return (
    <section className="process reveal">

      <h2>Notre processus de travail</h2>

      <div className="process-grid">
        <div className="step">
          <span>01</span>
          <h3>Analyse du besoin</h3>
          <p>
            Nous analysons votre projet, vos objectifs
            et vos contraintes afin de proposer la meilleure solution.
          </p>
        </div>

        <div className="step">
          <span>02</span>
          <h3>Conception & stratégie</h3>
          <p>
            Nous concevons une stratégie claire et un concept créatif
            aligné sur votre image.
          </p>
        </div>

        <div className="step">
          <span>03</span>
          <h3>Production</h3>
          <p>
            Mise en œuvre technique et artistique
            avec une équipe professionnelle.
          </p>
        </div>

        <div className="step">
          <span>04</span>
          <h3>Livraison & suivi</h3>
          <p>
            Livraison dans les délais, accompagnement
            et ajustements selon vos retours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
