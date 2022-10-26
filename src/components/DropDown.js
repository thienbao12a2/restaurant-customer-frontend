import React from "react";
// import PropTypes from "prop-types";
import { Image, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DropDown extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.image ? (
          <Image
            alt={this.props.imageAlt}
            src={this.props.image}
            className={this.props.imageClass}
          />
        ) : (
          ""
        )}

        {this.props.faIcon && !this.props.image ? (
          <FontAwesomeIcon
            icon={this.props.faIcon}
            className={this.props.iconClass}
          />
        ) : (
          ""
        )}

        {this.props.title}

        {this.props.badgeValue ? (
          <Badge
            variant={this.props.badgeVariant}
            className={this.props.badgeClass}
          >
            {this.props.badgeValue}
          </Badge>
        ) : (
          ""
        )}
      </div>
    );
  }
}

// DropDown.propTypes = {
//   title: PropTypes.string.isRequired,
//   faIcon: PropTypes.object,
//   iconClass: PropTypes.string,
//   className: PropTypes.string,
//   image: PropTypes.string,
//   imageAlt: PropTypes.string,
//   imageClass: PropTypes.string,
//   badgeVariant: PropTypes.string,
//   badgeClass: PropTypes.string,
//   badgeValue: PropTypes.number,
// };

// DropDown.defaultProps = {
//   faIcon: "",
//   iconClass: "",
//   className: "",
//   imageAlt: "",
//   image: "",
//   imageClass: "",
//   badgeVariant: "",
//   badgeClass: "",
//   badgeValue: 0,
// };

export default DropDown;
