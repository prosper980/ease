

export const ProfileImageAndNames = () => {

    return (
        <div className="flex items-center space-x-3">
            <div className="">
                <img className="h-10 rounded-full" src="https://i.pravatar.cc/150?img=3" alt="profile-image" />
            </div>

            <div>
                <h2 className="text-slate-200 font-plus-font text-sm"> Username </h2>
            </div>
        </div>
    )

}