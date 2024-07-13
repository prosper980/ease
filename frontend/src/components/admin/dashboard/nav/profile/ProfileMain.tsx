import { Notification } from "./Notification";
import { ProfileImageAndNames } from "./ProfileImageAndName";
import { Settings } from "./Settings";

const ProfileMain = () => {

    return(
        <div className="flex space-x-4 items-center">
           <div>
                <Notification /> 
            </div>
           <div>
                <Settings />
           </div>
           <div>
                <ProfileImageAndNames />
            </div> 
        </div>
    )
}

export default ProfileMain;