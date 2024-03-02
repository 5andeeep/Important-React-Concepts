import React from 'react'

const HOCComponent = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            const { name } = this.props;
            const upperCaseName = name.toUpperCase();

            return <WrappedComponent name={upperCaseName} />;
        }
    }
}

export default HOCComponent;