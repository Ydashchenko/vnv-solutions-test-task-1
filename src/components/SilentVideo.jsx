import {useRef, useEffect} from "react"

export default function AutoPlaySilentVideo(props) {
    const videoRef = useRef();
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true
        }
    })
    return (
        <video
            className={props.className}
            ref={videoRef}
            preload="none"
            loop
            autoPlay
            muted
            playsInline>
            <source src={props.video} type="video/mp4"/>
        </video>
    );
}