import Link from "next/link";

interface HeaderProps {
    font: {
        className: string;
    };
}
function Header({ font }: HeaderProps){
    return(
        <div className={`${font.className} links-parent`}>
            <header className="links">
                <div className="link">
                    <Link href = "">Works</Link>
                </div>

                <div className="link">
                    <Link href = "">Blog</Link>
                </div>

                <div className="link">
                    <Link href = "">Contact</Link>
                </div>
            </header>

        </div>
    )
}

export default Header
