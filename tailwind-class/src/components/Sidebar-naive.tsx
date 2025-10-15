export function SidebarNaive() {
    return (
        <div className="flex">
            <div className="transition-all ease-in-out duration-150  w-0 md:w-64 h-screen">
                 Sidebar
            </div>
            <div className="flex-1 bg-green-400">
                 Content
            </div>
        </div>
    )
}