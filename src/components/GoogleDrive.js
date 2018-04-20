import React, { Component } from 'react';

class GoogleDrive extends Component {
  render() {
    return (
      <div className="drive">
        <h1>GoogleDrive</h1>
        <a href="https://drive.google.com/open?id=1Ekqu2sXamybpZ3ChsJtCxNM2ADSC-fJq" target="_blank">Drive Link</a>
        <div className="embedded">

          <iframe src="https://drive.google.com/embeddedfolderview?id=1Ekqu2sXamybpZ3ChsJtCxNM2ADSC-fJqgrid" className="google-d"></iframe>

        </div>

      </div>
    );
  }
}

export default GoogleDrive;
