import BackToHome from './BackToHome'


export default function RoomAppConfirm(){
    return (
        <div className="outer-container">
         <div className="inner-container">
            <p>
               Thank you for submmiting your room application. <br/>
               We will review your room application and get back to you soon.
               <br/>
               <br/>
               Thank you!
               <br/>
               <BackToHome name='Done'/>
            </p>
         </div>
        </div>
    )
}