import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const variants = {
  hero: "text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold font-roboto leading-tight mt-5",
  section: "text-2xl md:text-3xl font-semibold text-gray-700 mb-4",
  sub: "text-xl font-medium text-gray-600",
  small: "text-lg font-normal text-gray-500",
};

const tagVariants = {
  hero: "text-base md:text-subTitle font-semibold text-textGray",
  section: "text-sm md:text-base font-medium ",
  sub: "text-sm text-brand",
  small: "text-xs text-gray-400",
};

const Heading = ({
  level = 1,
  variant = "hero",
  firstText = "",
  secondText = "",
  tag = "",
  className = "",
  secondTextClassName = "",
  tagClassname = "",
}) => {
  const Tag = `h${level}`;

  return (
    <div>
      {tag && (
        <div className="inline-flex items-center mb-2">
          <div className="w-8 h-1 bg-brand mr-3"></div>
          <p className={classNames(tagVariants[variant], tagClassname)}>
            {tag}
          </p>
        </div>
      )}

      {React.createElement(
        Tag,
        { className: classNames(variants[variant], className) },
        <>
          {firstText}
          <br />
          <span className={secondTextClassName}>{secondText}</span>
        </>
      )}
    </div>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  variant: PropTypes.oneOf(["hero", "section", "sub", "small"]),
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
};

export default Heading;
