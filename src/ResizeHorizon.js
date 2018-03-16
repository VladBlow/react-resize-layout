import * as React from "react";

class ResizeHorizon extends React.Component {
    render() {
        const id = this.props.id ? this.props.id : "";
        const className = this.props.className ? this.props.className : "";
        const width = this.props.width ? this.props.width : "0";
        const minWidth = this.props.minWidth ? this.props.minWidth : "0";
        const overflow = this.props.overflow ? this.props.overflow : "hidden";
        const show =
            this.props.show == false ||
            this.props.show == "false" ||
            this.props.show == "off" ||
            this.props.show == "none"
                ? "none"
                : "block";

        const style = {
            position: "relative",
            height: "100%",
            width: parseInt(width) + "px",
            float: "left",
            overflow: overflow,
            display: show
        };

        return (
            <div
                id={id}
                className={"resize-horizon " + className}
                data-min-width={parseInt(minWidth)}
                data-show={show}
                style={style}
            >
                {this.props.children}
            </div>
        );
    }
}

ResizeHorizon.myName = 'ResizeHorizon';

export default ResizeHorizon;