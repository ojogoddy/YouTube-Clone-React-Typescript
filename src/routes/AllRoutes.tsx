import {createBrowserRouter} from "react-router-dom"
import { WebLayout } from "../component/layout/WebLayout"
import Shorts from "../pages/Shorts"
import Subscription from "../pages/Subscription"
import Library from "../pages/Library"
import History from "../pages/History"
import YourVideo from "../pages/YourVideos"
import WatchLater from "../pages/WatchLater"
import LikedVideo from "../pages/LikedVideo"
import Trending from "../pages/Trending"
import Music from "../pages/Music"
import Gaming from "../pages/Gaming"
import News from "../pages/News"
import Sports from "../pages/Sports"
import YPremium from "../pages/YPremium"
import YMusic from "../pages/YMusic"
import YKids from "../pages/YKids"
import YStudio from "../pages/YStudio"
import Settings from "../pages/Settings"
import ReportHistory from "../pages/ReportHistory"
import Help from "../pages/Help"
import Feedback from "../pages/Feedback"
import HomeScreen from "../pages/HomeScreen"
import DetailedVideo from "../pages/DetailedVideo"

export const Index = createBrowserRouter([
    {
        path: "/",
        element: <WebLayout/>,
        children:[
            {
                index:true,
                element:<HomeScreen />
            },
            {
                path:"shorts",
                element: <Shorts />
            },
            {
                path:"subscription",
                element: <Subscription />
            },
            {
                path:"watch/:id",
                element: <DetailedVideo />
            },
            {
                path:"detailedVideo",
                element: <DetailedVideo />
            },
            {
                path:"library",
                element: <Library />
            },
            {
                path:"history",
                element: <History />
            },
            {
                path:"yourVideo",
                element: <YourVideo />
            },
            {
                path:"watchLater",
                element: <WatchLater />
            },
            {
                path:"likedVideo",
                element: <LikedVideo />
            },
            {
                path:"trending",
                element: <Trending />
            },
            {
                path:"music",
                element: <Music />
            },
            {
                path:"gaming",
                element: <Gaming />
            },
            {
                path:"news",
                element: <News/>
            },
            {
                path:"sports",
                element: <Sports />
            },
            {
                path:"youtubePremium",
                element: <YPremium />
            },
            {
                path:"youtubePremium",
                element: <YStudio/>
            },
            {
                path:"youtubeMusic",
                element: <YMusic />
            },
            {
                path:"youtubeKids",
                element: <YKids />
            },
            {
                path:"settings",
                element: <Settings />
            },
            {
                path:"reportHistory",
                element: <ReportHistory />
            },
            {
                path:"help",
                element: <Help />
            },
            {
                path:"feedback",
                element: <Feedback />
            },
        ]
    },
    
])
export default Index