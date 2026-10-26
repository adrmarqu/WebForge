const Header = ({redir = "/"}: {redir?: string}) =>
{
    return (
    <header>
        {redir}
    </header>
    );
};

export default Header;