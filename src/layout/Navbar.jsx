export default function Navbar ({children, brand}) {
    return <nav>

        <div className="brand">{brand}</div>
        {children}
    </nav>
}