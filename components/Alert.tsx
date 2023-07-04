import { useCallback, useEffect, useRef, useState } from "react";
import classes from "./Alert.module.scss";
import { IoClose } from "react-icons/io5";
import { BiError } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlineNoteAlt } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { useAppStore } from "../lib/store";


const Alert: React.FC = () => {
    let { alertExists } = useAppStore()
    let { alert } = useAppStore()
    const { clearAlert } = useAppStore()

    let [timeElapsed, setTimeElapsed] = useState<number>(0)

    const closeAlert = () => {
        clearAlert()
        stopTimer()
    }

    let newTimeElapsed = useRef<null | NodeJS.Timer>(null)

    const startTimer = () => {
        if (newTimeElapsed.current !== null) {
            return;
        }

        newTimeElapsed.current = setInterval(() => {
            setTimeElapsed(prevState => prevState + 10)
        }, 10)
    }

    const stopTimer = useCallback(() => {
        if (newTimeElapsed.current) {
            clearInterval(newTimeElapsed.current)
            setTimeElapsed(0)
            clearAlert()
            newTimeElapsed.current = null
        }
    }, [clearAlert])

    let alertBg = alert.type === "success" 
        ? "#23AC00" : alert.type === "info"
        ? "#213F7D" : alert.type === "warning"
        ? "#FAD200" : "#EB1414"

    let timeDifference = timeElapsed > 3000 ? 0 : timeElapsed

    let lineWidth = 100 - ((timeDifference / 3000) * 100)
        
    useEffect(() => {

        return () => {
            if (newTimeElapsed.current !== null) {
                clearInterval(newTimeElapsed.current)
            }
        }
    }, [])

    useEffect(() => {
        if (alert.message) {
            startTimer()
        }
    }, [alert.message])

    useEffect(() => {
        if (timeElapsed >= 3000) {
            stopTimer()
        }
        
    }, [timeElapsed, stopTimer])


    
    if (!alertExists) return <></>
    return (
        <div className="w-[95%] md:w-[500px] fixed top-20 md:top-28 left-[50%] translate-x-[-50%] z-[900] rounded-md shadow-alert">
            <div className="h-[2px] float-right bg-lightBlue" style={{width: `${lineWidth}%`}}></div>
            <div className="w-full h-[50px] bg-white flex items-stretch">
                <div style={{ background: alertBg }} className="w-[15%] md:w-[10%] h-full flex-none grid place-items-center">
                    <span className="text-white w-full aspect-square grid place-items-center">
                        {
                            alert.type === "success" ? (
                                <BsCheck2Circle className="text-[30px] bg-transparent text-white" />
                            ) : alert.type === "info" ? (
                                <MdOutlineNoteAlt className="text-[30px] bg-transparent text-white" />
                            ) : alert.type === "warning" ? (
                                <RiErrorWarningLine className="text-[30px] bg-transparent text-white" />
                            ) : <BiError className="text-[30px] bg-transparent text-white" />
                        }
                    </span>
                </div>
                <div className="flex-1 h-full px-[0.625rem] md:px-4 flex items-center font-workSans text-xs md:text-sm text-grey">
                    <p>{ alert.message }</p>
                </div>
                <div className="w-auto h-full flex-none flex items-center px-[0.625rem]">
                    <span onClick={closeAlert} className="w-full h-full text-red grid place-items-center">
                        <IoClose className="text-[30px] md:text-xl transition-all duration-200 hover:scale(1.3) focus:scale(1.3) active:scale(0.9)" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Alert