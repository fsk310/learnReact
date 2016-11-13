var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
            {
                React.Children.map(this.props.children, function (child) {
                    return <li>{child}</li>;
                })
            }
            </ol>
        );
    }
});

React.render(
    <NotesList>
        <span>hello</span>
        <span>world</span>
    </NotesList>,
    document.body
);