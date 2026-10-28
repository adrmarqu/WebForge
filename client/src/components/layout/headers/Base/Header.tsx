const Header = ({redir = "/"}: {redir?: string}) =>
{
    return (
    <header>
        Este es el header en {redir}
    </header>
    );
};

export default Header;