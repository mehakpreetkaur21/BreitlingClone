'use server';

import './Feature.css';
import Button from '../Button/Button';

type FeaturesProps = {
  img: string;
  contentHeading: string;
  highlightContent: string;
  contentPara: string;
  btn: string;
  href?: string;
};

function Features({
  img,
  contentHeading,
  highlightContent,
  contentPara,
  btn,
  href,
}: FeaturesProps) {
  return (
    <div className="mainContainer">
      <div className="innerContainer">
        <div className="imageContainer">
          <img
            src={img}
            alt={contentHeading}
            className="feature-image"
          />
        </div>

        <div className="content">
          <div className="contentContainer">
            <div className="highlightTextContainer">{highlightContent}</div>
            <div className="headingContainer">{contentHeading}</div>
          </div>
          <div className="paraContainer">{contentPara}</div>
        </div>

        <div className="buttonContainer">
          <Button
            href={href || '/discover'}
            title={btn}
            className="yellow-button"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
