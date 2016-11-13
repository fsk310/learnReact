var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

React.render(
    <HelloMessage name="John" />,
    document.getElementById('example')
);