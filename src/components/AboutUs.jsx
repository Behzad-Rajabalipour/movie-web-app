import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        // Render a div element with inline styles for centering and text alignment
        return (
            <div style={{ margin: "0 auto", width: "50%", textAlign: "center" }}>
                {/* Displaying name and family */}
                name: Behzad
                <br />
                family: Alipour
            </div>
        );
    }
}

export default AboutUs;
