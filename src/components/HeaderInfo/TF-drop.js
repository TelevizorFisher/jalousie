import React from "react";
import { Link } from "react-router-dom";
import "./TF-drop.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { displayPartsToString } from "typescript";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export default class FDrop extends React.Component {
  state = {
    value: "+380954756441",
    value1: "1+380954756441",
    value2: "2+380954756441",
    value3: "3+380954756441",
    copied: false,
  };

  render() {
    return (
      <div class="dropdown">
        <input style={Style} value={this.state.value} />
        <CopyToClipboard
          className="menu__link-1 _goto-block"
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <Tooltip
            position="left"
            trigger="mouseenter "
            arrow="true"
            inertia="true"
            html={
              <div
                style={{
                  color: "#fff",
                }}
              >
                Натисніть, щоб скопіювати
              </div>
            }
          >
            <span> +380954756441</span>
          </Tooltip>
        </CopyToClipboard>
        {/* 1 */}
        <div class="dropdown-content">
          <input style={Style} value={this.state.value1} />
          <CopyToClipboard
            className="menu__link-1 "
            text={this.state.value1}
            onCopy={() => this.setState({ copied: true })}
          >
            <a> {this.state.value1}</a>
          </CopyToClipboard>
          {/* 2 */}
          <input style={Style} value={this.state.value2} />
          <CopyToClipboard
            className="menu__link-1 "
            text={this.state.value2}
            onCopy={() => this.setState({ copied: true })}
          >
            <a> {this.state.value2}</a>
          </CopyToClipboard>
          {/* 3 */}
          <input style={Style} value={this.state.value3} />
          <CopyToClipboard
            className="menu__link-1 "
            text={this.state.value3}
            onCopy={() => this.setState({ copied: true })}
          >
            <a> {this.state.value3}</a>
          </CopyToClipboard>
        </div>
        {this.state.copied ? (
          <span style={{ color: "red", position: "absolute" }}>Copied.</span>
        ) : null}
      </div>
    );
  }
}

const Style = {
  display: "none",
};
