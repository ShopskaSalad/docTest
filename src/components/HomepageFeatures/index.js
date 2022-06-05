import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/docSafe1-1.svg').default,
    description: (
      <>
        Designed to be integrate easily.<br></br>
        Accept payments with single POST request.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/docFocus1-1.svg').default,
    description: (
      <>
        With PWI, merchants save huge amount of energy. <br></br> 
        Validation, infrastructure checks, or even design. <br></br>
        Redirect to the page, that is it.
      </>
    ),
  },
  {
    title: 'Secured by iyzico',
    Svg: require('@site/static/img/docIntegrate1-1.svg').default,
    description: (
      <>
        Secure payment infrastructure, 24/7 live support.<br></br> 
        Plus, ease in cancellations/refunds processes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <br></br>
      <br></br>
      <br></br>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
