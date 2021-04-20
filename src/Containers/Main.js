import MainPageNavBar from "./MainPageNavBar"
import "./Main.css"

export default function Main(){
    return(
  
        <div className="Main">
      <head>
            <meta charset="UTF-8"></meta>
            <link rel="stylesheet" href="Main.css"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      </head>
      <body>
            <MainPageNavBar />
            <h1>Welcome to the Group 14 Zoo</h1>
       </body>
        </div>
    )
}