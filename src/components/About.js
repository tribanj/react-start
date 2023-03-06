import React,{useState} from 'react'

export default function About(){

    const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if (myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
            
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
    

}
