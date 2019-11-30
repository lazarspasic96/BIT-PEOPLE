import React from 'react'



const ActionButtons = (props) => {
    return (
        <>
            <div className='col s2 '>
                <ul className='buttons'>
                    <li><a><i className="material-icons" onClick={props.changeLayout}>view_module</i></a></li>
                    < li > <a><i className="material-icons" onClick={props.refresh}>refresh</i></a></li>
                </ul>

            </div >
        </>
    )


}

export default ActionButtons;